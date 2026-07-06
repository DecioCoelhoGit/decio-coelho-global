/**
 * DCGLOBAL.AI™
 * Cognitive Knowledge™
 *
 * Registry oficial da
 * Camada de Conhecimento Cognitivo.
 */

import {
  KNOWLEDGE_ID,
  KNOWLEDGE_NAME,
  KNOWLEDGE_VERSION,
  knowledgeConfig,
} from "./knowledge.config";

export const knowledgeRegistry = {
  id: KNOWLEDGE_ID,

  name: KNOWLEDGE_NAME,

  version: KNOWLEDGE_VERSION,

  description:
    "Official Cognitive Knowledge Registry.",

  initialized: true,

  createdAt: new Date().toISOString(),

  config: knowledgeConfig,

  modules: [
    "types",
    "config",
    "registry",
    "lifecycle",
    "store",
    "cache",
    "search",
    "index",
    "audit",
    "monitor",
    "health",
    "persistence",
    "bootstrap",
  ],

  integrations: [
    "memory",
    "context",
    "graph",
    "reasoning",
    "governance",
    "kernel",
    "agents",
    "workflows",
    "intelligence",
  ],

  capabilities: [
    "knowledge-storage",
    "semantic-search",
    "knowledge-graph",
    "reasoning-support",
    "knowledge-cache",
    "knowledge-index",
    "knowledge-health",
    "knowledge-governance",
  ],

  synchronization: [
    "memory-sync",
    "context-sync",
    "graph-sync",
    "health-sync",
  ],

  metadata: {
    organization: "DCGLOBAL.AI™",
    layer: "Knowledge",
    runtime: "Cognitive Operating System™",
    status: "active",
  },
} as const;

export function getKnowledgeRegistry() {
  return knowledgeRegistry;
}
