/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Recovery oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  runReasoningWatchdog,
} from "./reasoning.watchdog";

import {
  restartReasoningRuntime,
  startReasoningRuntime,
  getReasoningRuntimeState,
} from "./reasoning.runtime";

export type ReasoningRecoveryStatus =
  | "not-needed"
  | "recovered"
  | "failed";

export interface ReasoningRecoveryResult {
  id: string;
  status: ReasoningRecoveryStatus;
  watchdogStatus: string;
  runtime: ReturnType<
    typeof getReasoningRuntimeState
  >;
  recoveredAt: string;
}

const reasoningRecoveries:
  ReasoningRecoveryResult[] = [];

export function recoverReasoning():
  ReasoningRecoveryResult {
  const watchdog =
    runReasoningWatchdog();

  let status: ReasoningRecoveryStatus =
    "not-needed";

  if (watchdog.status === "warning") {
    startReasoningRuntime();
    status = "recovered";
  }

  if (watchdog.status === "critical") {
    restartReasoningRuntime();
    status = "recovered";
  }

  const result: ReasoningRecoveryResult = {
    id: `reasoning-recovery-${Date.now()}`,
    status,
    watchdogStatus: watchdog.status,
    runtime: getReasoningRuntimeState(),
    recoveredAt: new Date().toISOString(),
  };

  reasoningRecoveries.push(result);

  return result;
}

export function listReasoningRecoveries():
  ReasoningRecoveryResult[] {
  return [...reasoningRecoveries];
}

export function getLatestReasoningRecovery():
  ReasoningRecoveryResult | undefined {
  return reasoningRecoveries[
    reasoningRecoveries.length - 1
  ];
}

export function clearReasoningRecoveries():
  void {
  reasoningRecoveries.length = 0;
}

export function countReasoningRecoveries():
  number {
  return reasoningRecoveries.length;
}
