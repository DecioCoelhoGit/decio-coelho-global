/**
 * DCGLOBAL.AI™
 * Cognitive Kernel™
 *
 * Implementação principal do Núcleo Operacional
 * do Sistema Cognitivo Vivo.
 */

import {
  KernelComponent,
  KernelConfig,
  KernelEvent,
  KernelRuntime,
  KernelStatus,
} from "./kernel.types";

import { kernelConfig } from "./kernel.config";

import { kernelRegistry } from "./kernel.registry";

import {
  initializeKernel,
  startKernel,
  pauseKernel,
  stopKernel,
  finishKernel,
  failKernel,
} from "./kernel.lifecycle";

import {
  checkKernelHealth,
  getKernelHealthSummary,
} from "./kernel.health";

export class CognitiveKernel {
  private runtime: KernelRuntime;

  constructor(config: KernelConfig = kernelConfig) {
    this.runtime = {
      id: config.id,
      name: config.name,
      version: config.version,
      status: "created",
      config,
      components: [],
      events: [],
      metadata: {},
    };
  }

  initialize(): KernelRuntime {
    this.runtime = initializeKernel(this.runtime);
    this.emit("KernelInitialized", {
      status: this.runtime.status,
    });

    return this.runtime;
  }

  start(): KernelRuntime {
    this.runtime.components = kernelRegistry.list();

    this.runtime = startKernel(this.runtime);
    this.emit("KernelStarted", {
      components: this.runtime.components.length,
    });

    return this.runtime;
  }

  pause(): KernelRuntime {
    this.runtime = pauseKernel(this.runtime);
    this.emit("KernelPaused");

    return this.runtime;
  }

  stop(): KernelRuntime {
    this.runtime = stopKernel(this.runtime);
    this.emit("KernelStopping");

    this.runtime = finishKernel(this.runtime);
    this.emit("KernelStopped");

    return this.runtime;
  }

  fail(reason?: string): KernelRuntime {
    this.runtime = failKernel(this.runtime, reason);
    return this.runtime;
  }

  register(component: KernelComponent): void {
    kernelRegistry.register(component);

    this.runtime.components = kernelRegistry.list();

    this.emit("ComponentRegistered", {
      componentId: component.id,
      componentName: component.name,
      componentType: component.type,
    });
  }

  unregister(componentId: string): boolean {
    const removed = kernelRegistry.unregister(componentId);

    this.runtime.components = kernelRegistry.list();

    this.emit("ComponentUnregistered", {
      componentId,
      removed,
    });

    return removed;
  }

  getStatus(): KernelStatus {
    return this.runtime.status;
  }

  getRuntime(): KernelRuntime {
    return this.runtime;
  }

  getComponents(): KernelComponent[] {
    return this.runtime.components;
  }

  getEvents(): KernelEvent[] {
    return this.runtime.events;
  }

  health() {
    return checkKernelHealth(this.runtime);
  }

  healthSummary(): string {
    return getKernelHealthSummary(this.runtime);
  }

  private emit(
    type: string,
    payload: Record<string, unknown> = {}
  ): void {
    const event: KernelEvent = {
      id: `kernel-event-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2)}`,
      type,
      source: "CognitiveKernel",
      timestamp: new Date().toISOString(),
      payload,
    };

    this.runtime.events.push(event);
  }
}

export const cognitiveKernel = new CognitiveKernel();
