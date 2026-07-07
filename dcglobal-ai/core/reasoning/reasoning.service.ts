/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Service oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningRecord,
} from "./reasoning.types";

import {
  createReasoningControllerRecord,
  processReasoningControllerRecord,
  archiveReasoningControllerRecord,
} from "./reasoning.controller";

import {
  reasoningStore,
} from "./reasoning.store";

import {
  searchReasoning,
} from "./reasoning.search";

import {
  generateReasoningReport,
} from "./reasoning.report";

export function createReasoningServiceRecord(
  record: ReasoningRecord
): ReasoningRecord {
  return createReasoningControllerRecord(record);
}

export function processReasoningServiceRecord(
  record: ReasoningRecord
) {
  return processReasoningControllerRecord(record);
}

export function findReasoningServiceRecord(
  id: string
): ReasoningRecord | undefined {
  return reasoningStore.get(id);
}

export function listReasoningServiceRecords():
  ReasoningRecord[] {
  return reasoningStore.list();
}

export function searchReasoningServiceRecords(
  query: Parameters<typeof searchReasoning>[0]
) {
  return searchReasoning(query);
}

export function archiveReasoningServiceRecord(
  id: string
): boolean {
  return archiveReasoningControllerRecord(id);
}

export function generateReasoningServiceReport():
  string {
  return generateReasoningReport();
}
