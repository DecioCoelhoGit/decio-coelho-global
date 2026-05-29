document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  const topBtn = document.getElementById("topBtn");

  if (menuBtn && navLinks) {
    menuBtn.onclick = () => navLinks.classList.toggle("open");

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.onclick = () => navLinks.classList.remove("open");
    });
  }

  function revealOnScroll() {
    document.querySelectorAll(".reveal").forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 90) {
        el.classList.add("active");
      }
    });

    if (topBtn) {
      topBtn.classList.toggle("show", window.scrollY > 500);
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  if (topBtn) {
    topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  }

  carregarDashboards();
  carregarModulos();
});

async function carregarDashboards() {
  const grid = document.getElementById("dashboardGrid");
  if (!grid) return;

  try {
    const res = await fetch("data/dashboards.json?v=3.1");
    const data = await res.json();

    grid.innerHTML = "";

    data.indicadores.forEach(item => {
      const card = document.createElement("div");
      card.className = "dashboard-card";
      card.innerHTML = `
        <strong>${item.valor}</strong>
        <span>${item.titulo}</span>
      `;
      grid.appendChild(card);
    });
  } catch (e) {
    grid.innerHTML = "<p>Dashboard em atualização.</p>";
  }
}

async function carregarModulos() {
  const grid = document.getElementById("modulesGrid");
  if (!grid) return;

  try {
    const res = await fetch("data/modulos.json?v=3.1");
    const modulos = await res.json();

    grid.innerHTML = "";

    modulos.forEach(modulo => {
      const card = document.createElement("article");
      card.className = "card module-card";
      card.innerHTML = `
        <img src="${modulo.imagem}" alt="${modulo.titulo}">
        <small>${modulo.categoria} • ${modulo.status}</small>
        <h3>${modulo.titulo}</h3>
        <p>${modulo.descricao}</p>
      `;
      grid.appendChild(card);
    });
  } catch (e) {
    grid.innerHTML = "<p>Módulos em atualização.</p>";
  }
}

