/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Public Facade oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningRecord,
} from "./reasoning.types";

import {
  reasoningApi,
} from "./reasoning.api";

/**
 * Contrato público oficial
 * da Camada de Raciocínio.
 */
export interface ReasoningPublicApi {
  create(
    record: ReasoningRecord
  ): ReturnType<typeof reasoningApi.create>;

  process(
    record: ReasoningRecord
  ): ReturnType<typeof reasoningApi.process>;

  find(
    id: string
  ): ReturnType<typeof reasoningApi.find>;

  list():
    ReturnType<typeof reasoningApi.list>;

  search(
    query: Parameters<
      typeof reasoningApi.search
    >[0]
  ): ReturnType<typeof reasoningApi.search>;

  archive(
    id: string
  ): ReturnType<typeof reasoningApi.archive>;

  report():
    ReturnType<typeof reasoningApi.report>;
}

/**
 * Fachada pública imutável.
 *
 * Evita que consumidores externos
 * dependam diretamente dos módulos
 * internos da camada.
 */
export const reasoningPublic:
  Readonly<ReasoningPublicApi> =
  Object.freeze({
    create:
      reasoningApi.create.bind(reasoningApi),

    process:
      reasoningApi.process.bind(reasoningApi),

    find:
      reasoningApi.find.bind(reasoningApi),

    list:
      reasoningApi.list.bind(reasoningApi),

    search:
      reasoningApi.search.bind(reasoningApi),

    archive:
      reasoningApi.archive.bind(reasoningApi),

    report:
      reasoningApi.report.bind(reasoningApi),
  });

/**
 * Retorna a fachada pública oficial
 * da Camada de Raciocínio Cognitivo.
 */
export function getReasoningPublicApi():
  Readonly<ReasoningPublicApi> {
  return reasoningPublic;
}
