/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Hypothesis oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningHypothesis,
  ReasoningRecord,
} from "./reasoning.types";

const reasoningHypotheses: ReasoningHypothesis[] = [];

export function registerReasoningHypothesis(
  hypothesis: ReasoningHypothesis
): ReasoningHypothesis {
  reasoningHypotheses.push(hypothesis);
  return hypothesis;
}

export function listReasoningHypotheses():
  ReasoningHypothesis[] {
  return [...reasoningHypotheses];
}

export function findReasoningHypothesis(
  id: string
): ReasoningHypothesis | undefined {
  return reasoningHypotheses.find(
    hypothesis => hypothesis.id === id
  );
}

export function findHypothesesByStatus(
  status: ReasoningHypothesis["status"]
): ReasoningHypothesis[] {
  return reasoningHypotheses.filter(
    hypothesis => hypothesis.status === status
  );
}

export function supportReasoningHypothesis(
  id: string
): ReasoningHypothesis | undefined {
  const hypothesis = findReasoningHypothesis(id);

  if (!hypothesis) {
    return undefined;
  }

  hypothesis.status = "supported";
  return hypothesis;
}

export function rejectReasoningHypothesis(
  id: string
): ReasoningHypothesis | undefined {
  const hypothesis = findReasoningHypothesis(id);

  if (!hypothesis) {
    return undefined;
  }

  hypothesis.status = "rejected";
  return hypothesis;
}

export function removeReasoningHypothesis(
  id: string
): boolean {
  const index = reasoningHypotheses.findIndex(
    hypothesis => hypothesis.id === id
  );

  if (index === -1) {
    return false;
  }

  reasoningHypotheses.splice(index, 1);
  return true;
}

export function clearReasoningHypotheses(): void {
  reasoningHypotheses.length = 0;
}

export function countReasoningHypotheses(): number {
  return reasoningHypotheses.length;
}

export function registerRecordHypotheses(
  record: ReasoningRecord
): ReasoningHypothesis[] {
  const hypotheses = record.hypotheses || [];

  hypotheses.forEach(
    hypothesis =>
      registerReasoningHypothesis(hypothesis)
  );

  return hypotheses;
}
