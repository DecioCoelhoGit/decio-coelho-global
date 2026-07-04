/**
 * DCGLOBAL.AI™
 * Cognitive Memory™
 *
 * Store oficial da Memória Cognitiva.
 * Responsável pelo armazenamento,
 * consulta, atualização e remoção
 * dos registros cognitivos.
 */

import {
  MemoryRecord,
  MemoryCategory,
} from "./memory.types";

export class MemoryStore {

  private readonly records: MemoryRecord[] = [];

  /**
   * Adiciona um registro.
   */
  add(record: MemoryRecord): void {
    this.records.push(record);
  }

  /**
   * Localiza um registro.
   */
  get(id: string): MemoryRecord | undefined {
    return this.records.find(
      item => item.id === id
    );
  }

  /**
   * Atualiza um registro.
   */
  update(
    id: string,
    changes: Partial<MemoryRecord>
  ): boolean {

    const record = this.get(id);

    if (!record) {
      return false;
    }

    Object.assign(record, changes);

    return true;
  }

  /**
   * Remove um registro.
   */
  remove(id: string): boolean {

    const index = this.records.findIndex(
      item => item.id === id
    );

    if (index < 0) {
      return false;
    }

    this.records.splice(index, 1);

    return true;
  }

  /**
   * Lista todos os registros.
   */
  list(): MemoryRecord[] {
    return [...this.records];
  }

  /**
   * Filtra por categoria.
   */
  byCategory(
    category: MemoryCategory
  ): MemoryRecord[] {

    return this.records.filter(
      item => item.category === category
    );
  }

  /**
   * Pesquisa textual.
   */
  search(text: string): MemoryRecord[] {

    const value = text.toLowerCase();

    return this.records.filter(record =>
      record.title.toLowerCase().includes(value) ||
      record.content.toLowerCase().includes(value)
    );
  }

  /**
   * Quantidade de registros.
   */
  count(): number {
    return this.records.length;
  }

  /**
   * Limpa toda a memória.
   */
  clear(): void {
    this.records.length = 0;
  }

  /**
   * Verifica existência.
   */
  exists(id: string): boolean {
    return this.records.some(
      item => item.id === id
    );
  }
}

/**
 * Instância singleton oficial.
 */
export const memoryStore =
  new MemoryStore();
