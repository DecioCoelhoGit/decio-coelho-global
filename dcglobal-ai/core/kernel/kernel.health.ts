/**
 * DCGLOBAL.AI™
 * Cognitive Kernel™
 *
 * Healthcheck oficial do Kernel.
 * Responsável por avaliar a saúde
 * operacional do Sistema Cognitivo Vivo.
 */

import { KernelHealth, KernelRuntime } from "./kernel.types";

export function checkKernelHealth(runtime: KernelRuntime): KernelHealth {
  const componentsTotal = runtime.components.length;

  const componentsRunning = runtime.components.filter(
    component => component.status === "running"
  ).length;

  const componentsFailed = runtime.components.filter(
    component => component.status === "failed"
  ).length;

  const issues: string[] = [];

  if (runtime.status === "failed") {
    issues.push("Kernel is in failed state.");
  }

  if (componentsFailed > 0) {
    issues.push(`${componentsFailed} component(s) failed.`);
  }

  if (componentsTotal === 0) {
    issues.push("No components registered.");
  }

  const status =
    runtime.status === "failed" || componentsFailed > 0
      ? "degraded"
      : runtime.status;

  const uptime = runtime.startedAt
    ? Date.now() - new Date(runtime.startedAt).getTime()
    : 0;

  return {
    status,
    uptime,
    componentsTotal,
    componentsRunning,
    componentsFailed,
    lastCheckAt: new Date().toISOString(),
    issues,
  };
}

export function isKernelHealthy(runtime: KernelRuntime): boolean {
  const health = checkKernelHealth(runtime);

  return (
    health.status === "running" &&
    health.componentsFailed === 0 &&
    health.issues.length === 0
  );
}

export function getKernelHealthSummary(runtime: KernelRuntime): string {
  const health = checkKernelHealth(runtime);

  return [
    `Kernel Status: ${health.status}`,
    `Uptime: ${health.uptime}ms`,
    `Components Total: ${health.componentsTotal}`,
    `Components Running: ${health.componentsRunning}`,
    `Components Failed: ${health.componentsFailed}`,
    `Issues: ${health.issues.length}`,
  ].join("\n");
}
