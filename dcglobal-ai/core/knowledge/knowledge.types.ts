/**
 * DCGLOBAL.AI™
 * Cognitive Knowledge™
 *
 * Tipos oficiais da Camada
 * de Conhecimento Cognitivo.
 */

export type KnowledgeStatus =
  | "active"
  | "inactive"
  | "learning"
  | "validated"
  | "archived"
  | "failed";

export type KnowledgeType =
  | "fact"
  | "rule"
  | "concept"
  | "relationship"
  | "entity"
  | "document"
  | "memory"
  | "context"
  | "experience"
  | "decision"
  | "workflow"
  | "system";

export type KnowledgePriority =
  | "low"
  | "normal"
  | "high"
  | "critical";

export interface KnowledgeRecord {
  id: string;
  type: KnowledgeType;
  status: KnowledgeStatus;
  priority: KnowledgePriority;

  title: string;
  description: string;

  actor?: string;
  source?: string;

  contextId?: string;
  memoryId?: string;

  tags: string[];
  keywords: string[];

  confidence: number;
  relevance: number;

  metadata?: Record<string, unknown>;

  createdAt: string;
  updatedAt: string;
  validatedAt?: string;
}

export interface KnowledgeRelation {
  id: string;
  sourceId: string;
  targetId: string;
  relation: string;
  weight: number;
}

export interface KnowledgeGraph {
  nodes: number;
  edges: number;
  clusters: number;
}

export interface KnowledgeIndex {
  id: string;
  knowledgeId: string;
  keywords: string[];
  score: number;
}

export interface KnowledgeCacheEntry {
  key: string;
  record: KnowledgeRecord;
  expiresAt: number;
  ttl: number;
}

export interface KnowledgeSnapshot {
  timestamp: string;

  totalRecords: number;
  activeRecords: number;
  validatedRecords: number;

  indexes: number;
  cache: number;

  graph: KnowledgeGraph;

  status: "healthy" | "degraded" | "failed";
}

export interface KnowledgeAudit {
  id: string;
  action: string;

  knowledgeId?: string;

  actor: string;

  success: boolean;

  timestamp: string;

  metadata?: Record<string, unknown>;
}

export interface KnowledgeSearchQuery {
  text?: string;

  type?: KnowledgeType;

  status?: KnowledgeStatus;

  priority?: KnowledgePriority;

  tags?: string[];

  actor?: string;

  source?: string;

  minConfidence?: number;
}

export interface KnowledgeSearchResult {
  record: KnowledgeRecord;
  score: number;
}
