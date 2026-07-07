/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Indexador oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningRecord,
  ReasoningIndexes,
} from "./reasoning.types";

import { reasoningStore } from "./reasoning.store";

let reasoningIndexes: ReasoningIndexes = {
  byType: {},
  byStatus: {},
  byPriority: {},
  byActor: {},
  bySource: {},
  byTag: {},
};

function addToIndex(
  index: Record<string, string[]>,
  key: string | undefined,
  recordId: string
): void {
  if (!key) {
    return;
  }

  if (!index[key]) {
    index[key] = [];
  }

  if (!index[key].includes(recordId)) {
    index[key].push(recordId);
  }
}

export function indexReasoningRecord(
  record: ReasoningRecord
): ReasoningRecord {
  addToIndex(
    reasoningIndexes.byType,
    record.type,
    record.id
  );

  addToIndex(
    reasoningIndexes.byStatus,
    record.status,
    record.id
  );

  addToIndex(
    reasoningIndexes.byPriority,
    record.priority,
    record.id
  );

  addToIndex(
    reasoningIndexes.byActor,
    record.actor,
    record.id
  );

  addToIndex(
    reasoningIndexes.bySource,
    record.source,
    record.id
  );

  for (const tag of record.tags) {
    addToIndex(
      reasoningIndexes.byTag,
      tag,
      record.id
    );
  }

  return record;
}

export function rebuildReasoningIndexes(): ReasoningIndexes {
  clearReasoningIndexes();

  const records = reasoningStore.list();

  for (const record of records) {
    indexReasoningRecord(record);
  }

  return getReasoningIndexes();
}

export function getReasoningIndexes(): ReasoningIndexes {
  return {
    byType: { ...reasoningIndexes.byType },
    byStatus: { ...reasoningIndexes.byStatus },
    byPriority: { ...reasoningIndexes.byPriority },
    byActor: { ...reasoningIndexes.byActor },
    bySource: { ...reasoningIndexes.bySource },
    byTag: { ...reasoningIndexes.byTag },
  };
}

export function findReasoningIdsByType(
  type: string
): string[] {
  return [
    ...(reasoningIndexes.byType[type] ?? []),
  ];
}

export function findReasoningIdsByStatus(
  status: string
): string[] {
  return [
    ...(reasoningIndexes.byStatus[status] ?? []),
  ];
}

export function findReasoningIdsByPriority(
  priority: string
): string[] {
  return [
    ...(reasoningIndexes.byPriority[priority] ?? []),
  ];
}

export function findReasoningIdsByActor(
  actor: string
): string[] {
  return [
    ...(reasoningIndexes.byActor[actor] ?? []),
  ];
}

export function findReasoningIdsBySource(
  source: string
): string[] {
  return [
    ...(reasoningIndexes.bySource[source] ?? []),
  ];
}

export function findReasoningIdsByTag(
  tag: string
): string[] {
  return [
    ...(reasoningIndexes.byTag[tag] ?? []),
  ];
}

export function removeReasoningFromIndexes(
  recordId: string
): boolean {
  let removed = false;

  const indexes = Object.values(reasoningIndexes);

  for (const index of indexes) {
    for (const key of Object.keys(index)) {
      const position = index[key].indexOf(recordId);

      if (position !== -1) {
        index[key].splice(position, 1);
        removed = true;
      }

      if (index[key].length === 0) {
        delete index[key];
      }
    }
  }

  return removed;
}

export function clearReasoningIndexes(): void {
  reasoningIndexes = {
    byType: {},
    byStatus: {},
    byPriority: {},
    byActor: {},
    bySource: {},
    byTag: {},
  };
}

export function countReasoningIndexes(): {
  types: number;
  statuses: number;
  priorities: number;
  actors: number;
  sources: number;
  tags: number;
} {
  return {
    types: Object.keys(reasoningIndexes.byType).length,
    statuses: Object.keys(reasoningIndexes.byStatus).length,
    priorities: Object.keys(
      reasoningIndexes.byPriority
    ).length,
    actors: Object.keys(reasoningIndexes.byActor).length,
    sources: Object.keys(reasoningIndexes.bySource).length,
    tags: Object.keys(reasoningIndexes.byTag).length,
  };
}
