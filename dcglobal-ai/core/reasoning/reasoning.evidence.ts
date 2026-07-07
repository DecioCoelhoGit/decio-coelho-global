/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Evidence oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningEvidence,
  ReasoningRecord,
} from "./reasoning.types";

const reasoningEvidences:
  ReasoningEvidence[] = [];

/**
 * Registra uma evidência.
 */
export function registerReasoningEvidence(
  evidence: ReasoningEvidence
): ReasoningEvidence {
  reasoningEvidences.push(evidence);

  return evidence;
}

/**
 * Lista todas as evidências.
 */
export function listReasoningEvidences():
  ReasoningEvidence[] {
  return [...reasoningEvidences];
}

/**
 * Localiza uma evidência
 * pelo identificador.
 */
export function findReasoningEvidence(
  id: string
): ReasoningEvidence | undefined {
  return reasoningEvidences.find(
    evidence => evidence.id === id
  );
}

/**
 * Lista evidências vinculadas
 * a um raciocínio.
 */
export function findEvidencesByReasoning(
  reasoningId: string
): ReasoningEvidence[] {
  return reasoningEvidences.filter(
    evidence =>
      evidence.reasoningId === reasoningId
  );
}

/**
 * Valida uma evidência.
 */
export function validateReasoningEvidence(
  id: string
): boolean {
  const evidence =
    findReasoningEvidence(id);

  if (!evidence) {
    return false;
  }

  evidence.validated = true;

  return true;
}

/**
 * Remove uma evidência.
 */
export function removeReasoningEvidence(
  id: string
): boolean {
  const index = reasoningEvidences.findIndex(
    evidence => evidence.id === id
  );

  if (index === -1) {
    return false;
  }

  reasoningEvidences.splice(index, 1);

  return true;
}

/**
 * Limpa todas as evidências.
 */
export function clearReasoningEvidences(): void {
  reasoningEvidences.length = 0;
}

/**
 * Conta as evidências.
 */
export function countReasoningEvidences(): number {
  return reasoningEvidences.length;
}

/**
 * Verifica se um raciocínio
 * possui evidências.
 */
export function hasReasoningEvidence(
  reasoningId: string
): boolean {
  return reasoningEvidences.some(
    evidence =>
      evidence.reasoningId === reasoningId
  );
}

/**
 * Calcula a confiança média
 * das evidências vinculadas
 * a um raciocínio.
 */
export function calculateEvidenceConfidence(
  reasoningId: string
): number {
  const evidences =
    findEvidencesByReasoning(reasoningId);

  if (evidences.length === 0) {
    return 0;
  }

  const total = evidences.reduce(
    (sum, evidence) =>
      sum + evidence.confidence,
    0
  );

  return total / evidences.length;
}

/**
 * Retorna somente evidências
 * validadas.
 */
export function listValidatedEvidences():
  ReasoningEvidence[] {
  return reasoningEvidences.filter(
    evidence => evidence.validated
  );
}

/**
 * Vincula evidências de um
 * registro de raciocínio.
 */
export function registerRecordEvidences(
  record: ReasoningRecord
): ReasoningEvidence[] {
  const evidences = record.evidence || [];

  evidences.forEach(
    evidence =>
      registerReasoningEvidence(evidence)
  );

  return evidences;
}
