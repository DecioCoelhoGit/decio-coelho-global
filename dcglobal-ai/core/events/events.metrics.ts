/**
 * DCGLOBAL.AI™
 * Cognitive Events™
 *
 * Métricas oficiais do Event Bus.
 * Responsável pela observabilidade dos
 * Eventos Cognitivos do Sistema Operacional Vivo.
 */

import { eventsStore } from "./events.store";

export interface EventMetrics {
  totalEvents: number;
  published: number;
  completed: number;
  failed: number;
  pending: number;
  processing: number;
  successRate: number;
  failureRate: number;
  categories: Record<string, number>;
  priorities: Record<string, number>;
}

export function getEventMetrics(): EventMetrics {
  const events = eventsStore.getAll();

  const metrics: EventMetrics = {
    totalEvents: events.length,
    published: 0,
    completed: 0,
    failed: 0,
    pending: 0,
    processing: 0,
    successRate: 0,
    failureRate: 0,
    categories: {},
    priorities: {},
  };

  for (const event of events) {
    switch (event.status) {
      case "published":
        metrics.published++;
        break;

      case "processing":
        metrics.processing++;
        break;

      case "completed":
        metrics.completed++;
        break;

      case "failed":
        metrics.failed++;
        break;

      default:
        metrics.pending++;
    }

    metrics.categories[event.category] =
      (metrics.categories[event.category] ?? 0) + 1;

    metrics.priorities[event.priority] =
      (metrics.priorities[event.priority] ?? 0) + 1;
  }

  if (metrics.totalEvents > 0) {
    metrics.successRate =
      (metrics.completed / metrics.totalEvents) * 100;

    metrics.failureRate =
      (metrics.failed / metrics.totalEvents) * 100;
  }

  return metrics;
}

export function resetEventMetrics(): void {
  eventsStore.clear();
}

export function printEventMetrics(): void {
  console.table(getEventMetrics());
}
