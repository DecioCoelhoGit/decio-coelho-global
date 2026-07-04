/**
 * DCGLOBAL.AI™
 * Cognitive Object Model™ — COM
 *
 * O DNA Semântico da Engenharia do Conhecimento Vivo™
 *
 * Projeto: Décio Coelho Digital Cognitivo™
 * Método: HIPO Cognitivo™
 * Camada: Shared / Models
 * Versão: 1.0
 */

export type CognitiveObjectStatus =
  | "draft"
  | "active"
  | "inactive"
  | "archived"
  | "deprecated"
  | "deleted";

export type CognitiveVisibility =
  | "public"
  | "private"
  | "internal"
  | "restricted";

export type CognitiveAccessLevel =
  | "open"
  | "protected"
  | "confidential";

export interface CognitiveMetadata {
  tags?: string[];
  language?: string;
  domain?: string;
  source?: string;
  author?: string;
  createdBy?: string;
  updatedBy?: string;
  confidence?: number;
  keywords?: string[];
  custom?: Record<string, unknown>;
}

export interface CognitiveRelationship {
  id: string;
  type: string;
  targetId: string;
  targetType: string;
  description?: string;
  weight?: number;
}

export interface CognitiveGovernance {
  visibility: CognitiveVisibility;
  accessLevel: CognitiveAccessLevel;
  auditRequired: boolean;
  owner?: string;
  policies?: string[];
}

export interface CognitiveLifecycle {
  status: CognitiveObjectStatus;
  version: string;
  createdAt: string;
  updatedAt: string;
  archivedAt?: string;
  deletedAt?: string;
}

export interface CognitiveContext {
  project?: string;
  module?: string;
  environment?: string;
  session?: string;
  user?: string;
  agent?: string;
  workflow?: string;
  memory?: string;
  graphNode?: string;
  custom?: Record<string, unknown>;
}

export interface CognitiveAudit {
  createdBy?: string;
  updatedBy?: string;
  reviewedBy?: string;
  approvedBy?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CognitiveObject<TPayload = Record<string, unknown>> {
  id: string;
  uuid: string;
  slug?: string;

  type: string;
  category?: string;
  title: string;
  summary?: string;
  description?: string;

  context: CognitiveContext;
  metadata: CognitiveMetadata;
  relationships: CognitiveRelationship[];
  governance: CognitiveGovernance;
  lifecycle: CognitiveLifecycle;
  audit?: CognitiveAudit;

  payload?: TPayload;
}
