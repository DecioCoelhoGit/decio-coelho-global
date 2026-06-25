const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const topBtn = document.getElementById("topBtn");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 90) {
      element.classList.add("active");
    }
  });

  if (window.scrollY > 500) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const menuToggle = document.getElementById("menuToggle");
const closeMenu = document.getElementById("closeMenu");
const offcanvasMenu = document.getElementById("offcanvasMenu");
const offcanvasOverlay = document.getElementById("offcanvasOverlay");

function openOffcanvas() {
  offcanvasMenu.classList.add("active");
  offcanvasOverlay.classList.add("active");
  offcanvasMenu.setAttribute("aria-hidden", "false");
}

function closeOffcanvas() {
  offcanvasMenu.classList.remove("active");
  offcanvasOverlay.classList.remove("active");
  offcanvasMenu.setAttribute("aria-hidden", "true");
}

menuToggle?.addEventListener("click", openOffcanvas);
closeMenu?.addEventListener("click", closeOffcanvas);
offcanvasOverlay?.addEventListener("click", closeOffcanvas);

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeOffcanvas();
  }
});

document.querySelectorAll(".offcanvas-nav a").forEach(link => {
  link.addEventListener("click", closeOffcanvas);
});

document.getElementById("contrastToggle")?.addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");
});

document.getElementById("themeToggle")?.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

document.getElementById("fontIncrease")?.addEventListener("click", () => {
  document.body.classList.remove("small-font");
  document.body.classList.toggle("large-font");
});

document.getElementById("fontDecrease")?.addEventListener("click", () => {
  document.body.classList.remove("large-font");
  document.body.classList.toggle("small-font");
});

document.querySelectorAll("[data-lang]").forEach(button => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    localStorage.setItem("dcglobal-lang", lang);
    alert("Idioma selecionado: " + lang.toUpperCase());
  });
});
