/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Dispatcher oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningEvent,
  ReasoningEventType,
  emitReasoningEvent,
} from "./reasoning.event";

export type ReasoningEventHandler =
  (event: ReasoningEvent) => void;

const reasoningHandlers:
  Map<ReasoningEventType, ReasoningEventHandler[]> =
  new Map();

export function registerReasoningHandler(
  type: ReasoningEventType,
  handler: ReasoningEventHandler
): void {
  const handlers =
    reasoningHandlers.get(type) ?? [];

  handlers.push(handler);
  reasoningHandlers.set(type, handlers);
}

export function dispatchReasoningEvent(
  reasoningId: string,
  type: ReasoningEventType,
  actor = "reasoning-dispatcher",
  metadata: Record<string, unknown> = {}
): ReasoningEvent {
  const event = emitReasoningEvent(
    reasoningId,
    type,
    actor,
    metadata
  );

  const handlers =
    reasoningHandlers.get(type) ?? [];

  for (const handler of handlers) {
    handler(event);
  }

  return event;
}

export function listReasoningHandlers(
  type: ReasoningEventType
): ReasoningEventHandler[] {
  return [
    ...(reasoningHandlers.get(type) ?? []),
  ];
}

export function clearReasoningHandlers(
  type?: ReasoningEventType
): void {
  if (type) {
    reasoningHandlers.delete(type);
    return;
  }

  reasoningHandlers.clear();
}

export function countReasoningHandlers(
  type?: ReasoningEventType
): number {
  if (type) {
    return (
      reasoningHandlers.get(type)?.length ?? 0
    );
  }

  return Array.from(
    reasoningHandlers.values()
  ).reduce(
    (total, handlers) =>
      total + handlers.length,
    0
  );
}
