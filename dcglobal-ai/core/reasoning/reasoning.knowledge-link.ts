/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Knowledge Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningRecord,
} from "./reasoning.types";

import {
  knowledgeStore,
} from "../knowledge";

export function linkReasoningToKnowledge(
  record: ReasoningRecord
): ReasoningRecord {
  knowledgeStore.add({
    id: `knowledge-${record.id}`,
    type: "reasoning",
    status: "active",
    priority: record.priority,
    title: record.title,
    description: record.objective,
    content: record.explanation?.summary ?? record.objective,
    source: record.source,
    actor: record.actor,
    confidence: record.confidence,
    relevance: record.confidence,
    tags: record.tags,
    metadata: {
      reasoningId: record.id,
      decision: record.decision?.action,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  return record;
}

export function linkReasoningBatchToKnowledge(
  records: ReasoningRecord[]
): ReasoningRecord[] {
  return records.map(record =>
    linkReasoningToKnowledge(record)
  );
}
