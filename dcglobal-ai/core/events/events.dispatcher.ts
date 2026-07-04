/**
 * DCGLOBAL.AI™
 * Cognitive Events™
 *
 * Dispatcher oficial dos Eventos Cognitivos.
 * Responsável por encaminhar eventos aos
 * handlers/subscribers registrados.
 */

import {
  CognitiveEvent,
  CognitiveEventHandler,
} from "./events.types";

export class EventsDispatcher {
  private readonly handlers =
    new Map<string, CognitiveEventHandler[]>();

  subscribe(
    eventType: string,
    handler: CognitiveEventHandler
  ): void {
    const handlers =
      this.handlers.get(eventType) ?? [];

    handlers.push(handler);

    this.handlers.set(eventType, handlers);
  }

  unsubscribe(
    eventType: string,
    handler: CognitiveEventHandler
  ): boolean {
    const handlers = this.handlers.get(eventType);

    if (!handlers) {
      return false;
    }

    const filtered = handlers.filter(
      item => item !== handler
    );

    this.handlers.set(eventType, filtered);

    return filtered.length !== handlers.length;
  }

  async dispatch(
    event: CognitiveEvent
  ): Promise<void> {
    const handlers = [
      ...(this.handlers.get(event.type) ?? []),
      ...(this.handlers.get("*") ?? []),
    ];

    for (const handler of handlers) {
      await handler(event);
    }
  }

  hasSubscribers(eventType: string): boolean {
    return (
      (this.handlers.get(eventType)?.length ?? 0) > 0 ||
      (this.handlers.get("*")?.length ?? 0) > 0
    );
  }

  countSubscribers(eventType?: string): number {
    if (eventType) {
      return this.handlers.get(eventType)?.length ?? 0;
    }

    return Array.from(this.handlers.values())
      .reduce((total, list) => total + list.length, 0);
  }

  clear(eventType?: string): void {
    if (eventType) {
      this.handlers.delete(eventType);
      return;
    }

    this.handlers.clear();
  }
}

export const eventsDispatcher =
  new EventsDispatcher();
