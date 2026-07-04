/**
 * DCGLOBAL.AI™
 * Cognitive Memory™
 *
 * Registry oficial da Camada de Memória.
 * Responsável por registrar tipos,
 * provedores e estratégias da memória cognitiva.
 */

import {
  MemoryType,
  MemoryCategory,
} from "./memory.types";

export interface MemoryDefinition {
  id: string;
  name: string;
  type: MemoryType;
  category: MemoryCategory;
  version: string;
  description: string;
  enabled: boolean;
}

export class MemoryRegistry {
  private readonly registry =
    new Map<string, MemoryDefinition>();

  register(memory: MemoryDefinition): void {
    this.registry.set(memory.id, memory);
  }

  unregister(id: string): boolean {
    return this.registry.delete(id);
  }

  get(id: string): MemoryDefinition | undefined {
    return this.registry.get(id);
  }

  exists(id: string): boolean {
    return this.registry.has(id);
  }

  list(): MemoryDefinition[] {
    return [...this.registry.values()];
  }

  count(): number {
    return this.registry.size;
  }

  clear(): void {
    this.registry.clear();
  }

  byType(type: MemoryType): MemoryDefinition[] {
    return this.list().filter(
      item => item.type === type
    );
  }

  byCategory(
    category: MemoryCategory
  ): MemoryDefinition[] {
    return this.list().filter(
      item => item.category === category
    );
  }
}

/**
 * Instância singleton oficial.
 */
export const memoryRegistry =
  new MemoryRegistry();

/**
 * Registros fundamentais.
 */

memoryRegistry.register({
  id: "working-memory",
  name: "Working Memory™",
  type: "working",
  category: "system",
  version: "1.0.0",
  description: "Memória de curto prazo do sistema.",
  enabled: true,
});

memoryRegistry.register({
  id: "long-term-memory",
  name: "Long-Term Memory™",
  type: "long-term",
  category: "knowledge",
  version: "1.0.0",
  description: "Memória persistente de longo prazo.",
  enabled: true,
});

memoryRegistry.register({
  id: "semantic-memory",
  name: "Semantic Memory™",
  type: "semantic",
  category: "knowledge",
  version: "1.0.0",
  description: "Memória de conceitos, relações e significados.",
  enabled: true,
});

memoryRegistry.register({
  id: "episodic-memory",
  name: "Episodic Memory™",
  type: "episodic",
  category: "event",
  version: "1.0.0",
  description: "Memória de eventos, experiências e episódios.",
  enabled: true,
});

memoryRegistry.register({
  id: "memory-cache",
  name: "Memory Cache™",
  type: "cache",
  category: "system",
  version: "1.0.0",
  description: "Cache cognitivo temporário.",
  enabled: true,
});
