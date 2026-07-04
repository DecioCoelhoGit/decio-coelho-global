/**
 * DCGLOBAL.AI™
 * Cognitive Events™
 *
 * Health Monitor oficial da camada de Eventos.
 * Responsável pelo autodiagnóstico do
 * Cognitive Event Bus™.
 */

import { eventsStore } from "./events.store";
import { eventsDispatcher } from "./events.dispatcher";
import { getEventMetrics } from "./events.metrics";
import { getEventsRuntime } from "./events.lifecycle";

export interface EventsHealth {
  status: "healthy" | "degraded" | "failed";
  runtimeStatus: string;
  totalEvents: number;
  failedEvents: number;
  completedEvents: number;
  subscribers: number;
  issues: string[];
  checkedAt: string;
}

export function checkEventsHealth(): EventsHealth {
  const runtime = getEventsRuntime();
  const metrics = getEventMetrics();

  const issues: string[] = [];

  if (runtime.status === "failed") {
    issues.push("Events runtime is failed.");
  }

  if (metrics.failed > 0) {
    issues.push(`${metrics.failed} event(s) failed.`);
  }

  if (eventsStore.count() === 0) {
    issues.push("No events registered in store.");
  }

  const subscribers = eventsDispatcher.countSubscribers();

  if (subscribers === 0) {
    issues.push("No subscribers registered.");
  }

  const status =
    runtime.status === "failed"
      ? "failed"
      : issues.length > 0
        ? "degraded"
        : "healthy";

  return {
    status,
    runtimeStatus: runtime.status,
    totalEvents: metrics.totalEvents,
    failedEvents: metrics.failed,
    completedEvents: metrics.completed,
    subscribers,
    issues,
    checkedAt: new Date().toISOString(),
  };
}

export function isEventsHealthy(): boolean {
  return checkEventsHealth().status === "healthy";
}

export function getEventsHealthSummary(): string {
  const health = checkEventsHealth();

  return [
    `Events Health: ${health.status}`,
    `Runtime Status: ${health.runtimeStatus}`,
    `Total Events: ${health.totalEvents}`,
    `Completed Events: ${health.completedEvents}`,
    `Failed Events: ${health.failedEvents}`,
    `Subscribers: ${health.subscribers}`,
    `Issues: ${health.issues.length}`,
  ].join("\n");
}
