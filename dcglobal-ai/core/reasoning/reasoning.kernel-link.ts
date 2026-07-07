/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Kernel Link oficial da Camada
 * de Raciocínio Cognitivo.
 *
 * Responsável por estabelecer
 * a integração controlada entre
 * o Cognitive Reasoning™ e o
 * núcleo central do DCGLOBAL.AI™.
 */

import {
  ReasoningAdapterInput,
  ReasoningAdapterSource,
} from "./reasoning.adapter";

import {
  ReasoningBridgeMessage,
  createReasoningBridgeMessage,
  handleReasoningBridgeMessage,
} from "./reasoning.bridge";

export type ReasoningKernelLinkStatus =
  | "disconnected"
  | "connected"
  | "processing"
  | "error";

export interface ReasoningKernelRequest {
  source: ReasoningAdapterSource;
  payload: ReasoningAdapterInput;
  metadata?: Record<string, unknown>;
}

export interface ReasoningKernelResponse {
  success: boolean;
  status: ReasoningKernelLinkStatus;
  messageId?: string;
  data?: unknown;
  error?: string;
  timestamp: string;
}

let kernelLinkStatus: ReasoningKernelLinkStatus =
  "disconnected";

export function connectReasoningToKernel():
  ReasoningKernelLinkStatus {
  kernelLinkStatus = "connected";

  return kernelLinkStatus;
}

export function disconnectReasoningFromKernel():
  ReasoningKernelLinkStatus {
  kernelLinkStatus = "disconnected";

  return kernelLinkStatus;
}

export function getReasoningKernelLinkStatus():
  ReasoningKernelLinkStatus {
  return kernelLinkStatus;
}

export function isReasoningKernelConnected():
  boolean {
  return kernelLinkStatus === "connected";
}

export function sendReasoningToKernel(
  request: ReasoningKernelRequest
): ReasoningKernelResponse {
  try {
    if (!isReasoningKernelConnected()) {
      connectReasoningToKernel();
    }

    kernelLinkStatus = "processing";

    const message: ReasoningBridgeMessage =
      createReasoningBridgeMessage(
        request.source,
        {
          ...request.payload,
          metadata: {
            ...request.payload.metadata,
            ...request.metadata,
            kernelLinked: true,
          },
        }
      );

    const data =
      handleReasoningBridgeMessage(message);

    kernelLinkStatus = "connected";

    return {
      success: true,
      status: kernelLinkStatus,
      messageId: message.id,
      data,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    kernelLinkStatus = "error";

    return {
      success: false,
      status: kernelLinkStatus,
      error:
        error instanceof Error
          ? error.message
          : String(error),
      timestamp: new Date().toISOString(),
    };
  }
}

export function resetReasoningKernelLink():
  ReasoningKernelLinkStatus {
  kernelLinkStatus = "disconnected";

  return kernelLinkStatus;
}

export const reasoningKernelLink = {
  connect: connectReasoningToKernel,
  disconnect: disconnectReasoningFromKernel,
  getStatus: getReasoningKernelLinkStatus,
  isConnected: isReasoningKernelConnected,
  send: sendReasoningToKernel,
  reset: resetReasoningKernelLink,
};
