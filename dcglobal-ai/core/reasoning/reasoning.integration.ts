/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Integration Layer oficial da Camada
 * de Raciocínio Cognitivo.
 *
 * Responsável por integrar registros de
 * raciocínio às demais camadas cognitivas.
 */

import {
  ReasoningRecord,
} from "./reasoning.types";

import {
  linkReasoningToMemory,
} from "./reasoning.memory-link";

import {
  linkReasoningToKnowledge,
} from "./reasoning.knowledge-link";

import {
  linkReasoningToContext,
} from "./reasoning.context-link";

export interface ReasoningIntegrationResult {
  record: ReasoningRecord;
  memoryLinked: boolean;
  knowledgeLinked: boolean;
  contextLinked: boolean;
  integrated: boolean;
  errors: string[];
  integratedAt: string;
}

export function integrateReasoning(
  record: ReasoningRecord
): ReasoningIntegrationResult {
  const errors: string[] = [];

  let memoryLinked = false;
  let knowledgeLinked = false;
  let contextLinked = false;

  try {
    linkReasoningToMemory(record);
    memoryLinked = true;
  } catch (error) {
    errors.push(
      `Memory integration failed: ${
        error instanceof Error
          ? error.message
          : String(error)
      }`
    );
  }

  try {
    linkReasoningToKnowledge(record);
    knowledgeLinked = true;
  } catch (error) {
    errors.push(
      `Knowledge integration failed: ${
        error instanceof Error
          ? error.message
          : String(error)
      }`
    );
  }

  try {
    linkReasoningToContext(record);
    contextLinked = true;
  } catch (error) {
    errors.push(
      `Context integration failed: ${
        error instanceof Error
          ? error.message
          : String(error)
      }`
    );
  }

  const integrated =
    memoryLinked &&
    knowledgeLinked &&
    contextLinked;

  return {
    record,
    memoryLinked,
    knowledgeLinked,
    contextLinked,
    integrated,
    errors,
    integratedAt: new Date().toISOString(),
  };
}

export function integrateReasoningBatch(
  records: ReasoningRecord[]
): ReasoningIntegrationResult[] {
  return records.map(record =>
    integrateReasoning(record)
  );
}

export function isReasoningIntegrated(
  result: ReasoningIntegrationResult
): boolean {
  return result.integrated;
}

export function hasReasoningIntegrationErrors(
  result: ReasoningIntegrationResult
): boolean {
  return result.errors.length > 0;
}

export function getReasoningIntegrationSummary(
  result: ReasoningIntegrationResult
): string {
  return [
    "Reasoning Integration",
    `Record: ${result.record.id}`,
    `Memory: ${
      result.memoryLinked ? "linked" : "failed"
    }`,
    `Knowledge: ${
      result.knowledgeLinked ? "linked" : "failed"
    }`,
    `Context: ${
      result.contextLinked ? "linked" : "failed"
    }`,
    `Integrated: ${result.integrated}`,
    `Errors: ${result.errors.length}`,
    `Integrated At: ${result.integratedAt}`,
  ].join("\n");
}
