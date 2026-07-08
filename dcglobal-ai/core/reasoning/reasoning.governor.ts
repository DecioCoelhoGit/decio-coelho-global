/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Governor oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  superviseReasoning,
  isReasoningSupervisorOperational,
} from "./reasoning.supervisor";

export type ReasoningGovernorStatus =
  | "approved"
  | "restricted"
  | "blocked";

export interface ReasoningGovernorDecision {
  id: string;
  status: ReasoningGovernorStatus;
  allowed: boolean;
  reason: string;
  supervised: ReturnType<
    typeof superviseReasoning
  >;
  decidedAt: string;
}

const reasoningGovernorHistory:
  ReasoningGovernorDecision[] = [];

let reasoningGovernorEnabled = true;

export function enableReasoningGovernor():
  boolean {
  reasoningGovernorEnabled = true;
  return reasoningGovernorEnabled;
}

export function disableReasoningGovernor():
  boolean {
  reasoningGovernorEnabled = false;
  return reasoningGovernorEnabled;
}

export function isReasoningGovernorEnabled():
  boolean {
  return reasoningGovernorEnabled;
}

export function governReasoning():
  ReasoningGovernorDecision {
  const supervised = superviseReasoning();

  let status: ReasoningGovernorStatus =
    "approved";

  let allowed = true;

  let reason =
    "Reasoning layer approved for operation.";

  if (!reasoningGovernorEnabled) {
    status = "restricted";
    allowed = true;
    reason =
      "Reasoning governor disabled; operation allowed with restriction.";
  } else if (
    !isReasoningSupervisorOperational()
  ) {
    status = "blocked";
    allowed = false;
    reason =
      "Reasoning supervisor reported non-operational status.";
  }

  const decision: ReasoningGovernorDecision = {
    id: `reasoning-governor-${Date.now()}`,
    status,
    allowed,
    reason,
    supervised,
    decidedAt: new Date().toISOString(),
  };

  reasoningGovernorHistory.push(decision);

  return decision;
}

export function listReasoningGovernorHistory():
  ReasoningGovernorDecision[] {
  return [...reasoningGovernorHistory];
}

export function getLatestReasoningGovernorDecision():
  ReasoningGovernorDecision | undefined {
  return reasoningGovernorHistory[
    reasoningGovernorHistory.length - 1
  ];
}

export function clearReasoningGovernorHistory():
  void {
  reasoningGovernorHistory.length = 0;
}

export function countReasoningGovernorDecisions():
  number {
  return reasoningGovernorHistory.length;
}

export function isReasoningGoverned():
  boolean {
  const latest =
    getLatestReasoningGovernorDecision();

  if (!latest) {
    return true;
  }

  return latest.allowed;
}
