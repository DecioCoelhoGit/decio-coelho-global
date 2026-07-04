/**
 * DCGLOBAL.AI™
 * Cognitive Kernel™
 *
 * Tipos oficiais do Núcleo Operacional
 * do Sistema Cognitivo Vivo.
 */

export type KernelStatus =
  | "created"
  | "initializing"
  | "running"
  | "paused"
  | "degraded"
  | "stopping"
  | "stopped"
  | "failed";

export type KernelComponentType =
  | "core"
  | "module"
  | "api"
  | "shared"
  | "infrastructure"
  | "agent"
  | "engine"
  | "workflow";

export interface KernelComponent {
  id: string;
  name: string;
  type: KernelComponentType;
  version: string;
  status: KernelStatus;
  description?: string;
  enabled: boolean;
  dependencies?: string[];
  metadata?: Record<string, unknown>;
}

export interface KernelEvent {
  id: string;
  type: string;
  source: string;
  timestamp: string;
  payload?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
}

export interface KernelConfig {
  id: string;
  name: string;
  version: string;
  environment: "development" | "staging" | "production";
  debug: boolean;
  autoStart: boolean;
  governanceEnabled: boolean;
  securityEnabled: boolean;
  eventBusEnabled: boolean;
}

export interface KernelHealth {
  status: KernelStatus;
  uptime: number;
  componentsTotal: number;
  componentsRunning: number;
  componentsFailed: number;
  lastCheckAt: string;
  issues: string[];
}

export interface KernelRuntime {
  id: string;
  name: string;
  version: string;
  status: KernelStatus;
  config: KernelConfig;
  components: KernelComponent[];
  events: KernelEvent[];
  startedAt?: string;
  stoppedAt?: string;
  metadata?: Record<string, unknown>;
}
