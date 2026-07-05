/**
 * DCGLOBAL.AI™
 * Cognitive Context™
 *
 * Tipagens oficiais da Camada de Consciência Contextual
 * do Sistema Operacional Cognitivo Vivo.
 */

export type ContextStatus =
  | "initializing"
  | "loading"
  | "active"
  | "updating"
  | "synchronized"
  | "degraded"
  | "paused"
  | "failed";

export type ContextScope =
  | "system"
  | "user"
  | "session"
  | "operational"
  | "temporal"
  | "cognitive"
  | "security"
  | "governance";

export interface SystemContext {
  version: string;
  environment: string;
  runtimeStatus: string;
  uptime?: number;
  health?: string;
}

export interface UserContext {
  id?: string;
  name?: string;
  role?: string;
  permissions?: string[];
  preferences?: Record<string, unknown>;
}

export interface SessionContext {
  id: string;
  startedAt: string;
  lastActivityAt?: string;
  activeGoal?: string;
  recentEvents?: string[];
}

export interface OperationalContext {
  activeModule?: string;
  activeWorkflow?: string;
  activeAgent?: string;
  currentTask?: string;
  priority?: "low" | "normal" | "high" | "critical";
}

export interface TemporalContext {
  timestamp: string;
  timezone?: string;
  date?: string;
  time?: string;
}

export interface CognitiveContext {
  intent?: string;
  focus?: string;
  relatedMemories?: string[];
  relatedEvents?: string[];
  objectives?: string[];
}

export interface ContextRecord<T = unknown> {
  id: string;
  scope: ContextScope;
  status: ContextStatus;
  key: string;
  value: T;
  version: string;
  createdAt: string;
  updatedAt?: string;
  metadata?: Record<string, unknown>;
}

export interface ContextRuntime {
  id: string;
  version: string;
  status: ContextStatus;
  initializedAt?: string;
  records: number;
}

export interface ContextHealth {
  status: "healthy" | "degraded" | "failed";
  runtimeStatus: ContextStatus;
  totalRecords: number;
  issues: string[];
  checkedAt: string;
}
