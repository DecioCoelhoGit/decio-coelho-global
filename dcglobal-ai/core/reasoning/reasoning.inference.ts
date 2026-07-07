/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Inference oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningInference,
  ReasoningRecord,
  ReasoningType,
} from "./reasoning.types";

const reasoningInferences: ReasoningInference[] = [];

export function registerReasoningInference(
  inference: ReasoningInference
): ReasoningInference {
  reasoningInferences.push(inference);
  return inference;
}

export function listReasoningInferences():
  ReasoningInference[] {
  return [...reasoningInferences];
}

export function findReasoningInference(
  id: string
): ReasoningInference | undefined {
  return reasoningInferences.find(
    inference => inference.id === id
  );
}

export function findInferencesByMethod(
  method: ReasoningType
): ReasoningInference[] {
  return reasoningInferences.filter(
    inference => inference.method === method
  );
}

export function removeReasoningInference(
  id: string
): boolean {
  const index = reasoningInferences.findIndex(
    inference => inference.id === id
  );

  if (index === -1) {
    return false;
  }

  reasoningInferences.splice(index, 1);
  return true;
}

export function clearReasoningInferences(): void {
  reasoningInferences.length = 0;
}

export function countReasoningInferences(): number {
  return reasoningInferences.length;
}

export function registerRecordInferences(
  record: ReasoningRecord
): ReasoningInference[] {
  const inferences = record.inferences || [];

  inferences.forEach(
    inference =>
      registerReasoningInference(inference)
  );

  return inferences;
}

export function calculateInferenceConfidence(
  record: ReasoningRecord
): number {
  const inferences = record.inferences || [];

  if (inferences.length === 0) {
    return 0;
  }

  const total = inferences.reduce(
    (sum, inference) =>
      sum + inference.confidence,
    0
  );

  return total / inferences.length;
}
