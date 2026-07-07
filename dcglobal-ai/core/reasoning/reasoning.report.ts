/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Report oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  getReasoningMetrics,
} from "./reasoning.metrics";

import {
  getReasoningHealthSummary,
} from "./reasoning.health";

import {
  getReasoningMonitorSummary,
} from "./reasoning.monitor";

export function generateReasoningReport():
  string {
  const metrics = getReasoningMetrics();

  return [
    "DCGLOBAL.AI™ Cognitive Reasoning™ Report",
    "",
    getReasoningMonitorSummary(),
    "",
    getReasoningHealthSummary(),
    "",
    `Records: ${metrics.records}`,
    `Active Records: ${metrics.activeRecords}`,
    `Audits: ${metrics.audits}`,
    `Traces: ${metrics.traces}`,
    `Inferences: ${metrics.inferences}`,
    `Hypotheses: ${metrics.hypotheses}`,
    `Decisions: ${metrics.decisions}`,
    `Explanations: ${metrics.explanations}`,
    `Average Confidence: ${metrics.averageConfidence}`,
    `Generated At: ${metrics.generatedAt}`,
  ].join("\n");
}

export function generateReasoningExecutiveReport():
  string {
  const metrics = getReasoningMetrics();

  return [
    "Cognitive Reasoning™ Executive Summary",
    `Records: ${metrics.records}`,
    `Active: ${metrics.activeRecords}`,
    `Confidence: ${metrics.averageConfidence}`,
    `Generated At: ${metrics.generatedAt}`,
  ].join("\n");
}
