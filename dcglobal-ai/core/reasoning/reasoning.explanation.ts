/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Explanation oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningExplanation,
  ReasoningRecord,
} from "./reasoning.types";

const reasoningExplanations: ReasoningExplanation[] = [];

export function registerReasoningExplanation(
  explanation: ReasoningExplanation
): ReasoningExplanation {
  reasoningExplanations.push(explanation);
  return explanation;
}

export function listReasoningExplanations():
  ReasoningExplanation[] {
  return [...reasoningExplanations];
}

export function findReasoningExplanation(
  id: string
): ReasoningExplanation | undefined {
  return reasoningExplanations.find(
    explanation => explanation.id === id
  );
}

export function findExplanationsByTrace(
  trace: string
): ReasoningExplanation[] {
  return reasoningExplanations.filter(
    explanation =>
      explanation.trace.includes(trace)
  );
}

export function removeReasoningExplanation(
  id: string
): boolean {
  const index = reasoningExplanations.findIndex(
    explanation => explanation.id === id
  );

  if (index === -1) {
    return false;
  }

  reasoningExplanations.splice(index, 1);
  return true;
}

export function clearReasoningExplanations(): void {
  reasoningExplanations.length = 0;
}

export function countReasoningExplanations(): number {
  return reasoningExplanations.length;
}

export function registerRecordExplanation(
  record: ReasoningRecord
): ReasoningExplanation | undefined {
  if (!record.explanation) {
    return undefined;
  }

  return registerReasoningExplanation(
    record.explanation
  );
}

export function reasoningExplanationExists(
  id: string
): boolean {
  return (
    findReasoningExplanation(id) !== undefined
  );
}
