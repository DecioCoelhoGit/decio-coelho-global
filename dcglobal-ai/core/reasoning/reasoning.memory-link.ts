/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Memory Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningRecord,
} from "./reasoning.types";

import {
  memoryStore,
} from "../memory";

export function linkReasoningToMemory(
  record: ReasoningRecord
): ReasoningRecord {
  memoryStore.add({
    id: `memory-${record.id}`,
    type: "reasoning",
    status: "active",
    priority: record.priority,
    title: record.title,
    content: record.objective,
    source: record.source,
    actor: record.actor,
    contextId: record.id,
    eventId: record.id,
    tags: record.tags,
    metadata: {
      reasoningId: record.id,
      confidence: record.confidence,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    expiresAt: undefined,
  });

  return record;
}

export function linkReasoningBatchToMemory(
  records: ReasoningRecord[]
): ReasoningRecord[] {
  return records.map(record =>
    linkReasoningToMemory(record)
  );
}
