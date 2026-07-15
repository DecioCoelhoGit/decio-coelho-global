"use strict";

/**
 * ================================================================
 * FESTANÇA DE VILA BELA 2026
 * CURATION ENGINE
 * ================================================================
 *
 * Arquivo:
 * apps/festanca-2026/js/curation-engine.js
 *
 * Finalidade:
 * Camada operacional responsável pela criação, organização,
 * validação, evolução, preservação e exportação dos Registros
 * Históricos Curatoriais da FESTANÇA 2026.
 *
 * Integrações previstas:
 * - data/curation-records-2026.json
 * - data/curation-record-schema.json
 * - data/field-observations-2026.json
 * - data/field-observation-schema.json
 * - data/programacao-2026.json
 * - data/locais-2026.json
 * - data/grupos-tradicionais-2026.json
 * - data/daily-log/
 *
 * Princípio:
 * Registrar o presente, validar o acontecimento, preservar a
 * memória e transmitir o patrimônio cultural às futuras gerações.
 *
 * ================================================================
 */

(function initializeCurationEngine(global) {
  const ENGINE_NAME = "FestancaCurationEngine";
  const ENGINE_VERSION = "1.0.0";

  const DEFAULT_PATHS = Object.freeze({
    repository: "./data/curation-records-2026.json",
    recordSchema: "./data/curation-record-schema.json",
    observations: "./data/field-observations-2026.json",
    observationSchema: "./data/field-observation-schema.json",
    program: "./data/programacao-2026.json",
    locations: "./data/locais-2026.json",
    traditionalGroups: "./data/grupos-tradicionais-2026.json"
  });

  const STORAGE_KEYS = Object.freeze({
    repository: "festanca-2026-curation-repository",
    configuration: "festanca-2026-curation-configuration",
    lastSession: "festanca-2026-curation-last-session"
  });

  const CURATION_STAGES = Object.freeze([
    "observacao",
    "registro-primario",
    "triagem",
    "organizacao",
    "verificacao",
    "enriquecimento-historico",
    "classificacao-de-privacidade",
    "validacao",
    "preparacao-para-publicacao",
    "publicado",
    "preservacao-permanente",
    "arquivado"
  ]);

  const PUBLICATION_STATUSES = Object.freeze([
    "not-prepared",
    "em-preparacao",
    "aguardando-autorizacao",
    "aprovado",
    "publicado",
    "restrito",
    "embargado",
    "arquivado"
  ]);

  const VALIDATION_STATUSES = Object.freeze([
    "rascunho",
    "em-verificacao",
    "aguardando-validacao",
    "parcialmente-validado",
    "validado",
    "validado-com-ressalvas",
    "contestado",
    "rejeitado"
  ]);

  const RECORD_STATUSES = Object.freeze([
    "rascunho",
    "ativo",
    "em-curadoria",
    "em-validacao",
    "validado",
    "publicado",
    "restrito",
    "memoria-permanente",
    "arquivado"
  ]);

  const KNOWLEDGE_CLASSIFICATIONS = Object.freeze([
    "fato-observado",
    "fato-documentado",
    "informacao-institucional",
    "relato-de-participante",
    "memoria-oral",
    "memoria-pessoal",
    "contexto-historico",
    "interpretacao-curatorial",
    "hipotese",
    "informacao-pendente",
    "informacao-contestada"
  ]);

  const TERMINAL_STAGES = Object.freeze([
    "preservacao-permanente",
    "arquivado"
  ]);

  const state = {
    initialized: false,
    processing: false,
    completed: false,
    error: null,
    initializedAt: null,
    updatedAt: null,

    repository: null,
    schema: null,
    observationsRepository: null,
    observationSchema: null,
    program: null,
    locations: null,
    traditionalGroups: null,

    indexes: {
      recordsById: new Map(),
      observationsById: new Map(),
      activitiesById: new Map(),
      locationsById: new Map(),
      groupsById: new Map()
    },

    configuration: {
      paths: { ...DEFAULT_PATHS },
      useLocalStorage: true,
      preferLocalRepository: true,
      autoRecalculateStatistics: true,
      autoPersist: true,
      strictTransitions: true,
      requirePrivacyReviewForPublication: true,
      requireValidationForPermanentMemory: true,
      debug: false
    },

    lastOperation: null,
    operationHistory: []
  };

  /**
   * ================================================================
   * UTILITÁRIOS FUNDAMENTAIS
   * ================================================================
   */

  function nowISO() {
    return new Date().toISOString();
  }

  function clone(value) {
    if (value === undefined) {
      return undefined;
    }

    if (
      typeof global.structuredClone === "function"
    ) {
      try {
        return global.structuredClone(value);
      } catch (error) {
        debugWarn("structuredClone não pôde ser utilizado.", error);
      }
    }

    return JSON.parse(JSON.stringify(value));
  }

  function isObject(value) {
    return (
      value !== null &&
      typeof value === "object" &&
      !Array.isArray(value)
    );
  }

  function isNonEmptyString(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function normalizeString(value) {
    return isNonEmptyString(value) ? value.trim() : "";
  }

  function normalizeArray(value) {
    return Array.isArray(value) ? value : [];
  }

  function uniqueArray(values) {
    return Array.from(
      new Set(
        normalizeArray(values)
          .filter((value) => value !== null && value !== undefined)
      )
    );
  }

  function ensureArrayField(target, fieldName) {
    if (!Array.isArray(target[fieldName])) {
      target[fieldName] = [];
    }

    return target[fieldName];
  }

  function deepMerge(target, source) {
    if (!isObject(target)) {
      return clone(source);
    }

    if (!isObject(source)) {
      return clone(target);
    }

    const result = clone(target);

    Object.keys(source).forEach((key) => {
      const sourceValue = source[key];
      const targetValue = result[key];

      if (Array.isArray(sourceValue)) {
        result[key] = clone(sourceValue);
        return;
      }

      if (isObject(sourceValue) && isObject(targetValue)) {
        result[key] = deepMerge(targetValue, sourceValue);
        return;
      }

      result[key] = clone(sourceValue);
    });

    return result;
  }

  function safeJSONParse(value, fallback = null) {
    try {
      return JSON.parse(value);
    } catch (error) {
      debugWarn("Falha ao interpretar JSON.", error);
      return fallback;
    }
  }

  function slugify(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function addUniqueValue(array, value) {
    if (!Array.isArray(array)) {
      return false;
    }

    if (
      value === null ||
      value === undefined ||
      value === ""
    ) {
      return false;
    }

    if (!array.includes(value)) {
      array.push(value);
      return true;
    }

    return false;
  }

  function debugLog(...args) {
    if (state.configuration.debug && global.console) {
      console.log(`[${ENGINE_NAME}]`, ...args);
    }
  }

  function debugWarn(...args) {
    if (state.configuration.debug && global.console) {
      console.warn(`[${ENGINE_NAME}]`, ...args);
    }
  }

  function debugError(...args) {
    if (global.console) {
      console.error(`[${ENGINE_NAME}]`, ...args);
    }
  }

  function assertInitialized() {
    if (!state.initialized || !state.repository) {
      throw new Error(
        "O motor de curadoria ainda não foi inicializado."
      );
    }
  }

  function assertRepository() {
    if (
      !state.repository ||
      !Array.isArray(state.repository.records)
    ) {
      throw new Error(
        "O repositório curatorial não está disponível ou é inválido."
      );
    }
  }

  function createOperationResult(
    success,
    code,
    message,
    data = null,
    warnings = []
  ) {
    return {
      success,
      code,
      message,
      data,
      warnings: normalizeArray(warnings),
      timestamp: nowISO()
    };
  }

  function registerOperation(type, details = {}) {
    const operation = {
      id: `operation-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 8)}`,
      type,
      timestamp: nowISO(),
      details: clone(details)
    };

    state.lastOperation = operation;
    state.operationHistory.push(operation);

    if (state.operationHistory.length > 100) {
      state.operationHistory.shift();
    }

    return operation;
  }

  /**
   * ================================================================
   * CARREGAMENTO DOS ARQUIVOS
   * ================================================================
   */

  async function fetchJSON(path, options = {}) {
    const {
      required = true,
      cache = "no-store"
    } = options;

    try {
      const response = await fetch(path, { cache });

      if (!response.ok) {
        throw new Error(
          `HTTP ${response.status} ao carregar ${path}`
        );
      }

      return await response.json();
    } catch (error) {
      if (required) {
        throw error;
      }

      debugWarn(`Arquivo opcional não carregado: ${path}`, error);
      return null;
    }
  }

  function loadLocalRepository() {
    if (
      !state.configuration.useLocalStorage ||
      !state.configuration.preferLocalRepository ||
      typeof global.localStorage === "undefined"
    ) {
      return null;
    }

    const stored = global.localStorage.getItem(
      STORAGE_KEYS.repository
    );

    if (!stored) {
      return null;
    }

    const parsed = safeJSONParse(stored, null);

    if (
      parsed &&
      isObject(parsed) &&
      Array.isArray(parsed.records)
    ) {
      return parsed;
    }

    return null;
  }

  function persistRepository() {
    assertRepository();

    if (
      !state.configuration.useLocalStorage ||
      !state.configuration.autoPersist ||
      typeof global.localStorage === "undefined"
    ) {
      return false;
    }

    try {
      global.localStorage.setItem(
        STORAGE_KEYS.repository,
        JSON.stringify(state.repository)
      );

      global.localStorage.setItem(
        STORAGE_KEYS.lastSession,
        JSON.stringify({
          engineVersion: ENGINE_VERSION,
          savedAt: nowISO(),
          totalRecords: state.repository.records.length
        })
      );

      return true;
    } catch (error) {
      debugWarn(
        "Não foi possível persistir o repositório localmente.",
        error
      );
      return false;
    }
  }

  function clearLocalRepository() {
    if (typeof global.localStorage === "undefined") {
      return false;
    }

    global.localStorage.removeItem(STORAGE_KEYS.repository);
    global.localStorage.removeItem(STORAGE_KEYS.lastSession);

    return true;
  }

  /**
   * ================================================================
   * INDEXAÇÃO
   * ================================================================
   */

  function buildMap(items, idFields = ["id"]) {
    const map = new Map();

    normalizeArray(items).forEach((item) => {
      if (!isObject(item)) {
        return;
      }

      const identifier = idFields
        .map((field) => item[field])
        .find(isNonEmptyString);

      if (identifier) {
        map.set(identifier, item);
      }
    });

    return map;
  }

  function rebuildIndexes() {
    assertRepository();

    state.indexes.recordsById = buildMap(
      state.repository.records
    );

    const observations =
      state.observationsRepository?.observations ||
      state.observationsRepository?.records ||
      [];

    state.indexes.observationsById = buildMap(observations);

    state.indexes.activitiesById = buildMap(
      state.program?.activities || []
    );

    const locations =
      state.locations?.locations ||
      state.locations?.places ||
      state.locations?.items ||
      [];

    state.indexes.locationsById = buildMap(locations, [
      "id",
      "locationId"
    ]);

    const groups =
      state.traditionalGroups?.groups ||
      state.traditionalGroups?.traditionalGroups ||
      [];

    state.indexes.groupsById = buildMap(groups);

    return {
      records: state.indexes.recordsById.size,
      observations: state.indexes.observationsById.size,
      activities: state.indexes.activitiesById.size,
      locations: state.indexes.locationsById.size,
      traditionalGroups: state.indexes.groupsById.size
    };
  }

  /**
   * ================================================================
   * IDENTIFICADORES
   * ================================================================
   */

  function getRecordIdPolicy() {
    return state.repository?.recordIdPolicy || {
      prefix: "festanca-2026-curation-",
      numericLength: 4,
      firstId: "festanca-2026-curation-0001",
      reuseDeletedIds: false
    };
  }

  function extractNumericId(recordId, prefix) {
    if (!isNonEmptyString(recordId)) {
      return null;
    }

    const normalizedPrefix = prefix || "";
    const numericPart = recordId.startsWith(normalizedPrefix)
      ? recordId.slice(normalizedPrefix.length)
      : recordId.match(/(\d+)$/)?.[1];

    if (!numericPart || !/^\d+$/.test(numericPart)) {
      return null;
    }

    return Number(numericPart);
  }

  function generateNextRecordId() {
    assertRepository();

    const policy = getRecordIdPolicy();
    const prefix = policy.prefix || "festanca-2026-curation-";
    const numericLength = Number(policy.numericLength) || 4;

    const usedNumbers = state.repository.records
      .map((record) => extractNumericId(record.id, prefix))
      .filter(Number.isFinite);

    const highestNumber =
      usedNumbers.length > 0
        ? Math.max(...usedNumbers)
        : 0;

    const nextNumber = highestNumber + 1;

    return `${prefix}${String(nextNumber).padStart(
      numericLength,
      "0"
    )}`;
  }

  function isRecordIdAvailable(recordId) {
    return !state.indexes.recordsById.has(recordId);
  }

  /**
   * ================================================================
   * MODELO E NORMALIZAÇÃO DOS REGISTROS
   * ================================================================
   */

  function getInitialTemplate() {
    assertRepository();

    const template = state.repository.initialRecordTemplate;

    if (!isObject(template)) {
      throw new Error(
        "O bloco initialRecordTemplate não foi encontrado."
      );
    }

    return clone(template);
  }

  function createBaseRecord(input = {}) {
    const template = getInitialTemplate();
    const generatedId = generateNextRecordId();
    const timestamp = nowISO();

    const record = deepMerge(template, input);

    record.id = generatedId;
    record.eventId =
      record.eventId ||
      state.repository.eventId ||
      "festanca-vila-bela-2026";

    record.title =
      normalizeString(record.title) ||
      "Registro Histórico Curatorial sem título";

    record.curationStage =
      CURATION_STAGES.includes(record.curationStage)
        ? record.curationStage
        : "observacao";

    record.status =
      RECORD_STATUSES.includes(record.status)
        ? record.status
        : "rascunho";

    record.activityId =
      normalizeString(record.activityId) || null;

    record.observationIds = uniqueArray(
      record.observationIds
    );

    record.dailyLogReferences = uniqueArray(
      record.dailyLogReferences
    );

    record.categories = uniqueArray(record.categories);
    record.keywords = uniqueArray(record.keywords);
    record.knowledgeClassification = uniqueArray(
      record.knowledgeClassification
    );

    if (record.knowledgeClassification.length === 0) {
      record.knowledgeClassification = ["fato-observado"];
    }

    ensureArrayField(record, "sources");
    ensureArrayField(record, "people");
    ensureArrayField(record, "groups");
    ensureArrayField(record, "locations");
    ensureArrayField(record, "media");
    ensureArrayField(record, "testimonies");
    ensureArrayField(record, "revisionHistory");
    ensureArrayField(record, "relatedRecords");
    ensureArrayField(record, "pendingActions");

    record.provenance = isObject(record.provenance)
      ? record.provenance
      : {};

    record.provenance.origin =
      record.provenance.origin || "registro-de-campo";

    record.provenance.createdAt = timestamp;
    record.provenance.updatedAt = null;
    record.provenance.revision = 1;

    record.provenance.repositoryPath =
      state.repository.repositoryProvenance?.repositoryPath ||
      "apps/festanca-2026/data/curation-records-2026.json";

    record.validation = isObject(record.validation)
      ? record.validation
      : {};

    record.validation.status =
      VALIDATION_STATUSES.includes(record.validation.status)
        ? record.validation.status
        : "rascunho";

    ensureArrayField(record.validation, "validators");
    ensureArrayField(
      record.validation,
      "conflictingInformation"
    );
    ensureArrayField(record.validation, "pendingQuestions");

    record.publication = isObject(record.publication)
      ? record.publication
      : {};

    record.publication.status =
      PUBLICATION_STATUSES.includes(record.publication.status)
        ? record.publication.status
        : "not-prepared";

    record.privacy = isObject(record.privacy)
      ? record.privacy
      : {
          level: "interno",
          containsPersonalData: false,
          containsChildren: false,
          containsPrivateResidence: false,
          containsSacredOrRestrictedKnowledge: false,
          exactLocationMayBePublished: false,
          requiresAnonymization: false,
          restrictions: [],
          reviewStatus: "not-reviewed"
        };

    ensureArrayField(record.privacy, "restrictions");

    record.preservation = isObject(record.preservation)
      ? record.preservation
      : {};

    record.preservation.status =
      record.preservation.status || "em-processamento";

    record.preservation.permanentMemoryEligible = Boolean(
      record.preservation.permanentMemoryEligible
    );

    ensureArrayField(
      record.preservation,
      "eligibilityReasons"
    );

    return record;
  }

  function normalizeExistingRecord(record) {
    if (!isObject(record)) {
      throw new TypeError("Registro inválido.");
    }

    record.observationIds = uniqueArray(record.observationIds);
    record.dailyLogReferences = uniqueArray(
      record.dailyLogReferences
    );
    record.categories = uniqueArray(record.categories);
    record.keywords = uniqueArray(record.keywords);
    record.knowledgeClassification = uniqueArray(
      record.knowledgeClassification
    );

    ensureArrayField(record, "sources");
    ensureArrayField(record, "people");
    ensureArrayField(record, "groups");
    ensureArrayField(record, "locations");
    ensureArrayField(record, "media");
    ensureArrayField(record, "testimonies");
    ensureArrayField(record, "revisionHistory");
    ensureArrayField(record, "relatedRecords");
    ensureArrayField(record, "pendingActions");

    if (!isObject(record.provenance)) {
      record.provenance = {};
    }

    if (!Number.isInteger(record.provenance.revision)) {
      record.provenance.revision = 1;
    }

    return record;
  }

  /**
   * ================================================================
   * CRIAÇÃO E EDIÇÃO
   * ================================================================
   */

  function createRecord(input = {}, options = {}) {
    assertInitialized();
    assertRepository();

    const record = createBaseRecord(input);

    if (
      record.activityId &&
      options.linkActivity !== false
    ) {
      enrichRecordFromActivity(record, record.activityId);
    }

    normalizeArray(input.observationIds).forEach(
      (observationId) => {
        linkObservationToRecordObject(record, observationId, {
          enrich: options.enrichFromObservations !== false,
          silent: true
        });
      }
    );

    const validation = validateRecord(record, {
      mode: "creation",
      includeWarnings: true
    });

    state.repository.records.push(record);
    rebuildIndexes();

    addRevision(record, {
      action: "record-created",
      summary: "Registro Histórico Curatorial criado.",
      changedBy:
        options.createdBy ||
        record.provenance?.createdBy ||
        null
    });

    updateRepositoryMetadata();

    if (state.configuration.autoRecalculateStatistics) {
      recalculateStatistics();
    }

    persistRepository();

    registerOperation("create-record", {
      recordId: record.id,
      validation
    });

    return createOperationResult(
      true,
      "record-created",
      `Registro ${record.id} criado com sucesso.`,
      clone(record),
      validation.warnings
    );
  }

  function updateRecord(recordId, changes = {}, options = {}) {
    assertInitialized();

    const record = getRecordById(recordId, {
      cloneResult: false
    });

    if (!record) {
      return createOperationResult(
        false,
        "record-not-found",
        `Registro não encontrado: ${recordId}`
      );
    }

    if (TERMINAL_STAGES.includes(record.curationStage)) {
      if (!options.allowTerminalEdit) {
        return createOperationResult(
          false,
          "terminal-record-protected",
          "O registro está em uma etapa terminal e exige autorização explícita para edição."
        );
      }
    }

    const before = clone(record);
    const protectedId = record.id;
    const protectedCreatedAt =
      record.provenance?.createdAt || null;

    const merged = deepMerge(record, changes);

    Object.keys(record).forEach((key) => {
      delete record[key];
    });

    Object.assign(record, merged);

    record.id = protectedId;

    normalizeExistingRecord(record);

    record.provenance.createdAt =
      protectedCreatedAt || record.provenance.createdAt;

    record.provenance.updatedAt = nowISO();
    record.provenance.updatedBy =
      options.updatedBy ||
      changes?.provenance?.updatedBy ||
      null;

    record.provenance.revision =
      Number(record.provenance.revision || 1) + 1;

    const changedFields = detectChangedFields(before, record);

    addRevision(record, {
      action: "record-updated",
      summary:
        options.summary ||
        "Registro Histórico Curatorial atualizado.",
      changedFields,
      changedBy: record.provenance.updatedBy
    });

    const validation = validateRecord(record, {
      mode: "update",
      includeWarnings: true
    });

    rebuildIndexes();
    updateRepositoryMetadata();

    if (state.configuration.autoRecalculateStatistics) {
      recalculateStatistics();
    }

    persistRepository();

    registerOperation("update-record", {
      recordId,
      changedFields
    });

    return createOperationResult(
      true,
      "record-updated",
      `Registro ${recordId} atualizado com sucesso.`,
      clone(record),
      validation.warnings
    );
  }

  function detectChangedFields(before, after, prefix = "") {
    const changes = [];

    const keys = uniqueArray([
      ...Object.keys(before || {}),
      ...Object.keys(after || {})
    ]);

    keys.forEach((key) => {
      if (
        key === "revisionHistory" ||
        key === "provenance"
      ) {
        return;
      }

      const path = prefix ? `${prefix}.${key}` : key;
      const beforeValue = before?.[key];
      const afterValue = after?.[key];

      if (
        isObject(beforeValue) &&
        isObject(afterValue)
      ) {
        changes.push(
          ...detectChangedFields(beforeValue, afterValue, path)
        );
        return;
      }

      if (
        JSON.stringify(beforeValue) !==
        JSON.stringify(afterValue)
      ) {
        changes.push(path);
      }
    });

    return uniqueArray(changes);
  }

  function addRevision(record, revisionData = {}) {
    ensureArrayField(record, "revisionHistory");

    const revisionNumber =
      Number(record.provenance?.revision || 1);

    const revision = {
      revision: revisionNumber,
      timestamp: nowISO(),
      action: revisionData.action || "record-updated",
      summary:
        revisionData.summary ||
        "Atualização do registro curatorial.",
      changedFields: uniqueArray(
        revisionData.changedFields || []
      ),
      changedBy: revisionData.changedBy || null,
      notes: revisionData.notes || null
    };

    record.revisionHistory.push(revision);

    return revision;
  }

  /**
   * ================================================================
   * VÍNCULO COM A PROGRAMAÇÃO
   * ================================================================
   */

  function enrichRecordFromActivity(record, activityId) {
    const activity =
      state.indexes.activitiesById.get(activityId);

    if (!activity) {
      addUniqueValue(
        record.validation.pendingQuestions,
        `Atividade não localizada: ${activityId}`
      );

      return {
        linked: false,
        reason: "activity-not-found"
      };
    }

    record.activityId = activity.id;

    if (!record.eventDate && activity.date) {
      record.eventDate = activity.date;
    }

    if (!record.startTime && activity.startTime) {
      record.startTime = activity.startTime;
    }

    if (!record.endTime && activity.endTime) {
      record.endTime = activity.endTime;
    }

    if (
      !isNonEmptyString(record.title) ||
      record.title ===
        "Registro Histórico Curatorial sem título"
    ) {
      record.title = activity.title || record.title;
    }

    if (!isNonEmptyString(record.summary)) {
      record.summary =
        activity.description ||
        `Registro relacionado à atividade “${activity.title}”.`;
    }

    record.categories = uniqueArray([
      ...record.categories,
      ...normalizeArray(activity.categories)
    ]);

    if (activity.locationId) {
      linkLocationToRecordObject(record, activity.locationId, {
        silent: true
      });
    } else if (isObject(activity.location)) {
      const existingLocation = record.locations.find(
        (location) =>
          location.activityLocation === true
      );

      if (!existingLocation) {
        record.locations.push({
          id: null,
          name:
            activity.location.name ||
            "Local não identificado",
          type:
            activity.location.type ||
            "local-nao-classificado",
          role: "local-da-atividade",
          activityLocation: true,
          privacyLevel:
            activity.location.type === "residencia"
              ? "protected"
              : "public",
          exactLocationMayBePublished:
            activity.location.type !== "residencia",
          source: "programacao-2026.json"
        });
      }
    }

    normalizeArray(activity.participants).forEach(
      (participant) => {
        const alreadyExists = record.people.some(
          (person) =>
            person.name === participant.name &&
            person.role === participant.role
        );

        if (!alreadyExists) {
          record.people.push({
            name: participant.name || null,
            role: participant.role || null,
            participationType: "participante-da-atividade",
            source: "programacao-2026.json",
            consentStatus: "nao-verificado"
          });
        }
      }
    );

    return {
      linked: true,
      activity: clone(activity)
    };
  }

  function linkActivity(recordId, activityId, options = {}) {
    const record = getRecordById(recordId, {
      cloneResult: false
    });

    if (!record) {
      return createOperationResult(
        false,
        "record-not-found",
        `Registro não encontrado: ${recordId}`
      );
    }

    const result = enrichRecordFromActivity(
      record,
      activityId
    );

    if (!result.linked) {
      return createOperationResult(
        false,
        "activity-not-found",
        `Atividade não encontrada: ${activityId}`
      );
    }

    touchRecord(record, options.updatedBy);

    addRevision(record, {
      action: "activity-linked",
      summary: `Atividade ${activityId} vinculada ao registro.`,
      changedFields: ["activityId"],
      changedBy: options.updatedBy || null
    });

    finalizeMutation("link-activity", {
      recordId,
      activityId
    });

    return createOperationResult(
      true,
      "activity-linked",
      `Atividade ${activityId} vinculada ao registro ${recordId}.`,
      clone(record)
    );
  }

  /**
   * ================================================================
   * VÍNCULO COM OBSERVAÇÕES DE CAMPO
   * ================================================================
   */

  function findObservation(observationId) {
    return (
      state.indexes.observationsById.get(observationId) ||
      null
    );
  }

  function linkObservationToRecordObject(
    record,
    observationId,
    options = {}
  ) {
    const observation = findObservation(observationId);

    if (!observation) {
      if (!options.silent) {
        debugWarn(
          `Observação não encontrada: ${observationId}`
        );
      }

      addUniqueValue(
        record.validation.pendingQuestions,
        `Observação não localizada: ${observationId}`
      );

      return {
        linked: false,
        reason: "observation-not-found"
      };
    }

    addUniqueValue(record.observationIds, observationId);

    if (options.enrich !== false) {
      enrichRecordFromObservation(record, observation);
    }

    return {
      linked: true,
      observation: clone(observation)
    };
  }

  function enrichRecordFromObservation(record, observation) {
    if (!isObject(observation)) {
      return record;
    }

    if (!record.eventDate) {
      record.eventDate =
        observation.eventDate ||
        observation.date ||
        observation.observedAt?.slice?.(0, 10) ||
        null;
    }

    if (!record.startTime) {
      record.startTime =
        observation.startTime ||
        observation.time ||
        null;
    }

    if (!isNonEmptyString(record.factualDescription)) {
      record.factualDescription =
        observation.factualDescription ||
        observation.description ||
        observation.summary ||
        record.factualDescription;
    }

    if (!isNonEmptyString(record.communityMeaning)) {
      record.communityMeaning =
        observation.communityMeaning ||
        observation.livingHeritage?.communityMeaning ||
        null;
    }

    record.categories = uniqueArray([
      ...record.categories,
      ...normalizeArray(observation.categories)
    ]);

    record.keywords = uniqueArray([
      ...record.keywords,
      ...normalizeArray(observation.keywords)
    ]);

    const source = {
      id: observation.id || null,
      type: "observacao-de-campo",
      title:
        observation.title ||
        `Observação ${observation.id || "sem identificador"}`,
      classification:
        observation.validation?.level ||
        observation.status ||
        "nao-verificado",
      origin: "field-observations-2026.json"
    };

    const sourceExists = record.sources.some(
      (item) =>
        item.id === source.id &&
        item.type === source.type
    );

    if (!sourceExists) {
      record.sources.push(source);
    }

    normalizeArray(observation.people).forEach((person) => {
      const name = person.name || person.displayName;

      if (!name) {
        return;
      }

      const exists = record.people.some(
        (item) => item.name === name
      );

      if (!exists) {
        record.people.push({
          ...clone(person),
          source: "observacao-de-campo"
        });
      }
    });

    normalizeArray(observation.media).forEach((media) => {
      const mediaId =
        media.id ||
        media.fileName ||
        media.path ||
        media.url;

      const exists = record.media.some((item) => {
        const itemId =
          item.id ||
          item.fileName ||
          item.path ||
          item.url;

        return mediaId && itemId === mediaId;
      });

      if (!exists) {
        record.media.push({
          ...clone(media),
          source: "observacao-de-campo"
        });
      }
    });

    if (
      observation.livingHeritage &&
      observation.livingHeritage.isPresent
    ) {
      record.livingHeritage = deepMerge(
        record.livingHeritage || {},
        observation.livingHeritage
      );
    }

    if (
      observation.privacy?.containsChildren === true
    ) {
      record.privacy.containsChildren = true;
    }

    if (
      observation.privacy?.containsPrivateResidence === true
    ) {
      record.privacy.containsPrivateResidence = true;
      record.privacy.exactLocationMayBePublished = false;
    }

    return record;
  }

  function linkObservation(
    recordId,
    observationId,
    options = {}
  ) {
    assertInitialized();

    const record = getRecordById(recordId, {
      cloneResult: false
    });

    if (!record) {
      return createOperationResult(
        false,
        "record-not-found",
        `Registro não encontrado: ${recordId}`
      );
    }

    const result = linkObservationToRecordObject(
      record,
      observationId,
      {
        enrich: options.enrich !== false
      }
    );

    if (!result.linked) {
      return createOperationResult(
        false,
        "observation-not-found",
        `Observação não encontrada: ${observationId}`
      );
    }

    touchRecord(record, options.updatedBy);

    addRevision(record, {
      action: "observation-linked",
      summary: `Observação ${observationId} vinculada ao registro.`,
      changedFields: ["observationIds"],
      changedBy: options.updatedBy || null
    });

    finalizeMutation("link-observation", {
      recordId,
      observationId
    });

    return createOperationResult(
      true,
      "observation-linked",
      `Observação ${observationId} vinculada ao registro ${recordId}.`,
      clone(record)
    );
  }

  /**
   * ================================================================
   * VÍNCULO COM O DIÁRIO DE CAMPO
   * ================================================================
   */

  function linkDailyLog(
    recordId,
    dailyLogPath,
    options = {}
  ) {
    const record = getRecordById(recordId, {
      cloneResult: false
    });

    if (!record) {
      return createOperationResult(
        false,
        "record-not-found",
        `Registro não encontrado: ${recordId}`
      );
    }

    if (!isNonEmptyString(dailyLogPath)) {
      return createOperationResult(
        false,
        "invalid-daily-log-path",
        "O caminho do Diário de Campo não foi informado."
      );
    }

    const normalizedPath = dailyLogPath.trim();

    addUniqueValue(
      record.dailyLogReferences,
      normalizedPath
    );

    ensureArrayField(record.provenance, "createdFrom");
    addUniqueValue(
      record.provenance.createdFrom,
      normalizedPath
    );

    touchRecord(record, options.updatedBy);

    addRevision(record, {
      action: "daily-log-linked",
      summary: `Diário de Campo vinculado: ${normalizedPath}`,
      changedFields: [
        "dailyLogReferences",
        "provenance.createdFrom"
      ],
      changedBy: options.updatedBy || null
    });

    finalizeMutation("link-daily-log", {
      recordId,
      dailyLogPath: normalizedPath
    });

    return createOperationResult(
      true,
      "daily-log-linked",
      "Diário de Campo vinculado com sucesso.",
      clone(record)
    );
  }

  /**
   * ================================================================
   * VÍNCULO TERRITORIAL
   * ================================================================
   */

  function linkLocationToRecordObject(
    record,
    locationId,
    options = {}
  ) {
    const location =
      state.indexes.locationsById.get(locationId);

    if (!location) {
      if (!options.silent) {
        debugWarn(
          `Localização não encontrada: ${locationId}`
        );
      }

      return {
        linked: false,
        reason: "location-not-found"
      };
    }

    const exists = record.locations.some(
      (item) =>
        item.id === locationId ||
        item.locationId === locationId
    );

    if (!exists) {
      record.locations.push({
        id: locationId,
        name:
          location.name ||
          location.displayName ||
          "Local sem nome",
        type:
          location.type ||
          location.locationType ||
          "local-nao-classificado",
        role: options.role || "local-relacionado",
        privacyLevel:
          location.privacyLevel ||
          location.privacy?.level ||
          "public",
        exactLocationMayBePublished:
          location.exactLocationMayBePublished ??
          location.mapAccess?.allowed ??
          false,
        source: "locais-2026.json"
      });
    }

    return {
      linked: true,
      location: clone(location)
    };
  }

  function linkLocation(
    recordId,
    locationId,
    options = {}
  ) {
    const record = getRecordById(recordId, {
      cloneResult: false
    });

    if (!record) {
      return createOperationResult(
        false,
        "record-not-found",
        `Registro não encontrado: ${recordId}`
      );
    }

    const result = linkLocationToRecordObject(
      record,
      locationId,
      options
    );

    if (!result.linked) {
      return createOperationResult(
        false,
        "location-not-found",
        `Localização não encontrada: ${locationId}`
      );
    }

    touchRecord(record, options.updatedBy);

    addRevision(record, {
      action: "location-linked",
      summary: `Localização ${locationId} vinculada.`,
      changedFields: ["locations"],
      changedBy: options.updatedBy || null
    });

    finalizeMutation("link-location", {
      recordId,
      locationId
    });

    return createOperationResult(
      true,
      "location-linked",
      "Localização vinculada com sucesso.",
      clone(record)
    );
  }

  /**
   * ================================================================
   * GRUPOS TRADICIONAIS
   * ================================================================
   */

  function linkTraditionalGroup(
    recordId,
    groupId,
    options = {}
  ) {
    const record = getRecordById(recordId, {
      cloneResult: false
    });

    if (!record) {
      return createOperationResult(
        false,
        "record-not-found",
        `Registro não encontrado: ${recordId}`
      );
    }

    const group = state.indexes.groupsById.get(groupId);

    if (!group) {
      return createOperationResult(
        false,
        "traditional-group-not-found",
        `Grupo tradicional não encontrado: ${groupId}`
      );
    }

    const exists = record.groups.some(
      (item) => item.id === groupId
    );

    if (!exists) {
      record.groups.push({
        id: groupId,
        name:
          group.name ||
          group.shortName ||
          groupId,
        role:
          options.role ||
          "grupo-tradicional-participante",
        participationStatus:
          group.participationStatus || "oficial",
        source: "grupos-tradicionais-2026.json"
      });
    }

    touchRecord(record, options.updatedBy);

    addRevision(record, {
      action: "traditional-group-linked",
      summary: `Grupo tradicional ${groupId} vinculado.`,
      changedFields: ["groups"],
      changedBy: options.updatedBy || null
    });

    finalizeMutation("link-traditional-group", {
      recordId,
      groupId
    });

    return createOperationResult(
      true,
      "traditional-group-linked",
      "Grupo tradicional vinculado com sucesso.",
      clone(record)
    );
  }

  /**
   * ================================================================
   * VALIDAÇÃO CURATORIAL
   * ================================================================
   */

  function validateRecord(recordOrId, options = {}) {
    assertInitialized();

    const record =
      typeof recordOrId === "string"
        ? getRecordById(recordOrId, {
            cloneResult: false
          })
        : recordOrId;

    if (!record) {
      return {
        valid: false,
        errors: ["Registro não encontrado."],
        warnings: [],
        checks: {}
      };
    }

    const errors = [];
    const warnings = [];
    const checks = {};

    function check(name, condition, errorMessage, severity) {
      checks[name] = Boolean(condition);

      if (!condition) {
        if (severity === "warning") {
          warnings.push(errorMessage);
        } else {
          errors.push(errorMessage);
        }
      }
    }

    check(
      "id-unico",
      isNonEmptyString(record.id) &&
        (
          !state.indexes.recordsById.has(record.id) ||
          state.indexes.recordsById.get(record.id) === record
        ),
      "O registro precisa possuir um identificador único."
    );

    check(
      "titulo-preenchido",
      isNonEmptyString(record.title),
      "O título do registro não foi preenchido."
    );

    check(
      "data-do-acontecimento",
      isNonEmptyString(record.eventDate),
      "A data do acontecimento ainda não foi informada.",
      "warning"
    );

    check(
      "descricao-factual",
      isNonEmptyString(record.factualDescription),
      "A descrição factual precisa ser preenchida.",
      "warning"
    );

    check(
      "classificacao-epistemologica",
      Array.isArray(record.knowledgeClassification) &&
        record.knowledgeClassification.length > 0 &&
        record.knowledgeClassification.every((item) =>
          KNOWLEDGE_CLASSIFICATIONS.includes(item)
        ),
      "A classificação epistemológica está ausente ou contém valor não reconhecido."
    );

    check(
      "fontes-identificadas",
      Array.isArray(record.sources) &&
        record.sources.length > 0,
      "Nenhuma fonte foi vinculada ao registro.",
      "warning"
    );

    check(
      "etapa-curatorial-valida",
      CURATION_STAGES.includes(record.curationStage),
      "A etapa curatorial não é reconhecida."
    );

    check(
      "status-validacao-valido",
      VALIDATION_STATUSES.includes(
        record.validation?.status
      ),
      "O status de validação não é reconhecido."
    );

    check(
      "status-publicacao-valido",
      PUBLICATION_STATUSES.includes(
        record.publication?.status
      ),
      "O status de publicação não é reconhecido."
    );

    check(
      "privacidade-classificada",
      isObject(record.privacy) &&
        isNonEmptyString(record.privacy.level),
      "A classificação de privacidade não foi preenchida."
    );

    check(
      "residencia-protegida",
      record.privacy?.containsPrivateResidence !== true ||
        record.privacy?.exactLocationMayBePublished !== true ||
        record.consent?.status === "autorizado",
      "O registro contém residência privada com localização exata liberada sem autorização."
    );

    check(
      "criancas-protegidas",
      record.privacy?.containsChildren !== true ||
        record.privacy?.reviewStatus === "reviewed" ||
        record.privacy?.reviewStatus === "aprovado",
      "O registro contém crianças e ainda exige revisão especial de privacidade.",
      "warning"
    );

    const isPublicationStage = [
      "preparacao-para-publicacao",
      "publicado",
      "preservacao-permanente"
    ].includes(record.curationStage);

    if (isPublicationStage) {
      check(
        "revisao-de-privacidade-para-publicacao",
        !state.configuration
          .requirePrivacyReviewForPublication ||
          ["reviewed", "aprovado", "concluido"].includes(
            record.privacy?.reviewStatus
          ),
        "A publicação exige revisão de privacidade concluída."
      );

      check(
        "decisao-de-publicacao",
        record.publication?.decision &&
          record.publication.decision !==
            "decisao-pendente",
        "A decisão de publicação ainda está pendente."
      );
    }

    if (
      record.curationStage === "preservacao-permanente"
    ) {
      check(
        "validacao-para-memoria-permanente",
        !state.configuration
          .requireValidationForPermanentMemory ||
          [
            "validado",
            "validado-com-ressalvas"
          ].includes(record.validation?.status),
        "A Memória Histórica Permanente exige validação."
      );

      check(
        "elegibilidade-para-memoria-permanente",
        record.preservation?.permanentMemoryEligible ===
          true,
        "O registro ainda não foi declarado elegível para Memória Histórica Permanente."
      );

      check(
        "pacote-de-preservacao",
        record.preservation?.preservationPackage
          ?.structuredRecordIncluded === true,
        "O pacote de preservação deve conter o registro estruturado."
      );
    }

    const result = {
      valid: errors.length === 0,
      errors,
      warnings,
      checks,
      validatedAt: nowISO(),
      mode: options.mode || "general"
    };

    if (options.applyToRecord === true) {
      record.validation.lastTechnicalValidation = result;
    }

    return result;
  }

  function validateAllRecords() {
    assertInitialized();

    const results = state.repository.records.map((record) => ({
      recordId: record.id,
      ...validateRecord(record, {
        mode: "batch",
        includeWarnings: true
      })
    }));

    const summary = {
      total: results.length,
      valid: results.filter((item) => item.valid).length,
      invalid: results.filter((item) => !item.valid).length,
      warnings: results.reduce(
        (total, item) => total + item.warnings.length,
        0
      ),
      errors: results.reduce(
        (total, item) => total + item.errors.length,
        0
      )
    };

    registerOperation("validate-all-records", summary);

    return {
      summary,
      results
    };
  }

  /**
   * ================================================================
   * TRANSIÇÕES CURATORIAIS
   * ================================================================
   */

  function getStageIndex(stage) {
    return CURATION_STAGES.indexOf(stage);
  }

  function canTransitionStage(
    currentStage,
    targetStage,
    options = {}
  ) {
    const currentIndex = getStageIndex(currentStage);
    const targetIndex = getStageIndex(targetStage);

    if (currentIndex < 0 || targetIndex < 0) {
      return {
        allowed: false,
        reason: "invalid-stage"
      };
    }

    if (currentStage === targetStage) {
      return {
        allowed: true,
        reason: "same-stage"
      };
    }

    if (options.force === true) {
      return {
        allowed: true,
        reason: "forced-transition"
      };
    }

    if (!state.configuration.strictTransitions) {
      return {
        allowed: true,
        reason: "non-strict-mode"
      };
    }

    if (currentStage === "arquivado") {
      return {
        allowed: false,
        reason: "archived-record"
      };
    }

    if (
      currentStage === "preservacao-permanente" &&
      targetStage !== "arquivado"
    ) {
      return {
        allowed: false,
        reason: "permanent-memory-protected"
      };
    }

    const difference = targetIndex - currentIndex;

    if (difference === 1) {
      return {
        allowed: true,
        reason: "next-stage"
      };
    }

    if (difference === -1 && options.allowRollback) {
      return {
        allowed: true,
        reason: "authorized-rollback"
      };
    }

    return {
      allowed: false,
      reason: "non-sequential-transition"
    };
  }

  function transitionStage(
    recordId,
    targetStage,
    options = {}
  ) {
    assertInitialized();

    const record = getRecordById(recordId, {
      cloneResult: false
    });

    if (!record) {
      return createOperationResult(
        false,
        "record-not-found",
        `Registro não encontrado: ${recordId}`
      );
    }

    if (!CURATION_STAGES.includes(targetStage)) {
      return createOperationResult(
        false,
        "invalid-target-stage",
        `Etapa curatorial inválida: ${targetStage}`
      );
    }

    const transition = canTransitionStage(
      record.curationStage,
      targetStage,
      options
    );

    if (!transition.allowed) {
      return createOperationResult(
        false,
        "transition-not-allowed",
        `Transição de “${record.curationStage}” para “${targetStage}” não autorizada.`,
        {
          currentStage: record.curationStage,
          targetStage,
          reason: transition.reason
        }
      );
    }

    const validationBeforeTransition = validateRecord(record, {
      mode: `transition-to-${targetStage}`
    });

    const guardedStages = [
      "validacao",
      "preparacao-para-publicacao",
      "publicado",
      "preservacao-permanente"
    ];

    if (
      guardedStages.includes(targetStage) &&
      !validationBeforeTransition.valid &&
      options.force !== true
    ) {
      return createOperationResult(
        false,
        "transition-validation-failed",
        "A transição foi bloqueada por pendências de validação.",
        validationBeforeTransition
      );
    }

    const previousStage = record.curationStage;
    record.curationStage = targetStage;

    applyStageDerivedStatuses(record, targetStage);

    touchRecord(record, options.updatedBy);

    addRevision(record, {
      action: "curation-stage-transition",
      summary: `Transição curatorial: ${previousStage} → ${targetStage}.`,
      changedFields: [
        "curationStage",
        "status",
        "validation.status",
        "publication.status",
        "preservation.status"
      ],
      changedBy: options.updatedBy || null,
      notes: options.notes || null
    });

    finalizeMutation("transition-stage", {
      recordId,
      previousStage,
      targetStage,
      reason: transition.reason
    });

    return createOperationResult(
      true,
      "stage-transition-completed",
      `Registro movido para a etapa “${targetStage}”.`,
      clone(record),
      validationBeforeTransition.warnings
    );
  }

  function applyStageDerivedStatuses(record, stage) {
    const statusByStage = {
      observacao: "rascunho",
      "registro-primario": "ativo",
      triagem: "em-curadoria",
      organizacao: "em-curadoria",
      verificacao: "em-curadoria",
      "enriquecimento-historico": "em-curadoria",
      "classificacao-de-privacidade": "em-curadoria",
      validacao: "em-validacao",
      "preparacao-para-publicacao": "validado",
      publicado: "publicado",
      "preservacao-permanente": "memoria-permanente",
      arquivado: "arquivado"
    };

    record.status = statusByStage[stage] || record.status;

    if (stage === "validacao") {
      record.validation.status = "aguardando-validacao";
    }

    if (stage === "preparacao-para-publicacao") {
      record.publication.status = "em-preparacao";
    }

    if (stage === "publicado") {
      record.publication.status = "publicado";
      record.publication.publishedAt =
        record.publication.publishedAt || nowISO();
    }

    if (stage === "preservacao-permanente") {
      record.preservation.status =
        "preservacao-permanente";
    }

    if (stage === "arquivado") {
      record.publication.status = "arquivado";
      record.preservation.status = "arquivado";
    }
  }

  /**
   * ================================================================
   * VALIDAÇÃO HUMANA E INSTITUCIONAL
   * ================================================================
   */

  function addValidator(recordId, validator, options = {}) {
    const record = getRecordById(recordId, {
      cloneResult: false
    });

    if (!record) {
      return createOperationResult(
        false,
        "record-not-found",
        `Registro não encontrado: ${recordId}`
      );
    }

    if (!isObject(validator)) {
      return createOperationResult(
        false,
        "invalid-validator",
        "Os dados do validador são inválidos."
      );
    }

    const normalizedValidator = {
      name: normalizeString(validator.name) || null,
      role: normalizeString(validator.role) || null,
      institution:
        normalizeString(validator.institution) || null,
      validationType:
        normalizeString(validator.validationType) ||
        "conteudo",
      decision:
        normalizeString(validator.decision) ||
        "pendente",
      validatedAt: validator.validatedAt || nowISO(),
      notes: validator.notes || null
    };

    if (!normalizedValidator.name) {
      return createOperationResult(
        false,
        "validator-name-required",
        "O nome do validador é obrigatório."
      );
    }

    ensureArrayField(record.validation, "validators");
    record.validation.validators.push(normalizedValidator);

    const decisions = record.validation.validators.map(
      (item) => item.decision
    );

    if (
      decisions.includes("rejeitado") ||
      decisions.includes("contestado")
    ) {
      record.validation.status = "contestado";
    } else if (
      decisions.length > 0 &&
      decisions.every((decision) =>
        ["aprovado", "validado"].includes(decision)
      )
    ) {
      record.validation.status = "validado";
    } else if (
      decisions.some((decision) =>
        ["aprovado", "validado"].includes(decision)
      )
    ) {
      record.validation.status = "parcialmente-validado";
    }

    record.validation.lastValidatedAt = nowISO();

    touchRecord(record, options.updatedBy);

    addRevision(record, {
      action: "validator-added",
      summary: `Validação registrada por ${normalizedValidator.name}.`,
      changedFields: [
        "validation.validators",
        "validation.status"
      ],
      changedBy: options.updatedBy || null
    });

    finalizeMutation("add-validator", {
      recordId,
      validator: normalizedValidator.name
    });

    return createOperationResult(
      true,
      "validator-added",
      "Validador adicionado com sucesso.",
      clone(record)
    );
  }

  function addConflictingInformation(
    recordId,
    conflict,
    options = {}
  ) {
    const record = getRecordById(recordId, {
      cloneResult: false
    });

    if (!record) {
      return createOperationResult(
        false,
        "record-not-found",
        `Registro não encontrado: ${recordId}`
      );
    }

    if (!isObject(conflict)) {
      return createOperationResult(
        false,
        "invalid-conflict",
        "A informação conflitante deve ser um objeto."
      );
    }

    const conflictEntry = {
      id:
        conflict.id ||
        `conflict-${Date.now()}-${Math.random()
          .toString(36)
          .slice(2, 7)}`,
      subject: conflict.subject || null,
      versionA: conflict.versionA || null,
      versionB: conflict.versionB || null,
      sources: normalizeArray(conflict.sources),
      status: conflict.status || "aberto",
      resolution: conflict.resolution || null,
      registeredAt: nowISO(),
      notes: conflict.notes || null
    };

    ensureArrayField(
      record.validation,
      "conflictingInformation"
    );

    record.validation.conflictingInformation.push(
      conflictEntry
    );

    addUniqueValue(
      record.knowledgeClassification,
      "informacao-contestada"
    );

    if (
      record.validation.status === "validado"
    ) {
      record.validation.status =
        "validado-com-ressalvas";
    }

    touchRecord(record, options.updatedBy);

    addRevision(record, {
      action: "conflicting-information-added",
      summary: "Informação conflitante registrada.",
      changedFields: [
        "validation.conflictingInformation",
        "knowledgeClassification"
      ],
      changedBy: options.updatedBy || null
    });

    finalizeMutation("add-conflicting-information", {
      recordId,
      conflictId: conflictEntry.id
    });

    return createOperationResult(
      true,
      "conflict-added",
      "Informação conflitante preservada no registro.",
      clone(record)
    );
  }

  /**
   * ================================================================
   * PRIVACIDADE E PUBLICAÇÃO
   * ================================================================
   */

  function reviewPrivacy(
    recordId,
    privacyReview,
    options = {}
  ) {
    const record = getRecordById(recordId, {
      cloneResult: false
    });

    if (!record) {
      return createOperationResult(
        false,
        "record-not-found",
        `Registro não encontrado: ${recordId}`
      );
    }

    if (!isObject(privacyReview)) {
      return createOperationResult(
        false,
        "invalid-privacy-review",
        "A revisão de privacidade é inválida."
      );
    }

    record.privacy = deepMerge(
      record.privacy || {},
      privacyReview
    );

    record.privacy.reviewStatus =
      privacyReview.reviewStatus ||
      privacyReview.status ||
      "reviewed";

    record.privacy.reviewedBy =
      privacyReview.reviewedBy ||
      options.updatedBy ||
      null;

    record.privacy.reviewedAt =
      privacyReview.reviewedAt || nowISO();

    if (
      record.privacy.containsPrivateResidence === true &&
      record.consent?.status !== "autorizado"
    ) {
      record.privacy.exactLocationMayBePublished = false;

      addUniqueValue(
        record.privacy.restrictions,
        "nao-publicar-localizacao-residencial-exata"
      );
    }

    if (
      record.privacy.containsChildren === true
    ) {
      addUniqueValue(
        record.privacy.restrictions,
        "protecao-reforcada-de-criancas"
      );
    }

    touchRecord(record, options.updatedBy);

    addRevision(record, {
      action: "privacy-reviewed",
      summary: "Revisão de privacidade concluída.",
      changedFields: ["privacy"],
      changedBy: options.updatedBy || null
    });

    finalizeMutation("review-privacy", { recordId });

    return createOperationResult(
      true,
      "privacy-reviewed",
      "Privacidade revisada com sucesso.",
      clone(record)
    );
  }

  function authorizePublication(
    recordId,
    authorization = {},
    options = {}
  ) {
    const record = getRecordById(recordId, {
      cloneResult: false
    });

    if (!record) {
      return createOperationResult(
        false,
        "record-not-found",
        `Registro não encontrado: ${recordId}`
      );
    }

    const validation = validateRecord(record, {
      mode: "publication-authorization"
    });

    if (!validation.valid && options.force !== true) {
      return createOperationResult(
        false,
        "publication-validation-failed",
        "A autorização de publicação foi bloqueada por pendências.",
        validation
      );
    }

    record.publication.decision =
      authorization.decision || "publicar";

    record.publication.status =
      authorization.status || "aprovado";

    record.publication.channels = uniqueArray(
      authorization.channels ||
        record.publication.channels ||
        []
    );

    record.publication.publicSummary =
      authorization.publicSummary ||
      record.publication.publicSummary ||
      null;

    record.publication.approvedBy =
      authorization.approvedBy ||
      options.updatedBy ||
      null;

    record.publication.approvedAt =
      authorization.approvedAt || nowISO();

    touchRecord(record, options.updatedBy);

    addRevision(record, {
      action: "publication-authorized",
      summary: "Publicação autorizada.",
      changedFields: [
        "publication.decision",
        "publication.status",
        "publication.channels"
      ],
      changedBy: options.updatedBy || null
    });

    finalizeMutation("authorize-publication", {
      recordId
    });

    return createOperationResult(
      true,
      "publication-authorized",
      "Publicação autorizada com sucesso.",
      clone(record),
      validation.warnings
    );
  }

  /**
   * ================================================================
   * MEMÓRIA HISTÓRICA PERMANENTE
   * ================================================================
   */

  function evaluatePermanentMemoryEligibility(recordId) {
    const record = getRecordById(recordId, {
      cloneResult: false
    });

    if (!record) {
      return createOperationResult(
        false,
        "record-not-found",
        `Registro não encontrado: ${recordId}`
      );
    }

    const reasons = [];
    const blockers = [];

    if (
      ["validado", "validado-com-ressalvas"].includes(
        record.validation?.status
      )
    ) {
      reasons.push("registro-validado");
    } else {
      blockers.push("validacao-incompleta");
    }

    if (isNonEmptyString(record.factualDescription)) {
      reasons.push("descricao-factual-presente");
    } else {
      blockers.push("descricao-factual-ausente");
    }

    if (
      Array.isArray(record.sources) &&
      record.sources.length > 0
    ) {
      reasons.push("fontes-identificadas");
    } else {
      blockers.push("fontes-ausentes");
    }

    if (
      ["reviewed", "aprovado", "concluido"].includes(
        record.privacy?.reviewStatus
      )
    ) {
      reasons.push("privacidade-revisada");
    } else {
      blockers.push("privacidade-nao-revisada");
    }

    if (
      Array.isArray(record.revisionHistory) &&
      record.revisionHistory.length > 0
    ) {
      reasons.push("historico-de-revisoes-preservado");
    }

    const eligible = blockers.length === 0;

    record.preservation.permanentMemoryEligible =
      eligible;

    record.preservation.eligibilityReasons =
      reasons;

    record.preservation.eligibilityBlockers =
      blockers;

    record.preservation.lastEligibilityEvaluation =
      nowISO();

    touchRecord(record, null);

    finalizeMutation(
      "evaluate-permanent-memory-eligibility",
      {
        recordId,
        eligible,
        reasons,
        blockers
      }
    );

    return createOperationResult(
      eligible,
      eligible
        ? "permanent-memory-eligible"
        : "permanent-memory-not-eligible",
      eligible
        ? "Registro elegível para Memória Histórica Permanente."
        : "O registro ainda possui pendências para Memória Histórica Permanente.",
      {
        record: clone(record),
        eligible,
        reasons,
        blockers
      }
    );
  }

  /**
   * ================================================================
   * ESTATÍSTICAS E ÍNDICES DO REPOSITÓRIO
   * ================================================================
   */

  function recalculateStatistics() {
    assertRepository();

    const records = state.repository.records;

    const statistics = {
      totalRecords: records.length,
      draftRecords: records.filter(
        (record) => record.status === "rascunho"
      ).length,
      recordsInCuration: records.filter(
        (record) =>
          record.status === "em-curadoria"
      ).length,
      recordsInValidation: records.filter(
        (record) =>
          record.status === "em-validacao"
      ).length,
      validatedRecords: records.filter((record) =>
        ["validado", "validado-com-ressalvas"].includes(
          record.validation?.status
        )
      ).length,
      publishedRecords: records.filter(
        (record) =>
          record.status === "publicado" ||
          record.publication?.status === "publicado"
      ).length,
      restrictedRecords: records.filter(
        (record) =>
          record.status === "restrito" ||
          record.publication?.status === "restrito" ||
          record.privacy?.level === "restrito"
      ).length,
      permanentMemoryRecords: records.filter(
        (record) =>
          record.status === "memoria-permanente" ||
          record.curationStage ===
            "preservacao-permanente"
      ).length,
      archivedRecords: records.filter(
        (record) =>
          record.status === "arquivado" ||
          record.curationStage === "arquivado"
      ).length,
      recordsWithMedia: records.filter(
        (record) =>
          Array.isArray(record.media) &&
          record.media.length > 0
      ).length,
      recordsWithTestimonies: records.filter(
        (record) =>
          Array.isArray(record.testimonies) &&
          record.testimonies.length > 0
      ).length,
      recordsWithLivingHeritage: records.filter(
        (record) =>
          record.livingHeritage?.isPresent === true
      ).length,
      recordsWithConflictingSources: records.filter(
        (record) =>
          Array.isArray(
            record.validation?.conflictingInformation
          ) &&
          record.validation.conflictingInformation
            .length > 0
      ).length,
      recordsAwaitingAuthorization: records.filter(
        (record) =>
          record.publication?.status ===
            "aguardando-autorizacao" ||
          record.consent?.status ===
            "aguardando-autorizacao"
      ).length,
      lastCalculatedAt: nowISO()
    };

    state.repository.statistics = statistics;
    rebuildRepositoryIndexes();

    return clone(statistics);
  }

  function rebuildRepositoryIndexes() {
    const indexes = {
      byDate: {},
      byActivityId: {},
      byRecordType: {},
      byCurationStage: {},
      byStatus: {},
      byKnowledgeClassification: {},
      byCategory: {},
      byPerson: {},
      byGroup: {},
      byLocationId: {},
      byPrivacyLevel: {},
      byValidationStatus: {},
      byPublicationStatus: {},
      byDailyLog: {},
      byObservationId: {},
      byMediaId: {}
    };

    function addToIndex(indexName, key, recordId) {
      if (!key) {
        return;
      }

      const normalizedKey = String(key);

      if (!Array.isArray(indexes[indexName][normalizedKey])) {
        indexes[indexName][normalizedKey] = [];
      }

      addUniqueValue(
        indexes[indexName][normalizedKey],
        recordId
      );
    }

    state.repository.records.forEach((record) => {
      const recordId = record.id;

      addToIndex(
        "byDate",
        record.eventDate,
        recordId
      );

      addToIndex(
        "byActivityId",
        record.activityId,
        recordId
      );

      addToIndex(
        "byRecordType",
        record.recordType,
        recordId
      );

      addToIndex(
        "byCurationStage",
        record.curationStage,
        recordId
      );

      addToIndex(
        "byStatus",
        record.status,
        recordId
      );

      normalizeArray(
        record.knowledgeClassification
      ).forEach((classification) => {
        addToIndex(
          "byKnowledgeClassification",
          classification,
          recordId
        );
      });

      normalizeArray(record.categories).forEach(
        (category) => {
          addToIndex(
            "byCategory",
            category,
            recordId
          );
        }
      );

      normalizeArray(record.people).forEach((person) => {
        addToIndex(
          "byPerson",
          person.name || person.id,
          recordId
        );
      });

      normalizeArray(record.groups).forEach((group) => {
        addToIndex(
          "byGroup",
          group.id || group.name,
          recordId
        );
      });

      normalizeArray(record.locations).forEach(
        (location) => {
          addToIndex(
            "byLocationId",
            location.id || location.locationId,
            recordId
          );
        }
      );

      addToIndex(
        "byPrivacyLevel",
        record.privacy?.level,
        recordId
      );

      addToIndex(
        "byValidationStatus",
        record.validation?.status,
        recordId
      );

      addToIndex(
        "byPublicationStatus",
        record.publication?.status,
        recordId
      );

      normalizeArray(record.dailyLogReferences).forEach(
        (path) => {
          addToIndex(
            "byDailyLog",
            path,
            recordId
          );
        }
      );

      normalizeArray(record.observationIds).forEach(
        (observationId) => {
          addToIndex(
            "byObservationId",
            observationId,
            recordId
          );
        }
      );

      normalizeArray(record.media).forEach((media) => {
        addToIndex(
          "byMediaId",
          media.id ||
            media.fileName ||
            media.path ||
            media.url,
          recordId
        );
      });
    });

    state.repository.indexes = indexes;

    return clone(indexes);
  }

  /**
   * ================================================================
   * CONSULTAS
   * ================================================================
   */

  function getRecordById(recordId, options = {}) {
    assertInitialized();

    const record =
      state.indexes.recordsById.get(recordId) || null;

    if (!record) {
      return null;
    }

    return options.cloneResult === false
      ? record
      : clone(record);
  }

  function getRecords(filters = {}) {
    assertInitialized();

    let records = [...state.repository.records];

    if (filters.status) {
      records = records.filter(
        (record) => record.status === filters.status
      );
    }

    if (filters.curationStage) {
      records = records.filter(
        (record) =>
          record.curationStage === filters.curationStage
      );
    }

    if (filters.validationStatus) {
      records = records.filter(
        (record) =>
          record.validation?.status ===
          filters.validationStatus
      );
    }

    if (filters.publicationStatus) {
      records = records.filter(
        (record) =>
          record.publication?.status ===
          filters.publicationStatus
      );
    }

    if (filters.activityId) {
      records = records.filter(
        (record) =>
          record.activityId === filters.activityId
      );
    }

    if (filters.observationId) {
      records = records.filter((record) =>
        normalizeArray(record.observationIds).includes(
          filters.observationId
        )
      );
    }

    if (filters.category) {
      records = records.filter((record) =>
        normalizeArray(record.categories).includes(
          filters.category
        )
      );
    }

    if (filters.groupId) {
      records = records.filter((record) =>
        normalizeArray(record.groups).some(
          (group) =>
            group.id === filters.groupId ||
            group.name === filters.groupId
        )
      );
    }

    if (filters.locationId) {
      records = records.filter((record) =>
        normalizeArray(record.locations).some(
          (location) =>
            location.id === filters.locationId ||
            location.locationId ===
              filters.locationId
        )
      );
    }

    if (filters.date) {
      records = records.filter(
        (record) => record.eventDate === filters.date
      );
    }

    if (filters.search) {
      const query = slugify(filters.search);

      records = records.filter((record) => {
        const searchableText = slugify(
          [
            record.title,
            record.subtitle,
            record.summary,
            record.factualDescription,
            record.historicalContext,
            record.communityMeaning,
            record.curatorialInterpretation,
            ...normalizeArray(record.keywords),
            ...normalizeArray(record.categories)
          ].join(" ")
        );

        return searchableText.includes(query);
      });
    }

    const sortBy = filters.sortBy || "eventDate";
    const direction =
      filters.direction === "desc" ? -1 : 1;

    records.sort((a, b) => {
      const valueA = a?.[sortBy] || "";
      const valueB = b?.[sortBy] || "";

      return String(valueA).localeCompare(
        String(valueB),
        "pt-BR"
      ) * direction;
    });

    return clone(records);
  }

  function getRecordsByStage(stage) {
    return getRecords({ curationStage: stage });
  }

  function getRecordsByActivity(activityId) {
    return getRecords({ activityId });
  }

  function getRecordsByObservation(observationId) {
    return getRecords({ observationId });
  }

  function getPermanentMemoryRecords() {
    return getRecords({
      curationStage: "preservacao-permanente"
    });
  }

  function getPendingRecords() {
    assertInitialized();

    return clone(
      state.repository.records.filter((record) => {
        const validation = validateRecord(record);

        return (
          !validation.valid ||
          validation.warnings.length > 0 ||
          normalizeArray(record.pendingActions).length > 0 ||
          normalizeArray(
            record.validation?.pendingQuestions
          ).length > 0
        );
      })
    );
  }

  /**
   * ================================================================
   * EXPORTAÇÃO
   * ================================================================
   */

  function prepareRepositoryForExport(options = {}) {
    assertRepository();

    recalculateStatistics();
    updateRepositoryMetadata();

    const repository = clone(state.repository);

    repository.lastUpdated = new Date()
      .toISOString()
      .slice(0, 10);

    repository.repositoryProvenance.updatedAt =
      nowISO();

    if (options.removeInitialTemplate === true) {
      delete repository.initialRecordTemplate;
    }

    return repository;
  }

  function exportRepository(options = {}) {
    const repository =
      prepareRepositoryForExport(options);

    const content = JSON.stringify(
      repository,
      null,
      Number(options.indentation) || 2
    );

    const fileName =
      options.fileName ||
      "curation-records-2026.json";

    if (options.download === false) {
      return createOperationResult(
        true,
        "repository-prepared",
        "Repositório preparado para exportação.",
        {
          fileName,
          content,
          repository
        }
      );
    }

    if (
      typeof Blob === "undefined" ||
      typeof document === "undefined"
    ) {
      return createOperationResult(
        true,
        "repository-prepared-no-browser-download",
        "O ambiente atual não oferece download automático.",
        {
          fileName,
          content,
          repository
        }
      );
    }

    const blob = new Blob([content], {
      type: "application/json;charset=utf-8"
    });

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = fileName;
    anchor.style.display = "none";

    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);

    registerOperation("export-repository", {
      fileName,
      totalRecords: repository.records.length
    });

    return createOperationResult(
      true,
      "repository-exported",
      `Repositório exportado como ${fileName}.`,
      {
        fileName,
        totalRecords: repository.records.length
      }
    );
  }

  function exportRecord(recordId, options = {}) {
    const record = getRecordById(recordId);

    if (!record) {
      return createOperationResult(
        false,
        "record-not-found",
        `Registro não encontrado: ${recordId}`
      );
    }

    const content = JSON.stringify(record, null, 2);
    const fileName =
      options.fileName || `${recordId}.json`;

    if (
      options.download === false ||
      typeof Blob === "undefined" ||
      typeof document === "undefined"
    ) {
      return createOperationResult(
        true,
        "record-prepared",
        "Registro preparado para exportação.",
        {
          fileName,
          content,
          record
        }
      );
    }

    const blob = new Blob([content], {
      type: "application/json;charset=utf-8"
    });

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = fileName;
    anchor.style.display = "none";

    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1000);

    return createOperationResult(
      true,
      "record-exported",
      `Registro exportado como ${fileName}.`,
      { fileName, recordId }
    );
  }

  /**
   * ================================================================
   * IMPORTAÇÃO E RESTAURAÇÃO
   * ================================================================
   */

  function importRepository(repository, options = {}) {
    if (
      !isObject(repository) ||
      !Array.isArray(repository.records)
    ) {
      return createOperationResult(
        false,
        "invalid-repository",
        "O conteúdo informado não corresponde a um repositório curatorial válido."
      );
    }

    if (
      options.merge === true &&
      state.repository &&
      Array.isArray(state.repository.records)
    ) {
      const existingIds = new Set(
        state.repository.records.map(
          (record) => record.id
        )
      );

      repository.records.forEach((record) => {
        if (!existingIds.has(record.id)) {
          state.repository.records.push(
            normalizeExistingRecord(clone(record))
          );
        }
      });
    } else {
      state.repository = clone(repository);
    }

    rebuildIndexes();
    recalculateStatistics();
    updateRepositoryMetadata();
    persistRepository();

    registerOperation("import-repository", {
      merge: options.merge === true,
      totalRecords: state.repository.records.length
    });

    return createOperationResult(
      true,
      "repository-imported",
      "Repositório importado com sucesso.",
      {
        totalRecords: state.repository.records.length
      }
    );
  }

  function resetToSourceRepository() {
    clearLocalRepository();

    return initialize({
      ...state.configuration,
      preferLocalRepository: false,
      forceReload: true
    });
  }

  /**
   * ================================================================
   * METADADOS E MUTATIONS
   * ================================================================
   */

  function touchRecord(record, updatedBy = null) {
    if (!isObject(record.provenance)) {
      record.provenance = {};
    }

    record.provenance.updatedAt = nowISO();
    record.provenance.updatedBy =
      updatedBy || record.provenance.updatedBy || null;

    record.provenance.revision =
      Number(record.provenance.revision || 1) + 1;

    return record;
  }

  function updateRepositoryMetadata() {
    const timestamp = nowISO();

    state.updatedAt = timestamp;

    if (!isObject(state.repository.repositoryProvenance)) {
      state.repository.repositoryProvenance = {};
    }

    state.repository.repositoryProvenance.updatedAt =
      timestamp;

    state.repository.repositoryProvenance.revision =
      Number(
        state.repository.repositoryProvenance.revision || 1
      ) + 1;

    state.repository.lastUpdated = timestamp.slice(0, 10);
  }

  function finalizeMutation(type, details = {}) {
    rebuildIndexes();
    updateRepositoryMetadata();

    if (state.configuration.autoRecalculateStatistics) {
      recalculateStatistics();
    }

    persistRepository();
    registerOperation(type, details);
  }

  /**
   * ================================================================
   * INICIALIZAÇÃO
   * ================================================================
   */

  async function initialize(options = {}) {
    if (
      state.processing &&
      options.forceReload !== true
    ) {
      return createOperationResult(
        false,
        "initialization-in-progress",
        "A inicialização já está em andamento."
      );
    }

    if (
      state.initialized &&
      options.forceReload !== true
    ) {
      return createOperationResult(
        true,
        "already-initialized",
        "O motor de curadoria já está inicializado.",
        getState()
      );
    }

    state.processing = true;
    state.completed = false;
    state.error = null;

    try {
      state.configuration = {
        ...state.configuration,
        ...options,
        paths: {
          ...DEFAULT_PATHS,
          ...(options.paths || {})
        }
      };

      const localRepository = loadLocalRepository();

      const [
        sourceRepository,
        schema,
        observationsRepository,
        observationSchema,
        program,
        locations,
        traditionalGroups
      ] = await Promise.all([
        localRepository
          ? Promise.resolve(null)
          : fetchJSON(
              state.configuration.paths.repository,
              { required: true }
            ),

        fetchJSON(
          state.configuration.paths.recordSchema,
          { required: false }
        ),

        fetchJSON(
          state.configuration.paths.observations,
          { required: false }
        ),

        fetchJSON(
          state.configuration.paths.observationSchema,
          { required: false }
        ),

        fetchJSON(
          state.configuration.paths.program,
          { required: false }
        ),

        fetchJSON(
          state.configuration.paths.locations,
          { required: false }
        ),

        fetchJSON(
          state.configuration.paths.traditionalGroups,
          { required: false }
        )
      ]);

      state.repository =
        localRepository || sourceRepository;

      if (
        !state.repository ||
        !Array.isArray(state.repository.records)
      ) {
        throw new Error(
          "O repositório curation-records-2026.json é inválido."
        );
      }

      state.schema = schema;
      state.observationsRepository =
        observationsRepository;
      state.observationSchema = observationSchema;
      state.program = program;
      state.locations = locations;
      state.traditionalGroups = traditionalGroups;

      state.repository.records =
        state.repository.records.map((record) =>
          normalizeExistingRecord(record)
        );

      rebuildIndexes();
      recalculateStatistics();

      state.initialized = true;
      state.processing = false;
      state.completed = true;
      state.initializedAt = nowISO();
      state.updatedAt = state.initializedAt;

      persistRepository();

      const operation = registerOperation(
        "engine-initialized",
        {
          repositorySource: localRepository
            ? "localStorage"
            : "json-file",
          indexes: {
            records: state.indexes.recordsById.size,
            observations:
              state.indexes.observationsById.size,
            activities:
              state.indexes.activitiesById.size,
            locations:
              state.indexes.locationsById.size,
            groups: state.indexes.groupsById.size
          }
        }
      );

      dispatchEvent("festanca:curation-ready", {
        engine: ENGINE_NAME,
        version: ENGINE_VERSION,
        state: getState(),
        operation
      });

      debugLog("Motor inicializado.", getState());

      return createOperationResult(
        true,
        "engine-initialized",
        "Motor de Curadoria Histórica inicializado com sucesso.",
        getState()
      );
    } catch (error) {
      state.processing = false;
      state.completed = false;
      state.initialized = false;
      state.error = {
        message: error.message,
        stack: error.stack || null,
        timestamp: nowISO()
      };

      debugError(
        "Falha na inicialização do motor.",
        error
      );

      dispatchEvent("festanca:curation-error", {
        engine: ENGINE_NAME,
        error: clone(state.error)
      });

      return createOperationResult(
        false,
        "engine-initialization-failed",
        error.message,
        clone(state.error)
      );
    }
  }

  function dispatchEvent(eventName, detail) {
    if (
      typeof document === "undefined" ||
      typeof CustomEvent === "undefined"
    ) {
      return false;
    }

    document.dispatchEvent(
      new CustomEvent(eventName, {
        detail: clone(detail)
      })
    );

    return true;
  }

  /**
   * ================================================================
   * ESTADO PÚBLICO
   * ================================================================
   */

  function getState() {
    return {
      engineName: ENGINE_NAME,
      engineVersion: ENGINE_VERSION,
      initialized: state.initialized,
      processing: state.processing,
      completed: state.completed,
      error: clone(state.error),
      initializedAt: state.initializedAt,
      updatedAt: state.updatedAt,
      configuration: clone(state.configuration),
      repository: {
        loaded: Boolean(state.repository),
        repositoryId:
          state.repository?.repositoryId || null,
        totalRecords:
          state.repository?.records?.length || 0,
        statistics:
          clone(state.repository?.statistics) || null
      },
      resources: {
        schemaLoaded: Boolean(state.schema),
        observationsLoaded: Boolean(
          state.observationsRepository
        ),
        observationSchemaLoaded: Boolean(
          state.observationSchema
        ),
        programLoaded: Boolean(state.program),
        locationsLoaded: Boolean(state.locations),
        traditionalGroupsLoaded: Boolean(
          state.traditionalGroups
        )
      },
      indexes: {
        records: state.indexes.recordsById.size,
        observations:
          state.indexes.observationsById.size,
        activities: state.indexes.activitiesById.size,
        locations: state.indexes.locationsById.size,
        traditionalGroups:
          state.indexes.groupsById.size
      },
      lastOperation: clone(state.lastOperation)
    };
  }

  function getRepository(options = {}) {
    assertInitialized();

    return options.cloneResult === false
      ? state.repository
      : clone(state.repository);
  }

  function getStatistics() {
    assertInitialized();
    return clone(state.repository.statistics);
  }

  function getOperationHistory() {
    return clone(state.operationHistory);
  }

  function setConfiguration(configuration = {}) {
    state.configuration = {
      ...state.configuration,
      ...configuration,
      paths: {
        ...state.configuration.paths,
        ...(configuration.paths || {})
      }
    };

    if (
      state.configuration.useLocalStorage &&
      typeof global.localStorage !== "undefined"
    ) {
      global.localStorage.setItem(
        STORAGE_KEYS.configuration,
        JSON.stringify(state.configuration)
      );
    }

    return clone(state.configuration);
  }

  /**
   * ================================================================
   * API PÚBLICA
   * ================================================================
   */

  const publicAPI = Object.freeze({
    name: ENGINE_NAME,
    version: ENGINE_VERSION,

    constants: Object.freeze({
      paths: DEFAULT_PATHS,
      curationStages: CURATION_STAGES,
      validationStatuses: VALIDATION_STATUSES,
      publicationStatuses: PUBLICATION_STATUSES,
      recordStatuses: RECORD_STATUSES,
      knowledgeClassifications:
        KNOWLEDGE_CLASSIFICATIONS
    }),

    initialize,
    init: initialize,

    getState,
    getRepository,
    getStatistics,
    getOperationHistory,

    setConfiguration,

    createRecord,
    updateRecord,

    getRecordById,
    getRecords,
    getRecordsByStage,
    getRecordsByActivity,
    getRecordsByObservation,
    getPermanentMemoryRecords,
    getPendingRecords,

    linkActivity,
    linkObservation,
    linkDailyLog,
    linkLocation,
    linkTraditionalGroup,

    validateRecord,
    validateAllRecords,

    canTransitionStage,
    transitionStage,

    addValidator,
    addConflictingInformation,

    reviewPrivacy,
    authorizePublication,

    evaluatePermanentMemoryEligibility,

    recalculateStatistics,
    rebuildIndexes,
    rebuildRepositoryIndexes,

    generateNextRecordId,
    isRecordIdAvailable,

    exportRepository,
    exportRecord,
    importRepository,

    persistRepository,
    clearLocalRepository,
    resetToSourceRepository
  });

  global[ENGINE_NAME] = publicAPI;

  /**
   * Inicialização automática.
   *
   * Poderá ser desativada colocando antes deste script:
   *
   * window.FESTANCA_CURATION_AUTO_INIT = false;
   */
  function autoInitialize() {
    if (global.FESTANCA_CURATION_AUTO_INIT === false) {
      return;
    }

    initialize().then((result) => {
      if (!result.success) {
        debugError(result.message);
      }
    });
  }

  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener(
        "DOMContentLoaded",
        autoInitialize,
        { once: true }
      );
    } else {
      autoInitialize();
    }
  }
})(typeof window !== "undefined" ? window : globalThis);
