/**
 * DCGLOBAL.AI™
 * Cognitive Governance™
 *
 * Tipagens oficiais da Camada
 * de Governança Cognitiva.
 */

/**
 * Status da Governança.
 */
export type GovernanceStatus =
  | "initializing"
  | "loading"
  | "active"
  | "updating"
  | "synchronized"
  | "degraded"
  | "paused"
  | "failed";

/**
 * Escopo da Governança.
 */
export type GovernanceScope =
  | "system"
  | "memory"
  | "context"
  | "events"
  | "identity"
  | "security"
  | "agents"
  | "knowledge"
  | "intelligence";

/**
 * Níveis de risco.
 */
export type RiskLevel =
  | "low"
  | "medium"
  | "high"
  | "critical";

/**
 * Níveis de prioridade.
 */
export type GovernancePriority =
  | "low"
  | "normal"
  | "high"
  | "critical";

/**
 * Política Institucional.
 */
export interface GovernancePolicy {
  id: string;
  name: string;
  scope: GovernanceScope;
  description: string;
  enabled: boolean;
  version: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Regra Cognitiva.
 */
export interface GovernanceRule {
  id: string;
  policyId: string;
  name: string;
  condition: string;
  action: string;
  priority: GovernancePriority;
  enabled: boolean;
}

/**
 * Registro de Decisão.
 */
export interface GovernanceDecision {
  id: string;
  scope: GovernanceScope;
  policy: string;
  rule: string;
  approved: boolean;
  reason: string;
  createdAt: string;
}

/**
 * Registro de Auditoria.
 */
export interface GovernanceAudit {
  id: string;
  action: string;
  actor: string;
  scope: GovernanceScope;
  success: boolean;
  timestamp: string;
}

/**
 * Registro de Risco.
 */
export interface GovernanceRisk {
  id: string;
  title: string;
  description: string;
  level: RiskLevel;
  mitigated: boolean;
}

/**
 * Registro Genérico.
 */
export interface GovernanceRecord<T = unknown> {
  id: string;
  scope: GovernanceScope;
  status: GovernanceStatus;
  value: T;
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

/**
 * Runtime da Governança.
 */
export interface GovernanceRuntime {
  version: string;
  status: GovernanceStatus;
  initialized: boolean;
  activePolicies: number;
  activeRules: number;
  decisions: number;
  audits: number;
}

/**
 * Health Monitor.
 */
export interface GovernanceHealth {
  status: "healthy" | "degraded" | "failed";
  runtimeStatus: GovernanceStatus;
  totalPolicies: number;
  totalRules: number;
  totalDecisions: number;
  issues: string[];
  checkedAt: string;
}
