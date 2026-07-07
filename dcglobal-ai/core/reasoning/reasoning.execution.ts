/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Execution oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningRecord,
} from "./reasoning.types";

import {
  startReasoningTrace,
  addReasoningTraceStep,
  completeReasoningTrace,
  failReasoningTrace,
} from "./reasoning.trace";

export type ReasoningExecutionStatus =
  | "created"
  | "running"
  | "completed"
  | "failed";

export interface ReasoningExecution {
  id: string;
  reasoningId: string;
  traceId: string;
  record: ReasoningRecord;
  status: ReasoningExecutionStatus;
  result?: unknown;
  error?: string;
  startedAt: string;
  completedAt?: string;
  durationMs?: number;
  metadata: Record<string, unknown>;
}

const reasoningExecutions:
  Map<string, ReasoningExecution> = new Map();

export function createReasoningExecution(
  record: ReasoningRecord,
  metadata: Record<string, unknown> = {}
): ReasoningExecution {
  const trace = startReasoningTrace(
    "reasoning-execution",
    record.id,
    metadata
  );

  const execution: ReasoningExecution = {
    id: `reasoning-execution-${Date.now()}`,
    reasoningId: record.id,
    traceId: trace.id,
    record,
    status: "created",
    startedAt: new Date().toISOString(),
    metadata,
  };

  reasoningExecutions.set(execution.id, execution);

  return execution;
}

export function runReasoningExecution(
  executionId: string,
  runner: (record: ReasoningRecord) => unknown
): ReasoningExecution | undefined {
  const execution =
    reasoningExecutions.get(executionId);

  if (!execution) {
    return undefined;
  }

  execution.status = "running";

  addReasoningTraceStep(
    execution.traceId,
    "execution-started",
    {
      executionId,
      reasoningId: execution.reasoningId,
    }
  );

  try {
    const result = runner(execution.record);

    execution.status = "completed";
    execution.result = result;
    execution.completedAt =
      new Date().toISOString();

    execution.durationMs =
      new Date(execution.completedAt).getTime() -
      new Date(execution.startedAt).getTime();

    completeReasoningTrace(
      execution.traceId,
      {
        executionId,
        status: execution.status,
      }
    );

    return execution;
  } catch (error) {
    execution.status = "failed";
    execution.error =
      error instanceof Error
        ? error.message
        : String(error);

    execution.completedAt =
      new Date().toISOString();

    execution.durationMs =
      new Date(execution.completedAt).getTime() -
      new Date(execution.startedAt).getTime();

    failReasoningTrace(
      execution.traceId,
      error,
      {
        executionId,
        status: execution.status,
      }
    );

    return execution;
  }
}

export function getReasoningExecution(
  executionId: string
): ReasoningExecution | undefined {
  return reasoningExecutions.get(executionId);
}

export function listReasoningExecutions():
  ReasoningExecution[] {
  return Array.from(reasoningExecutions.values());
}

export function listReasoningExecutionsByStatus(
  status: ReasoningExecutionStatus
): ReasoningExecution[] {
  return listReasoningExecutions().filter(
    execution => execution.status === status
  );
}

export function listReasoningExecutionsByReasoning(
  reasoningId: string
): ReasoningExecution[] {
  return listReasoningExecutions().filter(
    execution => execution.reasoningId === reasoningId
  );
}

export function clearReasoningExecutions():
  void {
  reasoningExecutions.clear();
}

export function countReasoningExecutions():
  number {
  return reasoningExecutions.size;
}
