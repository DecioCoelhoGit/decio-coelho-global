/**
 * ---------------------------------------------------------
 * DCGLOBAL.AI™
 * Cognitive Object Model™
 * Type Definitions
 * ---------------------------------------------------------
 *
 * Projeto:
 * Décio Coelho Digital Cognitivo™
 *
 * Método:
 * HIPO Cognitivo™
 *
 * Engenharia do Conhecimento Vivo™
 * ---------------------------------------------------------
 */

/**
 * Status possíveis do ciclo de vida
 */
export type CognitiveObjectStatus =
    | "draft"
    | "active"
    | "inactive"
    | "archived"
    | "deprecated"
    | "deleted";

/**
 * Visibilidade
 */
export type CognitiveVisibility =
    | "public"
    | "private"
    | "internal"
    | "restricted";

/**
 * Controle de acesso
 */
export type CognitiveAccessLevel =
    | "open"
    | "protected"
    | "confidential";

/**
 * Categoria genérica
 */
export type CognitiveCategory = string;

/**
 * Tipo do objeto cognitivo
 */
export type CognitiveType = string;

/**
 * Idioma
 */
export type LanguageCode =
    | "pt-BR"
    | "en-US"
    | "es-ES"
    | string;

/**
 * UUID
 */
export type UUID = string;

/**
 * Identificador Cognitivo
 */
export type CognitiveId = string;

/**
 * Timestamp ISO-8601
 */
export type ISODateTime = string;

/**
 * Domínio de conhecimento
 */
export type KnowledgeDomain = string;

/**
 * Nome de módulo
 */
export type ModuleName = string;

/**
 * Nome de projeto
 */
export type ProjectName = string;

/**
 * Nome de agente
 */
export type AgentName = string;

/**
 * Nome de workflow
 */
export type WorkflowName = string;

/**
 * Nome de Engine
 */
export type EngineName = string;

/**
 * Nome de Evento
 */
export type EventName = string;

/**
 * Tags
 */
export type TagList = string[];

/**
 * Palavras-chave
 */
export type KeywordList = string[];

/**
 * Metadados livres
 */
export type MetadataMap = Record<string, unknown>;

/**
 * Payload genérico
 */
export type Payload<T = Record<string, unknown>> = T;

/**
 * Lista genérica
 */
export type CognitiveCollection<T> = T[];

/**
 * Mapa Cognitivo
 */
export type CognitiveDictionary<T> = Record<string, T>;

/**
 * Peso semântico
 */
export type SemanticWeight = number;

/**
 * Índice de confiança
 */
export type ConfidenceScore = number;

/**
 * Versão semântica
 */
export type SemanticVersion = string;
