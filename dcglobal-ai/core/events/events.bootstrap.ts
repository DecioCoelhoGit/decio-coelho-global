/**
 * DCGLOBAL.AI™
 * Cognitive Events™
 *
 * Bootstrap oficial da camada de Eventos Cognitivos.
 * Responsável por inicializar o runtime,
 * registrar subscribers essenciais e preparar
 * o Cognitive Event Bus™.
 */

import {
  initializeEvents,
  startEvents,
  stopEvents,
  getEventsRuntime,
  EventsRuntime,
} from "./events.lifecycle";

import { subscribeToAllEvents } from "./events.subscriber";

import { eventsConfig } from "./events.config";

export function bootstrapEvents(): EventsRuntime {
  initializeEvents();

  if (eventsConfig.governance.audit) {
    subscribeToAllEvents(
      "events-audit-subscriber",
      async event => {
        if (eventsConfig.logging.enabled) {
          console.log(
            "[DCGLOBAL.AI Events Audit]",
            event.type,
            event.id,
            event.createdAt
          );
        }
      }
    );
  }

  return startEvents();
}

export function shutdownEvents(): EventsRuntime {
  return stopEvents();
}

export function getBootstrappedEvents(): EventsRuntime {
  return getEventsRuntime();
}
