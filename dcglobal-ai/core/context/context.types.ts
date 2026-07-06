/**
 * DCGLOBAL.AI™
 * Cognitive Context™
 *
 * Tipos oficiais da Camada
 * de Contexto Cognitivo.
 */

export type ContextStatus =
  | "active"
  | "inactive"
  | "expired"
  | "archived"
  | "failed";

export type ContextType =
  | "user"
  | "session"
  | "conversation"
  | "environment"
  | "organization"
  | "location"
  | "temporal"
  | "execution"
  | "agent"
  | "system";

export type ContextPriority =
  | "low"
  | "normal"
  | "high"
  | "critical";

export interface ContextRecord {
  id: string;
  type: ContextType;
  status: ContextStatus;
  priority: ContextPriority;

  name: string;
  description: string;

  actor?: string;
  sessionId?: string;
  organization?: string;
  location?: string;

  metadata: Record<string, unknown>;

  createdAt: string;
  updatedAt: string;
  expiresAt?: string;
}

export interface ContextIndex {
  id: string;
  recordId: string;
  keywords: string[];
  tags: string[];
  score: number;
  indexedAt: string;
}

export interface ContextCacheEntry {
  key: string;
  record: ContextRecord;
  expiresAt: number;
  ttl: number;
}

export interface ContextSnapshot {
  timestamp: string;
  totalContexts: number;
  activeContexts: number;
  archivedContexts: number;
  indexedContexts: number;
  failedContexts: number;
  status: "healthy" | "degraded" | "failed";
}

export interface ContextAudit {
  id: string;
  action: string;
  contextId: string;
  actor: string;
  success: boolean;
  timestamp: string;
  metadata: Record<string, unknown>;
}

export interface ContextSearchQuery {
  text?: string;
  type?: ContextType;
  status?: ContextStatus;
  priority?: ContextPriority;
  actor?: string;
  location?: string;
  organization?: string;
}

export interface ContextSearchResult {
  record: ContextRecord;
  score: number;
}
