/**
 * ---------------------------------------------------------
 * DCGLOBAL.AI™
 * Cognitive Object Model™
 * Lifecycle Manager
 * ---------------------------------------------------------
 */

import { CognitiveObject } from "./cognitive-object";

function touch(object: CognitiveObject): void {
  object.lifecycle.updatedAt = new Date().toISOString();
}

export function activate(object: CognitiveObject): CognitiveObject {
  object.lifecycle.status = "active";
  touch(object);
  return object;
}

export function deactivate(object: CognitiveObject): CognitiveObject {
  object.lifecycle.status = "inactive";
  touch(object);
  return object;
}

export function archive(object: CognitiveObject): CognitiveObject {
  object.lifecycle.status = "archived";
  object.lifecycle.archivedAt = new Date().toISOString();
  touch(object);
  return object;
}

export function deprecate(object: CognitiveObject): CognitiveObject {
  object.lifecycle.status = "deprecated";
  touch(object);
  return object;
}

export function remove(object: CognitiveObject): CognitiveObject {
  object.lifecycle.status = "deleted";
  object.lifecycle.deletedAt = new Date().toISOString();
  touch(object);
  return object;
}

export function restore(object: CognitiveObject): CognitiveObject {
  object.lifecycle.status = "active";
  object.lifecycle.archivedAt = undefined;
  object.lifecycle.deletedAt = undefined;
  touch(object);
  return object;
}

export function publish(object: CognitiveObject): CognitiveObject {
  object.lifecycle.status = "active";

  const version = object.lifecycle.version.split(".").map(Number);

  const major = version[0] ?? 1;
  const minor = version[1] ?? 0;
  const patch = (version[2] ?? 0) + 1;

  object.lifecycle.version = `${major}.${minor}.${patch}`;

  touch(object);

  return object;
}

export function newRevision(object: CognitiveObject): CognitiveObject {
  const version = object.lifecycle.version.split(".").map(Number);

  const major = version[0] ?? 1;
  const minor = (version[1] ?? 0) + 1;

  object.lifecycle.version = `${major}.${minor}.0`;

  touch(object);

  return object;
}

export function newMajorVersion(object: CognitiveObject): CognitiveObject {
  const version = object.lifecycle.version.split(".").map(Number);

  const major = (version[0] ?? 1) + 1;

  object.lifecycle.version = `${major}.0.0`;

  touch(object);

  return object;
}

export function update(object: CognitiveObject): CognitiveObject {
  touch(object);
  return object;
}

export function isActive(object: CognitiveObject): boolean {
  return object.lifecycle.status === "active";
}

export function isArchived(object: CognitiveObject): boolean {
  return object.lifecycle.status === "archived";
}

export function isDeprecated(object: CognitiveObject): boolean {
  return object.lifecycle.status === "deprecated";
}

export function isDeleted(object: CognitiveObject): boolean {
  return object.lifecycle.status === "deleted";
}

export function getStatus(object: CognitiveObject): string {
  return object.lifecycle.status;
}

export function getVersion(object: CognitiveObject): string {
  return object.lifecycle.version;
}
