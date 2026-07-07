/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Tipos oficiais da Camada
 * de Raciocínio Cognitivo.
 */

export type ReasoningStatus =
  | "draft"
  | "active"
  | "evaluating"
  | "inferred"
  | "decided"
  | "explained"
  | "archived"
  | "failed";

export type ReasoningType =
  | "deductive"
  | "inductive"
  | "abductive"
  | "causal"
  | "temporal"
  | "probabilistic"
  | "strategic"
  | "semantic"
  | "contextual"
  | "multiagent"
  | "hybrid";

export type ReasoningPriority =
  | "low"
  | "normal"
  | "high"
  | "critical";

export interface ReasoningEvidence {
  id: string;
  source: string;
  content: string;
  weight: number;
  confidence: number;
  metadata?: Record<string, unknown>;
}

export interface ReasoningHypothesis {
  id: string;
  statement: string;
  confidence: number;
  evidenceIds: string[];
  status: "open" | "supported" | "rejected";
}

export interface ReasoningInference {
  id: string;
  inputIds: string[];
  output: string;
  confidence: number;
  method: ReasoningType;
}

export interface ReasoningDecision {
  id: string;
  conclusion: string;
  confidence: number;
  rationale: string;
  action?: string;
}

export interface ReasoningExplanation {
  id: string;
  summary: string;
  details: string;
  trace: string[];
}

export interface ReasoningStrategy {
  id: string;
  name: string;
  type: ReasoningType;
  description: string;
}

export interface ReasoningRecord {
  id: string;
  type: ReasoningType;
  status: ReasoningStatus;
  priority: ReasoningPriority;

  title: string;
  objective: string;

  actor?: string;
  source?: string;

  memoryIds?: string[];
  contextIds?: string[];
  knowledgeIds?: string[];

  evidence: ReasoningEvidence[];
  hypotheses: ReasoningHypothesis[];
  inferences: ReasoningInference[];

  decision?: ReasoningDecision;
  explanation?: ReasoningExplanation;
  strategy?: ReasoningStrategy;

  confidence: number;

  tags: string[];
  metadata?: Record<string, unknown>;

  createdAt: string;
  updatedAt: string;
}

export interface ReasoningAudit {
  id: string;
  action: string;
  reasoningId?: string;
  actor: string;
  success: boolean;
  timestamp: string;
  metadata?: Record<string, unknown>;
}

export interface ReasoningSnapshot {
  timestamp: string;
  totalRecords: number;
  activeRecords: number;
  decidedRecords: number;
  failedRecords: number;
  status: "healthy" | "degraded" | "failed";
}

export interface ReasoningGraph {
  nodes: number;
  edges: number;
  clusters: number;
}

export interface ReasoningSearchQuery {
  text?: string;
  type?: ReasoningType;
  status?: ReasoningStatus;
  priority?: ReasoningPriority;
  actor?: string;
  source?: string;
  tags?: string[];
  minConfidence?: number;
}

export interface ReasoningSearchResult {
  record: ReasoningRecord;
  score: number;
}
