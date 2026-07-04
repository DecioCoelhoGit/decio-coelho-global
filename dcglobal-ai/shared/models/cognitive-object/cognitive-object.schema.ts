import {
  CognitiveAccessLevel,
  CognitiveObjectStatus,
  CognitiveVisibility
} from "./cognitive-object.types";

export const CognitiveObjectStatusValues: CognitiveObjectStatus[] = [
  "draft",
  "active",
  "inactive",
  "archived",
  "deprecated",
  "deleted"
];

export const CognitiveVisibilityValues: CognitiveVisibility[] = [
  "public",
  "private",
  "internal",
  "restricted"
];

export const CognitiveAccessLevelValues: CognitiveAccessLevel[] = [
  "open",
  "protected",
  "confidential"
];

export const CognitiveObjectSchema = {
  id: {
    type: "string",
    required: true
  },

  uuid: {
    type: "string",
    required: true,
    format: "uuid"
  },

  slug: {
    type: "string",
    required: false
  },

  type: {
    type: "string",
    required: true
  },

  category: {
    type: "string",
    required: false
  },

  title: {
    type: "string",
    required: true,
    minLength: 3,
    maxLength: 180
  },

  summary: {
    type: "string",
    required: false,
    maxLength: 500
  },

  description: {
    type: "string",
    required: false
  },

  context: {
    type: "object",
    required: true
  },

  metadata: {
    type: "object",
    required: true
  },

  relationships: {
    type: "array",
    required: true
  },

  governance: {
    type: "object",
    required: true,
    properties: {
      visibility: CognitiveVisibilityValues,
      accessLevel: CognitiveAccessLevelValues,
      auditRequired: "boolean"
    }
  },

  lifecycle: {
    type: "object",
    required: true,
    properties: {
      status: CognitiveObjectStatusValues,
      version: "string",
      createdAt: "ISO-8601",
      updatedAt: "ISO-8601"
    }
  },

  audit: {
    type: "object",
    required: false
  },

  payload: {
    type: "object",
    required: false
  }
};

export default CognitiveObjectSchema;
