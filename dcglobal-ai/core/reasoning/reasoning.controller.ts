/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Controller oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningRecord,
} from "./reasoning.types";

import {
  reasoningStore,
} from "./reasoning.store";

import {
  runReasoningPipeline,
} from "./reasoning.pipeline";

import {
  validateReasoningRecord,
} from "./reasoning.validator";

import {
  integrateReasoning,
} from "./reasoning.integration";

import {
  setReasoningState,
} from "./reasoning.state";

import {
  dispatchReasoningEvent,
} from "./reasoning.dispatcher";

export function createReasoningControllerRecord(
  record: ReasoningRecord
): ReasoningRecord {
  setReasoningState(record.id, "created");

  dispatchReasoningEvent(record.id, "created");

  reasoningStore.add(record);

  return record;
}

export function processReasoningControllerRecord(
  record: ReasoningRecord
) {
  setReasoningState(record.id, "processing");

  dispatchReasoningEvent(record.id, "started");

  const validation =
    validateReasoningRecord(record);

  if (!validation.valid) {
    setReasoningState(record.id, "failed", {
      errors: validation.errors,
    });

    dispatchReasoningEvent(record.id, "failed", {
      errors: validation.errors,
    });

    return {
      record,
      validation,
      pipeline: null,
      integration: null,
      success: false,
    };
  }

  setReasoningState(record.id, "validated");

  dispatchReasoningEvent(record.id, "validated");

  const pipeline =
    runReasoningPipeline(record);

  const integration =
    integrateReasoning(record);

  setReasoningState(
    record.id,
    integration.integrated
      ? "completed"
      : "failed"
  );

  dispatchReasoningEvent(
    record.id,
    integration.integrated
      ? "completed"
      : "failed",
    "reasoning-controller",
    {
      integrated: integration.integrated,
      errors: integration.errors,
    }
  );

  return {
    record,
    validation,
    pipeline,
    integration,
    success: integration.integrated,
  };
}

export function archiveReasoningControllerRecord(
  id: string
): boolean {
  const record = reasoningStore.archive(id);

  if (!record) {
    return false;
  }

  setReasoningState(id, "archived");
  dispatchReasoningEvent(id, "archived");

  return true;
}
