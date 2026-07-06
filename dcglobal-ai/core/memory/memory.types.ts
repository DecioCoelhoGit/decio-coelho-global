/**
 * DCGLOBAL.AI™
 * Cognitive Memory™
 *
 * Tipos oficiais da Camada
 * de Memória Cognitiva.
 */

export type MemoryStatus =
  | "created"
  | "active"
  | "indexed"
  | "archived"
  | "deleted"
  | "failed";

export type MemoryType =
  | "short-term"
  | "long-term"
  | "working"
  | "semantic"
  | "episodic"
  | "procedural"
  | "institutional"
  | "organizational"
  | "executive"
  | "historical"
  | "context"
  | "agent"
  | "user"
  | "session"
  | "event"
  | "knowledge";

export type MemoryPriority =
  | "low"
  | "normal"
  | "high"
  | "critical";

export interface MemoryRecord {
  id: string;
  type: MemoryType;
  status: MemoryStatus;
  priority: MemoryPriority;
  title: string;
  content: string;
  source?: string;
  actor?: string;
  contextId?: string;
  eventId?: string;
  tags: string[];
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
  expiresAt?: string;
}

export interface MemoryIndex {
  id: string;
  recordId: string;
  keywords: string[];
  tags: string[];
  score: number;
  indexedAt: string;
}

export interface MemoryCacheEntry {
  key: string;
  record: MemoryRecord;
  expiresAt: number;
}

export interface MemorySnapshot {
  timestamp: string;
  totalRecords: number;
  activeRecords: number;
  archivedRecords: number;
  indexedRecords: number;
  failedRecords: number;
  status: "healthy" | "degraded" | "failed";
}

export interface MemoryAudit {
  id: string;
  action: string;
  recordId: string;
  actor: string;
  success: boolean;
  timestamp: string;
  metadata?: Record<string, unknown>;
}

export interface MemorySearchQuery {
  text?: string;
  type?: MemoryType;
  status?: MemoryStatus;
  priority?: MemoryPriority;
  tag?: string;
  actor?: string;
  source?: string;
}

export interface MemorySearchResult {
  record: MemoryRecord;
  score: number;
}
