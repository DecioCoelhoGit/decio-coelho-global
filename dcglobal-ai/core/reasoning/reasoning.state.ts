/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * State oficial da Camada
 * de Raciocínio Cognitivo.
 */

export type ReasoningState =
  | "created"
  | "queued"
  | "processing"
  | "validated"
  | "integrated"
  | "completed"
  | "failed"
  | "archived";

export interface ReasoningStateRecord {
  reasoningId: string;
  state: ReasoningState;
  previousState?: ReasoningState;
  changedAt: string;
  metadata?: Record<string, unknown>;
}

const reasoningStates:
  Map<string, ReasoningStateRecord> = new Map();

export function setReasoningState(
  reasoningId: string,
  state: ReasoningState,
  metadata: Record<string, unknown> = {}
): ReasoningStateRecord {
  const current = reasoningStates.get(reasoningId);

  const record: ReasoningStateRecord = {
    reasoningId,
    state,
    previousState: current?.state,
    changedAt: new Date().toISOString(),
    metadata,
  };

  reasoningStates.set(reasoningId, record);

  return record;
}

export function getReasoningState(
  reasoningId: string
): ReasoningStateRecord | undefined {
  return reasoningStates.get(reasoningId);
}

export function listReasoningStates():
  ReasoningStateRecord[] {
  return Array.from(reasoningStates.values());
}

export function removeReasoningState(
  reasoningId: string
): boolean {
  return reasoningStates.delete(reasoningId);
}

export function clearReasoningStates(): void {
  reasoningStates.clear();
}

export function countReasoningStates(): number {
  return reasoningStates.size;
}

export function isReasoningState(
  reasoningId: string,
  state: ReasoningState
): boolean {
  return reasoningStates.get(reasoningId)?.state === state;
}
