/**
 * DCGLOBAL.AI™
 * Cognitive Events™
 *
 * Tipos oficiais dos Eventos Cognitivos
 * do Sistema Cognitivo Vivo.
 */

export type CognitiveEventStatus =
  | "created"
  | "queued"
  | "published"
  | "received"
  | "processing"
  | "completed"
  | "failed"
  | "archived";

export type CognitiveEventPriority =
  | "low"
  | "normal"
  | "high"
  | "critical";

export type CognitiveEventCategory =
  | "kernel"
  | "object"
  | "knowledge"
  | "graph"
  | "memory"
  | "agent"
  | "engine"
  | "workflow"
  | "dashboard"
  | "analytics"
  | "governance"
  | "security"
  | "evolution"
  | "legacy"
  | "infrastructure";

export interface CognitiveEventSource {
  id: string;
  name: string;
  type: string;
}

export interface CognitiveEventTarget {
  id?: string;
  name?: string;
  type?: string;
}

export interface CognitiveEventContext {
  project?: string;
  user?: string;
  agent?: string;
  workflow?: string;
  session?: string;
  environment?: string;
  correlationId?: string;
  causationId?: string;
  custom?: Record<string, unknown>;
}

export interface CognitiveEventMetadata {
  tags?: string[];
  version?: string;
  traceId?: string;
  retryCount?: number;
  createdBy?: string;
  custom?: Record<string, unknown>;
}

export interface CognitiveEvent<TPayload = Record<string, unknown>> {
  id: string;
  type: string;
  category: CognitiveEventCategory;
  status: CognitiveEventStatus;
  priority: CognitiveEventPriority;
  source: CognitiveEventSource;
  target?: CognitiveEventTarget;
  context: CognitiveEventContext;
  metadata: CognitiveEventMetadata;
  payload?: TPayload;
  createdAt: string;
  publishedAt?: string;
  receivedAt?: string;
  completedAt?: string;
  failedAt?: string;
  error?: string;
}

export type CognitiveEventHandler<TPayload = Record<string, unknown>> = (
  event: CognitiveEvent<TPayload>
) => void | Promise<void>;

export interface CognitiveEventSubscription {
  id: string;
  eventType: string;
  handlerName: string;
  enabled: boolean;
  createdAt: string;
  metadata?: Record<string, unknown>;
}
