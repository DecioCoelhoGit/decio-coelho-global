document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.getElementById("navLinks");
  const headerOffset = 95;

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const id = link.getAttribute("href");
      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({ top, behavior: "smooth" });
      if (navLinks) navLinks.classList.remove("open");
    });
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const panel = document.createElement("div");
  panel.className = "access-panel";
  panel.innerHTML = `
    <button data-theme="dark">🌙</button>
    <button data-theme="light">☀️</button>
    <button data-font="normal">A</button>
    <button data-font="large">A+</button>
    <button data-font="xlarge">A++</button>
    <button data-lang="pt">PT</button>
    <button data-lang="en">EN</button>
    <button data-lang="es">ES</button>
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

    if (btn.dataset.font) {
      document.body.classList.remove("font-normal", "font-large", "font-xlarge");
      document.body.classList.add(`font-${btn.dataset.font}`);
      localStorage.setItem("dc-font", btn.dataset.font);
    }

    if (btn.dataset.lang) {
      const lang = btn.dataset.lang;
      localStorage.setItem("dc-lang", lang);
      applyLang(lang);
    }
  });

  const savedTheme = localStorage.getItem("dc-theme") || "dark";
  const savedFont = localStorage.getItem("dc-font") || "normal";

  document.body.classList.add(`theme-${savedTheme}`);
  document.body.classList.add(`font-${savedFont}`);

  const translations = {
  pt: {
    manifesto: "MANIFESTO FUNDADOR",
    mvgc9: "MVGC-9 GLOBAL",
    atlas: "ATLAS INTERATIVO GLOBAL",
    contato: "CONTATO"
  },
  en: {
    manifesto: "FOUNDING MANIFESTO",
    mvgc9: "MVGC-9 GLOBAL",
    atlas: "GLOBAL INTERACTIVE ATLAS",
    contato: "CONTACT"
  },
  es: {
    manifesto: "MANIFIESTO FUNDADOR",
    mvgc9: "MVGC-9 GLOBAL",
    atlas: "ATLAS INTERACTIVO GLOBAL",
    contato: "CONTACTO"
  }

  pt: {
    manifesto: "MANIFESTO FUNDADOR",
    lead: "Nascido em Vila Bela da Santíssima Trindade, Mato Grosso, Brasil, o Ecossistema Décio Coelho Global transforma memória territorial, ancestralidade, tecnologia e IA em uma arquitetura viva de inteligência."
  },

  en: {
    manifesto: "FOUNDING MANIFESTO",
    lead: "Born in Vila Bela da Santíssima Trindade, Mato Grosso, Brazil, the Décio Coelho Global Ecosystem transforms territorial memory, ancestry, technology and AI into a living architecture of intelligence."
  },

  es: {
    manifesto: "MANIFIESTO FUNDADOR",
    lead: "Nacido en Vila Bela da Santíssima Trindade, Mato Grosso, Brasil, el Ecosistema Décio Coelho Global transforma memoria territorial, ancestralidad, tecnología e IA en una arquitectura viva de inteligencia."
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

const savedLang = localStorage.getItem("dc-lang") || "pt";
applyLang(savedLang);
});


