/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Validator oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningRecord,
} from "./reasoning.types";

export interface ReasoningValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  checkedAt: string;
}

export function validateReasoningRecord(
  record: ReasoningRecord
): ReasoningValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!record.id) errors.push("Missing reasoning id.");
  if (!record.type) errors.push("Missing reasoning type.");
  if (!record.status) errors.push("Missing reasoning status.");
  if (!record.title) errors.push("Missing reasoning title.");
  if (!record.objective) errors.push("Missing reasoning objective.");
  if (!record.actor) warnings.push("Missing reasoning actor.");
  if (!record.source) warnings.push("Missing reasoning source.");

  if (
    record.confidence < 0 ||
    record.confidence > 1
  ) {
    errors.push(
      "Reasoning confidence must be between 0 and 1."
    );
  }

  if (!record.decision) {
    warnings.push("Reasoning decision not attached.");
  }

  if (!record.explanation) {
    warnings.push("Reasoning explanation not attached.");
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    checkedAt: new Date().toISOString(),
  };
}

export function validateReasoningBatch(
  records: ReasoningRecord[]
): ReasoningValidationResult[] {
  return records.map(record =>
    validateReasoningRecord(record)
  );
}

export function isReasoningRecordValid(
  record: ReasoningRecord
): boolean {
  return validateReasoningRecord(record).valid;
}
