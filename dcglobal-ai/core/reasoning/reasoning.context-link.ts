/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Context Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningRecord,
} from "./reasoning.types";

import {
  contextStore,
} from "../context";

export function linkReasoningToContext(
  record: ReasoningRecord
): ReasoningRecord {
  contextStore.add({
    id: `context-${record.id}`,
    type: "reasoning",
    status: "active",
    priority: record.priority,
    name: record.title,
    description: record.objective,
    actor: record.actor,
    sessionId: record.id,
    organization: "DCGLOBAL.AI",
    location: record.source,
    metadata: {
      reasoningId: record.id,
      confidence: record.confidence,
      decision: record.decision?.action,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    expiresAt: undefined,
  });

  return record;
}

export function linkReasoningBatchToContext(
  records: ReasoningRecord[]
): ReasoningRecord[] {
  return records.map(record =>
    linkReasoningToContext(record)
  );
}
