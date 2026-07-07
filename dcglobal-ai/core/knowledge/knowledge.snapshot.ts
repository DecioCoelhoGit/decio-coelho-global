/**
 * DCGLOBAL.AI™
 * Cognitive Knowledge™
 *
 * Snapshot oficial da Camada
 * de Conhecimento Cognitivo.
 */

import {
  KnowledgeSnapshot,
} from "./knowledge.types";

import { knowledgeStore } from "./knowledge.store";
import { countKnowledgeIndexes } from "./knowledge.index";
import { countCachedKnowledge } from "./knowledge.cache";

const knowledgeSnapshots: KnowledgeSnapshot[] = [];

export function createKnowledgeSnapshot():
  KnowledgeSnapshot {
  const records = knowledgeStore.list();

  const snapshot: KnowledgeSnapshot = {
    timestamp: new Date().toISOString(),

    totalRecords: records.length,

    activeRecords: records.filter(
      record => record.status === "active"
    ).length,

    validatedRecords: records.filter(
      record => record.status === "validated"
    ).length,

    indexes: countKnowledgeIndexes(),

    cache: countCachedKnowledge(),

    graph: {
      nodes: records.length,
      edges: 0,
      clusters: 0,
    },

    status: "healthy",
  };

  knowledgeSnapshots.push(snapshot);

  return snapshot;
}

export function listKnowledgeSnapshots():
  KnowledgeSnapshot[] {
  return [...knowledgeSnapshots];
}

export function latestKnowledgeSnapshot():
  KnowledgeSnapshot | undefined {
  return knowledgeSnapshots.at(-1);
}

export function clearKnowledgeSnapshots(): void {
  knowledgeSnapshots.length = 0;
}

export function countKnowledgeSnapshots(): number {
  return knowledgeSnapshots.length;
}
