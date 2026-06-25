const overlay = document.getElementById("overlay");
const mainMenu = document.getElementById("mainMenu");
const accessMenu = document.getElementById("accessMenu");

const openMainMenu = document.getElementById("openMainMenu");
const openAccessMenu = document.getElementById("openAccessMenu");
const floatingAccess = document.getElementById("floatingAccess");

function openPanel(panel) {
  closePanels();
  panel.classList.add("active");
  panel.setAttribute("aria-hidden", "false");
  overlay.classList.add("active");
}

function closePanels() {
  [mainMenu, accessMenu].forEach(panel => {
    panel.classList.remove("active");
    panel.setAttribute("aria-hidden", "true");
  });
  overlay.classList.remove("active");
}

openMainMenu.addEventListener("click", () => openPanel(mainMenu));
openAccessMenu.addEventListener("click", () => openPanel(accessMenu));
floatingAccess.addEventListener("click", () => openPanel(accessMenu));
overlay.addEventListener("click", closePanels);

document.querySelectorAll("[data-close]").forEach(btn => {
  btn.addEventListener("click", closePanels);
});

document.querySelectorAll(".menu-list a").forEach(link => {
  link.addEventListener("click", closePanels);
});

/* TEMA */

document.querySelectorAll("[data-theme]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.body.classList.remove("theme-dark", "theme-light");
    document.body.classList.add(`theme-${btn.dataset.theme}`);
    localStorage.setItem("dc-theme", btn.dataset.theme);
  });
});

document.getElementById("highContrastBtn").addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");
  localStorage.setItem(
    "dc-contrast",
    document.body.classList.contains("high-contrast") ? "on" : "off"
  );
});

/* FONTE */

document.querySelectorAll("[data-font]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.body.classList.remove("font-normal", "font-large", "font-xlarge");
    document.body.classList.add(`font-${btn.dataset.font}`);
    localStorage.setItem("dc-font", btn.dataset.font);
  });
});

/* IDIOMAS SIMPLES */

const translations = {
  pt: {
    title: "ECOSSISTEMA DÉCIO COELHO GLOBAL",
    subtitle: "Da ancestralidade territorial à inteligência global.",
    enter: "Entrar no Ecossistema"
  },
  en: {
    title: "DÉCIO COELHO GLOBAL ECOSYSTEM",
    subtitle: "From territorial ancestry to global intelligence.",
    enter: "Enter the Ecosystem"
  },
  es: {
    title: "ECOSISTEMA DÉCIO COELHO GLOBAL",
    subtitle: "De la ancestralidad territorial a la inteligencia global.",
    enter: "Entrar al Ecosistema"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("dc-lang", lang);
}

document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

/* RESTAURAR PREFERÊNCIAS */

window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("dc-theme") || "dark";
  const font = localStorage.getItem("dc-font") || "normal";
  const contrast = localStorage.getItem("dc-contrast");
  const lang = localStorage.getItem("dc-lang") || "pt";

  document.body.classList.remove("theme-dark", "theme-light");
  document.body.classList.add(`theme-${theme}`);

  document.body.classList.remove("font-normal", "font-large", "font-xlarge");
  document.body.classList.add(`font-${font}`);

  if (contrast === "on") {
    document.body.classList.add("high-contrast");
  }

  setLang(lang);
});

