/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Output Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToResult,
} from "./reasoning.result-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningOutputLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningOutputLinkResult {
  id: string;
  status: ReasoningOutputLinkStatus;
  linked: boolean;
  result: ReturnType<typeof linkReasoningToResult>;
  outputLinkId: string;
  output: string;
  reason: string;
  linkedAt: string;
}

const reasoningOutputLinkHistory:
  ReasoningOutputLinkResult[] = [];

export function linkReasoningToOutput(
  context: ReasoningPolicyContext
): ReasoningOutputLinkResult {
  const result = linkReasoningToResult(context);

  const status: ReasoningOutputLinkStatus =
    result.status === "unlinked"
      ? "unlinked"
      : result.status === "conditional"
        ? "conditional"
        : "linked";

  const output =
    (context.metadata?.output as string | undefined)
    ?? "dcglobal-ai-cognitive-output";

  const response: ReasoningOutputLinkResult = {
    id: `reasoning-output-link-${Date.now()}`,
    status,
    linked: status === "linked",
    result,
    outputLinkId:
      `DCG-REASONING-OUTPUT-${Date.now()}`,
    output,
    reason: result.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningOutputLinkHistory.push(response);

  return response;
}

export function listReasoningOutputLinkHistory():
  ReasoningOutputLinkResult[] {
  return [...reasoningOutputLinkHistory];
}

export function getLatestReasoningOutputLink():
  ReasoningOutputLinkResult | undefined {
  return reasoningOutputLinkHistory[
    reasoningOutputLinkHistory.length - 1
  ];
}

export function clearReasoningOutputLinkHistory():
  void {
  reasoningOutputLinkHistory.length = 0;
}

export function countReasoningOutputLinkResults():
  number {
  return reasoningOutputLinkHistory.length;
}

export function isReasoningLinkedToOutput():
  boolean {
  return (
    getLatestReasoningOutputLink()
      ?.linked ?? true
  );
}
