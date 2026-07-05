/**
 * DCGLOBAL.AI™
 * Cognitive Identity™
 *
 * Bootstrap oficial da
 * Camada de Identidade Cognitiva.
 */

import {
  IDENTITY_NAME,
  IDENTITY_VERSION,
} from "./identity.config";

import { getIdentityRegistry } from "./identity.registry";
import {
  initializeIdentity,
  activateIdentity,
  getIdentityRuntime,
} from "./identity.lifecycle";

import { checkIdentityHealth } from "./identity.health";
import { getIdentityMonitorSnapshot } from "./identity.monitor";

export interface IdentityBootstrap {
  initialized: boolean;
  name: string;
  version: string;
  registry: ReturnType<typeof getIdentityRegistry>;
  runtime: ReturnType<typeof getIdentityRuntime>;
  monitor: ReturnType<typeof getIdentityMonitorSnapshot>;
  health: ReturnType<typeof checkIdentityHealth>;
  startedAt: string;
}

let identityBootstrap: IdentityBootstrap | null = null;

export function bootstrapIdentity(): IdentityBootstrap {
  initializeIdentity();
  activateIdentity();

  identityBootstrap = {
    initialized: true,
    name: IDENTITY_NAME,
    version: IDENTITY_VERSION,
    registry: getIdentityRegistry(),
    runtime: getIdentityRuntime(),
    monitor: getIdentityMonitorSnapshot(),
    health: checkIdentityHealth(),
    startedAt: new Date().toISOString(),
  };

  return identityBootstrap;
}

export function getIdentityBootstrap():
  | IdentityBootstrap
  | null {
  return identityBootstrap;
}

export function isIdentityBootstrapped(): boolean {
  return identityBootstrap !== null;
}

export function resetIdentityBootstrap(): void {
  identityBootstrap = null;
}
