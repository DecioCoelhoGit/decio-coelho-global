/**
 * DCGLOBAL.AI™
 * Cognitive Context™
 *
 * Sistema oficial de Pesquisa Contextual.
 * Responsável por localizar Contextos
 * através de chave, escopo, conteúdo
 * e similaridade.
 */

import {
  ContextRecord,
  ContextScope,
} from "./context.types";

import { contextStore } from "./context.store";

export class ContextSearch {

  searchByKey(
    key: string
  ): ContextRecord | undefined {
    return contextStore.findByKey(key);
  }

  searchByScope(
    scope: ContextScope
  ): ContextRecord[] {
    return contextStore.byScope(scope);
  }

  searchByText(
    text: string
  ): ContextRecord[] {

    const query = text.toLowerCase();

    return contextStore
      .list()
      .filter(record => {

        const keyScore =
          record.key
            .toLowerCase()
            .includes(query);

        const valueScore =
          JSON.stringify(record.value)
            .toLowerCase()
            .includes(query);

        return keyScore || valueScore;
      });
  }

  searchByMetadata(
    field: string,
    value: string
  ): ContextRecord[] {

    return contextStore
      .list()
      .filter(record => {

        const metadata =
          JSON.stringify(record.metadata ?? {})
            .toLowerCase();

        return metadata.includes(
          `${field.toLowerCase()}":"${value.toLowerCase()}`
        );
      });
  }

  searchRecent(
    limit = 10
  ): ContextRecord[] {

    return contextStore
      .list()
      .sort((a, b) =>
        b.updatedAt.localeCompare(a.updatedAt)
      )
      .slice(0, limit);
  }

  searchActive(): ContextRecord[] {

    return contextStore
      .list()
      .filter(
        record => record.status === "active"
      );
  }

  count(): number {
    return contextStore.count();
  }
}

export const contextSearch =
  new ContextSearch();
