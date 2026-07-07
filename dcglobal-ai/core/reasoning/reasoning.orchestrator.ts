/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Orchestrator oficial da
 * Camada de Raciocínio Cognitivo.
 *
 * Coordena o fluxo completo
 * de processamento cognitivo.
 */

import {
  ReasoningRecord,
  ReasoningDecision,
  ReasoningExplanation,
} from "./reasoning.types";

import { runReasoningEngine } from "./reasoning.engine";

import { cacheReasoning } from "./reasoning.cache";

import { createReasoningTrace } from "./reasoning.trace";

import { createReasoningAudit } from "./reasoning.audit";

import { persistReasoning } from "./reasoning.persistence";

import { createReasoningSnapshot } from "./reasoning.snapshot";

import { checkReasoningHealth } from "./reasoning.health";

/**
 * Contexto de execução
 * do Orchestrator.
 */

export interface ReasoningOrchestrationContext {
  actor?: string;
  source?: string;
  persist?: boolean;
  cache?: boolean;
  trace?: boolean;
  audit?: boolean;
  snapshot?: boolean;
  metadata?: Record<string, unknown>;
}

/**
 * Resultado oficial
 * da Orchestration.
 */

export interface ReasoningOrchestrationResult {
  record: ReasoningRecord;
  decision: ReasoningDecision;
  explanation: ReasoningExplanation;
  health: ReturnType<typeof checkReasoningHealth>;
  timestamp: string;
}

/**
 * Executa o fluxo completo
 * da Camada Reasoning.
 */

export function orchestrateReasoning(
  record: ReasoningRecord,
  context: ReasoningOrchestrationContext = {},
): ReasoningOrchestrationResult {
  const {
    actor = "reasoning-orchestrator",
    source = "cognitive-reasoning",
    persist = true,
    cache = true,
    trace = true,
    audit = true,
    snapshot = false,
    metadata = {},
  } = context;

  /**
   * Executa o Engine Cognitivo.
   */

  const engineResult = runReasoningEngine(record);

  /**
   * Registra Trace.
   */

  if (trace) {
    createReasoningTrace(
      record.id,
      "orchestration",
      "Reasoning orchestration completed.",
      actor,
    );
  }

  /**
   * Registra Audit.
   */

  if (audit) {
    createReasoningAudit(
      "orchestrate",
      record.id,
      actor,
      engineResult.success,
      {
        source,
        ...metadata,
      },
    );
  }

  /**
   * Atualiza Cache.
   */

  if (cache) {
    cacheReasoning(record);
  }

  /**
   * Executa Persistência.
   */

  if (persist) {
    persistReasoning([record]);
  }

  /**
   * Cria Snapshot opcional.
   */

  if (snapshot) {
    createReasoningSnapshot();
  }

  /**
   * Verifica Saúde da Camada.
   */

  const health = checkReasoningHealth();

  /**
   * Retorna resultado consolidado.
   */

  return {
    record,
    decision: engineResult.decision,
    explanation: engineResult.explanation,
    health,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Executa múltiplos registros
 * em sequência.
 */

export function orchestrateReasoningBatch(
  records: ReasoningRecord[],
  context: ReasoningOrchestrationContext = {},
): ReasoningOrchestrationResult[] {
  return records.map((record) =>
    orchestrateReasoning(record, context),
  );
}

/**
 * Verifica se uma Orchestration
 * foi concluída com sucesso.
 */

export function isReasoningOrchestrationSuccessful(
  result: ReasoningOrchestrationResult,
): boolean {
  return (
    result.record.status === "completed" &&
    result.health.status !== "critical"
  );
}
