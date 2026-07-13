"use strict";

/**
 * ============================================================
 * FESTANÇA DE VILA BELA 2026
 * PROGRAMAÇÃO CULTURAL INTELIGENTE
 * ============================================================
 *
 * Arquivo:
 * apps/festanca-2026/js/data-loader.js
 *
 * Responsabilidade:
 * - carregar as bases JSON da Festança 2026;
 * - validar minimamente suas estruturas;
 * - integrar programação, locais e festeiros;
 * - disponibilizar consultas para o script.js;
 * - preservar funcionamento em hospedagem estática;
 * - emitir evento quando os dados estiverem prontos.
 *
 * Bases consumidas:
 * - data/programacao-2026.json
 * - data/festeiros-2026.json
 * - data/locais-2026.json
 * - data/location-id-map-2026.json
 *
 * Coordenação-Geral:
 * Nazário Frazão de Almeida
 *
 * Projeto:
 * DCGLOBAL.AI
 * Festança de Vila Bela 2026
 */


/* ============================================================
   NAMESPACE GLOBAL
============================================================ */

window.FestancaData = window.FestancaData || {};


/* ============================================================
   CONFIGURAÇÃO
============================================================ */

const FESTANCA_DATA_CONFIG = Object.freeze({

  version: "1.0.0",

  basePath: "./data",

  files: Object.freeze({

    programacao: "programacao-2026.json",

    festeiros: "festeiros-2026.json",

    locais: "locais-2026.json",

     traditionalGroups:
       "./data/grupos-tradicionais-2026.json"
    
    locationMap: "location-id-map-2026.json"

     

  }),

  requestTimeout: 15000,

  cache: "no-store",

  expectedActivities: 42

});


/* ============================================================
   ESTADO INTERNO
============================================================ */

const festancaDataState = {

  loading: false,

  loaded: false,

  error: null,

  loadedAt: null,

  raw: {

    programacao: null,

    festeiros: null,

    locais: null,

    locationMap: null

     traditionalGroups: [],
     traditionalGroupsDocument: null,

  },

  indexes: {

    activitiesById: new Map(),

    placesById: new Map(),

    celebrations: new Map(),

    activitiesByDate: new Map(),

    activitiesByCelebration: new Map(),

    activitiesByLocation: new Map()

  },

  enrichedActivities: []

};


/* ============================================================
   ERROS PERSONALIZADOS
============================================================ */

class FestancaDataError extends Error {

  constructor(message, details = null) {

    super(message);

    this.name = "FestancaDataError";

    this.details = details;

  }

}


/* ============================================================
   UTILITÁRIOS
============================================================ */

function buildDataUrl(fileName) {

  return `${FESTANCA_DATA_CONFIG.basePath}/${fileName}`;

}


function isObject(value) {

  return (
    value !== null &&
    typeof value === "object" &&
    !Array.isArray(value)
  );

}


function normalizeText(value) {

  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

}


function cloneData(value) {

  if (
    typeof structuredClone === "function"
  ) {

    return structuredClone(value);

  }

  return JSON.parse(
    JSON.stringify(value)
  );

}


function uniqueValues(values) {

  return Array.from(
    new Set(values)
  );

}


function sortActivities(activities) {

  return [...activities].sort((a, b) => {

    const dateA =
      `${a.date || ""}T${a.startTime || "00:00"}`;

    const dateB =
      `${b.date || ""}T${b.startTime || "00:00"}`;

    return dateA.localeCompare(dateB);

  });

}


/* ============================================================
   FORMATAÇÃO DE DATA E HORÁRIO
============================================================ */

function formatDateBR(dateValue) {

  if (!dateValue) {

    return "";

  }

  const [year, month, day] =
    dateValue.split("-");

  if (!year || !month || !day) {

    return dateValue;

  }

  return `${day}/${month}/${year}`;

}


function formatTimeBR(timeValue) {

  if (!timeValue) {

    return "";

  }

  return timeValue.slice(0, 5);

}


function getWeekdayBR(dateValue) {

  if (!dateValue) {

    return "";

  }

  const date =
    new Date(`${dateValue}T12:00:00`);

  if (Number.isNaN(date.getTime())) {

    return "";

  }

  return new Intl.DateTimeFormat(
    "pt-BR",
    {
      weekday: "long"
    }
  ).format(date);

}


function formatFullDateBR(dateValue) {

  if (!dateValue) {

    return "";

  }

  const date =
    new Date(`${dateValue}T12:00:00`);

  if (Number.isNaN(date.getTime())) {

    return formatDateBR(dateValue);

  }

  return new Intl.DateTimeFormat(
    "pt-BR",
    {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric"
    }
  ).format(date);

}


/* ============================================================
   REQUISIÇÃO COM TIMEOUT
============================================================ */

async function fetchJson(fileName) {

  const url = buildDataUrl(fileName);

  const controller =
    new AbortController();

  const timeoutId = setTimeout(

    () => controller.abort(),

    FESTANCA_DATA_CONFIG.requestTimeout

  );

  try {

    const response = await fetch(

      url,

      {
        method: "GET",

        headers: {

          Accept: "application/json"

        },

        cache: FESTANCA_DATA_CONFIG.cache,

        signal: controller.signal

      }

    );

    if (!response.ok) {

      throw new FestancaDataError(

        `Falha ao carregar ${fileName}.`,

        {
          status: response.status,
          statusText: response.statusText,
          url
        }

      );

    }

    const contentType =
      response.headers.get("content-type") || "";

    if (
      !contentType.includes("application/json") &&
      !contentType.includes("text/plain")
    ) {

      console.warn(

        `[Festança 2026] Tipo de conteúdo inesperado em ${fileName}:`,

        contentType

      );

    }

    return await response.json();

  } catch (error) {

    if (error.name === "AbortError") {

      throw new FestancaDataError(

        `Tempo limite excedido ao carregar ${fileName}.`,

        {
          url,
          timeout:
            FESTANCA_DATA_CONFIG.requestTimeout
        }

      );

    }

    if (
      error instanceof FestancaDataError
    ) {

      throw error;

    }

    throw new FestancaDataError(

      `Erro ao processar ${fileName}: ${error.message}`,

      {
        url,
        originalError: error
      }

    );

  } finally {

    clearTimeout(timeoutId);

  }

}


/* ============================================================
   VALIDAÇÃO DA PROGRAMAÇÃO
============================================================ */

function validateProgramacao(data) {

  if (!isObject(data)) {

    throw new FestancaDataError(

      "programacao-2026.json não possui objeto raiz válido."

    );

  }

  if (!Array.isArray(data.activities)) {

    throw new FestancaDataError(

      "Campo activities ausente ou inválido em programacao-2026.json."

    );

  }

  const ids =
    data.activities.map(
      activity => activity.id
    );

  const duplicateIds =
    ids.filter(
      (id, index) =>
        ids.indexOf(id) !== index
    );

  if (duplicateIds.length > 0) {

    throw new FestancaDataError(

      "Foram encontrados IDs duplicados na programação.",

      {
        duplicateIds:
          uniqueValues(duplicateIds)
      }

    );

  }

  const activitiesWithoutId =
    data.activities.filter(
      activity => !activity.id
    );

  if (activitiesWithoutId.length > 0) {

    throw new FestancaDataError(

      "Existem atividades sem identificador."

    );

  }

  if (
    data.activities.length !==
    FESTANCA_DATA_CONFIG.expectedActivities
  ) {

    console.warn(

      `[Festança 2026] Esperadas ${FESTANCA_DATA_CONFIG.expectedActivities} atividades, ` +
      `mas foram encontradas ${data.activities.length}.`

    );

  }

  return true;

}


/* ============================================================
   VALIDAÇÃO DOS LOCAIS
============================================================ */

function validateLocais(data) {

  if (!isObject(data)) {

    throw new FestancaDataError(

      "locais-2026.json não possui objeto raiz válido."

    );

  }

  if (!Array.isArray(data.places)) {

    throw new FestancaDataError(

      "Campo places ausente ou inválido em locais-2026.json."

    );

  }

  const ids =
    data.places.map(
      place => place.id
    );

  const duplicateIds =
    ids.filter(
      (id, index) =>
        ids.indexOf(id) !== index
    );

  if (duplicateIds.length > 0) {

    throw new FestancaDataError(

      "Foram encontrados IDs duplicados no inventário de locais.",

      {
        duplicateIds:
          uniqueValues(duplicateIds)
      }

    );

  }

  return true;

}


/* ============================================================
   VALIDAÇÃO DOS FESTEIROS
============================================================ */

function validateFesteiros(data) {

  if (!isObject(data)) {

    throw new FestancaDataError(

      "festeiros-2026.json não possui objeto raiz válido."

    );

  }

  if (!Array.isArray(data.groups)) {

    throw new FestancaDataError(

      "Campo groups ausente ou inválido em festeiros-2026.json."

    );

  }

  return true;

}


/* ============================================================
   VALIDAÇÃO DO MAPA DE LOCALIZAÇÕES
============================================================ */

function validateLocationMap(data) {

  if (!isObject(data)) {

    throw new FestancaDataError(

      "location-id-map-2026.json não possui objeto raiz válido."

    );

  }

  if (!isObject(data.locationByActivity)) {

    throw new FestancaDataError(

      "Campo locationByActivity ausente ou inválido."

    );

  }

  return true;

}


/* ============================================================
   ÍNDICE DE LOCAIS
============================================================ */

function buildPlacesIndex() {

  const places =
    festancaDataState.raw.locais.places;

  festancaDataState.indexes.placesById.clear();

  places.forEach(place => {

    festancaDataState.indexes.placesById.set(

      place.id,

      place

    );

  });

}


/* ============================================================
   ÍNDICE DE ATIVIDADES
============================================================ */

function buildActivitiesIndex() {

  const activities =
    festancaDataState.raw.programacao.activities;

  const indexes =
    festancaDataState.indexes;

  indexes.activitiesById.clear();

  indexes.activitiesByDate.clear();

  indexes.activitiesByCelebration.clear();

  indexes.activitiesByLocation.clear();

  activities.forEach(activity => {

    indexes.activitiesById.set(

      activity.id,

      activity

    );


    if (!indexes.activitiesByDate.has(activity.date)) {

      indexes.activitiesByDate.set(

        activity.date,

        []

      );

    }

    indexes.activitiesByDate
      .get(activity.date)
      .push(activity);


    if (
      !indexes.activitiesByCelebration.has(
        activity.celebration
      )
    ) {

      indexes.activitiesByCelebration.set(

        activity.celebration,

        []

      );

    }

    indexes.activitiesByCelebration
      .get(activity.celebration)
      .push(activity);


    const locationId =
      activity.locationId || null;

    if (
      !indexes.activitiesByLocation.has(
        locationId
      )
    ) {

      indexes.activitiesByLocation.set(

        locationId,

        []

      );

    }

    indexes.activitiesByLocation
      .get(locationId)
      .push(activity);

  });

}


/* ============================================================
   ÍNDICE DE CELEBRAÇÕES E FESTEIROS
============================================================ */

function buildCelebrationsIndex() {

  const groups =
    festancaDataState.raw.festeiros.groups;

  festancaDataState.indexes.celebrations.clear();

  groups.forEach(group => {

    festancaDataState.indexes.celebrations.set(

      group.celebration,

      group

    );

  });

}


/* ============================================================
   ENRIQUECIMENTO DAS ATIVIDADES
============================================================ */

function enrichActivities() {

  const activities =
    festancaDataState.raw.programacao.activities;

  const placesIndex =
    festancaDataState.indexes.placesById;

  const celebrationsIndex =
    festancaDataState.indexes.celebrations;

  festancaDataState.enrichedActivities =
    sortActivities(

      activities.map(activity => {

        const place = activity.locationId
          ? placesIndex.get(activity.locationId) || null
          : null;

        const celebrationData =
          celebrationsIndex.get(
            activity.celebration
          ) || null;

        return {

          ...activity,

          formattedDate:
            formatDateBR(activity.date),

          formattedFullDate:
            formatFullDateBR(activity.date),

          weekday:
            getWeekdayBR(activity.date),

          formattedStartTime:
            formatTimeBR(activity.startTime),

          formattedEndTime:
            formatTimeBR(activity.endTime),

          place,

          celebrationData,

          hasVerifiedLocation:
            Boolean(
              place &&
              (
                place.verificationStatus ===
                  "confirmado-pela-coordenacao" ||
                place.verificationStatus ===
                  "autorizado-para-publicacao"
              )
            ),

          hasGoogleMaps:
            Boolean(
              place &&
              place.googleMaps &&
              (
                place.googleMaps.officialUrl ||
                place.googleMaps.searchUrl
              )
            ),

          googleMapsUrl:
            place &&
            place.googleMaps
              ? (
                  place.googleMaps.officialUrl ||
                  place.googleMaps.searchUrl ||
                  null
                )
              : (
                  activity.location &&
                  activity.location.googleMapsUrl
                    ? activity.location.googleMapsUrl
                    : null
                )

        };

      })

    );

}


/* ============================================================
   VALIDAÇÃO REFERENCIAL
============================================================ */

function validateRelationships() {

  const placesById =
    festancaDataState.indexes.placesById;

  const activities =
    festancaDataState.raw.programacao.activities;

  const invalidReferences = [];

  activities.forEach(activity => {

    if (
      activity.locationId &&
      !placesById.has(activity.locationId)
    ) {

      invalidReferences.push({

        activityId: activity.id,

        locationId: activity.locationId

      });

    }

  });

  if (invalidReferences.length > 0) {

    throw new FestancaDataError(

      "Existem atividades ligadas a locais inexistentes.",

      {
        invalidReferences
      }

    );

  }

  return true;

}


/* ============================================================
   CONSTRUÇÃO DOS ÍNDICES
============================================================ */

function buildIndexes() {

  buildPlacesIndex();

  buildActivitiesIndex();

  buildCelebrationsIndex();

  validateRelationships();

  enrichActivities();

}


/* ============================================================
   EVENTOS DO SISTEMA
============================================================ */

function dispatchDataEvent(eventName, detail = {}) {

  window.dispatchEvent(

    new CustomEvent(

      eventName,

      {
        detail
      }

    )

  );

}


/* ============================================================
   CARREGAMENTO PRINCIPAL
============================================================ */

async function loadAllData(options = {}) {

  const forceReload =
    Boolean(options.forceReload);

  if (
    festancaDataState.loaded &&
    !forceReload
  ) {

    return getSnapshot();

  }

  if (festancaDataState.loading) {

    return new Promise((resolve, reject) => {

      const onReady = event => {

        cleanup();

        resolve(event.detail);

      };

      const onError = event => {

        cleanup();

        reject(event.detail.error);

      };

      const cleanup = () => {

        window.removeEventListener(

          "festanca:data-ready",

          onReady

        );

        window.removeEventListener(

          "festanca:data-error",

          onError

        );

      };

      window.addEventListener(

        "festanca:data-ready",

        onReady,

        {
          once: true
        }

      );

      window.addEventListener(

        "festanca:data-error",

        onError,

        {
          once: true
        }

      );

    });

  }

  festancaDataState.loading = true;

  festancaDataState.error = null;

  dispatchDataEvent(

    "festanca:data-loading",

    {
      message:
        "Carregando Programação Cultural Inteligente..."
    }

  );

  try {

    const [

      programacao,

      festeiros,

      locais,

      locationMap

    ] = await Promise.all([

      fetchJson(
        FESTANCA_DATA_CONFIG.files.programacao
      ),

      fetchJson(
        FESTANCA_DATA_CONFIG.files.festeiros
      ),

      fetchJson(
        FESTANCA_DATA_CONFIG.files.locais
      ),

      fetchJson(
        FESTANCA_DATA_CONFIG.files.locationMap
      )

    ]);


    validateProgramacao(programacao);

    validateFesteiros(festeiros);

    validateLocais(locais);

    validateLocationMap(locationMap);


    festancaDataState.raw.programacao =
      programacao;

    festancaDataState.raw.festeiros =
      festeiros;

    festancaDataState.raw.locais =
      locais;

    festancaDataState.raw.locationMap =
      locationMap;


    buildIndexes();


    festancaDataState.loading = false;

    festancaDataState.loaded = true;

    festancaDataState.loadedAt =
      new Date().toISOString();


    const snapshot =
      getSnapshot();


    dispatchDataEvent(

      "festanca:data-ready",

      snapshot

    );


    console.info(

      "[Festança 2026] Bases carregadas com sucesso.",

      {
        activities:
          festancaDataState.enrichedActivities.length,

        places:
          festancaDataState.raw.locais.places.length,

        groups:
          festancaDataState.raw.festeiros.groups.length,

        loadedAt:
          festancaDataState.loadedAt
      }

    );


    return snapshot;

  } catch (error) {

    festancaDataState.loading = false;

    festancaDataState.loaded = false;

    festancaDataState.error = error;


    dispatchDataEvent(

      "festanca:data-error",

      {
        error,
        message: error.message
      }

    );


    console.error(

      "[Festança 2026] Falha no carregamento dos dados.",

      error

    );


    throw error;

  }

}


/* ============================================================
   CONSULTAS PÚBLICAS
============================================================ */

function getAllActivities() {

  return cloneData(

    festancaDataState.enrichedActivities

  );

}


function getActivityById(activityId) {

  const activity =
    festancaDataState.enrichedActivities.find(

      item => item.id === activityId

    );

  return activity
    ? cloneData(activity)
    : null;

}


function getActivitiesByDate(dateValue) {

  return cloneData(

    festancaDataState.enrichedActivities.filter(

      activity =>
        activity.date === dateValue

    )

  );

}


function getActivitiesByCelebration(celebrationId) {

  return cloneData(

    festancaDataState.enrichedActivities.filter(

      activity =>
        activity.celebration === celebrationId

    )

  );

}


function getActivitiesByCategory(category) {

  const normalizedCategory =
    normalizeText(category);

  return cloneData(

    festancaDataState.enrichedActivities.filter(

      activity =>

        Array.isArray(activity.categories) &&

        activity.categories.some(

          item =>
            normalizeText(item) ===
            normalizedCategory

        )

    )

  );

}


function getActivitiesByPhase(phase) {

  return cloneData(

    festancaDataState.enrichedActivities.filter(

      activity =>
        activity.phase === phase

    )

  );

}


function getActivitiesByLocation(locationId) {

  return cloneData(

    festancaDataState.enrichedActivities.filter(

      activity =>
        activity.locationId === locationId

    )

  );

}


function getPlaceById(locationId) {

  const place =
    festancaDataState.indexes.placesById.get(
      locationId
    );

  return place
    ? cloneData(place)
    : null;

}


function getAllPlaces() {

  return cloneData(

    festancaDataState.raw.locais
      ? festancaDataState.raw.locais.places
      : []

  );

}


function getCelebrationById(celebrationId) {

  const celebration =
    festancaDataState.indexes.celebrations.get(
      celebrationId
    );

  return celebration
    ? cloneData(celebration)
    : null;

}


function getAllCelebrations() {

  return cloneData(

    festancaDataState.raw.festeiros
      ? festancaDataState.raw.festeiros.groups
      : []

  );

}


function getTodayActivities(referenceDate = new Date()) {

  const year =
    referenceDate.getFullYear();

  const month =
    String(
      referenceDate.getMonth() + 1
    ).padStart(2, "0");

  const day =
    String(
      referenceDate.getDate()
    ).padStart(2, "0");

  return getActivitiesByDate(

    `${year}-${month}-${day}`

  );

}


function getUpcomingActivities(
  referenceDate = new Date()
) {

  const referenceTime =
    referenceDate.getTime();

  return cloneData(

    festancaDataState.enrichedActivities.filter(

      activity => {

        const activityDate =
          new Date(

            `${activity.date}T${activity.startTime || "00:00"}:00`

          );

        return (
          !Number.isNaN(activityDate.getTime()) &&
          activityDate.getTime() >= referenceTime
        );

      }

    )

  );

}


function getNextActivity(
  referenceDate = new Date()
) {

  const upcoming =
    getUpcomingActivities(referenceDate);

  return upcoming.length > 0
    ? upcoming[0]
    : null;

}


/* ============================================================
   PESQUISA TEXTUAL
============================================================ */

function searchActivities(searchTerm) {

  const term =
    normalizeText(searchTerm);

  if (!term) {

    return getAllActivities();

  }

  return cloneData(

    festancaDataState.enrichedActivities.filter(

      activity => {

        const searchableContent = [

          activity.id,

          activity.title,

          activity.description,

          activity.phase,

          activity.celebration,

          activity.date,

          activity.startTime,

          activity.location &&
            activity.location.name,

          activity.location &&
            activity.location.street,

          activity.location &&
            activity.location.district,

          activity.location &&
            activity.location.reference,

          activity.place &&
            activity.place.name,

          ...(activity.categories || []),

          ...(activity.participants || [])
            .flatMap(
              participant => [

                participant.role,

                participant.name

              ]
            )

        ]
          .filter(Boolean)
          .join(" ");

        return normalizeText(
          searchableContent
        ).includes(term);

      }

    )

  );

}


/* ============================================================
   FILTRO COMBINADO
============================================================ */

function filterActivities(filters = {}) {

  const {

    celebration = null,

    category = null,

    phase = null,

    date = null,

    locationId = null,

    search = null,

    onlyWithMaps = false

  } = filters;


  let result =
    [...festancaDataState.enrichedActivities];


  if (celebration) {

    result = result.filter(

      activity =>
        activity.celebration === celebration

    );

  }


  if (category) {

    const normalizedCategory =
      normalizeText(category);

    result = result.filter(

      activity =>

        Array.isArray(activity.categories) &&

        activity.categories.some(

          item =>
            normalizeText(item) ===
            normalizedCategory

        )

    );

  }


  if (phase) {

    result = result.filter(

      activity =>
        activity.phase === phase

    );

  }


  if (date) {

    result = result.filter(

      activity =>
        activity.date === date

    );

  }


  if (locationId) {

    result = result.filter(

      activity =>
        activity.locationId === locationId

    );

  }


  if (onlyWithMaps) {

    result = result.filter(

      activity =>
        activity.hasGoogleMaps

    );

  }


  if (search) {

    const matchingIds =
      new Set(

        searchActivities(search).map(
          activity => activity.id
        )

      );

    result = result.filter(

      activity =>
        matchingIds.has(activity.id)

    );

  }


  return cloneData(

    sortActivities(result)

  );

}


/* ============================================================
   ESTATÍSTICAS
============================================================ */

function getStatistics() {

  const activities =
    festancaDataState.enrichedActivities;

  const pendingLocation =
    activities.filter(

      activity =>
        !activity.locationId

    );

  const withMaps =
    activities.filter(

      activity =>
        activity.hasGoogleMaps

    );

  return {

    totalActivities:
      activities.length,

    totalPlaces:
      festancaDataState.raw.locais
        ? festancaDataState.raw.locais.places.length
        : 0,

    totalCelebrations:
      festancaDataState.raw.festeiros
        ? festancaDataState.raw.festeiros.groups.length
        : 0,

    totalDates:
      uniqueValues(
        activities.map(
          activity => activity.date
        )
      ).length,

    activitiesWithMaps:
      withMaps.length,

    activitiesPendingLocation:
      pendingLocation.length,

    pendingLocationIds:
      pendingLocation.map(
        activity => activity.id
      ),

    preparatoryActivities:
      activities.filter(
        activity =>
          activity.phase === "preparatoria"
      ).length,

    mainActivities:
      activities.filter(
        activity =>
          activity.phase === "festa-principal"
      ).length,

    closingActivities:
      activities.filter(
        activity =>
          activity.phase === "encerramento"
      ).length

  };

}


/* ============================================================
   SNAPSHOT DO SISTEMA
============================================================ */

function getSnapshot() {

  return {

    version:
      FESTANCA_DATA_CONFIG.version,

    loaded:
      festancaDataState.loaded,

    loading:
      festancaDataState.loading,

    loadedAt:
      festancaDataState.loadedAt,

    event:
      festancaDataState.raw.programacao
        ? {
            eventId:
              festancaDataState.raw.programacao.eventId,

            eventName:
              festancaDataState.raw.programacao.eventName,

            eventTagline:
              festancaDataState.raw.programacao.eventTagline,

            mainPeriod:
              cloneData(
                festancaDataState.raw.programacao.mainPeriod
              ),

            coordination:
              cloneData(
                festancaDataState.raw.programacao.coordination
              )
          }
        : null,

    activities:
      getAllActivities(),

    places:
      getAllPlaces(),

    celebrations:
      getAllCelebrations(),

    statistics:
      getStatistics()

  };

}


/* ============================================================
   ESTADO DE CARREGAMENTO
============================================================ */

function isLoaded() {

  return festancaDataState.loaded;

}


function isLoading() {

  return festancaDataState.loading;

}


function getLastError() {

  return festancaDataState.error;

}


/* ============================================================
   API PÚBLICA
============================================================ */

Object.assign(

  window.FestancaData,

  {

    config:
      FESTANCA_DATA_CONFIG,

    load:
      loadAllData,

    reload() {

      return loadAllData({

        forceReload: true

      });

    },

    isLoaded,

    isLoading,

    getLastError,

    getSnapshot,

    getStatistics,

    getAllActivities,

    getActivityById,

    getActivitiesByDate,

    getActivitiesByCelebration,

    getActivitiesByCategory,

    getActivitiesByPhase,

    getActivitiesByLocation,

    getTodayActivities,

    getUpcomingActivities,

    getNextActivity,

    getAllPlaces,

    getPlaceById,

    getAllCelebrations,

    getCelebrationById,

    searchActivities,

    filterActivities,

    formatDateBR,

    formatFullDateBR,

    formatTimeBR,

    getWeekdayBR

  }

);


/* ============================================================
   INICIALIZAÇÃO AUTOMÁTICA
============================================================ */

document.addEventListener(

  "DOMContentLoaded",

  () => {

    window.FestancaData
      .load()
      .catch(error => {

        console.error(

          "[Festança 2026] Não foi possível inicializar os dados.",

          error

        );

      });

  },

  {
    once: true
  }

);
