/**
 * DCGLOBAL.AI™
 * Cognitive Identity™
 *
 * Search oficial da Camada
 * de Identidade Cognitiva.
 */

import { CognitiveIdentity } from "./identity.types";
import { identityStore } from "./identity.store";

export interface IdentitySearchQuery {
  text?: string;
  type?: CognitiveIdentity["type"];
  status?: CognitiveIdentity["status"];
  role?: CognitiveIdentity["roles"][number];
  organization?: string;
}

export function searchIdentities(
  query: IdentitySearchQuery
): CognitiveIdentity[] {
  return identityStore.list().filter(identity => {
    if (query.type && identity.type !== query.type) {
      return false;
    }

    if (query.status && identity.status !== query.status) {
      return false;
    }

    if (query.role && !identity.roles.includes(query.role)) {
      return false;
    }

    if (
      query.organization &&
      identity.organization !== query.organization
    ) {
      return false;
    }

    if (query.text) {
      const text = query.text.toLowerCase();

      return (
        identity.name.toLowerCase().includes(text) ||
        identity.email?.toLowerCase().includes(text) ||
        identity.id.toLowerCase().includes(text)
      );
    }

    return true;
  });
}

export function findIdentityByEmail(
  email: string
): CognitiveIdentity | undefined {
  return identityStore
    .list()
    .find(identity => identity.email === email);
}

export function findIdentityByName(
  name: string
): CognitiveIdentity[] {
  const normalized = name.toLowerCase();

  return identityStore.list().filter(identity =>
    identity.name.toLowerCase().includes(normalized)
  );
}
