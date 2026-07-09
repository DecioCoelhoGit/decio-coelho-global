/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Product Link oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  linkReasoningToOutput,
} from "./reasoning.output-link";

import {
  ReasoningPolicyContext,
} from "./reasoning.policy-engine";

export type ReasoningProductLinkStatus =
  | "linked"
  | "conditional"
  | "unlinked";

export interface ReasoningProductLinkResult {
  id: string;
  status: ReasoningProductLinkStatus;
  linked: boolean;
  output: ReturnType<typeof linkReasoningToOutput>;
  productLinkId: string;
  product: string;
  reason: string;
  linkedAt: string;
}

const reasoningProductLinkHistory:
  ReasoningProductLinkResult[] = [];

export function linkReasoningToProduct(
  context: ReasoningPolicyContext
): ReasoningProductLinkResult {
  const output = linkReasoningToOutput(context);

  const status: ReasoningProductLinkStatus =
    output.status === "unlinked"
      ? "unlinked"
      : output.status === "conditional"
        ? "conditional"
        : "linked";

  const product =
    (context.metadata?.product as string | undefined)
    ?? "dcglobal-ai-cognitive-product";

  const result: ReasoningProductLinkResult = {
    id: `reasoning-product-link-${Date.now()}`,
    status,
    linked: status === "linked",
    output,
    productLinkId:
      `DCG-REASONING-PRODUCT-${Date.now()}`,
    product,
    reason: output.reason,
    linkedAt: new Date().toISOString(),
  };

  reasoningProductLinkHistory.push(result);

  return result;
}

export function listReasoningProductLinkHistory():
  ReasoningProductLinkResult[] {
  return [...reasoningProductLinkHistory];
}

export function getLatestReasoningProductLink():
  ReasoningProductLinkResult | undefined {
  return reasoningProductLinkHistory[
    reasoningProductLinkHistory.length - 1
  ];
}

export function clearReasoningProductLinkHistory():
  void {
  reasoningProductLinkHistory.length = 0;
}

export function countReasoningProductLinkResults():
  number {
  return reasoningProductLinkHistory.length;
}

export function isReasoningLinkedToProduct():
  boolean {
  return (
    getLatestReasoningProductLink()
      ?.linked ?? true
  );
}
