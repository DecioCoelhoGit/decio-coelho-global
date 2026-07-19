/**
 * ============================================================
 * FESTANÇA 2026
 * OFFICIAL BRAND DESIGN SYSTEM
 * THEME LOADER — EXECUTABLE RUNTIME LAYER
 * ============================================================
 *
 * Arquivo:
 * assets/brand/tokens/theme-loader.js
 *
 * Versão:
 * 1.0.0
 *
 * Status:
 * Oficial
 *
 * Dependências conceituais:
 * - assets/brand/tokens/index.json
 * - assets/brand/tokens/themes.json
 * - assets/brand/tokens/tokens.css
 *
 * Projeto:
 * FESTANÇA 2026
 * Vila Bela da Santíssima Trindade — Mato Grosso — Brasil
 *
 * "Ao encontro do futuro,
 *  com os pés firmes na tradição."
 *
 * ============================================================
 */

(function festancaThemeRuntime(window, document) {
  "use strict";

  const VERSION = "1.0.0";

  const CONFIG = Object.freeze({
    storageKey: "festanca-theme",
    attribute: "data-theme",
    transitionClass: "theme-transition",
    defaultTheme: "dark",

    themes: Object.freeze([
      "dark",
      "light",
      "heritage",
      "ceremonial",
      "high-contrast",
      "holographic"
    ]),

    systemThemes: Object.freeze({
      dark: "dark",
      light: "light"
    }),

    selectors: Object.freeze({
      themeControl: "[data-theme-select]",
      themeButton: "[data-set-theme]",
      currentTheme: "[data-current-theme]",
      themeIcon: "[data-theme-icon]"
    }),

    events: Object.freeze({
      beforeChange: "festanca:theme-before-change",
      change: "festanca:theme-change",
      ready: "festanca:theme-ready",
      reducedMotionChange: "festanca:reduced-motion-change"
    })
  });

  const root = document.documentElement;

  let initialized = false;
  let currentTheme = null;
  let transitionTimer = null;

  const media = {
    dark: null,
    light: null,
    reducedMotion: null,
    contrast: null
  };

  /**
   * ------------------------------------------------------------
   * UTILITIES
   * ------------------------------------------------------------
   */

  function isValidTheme(theme) {
    return (
      typeof theme === "string" &&
      CONFIG.themes.includes(theme)
    );
  }

  function normalizeTheme(theme) {
    if (typeof theme !== "string") {
      return null;
    }

    const normalized = theme
      .trim()
      .toLowerCase();

    return isValidTheme(normalized)
      ? normalized
      : null;
  }

  function safeStorageGet(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      console.warn(
        "[FESTANÇA Theme Loader] Não foi possível ler localStorage.",
        error
      );

      return null;
    }
  }

  function safeStorageSet(key, value) {
    try {
      window.localStorage.setItem(key, value);

      return true;
    } catch (error) {
      console.warn(
        "[FESTANÇA Theme Loader] Não foi possível gravar localStorage.",
        error
      );

      return false;
    }
  }

  function safeStorageRemove(key) {
    try {
      window.localStorage.removeItem(key);

      return true;
    } catch (error) {
      console.warn(
        "[FESTANÇA Theme Loader] Não foi possível remover valor do localStorage.",
        error
      );

      return false;
    }
  }

  function emit(name, detail) {
    const event = new CustomEvent(name, {
      detail,
      bubbles: true
    });

    document.dispatchEvent(event);
  }

  function prefersReducedMotion() {
    return Boolean(
      media.reducedMotion &&
      media.reducedMotion.matches
    );
  }

  function prefersHighContrast() {
    return Boolean(
      media.contrast &&
      media.contrast.matches
    );
  }

  function getSystemTheme() {
    if (
      media.dark &&
      media.dark.matches
    ) {
      return CONFIG.systemThemes.dark;
    }

    if (
      media.light &&
      media.light.matches
    ) {
      return CONFIG.systemThemes.light;
    }

    return CONFIG.defaultTheme;
  }

  function getStoredTheme() {
    return normalizeTheme(
      safeStorageGet(CONFIG.storageKey)
    );
  }

  function getHtmlTheme() {
    return normalizeTheme(
      root.getAttribute(CONFIG.attribute)
    );
  }

  /**
   * Ordem oficial:
   *
   * 1. tema explícito já presente no HTML
   * 2. preferência salva
   * 3. preferência de alto contraste
   * 4. preferência de cor do sistema
   * 5. tema padrão
   */

  function resolveInitialTheme() {
    const htmlTheme = getHtmlTheme();

    if (htmlTheme) {
      return htmlTheme;
    }

    const storedTheme = getStoredTheme();

    if (storedTheme) {
      return storedTheme;
    }

    if (prefersHighContrast()) {
      return "high-contrast";
    }

    return getSystemTheme();
  }

  /**
   * ------------------------------------------------------------
   * TRANSITIONS
   * ------------------------------------------------------------
   */

  function enableThemeTransition() {
    if (prefersReducedMotion()) {
      return;
    }

    root.classList.add(
      CONFIG.transitionClass
    );

    if (transitionTimer) {
      window.clearTimeout(
        transitionTimer
      );
    }

    transitionTimer =
      window.setTimeout(() => {
        root.classList.remove(
          CONFIG.transitionClass
        );

        transitionTimer = null;
      }, 450);
  }

  function disableThemeTransition() {
    root.classList.remove(
      CONFIG.transitionClass
    );

    if (transitionTimer) {
      window.clearTimeout(
        transitionTimer
      );

      transitionTimer = null;
    }
  }

  /**
   * ------------------------------------------------------------
   * DOM SYNCHRONIZATION
   * ------------------------------------------------------------
   */

  function syncThemeSelects(theme) {
    const controls =
      document.querySelectorAll(
        CONFIG.selectors.themeControl
      );

    controls.forEach((control) => {
      if (
        "value" in control &&
        control.value !== theme
      ) {
        control.value = theme;
      }
    });
  }

  function syncThemeButtons(theme) {
    const buttons =
      document.querySelectorAll(
        CONFIG.selectors.themeButton
      );

    buttons.forEach((button) => {
      const buttonTheme =
        normalizeTheme(
          button.getAttribute(
            "data-set-theme"
          )
        );

      const active =
        buttonTheme === theme;

      button.setAttribute(
        "aria-pressed",
        String(active)
      );

      button.classList.toggle(
        "is-active",
        active
      );
    });
  }

  function syncThemeLabels(theme) {
    const labels =
      document.querySelectorAll(
        CONFIG.selectors.currentTheme
      );

    labels.forEach((element) => {
      element.textContent = theme;
    });
  }

  function syncThemeIcons(theme) {
    const icons =
      document.querySelectorAll(
        CONFIG.selectors.themeIcon
      );

    icons.forEach((element) => {
      element.setAttribute(
        "data-active-theme",
        theme
      );
    });
  }

  function syncControls(theme) {
    syncThemeSelects(theme);
    syncThemeButtons(theme);
    syncThemeLabels(theme);
    syncThemeIcons(theme);
  }

  /**
   * ------------------------------------------------------------
   * THEME APPLICATION
   * ------------------------------------------------------------
   */

  function applyTheme(
    theme,
    options = {}
  ) {
    const normalized =
      normalizeTheme(theme);

    if (!normalized) {
      console.warn(
        `[FESTANÇA Theme Loader] Tema inválido: ${theme}`
      );

      return false;
    }

    const settings = {
      persist: true,
      transition: true,
      source: "api",
      force: false,
      ...options
    };

    const previousTheme =
      currentTheme ||
      getHtmlTheme();

    if (
      previousTheme === normalized &&
      !settings.force
    ) {
      syncControls(normalized);

      return true;
    }

    emit(
      CONFIG.events.beforeChange,
      {
        version: VERSION,
        previousTheme,
        theme: normalized,
        source: settings.source
      }
    );

    if (
      settings.transition &&
      !prefersReducedMotion()
    ) {
      enableThemeTransition();
    } else {
      disableThemeTransition();
    }

    root.setAttribute(
      CONFIG.attribute,
      normalized
    );

    root.style.colorScheme =
      normalized === "light"
        ? "light"
        : "dark";

    currentTheme = normalized;

    if (settings.persist) {
      safeStorageSet(
        CONFIG.storageKey,
        normalized
      );
    }

    syncControls(normalized);

    emit(
      CONFIG.events.change,
      {
        version: VERSION,
        previousTheme,
        theme: normalized,
        persisted: settings.persist,
        source: settings.source,
        reducedMotion:
          prefersReducedMotion()
      }
    );

    return true;
  }

  /**
   * ------------------------------------------------------------
   * PUBLIC THEME METHODS
   * ------------------------------------------------------------
   */

  function setTheme(theme) {
    return applyTheme(
      theme,
      {
        persist: true,
        transition: true,
        source: "user"
      }
    );
  }

  function getTheme() {
    return (
      currentTheme ||
      getHtmlTheme() ||
      resolveInitialTheme()
    );
  }

  function resetTheme() {
    safeStorageRemove(
      CONFIG.storageKey
    );

    const theme =
      prefersHighContrast()
        ? "high-contrast"
        : getSystemTheme();

    return applyTheme(
      theme,
      {
        persist: false,
        transition: true,
        source: "reset",
        force: true
      }
    );
  }

  function useSystemTheme() {
    safeStorageRemove(
      CONFIG.storageKey
    );

    return applyTheme(
      getSystemTheme(),
      {
        persist: false,
        transition: true,
        source: "system",
        force: true
      }
    );
  }

  function cycleTheme() {
    const active = getTheme();

    const currentIndex =
      CONFIG.themes.indexOf(active);

    const nextIndex =
      currentIndex === -1
        ? 0
        : (
            currentIndex + 1
          ) % CONFIG.themes.length;

    return setTheme(
      CONFIG.themes[nextIndex]
    );
  }

  /**
   * ------------------------------------------------------------
   * USER CONTROLS
   * ------------------------------------------------------------
   */

  function handleSelectChange(event) {
    const control =
      event.target.closest(
        CONFIG.selectors.themeControl
      );

    if (!control) {
      return;
    }

    setTheme(control.value);
  }

  function handleThemeButton(event) {
    const button =
      event.target.closest(
        CONFIG.selectors.themeButton
      );

    if (!button) {
      return;
    }

    const theme =
      button.getAttribute(
        "data-set-theme"
      );

    setTheme(theme);
  }

  function bindControls() {
    document.addEventListener(
      "change",
      handleSelectChange
    );

    document.addEventListener(
      "click",
      handleThemeButton
    );
  }

  /**
   * ------------------------------------------------------------
   * MEDIA QUERY LISTENERS
   * ------------------------------------------------------------
   */

  function createMediaQueries() {
    if (
      typeof window.matchMedia !==
      "function"
    ) {
      return;
    }

    media.dark =
      window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

    media.light =
      window.matchMedia(
        "(prefers-color-scheme: light)"
      );

    media.reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );

    media.contrast =
      window.matchMedia(
        "(prefers-contrast: more)"
      );
  }

  function addMediaListener(
    mediaQuery,
    handler
  ) {
    if (!mediaQuery) {
      return;
    }

    if (
      typeof mediaQuery.addEventListener ===
      "function"
    ) {
      mediaQuery.addEventListener(
        "change",
        handler
      );

      return;
    }

    if (
      typeof mediaQuery.addListener ===
      "function"
    ) {
      mediaQuery.addListener(handler);
    }
  }

  function handleSystemColorChange() {
    const storedTheme =
      getStoredTheme();

    if (storedTheme) {
      return;
    }

    applyTheme(
      getSystemTheme(),
      {
        persist: false,
        transition: true,
        source: "system-change",
        force: true
      }
    );
  }

  function handleContrastChange(event) {
    const storedTheme =
      getStoredTheme();

    if (storedTheme) {
      return;
    }

    if (event.matches) {
      applyTheme(
        "high-contrast",
        {
          persist: false,
          transition: true,
          source:
            "system-high-contrast",
          force: true
        }
      );

      return;
    }

    applyTheme(
      getSystemTheme(),
      {
        persist: false,
        transition: true,
        source:
          "system-high-contrast-off",
        force: true
      }
    );
  }

  function handleReducedMotionChange(
    event
  ) {
    if (event.matches) {
      disableThemeTransition();
    }

    root.toggleAttribute(
      "data-reduced-motion",
      event.matches
    );

    emit(
      CONFIG.events.reducedMotionChange,
      {
        version: VERSION,
        reducedMotion:
          event.matches
      }
    );
  }

  function bindMediaQueries() {
    addMediaListener(
      media.dark,
      handleSystemColorChange
    );

    addMediaListener(
      media.light,
      handleSystemColorChange
    );

    addMediaListener(
      media.contrast,
      handleContrastChange
    );

    addMediaListener(
      media.reducedMotion,
      handleReducedMotionChange
    );
  }

  /**
   * ------------------------------------------------------------
   * ACCESSIBILITY STATE
   * ------------------------------------------------------------
   */

  function initializeAccessibilityState() {
    const reduced =
      prefersReducedMotion();

    root.toggleAttribute(
      "data-reduced-motion",
      reduced
    );

    root.toggleAttribute(
      "data-high-contrast-preference",
      prefersHighContrast()
    );
  }

  /**
   * ------------------------------------------------------------
   * EARLY THEME APPLICATION
   * ------------------------------------------------------------
   */

  function applyInitialTheme() {
    const theme =
      resolveInitialTheme();

    root.setAttribute(
      CONFIG.attribute,
      theme
    );

    root.style.colorScheme =
      theme === "light"
        ? "light"
        : "dark";

    currentTheme = theme;

    return theme;
  }

  /**
   * ------------------------------------------------------------
   * INITIALIZATION
   * ------------------------------------------------------------
   */

  function init() {
    if (initialized) {
      return {
        initialized: true,
        theme: getTheme(),
        version: VERSION
      };
    }

    createMediaQueries();

    const initialTheme =
      applyInitialTheme();

    initializeAccessibilityState();

    bindControls();
    bindMediaQueries();

    syncControls(initialTheme);

    initialized = true;

    emit(
      CONFIG.events.ready,
      {
        version: VERSION,
        theme: initialTheme,
        themes: [
          ...CONFIG.themes
        ],
        reducedMotion:
          prefersReducedMotion(),
        highContrastPreference:
          prefersHighContrast()
      }
    );

    return {
      initialized: true,
      theme: initialTheme,
      version: VERSION
    };
  }

  /**
   * ------------------------------------------------------------
   * PUBLIC API
   * ------------------------------------------------------------
   */

  const API = Object.freeze({
    version: VERSION,

    themes: [
      ...CONFIG.themes
    ],

    init,

    setTheme,

    applyTheme,

    getTheme,

    getStoredTheme,

    getSystemTheme,

    resetTheme,

    useSystemTheme,

    cycleTheme,

    prefersReducedMotion,

    prefersHighContrast,

    isValidTheme,

    getConfig() {
      return CONFIG;
    }
  });

  Object.defineProperty(
    window,
    "FestancaTheme",
    {
      value: API,
      writable: false,
      configurable: false,
      enumerable: true
    }
  );

  /**
   * ------------------------------------------------------------
   * AUTO INITIALIZATION
   * ------------------------------------------------------------
   */

  if (
    document.readyState ===
    "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      init,
      {
        once: true
      }
    );
  } else {
    init();
  }

})(
  window,
  document
);
