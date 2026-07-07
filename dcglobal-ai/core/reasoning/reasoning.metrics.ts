/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Metrics oficial da Camada
 * de Raciocínio Cognitivo.
 */

import { reasoningStore } from "./reasoning.store";
import { countReasoningAudits } from "./reasoning.audit";
import { countReasoningTraces } from "./reasoning.trace";
import { countReasoningInferences } from "./reasoning.inference";
import { countReasoningHypotheses } from "./reasoning.hypothesis";
import { countReasoningDecisions } from "./reasoning.decision";
import { countReasoningExplanations } from "./reasoning.explanation";

export interface ReasoningMetrics {
  records: number;
  activeRecords: number;
  audits: number;
  traces: number;
  inferences: number;
  hypotheses: number;
  decisions: number;
  explanations: number;
  averageConfidence: number;
  generatedAt: string;
}

export function getReasoningMetrics():
  ReasoningMetrics {
  const records = reasoningStore.list();

  const averageConfidence =
    records.length === 0
      ? 0
      : records.reduce(
          (sum, record) =>
            sum + record.confidence,
          0
        ) / records.length;

  return {
    records: records.length,
    activeRecords:
      reasoningStore.listActive().length,
    audits: countReasoningAudits(),
    traces: countReasoningTraces(),
    inferences: countReasoningInferences(),
    hypotheses: countReasoningHypotheses(),
    decisions: countReasoningDecisions(),
    explanations: countReasoningExplanations(),
    averageConfidence,
    generatedAt: new Date().toISOString(),
  };
}

export function getReasoningMetricsSummary():
  string {
  const metrics = getReasoningMetrics();

  return [
    `Reasoning Records: ${metrics.records}`,
    `Active Records: ${metrics.activeRecords}`,
    `Audits: ${metrics.audits}`,
    `Traces: ${metrics.traces}`,
    `Inferences: ${metrics.inferences}`,
    `Hypotheses: ${metrics.hypotheses}`,
    `Decisions: ${metrics.decisions}`,
    `Explanations: ${metrics.explanations}`,
    `Average Confidence: ${metrics.averageConfidence}`,
    `Generated At: ${metrics.generatedAt}`,
  ].join("\n");
}
