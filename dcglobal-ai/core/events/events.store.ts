/**
 * DCGLOBAL.AI™
 * Cognitive Events™
 *
 * Store oficial dos Eventos Cognitivos.
 * Responsável pela persistência em memória
 * dos eventos do Sistema Operacional Cognitivo.
 */

import {
  CognitiveEvent,
  CognitiveEventCategory,
} from "./events.types";

export class EventsStore {
  private readonly events: CognitiveEvent[] = [];

  /**
   * Adiciona um novo evento.
   */
  add(event: CognitiveEvent): void {
    this.events.push(event);
  }

  /**
   * Retorna todos os eventos.
   */
  getAll(): CognitiveEvent[] {
    return [...this.events];
  }

  /**
   * Procura um evento pelo ID.
   */
  getById(id: string): CognitiveEvent | undefined {
    return this.events.find(event => event.id === id);
  }

  /**
   * Filtra eventos por categoria.
   */
  getByCategory(
    category: CognitiveEventCategory
  ): CognitiveEvent[] {
    return this.events.filter(
      event => event.category === category
    );
  }

  /**
   * Remove um evento.
   */
  remove(id: string): boolean {
    const index = this.events.findIndex(
      event => event.id === id
    );

    if (index === -1) {
      return false;
    }

    this.events.splice(index, 1);

    return true;
  }

  /**
   * Remove todos os eventos.
   */
  clear(): void {
    this.events.length = 0;
  }

  /**
   * Quantidade de eventos.
   */
  count(): number {
    return this.events.length;
  }

  /**
   * Verifica existência.
   */
  exists(id: string): boolean {
    return this.events.some(
      event => event.id === id
    );
  }

  /**
   * Último evento registrado.
   */
  latest(): CognitiveEvent | undefined {
    return this.events.at(-1);
  }

  /**
   * Eventos mais recentes.
   */
  latestN(limit = 10): CognitiveEvent[] {
    return this.events.slice(-limit);
  }
}

/**
 * Instância singleton oficial.
 */
export const eventsStore =
  new EventsStore();
