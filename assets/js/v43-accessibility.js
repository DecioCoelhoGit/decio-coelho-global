document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.getElementById("navLinks");
  const headerOffset = 95;

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const id = link.getAttribute("href");
      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();

      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top,
        behavior: "smooth"
      });

      if (navLinks) navLinks.classList.remove("open");
    });
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  if (!document.querySelector(".access-panel")) {
    const panel = document.createElement("div");
    panel.className = "access-panel";

    panel.innerHTML = `
      <button data-theme="dark" title="Tema escuro">🌙</button>
      <button data-theme="light" title="Tema claro">☀️</button>
      <button data-contrast="high" title="Alto contraste">HC</button>
      <button data-font="normal" title="Fonte normal">A</button>
      <button data-font="large" title="Fonte grande">A+</button>
      <button data-font="xlarge" title="Fonte extra grande">A++</button>
      <button data-lang="pt" title="Português">PT</button>
      <button data-lang="en" title="English">EN</button>
      <button data-lang="es" title="Español">ES</button>
    `;

    document.body.appendChild(panel);

    panel.addEventListener("click", e => {
      const btn = e.target.closest("button");
      if (!btn) return;

      if (btn.dataset.theme) {
        document.body.classList.remove("theme-dark", "theme-light");
        document.body.classList.add(`theme-${btn.dataset.theme}`);
        localStorage.setItem("dc-theme", btn.dataset.theme);
      }

      if (btn.dataset.contrast) {
        document.body.classList.toggle("high-contrast");
        const contrast = document.body.classList.contains("high-contrast")
          ? "on"
          : "off";
        localStorage.setItem("dc-contrast", contrast);
      }

      if (btn.dataset.font) {
        document.body.classList.remove(
          "font-normal",
          "font-large",
          "font-xlarge"
        );

        document.body.classList.add(`font-${btn.dataset.font}`);
        localStorage.setItem("dc-font", btn.dataset.font);
      }

      if (btn.dataset.lang) {
        const lang = btn.dataset.lang;
        localStorage.setItem("dc-lang", lang);
        applyLang(lang);
      }
    });
  }

  const translations = {
    pt: {
      manifesto: "MANIFESTO FUNDADOR",
      mvgc9: "MVGC-9 GLOBAL",
      atlas: "ATLAS INTERATIVO GLOBAL",
      contato: "CONTATO",
      painelVivo: "Painel Vivo do Ecossistema",
      painelVivoTxt:
        "Módulos, agentes, acervos, hologramas, dashboards e ecossistemas renderizados dinamicamente por dados."
    },

    en: {
      manifesto: "FOUNDING MANIFESTO",
      mvgc9: "MVGC-9 GLOBAL",
      atlas: "GLOBAL INTERACTIVE ATLAS",
      contato: "CONTACT",
      painelVivo: "Living Ecosystem Panel",
      painelVivoTxt:
        "Modules, agents, collections, holograms, dashboards and ecosystems dynamically rendered through data."
    },

    es: {
      manifesto: "MANIFIESTO FUNDADOR",
      mvgc9: "MVGC-9 GLOBAL",
      atlas: "ATLAS INTERACTIVO GLOBAL",
      contato: "CONTACTO",
      painelVivo: "Panel Vivo del Ecosistema",
      painelVivoTxt:
        "Módulos, agentes, acervos, hologramas, dashboards y ecosistemas renderizados dinámicamente por datos."
    }
  };

  function applyLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;

      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  const savedTheme = localStorage.getItem("dc-theme") || "dark";
  const savedFont = localStorage.getItem("dc-font") || "normal";
  const savedContrast = localStorage.getItem("dc-contrast") || "off";
  const savedLang = localStorage.getItem("dc-lang") || "pt";

  document.body.classList.add(`theme-${savedTheme}`);
  document.body.classList.add(`font-${savedFont}`);

  if (savedContrast === "on") {
    document.body.classList.add("high-contrast");
  }

  applyLang(savedLang);
});
