/**
 * ---------------------------------------------------------
 * DCGLOBAL.AI
 * Cognitive Object Model™
 * Engenharia do Conhecimento Vivo™
 * ---------------------------------------------------------
 * Projeto:
 * Décio Coelho Digital Cognitivo™
 *
 * Método:
 * HIPO Cognitivo™
 *
 * Autor da Concepção:
 * Antônio Décio Ferreira Coelho
 *
 * Arquitetura Cognitiva:
 * OpenAI • ChatGPT
 * ---------------------------------------------------------
 */

export type CognitiveObjectStatus =
    | "draft"
    | "active"
    | "inactive"
    | "archived"
    | "deprecated"
    | "deleted";

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

    visibility:
        | "public"
        | "private"
        | "internal"
        | "restricted";

    accessLevel:
        | "open"
        | "protected"
        | "confidential";

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

export interface CognitiveObject {

    /**
     * Identidade
     */

    id: string;

    uuid: string;

    slug?: string;

    /**
     * Classificação
     */

    type: string;

    category?: string;

    title: string;

    summary?: string;

    description?: string;

    /**
     * Contexto Cognitivo
     */

    context: CognitiveContext;

    /**
     * Metadados
     */

    metadata: CognitiveMetadata;

    /**
     * Relacionamentos
     */

    relationships: CognitiveRelationship[];

    /**
     * Governança
     */

    governance: CognitiveGovernance;

    /**
     * Ciclo de Vida
     */

    lifecycle: CognitiveLifecycle;

    /**
     * Auditoria
     */

    audit?: CognitiveAudit;

    /**
     * Conteúdo
     */

    payload?: Record<string, unknown>;

}
