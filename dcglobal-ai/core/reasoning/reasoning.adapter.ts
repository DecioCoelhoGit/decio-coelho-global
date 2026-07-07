/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Adapter oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningRecord,
} from "./reasoning.types";

import {
  ReasoningGatewayRequest,
  ReasoningGatewayResponse,
  handleReasoningGatewayRequest,
} from "./reasoning.gateway";

export type ReasoningAdapterSource =
  | "memory"
  | "context"
  | "knowledge"
  | "agent"
  | "workflow"
  | "api"
  | "system";

export interface ReasoningAdapterInput {
  source: ReasoningAdapterSource;
  action: ReasoningGatewayRequest["action"];
  record?: ReasoningRecord;
  id?: string;
  query?: ReasoningGatewayRequest["query"];
  metadata?: Record<string, unknown>;
}

export function adaptReasoningInput(
  input: ReasoningAdapterInput
): ReasoningGatewayRequest {
  return {
    action: input.action,
    record: input.record,
    id: input.id,
    query: input.query,
    metadata: {
      source: input.source,
      ...input.metadata,
    },
  };
}

export function handleReasoningAdapterInput(
  input: ReasoningAdapterInput
): ReasoningGatewayResponse {
  const request = adaptReasoningInput(input);

  return handleReasoningGatewayRequest(request);
}

export const reasoningAdapter = {
  adapt: adaptReasoningInput,
  handle: handleReasoningAdapterInput,
};
