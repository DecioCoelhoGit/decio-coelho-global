/**
 * DCGLOBAL.AI™
 * Cognitive Identity™
 *
 * Lifecycle oficial da
 * Camada de Identidade Cognitiva.
 */

import {
  CognitiveIdentityStatus,
} from "./identity.types";

import { IDENTITY_VERSION } from "./identity.config";

export interface IdentityRuntime {
  version: string;
  status: CognitiveIdentityStatus | "initializing" | "loading" | "failed";
  initialized: boolean;
  identities: number;
  activeSessions: number;
  lastSync?: string;
}

export const identityRuntime: IdentityRuntime = {
  version: IDENTITY_VERSION,
  status: "initializing",
  initialized: false,
  identities: 0,
  activeSessions: 0,
};

export function initializeIdentity(): IdentityRuntime {
  identityRuntime.status = "loading";
  identityRuntime.initialized = true;
  return identityRuntime;
}

export function activateIdentity(): IdentityRuntime {
  identityRuntime.status = "active";
  identityRuntime.lastSync = new Date().toISOString();
  return identityRuntime;
}

export function pauseIdentity(): IdentityRuntime {
  identityRuntime.status = "inactive";
  return identityRuntime;
}

export function failIdentity(): IdentityRuntime {
  identityRuntime.status = "failed";
  return identityRuntime;
}

export function resetIdentity(): IdentityRuntime {
  identityRuntime.status = "initializing";
  identityRuntime.initialized = false;
  identityRuntime.identities = 0;
  identityRuntime.activeSessions = 0;
  identityRuntime.lastSync = undefined;
  return identityRuntime;
}

export function getIdentityRuntime(): IdentityRuntime {
  return identityRuntime;
}

export function isIdentityActive(): boolean {
  return identityRuntime.status === "active";
}
