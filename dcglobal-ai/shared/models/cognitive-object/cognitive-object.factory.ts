import { randomUUID } from "crypto";

import {
  CognitiveObject,
  CognitiveContext,
  CognitiveGovernance,
  CognitiveLifecycle,
  CognitiveMetadata
} from "./cognitive-object";

export interface CreateCognitiveObjectParams<TPayload = Record<string, unknown>> {
  type: string;
  title: string;
  category?: string;
  summary?: string;
  description?: string;
  context?: Partial<CognitiveContext>;
  metadata?: Partial<CognitiveMetadata>;
  governance?: Partial<CognitiveGovernance>;
  payload?: TPayload;
}

function createCognitiveId(type: string): string {
  const prefix = type
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 6) || "COG";

  return `${prefix}-${Date.now()}`;
}

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function createCognitiveObject<TPayload = Record<string, unknown>>(
  params: CreateCognitiveObjectParams<TPayload>
): CognitiveObject<TPayload> {
  const now = new Date().toISOString();

  const lifecycle: CognitiveLifecycle = {
    status: "draft",
    version: "1.0.0",
    createdAt: now,
    updatedAt: now
  };

  return {
    id: createCognitiveId(params.type),
    uuid: randomUUID(),
    slug: createSlug(params.title),

    type: params.type,
    category: params.category,
    title: params.title,
    summary: params.summary,
    description: params.description,

    context: {
      ...params.context
    },

    metadata: {
      tags: [],
      keywords: [],
      ...params.metadata
    },

    relationships: [],

    governance: {
      visibility: "internal",
      accessLevel: "protected",
      auditRequired: true,
      ...params.governance
    },

    lifecycle,

    audit: {
      createdBy: params.metadata?.createdBy,
      updatedBy: params.metadata?.updatedBy,
      createdAt: now,
      updatedAt: now
    },

    payload: params.payload
  };
}

export function cloneCognitiveObject<TPayload = Record<string, unknown>>(
  object: CognitiveObject<TPayload>
): CognitiveObject<TPayload> {
  const now = new Date().toISOString();

  return {
    ...object,
    id: createCognitiveId(object.type),
    uuid: randomUUID(),
    lifecycle: {
      ...object.lifecycle,
      status: "draft",
      version: "1.0.0",
      createdAt: now,
      updatedAt: now
    },
    audit: {
      ...object.audit,
      createdAt: now,
      updatedAt: now
    }
  };
}
