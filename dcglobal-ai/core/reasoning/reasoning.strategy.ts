/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Strategy oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningStrategy,
  ReasoningType,
} from "./reasoning.types";

const reasoningStrategies: ReasoningStrategy[] = [];

export function registerReasoningStrategy(
  strategy: ReasoningStrategy
): ReasoningStrategy {
  reasoningStrategies.push(strategy);
  return strategy;
}

export function listReasoningStrategies():
  ReasoningStrategy[] {
  return [...reasoningStrategies];
}

export function findReasoningStrategy(
  id: string
): ReasoningStrategy | undefined {
  return reasoningStrategies.find(
    strategy => strategy.id === id
  );
}

export function findStrategiesByType(
  type: ReasoningType
): ReasoningStrategy[] {
  return reasoningStrategies.filter(
    strategy => strategy.type === type
  );
}

export function removeReasoningStrategy(
  id: string
): boolean {
  const index = reasoningStrategies.findIndex(
    strategy => strategy.id === id
  );

  if (index === -1) {
    return false;
  }

  reasoningStrategies.splice(index, 1);
  return true;
}

export function clearReasoningStrategies(): void {
  reasoningStrategies.length = 0;
}

export function countReasoningStrategies(): number {
  return reasoningStrategies.length;
}

export function getDefaultReasoningStrategy():
  ReasoningStrategy {
  return {
    id: "strategy-hybrid-default",
    name: "Hybrid Reasoning Strategy",
    type: "hybrid",
    description:
      "Default hybrid strategy combining contextual, semantic and evidence-based reasoning.",
  };
}
