/**
 * DCGLOBAL.AI™
 * Cognitive Identity™
 *
 * Store oficial da Camada
 * de Identidade Cognitiva.
 */

import { CognitiveIdentity } from "./identity.types";

export class IdentityStore {
  private identities = new Map<string, CognitiveIdentity>();

  add(identity: CognitiveIdentity): CognitiveIdentity {
    this.identities.set(identity.id, identity);
    return identity;
  }

  get(id: string): CognitiveIdentity | undefined {
    return this.identities.get(id);
  }

  update(
    id: string,
    changes: Partial<CognitiveIdentity>
  ): CognitiveIdentity | undefined {
    const current = this.identities.get(id);

    if (!current) {
      return undefined;
    }

    const updated: CognitiveIdentity = {
      ...current,
      ...changes,
      updatedAt: new Date().toISOString(),
    };

    this.identities.set(id, updated);

    return updated;
  }

  remove(id: string): boolean {
    return this.identities.delete(id);
  }

  list(): CognitiveIdentity[] {
    return Array.from(this.identities.values());
  }

  listActive(): CognitiveIdentity[] {
    return this.list().filter(
      identity => identity.status === "active"
    );
  }

  findByType(
    type: CognitiveIdentity["type"]
  ): CognitiveIdentity[] {
    return this.list().filter(
      identity => identity.type === type
    );
  }

  findByRole(
    role: CognitiveIdentity["roles"][number]
  ): CognitiveIdentity[] {
    return this.list().filter(
      identity => identity.roles.includes(role)
    );
  }

  exists(id: string): boolean {
    return this.identities.has(id);
  }

  count(): number {
    return this.identities.size;
  }

  clear(): void {
    this.identities.clear();
  }
}

export const identityStore = new IdentityStore();
