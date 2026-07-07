/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * API oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningRecord,
} from "./reasoning.types";

import {
  createReasoningServiceRecord,
  processReasoningServiceRecord,
  findReasoningServiceRecord,
  listReasoningServiceRecords,
  searchReasoningServiceRecords,
  archiveReasoningServiceRecord,
  generateReasoningServiceReport,
} from "./reasoning.service";

export const reasoningApi = {
  create(record: ReasoningRecord) {
    return createReasoningServiceRecord(record);
  },

  process(record: ReasoningRecord) {
    return processReasoningServiceRecord(record);
  },

  find(id: string) {
    return findReasoningServiceRecord(id);
  },

  list() {
    return listReasoningServiceRecords();
  },

  search(query: Parameters<
    typeof searchReasoningServiceRecords
  >[0]) {
    return searchReasoningServiceRecords(query);
  },

  archive(id: string) {
    return archiveReasoningServiceRecord(id);
  },

  report() {
    return generateReasoningServiceReport();
  },
};
