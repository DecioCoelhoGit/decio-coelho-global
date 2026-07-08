/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Resilience oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  guardReasoning,
  ReasoningGuardianResult,
} from "./reasoning.guardian";

import {
  recoverReasoning,
  ReasoningRecoveryResult,
} from "./reasoning.recovery";

export type ReasoningResilienceStatus =
  | "stable"
  | "protected"
  | "recovered"
  | "degraded"
  | "failed";

export interface ReasoningResilienceResult {
  id: string;
  status: ReasoningResilienceStatus;
  guardian: ReasoningGuardianResult;
  recovery?: ReasoningRecoveryResult;
  attempts: number;
  resilientAt: string;
}

const reasoningResilienceHistory:
  ReasoningResilienceResult[] = [];

let maximumRecoveryAttempts = 3;

export function setReasoningMaximumRecoveryAttempts(
  attempts: number,
): number {
  maximumRecoveryAttempts = Math.max(
    1,
    Math.floor(attempts),
  );

  return maximumRecoveryAttempts;
}

export function getReasoningMaximumRecoveryAttempts():
  number {
  return maximumRecoveryAttempts;
}

export function runReasoningResilience():
  ReasoningResilienceResult {
  const guardian = guardReasoning();

  let status: ReasoningResilienceStatus =
    "stable";

  let recovery:
    ReasoningRecoveryResult | undefined;

  let attempts = 0;

  if (guardian.status === "protected") {
    status = "protected";
  }

  if (guardian.status === "recovered") {
    status = "recovered";
    recovery = guardian.recovery;
  }

  if (guardian.status === "critical") {
    status = "degraded";

    while (
      attempts < maximumRecoveryAttempts
    ) {
      attempts += 1;

      recovery = recoverReasoning();

      if (recovery.status === "recovered") {
        status = "recovered";
        break;
      }
    }

    if (
      !recovery ||
      recovery.status !== "recovered"
    ) {
      status = "failed";
    }
  }

  const result: ReasoningResilienceResult = {
    id: `reasoning-resilience-${Date.now()}`,
    status,
    guardian,
    recovery,
    attempts,
    resilientAt: new Date().toISOString(),
  };

  reasoningResilienceHistory.push(result);

  return result;
}

export function listReasoningResilienceHistory():
  ReasoningResilienceResult[] {
  return [...reasoningResilienceHistory];
}

export function getLatestReasoningResilience():
  ReasoningResilienceResult | undefined {
  return reasoningResilienceHistory[
    reasoningResilienceHistory.length - 1
  ];
}

export function clearReasoningResilienceHistory():
  void {
  reasoningResilienceHistory.length = 0;
}

export function countReasoningResilienceResults():
  number {
  return reasoningResilienceHistory.length;
}

export function isReasoningResilient():
  boolean {
  const latest =
    getLatestReasoningResilience();

  if (!latest) {
    return true;
  }

  return (
    latest.status === "stable" ||
    latest.status === "protected" ||
    latest.status === "recovered"
  );
}
