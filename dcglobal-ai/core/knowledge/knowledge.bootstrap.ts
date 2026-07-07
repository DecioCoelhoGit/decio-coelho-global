/**
 * DCGLOBAL.AI™
 * Cognitive Knowledge™
 *
 * Bootstrap oficial da Camada
 * de Conhecimento Cognitivo.
 */

import {
  KNOWLEDGE_NAME,
  KNOWLEDGE_VERSION,
} from "./knowledge.config";

import {
  getKnowledgeRegistry,
} from "./knowledge.registry";

import {
  knowledgeStore,
} from "./knowledge.store";

import {
  getKnowledgeMonitorSnapshot,
} from "./knowledge.monitor";

import {
  checkKnowledgeHealth,
} from "./knowledge.health";

export interface KnowledgeBootstrap {
  initialized: boolean;
  name: string;
  version: string;

  registry: ReturnType<
    typeof getKnowledgeRegistry
  >;

  runtime: {
    records: number;
  };

  monitor: ReturnType<
    typeof getKnowledgeMonitorSnapshot
  >;

  health: ReturnType<
    typeof checkKnowledgeHealth
  >;

  startedAt: string;
}

let knowledgeBootstrap:
  KnowledgeBootstrap | null = null;

export function bootstrapKnowledge():
  KnowledgeBootstrap {
  if (knowledgeBootstrap) {
    return knowledgeBootstrap;
  }

  knowledgeBootstrap = {
    initialized: true,

    name: KNOWLEDGE_NAME,

    version: KNOWLEDGE_VERSION,

    registry: getKnowledgeRegistry(),

    runtime: {
      records: knowledgeStore.count(),
    },

    monitor:
      getKnowledgeMonitorSnapshot(),

    health:
      checkKnowledgeHealth(),

    startedAt:
      new Date().toISOString(),
  };

  return knowledgeBootstrap;
}

export function getKnowledgeBootstrap():
  KnowledgeBootstrap | null {
  return knowledgeBootstrap;
}

export function isKnowledgeBootstrapped():
  boolean {
  return knowledgeBootstrap !== null;
}

export function resetKnowledgeBootstrap():
  void {
  knowledgeBootstrap = null;
}
