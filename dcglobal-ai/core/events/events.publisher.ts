/**
 * DCGLOBAL.AI™
 * Cognitive Events™
 *
 * Publisher oficial dos Eventos Cognitivos.
 * Responsável por publicar eventos,
 * persistir no Store e acionar o Dispatcher.
 */

import { randomUUID } from "crypto";

import {
  CognitiveEvent,
  CognitiveEventCategory,
  CognitiveEventPriority,
  CognitiveEventSource,
  CognitiveEventTarget,
  CognitiveEventContext,
  CognitiveEventMetadata,
} from "./events.types";

import { eventsStore } from "./events.store";
import { eventsDispatcher } from "./events.dispatcher";

export interface PublishEventParams<TPayload = Record<string, unknown>> {
  type: string;
  category: CognitiveEventCategory;
  source: CognitiveEventSource;
  target?: CognitiveEventTarget;
  priority?: CognitiveEventPriority;
  context?: CognitiveEventContext;
  metadata?: CognitiveEventMetadata;
  payload?: TPayload;
}

export async function publishEvent<TPayload = Record<string, unknown>>(
  params: PublishEventParams<TPayload>
): Promise<CognitiveEvent<TPayload>> {
  const now = new Date().toISOString();

  const event: CognitiveEvent<TPayload> = {
    id: randomUUID(),
    type: params.type,
    category: params.category,
    status: "published",
    priority: params.priority ?? "normal",
    source: params.source,
    target: params.target,
    context: params.context ?? {},
    metadata: {
      version: "1.0.0",
      retryCount: 0,
      ...params.metadata,
    },
    payload: params.payload,
    createdAt: now,
    publishedAt: now,
  };

  eventsStore.add(event as CognitiveEvent);

  await eventsDispatcher.dispatch(event as CognitiveEvent);

  event.status = "completed";
  event.completedAt = new Date().toISOString();

  return event;
}
