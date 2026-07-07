/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Persistência oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningRecord,
} from "./reasoning.types";

let persistedReasoning:
  ReasoningRecord[] = [];

export function persistReasoning(
  records: ReasoningRecord[]
): ReasoningRecord[] {
  persistedReasoning = [...records];

  return persistedReasoning;
}

export function loadPersistedReasoning():
  ReasoningRecord[] {
  return [...persistedReasoning];
}

export function appendPersistedReasoning(
  record: ReasoningRecord
): ReasoningRecord {
  persistedReasoning.push(record);

  return record;
}

export function findPersistedReasoning(
  id: string
): ReasoningRecord | undefined {
  return persistedReasoning.find(
    record => record.id === id
  );
}

export function removePersistedReasoning(
  id: string
): boolean {
  const index = persistedReasoning.findIndex(
    record => record.id === id
  );

  if (index === -1) {
    return false;
  }

  persistedReasoning.splice(index, 1);

  return true;
}

export function clearPersistedReasoning():
  void {
  persistedReasoning = [];
}

export function countPersistedReasoning():
  number {
  return persistedReasoning.length;
}
