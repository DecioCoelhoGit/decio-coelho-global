/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Trace oficial da Camada
 * de Raciocínio Cognitivo.
 */

export interface ReasoningTrace {
  id: string;
  reasoningId: string;
  step: string;
  description: string;
  actor?: string;
  success: boolean;
  timestamp: string;
  metadata?: Record<string, unknown>;
}

const reasoningTraces: ReasoningTrace[] = [];

export function registerReasoningTrace(
  trace: ReasoningTrace
): ReasoningTrace {
  reasoningTraces.push(trace);
  return trace;
}

export function createReasoningTrace(
  reasoningId: string,
  step: string,
  description: string,
  success: boolean = true,
  actor: string = "system",
  metadata: Record<string, unknown> = {}
): ReasoningTrace {
  const trace: ReasoningTrace = {
    id: `reasoning-trace-${Date.now()}`,
    reasoningId,
    step,
    description,
    actor,
    success,
    timestamp: new Date().toISOString(),
    metadata,
  };

  reasoningTraces.push(trace);

  return trace;
}

export function listReasoningTraces():
  ReasoningTrace[] {
  return [...reasoningTraces];
}

export function findReasoningTrace(
  id: string
): ReasoningTrace | undefined {
  return reasoningTraces.find(
    trace => trace.id === id
  );
}

export function listTracesByReasoning(
  reasoningId: string
): ReasoningTrace[] {
  return reasoningTraces.filter(
    trace => trace.reasoningId === reasoningId
  );
}

export function listFailedReasoningTraces():
  ReasoningTrace[] {
  return reasoningTraces.filter(
    trace => !trace.success
  );
}

export function clearReasoningTraces(): void {
  reasoningTraces.length = 0;
}

export function countReasoningTraces(): number {
  return reasoningTraces.length;
}
