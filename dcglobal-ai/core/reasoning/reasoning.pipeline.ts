/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Pipeline oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningRecord,
} from "./reasoning.types";

import {
  orchestrateReasoning,
  ReasoningOrchestrationContext,
  ReasoningOrchestrationResult,
} from "./reasoning.orchestrator";

export type ReasoningPipelineStage =
  | "input"
  | "evidence"
  | "inference"
  | "hypothesis"
  | "strategy"
  | "decision"
  | "explanation"
  | "validation"
  | "output";

export interface ReasoningPipelineResult {
  record: ReasoningRecord;
  stages: ReasoningPipelineStage[];
  orchestration: ReasoningOrchestrationResult;
  success: boolean;
  timestamp: string;
}

export const reasoningPipelineStages:
  ReasoningPipelineStage[] = [
    "input",
    "evidence",
    "inference",
    "hypothesis",
    "strategy",
    "decision",
    "explanation",
    "validation",
    "output",
  ];

export function runReasoningPipeline(
  record: ReasoningRecord,
  context: ReasoningOrchestrationContext = {}
): ReasoningPipelineResult {
  const orchestration =
    orchestrateReasoning(record, context);

  return {
    record,
    stages: reasoningPipelineStages,
    orchestration,
    success:
      orchestration.health.status !== "critical",
    timestamp: new Date().toISOString(),
  };
}

export function runReasoningPipelineBatch(
  records: ReasoningRecord[],
  context: ReasoningOrchestrationContext = {}
): ReasoningPipelineResult[] {
  return records.map(record =>
    runReasoningPipeline(record, context)
  );
}

export function listReasoningPipelineStages():
  ReasoningPipelineStage[] {
  return [...reasoningPipelineStages];
}

export function hasReasoningPipelineStage(
  stage: ReasoningPipelineStage
): boolean {
  return reasoningPipelineStages.includes(stage);
}

export function countReasoningPipelineStages():
  number {
  return reasoningPipelineStages.length;
}
