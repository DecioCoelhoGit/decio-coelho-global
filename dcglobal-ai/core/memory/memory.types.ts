/**
 * DCGLOBAL.AI™
 * Cognitive Memory™
 *
 * Tipagens oficiais da Camada de Memória
 * do Sistema Operacional Cognitivo Vivo.
 */

/**
 * Estados da memória.
 */
export type MemoryStatus =
  | "created"
  | "initializing"
  | "ready"
  | "indexing"
  | "learning"
  | "updating"
  | "snapshotting"
  | "restoring"
  | "stopping"
  | "stopped"
  | "failed";

/**
 * Tipos de memória.
 */
export type MemoryType =
  | "working"
  | "long-term"
  | "semantic"
  | "episodic"
  | "cache";

/**
 * Prioridade.
 */
export type MemoryPriority =
  | "low"
  | "normal"
  | "high"
  | "critical";

/**
 * Categoria.
 */
export type MemoryCategory =
  | "knowledge"
  | "event"
  | "agent"
  | "object"
  | "workflow"
  | "kernel"
  | "system"
  | "analytics"
  | "user"
  | "custom";

/**
 * Contexto.
 */
export interface MemoryContext {
  origin?: string;
  module?: string;
  agent?: string;
  workflow?: string;
  session?: string;
  correlationId?: string;
  environment?: string;
  metadata?: Record<string, unknown>;
}

/**
 * Registro de memória.
 */
export interface MemoryRecord<T = unknown> {
  id: string;
  type: MemoryType;
  category: MemoryCategory;
  priority: MemoryPriority;

  title: string;
  description?: string;

  data: T;

  tags?: string[];

  context?: MemoryContext;

  version: string;

  createdAt: string;
  updatedAt?: string;
  expiresAt?: string;
}

/**
 * Snapshot.
 */
export interface MemorySnapshot {
  id: string;
  createdAt: string;
  version: string;

  records: number;

  checksum?: string;
}

/**
 * Estatísticas.
 */
export interface MemoryMetrics {
  totalRecords: number;
  workingMemory: number;
  longTermMemory: number;
  semanticMemory: number;
  episodicMemory: number;
  cacheEntries: number;

  snapshots: number;

  searches: number;
  hits: number;
  misses: number;
}

/**
 * Runtime.
 */
export interface MemoryRuntime {
  id: string;

  version: string;

  status: MemoryStatus;

  initializedAt?: string;

  metrics: MemoryMetrics;
}

/**
 * Saúde.
 */
export interface MemoryHealth {
  status:
    | "healthy"
    | "degraded"
    | "failed";

  runtimeStatus: MemoryStatus;

  totalRecords: number;

  issues: string[];

  checkedAt: string;
}
