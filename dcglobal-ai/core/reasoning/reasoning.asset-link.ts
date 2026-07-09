/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Asset Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToProduct,
} from "./reasoning.product-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningAssetLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningAssetLinkResult {
  id: string;
  status: ReasoningAssetLinkStatus;
  linked: boolean;
  product: ReturnType<typeof linkReasoningToProduct>;
  assetLinkId: string;
  asset: string;
  reason: string;
  linkedAt: string;
}

const reasoningAssetLinkHistory:
  ReasoningAssetLinkResult[] = [];

export function linkReasoningToAsset(
  context: ReasoningPolicyContext
): ReasoningAssetLinkResult {
  const product = linkReasoningToProduct(context);

  const status: ReasoningAssetLinkStatus =
    product.status === "unlinked"
      ? "unlinked"
      : product.status === "conditional"
        ? "conditional"
        : "linked";

  const asset =
    (context.metadata?.asset as string | undefined)
    ?? "dcglobal-ai-cognitive-asset";

  const result: ReasoningAssetLinkResult = {
    id: `reasoning-asset-link-${Date.now()}`,
    status,
    linked: status === "linked",
    product,
    assetLinkId:
      `DCG-REASONING-ASSET-${Date.now()}`,
    asset,
    reason: product.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningAssetLinkHistory.push(result);

  return result;
}

export function listReasoningAssetLinkHistory():
  ReasoningAssetLinkResult[] {
  return [...reasoningAssetLinkHistory];
}

export function getLatestReasoningAssetLink():
  ReasoningAssetLinkResult | undefined {
  return reasoningAssetLinkHistory[
    reasoningAssetLinkHistory.length - 1
  ];
}

export function clearReasoningAssetLinkHistory():
  void {
  reasoningAssetLinkHistory.length = 0;
}

export function countReasoningAssetLinkResults():
  number {
  return reasoningAssetLinkHistory.length;
}

export function isReasoningLinkedToAsset():
  boolean {
  return (
    getLatestReasoningAssetLink()
      ?.linked ?? true
  );
}
