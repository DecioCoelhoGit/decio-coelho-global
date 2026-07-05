/**
 * DCGLOBAL.AI™
 * Cognitive Identity™
 *
 * Tipos oficiais da
 * Camada de Identidade Cognitiva.
 */

/**
 * Tipos de identidade.
 */
export type CognitiveIdentityType =
  | "human"
  | "ai"
  | "agent"
  | "organization"
  | "service"
  | "system";

/**
 * Status da identidade.
 */
export type CognitiveIdentityStatus =
  | "active"
  | "inactive"
  | "blocked"
  | "pending"
  | "archived";

/**
 * Níveis de confiança.
 */
export type CognitiveTrustLevel =
  | "low"
  | "medium"
  | "high"
  | "critical";

/**
 * Papéis oficiais.
 */
export type CognitiveRole =
  | "owner"
  | "administrator"
  | "manager"
  | "operator"
  | "auditor"
  | "reviewer"
  | "agent"
  | "user"
  | "guest";

/**
 * Permissão.
 */
export interface CognitivePermission {

  id: string;

  name: string;

  description?: string;

  scope: string;
}

/**
 * Papel.
 */
export interface CognitiveRoleDefinition {

  id: string;

  name: CognitiveRole;

  permissions: string[];

  description?: string;
}

/**
 * Identidade Cognitiva.
 */
export interface CognitiveIdentity {

  id: string;

  type: CognitiveIdentityType;

  status: CognitiveIdentityStatus;

  trust: CognitiveTrustLevel;

  name: string;

  email?: string;

  organization?: string;

  roles: CognitiveRole[];

  permissions: string[];

  metadata?: Record<string, unknown>;

  createdAt: string;

  updatedAt: string;
}

/**
 * Sessão.
 */
export interface CognitiveSession {

  id: string;

  identityId: string;

  startedAt: string;

  expiresAt?: string;

  active: boolean;
}

/**
 * Snapshot da Identidade.
 */
export interface IdentitySnapshot {

  timestamp: string;

  identities: number;

  active: number;

  blocked: number;

  sessions: number;

  status: "healthy" | "warning" | "critical";
}
