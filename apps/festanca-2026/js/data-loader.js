"use strict";

/**
 * ============================================================
 * FESTANÇA DE VILA BELA 2026
 * PROGRAMAÇÃO CULTURAL INTELIGENTE
 * DATA LOADER OFICIAL
 * ============================================================
 *
 * Arquivo:
 * apps/festanca-2026/js/data-loader.js
 *
 * Responsabilidades:
 * - carregar a programação oficial;
 * - carregar o inventário de locais;
 * - carregar os festeiros;
 * - carregar os grupos tradicionais;
 * - relacionar atividades e locais por locationId;
 * - proteger dados residenciais;
 * - oferecer filtros e consultas públicas;
 * - calcular programação de hoje;
 * - calcular próximo evento;
 * - produzir estatísticas;
 * - funcionar em servidor local e GitHub Pages.
 *
 * Grupos tradicionais oficiais:
 * - Grupo do Congo;
 * - Conguinho;
 * - Chorado;
 * - Choradinho.
 *
 * Coordenação-Geral:
 * Nazário Frazão de Almeida
 */

(() => {
  /* ==========================================================
     CONFIGURAÇÃO
  ========================================================== */

  const CONFIG = Object.freeze({
    version: "2.0.0",

    files: Object.freeze({
      programacao:
        "./data/programacao-2026.json",

      locais:
        "./data/locais-2026.json",

      festeiros:
        "./data/festeiros-2026.json",

      gruposTradicionais:
        "./data/grupos-tradicionais-2026.json"
    }),

    timezone:
      "America/Cuiaba",

    locale:
      "pt-BR",

    cacheMode:
      "no-store",

    requestTimeout:
      15000
  });

  /* ==========================================================
     ESTADO INTERNO
  ========================================================== */

  const state = {
    loaded: false,
    loading: false,
    error: null,
    loadingPromise: null,
    loadedAt: null,

    programacaoDocument: null,
    locaisDocument: null,
    festeirosDocument: null,
    gruposTradicionaisDocument: null,

    activities: [],
    places: [],
    festivalPeople: [],
    traditionalGroups: [],

    activitiesById: new Map(),
    placesById: new Map(),
    traditionalGroupsById: new Map()
  };

  /* ==========================================================
     UTILITÁRIOS BÁSICOS
  ========================================================== */

  function cloneValue(value) {
    if (value === undefined) {
      return undefined;
    }

    if (
      typeof structuredClone ===
      "function"
    ) {
      return structuredClone(value);
    }

    return JSON.parse(
      JSON.stringify(value)
    );
  }

  function normalizeText(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function slugify(value) {
    return normalizeText(value)
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function ensureArray(value) {
    return Array.isArray(value)
      ? value
      : [];
  }

  function isObject(value) {
    return Boolean(
      value &&
      typeof value === "object" &&
      !Array.isArray(value)
    );
  }

  function safeString(value) {
    return value == null
      ? ""
      : String(value).trim();
  }

  function firstDefined(...values) {
    return values.find(
      value =>
        value !== undefined &&
        value !== null &&
        value !== ""
    );
  }

  /* ==========================================================
     DATAS E HORÁRIOS
  ========================================================== */

  function parseLocalDate(dateValue) {
    if (!dateValue) {
      return null;
    }

    const match = String(dateValue).match(
      /^(\d{4})-(\d{2})-(\d{2})$/
    );

    if (!match) {
      return null;
    }

    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);

    return new Date(
      year,
      month - 1,
      day,
      12,
      0,
      0,
      0
    );
  }

  function parseActivityDateTime(activity) {
    if (!activity?.date) {
      return null;
    }

    const dateParts = String(
      activity.date
    ).match(
      /^(\d{4})-(\d{2})-(\d{2})$/
    );

    if (!dateParts) {
      return null;
    }

    const timeParts = String(
      activity.startTime || "00:00"
    ).match(
      /^(\d{2}):(\d{2})$/
    );

    const hour = timeParts
      ? Number(timeParts[1])
      : 0;

    const minute = timeParts
      ? Number(timeParts[2])
      : 0;

    return new Date(
      Number(dateParts[1]),
      Number(dateParts[2]) - 1,
      Number(dateParts[3]),
      hour,
      minute,
      0,
      0
    );
  }

  function formatDateBR(dateValue) {
    const date =
      parseLocalDate(dateValue);

    if (!date) {
      return safeString(dateValue);
    }

    return new Intl.DateTimeFormat(
      CONFIG.locale,
      {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      }
    ).format(date);
  }

  function formatFullDateBR(dateValue) {
    const date =
      parseLocalDate(dateValue);

    if (!date) {
      return safeString(dateValue);
    }

    return new Intl.DateTimeFormat(
      CONFIG.locale,
      {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
      }
    ).format(date);
  }

  function formatShortDateBR(dateValue) {
    const date =
      parseLocalDate(dateValue);

    if (!date) {
      return safeString(dateValue);
    }

    return new Intl.DateTimeFormat(
      CONFIG.locale,
      {
        day: "2-digit",
        month: "short"
      }
    ).format(date);
  }

  function formatTimeBR(timeValue) {
    if (!timeValue) {
      return "";
    }

    const match = String(timeValue).match(
      /^(\d{2}):(\d{2})$/
    );

    if (!match) {
      return String(timeValue);
    }

    return `${match[1]}:${match[2]}`;
  }

  function getTodayIsoDate() {
    const parts =
      new Intl.DateTimeFormat(
        "en-CA",
        {
          timeZone: CONFIG.timezone,
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        }
      ).formatToParts(new Date());

    const values = {};

    parts.forEach(part => {
      values[part.type] = part.value;
    });

    return (
      `${values.year}-` +
      `${values.month}-` +
      `${values.day}`
    );
  }

  function compareActivities(a, b) {
    const first =
      parseActivityDateTime(a);

    const second =
      parseActivityDateTime(b);

    if (!first && !second) {
      return 0;
    }

    if (!first) {
      return 1;
    }

    if (!second) {
      return -1;
    }

    return (
      first.getTime() -
      second.getTime()
    );
  }

  /* ==========================================================
     CARREGAMENTO HTTP
  ========================================================== */

  async function fetchJson(
    url,
    options = {}
  ) {
    const controller =
      new AbortController();

    const timeout = setTimeout(
      () => controller.abort(),
      CONFIG.requestTimeout
    );

    try {
      const response = await fetch(
        url,
        {
          cache:
            options.cache ||
            CONFIG.cacheMode,

          headers: {
            Accept: "application/json"
          },

          signal: controller.signal
        }
      );

      if (!response.ok) {
        throw new Error(
          `Falha ao carregar ${url}: HTTP ${response.status}`
        );
      }

      const text =
        await response.text();

      try {
        return JSON.parse(text);
      } catch {
        throw new Error(
          `JSON inválido em ${url}`
        );
      }
    } catch (error) {
      if (
        error.name ===
        "AbortError"
      ) {
        throw new Error(
          `Tempo esgotado ao carregar ${url}`
        );
      }

      throw error;
    } finally {
      clearTimeout(timeout);
    }
  }

  /* ==========================================================
     LEITURA FLEXÍVEL DOS DOCUMENTOS
  ========================================================== */

  function extractActivities(document) {
    return ensureArray(
      firstDefined(
        document?.activities,
        document?.programacao,
        document?.events,
        document?.items
      )
    );
  }

  function extractPlaces(document) {
    return ensureArray(
      firstDefined(
        document?.places,
        document?.locations,
        document?.locais,
        document?.items
      )
    );
  }

  function extractFestivalPeople(
    document
  ) {
    return ensureArray(
      firstDefined(
        document?.festeiros,
        document?.festivalPeople,
        document?.people,
        document?.participants,
        document?.items
      )
    );
  }

  function extractTraditionalGroups(
    document
  ) {
    return ensureArray(
      firstDefined(
        document?.groups,
        document?.traditionalGroups,
        document?.grupos,
        document?.items
      )
    );
  }

  /* ==========================================================
     IDENTIFICADORES
  ========================================================== */

  function getPlaceId(place) {
    return firstDefined(
      place?.id,
      place?.locationId,
      place?.placeId,
      place?.slug
    );
  }

  function getGroupId(group) {
    return firstDefined(
      group?.id,
      group?.groupId,
      group?.slug,
      slugify(group?.name)
    );
  }

  /* ==========================================================
     PRIVACIDADE E POLÍTICA CULTURAL
  ========================================================== */

  function isPrivateResidenceLocation(
    location
  ) {
    const type = normalizeText(
      location?.type
    );

    return (
      type.includes("residencia") ||
      type.includes("casa-de-festeiro") ||
      type.includes(
        "residencia-de-festeiro"
      )
    );
  }

  function isRezaCantada(activity) {
    const categories =
      ensureArray(activity?.categories)
        .map(normalizeText);

    const title =
      normalizeText(activity?.title);

    return (
      categories.includes(
        "reza-cantada"
      ) ||
      title.includes(
        "reza cantada"
      )
    );
  }

  function isMapPublicationAuthorized(
    activity,
    place
  ) {
    if (
      !isPrivateResidenceLocation(
        activity?.location
      ) &&
      !isPrivateResidenceLocation(
        place
      )
    ) {
      return true;
    }

    const combinedStatus =
      normalizeText(
        [
          place?.publicationStatus,
          place?.verificationStatus,
          place?.publication?.status,
          place?.privacy?.publicationStatus,
          activity?.location
            ?.verificationStatus
        ]
          .filter(Boolean)
          .join(" ")
      );

    return (
      combinedStatus.includes(
        "autorizado"
      ) ||
      combinedStatus.includes(
        "publicavel"
      ) ||
      combinedStatus.includes(
        "publicável"
      )
    );
  }

  function applyCulturalRules(
    activity
  ) {
    const output =
      cloneValue(activity);

    output.categories =
      ensureArray(output.categories);

    output.participants =
      ensureArray(output.participants);

    if (isRezaCantada(output)) {
      output.location =
        isObject(output.location)
          ? output.location
          : {};

      output.location.type =
        "residencia-de-festeiro";

      output.location.accessPolicy = {
        accessType:
          "programacao-oficial",

        publicOpenVisit:
          false,

        guidance:
          "A visita ocorre somente durante o recebimento ou a entrega oficial do festeiro ou da festeira, conforme a programação e as orientações da organização."
      };
    }

    if (
      output.id ===
      "festanca-2026-021"
    ) {
      output.locationId =
        "local-prefeitura-municipal";
    }

    return output;
  }

  /* ==========================================================
     RELACIONAMENTO COM LOCAIS
  ========================================================== */

  function buildPlaceIndex() {
    state.placesById.clear();

    state.places.forEach(place => {
      const placeId =
        getPlaceId(place);

      if (placeId) {
        state.placesById.set(
          String(placeId),
          place
        );
      }
    });
  }

  function enrichActivity(
    rawActivity
  ) {
    const activity =
      applyCulturalRules(
        rawActivity
      );

    const place =
      activity.locationId
        ? state.placesById.get(
            String(
              activity.locationId
            )
          ) || null
        : null;

    const originalLocation =
      isObject(activity.location)
        ? activity.location
        : {};

    const mergedLocation = {
      ...(isObject(place)
        ? place
        : {}),

      ...originalLocation
    };

    const placeName =
      firstDefined(
        originalLocation.name,
        place?.name,
        place?.title,
        "Local a confirmar"
      );

    mergedLocation.name =
      placeName;

    const mapsUrl =
      firstDefined(
        originalLocation.googleMapsUrl,
        place?.googleMapsUrl,
        place?.mapsUrl,
        place?.links?.googleMaps
      );

    const mapAuthorized =
      isMapPublicationAuthorized(
        activity,
        mergedLocation
      );

    if (mapAuthorized) {
      mergedLocation.googleMapsUrl =
        mapsUrl || null;
    } else {
      mergedLocation.googleMapsUrl =
        null;
    }

    activity.location =
      mergedLocation;

    activity.place =
      place
        ? cloneValue(place)
        : null;

    activity.googleMapsUrl =
      mapAuthorized
        ? mapsUrl || null
        : null;

    activity.formattedDate =
      formatDateBR(activity.date);

    activity.formattedShortDate =
      formatShortDateBR(
        activity.date
      );

    activity.formattedFullDate =
      formatFullDateBR(
        activity.date
      );

    activity.formattedStartTime =
      formatTimeBR(
        activity.startTime
      );

    activity.formattedEndTime =
      formatTimeBR(
        activity.endTime
      );

    activity.dateTime =
      parseActivityDateTime(
        activity
      );

    activity.isPrivateResidence =
      isPrivateResidenceLocation(
        activity.location
      );

    activity.isRezaCantada =
      isRezaCantada(activity);

    activity.isItinerant =
      Boolean(
        activity.route
          ?.isItinerant ||
        activity.location?.type ===
          "percurso" ||
        activity.categories.includes(
          "itinerante"
        )
      );

    activity.searchText =
      normalizeText(
        [
          activity.id,
          activity.title,
          activity.description,
          activity.celebration,
          activity.phase,
          activity.date,
          activity.startTime,
          ...activity.categories,
          activity.location?.name,
          activity.location?.street,
          activity.location?.district,
          activity.location?.reference,
          ...activity.participants.map(
            participant =>
              `${participant.role || ""} ${participant.name || ""}`
          )
        ]
          .filter(Boolean)
          .join(" ")
      );

    return activity;
  }

  function buildActivityIndex() {
    state.activitiesById.clear();

    state.activities.forEach(activity => {
      if (activity.id) {
        state.activitiesById.set(
          String(activity.id),
          activity
        );
      }
    });
  }

  function buildTraditionalGroupIndex() {
    state.traditionalGroupsById
      .clear();

    state.traditionalGroups.forEach(
      group => {
        const groupId =
          getGroupId(group);

        if (groupId) {
          state.traditionalGroupsById.set(
            String(groupId),
            group
          );
        }
      }
    );
  }

  /* ==========================================================
     VALIDAÇÃO DOS DOCUMENTOS
  ========================================================== */

  function validateProgramDocument(
    document
  ) {
    if (!isObject(document)) {
      throw new Error(
        "Documento de programação inválido."
      );
    }

    const activities =
      extractActivities(document);

    if (activities.length === 0) {
      throw new Error(
        "Nenhuma atividade foi encontrada em programacao-2026.json."
      );
    }

    const ids = new Set();

    activities.forEach(
      (activity, index) => {
        if (!activity?.id) {
          throw new Error(
            `Atividade sem ID na posição ${index}.`
          );
        }

        if (ids.has(activity.id)) {
          throw new Error(
            `ID de atividade duplicado: ${activity.id}`
          );
        }

        ids.add(activity.id);
      }
    );
  }

  function validateTraditionalGroups(
    groups
  ) {
    const expected = [
      "grupo-do-congo",
      "conguinho",
      "chorado",
      "choradinho"
    ];

    const actual = new Set(
      groups.map(group =>
        String(getGroupId(group))
      )
    );

    expected.forEach(groupId => {
      if (!actual.has(groupId)) {
        console.warn(
          `[Festança 2026] Grupo tradicional não encontrado: ${groupId}`
        );
      }
    });
  }

  /* ==========================================================
     CARREGAMENTO PRINCIPAL
  ========================================================== */

  async function performLoad() {
    state.loading = true;
    state.error = null;

    try {
      const [
        programacaoDocument,
        locaisDocument,
        festeirosDocument,
        gruposTradicionaisDocument
      ] = await Promise.all([
        fetchJson(
          CONFIG.files.programacao
        ),

        fetchJson(
          CONFIG.files.locais
        ),

        fetchJson(
          CONFIG.files.festeiros
        ),

        fetchJson(
          CONFIG.files
            .gruposTradicionais
        )
      ]);

      validateProgramDocument(
        programacaoDocument
      );

      state.programacaoDocument =
        programacaoDocument;

      state.locaisDocument =
        locaisDocument;

      state.festeirosDocument =
        festeirosDocument;

      state.gruposTradicionaisDocument =
        gruposTradicionaisDocument;

      state.places =
        extractPlaces(
          locaisDocument
        );

      state.festivalPeople =
        extractFestivalPeople(
          festeirosDocument
        );

      state.traditionalGroups =
        extractTraditionalGroups(
          gruposTradicionaisDocument
        );

      validateTraditionalGroups(
        state.traditionalGroups
      );

      buildPlaceIndex();

      state.activities =
        extractActivities(
          programacaoDocument
        )
          .map(enrichActivity)
          .sort(compareActivities);

      buildActivityIndex();

      buildTraditionalGroupIndex();

      state.loaded = true;
      state.loadedAt =
        new Date().toISOString();

      const snapshot =
        getSnapshot();

      window.dispatchEvent(
        new CustomEvent(
          "festanca:data-ready",
          {
            detail: snapshot
          }
        )
      );

      console.info(
        "[Festança 2026] Dados carregados com sucesso.",
        getStatistics()
      );

      return snapshot;
    } catch (error) {
      state.loaded = false;
      state.error = error;

      const detail = {
        message:
          error?.message ||
          "Erro desconhecido ao carregar os dados.",

        error
      };

      window.dispatchEvent(
        new CustomEvent(
          "festanca:data-error",
          {
            detail
          }
        )
      );

      console.error(
        "[Festança 2026] Erro no carregamento:",
        error
      );

      throw error;
    } finally {
      state.loading = false;
      state.loadingPromise = null;
    }
  }

  function load() {
    if (state.loaded) {
      return Promise.resolve(
        getSnapshot()
      );
    }

    if (
      state.loadingPromise
    ) {
      return state.loadingPromise;
    }

    state.loadingPromise =
      performLoad();

    return state.loadingPromise;
  }

  function reload() {
    state.loaded = false;
    state.loadingPromise = null;

    return performLoad();
  }

  function isLoaded() {
    return state.loaded;
  }

  function isLoading() {
    return state.loading;
  }

  function getLastError() {
    return state.error
      ? {
          message:
            state.error.message
        }
      : null;
  }

  /* ==========================================================
     SNAPSHOT
  ========================================================== */

  function getSnapshot() {
    return {
      version: CONFIG.version,

      loaded:
        state.loaded,

      loadedAt:
        state.loadedAt,

      event:
        state.programacaoDocument
          ? {
              eventId:
                state.programacaoDocument
                  .eventId,

              eventName:
                state.programacaoDocument
                  .eventName,

              eventTagline:
                state.programacaoDocument
                  .eventTagline,

              coordination:
                cloneValue(
                  state.programacaoDocument
                    .coordination
                ),

              mainPeriod:
                cloneValue(
                  state.programacaoDocument
                    .mainPeriod
                ),

              preparatoryPeriod:
                cloneValue(
                  state.programacaoDocument
                    .preparatoryPeriod
                )
            }
          : null,

      activities:
        cloneValue(
          state.activities
        ),

      places:
        cloneValue(
          state.places
        ),

      festivalPeople:
        cloneValue(
          state.festivalPeople
        ),

      traditionalGroups:
        cloneValue(
          state.traditionalGroups
        ),

      programacaoDocument:
        cloneValue(
          state.programacaoDocument
        ),

      locaisDocument:
        cloneValue(
          state.locaisDocument
        ),

      festeirosDocument:
        cloneValue(
          state.festeirosDocument
        ),

      traditionalGroupsDocument:
        cloneValue(
          state.gruposTradicionaisDocument
        ),

      statistics:
        getStatistics()
    };
  }

  /* ==========================================================
     CONSULTAS DE ATIVIDADES
  ========================================================== */

  function getActivities() {
    return cloneValue(
      state.activities
    );
  }

  function getActivityById(
    activityId
  ) {
    const activity =
      state.activitiesById.get(
        String(activityId)
      );

    return activity
      ? cloneValue(activity)
      : null;
  }

  function getActivitiesByDate(
    date
  ) {
    return cloneValue(
      state.activities.filter(
        activity =>
          activity.date === date
      )
    );
  }

  function getActivitiesByCelebration(
    celebration
  ) {
    const normalized =
      normalizeText(celebration);

    return cloneValue(
      state.activities.filter(
        activity =>
          normalizeText(
            activity.celebration
          ) === normalized
      )
    );
  }

  function getActivitiesByCategory(
    category
  ) {
    const normalized =
      normalizeText(category);

    return cloneValue(
      state.activities.filter(
        activity =>
          activity.categories
            .map(normalizeText)
            .includes(normalized)
      )
    );
  }

  function getActivitiesByLocationId(
    locationId
  ) {
    return cloneValue(
      state.activities.filter(
        activity =>
          String(
            activity.locationId || ""
          ) === String(locationId)
      )
    );
  }

  function getTodayActivities() {
    const today =
      getTodayIsoDate();

    return getActivitiesByDate(
      today
    );
  }

  function getNextActivity(
    referenceDate = new Date()
  ) {
    const referenceTime =
      referenceDate instanceof Date
        ? referenceDate.getTime()
        : new Date(
            referenceDate
          ).getTime();

    const next =
      state.activities.find(
        activity => {
          const activityDate =
            parseActivityDateTime(
              activity
            );

          return (
            activityDate &&
            activityDate.getTime() >=
              referenceTime
          );
        }
      );

    return next
      ? cloneValue(next)
      : null;
  }

  function getUpcomingActivities(
    limit = 10,
    referenceDate = new Date()
  ) {
    const referenceTime =
      referenceDate instanceof Date
        ? referenceDate.getTime()
        : new Date(
            referenceDate
          ).getTime();

    return cloneValue(
      state.activities
        .filter(activity => {
          const date =
            parseActivityDateTime(
              activity
            );

          return (
            date &&
            date.getTime() >=
              referenceTime
          );
        })
        .slice(
          0,
          Math.max(
            0,
            Number(limit) || 10
          )
        )
    );
  }

  /* ==========================================================
     FILTROS
  ========================================================== */

  function filterActivities(
    filters = {}
  ) {
    const celebration =
      normalizeText(
        filters.celebration
      );

    const category =
      normalizeText(
        filters.category
      );

    const phase =
      normalizeText(
        filters.phase
      );

    const date =
      safeString(filters.date);

    const locationId =
      safeString(
        filters.locationId
      );

    const search =
      normalizeText(
        filters.search
      );

    const onlyItinerant =
      filters.onlyItinerant === true;

    const onlyPrivateResidences =
      filters.onlyPrivateResidences ===
      true;

    const results =
      state.activities.filter(
        activity => {
          if (
            celebration &&
            normalizeText(
              activity.celebration
            ) !== celebration
          ) {
            return false;
          }

          if (
            category &&
            !activity.categories
              .map(normalizeText)
              .includes(category)
          ) {
            return false;
          }

          if (
            phase &&
            normalizeText(
              activity.phase
            ) !== phase
          ) {
            return false;
          }

          if (
            date &&
            activity.date !== date
          ) {
            return false;
          }

          if (
            locationId &&
            String(
              activity.locationId || ""
            ) !== locationId
          ) {
            return false;
          }

          if (
            search &&
            !activity.searchText.includes(
              search
            )
          ) {
            return false;
          }

          if (
            onlyItinerant &&
            !activity.isItinerant
          ) {
            return false;
          }

          if (
            onlyPrivateResidences &&
            !activity
              .isPrivateResidence
          ) {
            return false;
          }

          return true;
        }
      );

    return cloneValue(results);
  }

  function searchActivities(
    query
  ) {
    return filterActivities({
      search: query
    });
  }

  /* ==========================================================
     CONSULTAS DE LOCAIS
  ========================================================== */

  function getPlaces() {
    return cloneValue(
      state.places
    );
  }

  function getPlaceById(placeId) {
    const place =
      state.placesById.get(
        String(placeId)
      );

    return place
      ? cloneValue(place)
      : null;
  }

  function getPublicPlaces() {
    return cloneValue(
      state.places.filter(place =>
        !isPrivateResidenceLocation(
          place
        )
      )
    );
  }

  /* ==========================================================
     FESTEIROS
  ========================================================== */

  function getFestivalPeople() {
    return cloneValue(
      state.festivalPeople
    );
  }

  function searchFestivalPeople(
    query
  ) {
    const normalized =
      normalizeText(query);

    if (!normalized) {
      return getFestivalPeople();
    }

    return cloneValue(
      state.festivalPeople.filter(
        person =>
          normalizeText(
            JSON.stringify(person)
          ).includes(normalized)
      )
    );
  }

  /* ==========================================================
     GRUPOS TRADICIONAIS
  ========================================================== */

  function getTraditionalGroups() {
    return cloneValue(
      state.traditionalGroups
    );
  }

  function getTraditionalGroupById(
    groupId
  ) {
    const group =
      state.traditionalGroupsById.get(
        String(groupId)
      );

    return group
      ? cloneValue(group)
      : null;
  }

  function getOfficialTraditionalGroups() {
    return cloneValue(
      state.traditionalGroups.filter(
        group =>
          normalizeText(
            group.participationStatus
          ) === "oficial"
      )
    );
  }

  function searchTraditionalGroups(
    query
  ) {
    const normalized =
      normalizeText(query);

    if (!normalized) {
      return getTraditionalGroups();
    }

    return cloneValue(
      state.traditionalGroups.filter(
        group =>
          normalizeText(
            JSON.stringify(group)
          ).includes(normalized)
      )
    );
  }

  /* ==========================================================
     AGRUPAMENTOS
  ========================================================== */

  function groupActivitiesByDate(
    activities = state.activities
  ) {
    const groups = {};

    ensureArray(activities).forEach(
      activity => {
        const key =
          activity.date ||
          "sem-data";

        groups[key] ??= [];

        groups[key].push(
          cloneValue(activity)
        );
      }
    );

    return groups;
  }

  function groupActivitiesByCelebration(
    activities = state.activities
  ) {
    const groups = {};

    ensureArray(activities).forEach(
      activity => {
        const key =
          activity.celebration ||
          "programacao-integrada";

        groups[key] ??= [];

        groups[key].push(
          cloneValue(activity)
        );
      }
    );

    return groups;
  }

  /* ==========================================================
     ESTATÍSTICAS
  ========================================================== */

  function countBy(
    items,
    property
  ) {
    return items.reduce(
      (result, item) => {
        const key =
          typeof property ===
          "function"
            ? property(item)
            : item?.[property];

        const normalizedKey =
          key || "nao-informado";

        result[normalizedKey] =
          (result[normalizedKey] || 0) +
          1;

        return result;
      },
      {}
    );
  }

  function getStatistics() {
    const rezas =
      state.activities.filter(
        activity =>
          activity.isRezaCantada
      );

    const itinerant =
      state.activities.filter(
        activity =>
          activity.isItinerant
      );

    const residences =
      state.activities.filter(
        activity =>
          activity
            .isPrivateResidence
      );

    const officialGroups =
      state.traditionalGroups.filter(
        group =>
          normalizeText(
            group.participationStatus
          ) === "oficial"
      );

    return {
      totalActivities:
        state.activities.length,

      totalPlaces:
        state.places.length,

      totalFestivalPeople:
        state.festivalPeople.length,

      traditionalGroups:
        state.traditionalGroups.length,

      officialTraditionalGroups:
        officialGroups.length,

      totalRezasCantadas:
        rezas.length,

      totalItinerantActivities:
        itinerant.length,

      totalPrivateResidenceActivities:
        residences.length,

      activitiesByPhase:
        countBy(
          state.activities,
          "phase"
        ),

      activitiesByCelebration:
        countBy(
          state.activities,
          "celebration"
        ),

      activitiesByDate:
        countBy(
          state.activities,
          "date"
        ),

      loaded:
        state.loaded,

      loadedAt:
        state.loadedAt
    };
  }

  /* ==========================================================
     DIAGNÓSTICO
  ========================================================== */

  function validateRelationships() {
    const missingPlaces = [];

    state.activities.forEach(
      activity => {
        if (
          activity.locationId &&
          !state.placesById.has(
            String(
              activity.locationId
            )
          )
        ) {
          missingPlaces.push({
            activityId:
              activity.id,

            locationId:
              activity.locationId
          });
        }
      }
    );

    return {
      valid:
        missingPlaces.length === 0,

      missingPlaces,

      totalActivities:
        state.activities.length,

      totalPlaces:
        state.places.length
    };
  }

  function getDiagnostics() {
    return {
      config:
        cloneValue(CONFIG),

      loaded:
        state.loaded,

      loading:
        state.loading,

      error:
        getLastError(),

      statistics:
        getStatistics(),

      relationships:
        validateRelationships(),

      expectedTraditionalGroups: [
        "grupo-do-congo",
        "conguinho",
        "chorado",
        "choradinho"
      ],

      foundTraditionalGroups:
        state.traditionalGroups.map(
          group => ({
            id:
              getGroupId(group),

            name:
              group.name,

            participationStatus:
              group
                .participationStatus
          })
        )
    };
  }

  /* ==========================================================
     API PÚBLICA
  ========================================================== */

  window.FestancaData =
    Object.freeze({
      version:
        CONFIG.version,

      load,
      reload,
      isLoaded,
      isLoading,
      getLastError,

      getSnapshot,
      getStatistics,
      getDiagnostics,
      validateRelationships,

      getActivities,
      getActivityById,
      getActivitiesByDate,
      getActivitiesByCelebration,
      getActivitiesByCategory,
      getActivitiesByLocationId,
      getTodayActivities,
      getNextActivity,
      getUpcomingActivities,

      filterActivities,
      searchActivities,

      getPlaces,
      getPlaceById,
      getPublicPlaces,

      getFestivalPeople,
      searchFestivalPeople,

      getTraditionalGroups,
      getTraditionalGroupById,
      getOfficialTraditionalGroups,
      searchTraditionalGroups,

      groupActivitiesByDate,
      groupActivitiesByCelebration,

      formatDateBR,
      formatFullDateBR,
      formatShortDateBR,
      formatTimeBR,
      getTodayIsoDate,
      normalizeText,
      slugify
    });

  /* ==========================================================
     CARREGAMENTO AUTOMÁTICO
  ========================================================== */

  function autoLoad() {
    load().catch(() => {
      /*
       * O erro já é enviado pelo evento festanca:data-error
       * e será tratado pelo script.js.
       */
    });
  }

  if (
    document.readyState ===
    "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      autoLoad,
      {
        once: true
      }
    );
  } else {
    autoLoad();
  }
})();
