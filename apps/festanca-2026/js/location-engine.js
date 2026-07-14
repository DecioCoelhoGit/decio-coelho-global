"use strict";

/**
 * ============================================================================
 * FESTANÇA DE VILA BELA 2026
 * LOCATION ENGINE — CAMADA DE INTELIGÊNCIA TERRITORIAL
 * ============================================================================
 *
 * Caminho:
 * apps/festanca-2026/js/location-engine.js
 *
 * Responsabilidades:
 * - carregar e interpretar location-schema.json;
 * - classificar locais e atividades;
 * - proteger residências particulares;
 * - reconhecer cortejos e serenatas dinâmicas;
 * - impedir invenção de rotas, endereços e coordenadas;
 * - orientar visitantes com mensagens culturalmente adequadas;
 * - preparar dados para mapas, filtros e roteiros culturais;
 * - fornecer validações ao data-loader.js;
 * - preservar a dinâmica cultural viva da Festança.
 *
 * Referências:
 * - data/location-schema.json
 * - data/route-and-venue-policy.md
 * - data/programacao-2026.json
 * - data/locais-2026.json
 *
 * Projeto:
 * Ecossistema Décio Coelho Global
 * FESTANÇA 2026
 * ============================================================================
 */

(function initializeLocationEngine(globalScope) {
  const ENGINE_NAME = "FestancaLocationEngine";
  const ENGINE_VERSION = "1.0.0";

  const DEFAULT_SCHEMA_URL = "./data/location-schema.json";
  const DEFAULT_CITY = "Vila Bela da Santíssima Trindade";
  const DEFAULT_STATE = "MT";
  const DEFAULT_COUNTRY = "Brasil";

  const PRIVATE_LOCATION_TYPES = new Set([
    "protected-residence",
    "residencia",
    "residência",
    "casa-do-festeiro",
    "casa-da-festeira",
    "casa-do-juiz",
    "casa-da-juiza",
    "casa-da-juíza",
    "casa-da-juiza-e-do-juiz",
    "casa-da-juíza-e-do-juiz",
    "residencia-dos-responsaveis",
    "residência-dos-responsáveis"
  ]);

  const DYNAMIC_LOCATION_TYPES = new Set([
    "dynamic-route",
    "participatory-route",
    "percurso",
    "rota",
    "cortejo",
    "serenata",
    "cultural-reference"
  ]);

  const PUBLIC_LOCATION_TYPES = new Set([
    "public-space",
    "municipal-building",
    "religious-space",
    "religious-external-area",
    "espaco-publico",
    "espaço-público",
    "equipamento-publico",
    "equipamento-público",
    "equipamento-cultural",
    "igreja",
    "paroquia",
    "paróquia",
    "capela",
    "centro-paroquial",
    "prefeitura-municipal"
  ]);

  const RELIGIOUS_LOCATION_TYPES = new Set([
    "religious-space",
    "religious-external-area",
    "igreja",
    "paroquia",
    "paróquia",
    "capela",
    "centro-paroquial",
    "extensao-espaco-religioso",
    "extensão-espaço-religioso"
  ]);

  const TRADITIONAL_GROUP_IDS = new Set([
    "grupo-do-congo",
    "congo",
    "conguinho",
    "chorado",
    "choradinho"
  ]);

  const ACTIVITY_CATEGORY_ALIASES = {
    "reza-cantada": "reza-cantada",
    missa: "missa",
    cortejo: "cortejo",
    serenata: "serenata",
    "apresentacao-cultural": "apresentacao-grupo-tradicional",
    "apresentação-cultural": "apresentacao-grupo-tradicional",
    "apresentacao-grupo-tradicional": "apresentacao-grupo-tradicional",
    "recebimento-das-chaves": "recebimento-das-chaves",
    "solicitacao-chave-cidade": "recebimento-das-chaves",
    "solicitação-chave-cidade": "recebimento-das-chaves"
  };

  const DEFAULT_GUIDANCE = {
    dynamicRoute:
      "Esta atividade possui percurso dinâmico. Consulte a programação e as orientações da organização no dia da realização.",

    participatoryRoute:
      "Esta atividade possui percurso participativo e flexível, desenvolvido conforme a tradição, a condução dos responsáveis e a participação da comunidade.",

    protectedResidence:
      "Visita oficial somente no horário e ato previstos na programação. Consulte a agenda e os canais oficiais de orientação.",

    locationToConfirm:
      "A localização desta atividade ainda está em processo de confirmação oficial.",

    religiousExternalArea:
      "A apresentação cultural ocorre na extensão externa ou entorno imediato do espaço religioso relacionado à celebração.",

    publicLocation:
      "Local público informado na programação oficial.",

    unavailableMap:
      "A rota exata não está disponível para esta atividade.",

    institutionalConfirmation:
      "Informação territorial aguardando confirmação institucional."
  };

  class LocationEngineError extends Error {
    constructor(message, details = null) {
      super(message);
      this.name = "LocationEngineError";
      this.details = details;
    }
  }

  class LocationEngine {
    constructor(options = {}) {
      this.options = {
        schemaUrl: options.schemaUrl || DEFAULT_SCHEMA_URL,
        autoLoad: options.autoLoad !== false,
        strictMode: options.strictMode === true,
        debug: options.debug === true
      };

      this.schema = null;
      this.schemaLoaded = false;
      this.schemaLoadPromise = null;
      this.warnings = [];
      this.errors = [];

      if (this.options.autoLoad) {
        this.loadSchema().catch((error) => {
          this.logError("Falha ao carregar o schema automaticamente.", error);
        });
      }
    }

    /**
     * Carrega location-schema.json.
     */
    async loadSchema(schemaUrl = this.options.schemaUrl) {
      if (this.schemaLoaded && this.schema) {
        return this.schema;
      }

      if (this.schemaLoadPromise) {
        return this.schemaLoadPromise;
      }

      this.schemaLoadPromise = fetch(schemaUrl, {
        headers: {
          Accept: "application/json"
        },
        cache: "no-cache"
      })
        .then(async (response) => {
          if (!response.ok) {
            throw new LocationEngineError(
              `Não foi possível carregar ${schemaUrl}. HTTP ${response.status}.`
            );
          }

          const schema = await response.json();
          const validation = this.validateSchema(schema);

          if (!validation.valid) {
            throw new LocationEngineError(
              "O location-schema.json não possui uma estrutura válida.",
              validation.errors
            );
          }

          this.schema = schema;
          this.schemaLoaded = true;
          this.debug("Schema territorial carregado.", {
            schemaId: schema.schemaId,
            schemaVersion: schema.schemaVersion
          });

          return schema;
        })
        .finally(() => {
          this.schemaLoadPromise = null;
        });

      return this.schemaLoadPromise;
    }

    /**
     * Permite fornecer o schema diretamente.
     */
    setSchema(schema) {
      const validation = this.validateSchema(schema);

      if (!validation.valid) {
        throw new LocationEngineError(
          "Não foi possível registrar o schema territorial.",
          validation.errors
        );
      }

      this.schema = schema;
      this.schemaLoaded = true;

      return this.schema;
    }

    /**
     * Validação estrutural mínima do schema.
     */
    validateSchema(schema) {
      const errors = [];

      if (!schema || typeof schema !== "object") {
        errors.push("Schema inexistente ou inválido.");
      }

      if (!schema?.schemaVersion) {
        errors.push("Campo schemaVersion ausente.");
      }

      if (!schema?.schemaId) {
        errors.push("Campo schemaId ausente.");
      }

      if (!schema?.locationTypes || typeof schema.locationTypes !== "object") {
        errors.push("Objeto locationTypes ausente.");
      }

      if (!schema?.routeModes || typeof schema.routeModes !== "object") {
        errors.push("Objeto routeModes ausente.");
      }

      if (
        !schema?.activityLocationRules ||
        typeof schema.activityLocationRules !== "object"
      ) {
        errors.push("Objeto activityLocationRules ausente.");
      }

      return {
        valid: errors.length === 0,
        errors
      };
    }

    /**
     * Analisa integralmente uma atividade.
     */
    analyzeActivity(activity, locationRecord = null) {
      if (!activity || typeof activity !== "object") {
        throw new LocationEngineError(
          "A atividade fornecida para análise é inválida."
        );
      }

      const activityType = this.detectActivityType(activity);
      const rawLocation = this.resolveRawLocation(activity, locationRecord);
      const locationType = this.detectLocationType(
        activity,
        rawLocation,
        activityType
      );
      const routeMode = this.detectRouteMode(
        activity,
        locationType,
        activityType
      );
      const privacyLevel = this.detectPrivacyLevel(
        rawLocation,
        locationType,
        activityType
      );
      const geolocationLevel = this.detectGeolocationLevel(
        locationType,
        privacyLevel
      );
      const isTraditionalGroupActivity =
        this.isTraditionalGroupActivity(activity);
      const validation = this.validateActivityLocation(
        activity,
        rawLocation,
        locationType,
        activityType,
        routeMode,
        privacyLevel
      );

      const safeLocation = this.sanitizeLocation(rawLocation, {
        locationType,
        privacyLevel,
        activityType
      });

      const mapAccess = this.resolveMapAccess({
        activity,
        location: rawLocation,
        locationType,
        privacyLevel,
        routeMode,
        validation
      });

      const visitorGuidance = this.getVisitorGuidance({
        activity,
        location: rawLocation,
        locationType,
        privacyLevel,
        routeMode,
        activityType,
        isTraditionalGroupActivity
      });

      return {
        activityId: activity.id || null,
        activityType,
        locationId: activity.locationId || locationRecord?.id || null,
        locationType,
        routeMode,
        privacyLevel,
        geolocationLevel,
        isTraditionalGroupActivity,
        isPrivateResidence: privacyLevel === "protected",
        isDynamicRoute: routeMode === "dynamic",
        isParticipatoryRoute: routeMode === "participatory",
        isPublicLocation: privacyLevel === "public",
        isLocationConfirmed: this.isLocationConfirmed(rawLocation),
        safeLocation,
        mapAccess,
        visitorGuidance,
        validation,
        source: {
          activityLocation: activity.location || null,
          inventoryLocation: locationRecord || null
        }
      };
    }

    /**
     * Analisa uma coleção completa de atividades.
     */
    analyzeActivities(activities = [], locations = []) {
      if (!Array.isArray(activities)) {
        throw new LocationEngineError(
          "A coleção de atividades precisa ser um array."
        );
      }

      const locationIndex = this.createLocationIndex(locations);

      const results = activities.map((activity) => {
        const locationRecord = activity.locationId
          ? locationIndex.get(activity.locationId) || null
          : null;

        return this.analyzeActivity(activity, locationRecord);
      });

      return {
        total: results.length,
        valid: results.filter((item) => item.validation.valid).length,
        warnings: results.reduce(
          (total, item) => total + item.validation.warnings.length,
          0
        ),
        errors: results.reduce(
          (total, item) => total + item.validation.errors.length,
          0
        ),
        privateResidences: results.filter((item) => item.isPrivateResidence)
          .length,
        dynamicRoutes: results.filter((item) => item.isDynamicRoute).length,
        participatoryRoutes: results.filter(
          (item) => item.isParticipatoryRoute
        ).length,
        publicLocations: results.filter((item) => item.isPublicLocation)
          .length,
        results
      };
    }

    /**
     * Cria índice locationId → local.
     */
    createLocationIndex(locations = []) {
      const index = new Map();

      if (!Array.isArray(locations)) {
        return index;
      }

      locations.forEach((location) => {
        if (location?.id) {
          index.set(location.id, location);
        }
      });

      return index;
    }

    /**
     * Resolve qual local deve ser utilizado como fonte principal.
     */
    resolveRawLocation(activity, locationRecord = null) {
      if (locationRecord && typeof locationRecord === "object") {
        return {
          ...activity.location,
          ...locationRecord,
          coordinates:
            locationRecord.coordinates ?? activity.location?.coordinates ?? null,
          googleMapsUrl:
            locationRecord.googleMapsUrl ??
            activity.location?.googleMapsUrl ??
            null
        };
      }

      return activity.location || {};
    }

    /**
     * Detecta a natureza da atividade.
     */
    detectActivityType(activity) {
      const categories = Array.isArray(activity.categories)
        ? activity.categories.map(normalizeToken)
        : [];

      for (const category of categories) {
        if (ACTIVITY_CATEGORY_ALIASES[category]) {
          return ACTIVITY_CATEGORY_ALIASES[category];
        }
      }

      const title = normalizeText(activity.title);

      if (title.includes("reza cantada")) {
        return "reza-cantada";
      }

      if (title.includes("missa")) {
        return "missa";
      }

      if (title.includes("serenata")) {
        return "serenata";
      }

      if (
        title.includes("cortejo") ||
        title.includes("buscar autoridades") ||
        title.includes("buscar festeiros")
      ) {
        return "cortejo";
      }

      if (
        title.includes("chave da cidade") ||
        title.includes("chaves da cidade")
      ) {
        return "recebimento-das-chaves";
      }

      if (
        title.includes("dança do congo") ||
        title.includes("grupo do congo") ||
        title.includes("conguinho") ||
        title.includes("chorado") ||
        title.includes("choradinho")
      ) {
        return "apresentacao-grupo-tradicional";
      }

      return "atividade-geral";
    }

    /**
     * Classifica territorialmente o local.
     */
    detectLocationType(activity, location, activityType) {
      const declaredType = normalizeToken(
        location?.locationType || location?.type || location?.venueType
      );

      if (declaredType) {
        const schemaType = this.resolveSchemaLocationType(declaredType);

        if (schemaType) {
          return schemaType;
        }
      }

      if (activityType === "reza-cantada") {
        return "protected-residence";
      }

      if (activityType === "cortejo") {
        return "dynamic-route";
      }

      if (activityType === "serenata") {
        return "participatory-route";
      }

      if (activityType === "recebimento-das-chaves") {
        return "municipal-building";
      }

      if (activityType === "missa") {
        return "religious-space";
      }

      if (
        activityType === "apresentacao-grupo-tradicional" &&
        this.isReligiousContext(location)
      ) {
        return "religious-external-area";
      }

      const locationText = normalizeText(
        [
          location?.name,
          location?.street,
          location?.district,
          location?.reference
        ].filter(Boolean).join(" ")
      );

      if (
        locationText.includes("casa d") ||
        locationText.includes("residencia") ||
        locationText.includes("residência")
      ) {
        return "protected-residence";
      }

      if (
        locationText.includes("prefeitura") ||
        locationText.includes("camara municipal") ||
        locationText.includes("câmara municipal") ||
        locationText.includes("ginasio") ||
        locationText.includes("ginásio")
      ) {
        return "municipal-building";
      }

      if (
        locationText.includes("igreja") ||
        locationText.includes("paroquia") ||
        locationText.includes("paróquia") ||
        locationText.includes("capela") ||
        locationText.includes("centro paroquial")
      ) {
        return "religious-space";
      }

      if (
        locationText.includes("percurso") ||
        locationText.includes("ruas de vila bela") ||
        locationText.includes("trajeto")
      ) {
        return "dynamic-route";
      }

      if (
        location?.verificationStatus === "local-a-confirmar" ||
        !location?.name ||
        normalizeText(location.name).includes("local a confirmar")
      ) {
        return "to-confirm";
      }

      return "cultural-reference";
    }

    resolveSchemaLocationType(type) {
      if (this.schema?.locationTypes?.[type]) {
        return type;
      }

      if (PRIVATE_LOCATION_TYPES.has(type)) {
        return "protected-residence";
      }

      if (DYNAMIC_LOCATION_TYPES.has(type)) {
        if (type.includes("particip")) {
          return "participatory-route";
        }

        return "dynamic-route";
      }

      if (RELIGIOUS_LOCATION_TYPES.has(type)) {
        if (
          type.includes("external") ||
          type.includes("extern") ||
          type.includes("extens")
        ) {
          return "religious-external-area";
        }

        return "religious-space";
      }

      if (PUBLIC_LOCATION_TYPES.has(type)) {
        if (
          type.includes("municip") ||
          type.includes("equipamento") ||
          type.includes("prefeitura")
        ) {
          return "municipal-building";
        }

        return "public-space";
      }

      if (
        type === "local-a-confirmar" ||
        type === "to-confirm" ||
        type === "unknown"
      ) {
        return "to-confirm";
      }

      return null;
    }

    /**
     * Detecta o modelo de rota.
     */
    detectRouteMode(activity, locationType, activityType) {
      const declaredMode = normalizeToken(
        activity?.route?.mode ||
          activity?.routeMode ||
          activity?.location?.routeMode
      );

      if (
        declaredMode &&
        (this.schema?.routeModes?.[declaredMode] ||
          ["fixed", "dynamic", "participatory", "not-applicable", "to-confirm"].includes(
            declaredMode
          ))
      ) {
        return declaredMode;
      }

      if (activityType === "serenata") {
        return "participatory";
      }

      if (activityType === "cortejo") {
        return "dynamic";
      }

      if (locationType === "participatory-route") {
        return "participatory";
      }

      if (locationType === "dynamic-route") {
        return "dynamic";
      }

      if (locationType === "to-confirm" && activity?.route?.isItinerant) {
        return "to-confirm";
      }

      if (activity?.route?.isItinerant) {
        return "dynamic";
      }

      return "not-applicable";
    }

    /**
     * Determina a política de privacidade aplicável.
     */
    detectPrivacyLevel(location, locationType, activityType) {
      const declaredPrivacy = normalizeToken(
        location?.privacyLevel || location?.privacy
      );

      if (
        ["public", "contextual", "protected", "unknown"].includes(
          declaredPrivacy
        )
      ) {
        return declaredPrivacy;
      }

      const schemaPrivacy =
        this.schema?.locationTypes?.[locationType]?.privacyLevel;

      if (schemaPrivacy) {
        return schemaPrivacy;
      }

      if (
        locationType === "protected-residence" ||
        activityType === "reza-cantada"
      ) {
        return "protected";
      }

      if (
        locationType === "dynamic-route" ||
        locationType === "participatory-route" ||
        locationType === "cultural-reference"
      ) {
        return "contextual";
      }

      if (
        locationType === "public-space" ||
        locationType === "municipal-building" ||
        locationType === "religious-space" ||
        locationType === "religious-external-area"
      ) {
        return "public";
      }

      return "unknown";
    }

    detectGeolocationLevel(locationType, privacyLevel) {
      if (privacyLevel === "protected") {
        return "level-3-protected-residence";
      }

      if (
        privacyLevel === "contextual" ||
        locationType === "dynamic-route" ||
        locationType === "participatory-route"
      ) {
        return "level-2-cultural-reference";
      }

      if (privacyLevel === "public") {
        return "level-1-public-confirmed";
      }

      return null;
    }

    /**
     * Remove informações sensíveis antes da exibição.
     */
    sanitizeLocation(location, context = {}) {
      const source =
        location && typeof location === "object" ? structuredCloneSafe(location) : {};

      const privacyLevel = context.privacyLevel || "unknown";
      const locationType = context.locationType || "to-confirm";

      const result = {
        type: locationType,
        name: source.name || this.getLocationFallbackName(locationType),
        city: source.city || DEFAULT_CITY,
        state: source.state || DEFAULT_STATE,
        country: source.country || DEFAULT_COUNTRY,
        district: source.district || null,
        street: source.street || null,
        reference: source.reference || null,
        coordinates: source.coordinates || null,
        googleMapsUrl: source.googleMapsUrl || null,
        verificationStatus: source.verificationStatus || "nao-informado"
      };

      if (privacyLevel === "protected") {
        result.street = null;
        result.district = null;
        result.reference = null;
        result.coordinates = null;
        result.googleMapsUrl = null;
        result.verificationStatus = "residencia-protegida";
      }

      if (
        privacyLevel === "contextual" ||
        locationType === "dynamic-route" ||
        locationType === "participatory-route"
      ) {
        result.street = null;
        result.coordinates = null;
        result.googleMapsUrl = null;
      }

      if (locationType === "to-confirm") {
        result.street = null;
        result.district = null;
        result.reference = null;
        result.coordinates = null;
        result.googleMapsUrl = null;
      }

      return result;
    }

    /**
     * Decide se um botão de mapa pode ser apresentado.
     */
    resolveMapAccess(context) {
      const {
        location,
        locationType,
        privacyLevel,
        routeMode,
        validation
      } = context;

      if (privacyLevel === "protected") {
        return {
          allowed: false,
          mode: "blocked-private-residence",
          url: null,
          label: "Local residencial protegido",
          reason:
            "A localização exata de residências particulares não deve ser publicada."
        };
      }

      if (routeMode === "dynamic" || routeMode === "participatory") {
        return {
          allowed: false,
          mode: "dynamic-cultural-route",
          url: null,
          label: "Percurso definido durante a atividade",
          reason:
            "O trajeto pode variar conforme a tradição, o momento e a participação comunitária."
        };
      }

      if (locationType === "to-confirm") {
        return {
          allowed: false,
          mode: "pending-confirmation",
          url: null,
          label: "Localização a confirmar",
          reason: DEFAULT_GUIDANCE.locationToConfirm
        };
      }

      if (!validation.valid) {
        return {
          allowed: false,
          mode: "validation-blocked",
          url: null,
          label: "Mapa indisponível",
          reason: "A localização possui inconsistências que exigem validação."
        };
      }

      const directUrl = sanitizeMapUrl(location?.googleMapsUrl);

      if (directUrl) {
        return {
          allowed: true,
          mode: "verified-or-documented-url",
          url: directUrl,
          label: "Abrir no Google Maps",
          reason: null
        };
      }

      const queryUrl = this.createGoogleMapsSearchUrl(location);

      if (queryUrl && privacyLevel === "public") {
        return {
          allowed: true,
          mode: "search-query",
          url: queryUrl,
          label: "Pesquisar no Google Maps",
          reason: null
        };
      }

      return {
        allowed: false,
        mode: "unavailable",
        url: null,
        label: "Mapa indisponível",
        reason: DEFAULT_GUIDANCE.unavailableMap
      };
    }

    /**
     * Produz uma pesquisa segura do Google Maps apenas para locais públicos.
     */
    createGoogleMapsSearchUrl(location) {
      if (!location || typeof location !== "object") {
        return null;
      }

      const query = [
        location.name,
        location.street,
        location.district,
        location.city || DEFAULT_CITY,
        location.state || DEFAULT_STATE,
        location.country || DEFAULT_COUNTRY
      ]
        .filter(Boolean)
        .join(", ")
        .trim();

      if (!query) {
        return null;
      }

      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        query
      )}`;
    }

    /**
     * Mensagem oficial apresentada ao visitante.
     */
    getVisitorGuidance(context) {
      const {
        activity,
        locationType,
        privacyLevel,
        routeMode,
        activityType,
        isTraditionalGroupActivity
      } = context;

      const schemaGuidance = this.schema?.visitorGuidance || {};

      if (privacyLevel === "protected") {
        return {
          code: "protected-residence",
          icon: "🏠",
          title: "Residência de festeiro",
          message:
            schemaGuidance.protectedResidence ||
            DEFAULT_GUIDANCE.protectedResidence
        };
      }

      if (routeMode === "participatory") {
        return {
          code: "participatory-route",
          icon: "🎶",
          title: "Percurso participativo",
          message:
            schemaGuidance.participatoryRoute ||
            DEFAULT_GUIDANCE.participatoryRoute
        };
      }

      if (routeMode === "dynamic") {
        return {
          code: "dynamic-route",
          icon: "🥁",
          title: "Percurso cultural dinâmico",
          message:
            schemaGuidance.dynamicRoute || DEFAULT_GUIDANCE.dynamicRoute
        };
      }

      if (
        locationType === "religious-external-area" ||
        (isTraditionalGroupActivity &&
          activityType === "apresentacao-grupo-tradicional")
      ) {
        return {
          code: "religious-external-area",
          icon: "⛪",
          title: "Apresentação no entorno religioso",
          message:
            schemaGuidance.religiousExternalArea ||
            DEFAULT_GUIDANCE.religiousExternalArea
        };
      }

      if (locationType === "to-confirm") {
        return {
          code: "location-to-confirm",
          icon: "📍",
          title: "Localização a confirmar",
          message:
            schemaGuidance.locationToConfirm ||
            DEFAULT_GUIDANCE.locationToConfirm
        };
      }

      if (activityType === "recebimento-das-chaves") {
        return {
          code: "municipal-ceremony",
          icon: "🔑",
          title: "Cerimônia institucional",
          message:
            "O recebimento simbólico das Chaves da Cidade ocorre na Prefeitura Municipal, com participação institucional conforme a programação oficial."
        };
      }

      return {
        code: "public-location",
        icon: "📍",
        title: "Local da atividade",
        message: DEFAULT_GUIDANCE.publicLocation
      };
    }

    /**
     * Executa as validações normativas.
     */
    validateActivityLocation(
      activity,
      location,
      locationType,
      activityType,
      routeMode,
      privacyLevel
    ) {
      const errors = [];
      const warnings = [];
      const rules =
        this.schema?.activityLocationRules?.[activityType] || null;

      if (!activity.id) {
        warnings.push({
          code: "activity-id-missing",
          message: "A atividade não possui identificador."
        });
      }

      if (!location || typeof location !== "object") {
        warnings.push({
          code: "location-missing",
          message: "A atividade não possui objeto de localização."
        });
      }

      if (rules?.allowedLocationTypes?.length) {
        const isAllowed = rules.allowedLocationTypes.includes(locationType);

        if (!isAllowed) {
          warnings.push({
            code: "location-type-not-recommended",
            message: `O tipo territorial "${locationType}" não é o padrão recomendado para atividades "${activityType}".`,
            expected: rules.allowedLocationTypes
          });
        }
      }

      if (
        activityType === "reza-cantada" &&
        locationType !== "protected-residence"
      ) {
        errors.push({
          code: "reza-cantada-not-in-residence",
          message:
            "Toda Reza Cantada deve ser classificada como realizada em residência de festeiro ou responsável."
        });
      }

      if (
        activityType === "missa" &&
        !["religious-space", "religious-external-area"].includes(locationType)
      ) {
        warnings.push({
          code: "missa-outside-religious-space",
          message:
            "Missas devem ocorrer em igreja, paróquia, capela ou espaço religioso oficialmente informado."
        });
      }

      if (
        activityType === "recebimento-das-chaves" &&
        locationType !== "municipal-building"
      ) {
        errors.push({
          code: "city-keys-wrong-location",
          message:
            "O recebimento simbólico das Chaves da Cidade deve estar vinculado à Prefeitura Municipal."
        });
      }

      if (
        activityType === "cortejo" &&
        !["dynamic", "participatory", "to-confirm"].includes(routeMode)
      ) {
        warnings.push({
          code: "cortejo-fixed-route",
          message:
            "Cortejos não devem ser tratados automaticamente como rotas fixas."
        });
      }

      if (
        activityType === "serenata" &&
        routeMode !== "participatory"
      ) {
        warnings.push({
          code: "serenata-not-participatory",
          message:
            "Serenatas devem admitir percurso participativo e sugestões da comunidade."
        });
      }

      if (
        privacyLevel === "protected" &&
        (hasCoordinates(location?.coordinates) || location?.googleMapsUrl)
      ) {
        errors.push({
          code: "private-location-exposed",
          message:
            "Residências protegidas não podem publicar coordenadas nem link direto de mapa."
        });
      }

      if (
        privacyLevel === "protected" &&
        (location?.street || location?.reference || location?.district)
      ) {
        warnings.push({
          code: "private-address-present",
          message:
            "O arquivo de origem contém elementos de endereço residencial. Eles serão removidos na apresentação pública."
        });
      }

      if (
        routeMode === "dynamic" &&
        Array.isArray(activity?.route?.coordinates) &&
        activity.route.coordinates.length > 0
      ) {
        warnings.push({
          code: "dynamic-route-has-coordinates",
          message:
            "Uma rota dinâmica possui coordenadas cadastradas. Confirme se são apenas referências e não um trajeto obrigatório."
        });
      }

      if (
        locationType === "to-confirm" &&
        (location?.coordinates || location?.googleMapsUrl)
      ) {
        warnings.push({
          code: "pending-location-with-map",
          message:
            "Uma localização a confirmar não deve publicar mapa definitivo."
        });
      }

      if (
        rules?.requiresConfirmedVenue &&
        !this.isLocationConfirmed(location)
      ) {
        warnings.push({
          code: "confirmed-venue-required",
          message:
            "Esta atividade requer confirmação oficial do espaço de realização."
        });
      }

      return {
        valid: errors.length === 0,
        errors,
        warnings
      };
    }

    /**
     * Reconhece participações do Congo, Conguinho, Chorado e Choradinho.
     */
    isTraditionalGroupActivity(activity) {
      const searchableText = normalizeText(
        [
          activity.title,
          activity.description,
          activity.celebration,
          ...(Array.isArray(activity.categories) ? activity.categories : []),
          ...(Array.isArray(activity.participants)
            ? activity.participants.flatMap((participant) => [
                participant?.name,
                participant?.role
              ])
            : [])
        ]
          .filter(Boolean)
          .join(" ")
      );

      return Array.from(TRADITIONAL_GROUP_IDS).some((groupId) =>
        searchableText.includes(normalizeText(groupId.replaceAll("-", " ")))
      );
    }

    /**
     * Detecta vínculo com igreja, paróquia ou celebração religiosa.
     */
    isReligiousContext(location) {
      const text = normalizeText(
        [
          location?.name,
          location?.reference,
          location?.street,
          location?.district
        ]
          .filter(Boolean)
          .join(" ")
      );

      return [
        "igreja",
        "paroquia",
        "paróquia",
        "capela",
        "centro paroquial",
        "espaco religioso",
        "espaço religioso"
      ].some((term) => text.includes(normalizeText(term)));
    }

    isLocationConfirmed(location) {
      if (!location || typeof location !== "object") {
        return false;
      }

      const status = normalizeToken(location.verificationStatus);

      const pendingStatuses = new Set([
        "",
        "local-a-confirmar",
        "endereco-a-confirmar",
        "endereço-a-confirmar",
        "rota-a-confirmar",
        "nao-informado",
        "não-informado",
        "pendente",
        "unknown",
        "to-confirm"
      ]);

      if (pendingStatuses.has(status)) {
        return false;
      }

      return Boolean(location.name);
    }

    getLocationFallbackName(locationType) {
      const labels = {
        "protected-residence": "Residência do festeiro",
        "dynamic-route": "Percurso cultural dinâmico",
        "participatory-route": "Percurso cultural participativo",
        "religious-space": "Espaço religioso",
        "religious-external-area": "Entorno do espaço religioso",
        "municipal-building": "Equipamento público municipal",
        "public-space": "Espaço público",
        "cultural-reference": "Referência territorial cultural",
        "to-confirm": "Localização a confirmar"
      };

      return labels[locationType] || "Local da atividade";
    }

    /**
     * Enriquece a atividade sem destruir os dados originais.
     */
    enrichActivity(activity, locationRecord = null) {
      const analysis = this.analyzeActivity(activity, locationRecord);

      return {
        ...activity,
        territorialIntelligence: {
          engine: ENGINE_NAME,
          engineVersion: ENGINE_VERSION,
          activityType: analysis.activityType,
          locationType: analysis.locationType,
          routeMode: analysis.routeMode,
          privacyLevel: analysis.privacyLevel,
          geolocationLevel: analysis.geolocationLevel,
          mapAccess: analysis.mapAccess,
          visitorGuidance: analysis.visitorGuidance,
          validation: analysis.validation
        },
        publicLocation: analysis.safeLocation
      };
    }

    /**
     * Enriquece toda a programação.
     */
    enrichActivities(activities = [], locations = []) {
      const locationIndex = this.createLocationIndex(locations);

      return activities.map((activity) => {
        const locationRecord = activity.locationId
          ? locationIndex.get(activity.locationId) || null
          : null;

        return this.enrichActivity(activity, locationRecord);
      });
    }

    /**
     * Retorna uma versão resumida para cards.
     */
    createLocationViewModel(activity, locationRecord = null) {
      const analysis = this.analyzeActivity(activity, locationRecord);
      const location = analysis.safeLocation;

      return {
        activityId: analysis.activityId,
        locationId: analysis.locationId,
        icon: analysis.visitorGuidance.icon,
        title: location.name,
        subtitle: this.formatPublicLocation(location, analysis.privacyLevel),
        guidanceTitle: analysis.visitorGuidance.title,
        guidanceMessage: analysis.visitorGuidance.message,
        mapEnabled: analysis.mapAccess.allowed,
        mapUrl: analysis.mapAccess.url,
        mapLabel: analysis.mapAccess.label,
        routeMode: analysis.routeMode,
        locationType: analysis.locationType,
        privacyLevel: analysis.privacyLevel,
        badges: this.createLocationBadges(analysis)
      };
    }

    createLocationBadges(analysis) {
      const badges = [];

      if (analysis.isPrivateResidence) {
        badges.push({
          code: "protected",
          label: "Residência protegida"
        });
      }

      if (analysis.isDynamicRoute) {
        badges.push({
          code: "dynamic",
          label: "Percurso dinâmico"
        });
      }

      if (analysis.isParticipatoryRoute) {
        badges.push({
          code: "participatory",
          label: "Percurso participativo"
        });
      }

      if (analysis.locationType === "religious-external-area") {
        badges.push({
          code: "religious-external-area",
          label: "Entorno do espaço religioso"
        });
      }

      if (!analysis.isLocationConfirmed) {
        badges.push({
          code: "pending",
          label: "A confirmar"
        });
      }

      return badges;
    }

    formatPublicLocation(location, privacyLevel) {
      if (privacyLevel === "protected") {
        return "Vila Bela da Santíssima Trindade — MT";
      }

      const parts = [
        location.street,
        location.district,
        location.city,
        location.state
      ].filter(Boolean);

      return [...new Set(parts)].join(" — ");
    }

    /**
     * Relatório técnico para conferência.
     */
    createValidationReport(activities = [], locations = []) {
      const analysis = this.analyzeActivities(activities, locations);

      return {
        engine: ENGINE_NAME,
        engineVersion: ENGINE_VERSION,
        generatedAt: new Date().toISOString(),
        summary: {
          totalActivities: analysis.total,
          validActivities: analysis.valid,
          warnings: analysis.warnings,
          errors: analysis.errors,
          privateResidences: analysis.privateResidences,
          dynamicRoutes: analysis.dynamicRoutes,
          participatoryRoutes: analysis.participatoryRoutes,
          publicLocations: analysis.publicLocations
        },
        issues: analysis.results
          .filter(
            (result) =>
              result.validation.errors.length > 0 ||
              result.validation.warnings.length > 0
          )
          .map((result) => ({
            activityId: result.activityId,
            activityType: result.activityType,
            locationType: result.locationType,
            privacyLevel: result.privacyLevel,
            errors: result.validation.errors,
            warnings: result.validation.warnings
          }))
      };
    }

    /**
     * Diagnóstico no console.
     */
    printValidationReport(activities = [], locations = []) {
      const report = this.createValidationReport(activities, locations);

      console.group(
        `%c${ENGINE_NAME} ${ENGINE_VERSION}`,
        "font-weight:bold;color:#f5c518;"
      );

      console.table(report.summary);

      if (report.issues.length) {
        console.warn("Atividades com observações territoriais:", report.issues);
      } else {
        console.info("Nenhuma inconsistência territorial encontrada.");
      }

      console.groupEnd();

      return report;
    }

    getEngineInfo() {
      return {
        name: ENGINE_NAME,
        version: ENGINE_VERSION,
        schemaLoaded: this.schemaLoaded,
        schemaId: this.schema?.schemaId || null,
        schemaVersion: this.schema?.schemaVersion || null
      };
    }

    debug(message, details = null) {
      if (!this.options.debug) {
        return;
      }

      console.info(`[${ENGINE_NAME}] ${message}`, details || "");
    }

    logError(message, error = null) {
      this.errors.push({
        message,
        error,
        timestamp: new Date().toISOString()
      });

      console.error(`[${ENGINE_NAME}] ${message}`, error || "");
    }
  }

  /**
   * Utilitários internos.
   */

  function normalizeText(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function normalizeToken(value) {
    return normalizeText(value)
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function hasCoordinates(coordinates) {
    if (!coordinates) {
      return false;
    }

    if (Array.isArray(coordinates)) {
      return coordinates.length >= 2;
    }

    if (typeof coordinates === "object") {
      return (
        Number.isFinite(Number(coordinates.latitude ?? coordinates.lat)) &&
        Number.isFinite(Number(coordinates.longitude ?? coordinates.lng))
      );
    }

    return false;
  }

  function sanitizeMapUrl(url) {
    if (!url || typeof url !== "string") {
      return null;
    }

    try {
      const parsedUrl = new URL(url);

      const allowedHosts = new Set([
        "www.google.com",
        "google.com",
        "maps.google.com",
        "www.google.com.br",
        "google.com.br",
        "maps.app.goo.gl"
      ]);

      if (!allowedHosts.has(parsedUrl.hostname)) {
        return null;
      }

      return parsedUrl.href;
    } catch {
      return null;
    }
  }

  function structuredCloneSafe(value) {
    if (typeof structuredClone === "function") {
      return structuredClone(value);
    }

    return JSON.parse(JSON.stringify(value));
  }

  /**
   * Instância global padrão.
   */
  const defaultEngine = new LocationEngine({
    autoLoad: true,
    strictMode: false,
    debug: false
  });

  const publicApi = {
    name: ENGINE_NAME,
    version: ENGINE_VERSION,
    LocationEngine,
    LocationEngineError,
    engine: defaultEngine,

    loadSchema: (...args) => defaultEngine.loadSchema(...args),
    setSchema: (...args) => defaultEngine.setSchema(...args),
    analyzeActivity: (...args) => defaultEngine.analyzeActivity(...args),
    analyzeActivities: (...args) => defaultEngine.analyzeActivities(...args),
    enrichActivity: (...args) => defaultEngine.enrichActivity(...args),
    enrichActivities: (...args) => defaultEngine.enrichActivities(...args),
    createLocationViewModel: (...args) =>
      defaultEngine.createLocationViewModel(...args),
    createValidationReport: (...args) =>
      defaultEngine.createValidationReport(...args),
    printValidationReport: (...args) =>
      defaultEngine.printValidationReport(...args),
    getEngineInfo: () => defaultEngine.getEngineInfo()
  };

  globalScope.FestancaLocationEngine = publicApi;

  globalScope.dispatchEvent(
    new CustomEvent("festanca:location-engine-ready", {
      detail: {
        name: ENGINE_NAME,
        version: ENGINE_VERSION,
        api: publicApi
      }
    })
  );
})(window);
