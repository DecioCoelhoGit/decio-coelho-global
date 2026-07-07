/**
 * DCGLOBAL.AI™
 * Cognitive Knowledge™
 *
 * Graph oficial da Camada
 * de Conhecimento Cognitivo.
 */

import {
  KnowledgeGraph,
  KnowledgeRelation,
} from "./knowledge.types";

const knowledgeRelations: KnowledgeRelation[] = [];

export function addKnowledgeRelation(
  relation: KnowledgeRelation
): KnowledgeRelation {
  knowledgeRelations.push(relation);
  return relation;
}

export function listKnowledgeRelations():
  KnowledgeRelation[] {
  return [...knowledgeRelations];
}

export function findKnowledgeRelation(
  id: string
): KnowledgeRelation | undefined {
  return knowledgeRelations.find(
    relation => relation.id === id
  );
}

export function removeKnowledgeRelation(
  id: string
): boolean {
  const index = knowledgeRelations.findIndex(
    relation => relation.id === id
  );

  if (index === -1) {
    return false;
  }

  knowledgeRelations.splice(index, 1);
  return true;
}

export function clearKnowledgeRelations(): void {
  knowledgeRelations.length = 0;
}

export function countKnowledgeRelations(): number {
  return knowledgeRelations.length;
}

export function getKnowledgeGraph(
  nodes: number = 0
): KnowledgeGraph {
  return {
    nodes,
    edges: knowledgeRelations.length,
    clusters: 0,
  };
}
