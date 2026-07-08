/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Guardian oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  runReasoningWatchdog,
} from "./reasoning.watchdog";

import {
  recoverReasoning,
  ReasoningRecoveryResult,
} from "./reasoning.recovery";

export type ReasoningGuardianStatus =
  | "healthy"
  | "protected"
  | "recovered"
  | "critical";

export interface ReasoningGuardianResult {
  id: string;
  status: ReasoningGuardianStatus;
  watchdogStatus: string;
  recovery?: ReasoningRecoveryResult;
  guardedAt: string;
}

const reasoningGuardianHistory:
  ReasoningGuardianResult[] = [];

let guardianEnabled = true;

export function enableReasoningGuardian():
  boolean {
  guardianEnabled = true;

  return guardianEnabled;
}

export function disableReasoningGuardian():
  boolean {
  guardianEnabled = false;

  return guardianEnabled;
}

export function isReasoningGuardianEnabled():
  boolean {
  return guardianEnabled;
}

export function guardReasoning():
  ReasoningGuardianResult {
  const watchdog =
    runReasoningWatchdog();

  let status: ReasoningGuardianStatus =
    "healthy";

  let recovery:
    ReasoningRecoveryResult | undefined;

  if (!guardianEnabled) {
    status = "protected";
  } else if (
    watchdog.status === "warning" ||
    watchdog.status === "critical"
  ) {
    recovery = recoverReasoning();

    status =
      recovery.status === "recovered"
        ? "recovered"
        : "critical";
  }

  const result: ReasoningGuardianResult = {
    id: `reasoning-guardian-${Date.now()}`,
    status,
    watchdogStatus: watchdog.status,
    recovery,
    guardedAt: new Date().toISOString(),
  };

  reasoningGuardianHistory.push(result);

  return result;
}

export function listReasoningGuardianHistory():
  ReasoningGuardianResult[] {
  return [...reasoningGuardianHistory];
}

export function getLatestReasoningGuardianResult():
  ReasoningGuardianResult | undefined {
  return reasoningGuardianHistory[
    reasoningGuardianHistory.length - 1
  ];
}

export function clearReasoningGuardianHistory():
  void {
  reasoningGuardianHistory.length = 0;
}

export function countReasoningGuardianResults():
  number {
  return reasoningGuardianHistory.length;
  }
