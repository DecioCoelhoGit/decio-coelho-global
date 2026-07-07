/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Decision oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningDecision,
  ReasoningRecord,
} from "./reasoning.types";

const reasoningDecisions: ReasoningDecision[] = [];

/**
 * Registra uma decisão cognitiva.
 */
export function registerReasoningDecision(
  decision: ReasoningDecision
): ReasoningDecision {
  reasoningDecisions.push(decision);

  return decision;
}

/**
 * Lista todas as decisões cognitivas.
 */
export function listReasoningDecisions():
  ReasoningDecision[] {
  return [...reasoningDecisions];
}

/**
 * Localiza uma decisão pelo ID.
 */
export function findReasoningDecision(
  id: string
): ReasoningDecision | undefined {
  return reasoningDecisions.find(
    decision => decision.id === id
  );
}

/**
 * Lista decisões por ação.
 */
export function findReasoningDecisionsByAction(
  action: string
): ReasoningDecision[] {
  return reasoningDecisions.filter(
    decision => decision.action === action
  );
}

/**
 * Lista decisões por nível mínimo
 * de confiança.
 */
export function findReasoningDecisionsByConfidence(
  minimumConfidence: number
): ReasoningDecision[] {
  return reasoningDecisions.filter(
    decision =>
      decision.confidence >= minimumConfidence
  );
}

/**
 * Atualiza a confiança de uma decisão.
 */
export function updateReasoningDecisionConfidence(
  id: string,
  confidence: number
): ReasoningDecision | undefined {
  const decision = findReasoningDecision(id);

  if (!decision) {
    return undefined;
  }

  decision.confidence = confidence;

  return decision;
}

/**
 * Remove uma decisão cognitiva.
 */
export function removeReasoningDecision(
  id: string
): boolean {
  const index = reasoningDecisions.findIndex(
    decision => decision.id === id
  );

  if (index === -1) {
    return false;
  }

  reasoningDecisions.splice(index, 1);

  return true;
}

/**
 * Limpa todas as decisões.
 */
export function clearReasoningDecisions(): void {
  reasoningDecisions.length = 0;
}

/**
 * Conta as decisões registradas.
 */
export function countReasoningDecisions(): number {
  return reasoningDecisions.length;
}

/**
 * Registra a decisão existente
 * em um ReasoningRecord.
 */
export function registerRecordDecision(
  record: ReasoningRecord
): ReasoningDecision {
  return registerReasoningDecision(
    record.decision
  );
}

/**
 * Verifica se uma decisão existe.
 */
export function reasoningDecisionExists(
  id: string
): boolean {
  return (
    findReasoningDecision(id) !== undefined
  );
}
