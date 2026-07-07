/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Event oficial da Camada
 * de Raciocínio Cognitivo.
 */

export type ReasoningEventType =
  | "created"
  | "queued"
  | "started"
  | "validated"
  | "integrated"
  | "completed"
  | "failed"
  | "archived";

export interface ReasoningEvent {
  id: string;
  reasoningId: string;
  type: ReasoningEventType;
  actor: string;
  timestamp: string;
  metadata?: Record<string, unknown>;
}

const reasoningEvents:
  ReasoningEvent[] = [];

export function emitReasoningEvent(
  reasoningId: string,
  type: ReasoningEventType,
  actor = "reasoning-system",
  metadata: Record<string, unknown> = {}
): ReasoningEvent {
  const event: ReasoningEvent = {
    id: `reasoning-event-${Date.now()}`,
    reasoningId,
    type,
    actor,
    timestamp: new Date().toISOString(),
    metadata,
  };

  reasoningEvents.push(event);

  return event;
}

export function listReasoningEvents():
  ReasoningEvent[] {
  return [...reasoningEvents];
}

export function findReasoningEvent(
  id: string
): ReasoningEvent | undefined {
  return reasoningEvents.find(
    event => event.id === id
  );
}

export function listReasoningEventsByReasoningId(
  reasoningId: string
): ReasoningEvent[] {
  return reasoningEvents.filter(
    event => event.reasoningId === reasoningId
  );
}

export function listReasoningEventsByType(
  type: ReasoningEventType
): ReasoningEvent[] {
  return reasoningEvents.filter(
    event => event.type === type
  );
}

export function clearReasoningEvents(): void {
  reasoningEvents.length = 0;
}

export function countReasoningEvents(): number {
  return reasoningEvents.length;
}
