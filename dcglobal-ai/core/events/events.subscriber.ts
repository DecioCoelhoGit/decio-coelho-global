/**
 * DCGLOBAL.AI™
 * Cognitive Events™
 *
 * Subscriber oficial dos Eventos Cognitivos.
 * Responsável por registrar assinaturas
 * no Dispatcher.
 */

import {
  CognitiveEventHandler,
  CognitiveEventSubscription,
} from "./events.types";

import { eventsDispatcher } from "./events.dispatcher";

export function subscribeToEvent(
  eventType: string,
  handlerName: string,
  handler: CognitiveEventHandler
): CognitiveEventSubscription {
  eventsDispatcher.subscribe(eventType, handler);

  return {
    id: `subscription-${Date.now()}`,
    eventType,
    handlerName,
    enabled: true,
    createdAt: new Date().toISOString(),
  };
}

export function unsubscribeFromEvent(
  eventType: string,
  handler: CognitiveEventHandler
): boolean {
  return eventsDispatcher.unsubscribe(eventType, handler);
}

export function subscribeToAllEvents(
  handlerName: string,
  handler: CognitiveEventHandler
): CognitiveEventSubscription {
  return subscribeToEvent("*", handlerName, handler);
}
