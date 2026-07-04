import { CognitiveObject } from "./cognitive-object";

import {
  CognitiveAccessLevelValues,
  CognitiveObjectStatusValues,
  CognitiveVisibilityValues
} from "./cognitive-object.schema";

export interface CognitiveValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

function isValidISODate(value: string): boolean {
  const date = new Date(value);
  return !Number.isNaN(date.getTime());
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function validateCognitiveObject(
  object: Partial<CognitiveObject>
): CognitiveValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!object.id) errors.push("id is required.");
  if (!object.uuid) errors.push("uuid is required.");
  if (!object.type) errors.push("type is required.");
  if (!object.title) errors.push("title is required.");

  if (object.title && object.title.length < 3) {
    errors.push("title must have at least 3 characters.");
  }

  if (object.title && object.title.length > 180) {
    errors.push("title must have at most 180 characters.");
  }

  if (object.summary && object.summary.length > 500) {
    errors.push("summary must have at most 500 characters.");
  }

  if (!object.context || !isObject(object.context)) {
    errors.push("context must be a valid object.");
  }

  if (!object.metadata || !isObject(object.metadata)) {
    errors.push("metadata must be a valid object.");
  }

  if (!Array.isArray(object.relationships)) {
    errors.push("relationships must be an array.");
  }

  if (!object.governance || !isObject(object.governance)) {
    errors.push("governance must be a valid object.");
  } else {
    if (
      object.governance.visibility &&
      !CognitiveVisibilityValues.includes(object.governance.visibility)
    ) {
      errors.push("governance.visibility is invalid.");
    }

    if (
      object.governance.accessLevel &&
      !CognitiveAccessLevelValues.includes(object.governance.accessLevel)
    ) {
      errors.push("governance.accessLevel is invalid.");
    }

    if (typeof object.governance.auditRequired !== "boolean") {
      errors.push("governance.auditRequired must be boolean.");
    }
  }

  if (!object.lifecycle || !isObject(object.lifecycle)) {
    errors.push("lifecycle must be a valid object.");
  } else {
    if (
      object.lifecycle.status &&
      !CognitiveObjectStatusValues.includes(object.lifecycle.status)
    ) {
      errors.push("lifecycle.status is invalid.");
    }

    if (!object.lifecycle.version) {
      errors.push("lifecycle.version is required.");
    }

    if (!object.lifecycle.createdAt) {
      errors.push("lifecycle.createdAt is required.");
    } else if (!isValidISODate(object.lifecycle.createdAt)) {
      errors.push("lifecycle.createdAt must be ISO-8601.");
    }

    if (!object.lifecycle.updatedAt) {
      errors.push("lifecycle.updatedAt is required.");
    } else if (!isValidISODate(object.lifecycle.updatedAt)) {
      errors.push("lifecycle.updatedAt must be ISO-8601.");
    }
  }

  if (!object.slug) {
    warnings.push("slug is recommended.");
  }

  if (!object.metadata?.tags || object.metadata.tags.length === 0) {
    warnings.push("metadata.tags is recommended.");
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}
