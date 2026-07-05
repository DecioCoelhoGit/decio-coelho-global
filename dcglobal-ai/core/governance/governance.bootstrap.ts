/**
 * DCGLOBAL.AI™
 * Cognitive Governance™
 *
 * Bootstrap oficial da Governança Cognitiva.
 * Responsável por inicializar todos os
 * componentes da camada Governance™.
 */

import { GOVERNANCE_NAME, GOVERNANCE_VERSION } from "./governance.config";
import { getGovernanceRegistry } from "./governance.registry";
import { initializeGovernance } from "./governance.lifecycle";
import { checkGovernanceHealth } from "./governance.health";
import { getGovernanceMonitorSnapshot } from "./governance.monitor";

export interface GovernanceBootstrap {
  initialized: boolean;
  name: string;
  version: string;
  registry: ReturnType<typeof getGovernanceRegistry>;
  monitor: ReturnType<typeof getGovernanceMonitorSnapshot>;
  health: ReturnType<typeof checkGovernanceHealth>;
  startedAt: string;
}

let governanceBootstrap: GovernanceBootstrap | null = null;

export function bootstrapGovernance(): GovernanceBootstrap {
  initializeGovernance();

  governanceBootstrap = {
    initialized: true,
    name: GOVERNANCE_NAME,
    version: GOVERNANCE_VERSION,
    registry: getGovernanceRegistry(),
    monitor: getGovernanceMonitorSnapshot(),
    health: checkGovernanceHealth(),
    startedAt: new Date().toISOString(),
  };

  return governanceBootstrap;
}

export function getGovernanceBootstrap():
  | GovernanceBootstrap
  | null {
  return governanceBootstrap;
}

export function isGovernanceBootstrapped(): boolean {
  return governanceBootstrap !== null;
}

export function resetGovernanceBootstrap(): void {
  governanceBootstrap = null;
}
