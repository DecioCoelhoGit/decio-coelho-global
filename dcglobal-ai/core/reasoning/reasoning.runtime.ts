/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Runtime oficial da Camada
 * de Raciocínio Cognitivo.
 *
 * Responsável por coordenar
 * inicialização, ativação,
 * execução e encerramento
 * operacional da camada.
 */

import {
  initializeReasoning,
  activateReasoning,
  deactivateReasoning,
  resetReasoningLifecycle,
  getReasoningRuntime,
} from "./reasoning.lifecycle";

import {
  connectReasoningToKernel,
  disconnectReasoningFromKernel,
  getReasoningKernelLinkStatus,
  sendReasoningToKernel,
  ReasoningKernelRequest,
  ReasoningKernelResponse,
} from "./reasoning.kernel-link";

export type ReasoningRuntimeStatus =
  | "stopped"
  | "starting"
  | "running"
  | "processing"
  | "stopping"
  | "error";

export interface ReasoningRuntimeState {
  status: ReasoningRuntimeStatus;
  initialized: boolean;
  active: boolean;
  kernelConnected: boolean;
  startedAt: string | null;
  stoppedAt: string | null;
  lastExecutionAt: string | null;
  executions: number;
  error: string | null;
}

const runtimeState: ReasoningRuntimeState = {
  status: "stopped",
  initialized: false,
  active: false,
  kernelConnected: false,
  startedAt: null,
  stoppedAt: null,
  lastExecutionAt: null,
  executions: 0,
  error: null,
};

export function startReasoningRuntime():
  ReasoningRuntimeState {
  try {
    if (runtimeState.status === "running") {
      return getReasoningRuntimeState();
    }

    runtimeState.status = "starting";
    runtimeState.error = null;

    initializeReasoning();
    activateReasoning();
    connectReasoningToKernel();

    const lifecycle = getReasoningRuntime();

    runtimeState.initialized =
      lifecycle.initialized;

    runtimeState.active =
      lifecycle.active;

    runtimeState.kernelConnected =
      getReasoningKernelLinkStatus() === "connected";

    runtimeState.startedAt =
      new Date().toISOString();

    runtimeState.stoppedAt = null;
    runtimeState.status = "running";

    return getReasoningRuntimeState();
  } catch (error) {
    runtimeState.status = "error";

    runtimeState.error =
      error instanceof Error
        ? error.message
        : String(error);

    return getReasoningRuntimeState();
  }
}

export function executeReasoningRuntime(
  request: ReasoningKernelRequest
): ReasoningKernelResponse {
  if (runtimeState.status !== "running") {
    startReasoningRuntime();
  }

  runtimeState.status = "processing";
  runtimeState.error = null;

  try {
    const response =
      sendReasoningToKernel(request);

    runtimeState.executions += 1;

    runtimeState.lastExecutionAt =
      new Date().toISOString();

    runtimeState.kernelConnected =
      getReasoningKernelLinkStatus() === "connected";

    if (!response.success) {
      runtimeState.status = "error";
      runtimeState.error =
        response.error ?? "Unknown runtime error.";

      return response;
    }

    runtimeState.status = "running";

    return response;
  } catch (error) {
    runtimeState.status = "error";

    runtimeState.error =
      error instanceof Error
        ? error.message
        : String(error);

    return {
      success: false,
      status: "error",
      error: runtimeState.error,
      timestamp: new Date().toISOString(),
    };
  }
}

export function stopReasoningRuntime():
  ReasoningRuntimeState {
  try {
    if (runtimeState.status === "stopped") {
      return getReasoningRuntimeState();
    }

    runtimeState.status = "stopping";

    deactivateReasoning();
    disconnectReasoningFromKernel();

    runtimeState.active = false;
    runtimeState.kernelConnected = false;
    runtimeState.stoppedAt =
      new Date().toISOString();

    runtimeState.status = "stopped";

    return getReasoningRuntimeState();
  } catch (error) {
    runtimeState.status = "error";

    runtimeState.error =
      error instanceof Error
        ? error.message
        : String(error);

    return getReasoningRuntimeState();
  }
}

export function restartReasoningRuntime():
  ReasoningRuntimeState {
  stopReasoningRuntime();
  resetReasoningLifecycle();

  runtimeState.initialized = false;
  runtimeState.active = false;
  runtimeState.kernelConnected = false;
  runtimeState.startedAt = null;
  runtimeState.stoppedAt = null;
  runtimeState.lastExecutionAt = null;
  runtimeState.executions = 0;
  runtimeState.error = null;
  runtimeState.status = "stopped";

  return startReasoningRuntime();
}

export function getReasoningRuntimeState():
  ReasoningRuntimeState {
  return {
    ...runtimeState,
  };
}

export function isReasoningRuntimeRunning():
  boolean {
  return runtimeState.status === "running";
}

export function isReasoningRuntimeProcessing():
  boolean {
  return runtimeState.status === "processing";
}

export const reasoningRuntime = {
  start: startReasoningRuntime,
  execute: executeReasoningRuntime,
  stop: stopReasoningRuntime,
  restart: restartReasoningRuntime,
  getState: getReasoningRuntimeState,
  isRunning: isReasoningRuntimeRunning,
  isProcessing: isReasoningRuntimeProcessing,
};
