/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Trace oficial da Camada
 * de Raciocínio Cognitivo.
 */

export type ReasoningTraceStatus =
  | "active"
  | "completed"
  | "failed";

export interface ReasoningTraceStep {
  id: string;
  name: string;
  timestamp: string;
  metadata: Record<string, unknown>;
}

export interface ReasoningTrace {
  id: string;
  reasoningId?: string;
  operation: string;
  status: ReasoningTraceStatus;
  steps: ReasoningTraceStep[];
  metadata: Record<string, unknown>;
  startedAt: string;
  completedAt?: string;
  durationMs?: number;
  error?: string;
}

const reasoningTraces:
  Map<string, ReasoningTrace> = new Map();

export function startReasoningTrace(
  operation: string,
  reasoningId?: string,
  metadata: Record<string, unknown> = {}
): ReasoningTrace {
  const trace: ReasoningTrace = {
    id: `reasoning-trace-${Date.now()}-${Math.random()
      .toString(36)
      .slice(2, 9)}`,
    reasoningId,
    operation,
    status: "active",
    steps: [],
    metadata,
    startedAt: new Date().toISOString(),
  };

  reasoningTraces.set(trace.id, trace);

  return trace;
}

export function addReasoningTraceStep(
  traceId: string,
  name: string,
  metadata: Record<string, unknown> = {}
): ReasoningTraceStep | undefined {
  const trace = reasoningTraces.get(traceId);

  if (!trace || trace.status !== "active") {
    return undefined;
  }

  const step: ReasoningTraceStep = {
    id: `${traceId}-step-${trace.steps.length + 1}`,
    name,
    timestamp: new Date().toISOString(),
    metadata,
  };

  trace.steps.push(step);

  return step;
}

export function completeReasoningTrace(
  traceId: string,
  metadata: Record<string, unknown> = {}
): ReasoningTrace | undefined {
  const trace = reasoningTraces.get(traceId);

  if (!trace || trace.status !== "active") {
    return trace;
  }

  const completedAt = new Date();
  const startedAt = new Date(trace.startedAt);

  trace.status = "completed";
  trace.completedAt = completedAt.toISOString();
  trace.durationMs =
    completedAt.getTime() - startedAt.getTime();

  trace.metadata = {
    ...trace.metadata,
    ...metadata,
  };

  return trace;
}

export function failReasoningTrace(
  traceId: string,
  error: unknown,
  metadata: Record<string, unknown> = {}
): ReasoningTrace | undefined {
  const trace = reasoningTraces.get(traceId);

  if (!trace || trace.status !== "active") {
    return trace;
  }

  const completedAt = new Date();
  const startedAt = new Date(trace.startedAt);

  trace.status = "failed";
  trace.completedAt = completedAt.toISOString();
  trace.durationMs =
    completedAt.getTime() - startedAt.getTime();

  trace.error =
    error instanceof Error
      ? error.message
      : String(error);

  trace.metadata = {
    ...trace.metadata,
    ...metadata,
  };

  return trace;
}

export function getReasoningTrace(
  traceId: string
): ReasoningTrace | undefined {
  return reasoningTraces.get(traceId);
}

export function listReasoningTraces():
  ReasoningTrace[] {
  return Array.from(reasoningTraces.values());
}

export function listReasoningTracesByReasoning(
  reasoningId: string
): ReasoningTrace[] {
  return listReasoningTraces().filter(
    trace => trace.reasoningId === reasoningId
  );
}

export function listReasoningTracesByStatus(
  status: ReasoningTraceStatus
): ReasoningTrace[] {
  return listReasoningTraces().filter(
    trace => trace.status === status
  );
}

export function clearReasoningTraces():
  void {
  reasoningTraces.clear();
}

export function countReasoningTraces():
  number {
  return reasoningTraces.size;
}

export function getReasoningTraceSummary():
  Record<string, unknown> {
  const traces = listReasoningTraces();

  const completed = traces.filter(
    trace => trace.status === "completed"
  );

  const failed = traces.filter(
    trace => trace.status === "failed"
  );

  const active = traces.filter(
    trace => trace.status === "active"
  );

  const averageDurationMs =
    completed.length > 0
      ? completed.reduce(
          (total, trace) =>
            total + (trace.durationMs ?? 0),
          0
        ) / completed.length
      : 0;

  return {
    total: traces.length,
    active: active.length,
    completed: completed.length,
    failed: failed.length,
    averageDurationMs,
    generatedAt: new Date().toISOString(),
  };
  }
