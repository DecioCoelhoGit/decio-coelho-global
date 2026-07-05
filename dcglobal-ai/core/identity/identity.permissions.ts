/**
 * DCGLOBAL.AI™
 * Cognitive Identity™
 *
 * Permissions oficiais da
 * Camada de Identidade Cognitiva.
 */

import { CognitivePermission } from "./identity.types";

export const identityPermissions: CognitivePermission[] = [];

export function registerPermission(
  permission: CognitivePermission
): CognitivePermission {
  identityPermissions.push(permission);
  return permission;
}

export function listPermissions(): CognitivePermission[] {
  return [...identityPermissions];
}

export function findPermission(
  id: string
): CognitivePermission | undefined {
  return identityPermissions.find(
    permission => permission.id === id
  );
}

export function hasPermission(
  permissions: string[],
  permissionId: string
): boolean {
  return permissions.includes(permissionId);
}

export function clearPermissions(): void {
  identityPermissions.length = 0;
}

export function countPermissions(): number {
  return identityPermissions.length;
}
