/**
 * =========================================================
 * FESTANÇA DE VILA BELA 2026
 * Arquivo: apps/festanca-2026/js/script.js
 *
 * Funções principais:
 * - menu mobile acessível;
 * - cabeçalho dinâmico;
 * - navegação suave;
 * - seção ativa no menu;
 * - animações progressivas;
 * - compartilhamento;
 * - impressão;
 * - tratamento de imagens ausentes;
 * - filtros da Programação Cultural Inteligente;
 * - busca por irmandade, data, categoria e palavra-chave;
 * - preparação para roteiro cultural personalizado.
 * =========================================================
 */

"use strict";

/* =========================================================
   1. CONFIGURAÇÕES
========================================================= */

const FESTANCA_CONFIG = {
  eventName: "Festança de Vila Bela 2026",

  startDate: "2026-07-15",
  endDate: "2026-07-27",

  whatsappNumber: "5565984091524",

  shareText:
    "Conheça a Festança de Vila Bela 2026, de 15 a 27 de julho.",

  mobileBreakpoint: 980,

  brotherhoods: [
    {
      id: "todas",
      name: "Toda a programação"
    },
    {
      id: "senhor-divino",
      name: "Senhor Divino Espírito Santo"
    },
    {
      id: "glorioso-sao-benedito",
      name: "Glorioso São Benedito"
    },
    {
      id: "gloriosa-mae-de-deus",
      name: "Gloriosa Mãe de Deus"
    },
    {
      id: "santissima-trindade",
      name: "Três Pessoas da Santíssima Trindade"
    },
    {
      id: "programacao-integrada",
      name: "Programação integrada"
    }
  ]
};

/* =========================================================
   2. UTILITÁRIOS
========================================================= */

/**
 * Executa uma função quando o documento estiver pronto.
 *
 * @param {() => void} callback
 */
function onReady(callback) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback, {
      once: true
    });

    return;
  }

  callback();
}

/**
 * Busca um elemento.
 *
 * @template {Element} T
 * @param {string} selector
 * @param {ParentNode} [context=document]
 * @returns {T | null}
 */
function select(selector, context = document) {
  return context.querySelector(selector);
}

/**
 * Busca uma coleção de elementos.
 *
 * @template {Element} T
 * @param {string} selector
 * @param {ParentNode} [context=document]
 * @returns {T[]}
 */
function selectAll(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

/**
 * Normaliza um texto para busca.
 *
 * @param {string} value
 * @returns {string}
 */
function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

/**
 * Escapa caracteres especiais.
 *
 * @param {string} value
 * @returns {string}
 */
function escapeHtml(value) {
  const temporaryElement = document.createElement("div");

  temporaryElement.textContent = String(value || "");

  return temporaryElement.innerHTML;
}

/**
 * Detecta preferência por redução de movimento.
 *
 * @returns {boolean}
 */
function prefersReducedMotion() {
  return window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
}

/**
 * Informa alterações para tecnologias assistivas.
 *
 * @param {string} message
 */
function announce(message) {
  const status = select("#screen-reader-status");

  if (!status) {
    return;
  }

  status.textContent = "";

  window.setTimeout(() => {
    status.textContent = message;
  }, 80);
}

/**
 * Formata uma data ISO.
 *
 * @param {string} isoDate
 * @returns {string}
 */
function formatDate(isoDate) {
  if (!isoDate) {
    return "";
  }

  const date = new Date(`${isoDate}T12:00:00`);

  if (Number.isNaN(date.getTime())) {
    return isoDate;
  }

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(date);
}

/* =========================================================
   3. MENU MOBILE
========================================================= */

function initializeMobileMenu() {
  const menuButton = select(".menu-toggle");
  const navigation = select("#menu-principal");

  if (
    !(menuButton instanceof HTMLButtonElement) ||
    !(navigation instanceof HTMLElement)
  ) {
    return;
  }

  const links = selectAll("a", navigation);

  function openMenu() {
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute(
      "aria-label",
      "Fechar menu de navegação"
    );

    navigation.classList.add("is-open");
    document.body.classList.add("menu-open");

    announce("Menu de navegação aberto.");
  }

  function closeMenu(restoreFocus = false) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute(
      "aria-label",
      "Abrir menu de navegação"
    );

    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");

    if (restoreFocus) {
      menuButton.focus();
    }
  }

  menuButton.addEventListener("click", () => {
    const isExpanded =
      menuButton.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu(true);
      announce("Menu de navegação fechado.");
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof Node)) {
      return;
    }

    const isOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    if (
      isOpen &&
      !menuButton.contains(target) &&
      !navigation.contains(target)
    ) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > FESTANCA_CONFIG.mobileBreakpoint) {
      closeMenu();
    }
  });
}

/* =========================================================
   4. CABEÇALHO E NAVEGAÇÃO
========================================================= */

function initializeHeaderScrollState() {
  const header = select(".site-header");

  if (!(header instanceof HTMLElement)) {
    return;
  }

  let ticking = false;

  function updateHeader() {
    header.classList.toggle(
      "is-scrolled",
      window.scrollY > 24
    );

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) {
        return;
      }

      window.requestAnimationFrame(updateHeader);
      ticking = true;
    },
    {
      passive: true
    }
  );

  updateHeader();
}

function initializeSmoothScroll() {
  selectAll('a[href^="#"]').forEach((link) => {
    if (!(link instanceof HTMLAnchorElement)) {
      return;
    }

    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = select(targetId);

      if (!(target instanceof HTMLElement)) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start"
      });

      window.history.replaceState(null, "", targetId);
    });
  });
}

function initializeActiveNavigation() {
  const links = selectAll(
    '.main-navigation a[href^="#"]'
  );

  const sections = links
    .map((link) => {
      const targetId = link.getAttribute("href");

      return targetId ? select(targetId) : null;
    })
    .filter(
      (section) => section instanceof HTMLElement
    );

  if (
    sections.length === 0 ||
    !("IntersectionObserver" in window)
  ) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (first, second) =>
            second.intersectionRatio -
            first.intersectionRatio
        )[0];

      if (!visibleEntry) {
        return;
      }

      const currentId = `#${visibleEntry.target.id}`;

      links.forEach((link) => {
        const active =
          link.getAttribute("href") === currentId;

        link.classList.toggle("active", active);

        if (active) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    {
      rootMargin: "-28% 0px -58% 0px",
      threshold: [0.1, 0.3, 0.6]
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
}

/* =========================================================
   5. ANIMAÇÕES
========================================================= */

function initializeRevealAnimations() {
  const elements = selectAll(
    [
      ".section-heading",
      ".about-content",
      ".highlight-card",
      ".feature-card",
      ".schedule-status",
      ".schedule-card",
      ".gallery-item",
      ".location-content",
      ".location-map",
      ".contact-panel"
    ].join(",")
  );

  if (elements.length === 0) {
    return;
  }

  elements.forEach((element) => {
    element.classList.add("reveal");
  });

  if (
    prefersReducedMotion() ||
    !("IntersectionObserver" in window)
  ) {
    elements.forEach((element) => {
      element.classList.add("is-visible");
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  elements.forEach((element, index) => {
    if (element instanceof HTMLElement) {
      element.style.transitionDelay =
        `${Math.min(index % 4, 3) * 70}ms`;
    }

    observer.observe(element);
  });
}

/* =========================================================
   6. IMAGENS AUSENTES
========================================================= */

function createImageFallback(image) {
  const figure = image.closest(".gallery-item");

  if (!(figure instanceof HTMLElement)) {
    image.hidden = true;
    return;
  }

  image.hidden = true;
  figure.classList.add("image-unavailable");

  if (select(".gallery-image-fallback", figure)) {
    return;
  }

  const fallback = document.createElement("div");

  fallback.className = "gallery-image-fallback";
  fallback.setAttribute("role", "img");
  fallback.setAttribute(
    "aria-label",
    image.alt || "Imagem oficial em preparação"
  );

  fallback.innerHTML = `
    <span aria-hidden="true">✦</span>
    <strong>FESTANÇA 2026</strong>
    <small>Imagem oficial em preparação</small>
  `;

  figure.prepend(fallback);
}

function initializeImageFallbacks() {
  selectAll(".gallery-item img").forEach((image) => {
    if (!(image instanceof HTMLImageElement)) {
      return;
    }

    image.addEventListener(
      "error",
      () => {
        createImageFallback(image);
      },
      {
        once: true
      }
    );

    if (image.complete && image.naturalWidth === 0) {
      createImageFallback(image);
    }
  });
}

/* =========================================================
   7. PROGRAMAÇÃO CULTURAL INTELIGENTE
========================================================= */

/**
 * Cada cartão da programação poderá possuir:
 *
 * data-date="2026-07-15"
 * data-brotherhood="glorioso-sao-benedito"
 * data-category="missa"
 * data-location="Igreja Matriz"
 * data-time="19:00"
 *
 * Exemplo:
 *
 * <article
 *   class="schedule-card"
 *   data-date="2026-07-15"
 *   data-brotherhood="glorioso-sao-benedito"
 *   data-category="missa procissao"
 *   data-location="Igreja Matriz"
 * >
 */

function initializeCulturalProgramFilters() {
  const scheduleSection = select("#programacao");
  const scheduleGrid = select(
    ".schedule-grid",
    scheduleSection || document
  );

  if (
    !(scheduleSection instanceof HTMLElement) ||
    !(scheduleGrid instanceof HTMLElement)
  ) {
    return;
  }

  const cards = selectAll(".schedule-card", scheduleGrid);

  if (cards.length === 0) {
    return;
  }

  const controls = createProgramControls();

  const scheduleStatus = select(
    ".schedule-status",
    scheduleSection
  );

  if (scheduleStatus) {
    scheduleStatus.insertAdjacentElement(
      "afterend",
      controls
    );
  } else {
    scheduleGrid.insertAdjacentElement(
      "beforebegin",
      controls
    );
  }

  const searchInput = select(
    "#program-search",
    controls
  );

  const brotherhoodSelect = select(
    "#program-brotherhood",
    controls
  );

  const categorySelect = select(
    "#program-category",
    controls
  );

  const dateSelect = select(
    "#program-date",
    controls
  );

  const resultCount = select(
    "#program-result-count",
    controls
  );

  const clearButton = select(
    "#program-clear-filters",
    controls
  );

  populateProgramDates(cards, dateSelect);
  populateProgramCategories(cards, categorySelect);

  function applyFilters() {
    const searchTerm =
      searchInput instanceof HTMLInputElement
        ? normalizeText(searchInput.value)
        : "";

    const selectedBrotherhood =
      brotherhoodSelect instanceof HTMLSelectElement
        ? brotherhoodSelect.value
        : "todas";

    const selectedCategory =
      categorySelect instanceof HTMLSelectElement
        ? categorySelect.value
        : "todas";

    const selectedDate =
      dateSelect instanceof HTMLSelectElement
        ? dateSelect.value
        : "todas";

    let visibleCount = 0;

    cards.forEach((card) => {
      if (!(card instanceof HTMLElement)) {
        return;
      }

      const cardText = normalizeText(
        card.textContent || ""
      );

      const cardBrotherhood =
        card.dataset.brotherhood ||
        "programacao-integrada";

      const cardCategories = normalizeText(
        card.dataset.category || ""
      )
        .split(/\s+/)
        .filter(Boolean);

      const cardDate = card.dataset.date || "";

      const matchesSearch =
        !searchTerm ||
        cardText.includes(searchTerm) ||
        normalizeText(card.dataset.location || "")
          .includes(searchTerm);

      const matchesBrotherhood =
        selectedBrotherhood === "todas" ||
        cardBrotherhood === selectedBrotherhood ||
        cardBrotherhood
          .split(/\s+/)
          .includes(selectedBrotherhood);

      const matchesCategory =
        selectedCategory === "todas" ||
        cardCategories.includes(selectedCategory);

      const matchesDate =
        selectedDate === "todas" ||
        cardDate === selectedDate;

      const visible =
        matchesSearch &&
        matchesBrotherhood &&
        matchesCategory &&
        matchesDate;

      card.hidden = !visible;
      card.setAttribute(
        "aria-hidden",
        String(!visible)
      );

      if (visible) {
        visibleCount += 1;
      }
    });

    updateProgramResultCount(
      resultCount,
      visibleCount,
      cards.length
    );

    toggleNoResultsMessage(
      scheduleGrid,
      visibleCount
    );
  }

  [
    searchInput,
    brotherhoodSelect,
    categorySelect,
    dateSelect
  ].forEach((control) => {
    if (
      control instanceof HTMLInputElement ||
      control instanceof HTMLSelectElement
    ) {
      control.addEventListener(
        control instanceof HTMLInputElement
          ? "input"
          : "change",
        applyFilters
      );
    }
  });

  if (clearButton instanceof HTMLButtonElement) {
    clearButton.addEventListener("click", () => {
      if (searchInput instanceof HTMLInputElement) {
        searchInput.value = "";
      }

      if (
        brotherhoodSelect instanceof HTMLSelectElement
      ) {
        brotherhoodSelect.value = "todas";
      }

      if (
        categorySelect instanceof HTMLSelectElement
      ) {
        categorySelect.value = "todas";
      }

      if (dateSelect instanceof HTMLSelectElement) {
        dateSelect.value = "todas";
      }

      applyFilters();

      announce(
        "Filtros removidos. Toda a programação está visível."
      );
    });
  }

  applyFilters();
}

function createProgramControls() {
  const container = document.createElement("section");

  container.className = "program-filter-panel";
  container.setAttribute(
    "aria-labelledby",
    "program-filter-title"
  );

  const brotherhoodOptions =
    FESTANCA_CONFIG.brotherhoods
      .map(
        (brotherhood) => `
          <option value="${escapeHtml(brotherhood.id)}">
            ${escapeHtml(brotherhood.name)}
          </option>
        `
      )
      .join("");

  container.innerHTML = `
    <div class="program-filter-heading">
      <div>
        <p class="program-filter-kicker">
          Roteiro Cultural Inteligente
        </p>

        <h3 id="program-filter-title">
          Monte sua programação
        </h3>

        <p>
          Consulte atividades por irmandade, data,
          categoria ou palavra-chave.
        </p>
      </div>

      <strong
        id="program-result-count"
        class="program-result-count"
        aria-live="polite"
      ></strong>
    </div>

    <div class="program-filter-grid">
      <label class="program-filter-field">
        <span>Buscar atividade</span>

        <input
          id="program-search"
          type="search"
          placeholder="Ex.: missa, dança, cortejo..."
          autocomplete="off"
        >
      </label>

      <label class="program-filter-field">
        <span>Irmandade ou celebração</span>

        <select id="program-brotherhood">
          ${brotherhoodOptions}
        </select>
      </label>

      <label class="program-filter-field">
        <span>Categoria</span>

        <select id="program-category">
          <option value="todas">
            Todas as categorias
          </option>
        </select>
      </label>

      <label class="program-filter-field">
        <span>Data</span>

        <select id="program-date">
          <option value="todas">
            Todas as datas
          </option>
        </select>
      </label>
    </div>

    <div class="program-filter-actions">
      <button
        id="program-clear-filters"
        class="button button-secondary"
        type="button"
      >
        Limpar filtros
      </button>

      <button
        class="button button-secondary print-schedule-button"
        type="button"
      >
        <span aria-hidden="true">⎙</span>
        Imprimir programação selecionada
      </button>
    </div>
  `;

  const printButton = select(
    ".print-schedule-button",
    container
  );

  if (printButton instanceof HTMLButtonElement) {
    printButton.addEventListener("click", () => {
      announce(
        "Preparando a programação selecionada para impressão."
      );

      document.body.classList.add(
        "printing-cultural-program"
      );

      window.setTimeout(() => {
        window.print();
      }, 180);
    });

    window.addEventListener("afterprint", () => {
      document.body.classList.remove(
        "printing-cultural-program"
      );
    });
  }

  return container;
}

function populateProgramDates(cards, selectElement) {
  if (!(selectElement instanceof HTMLSelectElement)) {
    return;
  }

  const dates = Array.from(
    new Set(
      cards
        .map((card) =>
          card instanceof HTMLElement
            ? card.dataset.date
            : ""
        )
        .filter(Boolean)
    )
  ).sort();

  dates.forEach((date) => {
    const option = document.createElement("option");

    option.value = date;
    option.textContent = formatDate(date);

    selectElement.appendChild(option);
  });
}

function populateProgramCategories(
  cards,
  selectElement
) {
  if (!(selectElement instanceof HTMLSelectElement)) {
    return;
  }

  const categories = new Set();

  cards.forEach((card) => {
    if (!(card instanceof HTMLElement)) {
      return;
    }

    normalizeText(card.dataset.category || "")
      .split(/\s+/)
      .filter(Boolean)
      .forEach((category) => {
        categories.add(category);
      });
  });

  Array.from(categories)
    .sort()
    .forEach((category) => {
      const option = document.createElement("option");

      option.value = category;
      option.textContent =
        category.charAt(0).toUpperCase() +
        category.slice(1);

      selectElement.appendChild(option);
    });
}

function updateProgramResultCount(
  element,
  visibleCount,
  totalCount
) {
  if (!(element instanceof HTMLElement)) {
    return;
  }

  if (visibleCount === totalCount) {
    element.textContent =
      `${totalCount} atividades disponíveis`;

    return;
  }

  element.textContent =
    `${visibleCount} de ${totalCount} atividades`;
}

function toggleNoResultsMessage(
  scheduleGrid,
  visibleCount
) {
  let message = select(
    ".program-no-results",
    scheduleGrid.parentElement || scheduleGrid
  );

  if (visibleCount > 0) {
    message?.remove();
    return;
  }

  if (message) {
    return;
  }

  message = document.createElement("div");

  message.className = "program-no-results";
  message.setAttribute("role", "status");

  message.innerHTML = `
    <span aria-hidden="true">✦</span>

    <div>
      <strong>Nenhuma atividade encontrada</strong>

      <p>
        Ajuste os filtros ou consulte toda a programação.
      </p>
    </div>
  `;

  scheduleGrid.insertAdjacentElement(
    "afterend",
    message
  );
}

/* =========================================================
   8. COMPARTILHAMENTO
========================================================= */

function initializeShareButton() {
  const contactPanel = select(".contact-panel");

  if (!(contactPanel instanceof HTMLElement)) {
    return;
  }

  if (select(".share-festanca-button", contactPanel)) {
    return;
  }

  const actions = document.createElement("div");

  actions.className = "contact-actions";

  const whatsappButton = select(
    ".button-whatsapp",
    contactPanel
  );

  if (whatsappButton) {
    actions.appendChild(whatsappButton);
  }

  const shareButton = document.createElement("button");

  shareButton.type = "button";
  shareButton.className =
    "button button-secondary share-festanca-button";

  shareButton.innerHTML = `
    <span aria-hidden="true">↗</span>
    Compartilhar
  `;

  shareButton.addEventListener("click", async () => {
    const shareData = {
      title: FESTANCA_CONFIG.eventName,
      text: FESTANCA_CONFIG.shareText,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);

        announce(
          "Página compartilhada com sucesso."
        );

        return;
      }

      if (navigator.clipboard) {
        await navigator.clipboard.writeText(
          `${shareData.text} ${shareData.url}`
        );

        shareButton.innerHTML = `
          <span aria-hidden="true">✓</span>
          Link copiado
        `;

        announce(
          "Link copiado para a área de transferência."
        );

        window.setTimeout(() => {
          shareButton.innerHTML = `
            <span aria-hidden="true">↗</span>
            Compartilhar
          `;
        }, 2200);

        return;
      }

      window.prompt(
        "Copie o endereço da Festança:",
        shareData.url
      );
    } catch (error) {
      console.error(
        "Falha ao compartilhar a página:",
        error
      );

      announce(
        "Não foi possível compartilhar automaticamente."
      );
    }
  });

  actions.appendChild(shareButton);
  contactPanel.appendChild(actions);
}

/* =========================================================
   9. LINKS EXTERNOS
========================================================= */

function initializeExternalLinks() {
  selectAll('a[target="_blank"]').forEach((link) => {
    if (!(link instanceof HTMLAnchorElement)) {
      return;
    }

    const relValues = new Set(
      (link.getAttribute("rel") || "")
        .split(/\s+/)
        .filter(Boolean)
    );

    relValues.add("noopener");
    relValues.add("noreferrer");

    link.setAttribute(
      "rel",
      Array.from(relValues).join(" ")
    );
  });
}

/* =========================================================
   10. ATALHOS DE TECLADO
========================================================= */

function initializeKeyboardShortcuts() {
  document.addEventListener("keydown", (event) => {
    const target = event.target;

    if (
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target instanceof HTMLSelectElement ||
      (
        target instanceof HTMLElement &&
        target.isContentEditable
      )
    ) {
      return;
    }

    const key = event.key.toLowerCase();

    if (event.altKey && key === "i") {
      event.preventDefault();

      select("#inicio")?.scrollIntoView({
        behavior:
          prefersReducedMotion() ? "auto" : "smooth"
      });
    }

    if (event.altKey && key === "p") {
      event.preventDefault();

      window.print();
    }

    if (event.altKey && key === "c") {
      event.preventDefault();

      select("#contato")?.scrollIntoView({
        behavior:
          prefersReducedMotion() ? "auto" : "smooth"
      });
    }
  });
}

/* =========================================================
   11. ANO E INTEGRIDADE
========================================================= */

function updateCurrentYear() {
  const yearElement = select("#current-year");

  if (yearElement) {
    yearElement.textContent =
      String(new Date().getFullYear());
  }
}

function runPageHealthCheck() {
  const requiredSelectors = [
    ".site-header",
    "#conteudo-principal",
    "#sobre",
    "#programacao",
    "#galeria",
    "#localizacao",
    "#contato",
    ".site-footer"
  ];

  const missingSelectors =
    requiredSelectors.filter(
      (selector) => !select(selector)
    );

  if (missingSelectors.length > 0) {
    console.warn(
      "FESTANÇA 2026 — elementos ausentes:",
      missingSelectors
    );

    return;
  }

  console.info(
    "FESTANÇA 2026 — estrutura carregada com sucesso."
  );
}

/* =========================================================
   12. ESTILOS COMPLEMENTARES GERADOS PELO JS
========================================================= */

function injectDynamicStyles() {
  if (
    document.getElementById(
      "festanca-dynamic-styles"
    )
  ) {
    return;
  }

  const style = document.createElement("style");

  style.id = "festanca-dynamic-styles";

  style.textContent = `
    .program-filter-panel {
      margin: 0 0 2rem;
      padding: 1.4rem;
      border: 1px solid rgba(255, 210, 31, 0.3);
      border-radius: 22px;
      background:
        linear-gradient(
          145deg,
          rgba(255, 210, 31, 0.08),
          rgba(15, 184, 215, 0.045)
        );
    }

    .program-filter-heading {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 1.2rem;
    }

    .program-filter-kicker {
      margin-bottom: 0.25rem;
      color: #ffd21f;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .program-filter-heading h3 {
      margin-bottom: 0.35rem;
      color: #ffffff;
      font-family:
        "Arial Black",
        "Trebuchet MS",
        Arial,
        sans-serif;
      font-size: clamp(1.35rem, 4vw, 2rem);
      text-transform: uppercase;
    }

    .program-filter-heading p {
      margin-bottom: 0;
      color: #c9d7df;
    }

    .program-result-count {
      flex-shrink: 0;
      padding: 0.55rem 0.85rem;
      border: 1px solid rgba(255, 210, 31, 0.32);
      border-radius: 999px;
      color: #ffd21f;
      background: rgba(255, 210, 31, 0.06);
      font-size: 0.78rem;
    }

    .program-filter-grid {
      display: grid;
      grid-template-columns:
        repeat(4, minmax(0, 1fr));
      gap: 0.8rem;
    }

    .program-filter-field {
      display: grid;
      gap: 0.35rem;
    }

    .program-filter-field span {
      color: #ffffff;
      font-size: 0.76rem;
      font-weight: 850;
    }

    .program-filter-field input,
    .program-filter-field select {
      width: 100%;
      min-height: 48px;
      padding: 0.7rem 0.8rem;
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 12px;
      color: #ffffff;
      background: #061a28;
    }

    .program-filter-field input::placeholder {
      color: #91a6b2;
    }

    .program-filter-field option {
      color: #ffffff;
      background: #061a28;
    }

    .program-filter-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 1rem;
    }

    .program-filter-actions button {
      cursor: pointer;
    }

    .program-no-results {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 1rem;
      padding: 1.25rem;
      border: 1px dashed rgba(255, 210, 31, 0.42);
      border-radius: 16px;
      color: #ffffff;
      background: rgba(255, 210, 31, 0.06);
    }

    .program-no-results > span {
      color: #ffd21f;
      font-size: 1.8rem;
    }

    .program-no-results p {
      margin-bottom: 0;
      color: #c9d7df;
    }

    .contact-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      align-items: center;
      justify-content: flex-end;
      flex-shrink: 0;
    }

    .gallery-image-fallback {
      position: absolute;
      inset: 0;
      display: grid;
      align-content: center;
      justify-items: center;
      gap: 0.5rem;
      padding: 1.5rem;
      color: #ffffff;
      background:
        radial-gradient(
          circle at 25% 20%,
          rgba(255, 210, 31, 0.23),
          transparent 28%
        ),
        linear-gradient(
          145deg,
          #09235b,
          #04121d
        );
      text-align: center;
    }

    .gallery-image-fallback span {
      color: #ffd21f;
      font-size: 2.4rem;
    }

    .gallery-image-fallback strong {
      font-family:
        "Arial Black",
        "Trebuchet MS",
        Arial,
        sans-serif;
    }

    .gallery-image-fallback small {
      color: #c9d7df;
    }

    @media (max-width: 980px) {
      .program-filter-grid {
        grid-template-columns:
          repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 680px) {
      .program-filter-heading {
        flex-direction: column;
      }

      .program-filter-grid {
        grid-template-columns: 1fr;
      }

      .program-filter-actions,
      .contact-actions {
        width: 100%;
        flex-direction: column;
        align-items: stretch;
      }

      .program-filter-actions .button,
      .contact-actions .button {
        width: 100%;
      }
    }

    @media print {
      .program-filter-panel,
      .program-no-results,
      .contact-actions {
        display: none !important;
      }

      .schedule-card[hidden] {
        display: none !important;
      }
    }
  `;

  document.head.appendChild(style);
}

/* =========================================================
   13. INICIALIZAÇÃO
========================================================= */

onReady(() => {
  document.documentElement.classList.add(
    "js-enabled"
  );

  injectDynamicStyles();

  initializeMobileMenu();
  initializeHeaderScrollState();
  initializeSmoothScroll();
  initializeActiveNavigation();
  initializeRevealAnimations();
  initializeImageFallbacks();
  initializeCulturalProgramFilters();
  initializeShareButton();
  initializeExternalLinks();
  initializeKeyboardShortcuts();

  updateCurrentYear();
  runPageHealthCheck();
});
