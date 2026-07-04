/**
 * DCGLOBAL.AI™
 * Cognitive Kernel™
 *
 * Registry Oficial do Kernel.
 * Responsável por registrar,
 * localizar, listar e gerenciar
 * todos os componentes ativos
 * do Sistema Cognitivo Vivo.
 */

import {
  KernelComponent,
  KernelComponentType,
} from "./kernel.types";

export class KernelRegistry {

  private readonly components = new Map<string, KernelComponent>();

  /**
   * Registra um componente.
   */
  register(component: KernelComponent): void {

    if (this.components.has(component.id)) {
      throw new Error(
        `KernelRegistry: componente '${component.id}' já registrado.`
      );
    }

    this.components.set(component.id, component);
  }

  /**
   * Remove um componente.
   */
  unregister(id: string): boolean {
    return this.components.delete(id);
  }

  /**
   * Procura componente pelo ID.
   */
  find(id: string): KernelComponent | undefined {
    return this.components.get(id);
  }

  /**
   * Verifica existência.
   */
  exists(id: string): boolean {
    return this.components.has(id);
  }

  /**
   * Lista todos.
   */
  list(): KernelComponent[] {
    return Array.from(this.components.values());
  }

  /**
   * Lista por tipo.
   */
  listByType(
    type: KernelComponentType
  ): KernelComponent[] {

    return this.list().filter(
      component => component.type === type
    );
  }

  /**
   * Total registrado.
   */
  count(): number {
    return this.components.size;
  }

  /**
   * Limpa Registry.
   */
  clear(): void {
    this.components.clear();
  }

  /**
   * Estatísticas.
   */
  stats() {

    const components = this.list();

    return {

      total: components.length,

      core: this.listByType("core").length,

      modules: this.listByType("module").length,

      apis: this.listByType("api").length,

      shared: this.listByType("shared").length,

      infrastructure: this.listByType("infrastructure").length,

      agents: this.listByType("agent").length,

      engines: this.listByType("engine").length,

      workflows: this.listByType("workflow").length,

    };

  }

}

/**
 * Instância Singleton Oficial.
 */
export const kernelRegistry = new KernelRegistry();
