/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Vision Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToMission,
} from "./reasoning.mission-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningVisionLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningVisionLinkResult {
  id: string;
  status: ReasoningVisionLinkStatus;
  linked: boolean;
  mission: ReturnType<typeof linkReasoningToMission>;
  visionLinkId: string;
  vision: string;
  reason: string;
  linkedAt: string;
}

const reasoningVisionLinkHistory:
  ReasoningVisionLinkResult[] = [];

export function linkReasoningToVision(
  context: ReasoningPolicyContext
): ReasoningVisionLinkResult {
  const mission = linkReasoningToMission(context);

  const status: ReasoningVisionLinkStatus =
    mission.status === "unlinked"
      ? "unlinked"
      : mission.status === "conditional"
        ? "conditional"
        : "linked";

  const vision =
    (context.metadata?.vision as string | undefined)
    ?? "dcglobal-ai-cognitive-vision";

  const result: ReasoningVisionLinkResult = {
    id: `reasoning-vision-link-${Date.now()}`,
    status,
    linked: status === "linked",
    mission,
    visionLinkId:
      `DCG-REASONING-VISION-${Date.now()}`,
    vision,
    reason: mission.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningVisionLinkHistory.push(result);

  return result;
}

export function listReasoningVisionLinkHistory():
  ReasoningVisionLinkResult[] {
  return [...reasoningVisionLinkHistory];
}

export function getLatestReasoningVisionLink():
  ReasoningVisionLinkResult | undefined {
  return reasoningVisionLinkHistory[
    reasoningVisionLinkHistory.length - 1
  ];
}

export function clearReasoningVisionLinkHistory():
  void {
  reasoningVisionLinkHistory.length = 0;
}

export function countReasoningVisionLinkResults():
  number {
  return reasoningVisionLinkHistory.length;
}

export function isReasoningLinkedToVision():
  boolean {
  return (
    getLatestReasoningVisionLink()
      ?.linked ?? true
  );
}
