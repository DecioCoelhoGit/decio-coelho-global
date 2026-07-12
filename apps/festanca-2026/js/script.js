"use strict";

/**
 * ============================================================
 * FESTANÇA DE VILA BELA 2026
 * LANDING PAGE — CONTROLADOR PRINCIPAL
 * ============================================================
 *
 * Arquivo:
 * apps/festanca-2026/js/script.js
 *
 * Responsabilidades:
 * - controlar menu mobile;
 * - executar navegação suave;
 * - destacar item ativo do menu;
 * - integrar a Programação Cultural Inteligente;
 * - renderizar atividades dinamicamente;
 * - aplicar filtros por celebração, data e categoria;
 * - executar pesquisa textual;
 * - mostrar programação de hoje;
 * - mostrar próximo evento;
 * - controlar links seguros do Google Maps;
 * - proteger endereços residenciais;
 * - tratar cortejos e atividades itinerantes;
 * - integrar compartilhamento e WhatsApp;
 * - oferecer recursos básicos de acessibilidade;
 * - controlar botão de retorno ao topo;
 * - preservar compatibilidade com GitHub Pages.
 *
 * Dependência:
 * ./js/data-loader.js
 *
 * Coordenação-Geral:
 * Nazário Frazão de Almeida
 */


/* ============================================================
   EXECUÇÃO ISOLADA
============================================================ */

(() => {

  const APP_NAME = "Festança de Vila Bela 2026";

  const WHATSAPP_NUMBER = "5565984091524";

  const DEFAULT_SHARE_TEXT =
    "Confira a Programação Oficial da Festança de Vila Bela 2026.";

  const state = {

    initialized: false,

    dataReady: false,

    activities: [],

    filteredActivities: [],

    activeFilters: {

      celebration: "",

      category: "",

      date: "",

      search: ""

    }

  };


  /* ==========================================================
     SELETORES FLEXÍVEIS
  ========================================================== */

  const selectors = {

    header: [
      ".site-header",
      ".header",
      "header"
    ],

    menuButton: [
      "#menu-toggle",
      ".menu-toggle",
      "[data-menu-toggle]"
    ],

    navigation: [
      "#main-nav",
      ".main-nav",
      ".site-nav",
      "nav"
    ],

    navigationLinks: [
      ".main-nav a[href^='#']",
      ".site-nav a[href^='#']",
      "nav a[href^='#']"
    ],

    programSection: [
      "#programacao",
      "[data-section='programacao']",
      ".programacao"
    ],

    programContainer: [
      "#programacao-lista",
      "#programacao-container",
      "#agenda-lista",
      "[data-programacao-lista]"
    ],

    filtersContainer: [
      "#programacao-filtros",
      "[data-programacao-filtros]"
    ],

    statusContainer: [
      "#programacao-status",
      "[data-programacao-status]"
    ],

    resultCounter: [
      "#programacao-contador",
      "[data-programacao-contador]"
    ],

    loadingContainer: [
      "#programacao-loading",
      "[data-programacao-loading]"
    ],

    errorContainer: [
      "#programacao-error",
      "[data-programacao-error]"
    ],

    nextEventContainer: [
      "#proximo-evento",
      "[data-proximo-evento]"
    ],

    todayContainer: [
      "#programacao-hoje",
      "[data-programacao-hoje]"
    ],

    backToTop: [
      "#back-to-top",
      ".back-to-top",
      "[data-back-to-top]"
    ],

    shareButtons: [
      "[data-share]",
      ".btn-share"
    ],

    whatsappButtons: [
      "[data-whatsapp]",
      ".btn-whatsapp",
      ".whatsapp-float"
    ],

    contrastButtons: [
      "[data-contrast-toggle]",
      "#contrast-toggle"
    ],

    fontIncreaseButtons: [
      "[data-font-increase]",
      "#font-increase"
    ],

    fontDecreaseButtons: [
      "[data-font-decrease]",
      "#font-decrease"
    ],

    fontResetButtons: [
      "[data-font-reset]",
      "#font-reset"
    ]

  };


  /* ==========================================================
     UTILITÁRIOS DE DOM
  ========================================================== */

  function findFirst(selectorList) {

    for (const selector of selectorList) {

      const element = document.querySelector(selector);

      if (element) {

        return element;

      }

    }

    return null;

  }


  function findAll(selectorList) {

    const elements = new Set();

    selectorList.forEach(selector => {

      document
        .querySelectorAll(selector)
        .forEach(element => elements.add(element));

    });

    return Array.from(elements);

  }


  function createElement(
    tagName,
    className = "",
    textContent = ""
  ) {

    const element =
      document.createElement(tagName);

    if (className) {

      element.className = className;

    }

    if (textContent) {

      element.textContent = textContent;

    }

    return element;

  }


  function escapeHtml(value) {

    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  }


  function normalizeText(value) {

    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();

  }


  function formatLabel(value) {

    if (!value) {

      return "";

    }

    return String(value)
      .replaceAll("-", " ")
      .replace(/\b\w/g, letter =>
        letter.toUpperCase()
      );

  }


  function getCurrentPageUrl() {

    return window.location.href.split("#")[0];

  }


  /* ==========================================================
     MENU MOBILE
  ========================================================== */

  function initializeMobileMenu() {

    const menuButton =
      findFirst(selectors.menuButton);

    const navigation =
      findFirst(selectors.navigation);

    if (!menuButton || !navigation) {

      return;

    }

    const closeMenu = () => {

      navigation.classList.remove("is-open");

      menuButton.classList.remove("is-active");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      document.body.classList.remove(
        "menu-open"
      );

    };


    const openMenu = () => {

      navigation.classList.add("is-open");

      menuButton.classList.add("is-active");

      menuButton.setAttribute(
        "aria-expanded",
        "true"
      );

      document.body.classList.add(
        "menu-open"
      );

    };


    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );


    menuButton.addEventListener(

      "click",

      () => {

        const isOpen =
          navigation.classList.contains(
            "is-open"
          );

        if (isOpen) {

          closeMenu();

        } else {

          openMenu();

        }

      }

    );


    navigation
      .querySelectorAll("a[href^='#']")
      .forEach(link => {

        link.addEventListener(

          "click",

          closeMenu

        );

      });


    document.addEventListener(

      "keydown",

      event => {

        if (event.key === "Escape") {

          closeMenu();

        }

      }

    );


    document.addEventListener(

      "click",

      event => {

        if (
          !navigation.contains(event.target) &&
          !menuButton.contains(event.target)
        ) {

          closeMenu();

        }

      }

    );

  }


  /* ==========================================================
     ROLAGEM SUAVE
  ========================================================== */

  function initializeSmoothScroll() {

    document
      .querySelectorAll("a[href^='#']")
      .forEach(link => {

        link.addEventListener(

          "click",

          event => {

            const targetId =
              link.getAttribute("href");

            if (
              !targetId ||
              targetId === "#"
            ) {

              return;

            }

            const target =
              document.querySelector(targetId);

            if (!target) {

              return;

            }

            event.preventDefault();

            const header =
              findFirst(selectors.header);

            const headerHeight =
              header
                ? header.offsetHeight
                : 0;

            const targetTop =
              target.getBoundingClientRect().top +
              window.scrollY -
              headerHeight -
              16;

            window.scrollTo({

              top: targetTop,

              behavior: "smooth"

            });

            history.replaceState(
              null,
              "",
              targetId
            );

          }

        );

      });

  }


  /* ==========================================================
     DESTAQUE DO MENU ATIVO
  ========================================================== */

  function initializeActiveNavigation() {

    const links =
      findAll(selectors.navigationLinks);

    if (links.length === 0) {

      return;

    }

    const sections = links
      .map(link => {

        const href =
          link.getAttribute("href");

        if (
          !href ||
          !href.startsWith("#")
        ) {

          return null;

        }

        const section =
          document.querySelector(href);

        return section
          ? {
              link,
              section
            }
          : null;

      })
      .filter(Boolean);


    if (sections.length === 0) {

      return;

    }


    const observer =
      new IntersectionObserver(

        entries => {

          entries.forEach(entry => {

            if (!entry.isIntersecting) {

              return;

            }

            links.forEach(link => {

              link.classList.remove(
                "is-active"
              );

              link.removeAttribute(
                "aria-current"
              );

            });

            const current =
              sections.find(
                item =>
                  item.section ===
                  entry.target
              );

            if (current) {

              current.link.classList.add(
                "is-active"
              );

              current.link.setAttribute(
                "aria-current",
                "page"
              );

            }

          });

        },

        {

          rootMargin:
            "-25% 0px -60% 0px",

          threshold: 0

        }

      );


    sections.forEach(item => {

      observer.observe(item.section);

    });

  }


  /* ==========================================================
     CRIAÇÃO AUTOMÁTICA DA INTERFACE DE PROGRAMAÇÃO
  ========================================================== */

  function ensureProgramInterface() {

    const section =
      findFirst(selectors.programSection);

    if (!section) {

      console.warn(
        "[Festança 2026] Seção de programação não encontrada."
      );

      return null;

    }


    let filters =
      findFirst(selectors.filtersContainer);

    if (!filters) {

      filters = createElement(
        "div",
        "programacao-filtros"
      );

      filters.id =
        "programacao-filtros";

      section.appendChild(filters);

    }


    let status =
      findFirst(selectors.statusContainer);

    if (!status) {

      status = createElement(
        "div",
        "programacao-status"
      );

      status.id =
        "programacao-status";

      status.setAttribute(
        "aria-live",
        "polite"
      );

      section.appendChild(status);

    }


    let counter =
      findFirst(selectors.resultCounter);

    if (!counter) {

      counter = createElement(
        "p",
        "programacao-contador"
      );

      counter.id =
        "programacao-contador";

      status.appendChild(counter);

    }


    let container =
      findFirst(selectors.programContainer);

    if (!container) {

      container = createElement(
        "div",
        "programacao-lista"
      );

      container.id =
        "programacao-lista";

      section.appendChild(container);

    }


    return {

      section,

      filters,

      status,

      counter,

      container

    };

  }


  /* ==========================================================
     FILTROS DA PROGRAMAÇÃO
  ========================================================== */

  function createProgramFilters(interfaceElements) {

    const {
      filters
    } = interfaceElements;

    filters.innerHTML = `
      <div class="programacao-filtros__grid">

        <div class="campo-filtro">
          <label for="filtro-celebracao">
            Celebração
          </label>

          <select id="filtro-celebracao">
            <option value="">
              Todas as celebrações
            </option>

            <option value="senhor-divino-espirito-santo">
              Senhor Divino Espírito Santo
            </option>

            <option value="glorioso-sao-benedito">
              Glorioso São Benedito
            </option>

            <option value="gloriosa-mae-de-deus">
              Gloriosa Mãe de Deus
            </option>

            <option value="tres-pessoas-santissima-trindade">
              Três Pessoas da Santíssima Trindade
            </option>

            <option value="programacao-integrada">
              Programação Integrada
            </option>
          </select>
        </div>


        <div class="campo-filtro">
          <label for="filtro-data">
            Data
          </label>

          <select id="filtro-data">
            <option value="">
              Todas as datas
            </option>
          </select>
        </div>


        <div class="campo-filtro">
          <label for="filtro-categoria">
            Categoria
          </label>

          <select id="filtro-categoria">
            <option value="">
              Todas as categorias
            </option>
          </select>
        </div>


        <div class="campo-filtro campo-filtro--pesquisa">
          <label for="filtro-pesquisa">
            Pesquisar
          </label>

          <input
            id="filtro-pesquisa"
            type="search"
            placeholder="Ex.: Congo, missa, alvorada..."
            autocomplete="off"
          >
        </div>

      </div>


      <div class="programacao-acoes">

        <button
          type="button"
          class="btn-programacao"
          data-action="today"
        >
          Programação de hoje
        </button>

        <button
          type="button"
          class="btn-programacao"
          data-action="next"
        >
          Próximo evento
        </button>

        <button
          type="button"
          class="btn-programacao btn-programacao--secondary"
          data-action="clear"
        >
          Limpar filtros
        </button>

        <button
          type="button"
          class="btn-programacao btn-programacao--secondary"
          data-action="share"
        >
          Compartilhar programação
        </button>

      </div>
    `;


    populateDateFilter();

    populateCategoryFilter();

    bindProgramFilters();

  }


  function populateDateFilter() {

    const select =
      document.querySelector(
        "#filtro-data"
      );

    if (!select) {

      return;

    }

    const dates = Array.from(

      new Set(

        state.activities.map(
          activity => activity.date
        )

      )

    ).sort();


    dates.forEach(dateValue => {

      const option =
        document.createElement("option");

      option.value =
        dateValue;

      option.textContent =
        window.FestancaData
          .formatFullDateBR(dateValue);

      select.appendChild(option);

    });

  }


  function populateCategoryFilter() {

    const select =
      document.querySelector(
        "#filtro-categoria"
      );

    if (!select) {

      return;

    }

    const categories =
      Array.from(

        new Set(

          state.activities.flatMap(

            activity =>
              activity.categories || []

          )

        )

      ).sort();


    categories.forEach(category => {

      const option =
        document.createElement("option");

      option.value =
        category;

      option.textContent =
        formatLabel(category);

      select.appendChild(option);

    });

  }


  function bindProgramFilters() {

    const celebrationSelect =
      document.querySelector(
        "#filtro-celebracao"
      );

    const dateSelect =
      document.querySelector(
        "#filtro-data"
      );

    const categorySelect =
      document.querySelector(
        "#filtro-categoria"
      );

    const searchInput =
      document.querySelector(
        "#filtro-pesquisa"
      );


    celebrationSelect?.addEventListener(

      "change",

      event => {

        state.activeFilters.celebration =
          event.target.value;

        applyFilters();

      }

    );


    dateSelect?.addEventListener(

      "change",

      event => {

        state.activeFilters.date =
          event.target.value;

        applyFilters();

      }

    );


    categorySelect?.addEventListener(

      "change",

      event => {

        state.activeFilters.category =
          event.target.value;

        applyFilters();

      }

    );


    let searchTimer = null;

    searchInput?.addEventListener(

      "input",

      event => {

        clearTimeout(searchTimer);

        searchTimer = setTimeout(

          () => {

            state.activeFilters.search =
              event.target.value.trim();

            applyFilters();

          },

          250

        );

      }

    );


    document
      .querySelectorAll(
        "[data-action]"
      )
      .forEach(button => {

        button.addEventListener(

          "click",

          () => {

            const action =
              button.dataset.action;

            if (action === "today") {

              showTodayProgram();

            }

            if (action === "next") {

              showNextEvent();

            }

            if (action === "clear") {

              clearProgramFilters();

            }

            if (action === "share") {

              shareProgram();

            }

          }

        );

      });

  }


  /* ==========================================================
     APLICAÇÃO DOS FILTROS
  ========================================================== */

  function applyFilters() {

    const filters = {

      celebration:
        state.activeFilters.celebration ||
        null,

      category:
        state.activeFilters.category ||
        null,

      date:
        state.activeFilters.date ||
        null,

      search:
        state.activeFilters.search ||
        null

    };


    state.filteredActivities =
      window.FestancaData
        .filterActivities(filters);


    renderProgram(
      state.filteredActivities
    );

  }


  function clearProgramFilters() {

    state.activeFilters = {

      celebration: "",

      category: "",

      date: "",

      search: ""

    };


    const fields = [

      "#filtro-celebracao",

      "#filtro-data",

      "#filtro-categoria",

      "#filtro-pesquisa"

    ];


    fields.forEach(selector => {

      const field =
        document.querySelector(selector);

      if (field) {

        field.value = "";

      }

    });


    state.filteredActivities =
      [...state.activities];


    renderProgram(
      state.filteredActivities
    );

  }


  /* ==========================================================
     PROGRAMAÇÃO DE HOJE E PRÓXIMO EVENTO
  ========================================================== */

  function showTodayProgram() {

    const todayActivities =
      window.FestancaData
        .getTodayActivities();


    state.filteredActivities =
      todayActivities;


    renderProgram(
      todayActivities,
      "Programação de hoje"
    );


    scrollToProgram();

  }


  function showNextEvent() {

    const nextActivity =
      window.FestancaData
        .getNextActivity();


    if (!nextActivity) {

      showProgramMessage(
        "Não há próxima atividade disponível para a data atual."
      );

      return;

    }


    state.filteredActivities = [
      nextActivity
    ];


    renderProgram(
      [nextActivity],
      "Próximo evento"
    );


    scrollToProgram();

  }


  function scrollToProgram() {

    const section =
      findFirst(selectors.programSection);

    section?.scrollIntoView({

      behavior: "smooth",

      block: "start"

    });

  }


  /* ==========================================================
     REGRAS DE PRIVACIDADE E LOCALIZAÇÃO
  ========================================================== */

  function isPrivateResidence(activity) {

    const type =
      normalizeText(
        activity.location?.type
      );

    return (
      type.includes("residencia") ||
      type.includes("casa")
    );

  }


  function isItinerantActivity(activity) {

    return Boolean(

      activity.route?.isItinerant ||

      activity.categories?.includes(
        "itinerante"
      ) ||

      activity.location?.type ===
        "percurso"

    );

  }


  function isExactMapAuthorized(activity) {

    if (!activity.googleMapsUrl) {

      return false;

    }

    if (!isPrivateResidence(activity)) {

      return true;

    }


    const place =
      activity.place || {};


    const publicationStatus =
      normalizeText(

        place.publicationStatus ||

        place.publication?.status ||

        place.locationPolicy?.publicationStatus

      );


    const verificationStatus =
      normalizeText(

        place.verificationStatus ||

        activity.location?.verificationStatus

      );


    return (

      publicationStatus.includes(
        "autorizado"
      ) ||

      publicationStatus.includes(
        "publicavel"
      ) ||

      verificationStatus.includes(
        "autorizado-para-publicacao"
      ) ||

      verificationStatus.includes(
        "confirmado-pela-coordenacao"
      )

    );

  }


  function getLocationDisplay(activity) {

    if (isItinerantActivity(activity)) {

      return {

        icon: "🚶",

        title:
          activity.location?.name ||
          "Percurso tradicional",

        note:
          activity.route?.description ||
          "Percurso sujeito à orientação da organização."

      };

    }


    if (isPrivateResidence(activity)) {

      return {

        icon: "🏠",

        title:
          activity.location?.name ||
          "Residência de festeiro",

        note:
          "Visita oficial somente no horário e ato previstos na programação. Consulte a agenda e os contatos da organização."

      };

    }


    return {

      icon: "📍",

      title:
        activity.location?.name ||
        "Local a confirmar",

      note:
        activity.location?.reference ||
        ""

    };

  }


  /* ==========================================================
     RENDERIZAÇÃO DA PROGRAMAÇÃO
  ========================================================== */

  function renderProgram(
    activities,
    customTitle = ""
  ) {

    const container =
      findFirst(selectors.programContainer);

    const counter =
      findFirst(selectors.resultCounter);

    if (!container) {

      return;

    }


    container.innerHTML = "";


    if (counter) {

      const total =
        activities.length;

      counter.textContent =
        customTitle
          ? `${customTitle}: ${total} atividade${total === 1 ? "" : "s"}`
          : `${total} atividade${total === 1 ? "" : "s"} encontrada${total === 1 ? "" : "s"}.`;

    }


    if (activities.length === 0) {

      const empty =
        createElement(
          "div",
          "programacao-vazia"
        );

      empty.innerHTML = `
        <strong>
          Nenhuma atividade encontrada.
        </strong>

        <p>
          Ajuste os filtros ou consulte a programação completa.
        </p>
      `;

      container.appendChild(empty);

      return;

    }


    const grouped =
      groupActivitiesByDate(activities);


    Object.entries(grouped)
      .forEach(([date, dateActivities]) => {

        const dayGroup =
          createElement(
            "section",
            "programacao-dia"
          );

        const dayTitle =
          createElement(
            "h3",
            "programacao-dia__titulo"
          );

        dayTitle.textContent =
          window.FestancaData
            .formatFullDateBR(date);

        dayGroup.appendChild(dayTitle);


        const cards =
          createElement(
            "div",
            "programacao-dia__cards"
          );


        dateActivities.forEach(activity => {

          cards.appendChild(

            createActivityCard(activity)

          );

        });


        dayGroup.appendChild(cards);

        container.appendChild(dayGroup);

      });

  }


  function groupActivitiesByDate(activities) {

    return activities.reduce(

      (groups, activity) => {

        const date =
          activity.date || "sem-data";

        if (!groups[date]) {

          groups[date] = [];

        }

        groups[date].push(activity);

        return groups;

      },

      {}

    );

  }


  function createActivityCard(activity) {

    const article =
      createElement(
        "article",
        "atividade-card"
      );


    article.dataset.activityId =
      activity.id;


    if (isItinerantActivity(activity)) {

      article.classList.add(
        "atividade-card--itinerante"
      );

    }


    if (isPrivateResidence(activity)) {

      article.classList.add(
        "atividade-card--residencia"
      );

    }


    const location =
      getLocationDisplay(activity);


    const categories =
      (activity.categories || [])
        .map(category => `
          <span class="atividade-tag">
            ${escapeHtml(formatLabel(category))}
          </span>
        `)
        .join("");


    const participants =
      (activity.participants || [])
        .map(participant => `
          <li>
            <strong>
              ${escapeHtml(participant.role)}:
            </strong>

            ${escapeHtml(participant.name)}
          </li>
        `)
        .join("");


    const mapsButton =
      createMapsButtonMarkup(activity);


    const routeMarkup =
      createRouteMarkup(activity);


    article.innerHTML = `
      <header class="atividade-card__header">

        <div class="atividade-card__horario">

          <span class="atividade-card__hora">
            ${escapeHtml(
              activity.formattedStartTime ||
              activity.startTime ||
              "Horário a confirmar"
            )}
          </span>

          ${
            activity.formattedEndTime
              ? `
                <span class="atividade-card__fim">
                  até ${escapeHtml(activity.formattedEndTime)}
                </span>
              `
              : ""
          }

        </div>


        <div class="atividade-card__cabecalho">

          <span class="atividade-card__celebracao">
            ${escapeHtml(
              formatLabel(activity.celebration)
            )}
          </span>

          <h4 class="atividade-card__titulo">
            ${escapeHtml(activity.title)}
          </h4>

        </div>

      </header>


      ${
        activity.description
          ? `
            <p class="atividade-card__descricao">
              ${escapeHtml(activity.description)}
            </p>
          `
          : ""
      }


      <div class="atividade-card__local">

        <span
          class="atividade-card__local-icone"
          aria-hidden="true"
        >
          ${location.icon}
        </span>

        <div>

          <strong>
            ${escapeHtml(location.title)}
          </strong>

          ${
            location.note
              ? `
                <p>
                  ${escapeHtml(location.note)}
                </p>
              `
              : ""
          }

        </div>

      </div>


      ${routeMarkup}


      ${
        participants
          ? `
            <div class="atividade-card__participantes">

              <strong>
                Participantes
              </strong>

              <ul>
                ${participants}
              </ul>

            </div>
          `
          : ""
      }


      ${
        categories
          ? `
            <div class="atividade-card__tags">
              ${categories}
            </div>
          `
          : ""
      }


      <footer class="atividade-card__footer">

        ${mapsButton}

        <button
          type="button"
          class="atividade-card__share"
          data-share-activity="${escapeHtml(activity.id)}"
        >
          Compartilhar
        </button>

      </footer>
    `;


    bindActivityCardEvents(article, activity);

    return article;

  }


  function createMapsButtonMarkup(activity) {

    if (!activity.googleMapsUrl) {

      return `
        <span class="atividade-card__mapa-indisponivel">
          Localização a confirmar
        </span>
      `;

    }


    if (
      isPrivateResidence(activity) &&
      !isExactMapAuthorized(activity)
    ) {

      return `
        <span class="atividade-card__mapa-restrito">
          Endereço residencial protegido
        </span>
      `;

    }


    return `
      <a
        class="atividade-card__mapa"
        href="${escapeHtml(activity.googleMapsUrl)}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Abrir no mapa
      </a>
    `;

  }


  function createRouteMarkup(activity) {

    if (!isItinerantActivity(activity)) {

      return "";

    }


    const destinations =
      activity.route?.destinations || [];


    const destinationItems =
      destinations
        .map(destination => `
          <li>
            ${escapeHtml(destination)}
          </li>
        `)
        .join("");


    return `
      <div class="atividade-card__rota">

        <strong>
          Percurso tradicional
        </strong>

        ${
          activity.route?.departure
            ? `
              <p>
                <strong>Saída:</strong>
                ${escapeHtml(activity.route.departure)}
              </p>
            `
            : ""
        }

        ${
          destinationItems
            ? `
              <ul>
                ${destinationItems}
              </ul>
            `
            : ""
        }

        <p class="atividade-card__rota-aviso">
          O percurso poderá ser ajustado pela organização e pelas autoridades responsáveis.
        </p>

      </div>
    `;

  }


  function bindActivityCardEvents(
    article,
    activity
  ) {

    const shareButton =
      article.querySelector(
        "[data-share-activity]"
      );

    shareButton?.addEventListener(

      "click",

      () => shareActivity(activity)

    );

  }


  /* ==========================================================
     MENSAGENS DE ESTADO
  ========================================================== */

  function showProgramLoading() {

    const interfaceElements =
      ensureProgramInterface();

    if (!interfaceElements) {

      return;

    }

    interfaceElements.container.innerHTML = `
      <div
        class="programacao-loading"
        role="status"
      >
        <span class="programacao-loading__spinner"></span>

        <p>
          Carregando a Programação Cultural Inteligente...
        </p>
      </div>
    `;

  }


  function showProgramError(message) {

    const interfaceElements =
      ensureProgramInterface();

    if (!interfaceElements) {

      return;

    }

    interfaceElements.container.innerHTML = `
      <div
        class="programacao-erro"
        role="alert"
      >
        <strong>
          Não foi possível carregar a programação.
        </strong>

        <p>
          ${escapeHtml(message)}
        </p>

        <button
          type="button"
          data-reload-program
        >
          Tentar novamente
        </button>
      </div>
    `;


    interfaceElements.container
      .querySelector(
        "[data-reload-program]"
      )
      ?.addEventListener(

        "click",

        () => {

          showProgramLoading();

          window.FestancaData
            .reload()
            .then(handleDataReady)
            .catch(error =>
              showProgramError(error.message)
            );

        }

      );

  }


  function showProgramMessage(message) {

    const container =
      findFirst(selectors.programContainer);

    if (!container) {

      return;

    }

    container.innerHTML = `
      <div class="programacao-aviso">
        ${escapeHtml(message)}
      </div>
    `;

  }


  /* ==========================================================
     INTEGRAÇÃO COM O DATA LOADER
  ========================================================== */

  function handleDataReady(snapshot) {

    state.dataReady = true;

    state.activities =
      snapshot.activities || [];

    state.filteredActivities =
      [...state.activities];


    const interfaceElements =
      ensureProgramInterface();

    if (!interfaceElements) {

      return;

    }


    createProgramFilters(
      interfaceElements
    );


    renderProgram(
      state.filteredActivities
    );


    renderFeaturedNextEvent();

    renderTodaySummary();

  }


  function initializeDataIntegration() {

    if (!window.FestancaData) {

      showProgramError(
        "O módulo data-loader.js não foi encontrado."
      );

      return;

    }


    showProgramLoading();


    if (
      window.FestancaData.isLoaded()
    ) {

      handleDataReady(

        window.FestancaData
          .getSnapshot()

      );

      return;

    }


    window.addEventListener(

      "festanca:data-ready",

      event => {

        handleDataReady(
          event.detail
        );

      },

      {
        once: true
      }

    );


    window.addEventListener(

      "festanca:data-error",

      event => {

        showProgramError(

          event.detail?.message ||
          "Erro desconhecido."

        );

      },

      {
        once: true
      }

    );


    window.FestancaData
      .load()
      .catch(error => {

        showProgramError(
          error.message
        );

      });

  }


  /* ==========================================================
     RESUMOS EM DESTAQUE
  ========================================================== */

  function renderFeaturedNextEvent() {

    const container =
      findFirst(
        selectors.nextEventContainer
      );

    if (!container) {

      return;

    }


    const next =
      window.FestancaData
        .getNextActivity();


    if (!next) {

      container.innerHTML = `
        <p>
          A programação principal será realizada de 15 a 27 de julho de 2026.
        </p>
      `;

      return;

    }


    container.innerHTML = `
      <article class="proximo-evento-card">

        <span class="proximo-evento-card__label">
          Próximo evento
        </span>

        <h3>
          ${escapeHtml(next.title)}
        </h3>

        <p>
          ${escapeHtml(next.formattedFullDate)}
          —
          ${escapeHtml(next.formattedStartTime)}
        </p>

        <button
          type="button"
          data-open-next-event
        >
          Ver na programação
        </button>

      </article>
    `;


    container
      .querySelector(
        "[data-open-next-event]"
      )
      ?.addEventListener(

        "click",

        showNextEvent

      );

  }


  function renderTodaySummary() {

    const container =
      findFirst(
        selectors.todayContainer
      );

    if (!container) {

      return;

    }


    const today =
      window.FestancaData
        .getTodayActivities();


    if (today.length === 0) {

      container.innerHTML = `
        <p>
          Não há atividade programada para hoje.
        </p>
      `;

      return;

    }


    container.innerHTML = `
      <strong>
        Hoje na Festança
      </strong>

      <p>
        ${today.length}
        atividade${today.length === 1 ? "" : "s"}
        programada${today.length === 1 ? "" : "s"}.
      </p>

      <button
        type="button"
        data-open-today-program
      >
        Ver programação de hoje
      </button>
    `;


    container
      .querySelector(
        "[data-open-today-program]"
      )
      ?.addEventListener(

        "click",

        showTodayProgram

      );

  }


  /* ==========================================================
     COMPARTILHAMENTO
  ========================================================== */

  async function shareContent({

    title,

    text,

    url

  }) {

    if (navigator.share) {

      try {

        await navigator.share({

          title,

          text,

          url

        });

        return;

      } catch (error) {

        if (
          error.name === "AbortError"
        ) {

          return;

        }

      }

    }


    try {

      await navigator.clipboard.writeText(

        `${text}\n${url}`

      );

      showTemporaryNotice(
        "Link copiado para a área de transferência."
      );

    } catch {

      window.prompt(

        "Copie o link:",

        url

      );

    }

  }


  function shareProgram() {

    shareContent({

      title: APP_NAME,

      text: DEFAULT_SHARE_TEXT,

      url: getCurrentPageUrl() +
        "#programacao"

    });

  }


  function shareActivity(activity) {

    const text = [

      activity.title,

      activity.formattedFullDate,

      activity.formattedStartTime,

      activity.location?.name

    ]
      .filter(Boolean)
      .join(" — ");


    shareContent({

      title: APP_NAME,

      text,

      url:
        `${getCurrentPageUrl()}#programacao`

    });

  }


  function initializeShareButtons() {

    findAll(
      selectors.shareButtons
    ).forEach(button => {

      button.addEventListener(

        "click",

        shareProgram

      );

    });

  }


  /* ==========================================================
     WHATSAPP
  ========================================================== */

  function buildWhatsAppUrl(
    message = DEFAULT_SHARE_TEXT
  ) {

    const text =
      `${message}\n${getCurrentPageUrl()}`;

    return (
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(text)}`
    );

  }


  function initializeWhatsAppButtons() {

    findAll(
      selectors.whatsappButtons
    ).forEach(button => {

      if (
        button.tagName.toLowerCase() ===
        "a"
      ) {

        button.href =
          buildWhatsAppUrl();

        button.target =
          "_blank";

        button.rel =
          "noopener noreferrer";

        return;

      }


      button.addEventListener(

        "click",

        () => {

          window.open(

            buildWhatsAppUrl(),

            "_blank",

            "noopener,noreferrer"

          );

        }

      );

    });

  }


  /* ==========================================================
     ACESSIBILIDADE
  ========================================================== */

  function initializeAccessibility() {

    let fontScale = Number(

      localStorage.getItem(
        "festanca-font-scale"
      ) || "1"

    );


    const savedContrast =
      localStorage.getItem(
        "festanca-high-contrast"
      ) === "true";


    if (savedContrast) {

      document.documentElement.classList.add(
        "high-contrast"
      );

    }


    applyFontScale(fontScale);


    findAll(
      selectors.contrastButtons
    ).forEach(button => {

      button.addEventListener(

        "click",

        () => {

          const enabled =
            document.documentElement
              .classList
              .toggle("high-contrast");

          localStorage.setItem(

            "festanca-high-contrast",

            String(enabled)

          );

          button.setAttribute(

            "aria-pressed",

            String(enabled)

          );

        }

      );

    });


    findAll(
      selectors.fontIncreaseButtons
    ).forEach(button => {

      button.addEventListener(

        "click",

        () => {

          fontScale =
            Math.min(
              fontScale + 0.1,
              1.4
            );

          applyFontScale(fontScale);

        }

      );

    });


    findAll(
      selectors.fontDecreaseButtons
    ).forEach(button => {

      button.addEventListener(

        "click",

        () => {

          fontScale =
            Math.max(
              fontScale - 0.1,
              0.9
            );

          applyFontScale(fontScale);

        }

      );

    });


    findAll(
      selectors.fontResetButtons
    ).forEach(button => {

      button.addEventListener(

        "click",

        () => {

          fontScale = 1;

          applyFontScale(fontScale);

        }

      );

    });

  }


  function applyFontScale(scale) {

    document.documentElement.style.setProperty(

      "--festanca-font-scale",

      String(scale)

    );

    document.documentElement.style.fontSize =

      `${scale * 100}%`;


    localStorage.setItem(

      "festanca-font-scale",

      String(scale)

    );

  }


  /* ==========================================================
     BOTÃO VOLTAR AO TOPO
  ========================================================== */

  function initializeBackToTop() {

    let button =
      findFirst(selectors.backToTop);


    if (!button) {

      button = createElement(

        "button",

        "back-to-top"

      );

      button.id =
        "back-to-top";

      button.type =
        "button";

      button.setAttribute(

        "aria-label",

        "Voltar ao topo"

      );

      button.innerHTML =
        "↑";

      document.body.appendChild(button);

    }


    const updateVisibility = () => {

      button.classList.toggle(

        "is-visible",

        window.scrollY > 500

      );

    };


    window.addEventListener(

      "scroll",

      updateVisibility,

      {
        passive: true
      }

    );


    button.addEventListener(

      "click",

      () => {

        window.scrollTo({

          top: 0,

          behavior: "smooth"

        });

      }

    );


    updateVisibility();

  }


  /* ==========================================================
     AVISOS TEMPORÁRIOS
  ========================================================== */

  function showTemporaryNotice(message) {

    let notice =
      document.querySelector(
        "#festanca-notice"
      );


    if (!notice) {

      notice = createElement(

        "div",

        "festanca-notice"

      );

      notice.id =
        "festanca-notice";

      notice.setAttribute(

        "role",

        "status"

      );

      notice.setAttribute(

        "aria-live",

        "polite"

      );

      document.body.appendChild(notice);

    }


    notice.textContent =
      message;

    notice.classList.add(
      "is-visible"
    );


    clearTimeout(
      notice.hideTimer
    );


    notice.hideTimer =
      setTimeout(

        () => {

          notice.classList.remove(
            "is-visible"
          );

        },

        3500

      );

  }


  /* ==========================================================
     TRATAMENTO DE LINKS EXTERNOS
  ========================================================== */

  function initializeExternalLinks() {

    document
      .querySelectorAll(
        "a[href^='http']"
      )
      .forEach(link => {

        const url =
          new URL(
            link.href,
            window.location.href
          );


        if (
          url.origin !==
          window.location.origin
        ) {

          link.target =
            "_blank";

          link.rel =
            "noopener noreferrer";

        }

      });

  }


  /* ==========================================================
     PREVENÇÃO DE OVERFLOW INVISÍVEL
  ========================================================== */

  function inspectHorizontalOverflow() {

    const width =
      document.documentElement
        .scrollWidth;

    const viewport =
      window.innerWidth;


    if (width > viewport + 4) {

      console.warn(

        "[Festança 2026] Possível overflow horizontal detectado.",

        {

          documentWidth: width,

          viewportWidth: viewport

        }

      );

    }

  }


  /* ==========================================================
     INICIALIZAÇÃO PRINCIPAL
  ========================================================== */

  function initialize() {

    if (state.initialized) {

      return;

    }


    state.initialized = true;


    initializeMobileMenu();

    initializeSmoothScroll();

    initializeActiveNavigation();

    initializeShareButtons();

    initializeWhatsAppButtons();

    initializeAccessibility();

    initializeBackToTop();

    initializeExternalLinks();

    initializeDataIntegration();


    requestAnimationFrame(

      inspectHorizontalOverflow

    );


    window.addEventListener(

      "resize",

      () => {

        requestAnimationFrame(

          inspectHorizontalOverflow

        );

      },

      {
        passive: true
      }

    );


    console.info(

      "[Festança 2026] Landing Page inicializada."

    );

  }


  /* ==========================================================
     START
  ========================================================== */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(

      "DOMContentLoaded",

      initialize,

      {
        once: true
      }

    );

  } else {

    initialize();

  }

})();
