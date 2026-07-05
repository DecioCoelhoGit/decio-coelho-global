/**
 * DCGLOBAL.AI™
 * Cognitive Identity™
 *
 * Authorization oficial da
 * Camada de Identidade Cognitiva.
 */

import { CognitiveIdentity } from "./identity.types";
import { hasRole } from "./identity.roles";
import { hasPermission } from "./identity.permissions";

export interface AuthorizationRequest {
  identity: CognitiveIdentity;
  role?: string;
  permission?: string;
  resource?: string;
  action?: string;
}

export interface AuthorizationResult {
  authorized: boolean;
  reason: string;
  timestamp: string;
}

export function authorize(
  request: AuthorizationRequest
): AuthorizationResult {

  if (request.identity.status !== "active") {
    return deny("Identity inactive");
  }

  if (
    request.role &&
    !hasRole(request.identity.roles, request.role)
  ) {
    return deny("Required role not found");
  }

  if (
    request.permission &&
    !hasPermission(
      request.identity.permissions,
      request.permission
    )
  ) {
    return deny("Permission denied");
  }

  return allow();
}

function allow(): AuthorizationResult {
  return {
    authorized: true,
    reason: "Authorized",
    timestamp: new Date().toISOString(),
  };
}

function deny(
  reason: string
): AuthorizationResult {
  return {
    authorized: false,
    reason,
    timestamp: new Date().toISOString(),
  };
}

export function isAuthorized(
  request: AuthorizationRequest
): boolean {
  return authorize(request).authorized;
}
