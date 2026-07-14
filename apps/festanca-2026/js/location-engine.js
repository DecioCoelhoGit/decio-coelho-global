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
         
