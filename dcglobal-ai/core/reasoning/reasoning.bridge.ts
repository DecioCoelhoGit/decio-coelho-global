/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Bridge oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningAdapterInput,
  ReasoningAdapterSource,
  handleReasoningAdapterInput,
} from "./reasoning.adapter";

export interface ReasoningBridgeMessage {
  id: string;
  source: ReasoningAdapterSource;
  target: "reasoning";
  payload: ReasoningAdapterInput;
  timestamp: string;
}

export function createReasoningBridgeMessage(
  source: ReasoningAdapterSource,
  payload: ReasoningAdapterInput
): ReasoningBridgeMessage {
  return {
    id: `reasoning-bridge-${Date.now()}`,
    source,
    target: "reasoning",
    payload,
    timestamp: new Date().toISOString(),
  };
}

export function handleReasoningBridgeMessage(
  message: ReasoningBridgeMessage
) {
  return handleReasoningAdapterInput(message.payload);
}

export function sendReasoningBridgeMessage(
  source: ReasoningAdapterSource,
  payload: ReasoningAdapterInput
) {
  const message =
    createReasoningBridgeMessage(source, payload);

  return handleReasoningBridgeMessage(message);
}

export const reasoningBridge = {
  createMessage: createReasoningBridgeMessage,
  handleMessage: handleReasoningBridgeMessage,
  send: sendReasoningBridgeMessage,
};
