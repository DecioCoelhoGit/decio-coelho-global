/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Gateway oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningRecord,
} from "./reasoning.types";

import {
  reasoningFacade,
} from "./reasoning.facade";

export type ReasoningGatewayAction =
  | "create"
  | "process"
  | "execute"
  | "find"
  | "list"
  | "search"
  | "archive"
  | "report";

export interface ReasoningGatewayRequest {
  action: ReasoningGatewayAction;
  record?: ReasoningRecord;
  id?: string;
  query?: Parameters<typeof reasoningFacade.search>[0];
  metadata?: Record<string, unknown>;
}

export interface ReasoningGatewayResponse {
  success: boolean;
  action: ReasoningGatewayAction;
  data?: unknown;
  error?: string;
  timestamp: string;
}

export function handleReasoningGatewayRequest(
  request: ReasoningGatewayRequest
): ReasoningGatewayResponse {
  try {
    let data: unknown;

    switch (request.action) {
      case "create":
        if (!request.record) {
          throw new Error("Missing reasoning record.");
        }
        data = reasoningFacade.create(request.record);
        break;

      case "process":
        if (!request.record) {
          throw new Error("Missing reasoning record.");
        }
        data = reasoningFacade.process(request.record);
        break;

      case "execute":
        if (!request.record) {
          throw new Error("Missing reasoning record.");
        }
        data = reasoningFacade.execute(request.record);
        break;

      case "find":
        if (!request.id) {
          throw new Error("Missing reasoning id.");
        }
        data = reasoningFacade.find(request.id);
        break;

      case "list":
        data = reasoningFacade.list();
        break;

      case "search":
        if (!request.query) {
          throw new Error("Missing reasoning search query.");
        }
        data = reasoningFacade.search(request.query);
        break;

      case "archive":
        if (!request.id) {
          throw new Error("Missing reasoning id.");
        }
        data = reasoningFacade.archive(request.id);
        break;

      case "report":
        data = reasoningFacade.report();
        break;
    }

    return {
      success: true,
      action: request.action,
      data,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      success: false,
      action: request.action,
      error:
        error instanceof Error
          ? error.message
          : String(error),
      timestamp: new Date().toISOString(),
    };
  }
}

export const reasoningGateway = {
  handle: handleReasoningGatewayRequest,
};
