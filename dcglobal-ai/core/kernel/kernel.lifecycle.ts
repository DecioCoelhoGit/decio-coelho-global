/**
 * DCGLOBAL.AI™
 * Cognitive Kernel™
 *
 * Lifecycle Manager oficial do Kernel.
 * Controla a máquina de estados do
 * Sistema Cognitivo Vivo.
 */

import { KernelRuntime, KernelStatus } from "./kernel.types";

export const KernelStatusFlow: Record<KernelStatus, KernelStatus[]> = {
  created: ["initializing", "failed"],

  initializing: ["running", "failed"],

  running: ["paused", "degraded", "stopping", "failed"],

  paused: ["running", "stopping", "failed"],

  degraded: ["running", "stopping", "failed"],

  stopping: ["stopped", "failed"],

  stopped: ["initializing"],

  failed: ["initializing", "stopped"],
};

export function canTransitionKernelStatus(
  current: KernelStatus,
  next: KernelStatus
): boolean {
  return KernelStatusFlow[current]?.includes(next) ?? false;
}

export function transitionKernelStatus(
  runtime: KernelRuntime,
  nextStatus: KernelStatus
): KernelRuntime {
  const currentStatus = runtime.status;

  if (!canTransitionKernelStatus(currentStatus, nextStatus)) {
    throw new Error(
      `KernelLifecycle: transição inválida de '${currentStatus}' para '${nextStatus}'.`
    );
  }

  const now = new Date().toISOString();

  runtime.status = nextStatus;

  if (nextStatus === "running" && !runtime.startedAt) {
    runtime.startedAt = now;
  }

  if (nextStatus === "stopped") {
    runtime.stoppedAt = now;
  }

  runtime.events.push({
    id: `kernel-event-${Date.now()}`,
    type: "KernelStatusChanged",
    source: "CognitiveKernel",
    timestamp: now,
    payload: {
      from: currentStatus,
      to: nextStatus,
    },
  });

  return runtime;
}

export function initializeKernel(runtime: KernelRuntime): KernelRuntime {
  return transitionKernelStatus(runtime, "initializing");
}

export function startKernel(runtime: KernelRuntime): KernelRuntime {
  return transitionKernelStatus(runtime, "running");
}

export function pauseKernel(runtime: KernelRuntime): KernelRuntime {
  return transitionKernelStatus(runtime, "paused");
}

export function degradeKernel(runtime: KernelRuntime): KernelRuntime {
  return transitionKernelStatus(runtime, "degraded");
}

export function stopKernel(runtime: KernelRuntime): KernelRuntime {
  return transitionKernelStatus(runtime, "stopping");
}

export function finishKernel(runtime: KernelRuntime): KernelRuntime {
  return transitionKernelStatus(runtime, "stopped");
}

export function failKernel(
  runtime: KernelRuntime,
  reason?: string
): KernelRuntime {
  const now = new Date().toISOString();

  runtime.status = "failed";

  runtime.events.push({
    id: `kernel-event-${Date.now()}`,
    type: "KernelFailed",
    source: "CognitiveKernel",
    timestamp: now,
    payload: {
      reason: reason ?? "Unknown failure",
    },
  });

  return runtime;
}

export function isKernelRunning(runtime: KernelRuntime): boolean {
  return runtime.status === "running";
}

export function isKernelStopped(runtime: KernelRuntime): boolean {
  return runtime.status === "stopped";
}

export function isKernelFailed(runtime: KernelRuntime): boolean {
  return runtime.status === "failed";
}
