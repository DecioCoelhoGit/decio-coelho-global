/**
 * DCGLOBAL.AI™
 * Cognitive Events™
 *
 * Registro Central Oficial dos Eventos Cognitivos.
 */

import {
  CognitiveEventCategory,
  CognitiveEventPriority,
} from "./events.types";

export interface EventDefinition {
  id: string;
  name: string;
  category: CognitiveEventCategory;
  priority: CognitiveEventPriority;
  version: string;
  description: string;
  enabled: boolean;
}

export class EventsRegistry {
  private registry = new Map<string, EventDefinition>();

  register(event: EventDefinition): void {
    this.registry.set(event.id, event);
  }

  unregister(id: string): boolean {
    return this.registry.delete(id);
  }

  get(id: string): EventDefinition | undefined {
    return this.registry.get(id);
  }

  exists(id: string): boolean {
    return this.registry.has(id);
  }

  list(): EventDefinition[] {
    return [...this.registry.values()];
  }

  clear(): void {
    this.registry.clear();
  }

  count(): number {
    return this.registry.size;
  }

  byCategory(
    category: CognitiveEventCategory
  ): EventDefinition[] {
    return this.list().filter(
      event => event.category === category
    );
  }

  byPriority(
    priority: CognitiveEventPriority
  ): EventDefinition[] {
    return this.list().filter(
      event => event.priority === priority
    );
  }
}

/**
 * Registro oficial singleton.
 */
export const eventsRegistry =
  new EventsRegistry();

/**
 * Registro dos eventos fundamentais do sistema.
 */

eventsRegistry.register({
  id: "kernel.started",
  name: "Kernel Started",
  category: "system",
  priority: "critical",
  version: "1.0.0",
  description:
    "Inicialização completa do Kernel Cognitivo.",
  enabled: true,
});

eventsRegistry.register({
  id: "kernel.stopped",
  name: "Kernel Stopped",
  category: "system",
  priority: "critical",
  version: "1.0.0",
  description:
    "Finalização do Kernel Cognitivo.",
  enabled: true,
});

eventsRegistry.register({
  id: "object.created",
  name: "Cognitive Object Created",
  category: "knowledge",
  priority: "normal",
  version: "1.0.0",
  description:
    "Novo Objeto Cognitivo registrado.",
  enabled: true,
});

eventsRegistry.register({
  id: "object.updated",
  name: "Cognitive Object Updated",
  category: "knowledge",
  priority: "normal",
  version: "1.0.0",
  description:
    "Objeto Cognitivo atualizado.",
  enabled: true,
});

eventsRegistry.register({
  id: "object.deleted",
  name: "Cognitive Object Deleted",
  category: "knowledge",
  priority: "high",
  version: "1.0.0",
  description:
    "Objeto Cognitivo removido.",
  enabled: true,
});

eventsRegistry.register({
  id: "agent.started",
  name: "Agent Started",
  category: "ai",
  priority: "normal",
  version: "1.0.0",
  description:
    "Agente Cognitivo iniciado.",
  enabled: true,
});

eventsRegistry.register({
  id: "workflow.started",
  name: "Workflow Started",
  category: "workflow",
  priority: "normal",
  version: "1.0.0",
  description:
    "Workflow iniciado.",
  enabled: true,
});

eventsRegistry.register({
  id: "memory.updated",
  name: "Memory Updated",
  category: "memory",
  priority: "high",
  version: "1.0.0",
  description:
    "Memória Cognitiva atualizada.",
  enabled: true,
});
