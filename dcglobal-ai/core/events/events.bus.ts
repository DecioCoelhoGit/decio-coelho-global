/**
 * DCGLOBAL.AI™
 * Cognitive Events™
 *
 * Event Bus oficial do Sistema Cognitivo Vivo.
 * Responsável por centralizar publicação,
 * assinatura, histórico e fluxo dos eventos.
 */

import {
  CognitiveEvent,
  CognitiveEventHandler,
} from "./events.types";

import {
  publishEvent,
  PublishEventParams,
} from "./events.publisher";

import {
  subscribeToEvent,
  subscribeToAllEvents,
  unsubscribeFromEvent,
} from "./events.subscriber";

import { eventsStore } from "./events.store";
import { eventsDispatcher } from "./events.dispatcher";

export class CognitiveEventBus {
  async publish<TPayload = Record<string, unknown>>(
    params: PublishEventParams<TPayload>
  ): Promise<CognitiveEvent<TPayload>> {
    return publishEvent(params);
  }

  subscribe(
    eventType: string,
    handlerName: string,
    handler: CognitiveEventHandler
  ) {
    return subscribeToEvent(eventType, handlerName, handler);
  }

  subscribeAll(
    handlerName: string,
    handler: CognitiveEventHandler
  ) {
    return subscribeToAllEvents(handlerName, handler);
  }

  unsubscribe(
    eventType: string,
    handler: CognitiveEventHandler
  ): boolean {
    return unsubscribeFromEvent(eventType, handler);
  }

  history(): CognitiveEvent[] {
    return eventsStore.getAll();
  }

  latest(): CognitiveEvent | undefined {
    return eventsStore.latest();
  }

  latestN(limit = 10): CognitiveEvent[] {
    return eventsStore.latestN(limit);
  }

  count(): number {
    return eventsStore.count();
  }

  clear(): void {
    eventsStore.clear();
    eventsDispatcher.clear();
  }

  hasSubscribers(eventType: string): boolean {
    return eventsDispatcher.hasSubscribers(eventType);
  }
}

export const cognitiveEventBus =
  new CognitiveEventBus();
