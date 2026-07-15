"use strict";

/**
 * ============================================================================
 * FESTANÇA DE VILA BELA 2026
 * INTERFACE DE CURADORIA HISTÓRICA
 * ============================================================================
 *
 * Arquivo:
 * apps/festanca-2026/js/curation-ui.js
 *
 * Finalidade:
 * Transformar o motor de Curadoria Histórica em uma interface visual,
 * acessível e operacional dentro da Landing Page da FESTANÇA 2026.
 *
 * Dependências esperadas:
 * - location-engine.js
 * - data-loader.js
 * - curation-engine.js
 *
 * Ordem recomendada no index.html:
 *
 * <script src="./js/location-engine.js"></script>
 * <script src="./js/data-loader.js"></script>
 * <script src="./js/curation-engine.js"></script>
 * <script src="./js/curation-ui.js"></script>
 * <script src="./js/script.js"></script>
 *
 * Princípios:
 * - acessibilidade;
 * - alto contraste;
 * - operação simplificada em celulares;
 * - preservação da memória;
 * - proteção de dados pessoais;
 * - curadoria responsável;
 * - funcionamento sem dependência do console.
 *
 * Projeto:
 * Ecossistema Décio Coelho Global
 *
 * Versão:
 * 1.0.0
 * ============================================================================
 */

(function FestancaCurationUIModule(global, document) {
  const MODULE_NAME = "FestancaCurationUI";
  const MODULE_VERSION = "1.0.0";

  /**
   * --------------------------------------------------------------------------
   * CONFIGURAÇÃO CENTRAL
   * --------------------------------------------------------------------------
   */

  const CONFIG = Object.freeze({
    rootId: "festanca-curation-ui-root",
    styleId: "festanca-curation-ui-styles",
    launcherId: "festanca-curation-ui-launcher",
    panelId: "festanca-curation-ui-panel",
    overlayId: "festanca-curation-ui-overlay",
    notificationRegionId: "festanca-curation-ui-notifications",

    engineGlobalName: "FestancaCurationEngine",
    dataBridgeGlobalName: "FestancaDataLocationBridge",

    storageKeys: Object.freeze({
      preferences: "festanca-2026-curation-ui-preferences",
      draft: "festanca-2026-curation-ui-draft",
      lastView: "festanca-2026-curation-ui-last-view"
    }),

    views: Object.freeze({
      dashboard: "dashboard",
      records: "records",
      create: "create",
      details: "details",
      validation: "validation",
      export: "export"
    }),

    defaultView: "dashboard",
    mobileBreakpoint: 760,
    notificationDuration: 5000,
    engineWaitTimeout: 15000,
    engineWaitInterval: 250,

    labels: Object.freeze({
      title: "Curadoria Histórica",
      subtitle: "Memória Viva da FESTANÇA 2026",
      openPanel: "Abrir Curadoria Histórica",
      closePanel: "Fechar Curadoria Histórica",
      loading: "Carregando Curadoria Histórica",
      unavailable: "Motor de Curadoria indisponível"
    })
  });

  /**
   * --------------------------------------------------------------------------
   * ESTADO INTERNO
   * --------------------------------------------------------------------------
   */

  const state = {
    initialized: false,
    initializing: false,
    panelOpen: false,
    engineReady: false,
    dataReady: false,
    currentView: CONFIG.defaultView,
    previousView: null,
    selectedRecordId: null,
    selectedObservationId: null,
    records: [],
    observations: [],
    activities: [],
    statistics: null,
    filters: {
      query: "",
      status: "todos",
      stage: "todas",
      date: "",
      sourceType: "todos"
    },
    preferences: {
      highContrast: true,
      largeText: false,
      reducedMotion: false,
      confirmBeforeClose: true
    },
    busy: false,
    lastError: null,
    lastUpdated: null
  };

  /**
   * --------------------------------------------------------------------------
   * REFERÊNCIAS DE ELEMENTOS
   * --------------------------------------------------------------------------
   */

  const elements = {
    root: null,
    launcher: null,
    overlay: null,
    panel: null,
    header: null,
    navigation: null,
    content: null,
    status: null,
    notifications: null,
    closeButton: null,
    backButton: null,
    title: null
  };

  /**
   * --------------------------------------------------------------------------
   * FUNÇÕES UTILITÁRIAS
   * --------------------------------------------------------------------------
   */

  function isObject(value) {
    return (
      value !== null &&
      typeof value === "object" &&
      !Array.isArray(value)
    );
  }

  function asArray(value) {
    return Array.isArray(value) ? value : [];
  }

  function asText(value, fallback = "") {
    if (value === null || value === undefined) {
      return fallback;
    }

    const text = String(value).trim();
    return text || fallback;
  }

  function normalizeText(value) {
    return asText(value)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function escapeHTML(value) {
    return asText(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function generateRuntimeId(prefix = "curation") {
    const randomPart = Math.random().toString(36).slice(2, 9);
    const timePart = Date.now().toString(36);

    return `${prefix}-${timePart}-${randomPart}`;
  }

  function formatDate(dateValue, options = {}) {
    if (!dateValue) {
      return "Data não informada";
    }

    const rawValue = String(dateValue);
    const normalizedValue = /^\d{4}-\d{2}-\d{2}$/.test(rawValue)
      ? `${rawValue}T12:00:00`
      : rawValue;

    const date = new Date(normalizedValue);

    if (Number.isNaN(date.getTime())) {
      return rawValue;
    }

    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      ...options
    }).format(date);
  }

  function formatDateTime(dateValue) {
    if (!dateValue) {
      return "Não informado";
    }

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
      return String(dateValue);
    }

    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
  }

  function capitalize(value) {
    const text = asText(value);

    if (!text) {
      return "";
    }

    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  function humanizeSlug(value) {
    return asText(value, "Não informado")
      .replace(/[-_]+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  }

  function query(selector, parent = document) {
    return parent ? parent.querySelector(selector) : null;
  }

  function queryAll(selector, parent = document) {
    return parent ? Array.from(parent.querySelectorAll(selector)) : [];
  }

  function createElement(tagName, attributes = {}, content = null) {
    const element = document.createElement(tagName);

    Object.entries(attributes).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        return;
      }

      if (key === "className") {
        element.className = value;
        return;
      }

      if (key === "dataset" && isObject(value)) {
        Object.entries(value).forEach(([dataKey, dataValue]) => {
          element.dataset[dataKey] = String(dataValue);
        });
        return;
      }

      if (key === "textContent") {
        element.textContent = String(value);
        return;
      }

      if (key in element && key !== "style") {
        try {
          element[key] = value;
          return;
        } catch (error) {
          // Prossegue para setAttribute.
        }
      }

      element.setAttribute(key, String(value));
    });

    if (content instanceof Node) {
      element.appendChild(content);
    } else if (Array.isArray(content)) {
      content.forEach((child) => {
        if (child instanceof Node) {
          element.appendChild(child);
        }
      });
    } else if (content !== null && content !== undefined) {
      element.textContent = String(content);
    }

    return element;
  }

  function safelyParseJSON(value, fallback = null) {
    try {
      return JSON.parse(value);
    } catch (error) {
      return fallback;
    }
  }

  function readStorage(key, fallback = null) {
    try {
      const storedValue = global.localStorage.getItem(key);

      if (storedValue === null) {
        return fallback;
      }

      return safelyParseJSON(storedValue, fallback);
    } catch (error) {
      return fallback;
    }
  }

  function writeStorage(key, value) {
    try {
      global.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn(`[${MODULE_NAME}] Falha ao gravar armazenamento local.`, error);
      return false;
    }
  }

  function removeStorage(key) {
    try {
      global.localStorage.removeItem(key);
      return true;
    } catch (error) {
      return false;
    }
  }

  function getEngine() {
    const engine = global[CONFIG.engineGlobalName];

    return engine && typeof engine === "object"
      ? engine
      : null;
  }

  function getDataBridge() {
    const bridge = global[CONFIG.dataBridgeGlobalName];

    return bridge && typeof bridge === "object"
      ? bridge
      : null;
  }

  function callFirstAvailable(target, methodNames, ...args) {
    if (!target) {
      return undefined;
    }

    for (const methodName of methodNames) {
      if (typeof target[methodName] === "function") {
        return target[methodName](...args);
      }
    }

    return undefined;
  }

  async function resolvePossiblePromise(value) {
    if (value && typeof value.then === "function") {
      return value;
    }

    return Promise.resolve(value);
  }

  function wait(milliseconds) {
    return new Promise((resolve) => {
      global.setTimeout(resolve, milliseconds);
    });
  }

  async function waitForDependency(getter, timeout = CONFIG.engineWaitTimeout) {
    const startedAt = Date.now();

    while (Date.now() - startedAt < timeout) {
      const dependency = getter();

      if (dependency) {
        return dependency;
      }

      await wait(CONFIG.engineWaitInterval);
    }

    return null;
  }

  /**
   * --------------------------------------------------------------------------
   * PREFERÊNCIAS E ACESSIBILIDADE
   * --------------------------------------------------------------------------
   */

  function detectAccessibilityPreferences() {
    const reducedMotionQuery = global.matchMedia
      ? global.matchMedia("(prefers-reduced-motion: reduce)")
      : null;

    if (reducedMotionQuery && reducedMotionQuery.matches) {
      state.preferences.reducedMotion = true;
    }

    const savedPreferences = readStorage(
      CONFIG.storageKeys.preferences,
      null
    );

    if (isObject(savedPreferences)) {
      state.preferences = {
        ...state.preferences,
        ...savedPreferences
      };
    }
  }

  function savePreferences() {
    writeStorage(CONFIG.storageKeys.preferences, state.preferences);
  }

  function applyAccessibilityPreferences() {
    if (!elements.root) {
      return;
    }

    elements.root.classList.toggle(
      "fcu-high-contrast",
      Boolean(state.preferences.highContrast)
    );

    elements.root.classList.toggle(
      "fcu-large-text",
      Boolean(state.preferences.largeText)
    );

    elements.root.classList.toggle(
      "fcu-reduced-motion",
      Boolean(state.preferences.reducedMotion)
    );
  }

  function setBusy(isBusy, message = "") {
    state.busy = Boolean(isBusy);

    if (elements.panel) {
      elements.panel.setAttribute(
        "aria-busy",
        state.busy ? "true" : "false"
      );
    }

    if (elements.status) {
      elements.status.hidden = !state.busy;
      elements.status.textContent = state.busy
        ? asText(message, CONFIG.labels.loading)
        : "";
    }
  }

  function focusSafely(element) {
    if (!element || typeof element.focus !== "function") {
      return;
    }

    global.setTimeout(() => {
      try {
        element.focus({
          preventScroll: true
        });
      } catch (error) {
        element.focus();
      }
    }, 30);
  }

  /**
   * --------------------------------------------------------------------------
   * ESTILOS DA INTERFACE
   * --------------------------------------------------------------------------
   */

  function injectStyles() {
    if (document.getElementById(CONFIG.styleId)) {
      return;
    }

    const style = document.createElement("style");
    style.id = CONFIG.styleId;

    style.textContent = `
      :root {
        --fcu-bg: #02111d;
        --fcu-surface: #08243a;
        --fcu-surface-2: #0c3048;
        --fcu-surface-3: #123e57;
        --fcu-text: #f8fbff;
        --fcu-muted: #bfced9;
        --fcu-border: rgba(255, 255, 255, 0.17);
        --fcu-gold: #ffd531;
        --fcu-gold-dark: #c59a00;
        --fcu-green: #43e08d;
        --fcu-blue: #69c8ff;
        --fcu-orange: #ff8a28;
        --fcu-red: #ff7474;
        --fcu-shadow: 0 22px 80px rgba(0, 0, 0, 0.58);
        --fcu-radius: 20px;
        --fcu-radius-small: 12px;
        --fcu-font-size: 16px;
      }

      body.fcu-body-locked {
        overflow: hidden !important;
        touch-action: none;
      }

      #${CONFIG.rootId} {
        position: relative;
        z-index: 2147482000;
        font-family:
          Inter,
          system-ui,
          -apple-system,
          BlinkMacSystemFont,
          "Segoe UI",
          sans-serif;
        font-size: var(--fcu-font-size);
        line-height: 1.5;
        color: var(--fcu-text);
      }

      #${CONFIG.rootId},
      #${CONFIG.rootId} *,
      #${CONFIG.rootId} *::before,
      #${CONFIG.rootId} *::after {
        box-sizing: border-box;
      }

      #${CONFIG.rootId} button,
      #${CONFIG.rootId} input,
      #${CONFIG.rootId} select,
      #${CONFIG.rootId} textarea {
        font: inherit;
      }

      #${CONFIG.rootId} button {
        min-height: 44px;
      }

      #${CONFIG.rootId} :focus-visible {
        outline: 3px solid var(--fcu-gold);
        outline-offset: 3px;
      }

      .fcu-visually-hidden {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      }

      .fcu-launcher {
        position: fixed;
        right: max(18px, env(safe-area-inset-right));
        bottom: max(82px, calc(env(safe-area-inset-bottom) + 18px));
        z-index: 2147482010;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        max-width: calc(100vw - 36px);
        min-height: 56px;
        padding: 12px 18px;
        border: 1px solid rgba(255, 213, 49, 0.72);
        border-radius: 999px;
        background:
          linear-gradient(135deg, #ffd531, #ff8a28);
        color: #06111b;
        font-weight: 900;
        cursor: pointer;
        box-shadow:
          0 14px 40px rgba(0, 0, 0, 0.42),
          0 0 34px rgba(255, 213, 49, 0.24);
        transition:
          transform 180ms ease,
          box-shadow 180ms ease;
      }

      .fcu-launcher:hover {
        transform: translateY(-3px);
        box-shadow:
          0 18px 48px rgba(0, 0, 0, 0.5),
          0 0 42px rgba(255, 213, 49, 0.34);
      }

      .fcu-launcher__icon {
        display: grid;
        place-items: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: rgba(2, 17, 29, 0.13);
        font-size: 19px;
      }

      .fcu-overlay {
        position: fixed;
        inset: 0;
        z-index: 2147482020;
        background: rgba(0, 7, 13, 0.78);
        -webkit-backdrop-filter: blur(7px);
        backdrop-filter: blur(7px);
        opacity: 0;
        visibility: hidden;
        transition:
          opacity 220ms ease,
          visibility 220ms ease;
      }

      .fcu-overlay.is-open {
        opacity: 1;
        visibility: visible;
      }

      .fcu-panel {
        position: fixed;
        top: max(12px, env(safe-area-inset-top));
        right: max(12px, env(safe-area-inset-right));
        bottom: max(12px, env(safe-area-inset-bottom));
        z-index: 2147482030;
        display: grid;
        grid-template-rows: auto auto 1fr auto;
        width: min(760px, calc(100vw - 24px));
        overflow: hidden;
        border: 1px solid var(--fcu-border);
        border-radius: 26px;
        background:
          radial-gradient(
            circle at 90% 5%,
            rgba(255, 213, 49, 0.13),
            transparent 28%
          ),
          linear-gradient(160deg, #061b2b, var(--fcu-bg));
        box-shadow: var(--fcu-shadow);
        transform: translateX(calc(100% + 48px));
        visibility: hidden;
        transition:
          transform 260ms ease,
          visibility 260ms ease;
      }

      .fcu-panel.is-open {
        transform: translateX(0);
        visibility: visible;
      }

      .fcu-header {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 13px;
        padding: 18px;
        border-bottom: 1px solid var(--fcu-border);
        background: rgba(2, 17, 29, 0.88);
      }

      .fcu-header__identity {
        min-width: 0;
      }

      .fcu-header__eyebrow {
        margin: 0 0 2px;
        color: var(--fcu-gold);
        font-size: 0.72rem;
        font-weight: 900;
        letter-spacing: 0.13em;
        text-transform: uppercase;
      }

      .fcu-header__title {
        margin: 0;
        color: var(--fcu-text);
        font-size: clamp(1.05rem, 4vw, 1.45rem);
        line-height: 1.15;
      }

      .fcu-header__subtitle {
        margin: 5px 0 0;
        color: var(--fcu-muted);
        font-size: 0.86rem;
      }

      .fcu-icon-button {
        display: inline-grid;
        place-items: center;
        width: 46px;
        height: 46px;
        padding: 0;
        border: 1px solid var(--fcu-border);
        border-radius: 50%;
        background: var(--fcu-surface);
        color: var(--fcu-text);
        font-size: 1.25rem;
        cursor: pointer;
      }

      .fcu-icon-button:hover {
        border-color: var(--fcu-gold);
        background: var(--fcu-surface-2);
      }

      .fcu-navigation {
        display: flex;
        gap: 8px;
        padding: 11px 14px;
        overflow-x: auto;
        border-bottom: 1px solid var(--fcu-border);
        background: rgba(5, 27, 43, 0.96);
        scrollbar-width: thin;
      }

      .fcu-navigation__button {
        flex: 0 0 auto;
        min-height: 42px;
        padding: 9px 14px;
        border: 1px solid var(--fcu-border);
        border-radius: 999px;
        background: var(--fcu-surface);
        color: var(--fcu-text);
        font-size: 0.88rem;
        font-weight: 800;
        cursor: pointer;
      }

      .fcu-navigation__button[aria-current="page"] {
        border-color: var(--fcu-gold);
        background: var(--fcu-gold);
        color: #06111b;
      }

      .fcu-content {
        min-height: 0;
        padding: 18px;
        overflow-y: auto;
        overscroll-behavior: contain;
        scrollbar-color: var(--fcu-gold) var(--fcu-bg);
      }

      .fcu-status {
        padding: 12px 18px;
        border-top: 1px solid var(--fcu-border);
        background: rgba(8, 36, 58, 0.96);
        color: var(--fcu-muted);
        font-weight: 700;
      }

      .fcu-status[hidden] {
        display: none;
      }

      .fcu-notifications {
        position: fixed;
        right: max(18px, env(safe-area-inset-right));
        bottom: max(154px, calc(env(safe-area-inset-bottom) + 90px));
        z-index: 2147482050;
        display: grid;
        gap: 10px;
        width: min(400px, calc(100vw - 36px));
        pointer-events: none;
      }

      .fcu-notification {
        padding: 14px 16px;
        border: 1px solid var(--fcu-border);
        border-left: 5px solid var(--fcu-blue);
        border-radius: var(--fcu-radius-small);
        background: #08243a;
        color: var(--fcu-text);
        box-shadow: 0 12px 34px rgba(0, 0, 0, 0.42);
        pointer-events: auto;
      }

      .fcu-notification--success {
        border-left-color: var(--fcu-green);
      }

      .fcu-notification--warning {
        border-left-color: var(--fcu-orange);
      }

      .fcu-notification--error {
        border-left-color: var(--fcu-red);
      }

      .fcu-section-heading {
        margin: 0 0 16px;
      }

      .fcu-section-heading__eyebrow {
        margin: 0 0 5px;
        color: var(--fcu-gold);
        font-size: 0.74rem;
        font-weight: 900;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      .fcu-section-heading__title {
        margin: 0;
        color: var(--fcu-text);
        font-size: clamp(1.45rem, 5vw, 2.2rem);
        line-height: 1.08;
      }

      .fcu-section-heading__description {
        max-width: 62ch;
        margin: 10px 0 0;
        color: var(--fcu-muted);
      }

      .fcu-card {
        padding: 17px;
        border: 1px solid var(--fcu-border);
        border-radius: var(--fcu-radius);
        background:
          linear-gradient(
            145deg,
            rgba(12, 48, 72, 0.97),
            rgba(5, 27, 43, 0.97)
          );
      }

      .fcu-empty-state,
      .fcu-error-state,
      .fcu-loading-state {
        display: grid;
        place-items: center;
        min-height: 260px;
        padding: 30px 18px;
        text-align: center;
      }

      .fcu-empty-state__icon,
      .fcu-error-state__icon,
      .fcu-loading-state__icon {
        display: grid;
        place-items: center;
        width: 70px;
        height: 70px;
        margin-bottom: 16px;
        border: 1px solid var(--fcu-border);
        border-radius: 50%;
        background: var(--fcu-surface);
        font-size: 2rem;
      }

      .fcu-primary-button,
      .fcu-secondary-button,
      .fcu-danger-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 46px;
        padding: 11px 17px;
        border-radius: 999px;
        font-weight: 900;
        cursor: pointer;
      }

      .fcu-primary-button {
        border: 1px solid var(--fcu-gold);
        background: var(--fcu-gold);
        color: #06111b;
      }

      .fcu-secondary-button {
        border: 1px solid var(--fcu-border);
        background: var(--fcu-surface-2);
        color: var(--fcu-text);
      }

      .fcu-danger-button {
        border: 1px solid var(--fcu-red);
        background: rgba(255, 116, 116, 0.12);
        color: #ffd8d8;
      }

      .fcu-button-row {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 18px;
      }

      .fcu-high-contrast {
        --fcu-bg: #00070c;
        --fcu-surface: #001c2d;
        --fcu-surface-2: #00324d;
        --fcu-text: #ffffff;
        --fcu-muted: #e5f3ff;
        --fcu-border: rgba(255, 255, 255, 0.42);
        --fcu-gold: #ffdf00;
      }

      .fcu-large-text {
        --fcu-font-size: 19px;
      }

      .fcu-reduced-motion *,
      .fcu-reduced-motion *::before,
      .fcu-reduced-motion *::after {
        scroll-behavior: auto !important;
        animation-duration: 0.001ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.001ms !important;
      }

      @media (max-width: 760px) {
        .fcu-launcher {
          right: 14px;
          bottom: max(76px, calc(env(safe-area-inset-bottom) + 14px));
          min-width: 56px;
          padding: 11px 15px;
        }

        .fcu-launcher__label {
          display: none;
        }

        .fcu-panel {
          inset:
            max(4px, env(safe-area-inset-top))
            4px
            max(4px, env(safe-area-inset-bottom))
            4px;
          width: auto;
          border-radius: 20px;
        }

        .fcu-header {
          padding: 14px 12px;
        }

        .fcu-header__subtitle {
          display: none;
        }

        .fcu-content {
          padding: 15px 12px 24px;
        }

        .fcu-notifications {
          right: 12px;
          bottom: max(142px, calc(env(safe-area-inset-bottom) + 82px));
          width: calc(100vw - 24px);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        #${CONFIG.rootId} *,
        #${CONFIG.rootId} *::before,
        #${CONFIG.rootId} *::after {
          scroll-behavior: auto !important;
          animation-duration: 0.001ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.001ms !important;
        }
      }

      @media print {
        .fcu-launcher,
        .fcu-overlay,
        .fcu-panel,
        .fcu-notifications {
          display: none !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /**
   * --------------------------------------------------------------------------
   * NOTIFICAÇÕES
   * --------------------------------------------------------------------------
   */

  function notify(message, type = "info", options = {}) {
    const text = asText(message);

    if (!text) {
      return null;
    }

    if (!elements.notifications) {
      console.log(`[${MODULE_NAME}] ${text}`);
      return null;
    }

    const notificationId = generateRuntimeId("notification");

    const notification = createElement("div", {
      id: notificationId,
      className: [
        "fcu-notification",
        `fcu-notification--${type}`
      ].join(" "),
      role: type === "error" ? "alert" : "status",
      tabindex: "0"
    });

    const title = createElement("strong", {
      textContent:
        type === "success"
          ? "Concluído"
          : type === "warning"
            ? "Atenção"
            : type === "error"
              ? "Não foi possível concluir"
              : "Informação"
    });

    const body = createElement("div", {
      textContent: text
    });

    notification.append(title, body);
    elements.notifications.appendChild(notification);

    const duration = Number.isFinite(options.duration)
      ? options.duration
      : CONFIG.notificationDuration;

    if (duration > 0) {
      global.setTimeout(() => {
        notification.remove();
      }, duration);
    }

    return notification;
  }

  /**
   * --------------------------------------------------------------------------
   * CONSTRUÇÃO DA ESTRUTURA-BASE
   * --------------------------------------------------------------------------
   */

  function buildLauncher() {
    const launcher = createElement("button", {
      id: CONFIG.launcherId,
      className: "fcu-launcher",
      type: "button",
      title: CONFIG.labels.openPanel,
      "aria-label": CONFIG.labels.openPanel,
      "aria-controls": CONFIG.panelId,
      "aria-expanded": "false"
    });

    const icon = createElement("span", {
      className: "fcu-launcher__icon",
      "aria-hidden": "true",
      textContent: "✦"
    });

    const label = createElement("span", {
      className: "fcu-launcher__label",
      textContent: "Curadoria Histórica"
    });

    launcher.append(icon, label);

    return launcher;
  }

  function buildHeader() {
    const header = createElement("header", {
      className: "fcu-header"
    });

    const backButton = createElement("button", {
      className: "fcu-icon-button",
      type: "button",
      title: "Voltar",
      "aria-label": "Voltar à tela anterior",
      hidden: true,
      textContent: "←"
    });

    const identity = createElement("div", {
      className: "fcu-header__identity"
    });

    const eyebrow = createElement("p", {
      className: "fcu-header__eyebrow",
      textContent: "FESTANÇA DE VILA BELA 2026"
    });

    const title = createElement("h2", {
      id: `${CONFIG.panelId}-title`,
      className: "fcu-header__title",
      textContent: CONFIG.labels.title
    });

    const subtitle = createElement("p", {
      className: "fcu-header__subtitle",
      textContent: CONFIG.labels.subtitle
    });

    const closeButton = createElement("button", {
      className: "fcu-icon-button",
      type: "button",
      title: CONFIG.labels.closePanel,
      "aria-label": CONFIG.labels.closePanel,
      textContent: "×"
    });

    identity.append(eyebrow, title, subtitle);
    header.append(backButton, identity, closeButton);

    elements.backButton = backButton;
    elements.closeButton = closeButton;
    elements.title = title;

    return header;
  }

  function buildNavigation() {
    const navigation = createElement("nav", {
      className: "fcu-navigation",
      "aria-label": "Navegação da Curadoria Histórica"
    });

    const navigationItems = [
      {
        view: CONFIG.views.dashboard,
        label: "Visão geral",
        icon: "▦"
      },
      {
        view: CONFIG.views.records,
        label: "Registros",
        icon: "▤"
      },
      {
        view: CONFIG.views.create,
        label: "Novo registro",
        icon: "+"
      },
      {
        view: CONFIG.views.validation,
        label: "Validação",
        icon: "✓"
      },
      {
        view: CONFIG.views.export,
        label: "Exportar",
        icon: "⇩"
      }
    ];

    navigationItems.forEach((item) => {
      const button = createElement("button", {
        className: "fcu-navigation__button",
        type: "button",
        dataset: {
          view: item.view
        },
        "aria-current":
          item.view === state.currentView
            ? "page"
            : "false",
        textContent: `${item.icon} ${item.label}`
      });

      navigation.appendChild(button);
    });

    return navigation;
  }

  function buildPanel() {
    const panel = createElement("section", {
      id: CONFIG.panelId,
      className: "fcu-panel",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": `${CONFIG.panelId}-title`,
      "aria-hidden": "true",
      tabindex: "-1"
    });

    const header = buildHeader();
    const navigation = buildNavigation();

    const content = createElement("main", {
      className: "fcu-content",
      tabindex: "0"
    });

    const status = createElement("div", {
      className: "fcu-status",
      role: "status",
      "aria-live": "polite",
      hidden: true
    });

    panel.append(header, navigation, content, status);

    elements.header = header;
    elements.navigation = navigation;
    elements.content = content;
    elements.status = status;

    return panel;
  }

  function buildBaseInterface() {
    if (document.getElementById(CONFIG.rootId)) {
      return;
    }

    const root = createElement("div", {
      id: CONFIG.rootId,
      dataset: {
        module: MODULE_NAME,
        version: MODULE_VERSION
      }
    });

    const launcher = buildLauncher();

    const overlay = createElement("div", {
      id: CONFIG.overlayId,
      className: "fcu-overlay",
      "aria-hidden": "true"
    });

    const panel = buildPanel();

    const notifications = createElement("div", {
      id: CONFIG.notificationRegionId,
      className: "fcu-notifications",
      "aria-live": "polite",
      "aria-relevant": "additions"
    });

    root.append(launcher, overlay, panel, notifications);
    document.body.appendChild(root);

    elements.root = root;
    elements.launcher = launcher;
    elements.overlay = overlay;
    elements.panel = panel;
    elements.notifications = notifications;

    applyAccessibilityPreferences();
  }

  /**
   * --------------------------------------------------------------------------
   * ESTADOS VISUAIS INICIAIS
   * --------------------------------------------------------------------------
   */

  function renderLoadingState(message = CONFIG.labels.loading) {
    if (!elements.content) {
      return;
    }

    elements.content.innerHTML = "";

    const wrapper = createElement("section", {
      className: "fcu-loading-state",
      "aria-label": message
    });

    const icon = createElement("div", {
      className: "fcu-loading-state__icon",
      "aria-hidden": "true",
      textContent: "◌"
    });

    const title = createElement("h3", {
      textContent: message
    });

    const description = createElement("p", {
      textContent:
        "Aguarde enquanto os registros, observações e indicadores são preparados."
    });

    wrapper.append(icon, title, description);
    elements.content.appendChild(wrapper);
  }

  function renderDependencyError() {
    if (!elements.content) {
      return;
    }

    elements.content.innerHTML = "";

    const wrapper = createElement("section", {
      className: "fcu-error-state",
      role: "alert"
    });

    const icon = createElement("div", {
      className: "fcu-error-state__icon",
      "aria-hidden": "true",
      textContent: "!"
    });

    const title = createElement("h3", {
      textContent: "Motor de Curadoria não encontrado"
    });

    const description = createElement("p", {
      textContent:
        "Verifique se curation-engine.js foi carregado antes de curation-ui.js."
    });

    const retryButton = createElement("button", {
      className: "fcu-primary-button",
      type: "button",
      dataset: {
        action: "retry-initialization"
      },
      textContent: "Tentar novamente"
    });

    wrapper.append(icon, title, description, retryButton);
    elements.content.appendChild(wrapper);
  }

  /**
   * --------------------------------------------------------------------------
   * ABERTURA E FECHAMENTO DO PAINEL
   * --------------------------------------------------------------------------
   */

  function openPanel() {
    if (!elements.panel || !elements.overlay) {
      return;
    }

    state.panelOpen = true;

    elements.panel.classList.add("is-open");
    elements.overlay.classList.add("is-open");

    elements.panel.setAttribute("aria-hidden", "false");
    elements.overlay.setAttribute("aria-hidden", "false");

    if (elements.launcher) {
      elements.launcher.setAttribute("aria-expanded", "true");
    }

    document.body.classList.add("fcu-body-locked");

    focusSafely(elements.panel);

    writeStorage(
      CONFIG.storageKeys.lastView,
      state.currentView
    );
  }

  function closePanel(options = {}) {
    if (!elements.panel || !elements.overlay) {
      return;
    }

    const force = Boolean(options.force);

    if (
      !force &&
      state.preferences.confirmBeforeClose &&
      state.busy
    ) {
      notify(
        "Existe uma operação em andamento. Aguarde sua conclusão.",
        "warning"
      );
      return;
    }

    state.panelOpen = false;

    elements.panel.classList.remove("is-open");
    elements.overlay.classList.remove("is-open");

    elements.panel.setAttribute("aria-hidden", "true");
    elements.overlay.setAttribute("aria-hidden", "true");

    if (elements.launcher) {
      elements.launcher.setAttribute("aria-expanded", "false");
    }

    document.body.classList.remove("fcu-body-locked");

    focusSafely(elements.launcher);
  }

  function togglePanel() {
    if (state.panelOpen) {
      closePanel();
    } else {
      openPanel();
    }
  }

  /**
   * --------------------------------------------------------------------------
   * PREPARAÇÃO INICIAL DO MOTOR
   * --------------------------------------------------------------------------
   */

  async function prepareEngine() {
    setBusy(true, "Conectando ao Motor de Curadoria Histórica...");

    const engine = await waitForDependency(getEngine);

    if (!engine) {
      state.engineReady = false;
      state.lastError = new Error(
        `${CONFIG.engineGlobalName} não foi encontrado.`
      );

      setBusy(false);
      renderDependencyError();

      return null;
    }

    try {
      const initializationResult = callFirstAvailable(
        engine,
        [
          "initialize",
          "init",
          "start"
        ]
      );

      if (initializationResult !== undefined) {
        await resolvePossiblePromise(initializationResult);
      }

      state.engineReady = true;
      state.lastError = null;

      return engine;
    } catch (error) {
      state.engineReady = false;
      state.lastError = error;

      console.error(
        `[${MODULE_NAME}] Falha ao inicializar o motor.`,
        error
      );

      renderDependencyError();

      return null;
    } finally {
      setBusy(false);
    }
  }

  async function prepareDataBridge() {
    const bridge = getDataBridge();

    if (!bridge) {
      state.dataReady = false;
      return null;
    }

    try {
      const bridgeState = isObject(bridge.state)
        ? bridge.state
        : null;

      if (
        bridgeState &&
        bridgeState.initialized === false &&
        typeof bridge.initialize === "function"
      ) {
        await resolvePossiblePromise(
          bridge.initialize()
        );
      }

      state.dataReady = true;

      return bridge;
    } catch (error) {
      state.dataReady = false;

      console.warn(
        `[${MODULE_NAME}] Ponte territorial indisponível.`,
        error
      );

      return null;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * CONTINUA NA PARTE 2
   * --------------------------------------------------------------------------
   *
   * A Parte 2 acrescentará:
   *
   * - leitura dos registros e observações;
   * - normalização dos dados retornados pelo curation-engine.js;
   * - cálculo dos indicadores;
   * - dashboard visual;
   * - cartões estatísticos;
   * - painel de integridade do acervo;
   * - navegação entre as telas.
   *
   * NÃO INSIRA O ENCERRAMENTO:
   *
   * })(window, document);
   *
   * Ele será incluído somente na última parte do arquivo.
   * --------------------------------------------------------------------------
   */
   /**
   * --------------------------------------------------------------------------
   * NORMALIZAÇÃO DOS DADOS CURATORIAIS
   * --------------------------------------------------------------------------
   */

  function extractCollection(source, possibleKeys = []) {
    if (Array.isArray(source)) {
      return source;
    }

    if (!isObject(source)) {
      return [];
    }

    for (const key of possibleKeys) {
      if (Array.isArray(source[key])) {
        return source[key];
      }
    }

    if (isObject(source.data)) {
      for (const key of possibleKeys) {
        if (Array.isArray(source.data[key])) {
          return source.data[key];
        }
      }
    }

    if (isObject(source.result)) {
      for (const key of possibleKeys) {
        if (Array.isArray(source.result[key])) {
          return source.result[key];
        }
      }
    }

    return [];
  }

  function getRecordId(record, index = 0) {
    return asText(
      record?.id ||
      record?.recordId ||
      record?.curationRecordId ||
      record?.metadata?.id ||
      record?.identity?.id,
      `registro-curatorial-${String(index + 1).padStart(3, "0")}`
    );
  }

  function getRecordTitle(record, index = 0) {
    return asText(
      record?.title ||
      record?.headline ||
      record?.identity?.title ||
      record?.historicalRecord?.title ||
      record?.editorial?.title ||
      record?.summary?.title,
      `Registro Histórico ${index + 1}`
    );
  }

  function getRecordSummary(record) {
    return asText(
      record?.summary?.text ||
      record?.summary ||
      record?.description ||
      record?.historicalRecord?.summary ||
      record?.editorial?.summary ||
      record?.narrative?.summary ||
      record?.content?.summary,
      "Registro ainda sem resumo curatorial."
    );
  }

  function getRecordStatus(record) {
    return asText(
      record?.status ||
      record?.workflow?.status ||
      record?.curation?.status ||
      record?.validation?.status ||
      record?.preservation?.status,
      "rascunho"
    );
  }

  function getRecordStage(record) {
    return asText(
      record?.stage ||
      record?.workflow?.currentStage ||
      record?.workflow?.stage ||
      record?.curationStage ||
      record?.curation?.stage,
      "registro-inicial"
    );
  }

  function getRecordDate(record) {
    return (
      record?.eventDate ||
      record?.date ||
      record?.historicalContext?.eventDate ||
      record?.temporalContext?.date ||
      record?.source?.observationDate ||
      record?.provenance?.createdAt ||
      record?.createdAt ||
      null
    );
  }

  function getRecordUpdatedAt(record) {
    return (
      record?.updatedAt ||
      record?.provenance?.updatedAt ||
      record?.repository?.lastUpdated ||
      record?.preservation?.lastIntegrityCheck ||
      getRecordDate(record)
    );
  }

  function getRecordSourceType(record) {
    return asText(
      record?.sourceType ||
      record?.source?.type ||
      record?.provenance?.origin ||
      record?.provenance?.sourceType ||
      record?.historicalRecord?.sourceType,
      "registro-de-campo"
    );
  }

  function getRecordActivityId(record) {
    return asText(
      record?.activityId ||
      record?.links?.activityId ||
      record?.relationships?.activityId ||
      record?.historicalContext?.activityId ||
      record?.source?.activityId,
      ""
    );
  }

  function getRecordObservationIds(record) {
    const possibleValues = [
      record?.observationId,
      record?.observationIds,
      record?.links?.observationId,
      record?.links?.observationIds,
      record?.relationships?.observationIds,
      record?.source?.observationIds,
      record?.sourceLinks?.fieldObservationIds
    ];

    const ids = [];

    possibleValues.forEach((value) => {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          const normalized = asText(item);

          if (normalized) {
            ids.push(normalized);
          }
        });
      } else {
        const normalized = asText(value);

        if (normalized) {
          ids.push(normalized);
        }
      }
    });

    return [...new Set(ids)];
  }

  function getRecordMediaCount(record) {
    const mediaCollections = [
      record?.media,
      record?.mediaAssets,
      record?.evidence?.media,
      record?.evidence?.images,
      record?.evidence?.videos,
      record?.documentation?.media,
      record?.historicalRecord?.media
    ];

    return mediaCollections.reduce((total, collection) => {
      if (Array.isArray(collection)) {
        return total + collection.length;
      }

      if (isObject(collection)) {
        return total + Object.values(collection).filter(Array.isArray)
          .reduce((subtotal, list) => subtotal + list.length, 0);
      }

      return total;
    }, 0);
  }

  function getRecordTestimonyCount(record) {
    const collections = [
      record?.testimonies,
      record?.oralHistory?.testimonies,
      record?.oralHistory?.interviews,
      record?.evidence?.testimonies,
      record?.documentation?.testimonies
    ];

    return collections.reduce((total, collection) => {
      return total + asArray(collection).length;
    }, 0);
  }

  function getRecordPrivacyLevel(record) {
    return asText(
      record?.privacyLevel ||
      record?.privacy?.level ||
      record?.accessControl?.privacyLevel ||
      record?.publication?.privacyLevel,
      "nao-classificado"
    );
  }

  function getRecordValidationLevel(record) {
    return asText(
      record?.validation?.level ||
      record?.validationLevel ||
      record?.curation?.validationLevel ||
      record?.workflow?.validationLevel,
      "nao-verificado"
    );
  }

  function getRecordCompleteness(record) {
    const explicitValue =
      record?.quality?.completenessPercentage ??
      record?.quality?.completeness ??
      record?.indicators?.completeness ??
      record?.statistics?.completeness;

    if (Number.isFinite(Number(explicitValue))) {
      return Math.max(
        0,
        Math.min(100, Number(explicitValue))
      );
    }

    const checks = [
      Boolean(getRecordTitle(record)),
      getRecordSummary(record) !== "Registro ainda sem resumo curatorial.",
      Boolean(getRecordDate(record)),
      Boolean(getRecordStatus(record)),
      Boolean(getRecordStage(record)),
      Boolean(getRecordSourceType(record)),
      getRecordObservationIds(record).length > 0,
      Boolean(getRecordActivityId(record)),
      getRecordMediaCount(record) > 0,
      getRecordValidationLevel(record) !== "nao-verificado"
    ];

    const completed = checks.filter(Boolean).length;

    return Math.round((completed / checks.length) * 100);
  }

  function normalizeRecord(record, index = 0) {
    const normalizedRecord = isObject(record)
      ? record
      : {};

    return {
      id: getRecordId(normalizedRecord, index),
      title: getRecordTitle(normalizedRecord, index),
      summary: getRecordSummary(normalizedRecord),
      status: getRecordStatus(normalizedRecord),
      stage: getRecordStage(normalizedRecord),
      date: getRecordDate(normalizedRecord),
      updatedAt: getRecordUpdatedAt(normalizedRecord),
      sourceType: getRecordSourceType(normalizedRecord),
      activityId: getRecordActivityId(normalizedRecord),
      observationIds: getRecordObservationIds(normalizedRecord),
      mediaCount: getRecordMediaCount(normalizedRecord),
      testimonyCount: getRecordTestimonyCount(normalizedRecord),
      privacyLevel: getRecordPrivacyLevel(normalizedRecord),
      validationLevel: getRecordValidationLevel(normalizedRecord),
      completeness: getRecordCompleteness(normalizedRecord),
      original: normalizedRecord
    };
  }

  function normalizeObservation(observation, index = 0) {
    const source = isObject(observation)
      ? observation
      : {};

    return {
      id: asText(
        source.id ||
        source.observationId ||
        source.identity?.id,
        `observacao-${String(index + 1).padStart(3, "0")}`
      ),
      title: asText(
        source.title ||
        source.identity?.title ||
        source.event?.title,
        `Observação de Campo ${index + 1}`
      ),
      date:
        source.date ||
        source.observationDate ||
        source.temporal?.date ||
        source.createdAt ||
        source.provenance?.createdAt ||
        null,
      status: asText(
        source.status ||
        source.validation?.status,
        "rascunho"
      ),
      activityId: asText(
        source.activityId ||
        source.event?.activityId ||
        source.links?.activityId,
        ""
      ),
      livingHeritage: Boolean(
        source.livingHeritage ||
        source.immaterialHeritage ||
        source.patrimonioImaterial
      ),
      mediaCount: [
        source.media,
        source.images,
        source.videos,
        source.audio
      ].reduce((total, collection) => {
        return total + asArray(collection).length;
      }, 0),
      original: source
    };
  }

  function normalizeActivity(activity, index = 0) {
    const source = isObject(activity)
      ? activity
      : {};

    return {
      id: asText(
        source.id,
        `atividade-${String(index + 1).padStart(3, "0")}`
      ),
      title: asText(
        source.title,
        `Atividade ${index + 1}`
      ),
      date: source.date || null,
      startTime: source.startTime || null,
      celebration: asText(
        source.celebration,
        "programacao-integrada"
      ),
      locationId: asText(
        source.locationId,
        ""
      ),
      original: source
    };
  }

  /**
   * --------------------------------------------------------------------------
   * LEITURA DOS REGISTROS, OBSERVAÇÕES E ATIVIDADES
   * --------------------------------------------------------------------------
   */

  async function loadRecordsFromEngine(engine) {
    const possibleResult = callFirstAvailable(
      engine,
      [
        "getRecords",
        "getAllRecords",
        "listRecords",
        "getCurationRecords",
        "getRepository",
        "getResult"
      ]
    );

    const resolvedResult = await resolvePossiblePromise(
      possibleResult
    );

    const records = extractCollection(
      resolvedResult,
      [
        "records",
        "curationRecords",
        "items",
        "entries"
      ]
    );

    return records.map(normalizeRecord);
  }

  async function loadObservationsFromEngine(engine) {
    const possibleResult = callFirstAvailable(
      engine,
      [
        "getObservations",
        "getFieldObservations",
        "listObservations",
        "getLinkedObservations"
      ]
    );

    const resolvedResult = await resolvePossiblePromise(
      possibleResult
    );

    let observations = extractCollection(
      resolvedResult,
      [
        "observations",
        "fieldObservations",
        "items",
        "entries"
      ]
    );

    if (observations.length === 0) {
      const bridge = getDataBridge();

      if (bridge) {
        const bridgeResult = callFirstAvailable(
          bridge,
          [
            "getObservations",
            "getFieldObservations"
          ]
        );

        observations = extractCollection(
          await resolvePossiblePromise(bridgeResult),
          [
            "observations",
            "fieldObservations",
            "items"
          ]
        );
      }
    }

    return observations.map(normalizeObservation);
  }

  async function loadActivitiesFromBridge() {
    const bridge = getDataBridge();

    if (!bridge) {
      return [];
    }

    const possibleResult = callFirstAvailable(
      bridge,
      [
        "getActivities",
        "getAllActivities",
        "getProgramacao",
        "getResult"
      ]
    );

    const resolvedResult = await resolvePossiblePromise(
      possibleResult
    );

    const activities = extractCollection(
      resolvedResult,
      [
        "activities",
        "programacao",
        "items"
      ]
    );

    return activities.map(normalizeActivity);
  }

  async function refreshRepositoryData(options = {}) {
    const silent = Boolean(options.silent);

    if (!silent) {
      setBusy(
        true,
        "Atualizando registros da Curadoria Histórica..."
      );
    }

    try {
      const engine = getEngine() || await prepareEngine();

      if (!engine) {
        return false;
      }

      const [
        records,
        observations,
        activities
      ] = await Promise.all([
        loadRecordsFromEngine(engine),
        loadObservationsFromEngine(engine),
        loadActivitiesFromBridge()
      ]);

      state.records = records;
      state.observations = observations;
      state.activities = activities;
      state.statistics = calculateStatistics(
        records,
        observations,
        activities
      );
      state.lastUpdated = new Date().toISOString();
      state.lastError = null;

      return true;
    } catch (error) {
      state.lastError = error;

      console.error(
        `[${MODULE_NAME}] Falha ao atualizar os dados curatoriais.`,
        error
      );

      notify(
        "Não foi possível atualizar todos os dados curatoriais.",
        "error"
      );

      return false;
    } finally {
      if (!silent) {
        setBusy(false);
      }
    }
  }

  /**
   * --------------------------------------------------------------------------
   * CÁLCULO DAS ESTATÍSTICAS
   * --------------------------------------------------------------------------
   */

  function countBy(collection, resolver) {
    return collection.reduce((result, item) => {
      const key = asText(
        resolver(item),
        "nao-informado"
      );

      result[key] = (result[key] || 0) + 1;

      return result;
    }, {});
  }

  function getAverage(values) {
    const validValues = values
      .map(Number)
      .filter(Number.isFinite);

    if (validValues.length === 0) {
      return 0;
    }

    const total = validValues.reduce(
      (sum, value) => sum + value,
      0
    );

    return Math.round(total / validValues.length);
  }

  function calculateStatistics(
    records = [],
    observations = [],
    activities = []
  ) {
    const totalRecords = records.length;
    const totalObservations = observations.length;
    const totalActivities = activities.length;

    const validatedRecords = records.filter((record) => {
      const status = normalizeText(record.status);
      const validation = normalizeText(record.validationLevel);

      return (
        status.includes("validado") ||
        status.includes("aprovado") ||
        validation.includes("validado") ||
        validation.includes("confirmado")
      );
    }).length;

    const draftRecords = records.filter((record) => {
      const status = normalizeText(record.status);

      return (
        status.includes("rascunho") ||
        status.includes("inicial") ||
        status.includes("pendente")
      );
    }).length;

    const permanentMemoryRecords = records.filter((record) => {
      const status = normalizeText(record.status);
      const stage = normalizeText(record.stage);

      return (
        status.includes("memoria-permanente") ||
        status.includes("memoria permanente") ||
        stage.includes("memoria-permanente") ||
        stage.includes("preservacao-final")
      );
    }).length;

    const recordsWithMedia = records.filter(
      (record) => record.mediaCount > 0
    ).length;

    const recordsWithTestimonies = records.filter(
      (record) => record.testimonyCount > 0
    ).length;

    const linkedToObservation = records.filter(
      (record) => record.observationIds.length > 0
    ).length;

    const linkedToActivity = records.filter(
      (record) => Boolean(record.activityId)
    ).length;

    const protectedRecords = records.filter((record) => {
      const privacy = normalizeText(record.privacyLevel);

      return (
        privacy.includes("proteg") ||
        privacy.includes("restrit") ||
        privacy.includes("privad")
      );
    }).length;

    const livingHeritageObservations = observations.filter(
      (observation) => observation.livingHeritage
    ).length;

    const mediaAssets = records.reduce(
      (total, record) => total + record.mediaCount,
      0
    );

    const testimonies = records.reduce(
      (total, record) => total + record.testimonyCount,
      0
    );

    const averageCompleteness = getAverage(
      records.map((record) => record.completeness)
    );

    const validationRate = totalRecords > 0
      ? Math.round((validatedRecords / totalRecords) * 100)
      : 0;

    const observationLinkRate = totalRecords > 0
      ? Math.round((linkedToObservation / totalRecords) * 100)
      : 0;

    const activityLinkRate = totalRecords > 0
      ? Math.round((linkedToActivity / totalRecords) * 100)
      : 0;

    return {
      totalRecords,
      totalObservations,
      totalActivities,
      validatedRecords,
      draftRecords,
      permanentMemoryRecords,
      recordsWithMedia,
      recordsWithTestimonies,
      linkedToObservation,
      linkedToActivity,
      protectedRecords,
      livingHeritageObservations,
      mediaAssets,
      testimonies,
      averageCompleteness,
      validationRate,
      observationLinkRate,
      activityLinkRate,
      byStatus: countBy(
        records,
        (record) => record.status
      ),
      byStage: countBy(
        records,
        (record) => record.stage
      ),
      bySourceType: countBy(
        records,
        (record) => record.sourceType
      ),
      byPrivacyLevel: countBy(
        records,
        (record) => record.privacyLevel
      ),
      byValidationLevel: countBy(
        records,
        (record) => record.validationLevel
      )
    };
  }

  /**
   * --------------------------------------------------------------------------
   * COMPONENTES VISUAIS REUTILIZÁVEIS
   * --------------------------------------------------------------------------
   */

  function createSectionHeading(
    eyebrow,
    title,
    description = ""
  ) {
    const wrapper = createElement("header", {
      className: "fcu-section-heading"
    });

    const eyebrowElement = createElement("p", {
      className: "fcu-section-heading__eyebrow",
      textContent: eyebrow
    });

    const titleElement = createElement("h3", {
      className: "fcu-section-heading__title",
      textContent: title
    });

    wrapper.append(
      eyebrowElement,
      titleElement
    );

    if (description) {
      wrapper.appendChild(
        createElement("p", {
          className: "fcu-section-heading__description",
          textContent: description
        })
      );
    }

    return wrapper;
  }

  function createStatCard({
    label,
    value,
    detail = "",
    icon = "•",
    tone = "default"
  }) {
    const card = createElement("article", {
      className: `fcu-stat-card fcu-stat-card--${tone}`
    });

    const iconElement = createElement("span", {
      className: "fcu-stat-card__icon",
      "aria-hidden": "true",
      textContent: icon
    });

    const body = createElement("div", {
      className: "fcu-stat-card__body"
    });

    const valueElement = createElement("strong", {
      className: "fcu-stat-card__value",
      textContent: String(value)
    });

    const labelElement = createElement("span", {
      className: "fcu-stat-card__label",
      textContent: label
    });

    body.append(
      valueElement,
      labelElement
    );

    if (detail) {
      body.appendChild(
        createElement("small", {
          className: "fcu-stat-card__detail",
          textContent: detail
        })
      );
    }

    card.append(
      iconElement,
      body
    );

    return card;
  }

  function createProgressBar({
    label,
    value,
    detail = ""
  }) {
    const safeValue = Math.max(
      0,
      Math.min(100, Number(value) || 0)
    );

    const wrapper = createElement("div", {
      className: "fcu-progress"
    });

    const heading = createElement("div", {
      className: "fcu-progress__heading"
    });

    heading.append(
      createElement("span", {
        textContent: label
      }),
      createElement("strong", {
        textContent: `${safeValue}%`
      })
    );

    const track = createElement("div", {
      className: "fcu-progress__track",
      role: "progressbar",
      "aria-label": label,
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": String(safeValue)
    });

    const bar = createElement("span", {
      className: "fcu-progress__bar"
    });

    bar.style.width = `${safeValue}%`;
    track.appendChild(bar);

    wrapper.append(
      heading,
      track
    );

    if (detail) {
      wrapper.appendChild(
        createElement("small", {
          className: "fcu-progress__detail",
          textContent: detail
        })
      );
    }

    return wrapper;
  }

  function createBadge(
    text,
    tone = "default"
  ) {
    return createElement("span", {
      className: `fcu-badge fcu-badge--${tone}`,
      textContent: humanizeSlug(text)
    });
  }

  function getStatusTone(status) {
    const normalized = normalizeText(status);

    if (
      normalized.includes("validado") ||
      normalized.includes("aprovado") ||
      normalized.includes("confirmado")
    ) {
      return "success";
    }

    if (
      normalized.includes("pendente") ||
      normalized.includes("revisao") ||
      normalized.includes("rascunho")
    ) {
      return "warning";
    }

    if (
      normalized.includes("restrito") ||
      normalized.includes("protegido")
    ) {
      return "protected";
    }

    return "default";
  }

  function createDistributionList(
    title,
    distribution,
    options = {}
  ) {
    const card = createElement("section", {
      className: "fcu-card fcu-distribution"
    });

    card.appendChild(
      createElement("h4", {
        className: "fcu-card__title",
        textContent: title
      })
    );

    const entries = Object.entries(
      distribution || {}
    ).sort((first, second) => second[1] - first[1]);

    if (entries.length === 0) {
      card.appendChild(
        createElement("p", {
          className: "fcu-muted-text",
          textContent: "Ainda não há dados suficientes."
        })
      );

      return card;
    }

    const list = createElement("ul", {
      className: "fcu-distribution__list"
    });

    const maxItems = Number.isFinite(options.maxItems)
      ? options.maxItems
      : 8;

    entries.slice(0, maxItems).forEach(([key, value]) => {
      const item = createElement("li", {
        className: "fcu-distribution__item"
      });

      item.append(
        createElement("span", {
          textContent: humanizeSlug(key)
        }),
        createElement("strong", {
          textContent: String(value)
        })
      );

      list.appendChild(item);
    });

    card.appendChild(list);

    return card;
  }

  /**
   * --------------------------------------------------------------------------
   * ESTILOS COMPLEMENTARES DA PARTE 2
   * --------------------------------------------------------------------------
   */

  function injectDashboardStyles() {
    const styleId = `${CONFIG.styleId}-dashboard`;

    if (document.getElementById(styleId)) {
      return;
    }

    const style = document.createElement("style");
    style.id = styleId;

    style.textContent = `
      #${CONFIG.rootId} .fcu-dashboard {
        display: grid;
        gap: 18px;
      }

      #${CONFIG.rootId} .fcu-stat-grid {
        display: grid;
        grid-template-columns:
          repeat(auto-fit, minmax(155px, 1fr));
        gap: 12px;
      }

      #${CONFIG.rootId} .fcu-stat-card {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 13px;
        min-height: 112px;
        padding: 16px;
        border: 1px solid var(--fcu-border);
        border-radius: var(--fcu-radius);
        background:
          linear-gradient(
            145deg,
            rgba(12, 48, 72, 0.98),
            rgba(4, 26, 42, 0.98)
          );
      }

      #${CONFIG.rootId} .fcu-stat-card__icon {
        display: grid;
        place-items: center;
        width: 48px;
        height: 48px;
        border: 1px solid rgba(255, 213, 49, 0.44);
        border-radius: 15px;
        background: rgba(255, 213, 49, 0.1);
        color: var(--fcu-gold);
        font-size: 1.4rem;
        font-weight: 900;
      }

      #${CONFIG.rootId} .fcu-stat-card__body {
        display: grid;
        min-width: 0;
      }

      #${CONFIG.rootId} .fcu-stat-card__value {
        color: var(--fcu-text);
        font-size: clamp(1.55rem, 5vw, 2.25rem);
        line-height: 1;
      }

      #${CONFIG.rootId} .fcu-stat-card__label {
        margin-top: 6px;
        color: var(--fcu-text);
        font-weight: 800;
      }

      #${CONFIG.rootId} .fcu-stat-card__detail {
        margin-top: 4px;
        color: var(--fcu-muted);
      }

      #${CONFIG.rootId} .fcu-stat-card--success {
        border-color: rgba(67, 224, 141, 0.45);
      }

      #${CONFIG.rootId} .fcu-stat-card--success
      .fcu-stat-card__icon {
        border-color: rgba(67, 224, 141, 0.54);
        background: rgba(67, 224, 141, 0.12);
        color: var(--fcu-green);
      }

      #${CONFIG.rootId} .fcu-stat-card--warning {
        border-color: rgba(255, 138, 40, 0.5);
      }

      #${CONFIG.rootId} .fcu-stat-card--warning
      .fcu-stat-card__icon {
        border-color: rgba(255, 138, 40, 0.55);
        background: rgba(255, 138, 40, 0.12);
        color: var(--fcu-orange);
      }

      #${CONFIG.rootId} .fcu-stat-card--protected {
        border-color: rgba(105, 200, 255, 0.48);
      }

      #${CONFIG.rootId} .fcu-stat-card--protected
      .fcu-stat-card__icon {
        border-color: rgba(105, 200, 255, 0.55);
        background: rgba(105, 200, 255, 0.12);
        color: var(--fcu-blue);
      }

      #${CONFIG.rootId} .fcu-dashboard-grid {
        display: grid;
        grid-template-columns:
          repeat(auto-fit, minmax(265px, 1fr));
        gap: 14px;
      }

      #${CONFIG.rootId} .fcu-card__title {
        margin: 0 0 14px;
        color: var(--fcu-text);
        font-size: 1.08rem;
      }

      #${CONFIG.rootId} .fcu-progress-list {
        display: grid;
        gap: 17px;
      }

      #${CONFIG.rootId} .fcu-progress {
        display: grid;
        gap: 7px;
      }

      #${CONFIG.rootId} .fcu-progress__heading {
        display: flex;
        justify-content: space-between;
        gap: 15px;
        color: var(--fcu-text);
      }

      #${CONFIG.rootId} .fcu-progress__track {
        height: 12px;
        overflow: hidden;
        border: 1px solid var(--fcu-border);
        border-radius: 999px;
        background: rgba(0, 0, 0, 0.28);
      }

      #${CONFIG.rootId} .fcu-progress__bar {
        display: block;
        height: 100%;
        border-radius: inherit;
        background:
          linear-gradient(
            90deg,
            var(--fcu-gold),
            var(--fcu-orange)
          );
      }

      #${CONFIG.rootId} .fcu-progress__detail {
        color: var(--fcu-muted);
      }

      #${CONFIG.rootId} .fcu-distribution__list {
        display: grid;
        gap: 9px;
        padding: 0;
        margin: 0;
        list-style: none;
      }

      #${CONFIG.rootId} .fcu-distribution__item {
        display: flex;
        justify-content: space-between;
        gap: 14px;
        padding: 9px 0;
        border-bottom: 1px solid var(--fcu-border);
      }

      #${CONFIG.rootId} .fcu-distribution__item:last-child {
        border-bottom: 0;
      }

      #${CONFIG.rootId} .fcu-muted-text {
        color: var(--fcu-muted);
      }

      #${CONFIG.rootId} .fcu-repository-summary {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      #${CONFIG.rootId} .fcu-badge {
        display: inline-flex;
        align-items: center;
        min-height: 28px;
        padding: 5px 10px;
        border: 1px solid var(--fcu-border);
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.06);
        color: var(--fcu-text);
        font-size: 0.76rem;
        font-weight: 800;
      }

      #${CONFIG.rootId} .fcu-badge--success {
        border-color: rgba(67, 224, 141, 0.5);
        color: #a9ffd1;
      }

      #${CONFIG.rootId} .fcu-badge--warning {
        border-color: rgba(255, 138, 40, 0.55);
        color: #ffd0a5;
      }

      #${CONFIG.rootId} .fcu-badge--protected {
        border-color: rgba(105, 200, 255, 0.55);
        color: #c2eaff;
      }

      #${CONFIG.rootId} .fcu-records-toolbar {
        display: grid;
        gap: 12px;
        margin-bottom: 17px;
        padding: 14px;
        border: 1px solid var(--fcu-border);
        border-radius: var(--fcu-radius);
        background: rgba(8, 36, 58, 0.84);
      }

      #${CONFIG.rootId} .fcu-records-toolbar__filters {
        display: grid;
        grid-template-columns:
          minmax(180px, 2fr)
          repeat(3, minmax(135px, 1fr));
        gap: 10px;
      }

      #${CONFIG.rootId} .fcu-field {
        display: grid;
        gap: 6px;
      }

      #${CONFIG.rootId} .fcu-field label {
        color: var(--fcu-muted);
        font-size: 0.79rem;
        font-weight: 800;
      }

      #${CONFIG.rootId} .fcu-field input,
      #${CONFIG.rootId} .fcu-field select {
        width: 100%;
        min-height: 46px;
        padding: 10px 12px;
        border: 1px solid var(--fcu-border);
        border-radius: 12px;
        background: var(--fcu-bg);
        color: var(--fcu-text);
      }

      #${CONFIG.rootId} .fcu-record-list {
        display: grid;
        gap: 12px;
      }

      #${CONFIG.rootId} .fcu-record-card {
        display: grid;
        gap: 13px;
        padding: 17px;
        border: 1px solid var(--fcu-border);
        border-radius: var(--fcu-radius);
        background:
          linear-gradient(
            145deg,
            rgba(12, 48, 72, 0.95),
            rgba(4, 26, 42, 0.98)
          );
      }

      #${CONFIG.rootId} .fcu-record-card__header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 12px;
      }

      #${CONFIG.rootId} .fcu-record-card__identity {
        min-width: 0;
      }

      #${CONFIG.rootId} .fcu-record-card__id {
        display: block;
        margin-bottom: 5px;
        color: var(--fcu-gold);
        font-size: 0.73rem;
        font-weight: 900;
        letter-spacing: 0.05em;
      }

      #${CONFIG.rootId} .fcu-record-card__title {
        margin: 0;
        color: var(--fcu-text);
        font-size: 1.13rem;
        line-height: 1.25;
      }

      #${CONFIG.rootId} .fcu-record-card__summary {
        margin: 0;
        color: var(--fcu-muted);
      }

      #${CONFIG.rootId} .fcu-record-card__meta {
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
      }

      #${CONFIG.rootId} .fcu-record-card__metrics {
        display: grid;
        grid-template-columns:
          repeat(auto-fit, minmax(110px, 1fr));
        gap: 8px;
      }

      #${CONFIG.rootId} .fcu-record-metric {
        padding: 9px 10px;
        border: 1px solid var(--fcu-border);
        border-radius: 11px;
        background: rgba(0, 0, 0, 0.16);
      }

      #${CONFIG.rootId} .fcu-record-metric strong {
        display: block;
        color: var(--fcu-text);
      }

      #${CONFIG.rootId} .fcu-record-metric span {
        color: var(--fcu-muted);
        font-size: 0.76rem;
      }

      #${CONFIG.rootId} .fcu-record-card__footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
      }

      #${CONFIG.rootId} .fcu-results-count {
        color: var(--fcu-muted);
        font-weight: 800;
      }

      @media (max-width: 760px) {
        #${CONFIG.rootId} .fcu-records-toolbar__filters {
          grid-template-columns: 1fr;
        }

        #${CONFIG.rootId} .fcu-record-card__header {
          display: grid;
        }

        #${CONFIG.rootId} .fcu-record-card__footer {
          align-items: stretch;
        }

        #${CONFIG.rootId} .fcu-record-card__footer button {
          width: 100%;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /**
   * --------------------------------------------------------------------------
   * DASHBOARD DA CURADORIA HISTÓRICA
   * --------------------------------------------------------------------------
   */

  function renderDashboard() {
    if (!elements.content) {
      return;
    }

    const statistics = state.statistics || calculateStatistics(
      state.records,
      state.observations,
      state.activities
    );

    elements.content.innerHTML = "";

    const dashboard = createElement("section", {
      className: "fcu-dashboard",
      dataset: {
        view: CONFIG.views.dashboard
      }
    });

    dashboard.appendChild(
      createSectionHeading(
        "PAINEL OPERACIONAL",
        "Memória Viva da FESTANÇA 2026",
        "Acompanhe os registros históricos, as observações de campo, os vínculos documentais e o avanço da Curadoria Histórica."
      )
    );

    const statGrid = createElement("div", {
      className: "fcu-stat-grid"
    });

    [
      {
        label: "Registros curatoriais",
        value: statistics.totalRecords,
        detail: "Instâncias no acervo oficial",
        icon: "▤"
      },
      {
        label: "Observações de campo",
        value: statistics.totalObservations,
        detail: "Registros produzidos durante a Festança",
        icon: "✎",
        tone: "protected"
      },
      {
        label: "Registros validados",
        value: statistics.validatedRecords,
        detail: `${statistics.validationRate}% do acervo`,
        icon: "✓",
        tone: "success"
      },
      {
        label: "Em elaboração",
        value: statistics.draftRecords,
        detail: "Rascunhos ou registros pendentes",
        icon: "…",
        tone: "warning"
      },
      {
        label: "Memória permanente",
        value: statistics.permanentMemoryRecords,
        detail: "Registros consolidados para preservação",
        icon: "◆",
        tone: "success"
      },
      {
        label: "Patrimônio imaterial",
        value: statistics.livingHeritageObservations,
        detail: "Observações com memória viva registrada",
        icon: "∞",
        tone: "protected"
      },
      {
        label: "Mídias vinculadas",
        value: statistics.mediaAssets,
        detail: "Fotografias, vídeos, áudios e documentos",
        icon: "▣"
      },
      {
        label: "Depoimentos",
        value: statistics.testimonies,
        detail: "Relatos e fontes orais preservados",
        icon: "❝"
      }
    ].forEach((item) => {
      statGrid.appendChild(
        createStatCard(item)
      );
    });

    dashboard.appendChild(statGrid);

    const qualityGrid = createElement("div", {
      className: "fcu-dashboard-grid"
    });

    const qualityCard = createElement("section", {
      className: "fcu-card"
    });

    qualityCard.appendChild(
      createElement("h4", {
        className: "fcu-card__title",
        textContent: "Indicadores de qualidade do acervo"
      })
    );

    const progressList = createElement("div", {
      className: "fcu-progress-list"
    });

    progressList.append(
      createProgressBar({
        label: "Completude média",
        value: statistics.averageCompleteness,
        detail:
          "Mede o preenchimento dos principais campos curatoriais."
      }),
      createProgressBar({
        label: "Validação histórica",
        value: statistics.validationRate,
        detail:
          `${statistics.validatedRecords} de ${statistics.totalRecords} registros validados.`
      }),
      createProgressBar({
        label: "Vínculo com observações",
        value: statistics.observationLinkRate,
        detail:
          `${statistics.linkedToObservation} registros relacionados ao campo.`
      }),
      createProgressBar({
        label: "Vínculo com programação",
        value: statistics.activityLinkRate,
        detail:
          `${statistics.linkedToActivity} registros ligados a atividades oficiais.`
      })
    );

    qualityCard.appendChild(progressList);

    const integrityCard = createElement("section", {
      className: "fcu-card"
    });

    integrityCard.appendChild(
      createElement("h4", {
        className: "fcu-card__title",
        textContent: "Integridade e proteção"
      })
    );

    const integritySummary = createElement("div", {
      className: "fcu-repository-summary"
    });

    integritySummary.append(
      createBadge(
        `${statistics.protectedRecords} registros protegidos`,
        statistics.protectedRecords > 0
          ? "protected"
          : "default"
      ),
      createBadge(
        `${statistics.recordsWithMedia} com mídias`,
        statistics.recordsWithMedia > 0
          ? "success"
          : "warning"
      ),
      createBadge(
        `${statistics.recordsWithTestimonies} com depoimentos`,
        statistics.recordsWithTestimonies > 0
          ? "success"
          : "warning"
      ),
      createBadge(
        `${statistics.totalActivities} atividades oficiais`,
        "default"
      )
    );

    integrityCard.appendChild(integritySummary);

    integrityCard.appendChild(
      createElement("p", {
        className: "fcu-muted-text",
        textContent:
          "Os indicadores não substituem a análise humana. Eles auxiliam a identificar lacunas, vínculos ausentes e registros que precisam de validação ou proteção especial."
      })
    );

    const integrityActions = createElement("div", {
      className: "fcu-button-row"
    });

    integrityActions.append(
      createElement("button", {
        className: "fcu-primary-button",
        type: "button",
        dataset: {
          action: "open-records"
        },
        textContent: "Consultar registros"
      }),
      createElement("button", {
        className: "fcu-secondary-button",
        type: "button",
        dataset: {
          action: "refresh-data"
        },
        textContent: "Atualizar painel"
      })
    );

    integrityCard.appendChild(integrityActions);

    qualityGrid.append(
      qualityCard,
      integrityCard
    );

    dashboard.appendChild(qualityGrid);

    const distributionGrid = createElement("div", {
      className: "fcu-dashboard-grid"
    });

    distributionGrid.append(
      createDistributionList(
        "Registros por situação",
        statistics.byStatus
      ),
      createDistributionList(
        "Etapas da Curadoria",
        statistics.byStage
      ),
      createDistributionList(
        "Origem dos registros",
        statistics.bySourceType
      ),
      createDistributionList(
        "Níveis de validação",
        statistics.byValidationLevel
      )
    );

    dashboard.appendChild(distributionGrid);

    const updateInformation = createElement("p", {
      className: "fcu-muted-text",
      textContent: state.lastUpdated
        ? `Painel atualizado em ${formatDateTime(state.lastUpdated)}.`
        : "O painel ainda não foi atualizado nesta sessão."
    });

    dashboard.appendChild(updateInformation);
    elements.content.appendChild(dashboard);
  }

  /**
   * --------------------------------------------------------------------------
   * FILTROS E CONSULTA DE REGISTROS
   * --------------------------------------------------------------------------
   */

  function getUniqueRecordValues(propertyName) {
    return [
      ...new Set(
        state.records
          .map((record) => asText(record[propertyName]))
          .filter(Boolean)
      )
    ].sort((first, second) => {
      return first.localeCompare(
        second,
        "pt-BR"
      );
    });
  }

  function recordMatchesFilters(record) {
    const queryText = normalizeText(
      state.filters.query
    );

    if (queryText) {
      const searchableContent = normalizeText([
        record.id,
        record.title,
        record.summary,
        record.status,
        record.stage,
        record.sourceType,
        record.activityId,
        record.validationLevel,
        record.privacyLevel
      ].join(" "));

      if (!searchableContent.includes(queryText)) {
        return false;
      }
    }

    if (
      state.filters.status !== "todos" &&
      record.status !== state.filters.status
    ) {
      return false;
    }

    if (
      state.filters.stage !== "todas" &&
      record.stage !== state.filters.stage
    ) {
      return false;
    }

    if (
      state.filters.sourceType !== "todos" &&
      record.sourceType !== state.filters.sourceType
    ) {
      return false;
    }

    if (state.filters.date) {
      const recordDate = record.date
        ? String(record.date).slice(0, 10)
        : "";

      if (recordDate !== state.filters.date) {
        return false;
      }
    }

    return true;
  }

  function getFilteredRecords() {
    return state.records
      .filter(recordMatchesFilters)
      .sort((first, second) => {
        const firstDate = new Date(
          first.date || first.updatedAt || 0
        ).getTime();

        const secondDate = new Date(
          second.date || second.updatedAt || 0
        ).getTime();

        return secondDate - firstDate;
      });
  }

  function createFilterSelect({
    id,
    label,
    currentValue,
    defaultValue,
    defaultLabel,
    values,
    filterName
  }) {
    const field = createElement("div", {
      className: "fcu-field"
    });

    const labelElement = createElement("label", {
      for: id,
      textContent: label
    });

    const select = createElement("select", {
      id,
      dataset: {
        filter: filterName
      }
    });

    select.appendChild(
      createElement("option", {
        value: defaultValue,
        textContent: defaultLabel
      })
    );

    values.forEach((value) => {
      select.appendChild(
        createElement("option", {
          value,
          textContent: humanizeSlug(value)
        })
      );
    });

    select.value = currentValue;

    field.append(
      labelElement,
      select
    );

    return field;
  }

  function createRecordCard(record) {
    const card = createElement("article", {
      className: "fcu-record-card",
      dataset: {
        recordId: record.id
      }
    });

    const header = createElement("header", {
      className: "fcu-record-card__header"
    });

    const identity = createElement("div", {
      className: "fcu-record-card__identity"
    });

    identity.append(
      createElement("span", {
        className: "fcu-record-card__id",
        textContent: record.id
      }),
      createElement("h4", {
        className: "fcu-record-card__title",
        textContent: record.title
      })
    );

    const statusBadge = createBadge(
      record.status,
      getStatusTone(record.status)
    );

    header.append(
      identity,
      statusBadge
    );

    const summary = createElement("p", {
      className: "fcu-record-card__summary",
      textContent: record.summary
    });

    const metadata = createElement("div", {
      className: "fcu-record-card__meta"
    });

    metadata.append(
      createBadge(record.stage),
      createBadge(record.sourceType),
      createBadge(record.validationLevel),
      createBadge(
        record.privacyLevel,
        getStatusTone(record.privacyLevel)
      )
    );

    const metrics = createElement("div", {
      className: "fcu-record-card__metrics"
    });

    [
      {
        value: `${record.completeness}%`,
        label: "Completude"
      },
      {
        value: record.observationIds.length,
        label: "Observações"
      },
      {
        value: record.mediaCount,
        label: "Mídias"
      },
      {
        value: record.testimonyCount,
        label: "Depoimentos"
      }
    ].forEach((metric) => {
      const metricElement = createElement("div", {
        className: "fcu-record-metric"
      });

      metricElement.append(
        createElement("strong", {
          textContent: String(metric.value)
        }),
        createElement("span", {
          textContent: metric.label
        })
      );

      metrics.appendChild(metricElement);
    });

    const footer = createElement("footer", {
      className: "fcu-record-card__footer"
    });

    const dateInformation = createElement("span", {
      className: "fcu-muted-text",
      textContent: record.date
        ? formatDate(record.date)
        : "Data histórica não informada"
    });

    const openButton = createElement("button", {
      className: "fcu-secondary-button",
      type: "button",
      dataset: {
        action: "open-record",
        recordId: record.id
      },
      textContent: "Consultar registro"
    });

    footer.append(
      dateInformation,
      openButton
    );

    card.append(
      header,
      summary,
      metadata,
      metrics,
      footer
    );

    return card;
  }

  function renderRecordResults(container) {
    const records = getFilteredRecords();

    container.innerHTML = "";

    const resultsHeading = createElement("div", {
      className: "fcu-record-card__footer"
    });

    resultsHeading.append(
      createElement("span", {
        className: "fcu-results-count",
        textContent:
          `${records.length} registro${records.length === 1 ? "" : "s"} encontrado${records.length === 1 ? "" : "s"}`
      }),
      createElement("button", {
        className: "fcu-secondary-button",
        type: "button",
        dataset: {
          action: "clear-record-filters"
        },
        textContent: "Limpar filtros"
      })
    );

    container.appendChild(resultsHeading);

    if (records.length === 0) {
      const empty = createElement("section", {
        className: "fcu-empty-state"
      });

      empty.append(
        createElement("div", {
          className: "fcu-empty-state__icon",
          "aria-hidden": "true",
          textContent: "⌕"
        }),
        createElement("h4", {
          textContent: "Nenhum registro encontrado"
        }),
        createElement("p", {
          textContent:
            "Altere os filtros ou atualize o repositório para consultar novos registros."
        })
      );

      container.appendChild(empty);

      return;
    }

    const list = createElement("div", {
      className: "fcu-record-list"
    });

    records.forEach((record) => {
      list.appendChild(
        createRecordCard(record)
      );
    });

    container.appendChild(list);
  }

  function renderRecordsView() {
    if (!elements.content) {
      return;
    }

    elements.content.innerHTML = "";

    const section = createElement("section", {
      dataset: {
        view: CONFIG.views.records
      }
    });

    section.appendChild(
      createSectionHeading(
        "CONSULTA DO ACERVO",
        "Registros Históricos Curatoriais",
        "Pesquise acontecimentos, fontes, estágios de validação e vínculos produzidos durante a FESTANÇA 2026."
      )
    );

    const toolbar = createElement("div", {
      className: "fcu-records-toolbar"
    });

    const filters = createElement("div", {
      className: "fcu-records-toolbar__filters"
    });

    const queryField = createElement("div", {
      className: "fcu-field"
    });

    const queryId = "fcu-record-query";

    queryField.append(
      createElement("label", {
        for: queryId,
        textContent: "Pesquisar no acervo"
      }),
      createElement("input", {
        id: queryId,
        type: "search",
        value: state.filters.query,
        placeholder:
          "Título, pessoa, atividade, registro ou palavra-chave",
        autocomplete: "off",
        dataset: {
          filter: "query"
        }
      })
    );

    filters.append(
      queryField,
      createFilterSelect({
        id: "fcu-record-status",
        label: "Situação",
        currentValue: state.filters.status,
        defaultValue: "todos",
        defaultLabel: "Todas as situações",
        values: getUniqueRecordValues("status"),
        filterName: "status"
      }),
      createFilterSelect({
        id: "fcu-record-stage",
        label: "Etapa curatorial",
        currentValue: state.filters.stage,
        defaultValue: "todas",
        defaultLabel: "Todas as etapas",
        values: getUniqueRecordValues("stage"),
        filterName: "stage"
      }),
      createFilterSelect({
        id: "fcu-record-source",
        label: "Origem",
        currentValue: state.filters.sourceType,
        defaultValue: "todos",
        defaultLabel: "Todas as origens",
        values: getUniqueRecordValues("sourceType"),
        filterName: "sourceType"
      })
    );

    const secondaryFilters = createElement("div", {
      className: "fcu-button-row"
    });

    const dateField = createElement("div", {
      className: "fcu-field"
    });

    dateField.append(
      createElement("label", {
        for: "fcu-record-date",
        textContent: "Data específica"
      }),
      createElement("input", {
        id: "fcu-record-date",
        type: "date",
        value: state.filters.date,
        dataset: {
          filter: "date"
        }
      })
    );

    secondaryFilters.append(
      dateField,
      createElement("button", {
        className: "fcu-secondary-button",
        type: "button",
        dataset: {
          action: "refresh-records"
        },
        textContent: "Atualizar registros"
      })
    );

    toolbar.append(
      filters,
      secondaryFilters
    );

    const results = createElement("div", {
      dataset: {
        role: "record-results"
      }
    });

    section.append(
      toolbar,
      results
    );

    elements.content.appendChild(section);
    renderRecordResults(results);
  }

  /**
   * --------------------------------------------------------------------------
   * DETALHE PRELIMINAR DO REGISTRO
   * --------------------------------------------------------------------------
   */

  function findRecordById(recordId) {
    return state.records.find(
      (record) => record.id === recordId
    ) || null;
  }

  function renderRecordDetails(recordId) {
    const record = findRecordById(recordId);

    if (!record || !elements.content) {
      notify(
        "O registro solicitado não foi encontrado.",
        "warning"
      );

      navigateTo(CONFIG.views.records);

      return;
    }

    state.selectedRecordId = record.id;
    elements.content.innerHTML = "";

    const section = createElement("section", {
      dataset: {
        view: CONFIG.views.details,
        recordId: record.id
      }
    });

    section.appendChild(
      createSectionHeading(
        "REGISTRO HISTÓRICO",
        record.title,
        record.summary
      )
    );

    const metadataCard = createElement("section", {
      className: "fcu-card"
    });

    metadataCard.appendChild(
      createElement("h4", {
        className: "fcu-card__title",
        textContent: "Identificação curatorial"
      })
    );

    const summary = createElement("div", {
      className: "fcu-repository-summary"
    });

    summary.append(
      createBadge(record.id),
      createBadge(
        record.status,
        getStatusTone(record.status)
      ),
      createBadge(record.stage),
      createBadge(record.sourceType),
      createBadge(record.validationLevel),
      createBadge(
        record.privacyLevel,
        getStatusTone(record.privacyLevel)
      )
    );

    metadataCard.appendChild(summary);

    const metricsGrid = createElement("div", {
      className: "fcu-stat-grid"
    });

    [
      {
        label: "Completude",
        value: `${record.completeness}%`,
        icon: "◔"
      },
      {
        label: "Observações vinculadas",
        value: record.observationIds.length,
        icon: "✎"
      },
      {
        label: "Mídias",
        value: record.mediaCount,
        icon: "▣"
      },
      {
        label: "Depoimentos",
        value: record.testimonyCount,
        icon: "❝"
      }
    ].forEach((item) => {
      metricsGrid.appendChild(
        createStatCard(item)
      );
    });

    const contextCard = createElement("section", {
      className: "fcu-card"
    });

    contextCard.append(
      createElement("h4", {
        className: "fcu-card__title",
        textContent: "Contexto e vínculos"
      }),
      createElement("p", {
        className: "fcu-muted-text",
        textContent:
          `Data do acontecimento: ${
            record.date
              ? formatDate(record.date)
              : "não informada"
          }.`
      }),
      createElement("p", {
        className: "fcu-muted-text",
        textContent:
          `Atividade relacionada: ${
            record.activityId ||
            "nenhuma atividade vinculada"
          }.`
      }),
      createElement("p", {
        className: "fcu-muted-text",
        textContent:
          `Última atualização: ${
            record.updatedAt
              ? formatDateTime(record.updatedAt)
              : "não informada"
          }.`
      })
    );

    const actions = createElement("div", {
      className: "fcu-button-row"
    });

    actions.append(
      createElement("button", {
        className: "fcu-secondary-button",
        type: "button",
        dataset: {
          action: "back-to-records"
        },
        textContent: "Voltar aos registros"
      }),
      createElement("button", {
        className: "fcu-primary-button",
        type: "button",
        dataset: {
          action: "validate-record",
          recordId: record.id
        },
        textContent: "Abrir validação"
      })
    );

    section.append(
      metadataCard,
      metricsGrid,
      contextCard,
      actions
    );

    elements.content.appendChild(section);

    if (elements.backButton) {
      elements.backButton.hidden = false;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * NAVEGAÇÃO ENTRE AS TELAS
   * --------------------------------------------------------------------------
   */

  function updateNavigationState(viewName) {
    queryAll(
      "[data-view]",
      elements.navigation
    ).forEach((button) => {
      const isCurrent =
        button.dataset.view === viewName;

      button.setAttribute(
        "aria-current",
        isCurrent ? "page" : "false"
      );
    });

    if (elements.backButton) {
      elements.backButton.hidden =
        viewName !== CONFIG.views.details;
    }
  }

  function navigateTo(viewName, options = {}) {
    const validViews = Object.values(
      CONFIG.views
    );

    const targetView = validViews.includes(viewName)
      ? viewName
      : CONFIG.defaultView;

    if (state.currentView !== targetView) {
      state.previousView = state.currentView;
    }

    state.currentView = targetView;

    updateNavigationState(targetView);

    switch (targetView) {
      case CONFIG.views.dashboard:
        renderDashboard();
        break;

      case CONFIG.views.records:
        renderRecordsView();
        break;

      case CONFIG.views.details:
        renderRecordDetails(
          options.recordId ||
          state.selectedRecordId
        );
        break;

      case CONFIG.views.create:
        renderPlaceholderView(
          "NOVO REGISTRO",
          "Criar Registro Histórico",
          "O formulário completo de criação será acrescentado na próxima parte."
        );
        break;

      case CONFIG.views.validation:
        renderPlaceholderView(
          "CONTROLE DE QUALIDADE",
          "Validação Curatorial",
          "A fila de validação e os instrumentos de conferência serão acrescentados na próxima parte."
        );
        break;

      case CONFIG.views.export:
        renderPlaceholderView(
          "PRESERVAÇÃO E COMPARTILHAMENTO",
          "Exportação do Acervo",
          "Os recursos de exportação em JSON e documentação serão acrescentados em parte posterior."
        );
        break;

      default:
        renderDashboard();
        break;
    }

    writeStorage(
      CONFIG.storageKeys.lastView,
      targetView
    );

    if (elements.content) {
      elements.content.scrollTop = 0;
    }
  }

  function renderPlaceholderView(
    eyebrow,
    title,
    description
  ) {
    if (!elements.content) {
      return;
    }

    elements.content.innerHTML = "";

    const section = createElement("section");

    section.append(
      createSectionHeading(
        eyebrow,
        title,
        description
      ),
      createElement("div", {
        className: "fcu-card",
        textContent:
          "Esta área já está reservada na arquitetura da interface e será ativada nas próximas partes do arquivo."
      })
    );

    elements.content.appendChild(section);
  }

  /**
   * --------------------------------------------------------------------------
   * ATUALIZAÇÃO LOCAL DOS RESULTADOS DA CONSULTA
   * --------------------------------------------------------------------------
   */

  function refreshRecordResultsOnly() {
    const results = query(
      '[data-role="record-results"]',
      elements.content
    );

    if (results) {
      renderRecordResults(results);
    }
  }

  function clearRecordFilters() {
    state.filters = {
      query: "",
      status: "todos",
      stage: "todas",
      date: "",
      sourceType: "todos"
    };

    renderRecordsView();
  }

  /**
   * --------------------------------------------------------------------------
   * MANIPULADORES PRELIMINARES DA PARTE 2
   * --------------------------------------------------------------------------
   */

  async function handlePartTwoAction(action, target) {
    switch (action) {
      case "open-records":
        navigateTo(CONFIG.views.records);
        return true;

      case "refresh-data":
        await refreshRepositoryData();

        navigateTo(CONFIG.views.dashboard);

        notify(
          "Painel da Curadoria Histórica atualizado.",
          "success"
        );
        return true;

      case "refresh-records":
        await refreshRepositoryData();

        renderRecordsView();

        notify(
          "Consulta de registros atualizada.",
          "success"
        );
        return true;

      case "clear-record-filters":
        clearRecordFilters();
        return true;

      case "open-record": {
        const recordId = asText(
          target?.dataset?.recordId
        );

        if (recordId) {
          navigateTo(
            CONFIG.views.details,
            {
              recordId
            }
          );
        }

        return true;
      }

      case "back-to-records":
        navigateTo(CONFIG.views.records);
        return true;

      case "validate-record": {
        const recordId = asText(
          target?.dataset?.recordId
        );

        state.selectedRecordId = recordId;
        navigateTo(CONFIG.views.validation);

        return true;
      }

      default:
        return false;
    }
  }

  function handleRecordFilterInput(target) {
    const filterName = asText(
      target?.dataset?.filter
    );

    if (
      !filterName ||
      !(filterName in state.filters)
    ) {
      return false;
    }

    state.filters[filterName] = target.value;

    refreshRecordResultsOnly();

    return true;
  }

  /**
   * --------------------------------------------------------------------------
   * PREPARAÇÃO VISUAL DA PARTE 2
   * --------------------------------------------------------------------------
   */

  async function prepareDashboardAndRecords() {
    injectDashboardStyles();

    const loaded = await refreshRepositoryData({
      silent: true
    });

    if (!loaded) {
      state.statistics = calculateStatistics(
        state.records,
        state.observations,
        state.activities
      );
    }

    const savedView = readStorage(
      CONFIG.storageKeys.lastView,
      CONFIG.defaultView
    );

    const initialView = Object.values(
      CONFIG.views
    ).includes(savedView)
      ? savedView
      : CONFIG.defaultView;

    if (initialView === CONFIG.views.details) {
      navigateTo(CONFIG.views.dashboard);
    } else {
      navigateTo(initialView);
    }
  }

  /**
   * --------------------------------------------------------------------------
   * CONTINUA NA PARTE 3
   * --------------------------------------------------------------------------
   *
   * A Parte 3 acrescentará:
   *
   * - formulário visual para criação de registro;
   * - seleção de atividade da programação;
   * - seleção de observações de campo;
   * - preservação automática de rascunho;
   * - campos de título, resumo e narrativa;
   * - classificação de patrimônio material e imaterial;
   * - privacidade, consentimento e autorização;
   * - integração com os métodos de criação do curation-engine.js;
   * - validação inicial do formulário.
   *
   * Posteriormente também serão adicionados:
   *
   * - fila de validação curatorial;
   * - edição de registros;
   * - exportação em JSON;
   * - eventos globais;
   * - inicialização definitiva do módulo.
   *
   * NÃO INSIRA AINDA:
   *
   * })(window, document);
   *
   * O encerramento será incluído somente na última parte.
   * --------------------------------------------------------------------------
   */
 PERFEITO!

Gerar a Parte 2:

apps/festanca-2026/js/curation-ui.js


Parte 2

Dashboard

Painel de Estatísticas

Consulta de Registros
  /**
   * --------------------------------------------------------------------------
   * FORMULÁRIO DE CRIAÇÃO DE REGISTRO HISTÓRICO
   * PARTE 3 — CRIAÇÃO VISUAL, RASCUNHO E VALIDAÇÃO INICIAL
   * --------------------------------------------------------------------------
   */

  const CURATION_FORM_DEFAULTS = Object.freeze({
    title: "",
    summary: "",
    narrative: "",
    eventDate: "",
    activityId: "",
    observationIds: [],
    recordType: "acontecimento-cultural",
    culturalDimension: "manifestacao-cultural",
    heritageNature: "patrimonio-imaterial",
    sourceType: "registro-de-campo",
    validationLevel: "nao-verificado",
    privacyLevel: "publico",
    consentStatus: "nao-aplicavel",
    publicationAuthorization: "aguardando-autorizacao",
    locationDisclosure: "conforme-politica-territorial",
    containsChildren: false,
    containsPrivateResidence: false,
    containsSacredOrRestrictedKnowledge: false,
    containsPersonalData: false,
    containsSensitivePersonalData: false,
    factualBasis: "",
    interpretation: "",
    uncertainties: "",
    oralHistoryNotes: "",
    communityContext: "",
    historicalContext: "",
    credits: "",
    keywords: [],
    notes: ""
  });

  const CURATION_RECORD_TYPES = Object.freeze([
    {
      value: "acontecimento-cultural",
      label: "Acontecimento cultural"
    },
    {
      value: "cerimonia-religiosa",
      label: "Cerimônia religiosa"
    },
    {
      value: "manifestacao-tradicional",
      label: "Manifestação tradicional"
    },
    {
      value: "cortejo",
      label: "Cortejo"
    },
    {
      value: "reza-cantada",
      label: "Reza cantada"
    },
    {
      value: "missa",
      label: "Missa"
    },
    {
      value: "danca-tradicional",
      label: "Dança tradicional"
    },
    {
      value: "depoimento",
      label: "Depoimento"
    },
    {
      value: "memoria-comunitaria",
      label: "Memória comunitária"
    },
    {
      value: "observacao-territorial",
      label: "Observação territorial"
    },
    {
      value: "patrimonio-historico",
      label: "Patrimônio histórico"
    },
    {
      value: "outro",
      label: "Outro"
    }
  ]);

  const CULTURAL_DIMENSIONS = Object.freeze([
    {
      value: "manifestacao-cultural",
      label: "Manifestação cultural"
    },
    {
      value: "religiosidade",
      label: "Religiosidade"
    },
    {
      value: "oralidade",
      label: "Oralidade"
    },
    {
      value: "musica",
      label: "Música"
    },
    {
      value: "danca",
      label: "Dança"
    },
    {
      value: "gastronomia",
      label: "Gastronomia"
    },
    {
      value: "sociabilidade",
      label: "Sociabilidade"
    },
    {
      value: "memoria-coletiva",
      label: "Memória coletiva"
    },
    {
      value: "territorialidade",
      label: "Territorialidade"
    },
    {
      value: "transmissao-de-saberes",
      label: "Transmissão de saberes"
    },
    {
      value: "organizacao-comunitaria",
      label: "Organização comunitária"
    },
    {
      value: "identidade-cultural",
      label: "Identidade cultural"
    }
  ]);

  const HERITAGE_NATURES = Object.freeze([
    {
      value: "patrimonio-imaterial",
      label: "Patrimônio imaterial"
    },
    {
      value: "patrimonio-material",
      label: "Patrimônio material"
    },
    {
      value: "patrimonio-misto",
      label: "Patrimônio material e imaterial"
    },
    {
      value: "nao-classificado",
      label: "Ainda não classificado"
    }
  ]);

  const PRIVACY_LEVELS = Object.freeze([
    {
      value: "publico",
      label: "Público"
    },
    {
      value: "publico-com-restricoes",
      label: "Público com restrições"
    },
    {
      value: "protegido",
      label: "Protegido"
    },
    {
      value: "restrito-a-curadoria",
      label: "Restrito à Curadoria"
    },
    {
      value: "confidencial",
      label: "Confidencial"
    }
  ]);

  const CONSENT_STATUSES = Object.freeze([
    {
      value: "nao-aplicavel",
      label: "Não aplicável"
    },
    {
      value: "consentimento-obtido",
      label: "Consentimento obtido"
    },
    {
      value: "consentimento-verbal",
      label: "Consentimento verbal registrado"
    },
    {
      value: "consentimento-pendente",
      label: "Consentimento pendente"
    },
    {
      value: "consentimento-negado",
      label: "Consentimento negado"
    },
    {
      value: "nao-verificado",
      label: "Não verificado"
    }
  ]);

  const PUBLICATION_AUTHORIZATIONS = Object.freeze([
    {
      value: "aguardando-autorizacao",
      label: "Aguardando autorização"
    },
    {
      value: "autorizado",
      label: "Autorizado para publicação"
    },
    {
      value: "autorizado-com-restricoes",
      label: "Autorizado com restrições"
    },
    {
      value: "uso-interno",
      label: "Somente uso interno"
    },
    {
      value: "nao-autorizado",
      label: "Não autorizado"
    },
    {
      value: "nao-aplicavel",
      label: "Não aplicável"
    }
  ]);

  const VALIDATION_LEVELS = Object.freeze([
    {
      value: "nao-verificado",
      label: "Não verificado"
    },
    {
      value: "registro-preliminar",
      label: "Registro preliminar"
    },
    {
      value: "confirmado-por-observacao",
      label: "Confirmado por observação de campo"
    },
    {
      value: "confirmado-por-fonte",
      label: "Confirmado por fonte"
    },
    {
      value: "validacao-comunitaria-pendente",
      label: "Validação comunitária pendente"
    },
    {
      value: "validado-institucionalmente",
      label: "Validado institucionalmente"
    }
  ]);

  const SOURCE_TYPES = Object.freeze([
    {
      value: "registro-de-campo",
      label: "Registro de campo"
    },
    {
      value: "programacao-oficial",
      label: "Programação oficial"
    },
    {
      value: "depoimento-oral",
      label: "Depoimento oral"
    },
    {
      value: "fotografia",
      label: "Fotografia"
    },
    {
      value: "video",
      label: "Vídeo"
    },
    {
      value: "audio",
      label: "Áudio"
    },
    {
      value: "documento",
      label: "Documento"
    },
    {
      value: "memoria-pessoal",
      label: "Memória pessoal"
    },
    {
      value: "fonte-comunitaria",
      label: "Fonte comunitária"
    },
    {
      value: "fontes-combinadas",
      label: "Fontes combinadas"
    }
  ]);

  /**
   * --------------------------------------------------------------------------
   * ESTADO DO FORMULÁRIO
   * --------------------------------------------------------------------------
   */

  function createDefaultFormState() {
    return {
      ...CURATION_FORM_DEFAULTS,
      observationIds: [],
      keywords: []
    };
  }

  function ensureFormState() {
    if (!isObject(state.form)) {
      state.form = createDefaultFormState();
    }

    if (!Array.isArray(state.form.observationIds)) {
      state.form.observationIds = [];
    }

    if (!Array.isArray(state.form.keywords)) {
      state.form.keywords = [];
    }

    return state.form;
  }

  function resetFormState() {
    state.form = createDefaultFormState();
    state.formErrors = {};
    state.formTouched = {};
    state.formPreviewVisible = false;

    try {
      localStorage.removeItem(
        CONFIG.storageKeys.formDraft ||
        "festanca-curation-form-draft"
      );
    } catch (error) {
      console.warn(
        `[${MODULE_NAME}] Não foi possível remover o rascunho.`,
        error
      );
    }
  }

  function getFormDraftStorageKey() {
    return (
      CONFIG.storageKeys.formDraft ||
      "festanca-curation-form-draft"
    );
  }

  function saveFormDraft() {
    const formState = ensureFormState();

    const draft = {
      schemaVersion: "1.0.0",
      savedAt: new Date().toISOString(),
      form: formState
    };

    writeStorage(
      getFormDraftStorageKey(),
      draft
    );

    state.formDraftSavedAt = draft.savedAt;

    updateDraftStatus();

    return draft;
  }

  function loadFormDraft() {
    const storedDraft = readStorage(
      getFormDraftStorageKey(),
      null
    );

    if (
      !isObject(storedDraft) ||
      !isObject(storedDraft.form)
    ) {
      return false;
    }

    state.form = {
      ...createDefaultFormState(),
      ...storedDraft.form,
      observationIds: Array.isArray(
        storedDraft.form.observationIds
      )
        ? storedDraft.form.observationIds
        : [],
      keywords: Array.isArray(
        storedDraft.form.keywords
      )
        ? storedDraft.form.keywords
        : []
    };

    state.formDraftSavedAt =
      storedDraft.savedAt || null;

    return true;
  }

  function scheduleDraftSave() {
    if (state.formDraftTimer) {
      window.clearTimeout(
        state.formDraftTimer
      );
    }

    state.formDraftTimer = window.setTimeout(
      () => {
        saveFormDraft();
      },
      650
    );
  }

  function updateDraftStatus() {
    const draftStatus = query(
      '[data-role="draft-status"]',
      elements.content
    );

    if (!draftStatus) {
      return;
    }

    draftStatus.textContent =
      state.formDraftSavedAt
        ? `Rascunho salvo em ${formatDateTime(
            state.formDraftSavedAt
          )}.`
        : "Rascunho ainda não salvo nesta sessão.";
  }

  /**
   * --------------------------------------------------------------------------
   * COMPONENTES DO FORMULÁRIO
   * --------------------------------------------------------------------------
   */

  function createFormSection({
    id,
    eyebrow,
    title,
    description = "",
    children = []
  }) {
    const section = createElement("section", {
      id,
      className: "fcu-form-section"
    });

    const heading = createElement("header", {
      className: "fcu-form-section__heading"
    });

    heading.append(
      createElement("span", {
        className: "fcu-form-section__eyebrow",
        textContent: eyebrow
      }),
      createElement("h4", {
        className: "fcu-form-section__title",
        textContent: title
      })
    );

    if (description) {
      heading.appendChild(
        createElement("p", {
          className: "fcu-form-section__description",
          textContent: description
        })
      );
    }

    section.appendChild(heading);

    children.forEach((child) => {
      if (child) {
        section.appendChild(child);
      }
    });

    return section;
  }

  function createFieldWrapper({
    fieldName,
    label,
    description = "",
    required = false,
    className = ""
  }) {
    const wrapper = createElement("div", {
      className:
        `fcu-form-field ${className}`.trim(),
      dataset: {
        fieldWrapper: fieldName
      }
    });

    const labelElement = createElement("label", {
      className: "fcu-form-field__label",
      for: `fcu-form-${fieldName}`
    });

    labelElement.appendChild(
      document.createTextNode(label)
    );

    if (required) {
      labelElement.appendChild(
        createElement("span", {
          className: "fcu-form-field__required",
          "aria-label": "campo obrigatório",
          textContent: " *"
        })
      );
    }

    wrapper.appendChild(labelElement);

    if (description) {
      wrapper.appendChild(
        createElement("p", {
          id: `fcu-form-${fieldName}-description`,
          className: "fcu-form-field__description",
          textContent: description
        })
      );
    }

    return wrapper;
  }

  function appendFieldError(
    wrapper,
    fieldName
  ) {
    const error = createElement("p", {
      id: `fcu-form-${fieldName}-error`,
      className: "fcu-form-field__error",
      role: "alert",
      dataset: {
        fieldError: fieldName
      }
    });

    wrapper.appendChild(error);

    return error;
  }

  function createTextInputField({
    fieldName,
    label,
    description = "",
    required = false,
    type = "text",
    placeholder = "",
    maxLength = null,
    autocomplete = "off"
  }) {
    const formState = ensureFormState();

    const wrapper = createFieldWrapper({
      fieldName,
      label,
      description,
      required
    });

    const input = createElement("input", {
      id: `fcu-form-${fieldName}`,
      className: "fcu-form-control",
      name: fieldName,
      type,
      value: formState[fieldName] ?? "",
      placeholder,
      autocomplete,
      dataset: {
        formField: fieldName
      }
    });

    if (maxLength) {
      input.maxLength = maxLength;
    }

    const describedBy = [];

    if (description) {
      describedBy.push(
        `fcu-form-${fieldName}-description`
      );
    }

    describedBy.push(
      `fcu-form-${fieldName}-error`
    );

    input.setAttribute(
      "aria-describedby",
      describedBy.join(" ")
    );

    if (required) {
      input.required = true;
      input.setAttribute(
        "aria-required",
        "true"
      );
    }

    wrapper.appendChild(input);
    appendFieldError(
      wrapper,
      fieldName
    );

    return wrapper;
  }

  function createTextareaField({
    fieldName,
    label,
    description = "",
    required = false,
    placeholder = "",
    rows = 5,
    maxLength = null
  }) {
    const formState = ensureFormState();

    const wrapper = createFieldWrapper({
      fieldName,
      label,
      description,
      required
    });

    const textarea = createElement("textarea", {
      id: `fcu-form-${fieldName}`,
      className: "fcu-form-control fcu-form-control--textarea",
      name: fieldName,
      rows: String(rows),
      placeholder,
      dataset: {
        formField: fieldName
      }
    });

    textarea.value =
      formState[fieldName] ?? "";

    if (maxLength) {
      textarea.maxLength = maxLength;
    }

    const describedBy = [];

    if (description) {
      describedBy.push(
        `fcu-form-${fieldName}-description`
      );
    }

    describedBy.push(
      `fcu-form-${fieldName}-error`
    );

    textarea.setAttribute(
      "aria-describedby",
      describedBy.join(" ")
    );

    if (required) {
      textarea.required = true;
      textarea.setAttribute(
        "aria-required",
        "true"
      );
    }

    wrapper.appendChild(textarea);

    if (maxLength) {
      wrapper.appendChild(
        createElement("small", {
          className: "fcu-form-field__counter",
          dataset: {
            characterCounter: fieldName
          },
          textContent:
            `${textarea.value.length}/${maxLength}`
        })
      );
    }

    appendFieldError(
      wrapper,
      fieldName
    );

    return wrapper;
  }

  function createSelectField({
    fieldName,
    label,
    description = "",
    required = false,
    options = [],
    placeholder = ""
  }) {
    const formState = ensureFormState();

    const wrapper = createFieldWrapper({
      fieldName,
      label,
      description,
      required
    });

    const select = createElement("select", {
      id: `fcu-form-${fieldName}`,
      className: "fcu-form-control",
      name: fieldName,
      dataset: {
        formField: fieldName
      }
    });

    if (placeholder) {
      select.appendChild(
        createElement("option", {
          value: "",
          textContent: placeholder
        })
      );
    }

    options.forEach((option) => {
      select.appendChild(
        createElement("option", {
          value: option.value,
          textContent: option.label
        })
      );
    });

    select.value =
      formState[fieldName] ?? "";

    if (required) {
      select.required = true;
      select.setAttribute(
        "aria-required",
        "true"
      );
    }

    const describedBy = [];

    if (description) {
      describedBy.push(
        `fcu-form-${fieldName}-description`
      );
    }

    describedBy.push(
      `fcu-form-${fieldName}-error`
    );

    select.setAttribute(
      "aria-describedby",
      describedBy.join(" ")
    );

    wrapper.appendChild(select);
    appendFieldError(
      wrapper,
      fieldName
    );

    return wrapper;
  }

  function createCheckboxField({
    fieldName,
    label,
    description = ""
  }) {
    const formState = ensureFormState();

    const wrapper = createElement("div", {
      className: "fcu-checkbox-field",
      dataset: {
        fieldWrapper: fieldName
      }
    });

    const input = createElement("input", {
      id: `fcu-form-${fieldName}`,
      name: fieldName,
      type: "checkbox",
      checked: Boolean(formState[fieldName]),
      dataset: {
        formField: fieldName
      }
    });

    const content = createElement("div", {
      className: "fcu-checkbox-field__content"
    });

    const labelElement = createElement("label", {
      for: `fcu-form-${fieldName}`,
      className: "fcu-checkbox-field__label",
      textContent: label
    });

    content.appendChild(labelElement);

    if (description) {
      content.appendChild(
        createElement("p", {
          className:
            "fcu-checkbox-field__description",
          textContent: description
        })
      );
    }

    wrapper.append(
      input,
      content
    );

    return wrapper;
  }

  function createActivitySelectField() {
    const formState = ensureFormState();

    const wrapper = createFieldWrapper({
      fieldName: "activityId",
      label: "Atividade da Programação Oficial",
      description:
        "Selecione a atividade oficial relacionada ao registro. O vínculo poderá ser alterado posteriormente.",
      required: false
    });

    const select = createElement("select", {
      id: "fcu-form-activityId",
      className: "fcu-form-control",
      name: "activityId",
      dataset: {
        formField: "activityId"
      }
    });

    select.appendChild(
      createElement("option", {
        value: "",
        textContent:
          "Registro sem atividade oficial vinculada"
      })
    );

    state.activities
      .slice()
      .sort((first, second) => {
        const firstDate =
          `${first.date || ""} ${first.startTime || ""}`;

        const secondDate =
          `${second.date || ""} ${second.startTime || ""}`;

        return firstDate.localeCompare(
          secondDate
        );
      })
      .forEach((activity) => {
        const dateLabel = activity.date
          ? formatDate(activity.date)
          : "Data não informada";

        const timeLabel =
          activity.startTime || "horário não informado";

        select.appendChild(
          createElement("option", {
            value: activity.id,
            textContent:
              `${dateLabel} • ${timeLabel} • ${activity.title}`
          })
        );
      });

    select.value = formState.activityId;

    wrapper.appendChild(select);
    appendFieldError(
      wrapper,
      "activityId"
    );

    return wrapper;
  }

  function createObservationSelector() {
    const formState = ensureFormState();

    const wrapper = createElement("div", {
      className: "fcu-observation-selector"
    });

    const heading = createElement("div", {
      className:
        "fcu-observation-selector__heading"
    });

    heading.append(
      createElement("h5", {
        textContent:
          "Observações de campo relacionadas"
      }),
      createElement("span", {
        className: "fcu-badge",
        dataset: {
          observationSelectionCount: "true"
        },
        textContent:
          `${formState.observationIds.length} selecionada${
            formState.observationIds.length === 1
              ? ""
              : "s"
          }`
      })
    );

    wrapper.appendChild(heading);

    if (state.observations.length === 0) {
      wrapper.appendChild(
        createElement("p", {
          className: "fcu-muted-text",
          textContent:
            "Nenhuma observação de campo está disponível no momento."
        })
      );

      return wrapper;
    }

    const searchField = createTextInputField({
      fieldName: "observationSearch",
      label: "Pesquisar observações",
      description:
        "A pesquisa é usada somente nesta tela e não integra o registro.",
      placeholder:
        "Digite título, data ou identificador"
    });

    const searchInput = query(
      '[data-form-field="observationSearch"]',
      searchField
    );

    if (searchInput) {
      searchInput.removeAttribute(
        "data-form-field"
      );

      searchInput.dataset.observationSearch =
        "true";

      searchInput.value =
        state.observationSearch || "";
    }

    wrapper.appendChild(searchField);

    const list = createElement("div", {
      className: "fcu-observation-list",
      dataset: {
        observationList: "true"
      }
    });

    renderObservationOptions(list);

    wrapper.appendChild(list);

    return wrapper;
  }

  function observationMatchesSearch(
    observation,
    searchText
  ) {
    const normalizedSearch =
      normalizeText(searchText);

    if (!normalizedSearch) {
      return true;
    }

    return normalizeText([
      observation.id,
      observation.title,
      observation.date,
      observation.status,
      observation.activityId
    ].join(" ")).includes(normalizedSearch);
  }

  function renderObservationOptions(container) {
    const formState = ensureFormState();

    container.innerHTML = "";

    const filteredObservations =
      state.observations.filter(
        (observation) =>
          observationMatchesSearch(
            observation,
            state.observationSearch || ""
          )
      );

    if (filteredObservations.length === 0) {
      container.appendChild(
        createElement("p", {
          className: "fcu-muted-text",
          textContent:
            "Nenhuma observação corresponde à pesquisa."
        })
      );

      return;
    }

    filteredObservations.forEach(
      (observation) => {
        const label = createElement("label", {
          className: "fcu-observation-option"
        });

        const checkbox = createElement("input", {
          type: "checkbox",
          value: observation.id,
          checked:
            formState.observationIds.includes(
              observation.id
            ),
          dataset: {
            observationId: observation.id
          }
        });

        const content = createElement("span", {
          className:
            "fcu-observation-option__content"
        });

        content.append(
          createElement("strong", {
            textContent: observation.title
          }),
          createElement("small", {
            textContent: [
              observation.date
                ? formatDate(observation.date)
                : "Data não informada",
              observation.id,
              humanizeSlug(observation.status)
            ].join(" • ")
          })
        );

        if (observation.livingHeritage) {
          content.appendChild(
            createBadge(
              "Patrimônio imaterial",
              "success"
            )
          );
        }

        label.append(
          checkbox,
          content
        );

        container.appendChild(label);
      }
    );
  }

  function createKeywordsField() {
    const formState = ensureFormState();

    const wrapper = createFieldWrapper({
      fieldName: "keywordsInput",
      label: "Palavras-chave",
      description:
        "Digite uma palavra ou expressão e pressione Enter ou o botão Adicionar."
    });

    const controls = createElement("div", {
      className: "fcu-keyword-controls"
    });

    const input = createElement("input", {
      id: "fcu-form-keywordsInput",
      className: "fcu-form-control",
      type: "text",
      placeholder:
        "Ex.: Congo, tradição, São Benedito",
      dataset: {
        keywordInput: "true"
      }
    });

    const button = createElement("button", {
      className: "fcu-secondary-button",
      type: "button",
      dataset: {
        action: "add-keyword"
      },
      textContent: "Adicionar"
    });

    controls.append(
      input,
      button
    );

    const list = createElement("div", {
      className: "fcu-keyword-list",
      dataset: {
        keywordList: "true"
      }
    });

    formState.keywords.forEach((keyword) => {
      list.appendChild(
        createKeywordChip(keyword)
      );
    });

    wrapper.append(
      controls,
      list
    );

    return wrapper;
  }

  function createKeywordChip(keyword) {
    const chip = createElement("span", {
      className: "fcu-keyword-chip"
    });

    chip.append(
      createElement("span", {
        textContent: keyword
      }),
      createElement("button", {
        type: "button",
        "aria-label":
          `Remover palavra-chave ${keyword}`,
        dataset: {
          action: "remove-keyword",
          keyword
        },
        textContent: "×"
      })
    );

    return chip;
  }

  function refreshKeywordList() {
    const list = query(
      '[data-keyword-list="true"]',
      elements.content
    );

    if (!list) {
      return;
    }

    list.innerHTML = "";

    ensureFormState().keywords.forEach(
      (keyword) => {
        list.appendChild(
          createKeywordChip(keyword)
        );
      }
    );
  }

  /**
   * --------------------------------------------------------------------------
   * ESTILOS COMPLEMENTARES DO FORMULÁRIO
   * --------------------------------------------------------------------------
   */

  function injectFormStyles() {
    const styleId =
      `${CONFIG.styleId}-form`;

    if (document.getElementById(styleId)) {
      return;
    }

    const style = document.createElement("style");
    style.id = styleId;

    style.textContent = `
      #${CONFIG.rootId} .fcu-curation-form {
        display: grid;
        gap: 18px;
      }

      #${CONFIG.rootId} .fcu-form-intro {
        display: grid;
        gap: 12px;
        padding: 16px;
        border: 1px solid rgba(255, 213, 49, 0.35);
        border-radius: var(--fcu-radius);
        background:
          linear-gradient(
            145deg,
            rgba(41, 47, 27, 0.92),
            rgba(5, 31, 46, 0.96)
          );
      }

      #${CONFIG.rootId} .fcu-form-intro__status {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 10px;
        color: var(--fcu-muted);
      }

      #${CONFIG.rootId} .fcu-form-section {
        display: grid;
        gap: 16px;
        padding: 17px;
        border: 1px solid var(--fcu-border);
        border-radius: var(--fcu-radius);
        background:
          linear-gradient(
            145deg,
            rgba(11, 47, 70, 0.96),
            rgba(4, 25, 41, 0.98)
          );
      }

      #${CONFIG.rootId}
      .fcu-form-section__heading {
        display: grid;
        gap: 5px;
        padding-bottom: 12px;
        border-bottom: 1px solid var(--fcu-border);
      }

      #${CONFIG.rootId}
      .fcu-form-section__eyebrow {
        color: var(--fcu-gold);
        font-size: 0.74rem;
        font-weight: 900;
        letter-spacing: 0.09em;
      }

      #${CONFIG.rootId}
      .fcu-form-section__title {
        margin: 0;
        color: var(--fcu-text);
        font-size: 1.18rem;
      }

      #${CONFIG.rootId}
      .fcu-form-section__description {
        margin: 0;
        color: var(--fcu-muted);
      }

      #${CONFIG.rootId} .fcu-form-grid {
        display: grid;
        grid-template-columns:
          repeat(2, minmax(0, 1fr));
        gap: 14px;
      }

      #${CONFIG.rootId}
      .fcu-form-grid--three {
        grid-template-columns:
          repeat(3, minmax(0, 1fr));
      }

      #${CONFIG.rootId} .fcu-form-field {
        display: grid;
        align-content: start;
        gap: 7px;
      }

      #${CONFIG.rootId}
      .fcu-form-field--full {
        grid-column: 1 / -1;
      }

      #${CONFIG.rootId}
      .fcu-form-field__label {
        color: var(--fcu-text);
        font-weight: 850;
      }

      #${CONFIG.rootId}
      .fcu-form-field__required {
        color: var(--fcu-orange);
      }

      #${CONFIG.rootId}
      .fcu-form-field__description {
        margin: 0;
        color: var(--fcu-muted);
        font-size: 0.82rem;
      }

      #${CONFIG.rootId} .fcu-form-control {
        width: 100%;
        min-height: 48px;
        padding: 11px 12px;
        border: 1px solid var(--fcu-border);
        border-radius: 12px;
        outline: none;
        background: rgba(0, 13, 23, 0.82);
        color: var(--fcu-text);
        font: inherit;
      }

      #${CONFIG.rootId}
      .fcu-form-control:focus {
        border-color: var(--fcu-gold);
        box-shadow:
          0 0 0 3px rgba(255, 213, 49, 0.13);
      }

      #${CONFIG.rootId}
      .fcu-form-control--textarea {
        min-height: 120px;
        resize: vertical;
        line-height: 1.55;
      }

      #${CONFIG.rootId}
      .fcu-form-field[data-invalid="true"]
      .fcu-form-control {
        border-color: #ff7f7f;
        box-shadow:
          0 0 0 2px rgba(255, 90, 90, 0.12);
      }

      #${CONFIG.rootId}
      .fcu-form-field__error {
        min-height: 1em;
        margin: 0;
        color: #ffaaaa;
        font-size: 0.79rem;
        font-weight: 750;
      }

      #${CONFIG.rootId}
      .fcu-form-field__counter {
        justify-self: end;
        color: var(--fcu-muted);
      }

      #${CONFIG.rootId}
      .fcu-checkbox-grid {
        display: grid;
        grid-template-columns:
          repeat(auto-fit, minmax(230px, 1fr));
        gap: 10px;
      }

      #${CONFIG.rootId}
      .fcu-checkbox-field {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: start;
        gap: 11px;
        padding: 12px;
        border: 1px solid var(--fcu-border);
        border-radius: 12px;
        background: rgba(0, 0, 0, 0.14);
      }

      #${CONFIG.rootId}
      .fcu-checkbox-field input {
        width: 21px;
        height: 21px;
        margin-top: 2px;
        accent-color: var(--fcu-gold);
      }

      #${CONFIG.rootId}
      .fcu-checkbox-field__content {
        display: grid;
        gap: 4px;
      }

      #${CONFIG.rootId}
      .fcu-checkbox-field__label {
        color: var(--fcu-text);
        font-weight: 800;
      }

      #${CONFIG.rootId}
      .fcu-checkbox-field__description {
        margin: 0;
        color: var(--fcu-muted);
        font-size: 0.8rem;
      }

      #${CONFIG.rootId}
      .fcu-observation-selector {
        display: grid;
        gap: 13px;
      }

      #${CONFIG.rootId}
      .fcu-observation-selector__heading {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
      }

      #${CONFIG.rootId}
      .fcu-observation-selector__heading h5 {
        margin: 0;
        color: var(--fcu-text);
        font-size: 1rem;
      }

      #${CONFIG.rootId}
      .fcu-observation-list {
        display: grid;
        gap: 9px;
        max-height: 390px;
        overflow: auto;
        padding-right: 4px;
      }

      #${CONFIG.rootId}
      .fcu-observation-option {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: start;
        gap: 11px;
        padding: 12px;
        border: 1px solid var(--fcu-border);
        border-radius: 12px;
        background: rgba(0, 0, 0, 0.15);
        cursor: pointer;
      }

      #${CONFIG.rootId}
      .fcu-observation-option:has(input:checked) {
        border-color: rgba(67, 224, 141, 0.55);
        background: rgba(67, 224, 141, 0.08);
      }

      #${CONFIG.rootId}
      .fcu-observation-option input {
        width: 21px;
        height: 21px;
        accent-color: var(--fcu-green);
      }

      #${CONFIG.rootId}
      .fcu-observation-option__content {
        display: grid;
        gap: 5px;
        min-width: 0;
      }

      #${CONFIG.rootId}
      .fcu-observation-option__content strong {
        color: var(--fcu-text);
      }

      #${CONFIG.rootId}
      .fcu-observation-option__content small {
        color: var(--fcu-muted);
      }

      #${CONFIG.rootId}
      .fcu-keyword-controls {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 9px;
      }

      #${CONFIG.rootId}
      .fcu-keyword-list {
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
      }

      #${CONFIG.rootId}
      .fcu-keyword-chip {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        min-height: 31px;
        padding: 5px 8px 5px 11px;
        border: 1px solid rgba(255, 213, 49, 0.4);
        border-radius: 999px;
        background: rgba(255, 213, 49, 0.08);
        color: var(--fcu-text);
        font-size: 0.8rem;
      }

      #${CONFIG.rootId}
      .fcu-keyword-chip button {
        display: grid;
        place-items: center;
        width: 24px;
        height: 24px;
        padding: 0;
        border: 0;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.09);
        color: var(--fcu-text);
        cursor: pointer;
      }

      #${CONFIG.rootId}
      .fcu-form-actions {
        position: sticky;
        bottom: 0;
        z-index: 3;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 10px;
        padding: 13px;
        border: 1px solid var(--fcu-border);
        border-radius: var(--fcu-radius);
        background: rgba(2, 19, 31, 0.97);
        box-shadow:
          0 -10px 30px rgba(0, 0, 0, 0.28);
      }

      #${CONFIG.rootId}
      .fcu-form-actions__group {
        display: flex;
        flex-wrap: wrap;
        gap: 9px;
      }

      #${CONFIG.rootId}
      .fcu-form-validation-summary {
        display: none;
        gap: 8px;
        padding: 14px;
        border: 1px solid rgba(255, 90, 90, 0.52);
        border-radius: 12px;
        background: rgba(94, 18, 18, 0.2);
        color: #ffd1d1;
      }

      #${CONFIG.rootId}
      .fcu-form-validation-summary[data-visible="true"] {
        display: grid;
      }

      #${CONFIG.rootId}
      .fcu-form-validation-summary h5 {
        margin: 0;
        color: #fff;
      }

      #${CONFIG.rootId}
      .fcu-form-validation-summary ul {
        margin: 0;
        padding-left: 20px;
      }

      #${CONFIG.rootId}
      .fcu-preview-grid {
        display: grid;
        gap: 12px;
      }

      #${CONFIG.rootId}
      .fcu-preview-block {
        display: grid;
        gap: 6px;
        padding: 13px;
        border: 1px solid var(--fcu-border);
        border-radius: 12px;
        background: rgba(0, 0, 0, 0.15);
      }

      #${CONFIG.rootId}
      .fcu-preview-block strong {
        color: var(--fcu-gold);
      }

      #${CONFIG.rootId}
      .fcu-preview-block p {
        margin: 0;
        white-space: pre-wrap;
        color: var(--fcu-text);
      }

      @media (max-width: 780px) {
        #${CONFIG.rootId} .fcu-form-grid,
        #${CONFIG.rootId}
        .fcu-form-grid--three {
          grid-template-columns: 1fr;
        }

        #${CONFIG.rootId}
        .fcu-keyword-controls {
          grid-template-columns: 1fr;
        }

        #${CONFIG.rootId}
        .fcu-keyword-controls button {
          width: 100%;
        }

        #${CONFIG.rootId}
        .fcu-form-actions {
          position: static;
        }

        #${CONFIG.rootId}
        .fcu-form-actions,
        #${CONFIG.rootId}
        .fcu-form-actions__group {
          display: grid;
          grid-template-columns: 1fr;
          width: 100%;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /**
   * --------------------------------------------------------------------------
   * CONSTRUÇÃO DO FORMULÁRIO
   * --------------------------------------------------------------------------
   */

  function renderCreateRecordView() {
    if (!elements.content) {
      return;
    }

    ensureFormState();
    elements.content.innerHTML = "";

    const section = createElement("section", {
      dataset: {
        view: CONFIG.views.create
      }
    });

    section.appendChild(
      createSectionHeading(
        "CRÔNICA DIGITAL",
        "Criar Registro Histórico",
        "Transforme observações, relatos, documentos e acontecimentos da FESTANÇA 2026 em memória histórica organizada e preservável."
      )
    );

    const form = createElement("form", {
      className: "fcu-curation-form",
      novalidate: "novalidate",
      dataset: {
        curationForm: "true"
      }
    });

    const intro = createElement("div", {
      className: "fcu-form-intro"
    });

    intro.append(
      createElement("strong", {
        textContent:
          "O registro poderá permanecer como rascunho até que sua validação e autorização sejam concluídas."
      }),
      createElement("p", {
        className: "fcu-muted-text",
        textContent:
          "Diferencie fatos observados, interpretações, memórias orais e informações ainda não confirmadas. Não exponha residências privadas, crianças ou conhecimentos protegidos sem autorização."
      })
    );

    const introStatus = createElement("div", {
      className: "fcu-form-intro__status"
    });

    introStatus.append(
      createElement("span", {
        dataset: {
          role: "draft-status"
        },
        textContent:
          state.formDraftSavedAt
            ? `Rascunho salvo em ${formatDateTime(
                state.formDraftSavedAt
              )}.`
            : "Rascunho ainda não salvo nesta sessão."
      }),
      createBadge(
        "Curadoria responsável",
        "protected"
      )
    );

    intro.appendChild(introStatus);
    form.appendChild(intro);

    const validationSummary =
      createElement("section", {
        className:
          "fcu-form-validation-summary",
        role: "alert",
        dataset: {
          validationSummary: "true",
          visible: "false"
        }
      });

    validationSummary.append(
      createElement("h5", {
        textContent:
          "Revise os campos indicados"
      }),
      createElement("ul", {
        dataset: {
          validationErrorList: "true"
        }
      })
    );

    form.appendChild(validationSummary);

    const identificationGrid = createElement("div", {
      className: "fcu-form-grid"
    });

    identificationGrid.append(
      createTextInputField({
        fieldName: "title",
        label: "Título do registro",
        description:
          "Use um título objetivo, fiel ao acontecimento e compreensível fora do contexto imediato.",
        required: true,
        placeholder:
          "Ex.: Reza Cantada na casa do Capitão do Mastro",
        maxLength: 180
      }),
      createTextInputField({
        fieldName: "eventDate",
        label: "Data do acontecimento",
        description:
          "Informe a data observada ou documentada.",
        required: true,
        type: "date"
      }),
      createSelectField({
        fieldName: "recordType",
        label: "Tipo de registro",
        description:
          "Classifique a natureza principal do acontecimento.",
        required: true,
        options: CURATION_RECORD_TYPES
      }),
      createSelectField({
        fieldName: "sourceType",
        label: "Origem principal",
        description:
          "Indique a principal fonte usada na criação do registro.",
        required: true,
        options: SOURCE_TYPES
      })
    );

    const activityField =
      createActivitySelectField();

    activityField.classList.add(
      "fcu-form-field--full"
    );

    identificationGrid.appendChild(
      activityField
    );

    form.appendChild(
      createFormSection({
        id: "fcu-create-identification",
        eyebrow: "ETAPA 1",
        title: "Identificação do acontecimento",
        description:
          "Defina o que aconteceu, quando ocorreu e sua relação com a programação oficial.",
        children: [
          identificationGrid
        ]
      })
    );

    const narrativeGrid = createElement("div", {
      className: "fcu-form-grid"
    });

    const summaryField =
      createTextareaField({
        fieldName: "summary",
        label: "Resumo factual",
        description:
          "Registre o acontecimento em poucas linhas, sem interpretações não identificadas.",
        required: true,
        placeholder:
          "Descreva resumidamente o que ocorreu, onde, quando e quem participou.",
        rows: 5,
        maxLength: 900
      });

    const narrativeField =
      createTextareaField({
        fieldName: "narrative",
        label: "Narrativa histórica",
        description:
          "Desenvolva a crônica com contexto, sequência dos fatos, ambiente cultural e significado comunitário.",
        required: true,
        placeholder:
          "Narre o acontecimento com fidelidade, clareza e respeito à memória comunitária.",
        rows: 10,
        maxLength: 7000
      });

    summaryField.classList.add(
      "fcu-form-field--full"
    );

    narrativeField.classList.add(
      "fcu-form-field--full"
    );

    narrativeGrid.append(
      summaryField,
      narrativeField
    );

    const factInterpretationGrid =
      createElement("div", {
        className: "fcu-form-grid"
      });

    factInterpretationGrid.append(
      createTextareaField({
        fieldName: "factualBasis",
        label: "Base factual observada",
        description:
          "Liste fatos diretamente observados, documentados ou confirmados.",
        placeholder:
          "Ex.: Horário observado; presença dos grupos; local; sequência da cerimônia.",
        rows: 5
      }),
      createTextareaField({
        fieldName: "interpretation",
        label: "Interpretação curatorial",
        description:
          "Registre análises e significados separadamente dos fatos.",
        placeholder:
          "Ex.: O acontecimento reforça a transmissão intergeracional da tradição.",
        rows: 5
      }),
      createTextareaField({
        fieldName: "uncertainties",
        label: "Incertezas e questões pendentes",
        description:
          "Indique informações que ainda precisam de confirmação.",
        placeholder:
          "Ex.: Nome completo de participante ainda não confirmado.",
        rows: 4
      }),
      createTextareaField({
        fieldName: "oralHistoryNotes",
        label: "Oralidade e depoimentos",
        description:
          "Registre falas resumidas, memórias orais ou referências a entrevistas. Evite atribuição sem autorização.",
        placeholder:
          "Informe quem relatou, contexto da fala e situação da autorização.",
        rows: 4
      })
    );

    form.appendChild(
      createFormSection({
        id: "fcu-create-narrative",
        eyebrow: "ETAPA 2",
        title: "Fatos, narrativa e interpretação",
        description:
          "Preserve a distinção entre observação direta, relato oral, interpretação e informação ainda não validada.",
        children: [
          narrativeGrid,
          factInterpretationGrid
        ]
      })
    );

    const culturalGrid = createElement("div", {
      className:
        "fcu-form-grid fcu-form-grid--three"
    });

    culturalGrid.append(
      createSelectField({
        fieldName: "culturalDimension",
        label: "Dimensão cultural",
        description:
          "Selecione o eixo cultural predominante.",
        required: true,
        options: CULTURAL_DIMENSIONS
      }),
      createSelectField({
        fieldName: "heritageNature",
        label: "Natureza patrimonial",
        description:
          "Identifique se o registro envolve patrimônio material, imaterial ou misto.",
        required: true,
        options: HERITAGE_NATURES
      }),
      createSelectField({
        fieldName: "validationLevel",
        label: "Nível inicial de validação",
        description:
          "A classificação poderá evoluir durante a Curadoria Histórica.",
        required: true,
        options: VALIDATION_LEVELS
      })
    );

    const contextGrid = createElement("div", {
      className: "fcu-form-grid"
    });

    contextGrid.append(
      createTextareaField({
        fieldName: "communityContext",
        label: "Contexto comunitário",
        description:
          "Explique a relação do acontecimento com a comunidade, famílias, grupos e tradições locais.",
        placeholder:
          "Registre vínculos comunitários e formas de participação.",
        rows: 5
      }),
      createTextareaField({
        fieldName: "historicalContext",
        label: "Contexto histórico",
        description:
          "Relacione o acontecimento com a história da Festança e de Vila Bela.",
        placeholder:
          "Inclua antecedentes, permanências e transformações históricas conhecidas.",
        rows: 5
      })
    );

    form.appendChild(
      createFormSection({
        id: "fcu-create-cultural",
        eyebrow: "ETAPA 3",
        title: "Patrimônio e identidade cultural",
        description:
          "Classifique o registro e preserve sua relação com a memória viva da comunidade.",
        children: [
          culturalGrid,
          contextGrid,
          createKeywordsField()
        ]
      })
    );

    form.appendChild(
      createFormSection({
        id: "fcu-create-observations",
        eyebrow: "ETAPA 4",
        title: "Vínculos com o Diário de Campo",
        description:
          "Selecione uma ou mais observações que sustentam ou complementam o registro.",
        children: [
          createObservationSelector()
        ]
      })
    );

    const privacyGrid = createElement("div", {
      className:
        "fcu-form-grid fcu-form-grid--three"
    });

    privacyGrid.append(
      createSelectField({
        fieldName: "privacyLevel",
        label: "Nível de privacidade",
        description:
          "Defina o nível de acesso ao registro.",
        required: true,
        options: PRIVACY_LEVELS
      }),
      createSelectField({
        fieldName: "consentStatus",
        label: "Situação do consentimento",
        description:
          "Informe a situação de autorização das pessoas envolvidas.",
        required: true,
        options: CONSENT_STATUSES
      }),
      createSelectField({
        fieldName:
          "publicationAuthorization",
        label: "Autorização de publicação",
        description:
          "Indique se o conteúdo poderá ser publicado ou permanecerá restrito.",
        required: true,
        options:
          PUBLICATION_AUTHORIZATIONS
      })
    );

    const protectionChecks =
      createElement("div", {
        className: "fcu-checkbox-grid"
      });

    protectionChecks.append(
      createCheckboxField({
        fieldName: "containsChildren",
        label: "Contém crianças ou adolescentes",
        description:
          "Exige atenção especial à imagem, identificação e autorização."
      }),
      createCheckboxField({
        fieldName:
          "containsPrivateResidence",
        label: "Contém residência privada",
        description:
          "Não publicar ponto exato, endereço ou rota sem autorização."
      }),
      createCheckboxField({
        fieldName:
          "containsSacredOrRestrictedKnowledge",
        label:
          "Contém conhecimento sagrado ou restrito",
        description:
          "O acesso e a publicação devem respeitar os responsáveis culturais."
      }),
      createCheckboxField({
        fieldName: "containsPersonalData",
        label: "Contém dados pessoais",
        description:
          "Nomes, contatos, documentos ou outras informações identificáveis."
      }),
      createCheckboxField({
        fieldName:
          "containsSensitivePersonalData",
        label: "Contém dados pessoais sensíveis",
        description:
          "Requer proteção reforçada e análise antes da publicação."
      })
    );

    form.appendChild(
      createFormSection({
        id: "fcu-create-protection",
        eyebrow: "ETAPA 5",
        title: "Privacidade, consentimento e proteção",
        description:
          "A preservação histórica deve caminhar junto com o respeito às pessoas, residências e conhecimentos culturais.",
        children: [
          privacyGrid,
          protectionChecks
        ]
      })
    );

    const provenanceGrid =
      createElement("div", {
        className: "fcu-form-grid"
      });

    provenanceGrid.append(
      createTextareaField({
        fieldName: "credits",
        label: "Créditos e responsáveis",
        description:
          "Informe cronistas, fotógrafos, entrevistados, curadores e fontes autorizadas.",
        placeholder:
          "Ex.: Observação e registro: Antonio Décio Ferreira Coelho.",
        rows: 4
      }),
      createTextareaField({
        fieldName: "notes",
        label: "Notas internas",
        description:
          "Use para orientações de curadoria, pendências e informações não destinadas à publicação.",
        placeholder:
          "Ex.: Confirmar nome oficial do grupo antes da publicação.",
        rows: 4
      })
    );

    form.appendChild(
      createFormSection({
        id: "fcu-create-provenance",
        eyebrow: "ETAPA 6",
        title: "Proveniência e responsabilidade",
        description:
          "Registre quem produziu, forneceu, validou ou contribuiu com as informações.",
        children: [
          provenanceGrid
        ]
      })
    );

    const actions = createElement("div", {
      className: "fcu-form-actions"
    });

    const secondaryActions =
      createElement("div", {
        className:
          "fcu-form-actions__group"
      });

    secondaryActions.append(
      createElement("button", {
        type: "button",
        className: "fcu-secondary-button",
        dataset: {
          action: "save-form-draft"
        },
        textContent: "Salvar rascunho"
      }),
      createElement("button", {
        type: "button",
        className: "fcu-secondary-button",
        dataset: {
          action: "reset-form"
        },
        textContent: "Limpar formulário"
      })
    );

    const primaryActions =
      createElement("div", {
        className:
          "fcu-form-actions__group"
      });

    primaryActions.append(
      createElement("button", {
        type: "button",
        className: "fcu-secondary-button",
        dataset: {
          action: "preview-record"
        },
        textContent: "Visualizar prévia"
      }),
      createElement("button", {
        type: "submit",
        className: "fcu-primary-button",
        textContent:
          "Criar registro histórico"
      })
    );

    actions.append(
      secondaryActions,
      primaryActions
    );

    form.appendChild(actions);
    section.appendChild(form);
    elements.content.appendChild(section);

    updateAllCharacterCounters();
    displayFormErrors();
  }

  /**
   * --------------------------------------------------------------------------
   * CAPTURA E SINCRONIZAÇÃO DOS CAMPOS
   * --------------------------------------------------------------------------
   */

  function parseFieldValue(target) {
    if (
      target instanceof HTMLInputElement &&
      target.type === "checkbox"
    ) {
      return target.checked;
    }

    return target.value;
  }

  function updateFormFieldFromTarget(target) {
    const fieldName = asText(
      target?.dataset?.formField
    );

    if (!fieldName) {
      return false;
    }

    const formState = ensureFormState();

    formState[fieldName] =
      parseFieldValue(target);

    state.formTouched = {
      ...(state.formTouched || {}),
      [fieldName]: true
    };

    updateCharacterCounter(
      fieldName,
      target
    );

    const fieldErrors =
      validateFormField(
        fieldName,
        formState[fieldName],
        formState
      );

    state.formErrors = {
      ...(state.formErrors || {}),
      [fieldName]:
        fieldErrors.length > 0
          ? fieldErrors[0]
          : ""
    };

    displayFieldError(fieldName);
    scheduleDraftSave();

    return true;
  }

  function updateCharacterCounter(
    fieldName,
    target = null
  ) {
    const counter = query(
      `[data-character-counter="${fieldName}"]`,
      elements.content
    );

    if (!counter) {
      return;
    }

    const control =
      target ||
      query(
        `[data-form-field="${fieldName}"]`,
        elements.content
      );

    if (!control) {
      return;
    }

    const maxLength = control.maxLength;

    if (
      !Number.isFinite(maxLength) ||
      maxLength <= 0
    ) {
      return;
    }

    counter.textContent =
      `${control.value.length}/${maxLength}`;
  }

  function updateAllCharacterCounters() {
    queryAll(
      "[data-character-counter]",
      elements.content
    ).forEach((counter) => {
      const fieldName =
        counter.dataset.characterCounter;

      updateCharacterCounter(fieldName);
    });
  }

  function updateObservationSelectionCount() {
    const counter = query(
      "[data-observation-selection-count]",
      elements.content
    );

    if (!counter) {
      return;
    }

    const count =
      ensureFormState().observationIds.length;

    counter.textContent =
      `${count} selecionada${count === 1 ? "" : "s"}`;
  }

  function handleObservationSelection(target) {
    const observationId = asText(
      target?.dataset?.observationId
    );

    if (!observationId) {
      return false;
    }

    const formState = ensureFormState();

    const selectedIds =
      new Set(formState.observationIds);

    if (target.checked) {
      selectedIds.add(observationId);
    } else {
      selectedIds.delete(observationId);
    }

    formState.observationIds = [
      ...selectedIds
    ];

    updateObservationSelectionCount();
    scheduleDraftSave();

    return true;
  }

  function handleObservationSearch(target) {
    if (
      target?.dataset?.observationSearch !==
      "true"
    ) {
      return false;
    }

    state.observationSearch = target.value;

    const list = query(
      '[data-observation-list="true"]',
      elements.content
    );

    if (list) {
      renderObservationOptions(list);
    }

    return true;
  }

  /**
   * --------------------------------------------------------------------------
   * PALAVRAS-CHAVE
   * --------------------------------------------------------------------------
   */

  function normalizeKeyword(value) {
    return String(value || "")
      .trim()
      .replace(/\s+/g, " ");
  }

  function addKeywordFromInput() {
    const input = query(
      '[data-keyword-input="true"]',
      elements.content
    );

    if (!input) {
      return;
    }

    const keyword =
      normalizeKeyword(input.value);

    if (!keyword) {
      notify(
        "Digite uma palavra-chave antes de adicionar.",
        "warning"
      );

      input.focus();

      return;
    }

    const formState = ensureFormState();

    const alreadyExists =
      formState.keywords.some(
        (item) =>
          normalizeText(item) ===
          normalizeText(keyword)
      );

    if (alreadyExists) {
      notify(
        "Esta palavra-chave já foi adicionada.",
        "warning"
      );

      input.value = "";
      input.focus();

      return;
    }

    formState.keywords.push(keyword);
    input.value = "";

    refreshKeywordList();
    scheduleDraftSave();
    input.focus();
  }

  function removeKeyword(keyword) {
    const normalizedKeyword =
      normalizeText(keyword);

    const formState = ensureFormState();

    formState.keywords =
      formState.keywords.filter(
        (item) =>
          normalizeText(item) !==
          normalizedKeyword
      );

    refreshKeywordList();
    scheduleDraftSave();
  }

  /**
   * --------------------------------------------------------------------------
   * VALIDAÇÃO DO FORMULÁRIO
   * --------------------------------------------------------------------------
   */

  function validateFormField(
    fieldName,
    value,
    formState = ensureFormState()
  ) {
    const errors = [];
    const textValue =
      typeof value === "string"
        ? value.trim()
        : value;

    switch (fieldName) {
      case "title":
        if (!textValue) {
          errors.push(
            "Informe o título do registro."
          );
        } else if (textValue.length < 8) {
          errors.push(
            "O título deve ter pelo menos 8 caracteres."
          );
        }
        break;

      case "eventDate":
        if (!textValue) {
          errors.push(
            "Informe a data do acontecimento."
          );
        } else if (
          Number.isNaN(
            new Date(`${textValue}T12:00:00`)
              .getTime()
          )
        ) {
          errors.push(
            "A data informada não é válida."
          );
        }
        break;

      case "recordType":
        if (!textValue) {
          errors.push(
            "Selecione o tipo de registro."
          );
        }
        break;

      case "sourceType":
        if (!textValue) {
          errors.push(
            "Selecione a origem principal."
          );
        }
        break;

      case "summary":
        if (!textValue) {
          errors.push(
            "Informe o resumo factual."
          );
        } else if (textValue.length < 30) {
          errors.push(
            "O resumo deve ter pelo menos 30 caracteres."
          );
        }
        break;

      case "narrative":
        if (!textValue) {
          errors.push(
            "Informe a narrativa histórica."
          );
        } else if (textValue.length < 80) {
          errors.push(
            "A narrativa deve ter pelo menos 80 caracteres."
          );
        }
        break;

      case "culturalDimension":
        if (!textValue) {
          errors.push(
            "Selecione a dimensão cultural."
          );
        }
        break;

      case "heritageNature":
        if (!textValue) {
          errors.push(
            "Selecione a natureza patrimonial."
          );
        }
        break;

      case "validationLevel":
        if (!textValue) {
          errors.push(
            "Selecione o nível inicial de validação."
          );
        }
        break;

      case "privacyLevel":
        if (!textValue) {
          errors.push(
            "Selecione o nível de privacidade."
          );
        }
        break;

      case "consentStatus":
        if (!textValue) {
          errors.push(
            "Informe a situação do consentimento."
          );
        }
        break;

      case "publicationAuthorization":
        if (!textValue) {
          errors.push(
            "Informe a autorização de publicação."
          );
        }
        break;

      default:
        break;
    }

    if (
      fieldName === "privacyLevel" ||
      fieldName === "publicationAuthorization" ||
      fieldName === "consentStatus"
    ) {
      if (
        formState.containsPrivateResidence &&
        formState.privacyLevel === "publico"
      ) {
        errors.push(
          "Registros com residência privada não devem permanecer como públicos sem análise territorial."
        );
      }

      if (
        formState.containsChildren &&
        formState.publicationAuthorization ===
          "autorizado" &&
        formState.consentStatus ===
          "nao-verificado"
      ) {
        errors.push(
          "Confirme o consentimento antes de autorizar conteúdo envolvendo crianças ou adolescentes."
        );
      }

      if (
        formState.containsSensitivePersonalData &&
        formState.privacyLevel === "publico"
      ) {
        errors.push(
          "Dados pessoais sensíveis exigem nível de privacidade protegido ou restrito."
        );
      }

      if (
        formState.containsSacredOrRestrictedKnowledge &&
        formState.publicationAuthorization ===
          "autorizado"
      ) {
        errors.push(
          "Conhecimento sagrado ou restrito exige análise específica antes da publicação."
        );
      }
    }

    return errors;
  }

  function validateCompleteForm() {
    const formState = ensureFormState();

    const requiredFields = [
      "title",
      "eventDate",
      "recordType",
      "sourceType",
      "summary",
      "narrative",
      "culturalDimension",
      "heritageNature",
      "validationLevel",
      "privacyLevel",
      "consentStatus",
      "publicationAuthorization"
    ];

    const errors = {};

    requiredFields.forEach((fieldName) => {
      const fieldErrors =
        validateFormField(
          fieldName,
          formState[fieldName],
          formState
        );

      if (fieldErrors.length > 0) {
        errors[fieldName] =
          fieldErrors[0];
      }
    });

    [
      "privacyLevel",
      "consentStatus",
      "publicationAuthorization"
    ].forEach((fieldName) => {
      const fieldErrors =
        validateFormField(
          fieldName,
          formState[fieldName],
          formState
        );

      if (
        fieldErrors.length > 0 &&
        !errors[fieldName]
      ) {
        errors[fieldName] =
          fieldErrors[0];
      }
    });

    state.formErrors = errors;

    Object.keys(errors).forEach(
      (fieldName) => {
        state.formTouched = {
          ...(state.formTouched || {}),
          [fieldName]: true
        };
      }
    );

    displayFormErrors();

    return {
      valid: Object.keys(errors).length === 0,
      errors
    };
  }

  function displayFieldError(fieldName) {
    const errorElement = query(
      `[data-field-error="${fieldName}"]`,
      elements.content
    );

    const wrapper = query(
      `[data-field-wrapper="${fieldName}"]`,
      elements.content
    );

    const control = query(
      `[data-form-field="${fieldName}"]`,
      elements.content
    );

    const errorMessage =
      state.formErrors?.[fieldName] || "";

    if (errorElement) {
      errorElement.textContent =
        errorMessage;
    }

    if (wrapper) {
      wrapper.dataset.invalid =
        errorMessage ? "true" : "false";
    }

    if (control) {
      control.setAttribute(
        "aria-invalid",
        errorMessage ? "true" : "false"
      );
    }
  }

  function displayFormErrors() {
    const errors =
      state.formErrors || {};

    const fieldNames = new Set([
      ...Object.keys(
        CURATION_FORM_DEFAULTS
      ),
      ...Object.keys(errors)
    ]);

    fieldNames.forEach(
      displayFieldError
    );

    const summary = query(
      '[data-validation-summary="true"]',
      elements.content
    );

    const list = query(
      '[data-validation-error-list="true"]',
      elements.content
    );

    if (!summary || !list) {
      return;
    }

    const entries =
      Object.entries(errors).filter(
        ([, message]) => Boolean(message)
      );

    summary.dataset.visible =
      entries.length > 0
        ? "true"
        : "false";

    list.innerHTML = "";

    entries.forEach(
      ([fieldName, message]) => {
        const item =
          createElement("li");

        const button = createElement("button", {
          type: "button",
          className:
            "fcu-link-button",
          dataset: {
            action: "focus-form-field",
            fieldName
          },
          textContent: message
        });

        item.appendChild(button);
        list.appendChild(item);
      }
    );
  }

  function focusFormField(fieldName) {
    const field = document.getElementById(
      `fcu-form-${fieldName}`
    );

    if (!field) {
      return;
    }

    field.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    window.setTimeout(
      () => field.focus(),
      350
    );
  }

  /**
   * --------------------------------------------------------------------------
   * PREPARAÇÃO DO REGISTRO PARA O MOTOR
   * --------------------------------------------------------------------------
   */

  function findActivityForForm() {
    const activityId =
      ensureFormState().activityId;

    if (!activityId) {
      return null;
    }

    return (
      state.activities.find(
        (activity) =>
          activity.id === activityId
      ) || null
    );
  }

  function findSelectedObservations() {
    const selectedIds = new Set(
      ensureFormState().observationIds
    );

    return state.observations.filter(
      (observation) =>
        selectedIds.has(observation.id)
    );
  }

  function buildCurationRecordPayload() {
    const formState = ensureFormState();
    const now = new Date().toISOString();
    const activity = findActivityForForm();
    const observations =
      findSelectedObservations();

    return {
      schemaVersion: "1.0.0",

      identity: {
        recordId: null,
        title: formState.title.trim(),
        recordType: formState.recordType,
        status: "rascunho",
        currentStage:
          "registro-inicial"
      },

      temporalContext: {
        eventDate: formState.eventDate,
        createdAt: now,
        updatedAt: null
      },

      summary: {
        text: formState.summary.trim()
      },

      narrative: {
        historicalNarrative:
          formState.narrative.trim(),
        factualBasis:
          formState.factualBasis.trim(),
        curatorialInterpretation:
          formState.interpretation.trim(),
        uncertainties:
          formState.uncertainties.trim(),
        oralHistoryNotes:
          formState.oralHistoryNotes.trim()
      },

      culturalContext: {
        culturalDimension:
          formState.culturalDimension,
        heritageNature:
          formState.heritageNature,
        communityContext:
          formState.communityContext.trim(),
        historicalContext:
          formState.historicalContext.trim(),
        keywords: [
          ...formState.keywords
        ]
      },

      source: {
        type: formState.sourceType,
        activityId:
          formState.activityId || null,
        observationIds: [
          ...formState.observationIds
        ]
      },

      relationships: {
        activity: activity
          ? {
              id: activity.id,
              title: activity.title,
              date: activity.date,
              startTime:
                activity.startTime
            }
          : null,
        fieldObservations:
          observations.map(
            (observation) => ({
              id: observation.id,
              title: observation.title,
              date: observation.date,
              status: observation.status
            })
          )
      },

      privacy: {
        level: formState.privacyLevel,
        consentStatus:
          formState.consentStatus,
        publicationAuthorization:
          formState.publicationAuthorization,
        locationDisclosure:
          formState.locationDisclosure,
        containsChildren:
          Boolean(
            formState.containsChildren
          ),
        containsPrivateResidence:
          Boolean(
            formState
              .containsPrivateResidence
          ),
        containsSacredOrRestrictedKnowledge:
          Boolean(
            formState
              .containsSacredOrRestrictedKnowledge
          ),
        containsPersonalData:
          Boolean(
            formState.containsPersonalData
          ),
        containsSensitivePersonalData:
          Boolean(
            formState
              .containsSensitivePersonalData
          )
      },

      validation: {
        status: "rascunho",
        level:
          formState.validationLevel,
        validatedBy: null,
        validatedAt: null,
        conflictingInformation: [],
        pendingQuestions:
          formState.uncertainties.trim()
            ? [
                formState.uncertainties.trim()
              ]
            : []
      },

      provenance: {
        origin:
          formState.sourceType,
        credits:
          formState.credits.trim()
            ? [formState.credits.trim()]
            : [],
        createdBy:
          formState.credits.trim() ||
          "Cronista Digital da FESTANÇA 2026",
        createdAt: now,
        updatedBy: null,
        updatedAt: null,
        revision: 1
      },

      preservation: {
        status: "em-processamento",
        permanentMemoryEligible:
          false,
        eligibilityReasons: [],
        retentionPolicy:
          "permanente",
        originalRecordsMustBePreserved:
          true,
        silentDeletionForbidden:
          true,
        revisionHistoryRequired:
          true
      },

      editorial: {
        notes:
          formState.notes.trim() ||
          null
      }
    };
  }

  /**
   * --------------------------------------------------------------------------
   * PRÉVIA DO REGISTRO
   * --------------------------------------------------------------------------
   */

  function createPreviewBlock(
    label,
    content
  ) {
    const block = createElement("div", {
      className: "fcu-preview-block"
    });

    block.append(
      createElement("strong", {
        textContent: label
      }),
      createElement("p", {
        textContent:
          content || "Não informado."
      })
    );

    return block;
  }

  function renderRecordPreview() {
    const validation =
      validateCompleteForm();

    if (!validation.valid) {
      const firstField =
        Object.keys(
          validation.errors
        )[0];

      notify(
        "Revise os campos obrigatórios antes de visualizar a prévia.",
        "warning"
      );

      if (firstField) {
        focusFormField(firstField);
      }

      return;
    }

    const payload =
      buildCurationRecordPayload();

    elements.content.innerHTML = "";

    const section = createElement("section", {
      dataset: {
        view: "record-preview"
      }
    });

    section.appendChild(
      createSectionHeading(
        "PRÉVIA CURATORIAL",
        payload.identity.title,
        "Revise o conteúdo antes de criar o registro no repositório histórico."
      )
    );

    const statusCard = createElement("section", {
      className: "fcu-card"
    });

    const badges = createElement("div", {
      className: "fcu-repository-summary"
    });

    badges.append(
      createBadge(
        payload.identity.recordType
      ),
      createBadge(
        payload.culturalContext
          .heritageNature,
        "success"
      ),
      createBadge(
        payload.privacy.level,
        getStatusTone(
          payload.privacy.level
        )
      ),
      createBadge(
        payload.validation.level
      )
    );

    statusCard.append(
      createElement("h4", {
        className: "fcu-card__title",
        textContent:
          "Classificação preliminar"
      }),
      badges
    );

    const previewGrid = createElement("div", {
      className: "fcu-preview-grid"
    });

    previewGrid.append(
      createPreviewBlock(
        "Data do acontecimento",
        formatDate(
          payload.temporalContext
            .eventDate
        )
      ),
      createPreviewBlock(
        "Resumo factual",
        payload.summary.text
      ),
      createPreviewBlock(
        "Narrativa histórica",
        payload.narrative
          .historicalNarrative
      ),
      createPreviewBlock(
        "Base factual",
        payload.narrative.factualBasis
      ),
      createPreviewBlock(
        "Interpretação curatorial",
        payload.narrative
          .curatorialInterpretation
      ),
      createPreviewBlock(
        "Contexto comunitário",
        payload.culturalContext
          .communityContext
      ),
      createPreviewBlock(
        "Contexto histórico",
        payload.culturalContext
          .historicalContext
      ),
      createPreviewBlock(
        "Atividade vinculada",
        payload.relationships.activity
          ? payload.relationships.activity
              .title
          : "Sem atividade oficial vinculada."
      ),
      createPreviewBlock(
        "Observações vinculadas",
        payload.relationships
          .fieldObservations.length > 0
          ? payload.relationships
              .fieldObservations
              .map(
                (observation) =>
                  `${observation.id} — ${observation.title}`
              )
              .join("\n")
          : "Nenhuma observação vinculada."
      ),
      createPreviewBlock(
        "Palavras-chave",
        payload.culturalContext
          .keywords.length > 0
          ? payload.culturalContext
              .keywords.join(", ")
          : "Nenhuma palavra-chave informada."
      )
    );

    const actions = createElement("div", {
      className: "fcu-button-row"
    });

    actions.append(
      createElement("button", {
        type: "button",
        className: "fcu-secondary-button",
        dataset: {
          action: "return-to-form"
        },
        textContent:
          "Voltar ao formulário"
      }),
      createElement("button", {
        type: "button",
        className: "fcu-primary-button",
        dataset: {
          action: "confirm-create-record"
        },
        textContent:
          "Confirmar criação"
      })
    );

    section.append(
      statusCard,
      previewGrid,
      actions
    );

    elements.content.appendChild(section);
    state.formPreviewVisible = true;
  }

  /**
   * --------------------------------------------------------------------------
   * INTEGRAÇÃO DEFENSIVA COM O CURATION ENGINE
   * --------------------------------------------------------------------------
   */

  async function createRecordWithEngine(
    payload
  ) {
    const engine =
      getEngine() ||
      await prepareEngine();

    if (!engine) {
      throw new Error(
        "Curation Engine indisponível."
      );
    }

    const methodNames = [
      "createRecord",
      "createCurationRecord",
      "addRecord",
      "registerHistoricalRecord",
      "create"
    ];

    for (const methodName of methodNames) {
      if (
        typeof engine[methodName] ===
        "function"
      ) {
        const result =
          engine[methodName](payload);

        return await resolvePossiblePromise(
          result
        );
      }
    }

    throw new Error(
      "O Curation Engine não apresentou um método compatível para criação de registros."
    );
  }

  function normalizeCreatedRecordResult(
    result,
    payload
  ) {
    if (isObject(result)) {
      return (
        result.record ||
        result.data ||
        result.result ||
        result
      );
    }

    return {
      ...payload,
      identity: {
        ...payload.identity,
        recordId:
          `curation-record-${Date.now()}`
      }
    };
  }

  async function submitCurationForm() {
    const validation =
      validateCompleteForm();

    if (!validation.valid) {
      const firstField =
        Object.keys(
          validation.errors
        )[0];

      notify(
        "O registro ainda possui campos que precisam de revisão.",
        "warning"
      );

      if (firstField) {
        focusFormField(firstField);
      }

      return false;
    }

    const payload =
      buildCurationRecordPayload();

    setBusy(
      true,
      "Criando Registro Histórico Curatorial..."
    );

    try {
      const result =
        await createRecordWithEngine(
          payload
        );

      const createdRecord =
        normalizeCreatedRecordResult(
          result,
          payload
        );

      const normalized =
        normalizeRecord(
          createdRecord,
          state.records.length
        );

      state.records = [
        normalized,
        ...state.records.filter(
          (record) =>
            record.id !== normalized.id
        )
      ];

      state.statistics =
        calculateStatistics(
          state.records,
          state.observations,
          state.activities
        );

      resetFormState();

      notify(
        "Registro Histórico criado com sucesso.",
        "success"
      );

      state.selectedRecordId =
        normalized.id;

      navigateTo(
        CONFIG.views.details,
        {
          recordId: normalized.id
        }
      );

      return true;
    } catch (error) {
      state.lastError = error;

      console.error(
        `[${MODULE_NAME}] Falha ao criar o registro.`,
        error
      );

      saveFormDraft();

      notify(
        "Não foi possível criar o registro. O conteúdo permanece salvo como rascunho no navegador.",
        "error"
      );

      return false;
    } finally {
      setBusy(false);
    }
  }

  /**
   * --------------------------------------------------------------------------
   * AÇÕES DA PARTE 3
   * --------------------------------------------------------------------------
   */

  async function handlePartThreeAction(
    action,
    target
  ) {
    switch (action) {
      case "save-form-draft":
        saveFormDraft();

        notify(
          "Rascunho salvo no navegador.",
          "success"
        );

        return true;

      case "reset-form": {
        const confirmed =
          window.confirm(
            "Deseja limpar todos os campos deste registro? O rascunho salvo também será removido."
          );

        if (!confirmed) {
          return true;
        }

        resetFormState();
        renderCreateRecordView();

        notify(
          "Formulário limpo.",
          "success"
        );

        return true;
      }

      case "preview-record":
        renderRecordPreview();
        return true;

      case "return-to-form":
        state.formPreviewVisible = false;
        navigateTo(
          CONFIG.views.create
        );
        return true;

      case "confirm-create-record":
        await submitCurationForm();
        return true;

      case "add-keyword":
        addKeywordFromInput();
        return true;

      case "remove-keyword":
        removeKeyword(
          target?.dataset?.keyword || ""
        );
        return true;

      case "focus-form-field":
        focusFormField(
          target?.dataset?.fieldName || ""
        );
        return true;

      default:
        return false;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * EVENTOS ESPECÍFICOS DO FORMULÁRIO
   * --------------------------------------------------------------------------
   */

  function handlePartThreeInput(target) {
    if (handleObservationSearch(target)) {
      return true;
    }

    if (handleObservationSelection(target)) {
      return true;
    }

    if (updateFormFieldFromTarget(target)) {
      return true;
    }

    return false;
  }

  function handlePartThreeKeydown(event) {
    const target = event.target;

    if (
      target?.dataset?.keywordInput ===
        "true" &&
      event.key === "Enter"
    ) {
      event.preventDefault();
      addKeywordFromInput();

      return true;
    }

    return false;
  }

  async function handlePartThreeSubmit(event) {
    const form =
      event.target.closest(
        '[data-curation-form="true"]'
      );

    if (!form) {
      return false;
    }

    event.preventDefault();
    await submitCurationForm();

    return true;
  }

  /**
   * --------------------------------------------------------------------------
   * ATUALIZAÇÃO DA NAVEGAÇÃO DA PARTE 3
   * --------------------------------------------------------------------------
   */

  const originalNavigateToPartThree =
    navigateTo;

  navigateTo = function enhancedNavigateTo(
    viewName,
    options = {}
  ) {
    const validViews =
      Object.values(CONFIG.views);

    const targetView =
      validViews.includes(viewName)
        ? viewName
        : CONFIG.defaultView;

    if (
      targetView ===
      CONFIG.views.create
    ) {
      if (
        state.currentView !==
        targetView
      ) {
        state.previousView =
          state.currentView;
      }

      state.currentView =
        targetView;

      updateNavigationState(
        targetView
      );

      renderCreateRecordView();

      writeStorage(
        CONFIG.storageKeys.lastView,
        targetView
      );

      if (elements.content) {
        elements.content.scrollTop = 0;
      }

      return;
    }

    originalNavigateToPartThree(
      viewName,
      options
    );
  };

  /**
   * --------------------------------------------------------------------------
   * PREPARAÇÃO DA PARTE 3
   * --------------------------------------------------------------------------
   */

  function prepareCreateRecordInterface() {
    injectFormStyles();

    ensureFormState();

    if (!state.formDraftChecked) {
      const draftLoaded =
        loadFormDraft();

      state.formDraftChecked = true;

      if (draftLoaded) {
        notify(
          "Um rascunho anterior foi recuperado.",
          "success"
        );
      }
    }
  }

  /**
   * --------------------------------------------------------------------------
   * CONTINUA NA PARTE 4
   * --------------------------------------------------------------------------
   *
   * A Parte 4 acrescentará:
   *
   * - fila visual de validação curatorial;
   * - critérios obrigatórios de conferência;
   * - aprovação, devolução e solicitação de complementação;
   * - atualização controlada do estágio do registro;
   * - histórico de revisão;
   * - edição visual de registros existentes;
   * - proteção contra alterações silenciosas;
   * - integração ampliada com o curation-engine.js;
   * - painel de conflitos e pendências;
   * - registro dos responsáveis pela validação.
   *
   * As próximas partes também incluirão:
   *
   * - exportação JSON;
   * - geração de relatórios;
   * - delegação central dos eventos;
   * - inicialização definitiva do módulo;
   * - API pública FestancaCurationUI;
   * - encerramento da função principal.
   *
   * NÃO INSIRA AINDA:
   *
   * })(window, document);
   *
   * O fechamento será incluído somente na última parte.
   * --------------------------------------------------------------------------
   */

  PERFEITO!


Gerar a Parte 3:

apps/festanca-2026/js/curation-ui.js


  /**
   * ==========================================================================
   * FESTANÇA DE VILA BELA 2026
   * CURATION UI — PARTE 4
   * VALIDAÇÃO, REVISÃO E EVOLUÇÃO CURATORIAL
   * ==========================================================================
   */

  /**
   * --------------------------------------------------------------------------
   * CONFIGURAÇÕES DA VALIDAÇÃO CURATORIAL
   * --------------------------------------------------------------------------
   */

  const CURATION_REVIEW_STAGES = Object.freeze([
    {
      value: "registro-inicial",
      label: "Registro inicial",
      description:
        "Registro recém-criado, ainda sem análise curatorial completa."
    },
    {
      value: "triagem-curatorial",
      label: "Triagem curatorial",
      description:
        "Conferência inicial de estrutura, fontes, privacidade e vínculos."
    },
    {
      value: "complementacao-pendente",
      label: "Complementação pendente",
      description:
        "O registro necessita de dados, fontes, autorizações ou contexto adicional."
    },
    {
      value: "validacao-comunitaria",
      label: "Validação comunitária",
      description:
        "O conteúdo está sendo conferido com participantes, grupos ou guardiões da memória."
    },
    {
      value: "validacao-institucional",
      label: "Validação institucional",
      description:
        "O registro está em conferência com organização, associação ou instituição responsável."
    },
    {
      value: "revisao-editorial",
      label: "Revisão editorial",
      description:
        "A narrativa, os créditos e a apresentação pública estão sendo revisados."
    },
    {
      value: "aprovado",
      label: "Aprovado",
      description:
        "Registro aprovado no processo curatorial."
    },
    {
      value: "memoria-permanente",
      label: "Memória histórica permanente",
      description:
        "Registro consolidado como parte do acervo histórico permanente."
    },
    {
      value: "restrito",
      label: "Restrito",
      description:
        "Registro preservado, mas com acesso limitado por privacidade, consentimento ou proteção cultural."
    },
    {
      value: "arquivado",
      label: "Arquivado",
      description:
        "Registro preservado sem publicação ativa."
    }
  ]);

  const CURATION_REVIEW_DECISIONS = Object.freeze([
    {
      value: "aprovar",
      label: "Aprovar registro",
      tone: "success"
    },
    {
      value: "aprovar-com-restricoes",
      label: "Aprovar com restrições",
      tone: "protected"
    },
    {
      value: "solicitar-complementacao",
      label: "Solicitar complementação",
      tone: "warning"
    },
    {
      value: "devolver-para-revisao",
      label: "Devolver para revisão",
      tone: "warning"
    },
    {
      value: "encaminhar-validacao-comunitaria",
      label: "Encaminhar à validação comunitária",
      tone: "protected"
    },
    {
      value: "encaminhar-validacao-institucional",
      label: "Encaminhar à validação institucional",
      tone: "protected"
    },
    {
      value: "marcar-como-restrito",
      label: "Marcar como restrito",
      tone: "protected"
    },
    {
      value: "consolidar-memoria-permanente",
      label: "Consolidar como memória permanente",
      tone: "success"
    },
    {
      value: "arquivar",
      label: "Arquivar registro",
      tone: "neutral"
    }
  ]);

  const CURATION_CHECKLIST_ITEMS = Object.freeze([
    {
      id: "identity-reviewed",
      label: "Identificação e título conferidos",
      description:
        "O título representa corretamente o acontecimento e não induz a interpretações equivocadas."
    },
    {
      id: "date-reviewed",
      label: "Data e contexto temporal conferidos",
      description:
        "A data do acontecimento e as referências temporais foram verificadas."
    },
    {
      id: "facts-separated",
      label: "Fatos e interpretações estão separados",
      description:
        "A narrativa distingue observação direta, memória oral, hipótese e análise curatorial."
    },
    {
      id: "sources-reviewed",
      label: "Fontes e proveniência conferidas",
      description:
        "As observações, documentos, depoimentos, imagens e demais fontes estão identificados."
    },
    {
      id: "community-context-reviewed",
      label: "Contexto comunitário conferido",
      description:
        "O registro respeita a memória local, os grupos tradicionais e os responsáveis culturais."
    },
    {
      id: "privacy-reviewed",
      label: "Privacidade e proteção territorial conferidas",
      description:
        "Residências, rotas dinâmicas e dados privados seguem a política territorial da FESTANÇA."
    },
    {
      id: "consent-reviewed",
      label: "Consentimento e autorização conferidos",
      description:
        "Pessoas, imagens, depoimentos e conhecimentos protegidos possuem tratamento adequado."
    },
    {
      id: "children-reviewed",
      label: "Proteção de crianças e adolescentes conferida",
      description:
        "Quando aplicável, identidade, imagens e autorização foram analisadas."
    },
    {
      id: "restricted-knowledge-reviewed",
      label: "Conhecimentos restritos analisados",
      description:
        "Conteúdos sagrados, internos ou culturalmente protegidos não serão expostos indevidamente."
    },
    {
      id: "credits-reviewed",
      label: "Créditos e responsabilidades conferidos",
      description:
        "Cronistas, fotógrafos, depoentes, grupos, curadores e fontes foram reconhecidos."
    },
    {
      id: "conflicts-reviewed",
      label: "Conflitos e incertezas analisados",
      description:
        "Informações divergentes e questões pendentes estão registradas de forma transparente."
    },
    {
      id: "preservation-reviewed",
      label: "Preservação e integridade conferidas",
      description:
        "A versão original será preservada e qualquer mudança ficará registrada no histórico."
    }
  ]);

  const CURATION_REVIEW_DEFAULTS = Object.freeze({
    reviewerName: "",
    reviewerRole: "curador-historico",
    decision: "",
    targetStage: "triagem-curatorial",
    reviewSummary: "",
    requestedChanges: "",
    restrictions: "",
    validationSource: "",
    communityRepresentative: "",
    institution: "",
    checklist: {},
    preserveOriginalVersion: true,
    createRevisionSnapshot: true,
    updateValidationStatus: true,
    updatePublicationStatus: false
  });

  /**
   * --------------------------------------------------------------------------
   * ESTADO DA REVISÃO
   * --------------------------------------------------------------------------
   */

  function createDefaultReviewState() {
    const checklist = {};

    CURATION_CHECKLIST_ITEMS.forEach((item) => {
      checklist[item.id] = false;
    });

    return {
      ...CURATION_REVIEW_DEFAULTS,
      checklist
    };
  }

  function ensureReviewState() {
    if (!isObject(state.review)) {
      state.review = createDefaultReviewState();
    }

    if (!isObject(state.review.checklist)) {
      state.review.checklist = {};
    }

    CURATION_CHECKLIST_ITEMS.forEach((item) => {
      if (
        typeof state.review.checklist[item.id] !==
        "boolean"
      ) {
        state.review.checklist[item.id] = false;
      }
    });

    return state.review;
  }

  function resetReviewState() {
    state.review = createDefaultReviewState();
    state.reviewErrors = {};
    state.reviewTouched = {};
    state.selectedReviewRecordId = null;
  }

  function getSelectedReviewRecord() {
    const recordId =
      state.selectedReviewRecordId ||
      state.selectedRecordId;

    if (!recordId) {
      return null;
    }

    return (
      state.records.find(
        (record) => record.id === recordId
      ) || null
    );
  }

  function getRecordRawData(record) {
    if (!record) {
      return null;
    }

    return (
      record.raw ||
      record.original ||
      record.data ||
      record
    );
  }

  function cloneSerializable(value) {
    try {
      return JSON.parse(JSON.stringify(value));
    } catch (error) {
      console.warn(
        `[${MODULE_NAME}] Não foi possível clonar o objeto por JSON.`,
        error
      );

      if (Array.isArray(value)) {
        return [...value];
      }

      if (isObject(value)) {
        return { ...value };
      }

      return value;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * UTILITÁRIOS DOS REGISTROS CURATORIAIS
   * --------------------------------------------------------------------------
   */

  function getRecordStage(record) {
    return (
      record?.currentStage ||
      record?.stage ||
      record?.identity?.currentStage ||
      record?.workflow?.currentStage ||
      record?.raw?.identity?.currentStage ||
      record?.raw?.workflow?.currentStage ||
      "registro-inicial"
    );
  }

  function getRecordValidationStatus(record) {
    return (
      record?.validationStatus ||
      record?.validation?.status ||
      record?.raw?.validation?.status ||
      record?.status ||
      "rascunho"
    );
  }

  function getRecordPrivacyLevel(record) {
    return (
      record?.privacyLevel ||
      record?.privacy?.level ||
      record?.raw?.privacy?.level ||
      "nao-informado"
    );
  }

  function getRecordPublicationAuthorization(record) {
    return (
      record?.publicationAuthorization ||
      record?.privacy?.publicationAuthorization ||
      record?.raw?.privacy
        ?.publicationAuthorization ||
      "aguardando-autorizacao"
    );
  }

  function getRecordReviewHistory(record) {
    const raw = getRecordRawData(record);

    const candidates = [
      record?.revisionHistory,
      record?.reviewHistory,
      record?.workflow?.history,
      record?.provenance?.revisionHistory,
      raw?.revisionHistory,
      raw?.reviewHistory,
      raw?.workflow?.history,
      raw?.provenance?.revisionHistory
    ];

    for (const candidate of candidates) {
      if (Array.isArray(candidate)) {
        return candidate;
      }
    }

    return [];
  }

  function getRecordPendingQuestions(record) {
    const raw = getRecordRawData(record);

    const candidates = [
      record?.pendingQuestions,
      record?.validation?.pendingQuestions,
      raw?.validation?.pendingQuestions
    ];

    for (const candidate of candidates) {
      if (Array.isArray(candidate)) {
        return candidate.filter(Boolean);
      }
    }

    return [];
  }

  function getRecordConflicts(record) {
    const raw = getRecordRawData(record);

    const candidates = [
      record?.conflictingInformation,
      record?.validation?.conflictingInformation,
      raw?.validation?.conflictingInformation
    ];

    for (const candidate of candidates) {
      if (Array.isArray(candidate)) {
        return candidate.filter(Boolean);
      }
    }

    return [];
  }

  function getRecordTitle(record) {
    return (
      record?.title ||
      record?.identity?.title ||
      record?.raw?.identity?.title ||
      "Registro Histórico sem título"
    );
  }

  function getRecordEventDate(record) {
    return (
      record?.eventDate ||
      record?.date ||
      record?.temporalContext?.eventDate ||
      record?.raw?.temporalContext?.eventDate ||
      null
    );
  }

  function getReviewStageLabel(stage) {
    const item =
      CURATION_REVIEW_STAGES.find(
        (stageItem) =>
          stageItem.value === stage
      );

    return item?.label || humanizeSlug(stage);
  }

  function getDecisionLabel(decision) {
    const item =
      CURATION_REVIEW_DECISIONS.find(
        (decisionItem) =>
          decisionItem.value === decision
      );

    return item?.label || humanizeSlug(decision);
  }

  function getDecisionTone(decision) {
    const item =
      CURATION_REVIEW_DECISIONS.find(
        (decisionItem) =>
          decisionItem.value === decision
      );

    return item?.tone || "neutral";
  }

  function calculateChecklistProgress() {
    const reviewState = ensureReviewState();

    const total =
      CURATION_CHECKLIST_ITEMS.length;

    const completed =
      CURATION_CHECKLIST_ITEMS.filter(
        (item) =>
          Boolean(
            reviewState.checklist[item.id]
          )
      ).length;

    return {
      total,
      completed,
      percentage:
        total > 0
          ? Math.round(
              (completed / total) * 100
            )
          : 0
    };
  }

  /**
   * --------------------------------------------------------------------------
   * DETECÇÃO DE PENDÊNCIAS AUTOMÁTICAS
   * --------------------------------------------------------------------------
   */

  function analyzeRecordReviewRequirements(record) {
    const raw = getRecordRawData(record) || {};
    const requirements = [];

    const privacyLevel =
      getRecordPrivacyLevel(record);

    const publicationAuthorization =
      getRecordPublicationAuthorization(record);

    const validationStatus =
      getRecordValidationStatus(record);

    const privacy =
      raw.privacy ||
      record?.privacy ||
      {};

    const narrative =
      raw.narrative ||
      record?.narrative ||
      {};

    const provenance =
      raw.provenance ||
      record?.provenance ||
      {};

    const source =
      raw.source ||
      record?.source ||
      {};

    if (!getRecordTitle(record).trim()) {
      requirements.push({
        code: "missing-title",
        severity: "error",
        title: "Título ausente",
        description:
          "O registro precisa de um título identificável."
      });
    }

    if (!getRecordEventDate(record)) {
      requirements.push({
        code: "missing-event-date",
        severity: "error",
        title: "Data do acontecimento ausente",
        description:
          "A data deve ser informada ou justificada como desconhecida."
      });
    }

    const historicalNarrative =
      narrative.historicalNarrative ||
      raw.summary?.text ||
      record?.summary ||
      "";

    if (
      !historicalNarrative ||
      String(historicalNarrative).trim()
        .length < 80
    ) {
      requirements.push({
        code: "short-narrative",
        severity: "warning",
        title: "Narrativa histórica insuficiente",
        description:
          "O registro necessita de maior contextualização antes de sua consolidação."
      });
    }

    const hasSources =
      Boolean(source.type) ||
      Boolean(source.activityId) ||
      (
        Array.isArray(source.observationIds) &&
        source.observationIds.length > 0
      );

    if (!hasSources) {
      requirements.push({
        code: "missing-source",
        severity: "warning",
        title: "Fonte não identificada",
        description:
          "É necessário registrar a origem da informação ou justificar a ausência de fonte."
      });
    }

    const credits =
      provenance.credits ||
      raw.credits ||
      [];

    if (
      (
        !Array.isArray(credits) ||
        credits.length === 0
      ) &&
      !provenance.createdBy
    ) {
      requirements.push({
        code: "missing-credits",
        severity: "warning",
        title: "Créditos incompletos",
        description:
          "Identifique cronistas, fontes, fotógrafos, grupos ou demais responsáveis."
      });
    }

    if (
      privacy.containsPrivateResidence &&
      privacyLevel === "publico"
    ) {
      requirements.push({
        code: "private-residence-public",
        severity: "error",
        title: "Residência privada exposta",
        description:
          "O nível de privacidade precisa ser ajustado antes da publicação."
      });
    }

    if (
      privacy.containsChildren &&
      (
        privacy.consentStatus ===
          "nao-verificado" ||
        privacy.consentStatus ===
          "consentimento-pendente"
      )
    ) {
      requirements.push({
        code: "children-consent-pending",
        severity: "error",
        title:
          "Autorização envolvendo menores pendente",
        description:
          "O conteúdo deve permanecer protegido até a conferência do consentimento."
      });
    }

    if (
      privacy
        .containsSensitivePersonalData &&
      privacyLevel === "publico"
    ) {
      requirements.push({
        code: "sensitive-data-public",
        severity: "error",
        title:
          "Dados pessoais sensíveis em registro público",
        description:
          "O acesso deve ser restringido e o conteúdo revisado."
      });
    }

    if (
      privacy
        .containsSacredOrRestrictedKnowledge &&
      publicationAuthorization ===
        "autorizado"
    ) {
      requirements.push({
        code: "restricted-knowledge-publication",
        severity: "error",
        title:
          "Conhecimento protegido requer validação",
        description:
          "A publicação depende da manifestação dos responsáveis culturais."
      });
    }

    if (
      validationStatus === "rascunho" ||
      validationStatus ===
        "nao-verificado"
    ) {
      requirements.push({
        code: "validation-pending",
        severity: "info",
        title: "Validação ainda não concluída",
        description:
          "O registro permanece em processo curatorial."
      });
    }

    getRecordPendingQuestions(record).forEach(
      (question, index) => {
        requirements.push({
          code: `pending-question-${index}`,
          severity: "warning",
          title: "Questão pendente",
          description:
            typeof question === "string"
              ? question
              : (
                  question.description ||
                  question.question ||
                  JSON.stringify(question)
                )
        });
      }
    );

    getRecordConflicts(record).forEach(
      (conflict, index) => {
        requirements.push({
          code: `conflict-${index}`,
          severity: "error",
          title:
            "Informação conflitante",
          description:
            typeof conflict === "string"
              ? conflict
              : (
                  conflict.description ||
                  conflict.summary ||
                  JSON.stringify(conflict)
                )
        });
      }
    );

    return requirements;
  }

  function calculateRecordReviewPriority(record) {
    const requirements =
      analyzeRecordReviewRequirements(record);

    const errorCount =
      requirements.filter(
        (item) =>
          item.severity === "error"
      ).length;

    const warningCount =
      requirements.filter(
        (item) =>
          item.severity === "warning"
      ).length;

    const stage =
      getRecordStage(record);

    let score =
      errorCount * 100 +
      warningCount * 25;

    if (
      stage === "registro-inicial" ||
      stage === "triagem-curatorial"
    ) {
      score += 20;
    }

    if (
      getRecordPrivacyLevel(record) ===
      "confidencial"
    ) {
      score += 30;
    }

    return {
      score,
      errorCount,
      warningCount,
      requirements
    };
  }

  /**
   * --------------------------------------------------------------------------
   * FILA DE VALIDAÇÃO
   * --------------------------------------------------------------------------
   */

  function getReviewQueueRecords() {
    const records = [...state.records];

    return records
      .map((record) => ({
        record,
        priority:
          calculateRecordReviewPriority(
            record
          )
      }))
      .sort((first, second) => {
        if (
          second.priority.score !==
          first.priority.score
        ) {
          return (
            second.priority.score -
            first.priority.score
          );
        }

        const firstDate =
          getRecordEventDate(first.record) ||
          "";

        const secondDate =
          getRecordEventDate(second.record) ||
          "";

        return firstDate.localeCompare(
          secondDate
        );
      });
  }

  function createReviewQueueCard(
    queueItem
  ) {
    const { record, priority } =
      queueItem;

    const card = createElement("article", {
      className: "fcu-review-queue-card",
      dataset: {
        recordId: record.id
      }
    });

    const heading = createElement("header", {
      className:
        "fcu-review-queue-card__heading"
    });

    const headingText =
      createElement("div");

    headingText.append(
      createElement("span", {
        className:
          "fcu-review-queue-card__date",
        textContent:
          getRecordEventDate(record)
            ? formatDate(
                getRecordEventDate(record)
              )
            : "Data não informada"
      }),
      createElement("h4", {
        textContent:
          getRecordTitle(record)
      })
    );

    const priorityBadge =
      createBadge(
        priority.errorCount > 0
          ? `${priority.errorCount} bloqueio${
              priority.errorCount === 1
                ? ""
                : "s"
            }`
          : priority.warningCount > 0
            ? `${priority.warningCount} pendência${
                priority.warningCount === 1
                  ? ""
                  : "s"
              }`
            : "Sem bloqueios",
        priority.errorCount > 0
          ? "error"
          : priority.warningCount > 0
            ? "warning"
            : "success"
      );

    heading.append(
      headingText,
      priorityBadge
    );

    const metadata = createElement("div", {
      className:
        "fcu-review-queue-card__metadata"
    });

    metadata.append(
      createBadge(
        getReviewStageLabel(
          getRecordStage(record)
        ),
        getStatusTone(
          getRecordStage(record)
        )
      ),
      createBadge(
        humanizeSlug(
          getRecordValidationStatus(record)
        )
      ),
      createBadge(
        humanizeSlug(
          getRecordPrivacyLevel(record)
        ),
        getStatusTone(
          getRecordPrivacyLevel(record)
        )
      )
    );

    const requirements =
      createElement("ul", {
        className:
          "fcu-review-requirements"
      });

    priority.requirements
      .slice(0, 4)
      .forEach((requirement) => {
        requirements.appendChild(
          createElement("li", {
            className:
              `fcu-review-requirement fcu-review-requirement--${requirement.severity}`,
            textContent:
              `${requirement.title}: ${requirement.description}`
          })
        );
      });

    if (
      priority.requirements.length > 4
    ) {
      requirements.appendChild(
        createElement("li", {
          className:
            "fcu-review-requirement fcu-review-requirement--info",
          textContent:
            `Mais ${
              priority.requirements.length -
              4
            } item(ns) para análise.`
        })
      );
    }

    const actions = createElement("div", {
      className:
        "fcu-review-queue-card__actions"
    });

    actions.append(
      createElement("button", {
        type: "button",
        className:
          "fcu-secondary-button",
        dataset: {
          action: "open-record-details",
          recordId: record.id
        },
        textContent: "Consultar"
      }),
      createElement("button", {
        type: "button",
        className:
          "fcu-primary-button",
        dataset: {
          action: "open-record-review",
          recordId: record.id
        },
        textContent: "Iniciar validação"
      })
    );

    card.append(
      heading,
      metadata
    );

    if (
      priority.requirements.length > 0
    ) {
      card.appendChild(requirements);
    } else {
      card.appendChild(
        createElement("p", {
          className: "fcu-muted-text",
          textContent:
            "Nenhuma pendência automática foi identificada. A conferência humana continua necessária."
        })
      );
    }

    card.appendChild(actions);

    return card;
  }

  function renderReviewQueueView() {
    if (!elements.content) {
      return;
    }

    elements.content.innerHTML = "";

    const section = createElement("section", {
      dataset: {
        view: "review-queue"
      }
    });

    section.appendChild(
      createSectionHeading(
        "CURADORIA HISTÓRICA",
        "Fila de Validação",
        "Registros organizados por prioridade, pendências, privacidade e estágio do fluxo curatorial."
      )
    );

    const queue =
      getReviewQueueRecords();

    const summary = createElement("div", {
      className: "fcu-stat-grid"
    });

    const waitingCount =
      queue.filter(({ record }) => {
        const stage =
          getRecordStage(record);

        return ![
          "aprovado",
          "memoria-permanente",
          "arquivado"
        ].includes(stage);
      }).length;

    const blockedCount =
      queue.filter(
        ({ priority }) =>
          priority.errorCount > 0
      ).length;

    const approvedCount =
      queue.filter(({ record }) =>
        [
          "aprovado",
          "memoria-permanente"
        ].includes(
          getRecordStage(record)
        )
      ).length;

    summary.append(
      createStatisticCard(
        "Na fila",
        waitingCount,
        "Registros aguardando alguma etapa curatorial."
      ),
      createStatisticCard(
        "Com bloqueios",
        blockedCount,
        "Registros com privacidade, conflito ou informação obrigatória pendente."
      ),
      createStatisticCard(
        "Aprovados",
        approvedCount,
        "Registros aprovados ou consolidados como memória permanente."
      )
    );

    section.appendChild(summary);

    const controls = createElement("div", {
      className: "fcu-review-controls"
    });

    controls.append(
      createElement("input", {
        type: "search",
        className: "fcu-form-control",
        placeholder:
          "Pesquisar na fila de validação",
        value:
          state.reviewQueueSearch || "",
        dataset: {
          reviewQueueSearch: "true"
        }
      }),
      createElement("select", {
        className: "fcu-form-control",
        dataset: {
          reviewQueueStageFilter: "true"
        }
      })
    );

    const stageFilter = query(
      "[data-review-queue-stage-filter]",
      controls
    );

    if (stageFilter) {
      stageFilter.appendChild(
        createElement("option", {
          value: "",
          textContent:
            "Todos os estágios"
        })
      );

      CURATION_REVIEW_STAGES.forEach(
        (stage) => {
          stageFilter.appendChild(
            createElement("option", {
              value: stage.value,
              textContent:
                stage.label
            })
          );
        }
      );

      stageFilter.value =
        state.reviewQueueStageFilter ||
        "";
    }

    section.appendChild(controls);

    const list = createElement("div", {
      className: "fcu-review-queue",
      dataset: {
        reviewQueueList: "true"
      }
    });

    renderReviewQueueList(list);

    section.appendChild(list);
    elements.content.appendChild(section);
  }

  function recordMatchesReviewQueueFilters(
    record
  ) {
    const search =
      normalizeText(
        state.reviewQueueSearch || ""
      );

    const stageFilter =
      state.reviewQueueStageFilter || "";

    if (
      stageFilter &&
      getRecordStage(record) !== stageFilter
    ) {
      return false;
    }

    if (!search) {
      return true;
    }

    const searchable = normalizeText([
      record.id,
      getRecordTitle(record),
      getRecordEventDate(record),
      getRecordStage(record),
      getRecordValidationStatus(record),
      getRecordPrivacyLevel(record)
    ].join(" "));

    return searchable.includes(search);
  }

  function renderReviewQueueList(container) {
    container.innerHTML = "";

    const queue =
      getReviewQueueRecords().filter(
        ({ record }) =>
          recordMatchesReviewQueueFilters(
            record
          )
      );

    if (queue.length === 0) {
      container.appendChild(
        createElement("div", {
          className: "fcu-empty-state",
          textContent:
            "Nenhum registro corresponde aos filtros da fila."
        })
      );

      return;
    }

    queue.forEach((queueItem) => {
      container.appendChild(
        createReviewQueueCard(queueItem)
      );
    });
  }

  /**
   * --------------------------------------------------------------------------
   * INTERFACE DE VALIDAÇÃO INDIVIDUAL
   * --------------------------------------------------------------------------
   */

  function createReviewTextField({
    fieldName,
    label,
    description = "",
    placeholder = "",
    rows = 4,
    required = false
  }) {
    const reviewState =
      ensureReviewState();

    const wrapper =
      createFieldWrapper({
        fieldName: `review-${fieldName}`,
        label,
        description,
        required
      });

    const textarea =
      createElement("textarea", {
        id: `fcu-review-${fieldName}`,
        className:
          "fcu-form-control fcu-form-control--textarea",
        rows: String(rows),
        placeholder,
        dataset: {
          reviewField: fieldName
        }
      });

    textarea.value =
      reviewState[fieldName] || "";

    if (required) {
      textarea.required = true;
    }

    wrapper.appendChild(textarea);

    const error = createElement("p", {
      className:
        "fcu-form-field__error",
      role: "alert",
      dataset: {
        reviewFieldError: fieldName
      }
    });

    wrapper.appendChild(error);

    return wrapper;
  }

  function createReviewInputField({
    fieldName,
    label,
    description = "",
    placeholder = "",
    required = false
  }) {
    const reviewState =
      ensureReviewState();

    const wrapper =
      createFieldWrapper({
        fieldName: `review-${fieldName}`,
        label,
        description,
        required
      });

    const input = createElement("input", {
      id: `fcu-review-${fieldName}`,
      type: "text",
      className: "fcu-form-control",
      value:
        reviewState[fieldName] || "",
      placeholder,
      dataset: {
        reviewField: fieldName
      }
    });

    if (required) {
      input.required = true;
    }

    wrapper.appendChild(input);

    wrapper.appendChild(
      createElement("p", {
        className:
          "fcu-form-field__error",
        role: "alert",
        dataset: {
          reviewFieldError:
            fieldName
        }
      })
    );

    return wrapper;
  }

  function createReviewSelectField({
    fieldName,
    label,
    description = "",
    options = [],
    required = false
  }) {
    const reviewState =
      ensureReviewState();

    const wrapper =
      createFieldWrapper({
        fieldName: `review-${fieldName}`,
        label,
        description,
        required
      });

    const select =
      createElement("select", {
        id: `fcu-review-${fieldName}`,
        className: "fcu-form-control",
        dataset: {
          reviewField: fieldName
        }
      });

    select.appendChild(
      createElement("option", {
        value: "",
        textContent: "Selecione"
      })
    );

    options.forEach((option) => {
      select.appendChild(
        createElement("option", {
          value: option.value,
          textContent: option.label
        })
      );
    });

    select.value =
      reviewState[fieldName] || "";

    if (required) {
      select.required = true;
    }

    wrapper.appendChild(select);

    wrapper.appendChild(
      createElement("p", {
        className:
          "fcu-form-field__error",
        role: "alert",
        dataset: {
          reviewFieldError:
            fieldName
        }
      })
    );

    return wrapper;
  }

  function createReviewChecklist() {
    const reviewState =
      ensureReviewState();

    const wrapper = createElement("div", {
      className:
        "fcu-curation-checklist"
    });

    const progress =
      calculateChecklistProgress();

    const heading = createElement("div", {
      className:
        "fcu-curation-checklist__heading"
    });

    heading.append(
      createElement("h4", {
        textContent:
          "Lista de Verificação Curatorial"
      }),
      createElement("span", {
        className: "fcu-badge",
        dataset: {
          reviewChecklistProgress:
            "true"
        },
        textContent:
          `${progress.completed}/${progress.total}`
      })
    );

    wrapper.appendChild(heading);

    CURATION_CHECKLIST_ITEMS.forEach(
      (item) => {
        const label =
          createElement("label", {
            className:
              "fcu-curation-checklist__item"
          });

        const checkbox =
          createElement("input", {
            type: "checkbox",
            checked: Boolean(
              reviewState.checklist[
                item.id
              ]
            ),
            dataset: {
              reviewChecklistId:
                item.id
            }
          });

        const content =
          createElement("span");

        content.append(
          createElement("strong", {
            textContent: item.label
          }),
          createElement("small", {
            textContent:
              item.description
          })
        );

        label.append(
          checkbox,
          content
        );

        wrapper.appendChild(label);
      }
    );

    const bar =
      createElement("div", {
        className:
          "fcu-curation-checklist__bar",
        "aria-label":
          `Progresso da conferência: ${progress.percentage}%`
      });

    bar.appendChild(
      createElement("span", {
        style:
          `width: ${progress.percentage}%`,
        dataset: {
          reviewChecklistBar: "true"
        }
      })
    );

    wrapper.appendChild(bar);

    return wrapper;
  }

  function createRecordRequirementsPanel(
    record
  ) {
    const requirements =
      analyzeRecordReviewRequirements(
        record
      );

    const panel = createElement("section", {
      className:
        "fcu-review-analysis-panel"
    });

    panel.appendChild(
      createElement("h4", {
        textContent:
          "Análise automática de pendências"
      })
    );

    if (requirements.length === 0) {
      panel.appendChild(
        createElement("p", {
          className:
            "fcu-success-text",
          textContent:
            "Nenhum bloqueio automático foi identificado. A decisão final permanece sob responsabilidade da Curadoria."
        })
      );

      return panel;
    }

    const list = createElement("div", {
      className:
        "fcu-review-analysis-list"
    });

    requirements.forEach(
      (requirement) => {
        const item =
          createElement("article", {
            className:
              `fcu-review-analysis-item fcu-review-analysis-item--${requirement.severity}`
          });

        item.append(
          createElement("strong", {
            textContent:
              requirement.title
          }),
          createElement("p", {
            textContent:
              requirement.description
          })
        );

        list.appendChild(item);
      }
    );

    panel.appendChild(list);

    return panel;
  }

  function createReviewHistoryPanel(record) {
    const history =
      getRecordReviewHistory(record);

    const panel = createElement("section", {
      className:
        "fcu-review-history-panel"
    });

    panel.appendChild(
      createElement("h4", {
        textContent:
          "Histórico de Revisões"
      })
    );

    if (history.length === 0) {
      panel.appendChild(
        createElement("p", {
          className: "fcu-muted-text",
          textContent:
            "Este registro ainda não possui revisões curatoriais documentadas."
        })
      );

      return panel;
    }

    const timeline =
      createElement("ol", {
        className:
          "fcu-review-timeline"
      });

    history
      .slice()
      .reverse()
      .forEach((entry) => {
        const item =
          createElement("li");

        const date =
          entry.reviewedAt ||
          entry.createdAt ||
          entry.date ||
          null;

        item.append(
          createElement("strong", {
            textContent:
              entry.decision
                ? getDecisionLabel(
                    entry.decision
                  )
                : (
                    entry.action ||
                    entry.stage ||
                    "Revisão curatorial"
                  )
          }),
          createElement("small", {
            textContent: [
              date
                ? formatDateTime(date)
                : "Data não informada",
              entry.reviewedBy ||
                entry.reviewerName ||
                entry.createdBy ||
                "Responsável não informado"
            ].join(" • ")
          })
        );

        if (
          entry.summary ||
          entry.reviewSummary ||
          entry.notes
        ) {
          item.appendChild(
            createElement("p", {
              textContent:
                entry.summary ||
                entry.reviewSummary ||
                entry.notes
            })
          );
        }

        timeline.appendChild(item);
      });

    panel.appendChild(timeline);

    return panel;
  }

  function renderRecordReviewView(
    recordId
  ) {
    const record =
      state.records.find(
        (item) =>
          item.id === recordId
      );

    if (!record) {
      notify(
        "Registro não encontrado para validação.",
        "error"
      );

      navigateTo("review-queue");
      return;
    }

    state.selectedReviewRecordId =
      record.id;

    resetReviewState();
    state.selectedReviewRecordId =
      record.id;

    const reviewState =
      ensureReviewState();

    reviewState.targetStage =
      getRecordStage(record) ===
      "registro-inicial"
        ? "triagem-curatorial"
        : getRecordStage(record);

    elements.content.innerHTML = "";

    const section = createElement("section", {
      dataset: {
        view: "record-review",
        recordId: record.id
      }
    });

    section.appendChild(
      createSectionHeading(
        "CONTROLE DE QUALIDADE",
        "Validação Curatorial",
        getRecordTitle(record)
      )
    );

    const overview = createElement("div", {
      className:
        "fcu-review-record-overview"
    });

    overview.append(
      createPreviewBlock(
        "Identificador",
        record.id
      ),
      createPreviewBlock(
        "Data do acontecimento",
        getRecordEventDate(record)
          ? formatDate(
              getRecordEventDate(record)
            )
          : "Não informada"
      ),
      createPreviewBlock(
        "Estágio atual",
        getReviewStageLabel(
          getRecordStage(record)
        )
      ),
      createPreviewBlock(
        "Validação atual",
        humanizeSlug(
          getRecordValidationStatus(record)
        )
      ),
      createPreviewBlock(
        "Privacidade",
        humanizeSlug(
          getRecordPrivacyLevel(record)
        )
      ),
      createPreviewBlock(
        "Autorização de publicação",
        humanizeSlug(
          getRecordPublicationAuthorization(
            record
          )
        )
      )
    );

    section.appendChild(overview);

    section.appendChild(
      createRecordRequirementsPanel(
        record
      )
    );

    const form = createElement("form", {
      className:
        "fcu-record-review-form",
      novalidate: "novalidate",
      dataset: {
        recordReviewForm: "true"
      }
    });

    const reviewerGrid =
      createElement("div", {
        className: "fcu-form-grid"
      });

    reviewerGrid.append(
      createReviewInputField({
        fieldName: "reviewerName",
        label:
          "Responsável pela validação",
        description:
          "Informe o nome da pessoa que está realizando esta etapa.",
        placeholder:
          "Nome completo",
        required: true
      }),
      createReviewInputField({
        fieldName: "reviewerRole",
        label:
          "Função ou representação",
        description:
          "Ex.: Curador Histórico, Presidente da Associação, representante comunitário.",
        placeholder:
          "Função ou cargo",
        required: true
      }),
      createReviewInputField({
        fieldName:
          "communityRepresentative",
        label:
          "Representante comunitário consultado",
        description:
          "Preencha quando houver validação com participante, festeiro ou guardião da memória.",
        placeholder:
          "Nome e representação"
      }),
      createReviewInputField({
        fieldName: "institution",
        label:
          "Instituição ou grupo consultado",
        description:
          "Ex.: Associação do Grupo do Congo, Irmandades, organização da Festança.",
        placeholder:
          "Instituição, associação ou grupo"
      })
    );

    form.appendChild(
      createFormSection({
        id: "fcu-review-responsibility",
        eyebrow: "ETAPA 1",
        title:
          "Responsabilidade pela Validação",
        description:
          "Toda decisão curatorial precisa possuir autoria, data e justificativa.",
        children: [
          reviewerGrid
        ]
      })
    );

    form.appendChild(
      createFormSection({
        id: "fcu-review-checklist",
        eyebrow: "ETAPA 2",
        title:
          "Conferência de Qualidade",
        description:
          "Marque somente os itens efetivamente verificados.",
        children: [
          createReviewChecklist()
        ]
      })
    );

    const decisionGrid =
      createElement("div", {
        className: "fcu-form-grid"
      });

    decisionGrid.append(
      createReviewSelectField({
        fieldName: "decision",
        label:
          "Decisão curatorial",
        description:
          "Selecione a decisão resultante desta análise.",
        required: true,
        options:
          CURATION_REVIEW_DECISIONS
      }),
      createReviewSelectField({
        fieldName: "targetStage",
        label:
          "Novo estágio do registro",
        description:
          "Indique a etapa para a qual o registro deverá avançar.",
        required: true,
        options:
          CURATION_REVIEW_STAGES
      }),
      createReviewTextField({
        fieldName:
          "reviewSummary",
        label:
          "Resumo da validação",
        description:
          "Descreva o que foi conferido e a razão da decisão tomada.",
        placeholder:
          "Registre objetivamente os critérios analisados e a conclusão.",
        rows: 5,
        required: true
      }),
      createReviewTextField({
        fieldName:
          "requestedChanges",
        label:
          "Complementações ou correções solicitadas",
        description:
          "Informe o que precisa ser incluído, corrigido, confirmado ou protegido.",
        placeholder:
          "Ex.: Confirmar nome completo, anexar autorização, corrigir local ou ampliar contexto histórico.",
        rows: 5
      }),
      createReviewTextField({
        fieldName: "restrictions",
        label:
          "Restrições de acesso ou publicação",
        description:
          "Registre limitações relacionadas à privacidade, território, imagem, oralidade ou conhecimentos protegidos.",
        placeholder:
          "Ex.: Não publicar endereço residencial nem identificação de menor.",
        rows: 4
      }),
      createReviewTextField({
        fieldName:
          "validationSource",
        label:
          "Fonte usada na validação",
        description:
          "Indique documentos, pessoas, observações ou instituições consultadas.",
        placeholder:
          "Ex.: Conferência com o Presidente da Associação do Grupo do Congo.",
        rows: 4
      })
    );

    form.appendChild(
      createFormSection({
        id: "fcu-review-decision",
        eyebrow: "ETAPA 3",
        title:
          "Decisão e Encaminhamento",
        description:
          "A decisão deverá ser fundamentada e produzir um histórico permanente.",
        children: [
          decisionGrid
        ]
      })
    );

    const safeguards =
      createElement("div", {
        className:
          "fcu-checkbox-grid"
      });

    safeguards.append(
      createReviewBooleanField({
        fieldName:
          "preserveOriginalVersion",
        label:
          "Preservar integralmente a versão anterior",
        description:
          "A versão submetida à análise permanecerá guardada para auditoria histórica."
      }),
      createReviewBooleanField({
        fieldName:
          "createRevisionSnapshot",
        label:
          "Criar fotografia técnica desta revisão",
        description:
          "Será armazenado um snapshot dos dados antes e depois da decisão."
      }),
      createReviewBooleanField({
        fieldName:
          "updateValidationStatus",
        label:
          "Atualizar o status de validação",
        description:
          "O status técnico acompanhará a decisão curatorial."
      }),
      createReviewBooleanField({
        fieldName:
          "updatePublicationStatus",
        label:
          "Atualizar autorização de publicação",
        description:
          "Use somente quando a decisão também alterar a condição pública do registro."
      })
    );

    form.appendChild(
      createFormSection({
        id: "fcu-review-integrity",
        eyebrow: "ETAPA 4",
        title:
          "Integridade e Rastreabilidade",
        description:
          "Nenhuma alteração deverá apagar silenciosamente o conteúdo anterior.",
        children: [
          safeguards
        ]
      })
    );

    const actions = createElement("div", {
      className: "fcu-form-actions"
    });

    actions.append(
      createElement("button", {
        type: "button",
        className:
          "fcu-secondary-button",
        dataset: {
          action:
            "cancel-record-review"
        },
        textContent:
          "Voltar à fila"
      }),
      createElement("button", {
        type: "button",
        className:
          "fcu-secondary-button",
        dataset: {
          action:
            "open-record-edit",
          recordId: record.id
        },
        textContent:
          "Editar conteúdo"
      }),
      createElement("button", {
        type: "submit",
        className:
          "fcu-primary-button",
        textContent:
          "Registrar decisão curatorial"
      })
    );

    form.appendChild(actions);

    section.appendChild(form);

    section.appendChild(
      createReviewHistoryPanel(record)
    );

    elements.content.appendChild(section);
    displayReviewErrors();
  }

  function createReviewBooleanField({
    fieldName,
    label,
    description
  }) {
    const reviewState =
      ensureReviewState();

    const wrapper =
      createElement("div", {
        className:
          "fcu-checkbox-field"
      });

    const input =
      createElement("input", {
        id: `fcu-review-${fieldName}`,
        type: "checkbox",
        checked: Boolean(
          reviewState[fieldName]
        ),
        dataset: {
          reviewField:
            fieldName
        }
      });

    const content =
      createElement("div", {
        className:
          "fcu-checkbox-field__content"
      });

    content.append(
      createElement("label", {
        for:
          `fcu-review-${fieldName}`,
        className:
          "fcu-checkbox-field__label",
        textContent: label
      }),
      createElement("p", {
        className:
          "fcu-checkbox-field__description",
        textContent: description
      })
    );

    wrapper.append(
      input,
      content
    );

    return wrapper;
  }

  /**
   * --------------------------------------------------------------------------
   * VALIDAÇÃO DA DECISÃO CURATORIAL
   * --------------------------------------------------------------------------
   */

  function validateReviewField(
    fieldName,
    value
  ) {
    const errors = [];
    const text =
      typeof value === "string"
        ? value.trim()
        : value;

    switch (fieldName) {
      case "reviewerName":
        if (!text) {
          errors.push(
            "Informe o responsável pela validação."
          );
        }
        break;

      case "reviewerRole":
        if (!text) {
          errors.push(
            "Informe a função ou representação do responsável."
          );
        }
        break;

      case "decision":
        if (!text) {
          errors.push(
            "Selecione a decisão curatorial."
          );
        }
        break;

      case "targetStage":
        if (!text) {
          errors.push(
            "Selecione o novo estágio do registro."
          );
        }
        break;

      case "reviewSummary":
        if (!text) {
          errors.push(
            "Informe o resumo da validação."
          );
        } else if (text.length < 30) {
          errors.push(
            "O resumo da validação deve ter pelo menos 30 caracteres."
          );
        }
        break;

      default:
        break;
    }

    return errors;
  }

  function validateReviewDecision() {
    const reviewState =
      ensureReviewState();

    const requiredFields = [
      "reviewerName",
      "reviewerRole",
      "decision",
      "targetStage",
      "reviewSummary"
    ];

    const errors = {};

    requiredFields.forEach(
      (fieldName) => {
        const fieldErrors =
          validateReviewField(
            fieldName,
            reviewState[fieldName]
          );

        if (fieldErrors.length > 0) {
          errors[fieldName] =
            fieldErrors[0];
        }
      }
    );

    const progress =
      calculateChecklistProgress();

    if (
      [
        "aprovar",
        "consolidar-memoria-permanente"
      ].includes(
        reviewState.decision
      ) &&
      progress.completed <
        progress.total
    ) {
      errors.checklist =
        "Todos os itens da conferência devem ser analisados antes da aprovação integral.";
    }

    if (
      reviewState.decision ===
        "solicitar-complementacao" &&
      !String(
        reviewState.requestedChanges ||
        ""
      ).trim()
    ) {
      errors.requestedChanges =
        "Informe quais complementações são necessárias.";
    }

    if (
      [
        "aprovar-com-restricoes",
        "marcar-como-restrito"
      ].includes(
        reviewState.decision
      ) &&
      !String(
        reviewState.restrictions || ""
      ).trim()
    ) {
      errors.restrictions =
        "Informe as restrições aplicáveis.";
    }

    state.reviewErrors = errors;

    displayReviewErrors();

    return {
      valid:
        Object.keys(errors).length === 0,
      errors
    };
  }

  function displayReviewErrors() {
    const errors =
      state.reviewErrors || {};

    queryAll(
      "[data-review-field-error]",
      elements.content
    ).forEach((element) => {
      const fieldName =
        element.dataset
          .reviewFieldError;

      element.textContent =
        errors[fieldName] || "";
    });

    queryAll(
      "[data-review-field]",
      elements.content
    ).forEach((control) => {
      const fieldName =
        control.dataset.reviewField;

      control.setAttribute(
        "aria-invalid",
        errors[fieldName]
          ? "true"
          : "false"
      );
    });

    const checklist =
      query(
        ".fcu-curation-checklist",
        elements.content
      );

    if (checklist) {
      checklist.dataset.invalid =
        errors.checklist
          ? "true"
          : "false";

      let errorElement =
        query(
          "[data-review-checklist-error]",
          checklist
        );

      if (!errorElement) {
        errorElement =
          createElement("p", {
            className:
              "fcu-form-field__error",
            dataset: {
              reviewChecklistError:
                "true"
            }
          });

        checklist.appendChild(
          errorElement
        );
      }

      errorElement.textContent =
        errors.checklist || "";
    }
  }

  function updateReviewFieldFromTarget(
    target
  ) {
    const fieldName =
      target?.dataset?.reviewField;

    if (!fieldName) {
      return false;
    }

    const reviewState =
      ensureReviewState();

    reviewState[fieldName] =
      target instanceof
        HTMLInputElement &&
      target.type === "checkbox"
        ? target.checked
        : target.value;

    const fieldErrors =
      validateReviewField(
        fieldName,
        reviewState[fieldName]
      );

    state.reviewErrors = {
      ...(state.reviewErrors || {}),
      [fieldName]:
        fieldErrors[0] || ""
    };

    displayReviewErrors();

    return true;
  }

  function updateReviewChecklist(
    target
  ) {
    const checklistId =
      target?.dataset
        ?.reviewChecklistId;

    if (!checklistId) {
      return false;
    }

    const reviewState =
      ensureReviewState();

    reviewState.checklist[
      checklistId
    ] = Boolean(target.checked);

    const progress =
      calculateChecklistProgress();

    const badge = query(
      "[data-review-checklist-progress]",
      elements.content
    );

    if (badge) {
      badge.textContent =
        `${progress.completed}/${progress.total}`;
    }

    const bar = query(
      "[data-review-checklist-bar]",
      elements.content
    );

    if (bar) {
      bar.style.width =
        `${progress.percentage}%`;

      bar.parentElement?.setAttribute(
        "aria-label",
        `Progresso da conferência: ${progress.percentage}%`
      );
    }

    if (
      state.reviewErrors?.checklist
    ) {
      delete state.reviewErrors.checklist;
      displayReviewErrors();
    }

    return true;
  }

  /**
   * --------------------------------------------------------------------------
   * CONSTRUÇÃO DA DECISÃO CURATORIAL
   * --------------------------------------------------------------------------
   */

  function mapDecisionToValidationStatus(
    decision
  ) {
    const mapping = {
      aprovar: "validado",
      "aprovar-com-restricoes":
        "validado-com-restricoes",
      "solicitar-complementacao":
        "complementacao-pendente",
      "devolver-para-revisao":
        "revisao-pendente",
      "encaminhar-validacao-comunitaria":
        "validacao-comunitaria-pendente",
      "encaminhar-validacao-institucional":
        "validacao-institucional-pendente",
      "marcar-como-restrito":
        "restrito",
      "consolidar-memoria-permanente":
        "validado-permanente",
      arquivar: "arquivado"
    };

    return (
      mapping[decision] ||
      "em-validacao"
    );
  }

  function mapDecisionToPublicationAuthorization(
    decision,
    currentAuthorization
  ) {
    const mapping = {
      aprovar: "autorizado",
      "aprovar-com-restricoes":
        "autorizado-com-restricoes",
      "marcar-como-restrito":
        "uso-interno",
      arquivar: "nao-autorizado"
    };

    return (
      mapping[decision] ||
      currentAuthorization
    );
  }

  function buildReviewHistoryEntry(
    record
  ) {
    const reviewState =
      ensureReviewState();

    const now =
      new Date().toISOString();

    const progress =
      calculateChecklistProgress();

    return {
      reviewId:
        `review-${Date.now()}-${Math.random()
          .toString(36)
          .slice(2, 8)}`,
      recordId: record.id,
      reviewedAt: now,
      reviewedBy:
        reviewState.reviewerName.trim(),
      reviewerRole:
        reviewState.reviewerRole.trim(),
      communityRepresentative:
        reviewState
          .communityRepresentative
          .trim() || null,
      institution:
        reviewState.institution.trim() ||
        null,
      decision:
        reviewState.decision,
      previousStage:
        getRecordStage(record),
      targetStage:
        reviewState.targetStage,
      reviewSummary:
        reviewState.reviewSummary.trim(),
      requestedChanges:
        reviewState.requestedChanges
          .trim() || null,
      restrictions:
        reviewState.restrictions.trim() ||
        null,
      validationSource:
        reviewState.validationSource
          .trim() || null,
      checklist: {
        ...reviewState.checklist
      },
      checklistProgress: progress,
      safeguards: {
        preserveOriginalVersion:
          Boolean(
            reviewState
              .preserveOriginalVersion
          ),
        createRevisionSnapshot:
          Boolean(
            reviewState
              .createRevisionSnapshot
          ),
        updateValidationStatus:
          Boolean(
            reviewState
              .updateValidationStatus
          ),
        updatePublicationStatus:
          Boolean(
            reviewState
              .updatePublicationStatus
          )
      }
    };
  }

  function buildReviewUpdatePayload(
    record
  ) {
    const reviewState =
      ensureReviewState();

    const raw =
      cloneSerializable(
        getRecordRawData(record)
      ) || {};

    const history =
      getRecordReviewHistory(record);

    const reviewEntry =
      buildReviewHistoryEntry(record);

    const currentAuthorization =
      getRecordPublicationAuthorization(
        record
      );

    const nextValidationStatus =
      mapDecisionToValidationStatus(
        reviewState.decision
      );

    const nextAuthorization =
      reviewState.updatePublicationStatus
        ? mapDecisionToPublicationAuthorization(
            reviewState.decision,
            currentAuthorization
          )
        : currentAuthorization;

    const previousSnapshot =
      reviewState.createRevisionSnapshot
        ? {
            capturedAt:
              new Date().toISOString(),
            capturedBy:
              reviewState.reviewerName,
            record:
              cloneSerializable(raw)
          }
        : null;

    const identity = {
      ...(raw.identity || {}),
      currentStage:
        reviewState.targetStage,
      status:
        reviewState.targetStage ===
          "memoria-permanente"
          ? "memoria-historica-permanente"
          : (
              raw.identity?.status ||
              getRecordValidationStatus(
                record
              )
            )
    };

    const validation = {
      ...(raw.validation || {}),
      status:
        reviewState.updateValidationStatus
          ? nextValidationStatus
          : (
              raw.validation?.status ||
              getRecordValidationStatus(
                record
              )
            ),
      level:
        reviewState.targetStage,
      validatedBy:
        reviewState.reviewerName,
      validatedAt:
        new Date().toISOString(),
      lastDecision:
        reviewState.decision,
      lastReviewSummary:
        reviewState.reviewSummary,
      pendingQuestions:
        reviewState.decision ===
          "solicitar-complementacao"
          ? [
              ...(
                raw.validation
                  ?.pendingQuestions ||
                []
              ),
              reviewState
                .requestedChanges
                .trim()
            ].filter(Boolean)
          : (
              raw.validation
                ?.pendingQuestions ||
              []
            )
    };

    const privacy = {
      ...(raw.privacy || {}),
      publicationAuthorization:
        nextAuthorization
    };

    if (
      reviewState.decision ===
      "marcar-como-restrito"
    ) {
      privacy.level =
        "restrito-a-curadoria";
    }

    if (
      reviewState.decision ===
      "aprovar-com-restricoes" &&
      privacy.level === "publico"
    ) {
      privacy.level =
        "publico-com-restricoes";
    }

    const provenance = {
      ...(raw.provenance || {}),
      updatedBy:
        reviewState.reviewerName,
      updatedAt:
        new Date().toISOString(),
      revision:
        Number(
          raw.provenance?.revision || 1
        ) + 1,
      revisionHistory: [
        ...history,
        reviewEntry
      ]
    };

    const workflow = {
      ...(raw.workflow || {}),
      currentStage:
        reviewState.targetStage,
      lastDecision:
        reviewState.decision,
      lastReviewedAt:
        reviewEntry.reviewedAt,
      lastReviewedBy:
        reviewEntry.reviewedBy,
      history: [
        ...(
          raw.workflow?.history ||
          []
        ),
        reviewEntry
      ]
    };

    const preservation = {
      ...(raw.preservation || {}),
      originalRecordsMustBePreserved:
        reviewState
          .preserveOriginalVersion,
      revisionHistoryRequired: true,
      silentDeletionForbidden: true,
      status:
        reviewState.targetStage ===
          "memoria-permanente"
          ? "preservacao-permanente"
          : (
              raw.preservation?.status ||
              "em-processamento"
            ),
      permanentMemoryEligible:
        [
          "aprovado",
          "memoria-permanente"
        ].includes(
          reviewState.targetStage
        )
    };

    return {
      recordId: record.id,
      decision:
        reviewState.decision,
      targetStage:
        reviewState.targetStage,
      review: reviewEntry,
      previousSnapshot,
      updatedRecord: {
        ...raw,
        identity,
        validation,
        privacy,
        provenance,
        workflow,
        preservation,
        reviewHistory: [
          ...history,
          reviewEntry
        ],
        lastUpdated:
          new Date().toISOString()
      }
    };
  }

  /**
   * --------------------------------------------------------------------------
   * INTEGRAÇÃO COM O CURATION ENGINE
   * --------------------------------------------------------------------------
   */

  async function applyReviewWithEngine(
    payload
  ) {
    const engine =
      getEngine() ||
      await prepareEngine();

    if (!engine) {
      throw new Error(
        "Curation Engine indisponível para registrar a decisão."
      );
    }

    const methodNames = [
      "reviewRecord",
      "validateRecord",
      "applyReviewDecision",
      "updateRecordStage",
      "updateRecord",
      "reviseRecord"
    ];

    for (const methodName of methodNames) {
      if (
        typeof engine[methodName] !==
        "function"
      ) {
        continue;
      }

      let result;

      if (
        methodName ===
          "updateRecord" ||
        methodName ===
          "reviseRecord"
      ) {
        result =
          engine[methodName](
            payload.recordId,
            payload.updatedRecord,
            payload.review
          );
      } else {
        result =
          engine[methodName](payload);
      }

      return await resolvePossiblePromise(
        result
      );
    }

    throw new Error(
      "O Curation Engine não possui um método compatível para validação."
    );
  }

  function normalizeReviewedRecord(
    engineResult,
    payload
  ) {
    if (isObject(engineResult)) {
      const candidate =
        engineResult.record ||
        engineResult.updatedRecord ||
        engineResult.data ||
        engineResult.result;

      if (isObject(candidate)) {
        return candidate;
      }

      if (
        engineResult.identity ||
        engineResult.validation ||
        engineResult.provenance
      ) {
        return engineResult;
      }
    }

    return payload.updatedRecord;
  }

  async function submitRecordReview() {
    const record =
      getSelectedReviewRecord();

    if (!record) {
      notify(
        "Nenhum registro foi selecionado para validação.",
        "error"
      );

      return false;
    }

    const validation =
      validateReviewDecision();

    if (!validation.valid) {
      notify(
        "Revise os campos obrigatórios da decisão curatorial.",
        "warning"
      );

      const firstField =
        Object.keys(
          validation.errors
        )[0];

      if (
        firstField &&
        firstField !== "checklist"
      ) {
        const control =
          document.getElementById(
            `fcu-review-${firstField}`
          );

        control?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

        window.setTimeout(
          () => control?.focus(),
          350
        );
      }

      return false;
    }

    const payload =
      buildReviewUpdatePayload(record);

    const decisionLabel =
      getDecisionLabel(
        payload.decision
      );

    const confirmed =
      window.confirm(
        `${decisionLabel}\n\n` +
        `Registro: ${getRecordTitle(record)}\n` +
        `Novo estágio: ${getReviewStageLabel(payload.targetStage)}\n\n` +
        "A decisão será registrada no histórico permanente. Deseja continuar?"
      );

    if (!confirmed) {
      return false;
    }

    setBusy(
      true,
      "Registrando decisão curatorial..."
    );

    try {
      const engineResult =
        await applyReviewWithEngine(
          payload
        );

      const reviewedRawRecord =
        normalizeReviewedRecord(
          engineResult,
          payload
        );

      const normalized =
        normalizeRecord(
          reviewedRawRecord,
          state.records.findIndex(
            (item) =>
              item.id === record.id
          )
        );

      if (!normalized.id) {
        normalized.id = record.id;
      }

      normalized.raw =
        reviewedRawRecord;

      state.records =
        state.records.map((item) =>
          item.id === record.id
            ? normalized
            : item
        );

      state.statistics =
        calculateStatistics(
          state.records,
          state.observations,
          state.activities
        );

      const reviewEntry =
        payload.review;

      state.lastReviewResult = {
        recordId: record.id,
        decision:
          payload.decision,
        targetStage:
          payload.targetStage,
        reviewedAt:
          reviewEntry.reviewedAt
      };

      resetReviewState();

      notify(
        `Decisão registrada: ${decisionLabel}.`,
        "success"
      );

      state.selectedRecordId =
        record.id;

      navigateTo(
        CONFIG.views.details,
        {
          recordId: record.id
        }
      );

      return true;
    } catch (error) {
      state.lastError = error;

      console.error(
        `[${MODULE_NAME}] Falha ao registrar a decisão curatorial.`,
        error
      );

      notify(
        "Não foi possível registrar a decisão. Nenhuma alteração silenciosa foi aplicada.",
        "error"
      );

      return false;
    } finally {
      setBusy(false);
    }
  }

  /**
   * --------------------------------------------------------------------------
   * EDIÇÃO CONTROLADA DE REGISTROS
   * --------------------------------------------------------------------------
   */

  function prepareFormStateFromRecord(
    record
  ) {
    const raw =
      getRecordRawData(record) || {};

    const identity =
      raw.identity || {};

    const temporal =
      raw.temporalContext || {};

    const narrative =
      raw.narrative || {};

    const cultural =
      raw.culturalContext || {};

    const source =
      raw.source || {};

    const privacy =
      raw.privacy || {};

    const validation =
      raw.validation || {};

    const provenance =
      raw.provenance || {};

    state.form = {
      ...createDefaultFormState(),

      title:
        identity.title ||
        getRecordTitle(record),

      eventDate:
        temporal.eventDate ||
        getRecordEventDate(record) ||
        "",

      recordType:
        identity.recordType ||
        record.recordType ||
        "acontecimento-cultural",

      sourceType:
        source.type ||
        "registro-de-campo",

      summary:
        raw.summary?.text ||
        record.summary ||
        "",

      narrative:
        narrative
          .historicalNarrative ||
        record.narrative ||
        "",

      factualBasis:
        narrative.factualBasis || "",

      interpretation:
        narrative
          .curatorialInterpretation ||
        "",

      uncertainties:
        narrative.uncertainties || "",

      oralHistoryNotes:
        narrative.oralHistoryNotes ||
        "",

      culturalDimension:
        cultural.culturalDimension ||
        "manifestacao-cultural",

      heritageNature:
        cultural.heritageNature ||
        "patrimonio-imaterial",

      communityContext:
        cultural.communityContext ||
        "",

      historicalContext:
        cultural.historicalContext ||
        "",

      keywords:
        Array.isArray(
          cultural.keywords
        )
          ? [...cultural.keywords]
          : [],

      activityId:
        source.activityId || "",

      observationIds:
        Array.isArray(
          source.observationIds
        )
          ? [...source.observationIds]
          : [],

      privacyLevel:
        privacy.level || "publico",

      consentStatus:
        privacy.consentStatus ||
        "nao-aplicavel",

      publicationAuthorization:
        privacy
          .publicationAuthorization ||
        "aguardando-autorizacao",

      locationDisclosure:
        privacy.locationDisclosure ||
        "conforme-politica-territorial",

      containsChildren:
        Boolean(
          privacy.containsChildren
        ),

      containsPrivateResidence:
        Boolean(
          privacy
            .containsPrivateResidence
        ),

      containsSacredOrRestrictedKnowledge:
        Boolean(
          privacy
            .containsSacredOrRestrictedKnowledge
        ),

      containsPersonalData:
        Boolean(
          privacy
            .containsPersonalData
        ),

      containsSensitivePersonalData:
        Boolean(
          privacy
            .containsSensitivePersonalData
        ),

      validationLevel:
        validation.level ||
        "nao-verificado",

      credits:
        Array.isArray(
          provenance.credits
        )
          ? provenance.credits.join(
              "\n"
            )
          : (
              provenance.credits ||
              provenance.createdBy ||
              ""
            ),

      notes:
        raw.editorial?.notes ||
        raw.notes ||
        ""
    };

    state.editingRecordId =
      record.id;

    state.formErrors = {};
    state.formTouched = {};
  }

  function openRecordEdit(recordId) {
    const record =
      state.records.find(
        (item) =>
          item.id === recordId
      );

    if (!record) {
      notify(
        "Registro não encontrado para edição.",
        "error"
      );

      return;
    }

    prepareFormStateFromRecord(record);

    state.currentView =
      CONFIG.views.create;

    updateNavigationState(
      CONFIG.views.create
    );

    renderCreateRecordView();

    const heading = query(
      ".fcu-section-heading h3, .fcu-section-heading h2",
      elements.content
    );

    if (heading) {
      heading.textContent =
        "Editar Registro Histórico";
    }

    const submitButton = query(
      '[data-curation-form="true"] button[type="submit"]',
      elements.content
    );

    if (submitButton) {
      submitButton.textContent =
        "Salvar nova revisão";
    }

    const intro = query(
      ".fcu-form-intro",
      elements.content
    );

    if (intro) {
      intro.prepend(
        createElement("div", {
          className:
            "fcu-edit-warning",
          textContent:
            "Modo de edição controlada: a versão anterior será preservada no histórico."
        })
      );
    }
  }

  function buildEditedRecordPayload(
    originalRecord
  ) {
    const formPayload =
      buildCurationRecordPayload();

    const originalRaw =
      cloneSerializable(
        getRecordRawData(
          originalRecord
        )
      ) || {};

    const now =
      new Date().toISOString();

    const revisionEntry = {
      revisionId:
        `revision-${Date.now()}-${Math.random()
          .toString(36)
          .slice(2, 8)}`,
      type: "edicao-curatorial",
      createdAt: now,
      createdBy:
        formPayload.provenance
          .createdBy,
      previousRecord:
        cloneSerializable(
          originalRaw
        ),
      summary:
        "Nova revisão criada pela interface de Curadoria Histórica."
    };

    return {
      ...originalRaw,

      identity: {
        ...(originalRaw.identity || {}),
        ...formPayload.identity,
        recordId:
          originalRecord.id,
        currentStage:
          getRecordStage(
            originalRecord
          ),
        status:
          originalRaw.identity
            ?.status ||
          formPayload.identity.status
      },

      temporalContext: {
        ...(originalRaw.temporalContext ||
          {}),
        ...formPayload.temporalContext,
        createdAt:
          originalRaw
            .temporalContext
            ?.createdAt ||
          formPayload
            .temporalContext
            .createdAt,
        updatedAt: now
      },

      summary:
        formPayload.summary,

      narrative:
        formPayload.narrative,

      culturalContext:
        formPayload.culturalContext,

      source:
        formPayload.source,

      relationships:
        formPayload.relationships,

      privacy:
        formPayload.privacy,

      validation: {
        ...(originalRaw.validation ||
          {}),
        ...formPayload.validation,
        status:
          "revisao-pendente",
        level:
          originalRaw.validation
            ?.level ||
          formPayload.validation.level,
        validatedBy: null,
        validatedAt: null
      },

      provenance: {
        ...(originalRaw.provenance ||
          {}),
        updatedBy:
          formPayload.provenance
            .createdBy,
        updatedAt: now,
        revision:
          Number(
            originalRaw.provenance
              ?.revision || 1
          ) + 1,
        revisionHistory: [
          ...(
            originalRaw.provenance
              ?.revisionHistory ||
            []
          ),
          revisionEntry
        ]
      },

      preservation: {
        ...(originalRaw.preservation ||
          {}),
        originalRecordsMustBePreserved:
          true,
        silentDeletionForbidden: true,
        revisionHistoryRequired: true
      },

      editorial:
        formPayload.editorial,

      lastUpdated: now
    };
  }

  async function updateRecordWithEngine(
    recordId,
    updatedRecord
  ) {
    const engine =
      getEngine() ||
      await prepareEngine();

    if (!engine) {
      throw new Error(
        "Curation Engine indisponível para edição."
      );
    }

    const methodNames = [
      "updateRecord",
      "reviseRecord",
      "saveRevision",
      "replaceRecord"
    ];

    for (const methodName of methodNames) {
      if (
        typeof engine[methodName] ===
        "function"
      ) {
        const result =
          engine[methodName](
            recordId,
            updatedRecord
          );

        return await resolvePossiblePromise(
          result
        );
      }
    }

    throw new Error(
      "O Curation Engine não apresentou método compatível para edição."
    );
  }

  async function submitRecordEdit() {
    const recordId =
      state.editingRecordId;

    const originalRecord =
      state.records.find(
        (record) =>
          record.id === recordId
      );

    if (!originalRecord) {
      notify(
        "O registro original não foi encontrado.",
        "error"
      );

      return false;
    }

    const validation =
      validateCompleteForm();

    if (!validation.valid) {
      notify(
        "Revise os campos antes de salvar a nova versão.",
        "warning"
      );

      return false;
    }

    const updatedRecord =
      buildEditedRecordPayload(
        originalRecord
      );

    const confirmed =
      window.confirm(
        "Salvar uma nova revisão deste registro?\n\n" +
        "A versão anterior será preservada e o registro retornará para revisão curatorial."
      );

    if (!confirmed) {
      return false;
    }

    setBusy(
      true,
      "Salvando nova revisão..."
    );

    try {
      const result =
        await updateRecordWithEngine(
          recordId,
          updatedRecord
        );

      const resultRecord =
        isObject(result)
          ? (
              result.record ||
              result.updatedRecord ||
              result.data ||
              result
            )
          : updatedRecord;

      const normalized =
        normalizeRecord(
          resultRecord,
          state.records.findIndex(
            (record) =>
              record.id === recordId
          )
        );

      normalized.id = recordId;
      normalized.raw =
        resultRecord;

      state.records =
        state.records.map((record) =>
          record.id === recordId
            ? normalized
            : record
        );

      state.statistics =
        calculateStatistics(
          state.records,
          state.observations,
          state.activities
        );

      state.editingRecordId = null;
      resetFormState();

      notify(
        "Nova revisão salva. O registro retornou para validação curatorial.",
        "success"
      );

      state.selectedRecordId =
        recordId;

      navigateTo(
        CONFIG.views.details,
        {
          recordId
        }
      );

      return true;
    } catch (error) {
      state.lastError = error;

      console.error(
        `[${MODULE_NAME}] Erro ao salvar revisão.`,
        error
      );

      saveFormDraft();

      notify(
        "A nova revisão não pôde ser salva. O formulário permanece preservado como rascunho local.",
        "error"
      );

      return false;
    } finally {
      setBusy(false);
    }
  }

  /**
   * --------------------------------------------------------------------------
   * SUBSTITUIÇÃO CONTROLADA DO ENVIO DO FORMULÁRIO
   * --------------------------------------------------------------------------
   */

  const originalSubmitCurationFormPartFour =
    submitCurationForm;

  submitCurationForm =
    async function enhancedSubmitCurationForm() {
      if (state.editingRecordId) {
        return await submitRecordEdit();
      }

      return await originalSubmitCurationFormPartFour();
    };

  /**
   * --------------------------------------------------------------------------
   * ESTILOS DA PARTE 4
   * --------------------------------------------------------------------------
   */

  function injectReviewStyles() {
    const styleId =
      `${CONFIG.styleId}-review`;

    if (
      document.getElementById(styleId)
    ) {
      return;
    }

    const style =
      document.createElement("style");

    style.id = styleId;

    style.textContent = `
      #${CONFIG.rootId} .fcu-review-controls {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(190px, 280px);
        gap: 12px;
        margin: 17px 0;
      }

      #${CONFIG.rootId} .fcu-review-queue {
        display: grid;
        gap: 14px;
      }

      #${CONFIG.rootId} .fcu-review-queue-card {
        display: grid;
        gap: 13px;
        padding: 16px;
        border: 1px solid var(--fcu-border);
        border-radius: var(--fcu-radius);
        background:
          linear-gradient(
            145deg,
            rgba(5, 36, 55, 0.98),
            rgba(3, 22, 37, 0.98)
          );
      }

      #${CONFIG.rootId}
      .fcu-review-queue-card__heading {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 12px;
      }

      #${CONFIG.rootId}
      .fcu-review-queue-card__heading h4 {
        margin: 5px 0 0;
        color: var(--fcu-text);
        font-size: 1.06rem;
      }

      #${CONFIG.rootId}
      .fcu-review-queue-card__date {
        color: var(--fcu-gold);
        font-size: 0.77rem;
        font-weight: 850;
        letter-spacing: 0.04em;
      }

      #${CONFIG.rootId}
      .fcu-review-queue-card__metadata,
      #${CONFIG.rootId}
      .fcu-review-queue-card__actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      #${CONFIG.rootId}
      .fcu-review-queue-card__actions {
        justify-content: flex-end;
      }

      #${CONFIG.rootId}
      .fcu-review-requirements {
        display: grid;
        gap: 7px;
        margin: 0;
        padding-left: 19px;
      }

      #${CONFIG.rootId}
      .fcu-review-requirement {
        color: var(--fcu-muted);
        line-height: 1.45;
      }

      #${CONFIG.rootId}
      .fcu-review-requirement--error {
        color: #ffb0b0;
      }

      #${CONFIG.rootId}
      .fcu-review-requirement--warning {
        color: #ffe29a;
      }

      #${CONFIG.rootId}
      .fcu-review-requirement--info {
        color: #a9d8ff;
      }

      #${CONFIG.rootId}
      .fcu-review-record-overview {
        display: grid;
        grid-template-columns:
          repeat(auto-fit, minmax(190px, 1fr));
        gap: 10px;
        margin-bottom: 16px;
      }

      #${CONFIG.rootId}
      .fcu-review-analysis-panel,
      #${CONFIG.rootId}
      .fcu-review-history-panel {
        display: grid;
        gap: 13px;
        margin: 16px 0;
        padding: 16px;
        border: 1px solid var(--fcu-border);
        border-radius: var(--fcu-radius);
        background: rgba(0, 16, 28, 0.66);
      }

      #${CONFIG.rootId}
      .fcu-review-analysis-panel h4,
      #${CONFIG.rootId}
      .fcu-review-history-panel h4 {
        margin: 0;
        color: var(--fcu-text);
      }

      #${CONFIG.rootId}
      .fcu-review-analysis-list {
        display: grid;
        gap: 9px;
      }

      #${CONFIG.rootId}
      .fcu-review-analysis-item {
        display: grid;
        gap: 5px;
        padding: 12px;
        border-left: 4px solid var(--fcu-border);
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.035);
      }

      #${CONFIG.rootId}
      .fcu-review-analysis-item strong {
        color: var(--fcu-text);
      }

      #${CONFIG.rootId}
      .fcu-review-analysis-item p {
        margin: 0;
        color: var(--fcu-muted);
      }

      #${CONFIG.rootId}
      .fcu-review-analysis-item--error {
        border-left-color: #ff6f6f;
      }

      #${CONFIG.rootId}
      .fcu-review-analysis-item--warning {
        border-left-color: #ffd531;
      }

      #${CONFIG.rootId}
      .fcu-review-analysis-item--info {
        border-left-color: #67b7ff;
      }

      #${CONFIG.rootId}
      .fcu-record-review-form {
        display: grid;
        gap: 16px;
      }

      #${CONFIG.rootId}
      .fcu-curation-checklist {
        display: grid;
        gap: 10px;
      }

      #${CONFIG.rootId}
      .fcu-curation-checklist[data-invalid="true"] {
        padding: 11px;
        border: 1px solid rgba(255, 90, 90, 0.55);
        border-radius: 12px;
      }

      #${CONFIG.rootId}
      .fcu-curation-checklist__heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
      }

      #${CONFIG.rootId}
      .fcu-curation-checklist__heading h4 {
        margin: 0;
        color: var(--fcu-text);
      }

      #${CONFIG.rootId}
      .fcu-curation-checklist__item {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 11px;
        padding: 12px;
        border: 1px solid var(--fcu-border);
        border-radius: 11px;
        background: rgba(0, 0, 0, 0.14);
        cursor: pointer;
      }

      #${CONFIG.rootId}
      .fcu-curation-checklist__item:has(input:checked) {
        border-color: rgba(67, 224, 141, 0.54);
        background: rgba(67, 224, 141, 0.07);
      }

      #${CONFIG.rootId}
      .fcu-curation-checklist__item input {
        width: 22px;
        height: 22px;
        accent-color: var(--fcu-green);
      }

      #${CONFIG.rootId}
      .fcu-curation-checklist__item span {
        display: grid;
        gap: 4px;
      }

      #${CONFIG.rootId}
      .fcu-curation-checklist__item strong {
        color: var(--fcu-text);
      }

      #${CONFIG.rootId}
      .fcu-curation-checklist__item small {
        color: var(--fcu-muted);
        line-height: 1.45;
      }

      #${CONFIG.rootId}
      .fcu-curation-checklist__bar {
        width: 100%;
        height: 10px;
        overflow: hidden;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.08);
      }

      #${CONFIG.rootId}
      .fcu-curation-checklist__bar span {
        display: block;
        height: 100%;
        border-radius: inherit;
        background:
          linear-gradient(
            90deg,
            var(--fcu-orange),
            var(--fcu-gold),
            var(--fcu-green)
          );
        transition: width 180ms ease;
      }

      #${CONFIG.rootId}
      .fcu-review-timeline {
        display: grid;
        gap: 12px;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      #${CONFIG.rootId}
      .fcu-review-timeline li {
        position: relative;
        display: grid;
        gap: 5px;
        padding: 12px 12px 12px 17px;
        border-left: 3px solid var(--fcu-gold);
        border-radius: 8px;
        background: rgba(0, 0, 0, 0.14);
      }

      #${CONFIG.rootId}
      .fcu-review-timeline strong {
        color: var(--fcu-text);
      }

      #${CONFIG.rootId}
      .fcu-review-timeline small {
        color: var(--fcu-muted);
      }

      #${CONFIG.rootId}
      .fcu-review-timeline p {
        margin: 2px 0 0;
        color: var(--fcu-text);
        white-space: pre-wrap;
      }

      #${CONFIG.rootId}
      .fcu-edit-warning {
        padding: 11px 13px;
        border: 1px solid rgba(255, 213, 49, 0.55);
        border-radius: 10px;
        background: rgba(255, 213, 49, 0.08);
        color: var(--fcu-gold);
        font-weight: 800;
      }

      #${CONFIG.rootId}
      .fcu-success-text {
        color: var(--fcu-green);
      }

      @media (max-width: 720px) {
        #${CONFIG.rootId}
        .fcu-review-controls {
          grid-template-columns: 1fr;
        }

        #${CONFIG.rootId}
        .fcu-review-queue-card__heading {
          display: grid;
        }

        #${CONFIG.rootId}
        .fcu-review-queue-card__actions {
          display: grid;
          grid-template-columns: 1fr;
        }

        #${CONFIG.rootId}
        .fcu-review-queue-card__actions button {
          width: 100%;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /**
   * --------------------------------------------------------------------------
   * EVENTOS DA PARTE 4
   * --------------------------------------------------------------------------
   */

  function handlePartFourInput(target) {
    if (
      target?.dataset
        ?.reviewQueueSearch ===
      "true"
    ) {
      state.reviewQueueSearch =
        target.value;

      const list = query(
        "[data-review-queue-list]",
        elements.content
      );

      if (list) {
        renderReviewQueueList(list);
      }

      return true;
    }

    if (
      target?.dataset
        ?.reviewQueueStageFilter ===
      "true"
    ) {
      state.reviewQueueStageFilter =
        target.value;

      const list = query(
        "[data-review-queue-list]",
        elements.content
      );

      if (list) {
        renderReviewQueueList(list);
      }

      return true;
    }

    if (
      updateReviewChecklist(target)
    ) {
      return true;
    }

    if (
      updateReviewFieldFromTarget(
        target
      )
    ) {
      return true;
    }

    return false;
  }

  async function handlePartFourAction(
    action,
    target
  ) {
    switch (action) {
      case "open-review-queue":
        navigateTo("review-queue");
        return true;

      case "open-record-review": {
        const recordId =
          target?.dataset?.recordId;

        if (recordId) {
          renderRecordReviewView(
            recordId
          );
        }

        return true;
      }

      case "cancel-record-review":
        resetReviewState();
        navigateTo("review-queue");
        return true;

      case "open-record-edit": {
        const recordId =
          target?.dataset?.recordId ||
          state.selectedReviewRecordId ||
          state.selectedRecordId;

        if (recordId) {
          openRecordEdit(recordId);
        }

        return true;
      }

      case "cancel-record-edit":
        state.editingRecordId = null;
        resetFormState();

        navigateTo(
          CONFIG.views.details,
          {
            recordId:
              state.selectedRecordId
          }
        );

        return true;

      default:
        return false;
    }
  }

  async function handlePartFourSubmit(
    event
  ) {
    const form =
      event.target.closest(
        "[data-record-review-form]"
      );

    if (!form) {
      return false;
    }

    event.preventDefault();

    await submitRecordReview();

    return true;
  }

  /**
   * --------------------------------------------------------------------------
   * INTEGRAÇÃO COM A NAVEGAÇÃO
   * --------------------------------------------------------------------------
   */

  const originalNavigateToPartFour =
    navigateTo;

  navigateTo =
    function enhancedNavigateToPartFour(
      viewName,
      options = {}
    ) {
      if (
        viewName === "review-queue"
      ) {
        if (
          state.currentView !==
          viewName
        ) {
          state.previousView =
            state.currentView;
        }

        state.currentView =
          viewName;

        updateNavigationState(
          viewName
        );

        renderReviewQueueView();

        writeStorage(
          CONFIG.storageKeys.lastView,
          viewName
        );

        if (elements.content) {
          elements.content.scrollTop = 0;
        }

        return;
      }

      if (
        viewName === "record-review"
      ) {
        const recordId =
          options.recordId ||
          state.selectedReviewRecordId ||
          state.selectedRecordId;

        if (recordId) {
          state.currentView =
            viewName;

          updateNavigationState(
            viewName
          );

          renderRecordReviewView(
            recordId
          );

          return;
        }
      }

      originalNavigateToPartFour(
        viewName,
        options
      );
    };

  /**
   * --------------------------------------------------------------------------
   * PREPARAÇÃO DA PARTE 4
   * --------------------------------------------------------------------------
   */

  function prepareReviewInterface() {
    injectReviewStyles();
    ensureReviewState();

    if (
      !state.reviewQueueSearch
    ) {
      state.reviewQueueSearch = "";
    }

    if (
      !state.reviewQueueStageFilter
    ) {
      state.reviewQueueStageFilter =
        "";
    }
  }

  /**
   * --------------------------------------------------------------------------
   * CONTINUA NA PARTE 5
   * --------------------------------------------------------------------------
   *
   * A Parte 5 acrescentará:
   *
   * - exportação dos registros em JSON;
   * - exportação da fila e das estatísticas;
   * - geração de relatórios curatoriais;
   * - relatório de pendências e conflitos;
   * - pacote de preservação histórica;
   * - auditoria de integridade;
   * - cópia de segurança local;
   * - importação controlada;
   * - integração dos botões da interface;
   * - delegação central definitiva dos eventos;
   * - navegação completa;
   * - inicialização automática;
   * - API pública FestancaCurationUI;
   * - fechamento definitivo do módulo.
   *
   * NÃO INSIRA AINDA:
   *
   * })(window, document);
   *
   * O encerramento será incluído somente na última parte.
   * --------------------------------------------------------------------------
   */

 PERFEITO!

Gerar a Parte 4: apps/festanca-2026/js/curation-ui.js

  /**
   * ==========================================================================
   * FESTANÇA DE VILA BELA 2026
   * CURATION UI — PARTE 5 E FINAL
   * EXPORTAÇÃO, PRESERVAÇÃO, AUDITORIA E INICIALIZAÇÃO
   * ==========================================================================
   */

  /**
   * --------------------------------------------------------------------------
   * CONFIGURAÇÕES DE EXPORTAÇÃO E PRESERVAÇÃO
   * --------------------------------------------------------------------------
   */

  const EXPORT_CONFIG = Object.freeze({
    repositoryFileName:
      "curation-records-2026.json",

    statisticsFileName:
      "curation-statistics-2026.json",

    pendingReportFileName:
      "curation-pending-report-2026.json",

    preservationPackageFileName:
      "festanca-2026-preservation-package.json",

    backupFileName:
      "festanca-2026-curation-backup.json",

    auditFileName:
      "festanca-2026-curation-audit.json",

    mimeType:
      "application/json;charset=utf-8",

    indentation: 2,

    repositoryPath:
      "apps/festanca-2026/data/curation-records-2026.json"
  });

  const IMPORT_CONFIG = Object.freeze({
    acceptedTypes: [
      "application/json",
      "text/json",
      ""
    ],

    maximumSizeBytes:
      10 * 1024 * 1024,

    supportedSchemaVersions: [
      "1.0.0"
    ]
  });

  /**
   * --------------------------------------------------------------------------
   * UTILITÁRIOS DE EXPORTAÇÃO
   * --------------------------------------------------------------------------
   */

  function createTimestampForFileName(
    date = new Date()
  ) {
    const year =
      String(date.getFullYear());

    const month =
      String(
        date.getMonth() + 1
      ).padStart(2, "0");

    const day =
      String(
        date.getDate()
      ).padStart(2, "0");

    const hours =
      String(
        date.getHours()
      ).padStart(2, "0");

    const minutes =
      String(
        date.getMinutes()
      ).padStart(2, "0");

    const seconds =
      String(
        date.getSeconds()
      ).padStart(2, "0");

    return [
      year,
      month,
      day,
      hours,
      minutes,
      seconds
    ].join("-");
  }

  function insertTimestampInFileName(
    fileName,
    timestamp =
      createTimestampForFileName()
  ) {
    const lastDotIndex =
      fileName.lastIndexOf(".");

    if (lastDotIndex < 0) {
      return `${fileName}-${timestamp}`;
    }

    const base =
      fileName.slice(
        0,
        lastDotIndex
      );

    const extension =
      fileName.slice(
        lastDotIndex
      );

    return `${base}-${timestamp}${extension}`;
  }

  function stringifyJSON(
    value,
    indentation =
      EXPORT_CONFIG.indentation
  ) {
    return JSON.stringify(
      value,
      null,
      indentation
    );
  }

  function downloadTextFile({
    content,
    fileName,
    mimeType =
      EXPORT_CONFIG.mimeType
  }) {
    if (
      typeof Blob === "undefined" ||
      typeof URL === "undefined" ||
      !document?.body
    ) {
      throw new Error(
        "O ambiente atual não oferece suporte ao download automático."
      );
    }

    const blob = new Blob(
      [content],
      {
        type: mimeType
      }
    );

    const objectUrl =
      URL.createObjectURL(blob);

    const anchor =
      document.createElement("a");

    anchor.href = objectUrl;
    anchor.download = fileName;
    anchor.hidden = true;

    document.body.appendChild(
      anchor
    );

    anchor.click();
    anchor.remove();

    window.setTimeout(
      () => {
        URL.revokeObjectURL(
          objectUrl
        );
      },
      1000
    );

    return {
      fileName,
      size: blob.size,
      mimeType
    };
  }

  function downloadJSON({
    data,
    fileName,
    withTimestamp = false
  }) {
    const finalFileName =
      withTimestamp
        ? insertTimestampInFileName(
            fileName
          )
        : fileName;

    const content =
      stringifyJSON(data);

    return downloadTextFile({
      content,
      fileName:
        finalFileName,
      mimeType:
        EXPORT_CONFIG.mimeType
    });
  }

  function copyTextToClipboard(
    text
  ) {
    if (
      navigator.clipboard &&
      typeof navigator.clipboard
        .writeText ===
        "function"
    ) {
      return navigator.clipboard
        .writeText(text);
    }

    return new Promise(
      (resolve, reject) => {
        const textarea =
          document.createElement(
            "textarea"
          );

        textarea.value = text;
        textarea.setAttribute(
          "readonly",
          "readonly"
        );

        textarea.style.position =
          "fixed";

        textarea.style.opacity =
          "0";

        document.body.appendChild(
          textarea
        );

        textarea.select();

        try {
          const copied =
            document.execCommand(
              "copy"
            );

          textarea.remove();

          if (copied) {
            resolve();
          } else {
            reject(
              new Error(
                "O navegador não confirmou a cópia."
              )
            );
          }
        } catch (error) {
          textarea.remove();
          reject(error);
        }
      }
    );
  }

  /**
   * --------------------------------------------------------------------------
   * OBTENÇÃO DO REPOSITÓRIO OFICIAL
   * --------------------------------------------------------------------------
   */

  async function getRepositoryFromEngine() {
    const engine =
      getEngine() ||
      await prepareEngine();

    if (!engine) {
      throw new Error(
        "O Motor de Curadoria não está disponível."
      );
    }

    const methodNames = [
      "getRepository",
      "prepareRepositoryForExport",
      "getResult"
    ];

    for (const methodName of methodNames) {
      if (
        typeof engine[methodName] !==
        "function"
      ) {
        continue;
      }

      const result =
        engine[methodName]();

      const resolved =
        await resolvePossiblePromise(
          result
        );

      if (
        isObject(resolved) &&
        Array.isArray(
          resolved.records
        )
      ) {
        return resolved;
      }

      if (
        isObject(resolved?.repository) &&
        Array.isArray(
          resolved.repository.records
        )
      ) {
        return resolved.repository;
      }

      if (
        isObject(resolved?.data) &&
        Array.isArray(
          resolved.data.records
        )
      ) {
        return resolved.data;
      }
    }

    return buildRepositoryFromUIState();
  }

  function buildRepositoryFromUIState() {
    const records =
      state.records.map(
        (record) =>
          cloneSerializable(
            getRecordRawData(record)
          )
      );

    return {
      schemaVersion: "1.0.0",
      repositoryId:
        "festanca-2026-curation-records",
      repositoryName:
        "Registros Históricos Curatoriais da FESTANÇA 2026",
      eventId:
        "festanca-vila-bela-2026",
      eventName:
        "Festança de Vila Bela 2026",

      repositoryStatus: {
        status: "ativo",
        publicationStatus:
          "uso-interno",
        recordsOpenForCreation:
          true,
        recordsOpenForRevision:
          true
      },

      statistics:
        state.statistics ||
        calculateStatistics(
          state.records,
          state.observations,
          state.activities
        ),

      records,

      repositoryProvenance: {
        origin:
          "festanca-curation-ui",
        generatedAt:
          new Date().toISOString(),
        interfaceVersion:
          MODULE_VERSION,
        repositoryPath:
          EXPORT_CONFIG.repositoryPath
      },

      lastUpdated:
        new Date()
          .toISOString()
          .slice(0, 10)
    };
  }

  /**
   * --------------------------------------------------------------------------
   * RELATÓRIO DE ESTATÍSTICAS
   * --------------------------------------------------------------------------
   */

  function buildStatisticsReport() {
    const statistics =
      state.statistics ||
      calculateStatistics(
        state.records,
        state.observations,
        state.activities
      );

    return {
      schemaVersion: "1.0.0",

      reportId:
        "festanca-2026-curation-statistics",

      reportName:
        "Estatísticas da Curadoria Histórica da FESTANÇA 2026",

      generatedAt:
        new Date().toISOString(),

      generatedBy:
        MODULE_NAME,

      interfaceVersion:
        MODULE_VERSION,

      summary: {
        totalRecords:
          statistics.totalRecords,

        totalObservations:
          statistics.totalObservations,

        totalActivities:
          statistics.totalActivities,

        validatedRecords:
          statistics.validatedRecords,

        draftRecords:
          statistics.draftRecords,

        permanentMemoryRecords:
          statistics
            .permanentMemoryRecords,

        protectedRecords:
          statistics.protectedRecords,

        mediaAssets:
          statistics.mediaAssets,

        testimonies:
          statistics.testimonies
      },

      qualityIndicators: {
        averageCompleteness:
          statistics
            .averageCompleteness,

        validationRate:
          statistics.validationRate,

        observationLinkRate:
          statistics
            .observationLinkRate,

        activityLinkRate:
          statistics
            .activityLinkRate
      },

      distributions: {
        byStatus:
          statistics.byStatus,

        byStage:
          statistics.byStage,

        bySourceType:
          statistics.bySourceType,

        byPrivacyLevel:
          statistics
            .byPrivacyLevel,

        byValidationLevel:
          statistics
            .byValidationLevel
      }
    };
  }

  /**
   * --------------------------------------------------------------------------
   * RELATÓRIO DE PENDÊNCIAS E CONFLITOS
   * --------------------------------------------------------------------------
   */

  function buildPendingReport() {
    const records =
      state.records.map(
        (record) => {
          const priority =
            calculateRecordReviewPriority(
              record
            );

          return {
            recordId:
              record.id,

            title:
              getRecordTitle(
                record
              ),

            eventDate:
              getRecordEventDate(
                record
              ),

            currentStage:
              getRecordStage(
                record
              ),

            validationStatus:
              getRecordValidationStatus(
                record
              ),

            privacyLevel:
              getRecordPrivacyLevel(
                record
              ),

            priorityScore:
              priority.score,

            errorCount:
              priority.errorCount,

            warningCount:
              priority.warningCount,

            requirements:
              priority.requirements
          };
        }
      )
      .filter(
        (item) =>
          item.requirements.length >
          0
      )
      .sort(
        (first, second) =>
          second.priorityScore -
          first.priorityScore
      );

    return {
      schemaVersion: "1.0.0",

      reportId:
        "festanca-2026-curation-pending-report",

      reportName:
        "Relatório de Pendências e Conflitos da Curadoria Histórica",

      generatedAt:
        new Date().toISOString(),

      totalRecordsAnalyzed:
        state.records.length,

      totalRecordsWithPendingIssues:
        records.length,

      totalErrors:
        records.reduce(
          (total, record) =>
            total +
            record.errorCount,
          0
        ),

      totalWarnings:
        records.reduce(
          (total, record) =>
            total +
            record.warningCount,
          0
        ),

      records
    };
  }

  /**
   * --------------------------------------------------------------------------
   * AUDITORIA DE INTEGRIDADE
   * --------------------------------------------------------------------------
   */

  function calculateSimpleHash(
    value
  ) {
    const text =
      typeof value === "string"
        ? value
        : stringifyJSON(value, 0);

    let hash = 2166136261;

    for (
      let index = 0;
      index < text.length;
      index += 1
    ) {
      hash ^= text.charCodeAt(
        index
      );

      hash +=
        (hash << 1) +
        (hash << 4) +
        (hash << 7) +
        (hash << 8) +
        (hash << 24);
    }

    return (
      hash >>> 0
    )
      .toString(16)
      .padStart(8, "0");
  }

  function auditRecordIntegrity(
    record
  ) {
    const raw =
      getRecordRawData(record) ||
      {};

    const issues = [];
    const warnings = [];

    if (!record.id) {
      issues.push(
        "Identificador ausente."
      );
    }

    if (
      !getRecordTitle(record) ||
      getRecordTitle(record) ===
        "Registro Histórico sem título"
    ) {
      issues.push(
        "Título ausente."
      );
    }

    if (
      !getRecordEventDate(record)
    ) {
      warnings.push(
        "Data do acontecimento ausente."
      );
    }

    if (
      !raw.provenance &&
      !record.provenance
    ) {
      warnings.push(
        "Proveniência não encontrada."
      );
    }

    const history =
      getRecordReviewHistory(
        record
      );

    if (
      getRecordStage(record) !==
        "registro-inicial" &&
      history.length === 0
    ) {
      warnings.push(
        "Registro avançado sem histórico de revisão."
      );
    }

    if (
      raw.preservation
        ?.silentDeletionForbidden ===
        false
    ) {
      issues.push(
        "A proteção contra exclusão silenciosa está desativada."
      );
    }

    const privacy =
      raw.privacy ||
      record.privacy ||
      {};

    if (
      privacy
        .containsPrivateResidence &&
      getRecordPrivacyLevel(
        record
      ) === "publico"
    ) {
      issues.push(
        "Residência privada classificada como pública."
      );
    }

    if (
      privacy
        .containsSensitivePersonalData &&
      getRecordPrivacyLevel(
        record
      ) === "publico"
    ) {
      issues.push(
        "Dados pessoais sensíveis em registro público."
      );
    }

    return {
      recordId:
        record.id,

      title:
        getRecordTitle(record),

      currentStage:
        getRecordStage(record),

      integrityStatus:
        issues.length > 0
          ? "falha"
          : warnings.length > 0
            ? "atencao"
            : "integro",

      issues,
      warnings,

      revisionCount:
        history.length,

      checksum:
        calculateSimpleHash(
          raw
        )
    };
  }

  function buildIntegrityAudit() {
    const auditedRecords =
      state.records.map(
        auditRecordIntegrity
      );

    const failed =
      auditedRecords.filter(
        (record) =>
          record.integrityStatus ===
          "falha"
      );

    const attention =
      auditedRecords.filter(
        (record) =>
          record.integrityStatus ===
          "atencao"
      );

    const valid =
      auditedRecords.filter(
        (record) =>
          record.integrityStatus ===
          "integro"
      );

    return {
      schemaVersion: "1.0.0",

      auditId:
        "festanca-2026-curation-integrity-audit",

      auditName:
        "Auditoria de Integridade da Curadoria Histórica da FESTANÇA 2026",

      generatedAt:
        new Date().toISOString(),

      algorithm:
        "simple-fnv-derived-hash",

      note:
        "O checksum é destinado ao controle operacional local e não substitui algoritmo criptográfico de preservação.",

      summary: {
        totalRecords:
          auditedRecords.length,

        validRecords:
          valid.length,

        recordsWithAttention:
          attention.length,

        failedRecords:
          failed.length,

        repositoryStatus:
          failed.length > 0
            ? "falha"
            : attention.length > 0
              ? "atencao"
              : "integro"
      },

      records:
        auditedRecords
    };
  }

  /**
   * --------------------------------------------------------------------------
   * PACOTE DE PRESERVAÇÃO HISTÓRICA
   * --------------------------------------------------------------------------
   */

  async function buildPreservationPackage() {
    const repository =
      await getRepositoryFromEngine();

    const statistics =
      buildStatisticsReport();

    const pendingReport =
      buildPendingReport();

    const audit =
      buildIntegrityAudit();

    return {
      schemaVersion: "1.0.0",

      packageId:
        `festanca-2026-preservation-${Date.now()}`,

      packageName:
        "Pacote de Preservação Histórica da FESTANÇA 2026",

      packageType:
        "historical-curation-preservation-package",

      event: {
        id:
          "festanca-vila-bela-2026",

        name:
          "Festança de Vila Bela 2026",

        city:
          "Vila Bela da Santíssima Trindade",

        state:
          "Mato Grosso",

        country:
          "Brasil"
      },

      generatedAt:
        new Date().toISOString(),

      generatedBy:
        MODULE_NAME,

      interfaceVersion:
        MODULE_VERSION,

      contents: {
        repository,
        statistics,
        pendingReport,
        integrityAudit:
          audit
      },

      preservationPolicy: {
        retention:
          "permanente",

        originalRecordsMustBePreserved:
          true,

        silentDeletionForbidden:
          true,

        revisionHistoryRequired:
          true,

        privacyReviewRequired:
          true,

        consentReviewRequired:
          true,

        communityValidationSupported:
          true,

        institutionalValidationSupported:
          true
      },

      packageIntegrity: {
        repositoryChecksum:
          calculateSimpleHash(
            repository
          ),

        statisticsChecksum:
          calculateSimpleHash(
            statistics
          ),

        pendingReportChecksum:
          calculateSimpleHash(
            pendingReport
          ),

        auditChecksum:
          calculateSimpleHash(
            audit
          )
      }
    };
  }

  /**
   * --------------------------------------------------------------------------
   * CÓPIA DE SEGURANÇA LOCAL
   * --------------------------------------------------------------------------
   */

  async function buildLocalBackup() {
    const repository =
      await getRepositoryFromEngine();

    const formDraft =
      readStorage(
        getFormDraftStorageKey(),
        null
      );

    const preferences =
      readStorage(
        CONFIG.storageKeys
          .preferences,
        null
      );

    const lastView =
      readStorage(
        CONFIG.storageKeys
          .lastView,
        null
      );

    return {
      schemaVersion: "1.0.0",

      backupId:
        `festanca-2026-curation-backup-${Date.now()}`,

      backupName:
        "Cópia de Segurança da Curadoria Histórica da FESTANÇA 2026",

      createdAt:
        new Date().toISOString(),

      interfaceVersion:
        MODULE_VERSION,

      repository,

      interfaceState: {
        preferences,
        lastView,
        formDraft
      },

      checksums: {
        repository:
          calculateSimpleHash(
            repository
          ),

        formDraft:
          formDraft
            ? calculateSimpleHash(
                formDraft
              )
            : null
      }
    };
  }

  /**
   * --------------------------------------------------------------------------
   * EXPORTAÇÃO PELO CURATION ENGINE
   * --------------------------------------------------------------------------
   */

  async function exportRepository() {
    setBusy(
      true,
      "Preparando o repositório curatorial..."
    );

    try {
      const engine =
        getEngine() ||
        await prepareEngine();

      if (
        engine &&
        typeof engine
          .exportRepository ===
          "function"
      ) {
        const result =
          await resolvePossiblePromise(
            engine.exportRepository()
          );

        if (
          result?.success !== false
        ) {
          notify(
            result?.message ||
            "Repositório exportado com sucesso.",
            "success"
          );

          return result;
        }
      }

      const repository =
        await getRepositoryFromEngine();

      const result =
        downloadJSON({
          data: repository,
          fileName:
            EXPORT_CONFIG
              .repositoryFileName
        });

      notify(
        `Repositório exportado como ${result.fileName}.`,
        "success"
      );

      return result;
    } catch (error) {
      console.error(
        `[${MODULE_NAME}] Falha na exportação do repositório.`,
        error
      );

      notify(
        "Não foi possível exportar o repositório.",
        "error"
      );

      return null;
    } finally {
      setBusy(false);
    }
  }

  async function exportSelectedRecord(
    recordId
  ) {
    const record =
      state.records.find(
        (item) =>
          item.id === recordId
      );

    if (!record) {
      notify(
        "Registro não encontrado para exportação.",
        "error"
      );

      return null;
    }

    setBusy(
      true,
      "Preparando o registro..."
    );

    try {
      const engine =
        getEngine();

      if (
        engine &&
        typeof engine
          .exportRecord ===
          "function"
      ) {
        const result =
          await resolvePossiblePromise(
            engine.exportRecord(
              recordId
            )
          );

        if (
          result?.success !== false
        ) {
          notify(
            result?.message ||
            "Registro exportado.",
            "success"
          );

          return result;
        }
      }

      const raw =
        getRecordRawData(record);

      const result =
        downloadJSON({
          data: raw,
          fileName:
            `${recordId}.json`
        });

      notify(
        `Registro exportado como ${result.fileName}.`,
        "success"
      );

      return result;
    } catch (error) {
      console.error(
        `[${MODULE_NAME}] Falha na exportação do registro.`,
        error
      );

      notify(
        "Não foi possível exportar o registro.",
        "error"
      );

      return null;
    } finally {
      setBusy(false);
    }
  }

  function exportStatistics() {
    try {
      const report =
        buildStatisticsReport();

      const result =
        downloadJSON({
          data: report,
          fileName:
            EXPORT_CONFIG
              .statisticsFileName,
          withTimestamp: true
        });

      notify(
        `Estatísticas exportadas como ${result.fileName}.`,
        "success"
      );

      return result;
    } catch (error) {
      console.error(
        `[${MODULE_NAME}] Falha na exportação das estatísticas.`,
        error
      );

      notify(
        "Não foi possível exportar as estatísticas.",
        "error"
      );

      return null;
    }
  }

  function exportPendingReport() {
    try {
      const report =
        buildPendingReport();

      const result =
        downloadJSON({
          data: report,
          fileName:
            EXPORT_CONFIG
              .pendingReportFileName,
          withTimestamp: true
        });

      notify(
        `Relatório de pendências exportado como ${result.fileName}.`,
        "success"
      );

      return result;
    } catch (error) {
      console.error(
        `[${MODULE_NAME}] Falha na exportação das pendências.`,
        error
      );

      notify(
        "Não foi possível exportar o relatório de pendências.",
        "error"
      );

      return null;
    }
  }

  function exportIntegrityAudit() {
    try {
      const audit =
        buildIntegrityAudit();

      const result =
        downloadJSON({
          data: audit,
          fileName:
            EXPORT_CONFIG
              .auditFileName,
          withTimestamp: true
        });

      notify(
        `Auditoria exportada como ${result.fileName}.`,
        "success"
      );

      return result;
    } catch (error) {
      console.error(
        `[${MODULE_NAME}] Falha na exportação da auditoria.`,
        error
      );

      notify(
        "Não foi possível exportar a auditoria.",
        "error"
      );

      return null;
    }
  }

  async function exportPreservationPackage() {
    setBusy(
      true,
      "Montando o pacote de preservação histórica..."
    );

    try {
      const packageData =
        await buildPreservationPackage();

      const result =
        downloadJSON({
          data:
            packageData,
          fileName:
            EXPORT_CONFIG
              .preservationPackageFileName,
          withTimestamp: true
        });

      notify(
        `Pacote de preservação exportado como ${result.fileName}.`,
        "success"
      );

      return result;
    } catch (error) {
      console.error(
        `[${MODULE_NAME}] Falha na geração do pacote de preservação.`,
        error
      );

      notify(
        "Não foi possível gerar o pacote de preservação.",
        "error"
      );

      return null;
    } finally {
      setBusy(false);
    }
  }

  async function exportLocalBackup() {
    setBusy(
      true,
      "Preparando a cópia de segurança..."
    );

    try {
      const backup =
        await buildLocalBackup();

      const result =
        downloadJSON({
          data: backup,
          fileName:
            EXPORT_CONFIG
              .backupFileName,
          withTimestamp: true
        });

      notify(
        `Cópia de segurança exportada como ${result.fileName}.`,
        "success"
      );

      return result;
    } catch (error) {
      console.error(
        `[${MODULE_NAME}] Falha na geração do backup.`,
        error
      );

      notify(
        "Não foi possível gerar a cópia de segurança.",
        "error"
      );

      return null;
    } finally {
      setBusy(false);
    }
  }

  /**
   * --------------------------------------------------------------------------
   * RELATÓRIO RESUMIDO PARA WHATSAPP
   * --------------------------------------------------------------------------
   */

  function buildWhatsAppSummary() {
    const statistics =
      state.statistics ||
      calculateStatistics(
        state.records,
        state.observations,
        state.activities
      );

    const pending =
      buildPendingReport();

    return [
      "📚 *CURADORIA HISTÓRICA — FESTANÇA 2026*",
      "",
      `▪️ Registros curatoriais: ${statistics.totalRecords}`,
      `▪️ Observações de campo: ${statistics.totalObservations}`,
      `▪️ Registros validados: ${statistics.validatedRecords}`,
      `▪️ Registros em elaboração: ${statistics.draftRecords}`,
      `▪️ Memórias permanentes: ${statistics.permanentMemoryRecords}`,
      `▪️ Mídias vinculadas: ${statistics.mediaAssets}`,
      `▪️ Depoimentos registrados: ${statistics.testimonies}`,
      "",
      `⚠️ Registros com pendências: ${pending.totalRecordsWithPendingIssues}`,
      `❌ Bloqueios identificados: ${pending.totalErrors}`,
      `🔎 Avisos curatoriais: ${pending.totalWarnings}`,
      "",
      `Atualizado em: ${formatDateTime(new Date().toISOString())}`,
      "",
      "Ao encontro do futuro, com os pés firmes na tradição."
    ].join("\n");
  }

  async function copyWhatsAppSummary() {
    const text =
      buildWhatsAppSummary();

    try {
      await copyTextToClipboard(
        text
      );

      notify(
        "Resumo copiado. Ele poderá ser colado diretamente no WhatsApp.",
        "success"
      );

      return true;
    } catch (error) {
      console.error(
        `[${MODULE_NAME}] Falha ao copiar o resumo.`,
        error
      );

      notify(
        "Não foi possível copiar o resumo.",
        "error"
      );

      return false;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * IMPORTAÇÃO CONTROLADA
   * --------------------------------------------------------------------------
   */

  function validateImportedRepository(
    repository
  ) {
    const errors = [];
    const warnings = [];

    if (!isObject(repository)) {
      errors.push(
        "O conteúdo importado não é um objeto JSON."
      );

      return {
        valid: false,
        errors,
        warnings
      };
    }

    if (
      !Array.isArray(
        repository.records
      )
    ) {
      errors.push(
        "O arquivo não contém o campo records em formato de lista."
      );
    }

    if (
      repository.schemaVersion &&
      !IMPORT_CONFIG
        .supportedSchemaVersions
        .includes(
          repository.schemaVersion
        )
    ) {
      warnings.push(
        `Versão de esquema não reconhecida: ${repository.schemaVersion}.`
      );
    }

    const identifiers =
      new Set();

    asArray(
      repository.records
    ).forEach(
      (record, index) => {
        const identifier =
          record?.id ||
          record?.identity?.recordId;

        if (!identifier) {
          warnings.push(
            `Registro na posição ${index + 1} sem identificador.`
          );

          return;
        }

        if (
          identifiers.has(
            identifier
          )
        ) {
          errors.push(
            `Identificador duplicado: ${identifier}.`
          );
        }

        identifiers.add(
          identifier
        );
      }
    );

    return {
      valid:
        errors.length === 0,
      errors,
      warnings
    };
  }

  function readJSONFile(file) {
    return new Promise(
      (resolve, reject) => {
        if (!file) {
          reject(
            new Error(
              "Nenhum arquivo foi selecionado."
            )
          );

          return;
        }

        if (
          file.size >
          IMPORT_CONFIG
            .maximumSizeBytes
        ) {
          reject(
            new Error(
              "O arquivo ultrapassa o limite de 10 MB."
            )
          );

          return;
        }

        if (
          !IMPORT_CONFIG
            .acceptedTypes
            .includes(file.type)
        ) {
          reject(
            new Error(
              "O arquivo selecionado não parece ser um JSON."
            )
          );

          return;
        }

        const reader =
          new FileReader();

        reader.onerror =
          () => {
            reject(
              new Error(
                "Não foi possível ler o arquivo."
              )
            );
          };

        reader.onload =
          () => {
            try {
              const parsed =
                JSON.parse(
                  String(
                    reader.result
                  )
                );

              resolve(parsed);
            } catch (error) {
              reject(
                new Error(
                  "O arquivo não contém JSON válido."
                )
              );
            }
          };

        reader.readAsText(
          file,
          "utf-8"
        );
      }
    );
  }

  async function importRepositoryFile(
    file
  ) {
    setBusy(
      true,
      "Analisando o arquivo importado..."
    );

    try {
      const repository =
        await readJSONFile(file);

      const validation =
        validateImportedRepository(
          repository
        );

      if (!validation.valid) {
        throw new Error(
          validation.errors.join(
            " "
          )
        );
      }

      const confirmationText = [
        "IMPORTAR REPOSITÓRIO CURATORIAL",
        "",
        `Arquivo: ${file.name}`,
        `Registros: ${repository.records.length}`,
        "",
        validation.warnings.length > 0
          ? `Avisos: ${validation.warnings.join(" ")}`
          : "Nenhum aviso estrutural relevante.",
        "",
        "Escolha OK para mesclar os registros importados ao repositório atual."
      ].join("\n");

      const confirmed =
        window.confirm(
          confirmationText
        );

      if (!confirmed) {
        return false;
      }

      const engine =
        getEngine() ||
        await prepareEngine();

      if (
        !engine ||
        typeof engine
          .importRepository !==
          "function"
      ) {
        throw new Error(
          "O Curation Engine não possui importação controlada disponível."
        );
      }

      const result =
        await resolvePossiblePromise(
          engine.importRepository(
            repository,
            {
              merge: true
            }
          )
        );

      if (
        result?.success ===
        false
      ) {
        throw new Error(
          result.message ||
          "A importação foi recusada pelo Motor de Curadoria."
        );
      }

      await refreshRepositoryData({
        silent: true
      });

      notify(
        "Repositório importado e mesclado com sucesso.",
        "success"
      );

      navigateTo(
        CONFIG.views.records
      );

      return true;
    } catch (error) {
      console.error(
        `[${MODULE_NAME}] Falha na importação.`,
        error
      );

      notify(
        error.message ||
        "Não foi possível importar o repositório.",
        "error"
      );

      return false;
    } finally {
      setBusy(false);

      const input = query(
        "[data-import-repository-input]",
        elements.content
      );

      if (input) {
        input.value = "";
      }
    }
  }

  /**
   * --------------------------------------------------------------------------
   * INTERFACE DE EXPORTAÇÃO
   * --------------------------------------------------------------------------
   */

  function createExportCard({
    icon,
    title,
    description,
    action,
    buttonLabel,
    tone = "default"
  }) {
    const card =
      createElement("article", {
        className:
          `fcu-export-card fcu-export-card--${tone}`
      });

    const iconElement =
      createElement("div", {
        className:
          "fcu-export-card__icon",
        "aria-hidden": "true",
        textContent: icon
      });

    const content =
      createElement("div", {
        className:
          "fcu-export-card__content"
      });

    content.append(
      createElement("h4", {
        textContent: title
      }),
      createElement("p", {
        textContent:
          description
      }),
      createElement("button", {
        type: "button",
        className:
          tone === "primary"
            ? "fcu-primary-button"
            : "fcu-secondary-button",
        dataset: {
          action
        },
        textContent:
          buttonLabel
      })
    );

    card.append(
      iconElement,
      content
    );

    return card;
  }

  function renderExportView() {
    if (!elements.content) {
      return;
    }

    elements.content.innerHTML = "";

    const section =
      createElement("section", {
        dataset: {
          view:
            CONFIG.views.export
        }
      });

    section.appendChild(
      createSectionHeading(
        "PRESERVAÇÃO DIGITAL",
        "Exportação, Backup e Auditoria",
        "Gere arquivos para conferência, substituição no repositório, preservação histórica e comunicação com a organização."
      )
    );

    const statistics =
      state.statistics ||
      calculateStatistics(
        state.records,
        state.observations,
        state.activities
      );

    const summary =
      createElement("div", {
        className:
          "fcu-stat-grid"
      });

    summary.append(
      createStatCard({
        label:
          "Registros no repositório",
        value:
          statistics.totalRecords,
        detail:
          "Instâncias curatoriais disponíveis",
        icon: "▤"
      }),

      createStatCard({
        label:
          "Registros validados",
        value:
          statistics.validatedRecords,
        detail:
          `${statistics.validationRate}% do acervo`,
        icon: "✓",
        tone: "success"
      }),

      createStatCard({
        label:
          "Pendências",
        value:
          buildPendingReport()
            .totalRecordsWithPendingIssues,
        detail:
          "Registros que precisam de análise",
        icon: "!",
        tone: "warning"
      }),

      createStatCard({
        label:
          "Memória permanente",
        value:
          statistics
            .permanentMemoryRecords,
        detail:
          "Registros consolidados",
        icon: "◆",
        tone: "protected"
      })
    );

    section.appendChild(summary);

    const grid =
      createElement("div", {
        className:
          "fcu-export-grid"
      });

    grid.append(
      createExportCard({
        icon: "▤",
        title:
          "Repositório oficial",
        description:
          "Exporte o curation-records-2026.json atualizado para conferência e futura substituição no GitHub.",
        action:
          "export-repository",
        buttonLabel:
          "Exportar repositório",
        tone: "primary"
      }),

      createExportCard({
        icon: "▦",
        title:
          "Estatísticas curatoriais",
        description:
          "Gere os indicadores, distribuições e percentuais de qualidade do acervo.",
        action:
          "export-statistics",
        buttonLabel:
          "Exportar estatísticas"
      }),

      createExportCard({
        icon: "!",
        title:
          "Pendências e conflitos",
        description:
          "Exporte a relação de registros com bloqueios, incertezas e complementações necessárias.",
        action:
          "export-pending-report",
        buttonLabel:
          "Exportar pendências"
      }),

      createExportCard({
        icon: "✓",
        title:
          "Auditoria de integridade",
        description:
          "Analise identificadores, histórico de revisão, privacidade e proteção contra alterações silenciosas.",
        action:
          "export-integrity-audit",
        buttonLabel:
          "Executar auditoria"
      }),

      createExportCard({
        icon: "◆",
        title:
          "Pacote de preservação",
        description:
          "Reúna repositório, estatísticas, pendências, auditoria e checksums em um único arquivo.",
        action:
          "export-preservation-package",
        buttonLabel:
          "Gerar pacote histórico",
        tone: "primary"
      }),

      createExportCard({
        icon: "⎘",
        title:
          "Cópia de segurança local",
        description:
          "Inclua repositório, rascunhos, preferências da interface e controles de integridade.",
        action:
          "export-local-backup",
        buttonLabel:
          "Gerar backup"
      }),

      createExportCard({
        icon: "◉",
        title:
          "Resumo para WhatsApp",
        description:
          "Copie um relatório textual compacto, mantendo marcadores e formatação compatível com o WhatsApp.",
        action:
          "copy-whatsapp-summary",
        buttonLabel:
          "Copiar resumo"
      })
    );

    section.appendChild(grid);

    const importCard =
      createElement("section", {
        className:
          "fcu-card fcu-import-card"
      });

    importCard.append(
      createElement("h4", {
        className:
          "fcu-card__title",
        textContent:
          "Importação controlada"
      }),

      createElement("p", {
        className:
          "fcu-muted-text",
        textContent:
          "Selecione um repositório JSON previamente conferido. Os registros serão mesclados; o arquivo atual não será silenciosamente apagado."
      })
    );

    const importInput =
      createElement("input", {
        type: "file",
        accept:
          ".json,application/json",
        className:
          "fcu-form-control",
        dataset: {
          importRepositoryInput:
            "true"
        }
      });

    importCard.appendChild(
      importInput
    );

    section.appendChild(
      importCard
    );

    elements.content.appendChild(
      section
    );
  }

  /**
   * --------------------------------------------------------------------------
   * ESTILOS DA PARTE 5
   * --------------------------------------------------------------------------
   */

  function injectExportStyles() {
    const styleId =
      `${CONFIG.styleId}-export`;

    if (
      document.getElementById(
        styleId
      )
    ) {
      return;
    }

    const style =
      document.createElement(
        "style"
      );

    style.id = styleId;

    style.textContent = `
      #${CONFIG.rootId} .fcu-export-grid {
        display: grid;
        grid-template-columns:
          repeat(auto-fit, minmax(245px, 1fr));
        gap: 14px;
        margin-top: 18px;
      }

      #${CONFIG.rootId} .fcu-export-card {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: start;
        gap: 14px;
        padding: 16px;
        border: 1px solid var(--fcu-border);
        border-radius: var(--fcu-radius);
        background:
          linear-gradient(
            145deg,
            rgba(12, 48, 72, 0.96),
            rgba(4, 25, 41, 0.98)
          );
      }

      #${CONFIG.rootId} .fcu-export-card--primary {
        border-color:
          rgba(255, 213, 49, 0.5);
      }

      #${CONFIG.rootId} .fcu-export-card__icon {
        display: grid;
        place-items: center;
        width: 52px;
        height: 52px;
        border: 1px solid
          rgba(255, 213, 49, 0.45);
        border-radius: 15px;
        background:
          rgba(255, 213, 49, 0.09);
        color: var(--fcu-gold);
        font-size: 1.45rem;
        font-weight: 900;
      }

      #${CONFIG.rootId} .fcu-export-card__content {
        display: grid;
        align-content: start;
        gap: 10px;
        min-width: 0;
      }

      #${CONFIG.rootId} .fcu-export-card h4 {
        margin: 0;
        color: var(--fcu-text);
      }

      #${CONFIG.rootId} .fcu-export-card p {
        margin: 0;
        color: var(--fcu-muted);
      }

      #${CONFIG.rootId} .fcu-export-card button {
        justify-self: start;
      }

      #${CONFIG.rootId} .fcu-import-card {
        display: grid;
        gap: 12px;
        margin-top: 18px;
      }

      #${CONFIG.rootId} .fcu-import-card input[type="file"] {
        padding: 11px;
      }

      #${CONFIG.rootId} .fcu-link-button {
        padding: 0;
        border: 0;
        background: transparent;
        color: inherit;
        text-align: left;
        text-decoration: underline;
        cursor: pointer;
      }

      #${CONFIG.rootId} .fcu-badge--error {
        border-color:
          rgba(255, 116, 116, 0.62);
        color: #ffd0d0;
      }

      @media (max-width: 620px) {
        #${CONFIG.rootId} .fcu-export-card {
          grid-template-columns: 1fr;
        }

        #${CONFIG.rootId} .fcu-export-card__icon {
          width: 46px;
          height: 46px;
        }

        #${CONFIG.rootId} .fcu-export-card button {
          width: 100%;
        }
      }
    `;

    document.head.appendChild(
      style
    );
  }

  /**
   * --------------------------------------------------------------------------
   * NAVEGAÇÃO FINAL
   * --------------------------------------------------------------------------
   */

  const originalNavigateToPartFive =
    navigateTo;

  navigateTo =
    function enhancedNavigateToPartFive(
      viewName,
      options = {}
    ) {
      if (
        viewName ===
        CONFIG.views.validation
      ) {
        state.currentView =
          CONFIG.views.validation;

        state.previousView =
          state.previousView ||
          CONFIG.views.dashboard;

        updateNavigationState(
          CONFIG.views.validation
        );

        renderReviewQueueView();

        writeStorage(
          CONFIG.storageKeys
            .lastView,
          CONFIG.views.validation
        );

        if (elements.content) {
          elements.content.scrollTop =
            0;
        }

        return;
      }

      if (
        viewName ===
        CONFIG.views.export
      ) {
        state.currentView =
          CONFIG.views.export;

        updateNavigationState(
          CONFIG.views.export
        );

        renderExportView();

        writeStorage(
          CONFIG.storageKeys
            .lastView,
          CONFIG.views.export
        );

        if (elements.content) {
          elements.content.scrollTop =
            0;
        }

        return;
      }

      originalNavigateToPartFive(
        viewName,
        options
      );
    };

  /**
   * --------------------------------------------------------------------------
   * AÇÕES DA PARTE 5
   * --------------------------------------------------------------------------
   */

  async function handlePartFiveAction(
    action,
    target
  ) {
    switch (action) {
      case "export-repository":
        await exportRepository();
        return true;

      case "export-statistics":
        exportStatistics();
        return true;

      case "export-pending-report":
        exportPendingReport();
        return true;

      case "export-integrity-audit":
        exportIntegrityAudit();
        return true;

      case "export-preservation-package":
        await exportPreservationPackage();
        return true;

      case "export-local-backup":
        await exportLocalBackup();
        return true;

      case "copy-whatsapp-summary":
        await copyWhatsAppSummary();
        return true;

      case "export-selected-record": {
        const recordId =
          target?.dataset
            ?.recordId ||
          state.selectedRecordId;

        if (recordId) {
          await exportSelectedRecord(
            recordId
          );
        }

        return true;
      }

      default:
        return false;
    }
  }

  async function handleImportInput(
    target
  ) {
    if (
      target?.dataset
        ?.importRepositoryInput !==
      "true"
    ) {
      return false;
    }

    const file =
      target.files?.[0];

    if (file) {
      await importRepositoryFile(
        file
      );
    }

    return true;
  }

  /**
   * --------------------------------------------------------------------------
   * APRIMORAMENTO DOS DETALHES DO REGISTRO
   * --------------------------------------------------------------------------
   */

  const originalRenderRecordDetailsPartFive =
    renderRecordDetails;

  renderRecordDetails =
    function enhancedRenderRecordDetails(
      recordId
    ) {
      originalRenderRecordDetailsPartFive(
        recordId
      );

      const record =
        findRecordById(
          recordId
        );

      if (
        !record ||
        !elements.content
      ) {
        return;
      }

      const actionContainer =
        query(
          ".fcu-button-row:last-of-type",
          elements.content
        ) ||
        query(
          ".fcu-button-row",
          elements.content
        );

      if (!actionContainer) {
        return;
      }

      actionContainer.append(
        createElement("button", {
          className:
            "fcu-secondary-button",
          type: "button",
          dataset: {
            action:
              "open-record-edit",
            recordId:
              record.id
          },
          textContent:
            "Editar registro"
        }),

        createElement("button", {
          className:
            "fcu-secondary-button",
          type: "button",
          dataset: {
            action:
              "open-record-review",
            recordId:
              record.id
          },
          textContent:
            "Validar registro"
        }),

        createElement("button", {
          className:
            "fcu-secondary-button",
          type: "button",
          dataset: {
            action:
              "export-selected-record",
            recordId:
              record.id
          },
          textContent:
            "Exportar registro"
        })
      );

      const historyPanel =
        createReviewHistoryPanel(
          record
        );

      elements.content.appendChild(
        historyPanel
      );
    };

  /**
   * --------------------------------------------------------------------------
   * DELEGAÇÃO CENTRAL DOS EVENTOS
   * --------------------------------------------------------------------------
   */

  async function handleDelegatedClick(
    event
  ) {
    const target =
      event.target.closest(
        "[data-action], [data-view]"
      );

    if (
      !target ||
      !elements.root?.contains(
        target
      )
    ) {
      return;
    }

    const viewName =
      target.dataset.view;

    if (viewName) {
      event.preventDefault();

      navigateTo(viewName);
      return;
    }

    const action =
      target.dataset.action;

    if (!action) {
      return;
    }

    event.preventDefault();

    if (
      action ===
      "retry-initialization"
    ) {
      await initialize({
        force: true
      });

      return;
    }

    const partTwoHandled =
      await handlePartTwoAction(
        action,
        target
      );

    if (partTwoHandled) {
      return;
    }

    const partThreeHandled =
      await handlePartThreeAction(
        action,
        target
      );

    if (partThreeHandled) {
      return;
    }

    const partFourHandled =
      await handlePartFourAction(
        action,
        target
      );

    if (partFourHandled) {
      return;
    }

    await handlePartFiveAction(
      action,
      target
    );
  }

  function handleDelegatedInput(
    event
  ) {
    const target =
      event.target;

    if (
      !target ||
      !elements.root?.contains(
        target
      )
    ) {
      return;
    }

    if (
      handleRecordFilterInput(
        target
      )
    ) {
      return;
    }

    if (
      handlePartThreeInput(
        target
      )
    ) {
      return;
    }

    handlePartFourInput(
      target
    );
  }

  async function handleDelegatedChange(
    event
  ) {
    const target =
      event.target;

    if (
      !target ||
      !elements.root?.contains(
        target
      )
    ) {
      return;
    }

    if (
      await handleImportInput(
        target
      )
    ) {
      return;
    }

    handleDelegatedInput(
      event
    );
  }

  function handleDelegatedKeydown(
    event
  ) {
    if (
      handlePartThreeKeydown(
        event
      )
    ) {
      return;
    }

    if (
      event.key === "Escape" &&
      state.panelOpen
    ) {
      closePanel();
      return;
    }

    if (
      event.key === "Tab" &&
      state.panelOpen
    ) {
      maintainFocusInsidePanel(
        event
      );
    }
  }

  async function handleDelegatedSubmit(
    event
  ) {
    if (
      await handlePartFourSubmit(
        event
      )
    ) {
      return;
    }

    await handlePartThreeSubmit(
      event
    );
  }

  /**
   * --------------------------------------------------------------------------
   * ACESSIBILIDADE DO DIÁLOGO
   * --------------------------------------------------------------------------
   */

  function getFocusableElements() {
    if (!elements.panel) {
      return [];
    }

    return queryAll(
      [
        "button:not([disabled])",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        "a[href]",
        "[tabindex]:not([tabindex='-1'])"
      ].join(","),
      elements.panel
    ).filter(
      (element) =>
        !element.hidden &&
        element.offsetParent !==
          null
    );
  }

  function maintainFocusInsidePanel(
    event
  ) {
    const focusable =
      getFocusableElements();

    if (
      focusable.length === 0
    ) {
      event.preventDefault();

      focusSafely(
        elements.panel
      );

      return;
    }

    const first =
      focusable[0];

    const last =
      focusable[
        focusable.length - 1
      ];

    if (
      event.shiftKey &&
      document.activeElement ===
        first
    ) {
      event.preventDefault();
      last.focus();

      return;
    }

    if (
      !event.shiftKey &&
      document.activeElement ===
        last
    ) {
      event.preventDefault();
      first.focus();
    }
  }

  /**
   * --------------------------------------------------------------------------
   * REGISTRO DOS EVENTOS
   * --------------------------------------------------------------------------
   */

  function registerEvents() {
    if (
      state.eventsRegistered
    ) {
      return;
    }

    elements.launcher
      ?.addEventListener(
        "click",
        togglePanel
      );

    elements.overlay
      ?.addEventListener(
        "click",
        () => closePanel()
      );

    elements.closeButton
      ?.addEventListener(
        "click",
        () => closePanel()
      );

    elements.backButton
      ?.addEventListener(
        "click",
        () => {
          if (
            state.currentView ===
              CONFIG.views.details ||
            state.currentView ===
              "record-review"
          ) {
            navigateTo(
              CONFIG.views.records
            );

            return;
          }

          navigateTo(
            state.previousView ||
            CONFIG.views.dashboard
          );
        }
      );

    elements.root
      ?.addEventListener(
        "click",
        handleDelegatedClick
      );

    elements.root
      ?.addEventListener(
        "input",
        handleDelegatedInput
      );

    elements.root
      ?.addEventListener(
        "change",
        handleDelegatedChange
      );

    elements.root
      ?.addEventListener(
        "submit",
        handleDelegatedSubmit
      );

    document.addEventListener(
      "keydown",
      handleDelegatedKeydown
    );

    document.addEventListener(
      "festanca:curation-ready",
      async () => {
        state.engineReady = true;

        await refreshRepositoryData({
          silent: true
        });

        if (state.panelOpen) {
          navigateTo(
            state.currentView
          );
        }
      }
    );

    document.addEventListener(
      "festanca:curation-error",
      (event) => {
        state.engineReady =
          false;

        state.lastError =
          event.detail?.error ||
          new Error(
            "O Motor de Curadoria apresentou uma falha."
          );

        notify(
          "O Motor de Curadoria apresentou uma falha.",
          "error"
        );
      }
    );

    state.eventsRegistered =
      true;
  }

  /**
   * --------------------------------------------------------------------------
   * PREPARAÇÃO INTEGRAL DA INTERFACE
   * --------------------------------------------------------------------------
   */

  async function initialize(
    options = {}
  ) {
    if (
      state.initialized &&
      options.force !== true
    ) {
      return {
        success: true,
        code:
          "already-initialized",
        message:
          "A interface de Curadoria já está inicializada.",
        state:
          getPublicState()
      };
    }

    if (state.initializing) {
      return {
        success: false,
        code:
          "initialization-in-progress",
        message:
          "A interface ainda está sendo inicializada."
      };
    }

    state.initializing = true;
    state.lastError = null;

    try {
      detectAccessibilityPreferences();

      injectStyles();
      injectDashboardStyles();
      injectFormStyles();
      injectReviewStyles();
      injectExportStyles();

      buildBaseInterface();
      registerEvents();

      renderLoadingState(
        "Preparando a Curadoria Histórica"
      );

      const engine =
        await prepareEngine();

      await prepareDataBridge();

      prepareCreateRecordInterface();
      prepareReviewInterface();

      if (!engine) {
        throw new Error(
          "O Motor de Curadoria não pôde ser inicializado."
        );
      }

      await prepareDashboardAndRecords();

      state.initialized = true;
      state.initializing = false;
      state.lastUpdated =
        new Date().toISOString();

      elements.root?.setAttribute(
        "data-initialized",
        "true"
      );

      document.dispatchEvent(
        new CustomEvent(
          "festanca:curation-ui-ready",
          {
            detail: {
              module:
                MODULE_NAME,
              version:
                MODULE_VERSION,
              state:
                getPublicState()
            }
          }
        )
      );

      return {
        success: true,
        code:
          "curation-ui-initialized",
        message:
          "Interface de Curadoria Histórica inicializada com sucesso.",
        state:
          getPublicState()
      };
    } catch (error) {
      state.initialized = false;
      state.initializing = false;
      state.lastError = error;

      console.error(
        `[${MODULE_NAME}] Falha na inicialização.`,
        error
      );

      renderDependencyError();

      return {
        success: false,
        code:
          "curation-ui-initialization-failed",
        message:
          error.message,
        error
      };
    }
  }

  /**
   * --------------------------------------------------------------------------
   * ESTADO PÚBLICO
   * --------------------------------------------------------------------------
   */

  function getPublicState() {
    return {
      moduleName:
        MODULE_NAME,

      moduleVersion:
        MODULE_VERSION,

      initialized:
        state.initialized,

      initializing:
        state.initializing,

      panelOpen:
        state.panelOpen,

      engineReady:
        state.engineReady,

      dataReady:
        state.dataReady,

      currentView:
        state.currentView,

      selectedRecordId:
        state.selectedRecordId,

      editingRecordId:
        state.editingRecordId ||
        null,

      totalRecords:
        state.records.length,

      totalObservations:
        state.observations.length,

      totalActivities:
        state.activities.length,

      statistics:
        cloneSerializable(
          state.statistics
        ),

      preferences:
        cloneSerializable(
          state.preferences
        ),

      lastUpdated:
        state.lastUpdated,

      lastError:
        state.lastError
          ? {
              message:
                state.lastError
                  .message ||
                String(
                  state.lastError
                )
            }
          : null
    };
  }

  function getRecordsPublic() {
    return cloneSerializable(
      state.records
    );
  }

  function getSelectedRecordPublic() {
    if (
      !state.selectedRecordId
    ) {
      return null;
    }

    const record =
      findRecordById(
        state.selectedRecordId
      );

    return record
      ? cloneSerializable(record)
      : null;
  }

  function setPreferences(
    preferences = {}
  ) {
    if (!isObject(preferences)) {
      return cloneSerializable(
        state.preferences
      );
    }

    state.preferences = {
      ...state.preferences,
      ...preferences
    };

    savePreferences();
    applyAccessibilityPreferences();

    return cloneSerializable(
      state.preferences
    );
  }

  /**
   * --------------------------------------------------------------------------
   * API PÚBLICA
   * --------------------------------------------------------------------------
   */

  const publicAPI =
    Object.freeze({
      name:
        MODULE_NAME,

      version:
        MODULE_VERSION,

      initialize,
      init:
        initialize,

      open:
        openPanel,

      close:
        closePanel,

      toggle:
        togglePanel,

      navigateTo,

      refresh:
        async function refresh() {
          const result =
            await refreshRepositoryData();

          navigateTo(
            state.currentView
          );

          return result;
        },

      getState:
        getPublicState,

      getRecords:
        getRecordsPublic,

      getSelectedRecord:
        getSelectedRecordPublic,

      openRecord:
        function openRecord(
          recordId
        ) {
          state.selectedRecordId =
            recordId;

          openPanel();

          navigateTo(
            CONFIG.views.details,
            {
              recordId
            }
          );
        },

      createRecord:
        function createRecord() {
          openPanel();

          navigateTo(
            CONFIG.views.create
          );
        },

      reviewRecord:
        function reviewRecord(
          recordId
        ) {
          state.selectedReviewRecordId =
            recordId;

          openPanel();

          renderRecordReviewView(
            recordId
          );
        },

      exportRepository,

      exportRecord:
        exportSelectedRecord,

      exportStatistics,

      exportPendingReport,

      exportIntegrityAudit,

      exportPreservationPackage,

      exportLocalBackup,

      copyWhatsAppSummary,

      buildStatisticsReport,

      buildPendingReport,

      buildIntegrityAudit,

      buildPreservationPackage,

      setPreferences
    });

  global[MODULE_NAME] =
    publicAPI;

  /**
   * --------------------------------------------------------------------------
   * INICIALIZAÇÃO AUTOMÁTICA
   * --------------------------------------------------------------------------
   *
   * Para desativar a inicialização automática, defina antes deste script:
   *
   * window.FESTANCA_CURATION_UI_AUTO_INIT = false;
   * --------------------------------------------------------------------------
   */

  function autoInitialize() {
    if (
      global
        .FESTANCA_CURATION_UI_AUTO_INIT ===
      false
    ) {
      return;
    }

    initialize().then(
      (result) => {
        if (!result.success) {
          console.error(
            `[${MODULE_NAME}] ${result.message}`
          );
        }
      }
    );
  }

  if (
    document.readyState ===
    "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      autoInitialize,
      {
        once: true
      }
    );
  } else {
    autoInitialize();
  }
})(
  typeof window !== "undefined"
    ? window
    : globalThis,
  typeof document !== "undefined"
    ? document
    : null
);
