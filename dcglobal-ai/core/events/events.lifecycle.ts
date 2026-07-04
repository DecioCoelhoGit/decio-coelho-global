/**
 * DCGLOBAL.AI™
 * Cognitive Events™
 *
 * Lifecycle oficial da camada de Eventos Cognitivos.
 */

import { eventsConfig } from "./events.config";

export type EventsRuntimeStatus =
  | "created"
  | "initializing"
  | "running"
  | "paused"
  | "stopping"
  | "stopped"
  | "failed";

export interface EventsRuntime {
  id: string;
  name: string;
  version: string;
  status: EventsRuntimeStatus;
  startedAt?: string;
  stoppedAt?: string;
  error?: string;
}

export const eventsRuntime: EventsRuntime = {
  id: eventsConfig.id,
  name: eventsConfig.name,
  version: eventsConfig.version,
  status: "created",
};

export function initializeEvents(): EventsRuntime {
  eventsRuntime.status = "initializing";
  return eventsRuntime;
}

export function startEvents(): EventsRuntime {
  eventsRuntime.status = "running";
  eventsRuntime.startedAt = new Date().toISOString();
  return eventsRuntime;
}

export function pauseEvents(): EventsRuntime {
  eventsRuntime.status = "paused";
  return eventsRuntime;
}

export function stopEvents(): EventsRuntime {
  eventsRuntime.status = "stopping";
  eventsRuntime.stoppedAt = new Date().toISOString();
  eventsRuntime.status = "stopped";
  return eventsRuntime;
}

export function failEvents(error: string): EventsRuntime {
  eventsRuntime.status = "failed";
  eventsRuntime.error = error;
  return eventsRuntime;
}

export function restartEvents(): EventsRuntime {
  stopEvents();
  initializeEvents();
  return startEvents();
}

export function isEventsRunning(): boolean {
  return eventsRuntime.status === "running";
}

export function getEventsRuntime(): EventsRuntime {
  return eventsRuntime;
}
