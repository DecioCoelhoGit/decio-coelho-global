/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Engine oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningRecord,
} from "./reasoning.types";

import {
  executeReasoningRuntime,
} from "./reasoning.runtime";

export interface ReasoningEngineExecution {
  record: ReasoningRecord;
  success: boolean;
  result?: unknown;
  error?: string;
  executedAt: string;
}

export function executeReasoningEngine(
  record: ReasoningRecord
): ReasoningEngineExecution {
  const response = executeReasoningRuntime({
    source: "system",
    payload: {
      source: "system",
      action: "execute",
      record,
      metadata: {
        engine: "reasoning-engine",
      },
    },
  });

  return {
    record,
    success: response.success,
    result: response.data,
    error: response.error,
    executedAt: new Date().toISOString(),
  };
}

export function executeReasoningEngineBatch(
  records: ReasoningRecord[]
): ReasoningEngineExecution[] {
  return records.map(record =>
    executeReasoningEngine(record)
  );
}

export function isReasoningEngineSuccessful(
  execution: ReasoningEngineExecution
): boolean {
  return execution.success;
}
