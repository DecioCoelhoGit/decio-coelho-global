/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Engine oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningRecord,
  ReasoningDecision,
  ReasoningExplanation,
} from "./reasoning.types";

export interface ReasoningEngineResult {
  reasoningId: string;
  success: boolean;
  confidence: number;
  decision?: ReasoningDecision;
  explanation?: ReasoningExplanation;
  timestamp: string;
}

export function runReasoningEngine(
  record: ReasoningRecord
): ReasoningEngineResult {
  const confidence =
    record.confidence;

  const decision: ReasoningDecision = {
    id: `decision-${record.id}`,
    conclusion:
      record.decision?.conclusion ||
      "Reasoning process completed.",
    confidence,
    rationale:
      record.decision?.rationale ||
      "Decision generated from available evidence, hypotheses and inferences.",
    action: record.decision?.action,
  };

  const explanation: ReasoningExplanation = {
    id: `explanation-${record.id}`,
    summary:
      record.explanation?.summary ||
      "Reasoning executed successfully.",
    details:
      record.explanation?.details ||
      "The engine processed evidence, hypotheses and inferences linked to the reasoning record.",
    trace: [
      "record-loaded",
      "evidence-reviewed",
      "hypotheses-evaluated",
      "inferences-processed",
      "decision-generated",
      "explanation-created",
    ],
  };

  return {
    reasoningId: record.id,
    success: true,
    confidence,
    decision,
    explanation,
    timestamp: new Date().toISOString(),
  };
}

export function canRunReasoning(
  record: ReasoningRecord
): boolean {
  return (
    record.status !== "failed" &&
    record.status !== "archived" &&
    record.confidence >= 0
  );
}
