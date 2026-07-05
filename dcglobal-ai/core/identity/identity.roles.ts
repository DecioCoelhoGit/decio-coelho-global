/**
 * DCGLOBAL.AI™
 * Cognitive Identity™
 *
 * Roles oficiais da
 * Camada de Identidade Cognitiva.
 */

import { CognitiveRole } from "./identity.types";

export const identityRoles: CognitiveRole[] = [];

export function registerRole(
  role: CognitiveRole
): CognitiveRole {
  identityRoles.push(role);
  return role;
}

export function listRoles(): CognitiveRole[] {
  return [...identityRoles];
}

export function findRole(
  id: string
): CognitiveRole | undefined {
  return identityRoles.find(
    role => role.id === id
  );
}

export function hasRole(
  roles: string[],
  roleId: string
): boolean {
  return roles.includes(roleId);
}

export function removeRole(
  id: string
): boolean {
  const index = identityRoles.findIndex(
    role => role.id === id
  );

  if (index === -1) {
    return false;
  }

  identityRoles.splice(index, 1);
  return true;
}

export function clearRoles(): void {
  identityRoles.length = 0;
}

export function countRoles(): number {
  return identityRoles.length;
}
