const navMenu = document.getElementById("navMenu");
const accessMenu = document.getElementById("accessMenu");

document.getElementById("openNav").onclick = () => navMenu.classList.add("open");
document.getElementById("closeNav").onclick = () => navMenu.classList.remove("open");

document.getElementById("openAccess").onclick = () => accessMenu.classList.add("open");
document.getElementById("openAccessFloat").onclick = () => accessMenu.classList.add("open");
document.getElementById("closeAccess").onclick = () => accessMenu.classList.remove("open");

document.querySelectorAll(".offcanvas a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    accessMenu.classList.remove("open");
  });
});

function setTheme(theme) {
  document.body.classList.remove("light");
  if (theme === "light") document.body.classList.add("light");
}

function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}

function setFontSize(size) {
  document.body.classList.remove("font-large", "font-xlarge");
  if (size === "large") document.body.classList.add("font-large");
  if (size === "xlarge") document.body.classList.add("font-xlarge");
}

function setLang(lang) {
  document.querySelectorAll("[data-pt]").forEach(el => {
    el.textContent = el.dataset[lang] || el.dataset.pt;
  });
}

const revealItems = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  particles = [];
  const total = Math.min(80, Math.floor(window.innerWidth / 8));

  for (let i = 0; i < total; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.5,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35
    });
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 255, 65, 0.7)";
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(animateParticles);
}

window.addEventListener("resize", () => {
  resizeCanvas();
  createParticles();
});

resizeCanvas();
createParticles();
animateParticles();
