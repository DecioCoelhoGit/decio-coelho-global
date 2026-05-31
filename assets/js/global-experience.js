document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".global-experience")) return;y
  const panel = document.createElement("div");
  panel.className = "global-experience";
  panel.innerHTML = `
    <button id="themeToggle">🌙</button>
    <button id="contrastToggle">HC</button>
    <button id="fontA">A</button>
    <button id="fontAPlus">A+</button>
    <button id="fontAPlusPlus">A++</button>
    <button data-lang="pt">PT</button>
    <button data-lang="en">EN</button>
    <button data-lang="es">ES</button>
    <a href="https://wa.me/5565984091524" target="_blank">WhatsApp</a>
    <a href="mailto:antoniodecioferreiracoelho@gmail.com">E-mail</a>
  `;
  document.body.appendChild(panel);

  const savedTheme = localStorage.getItem("theme") || "dark";
  document.body.classList.add(savedTheme);

  document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
    const theme = document.body.classList.contains("light") ? "light" : "dark";
    localStorage.setItem("theme", theme);
  };

  document.getElementById("contrastToggle").onclick = () => {
    document.body.classList.toggle("high-contrast");
    localStorage.setItem(
      "contrast",
      document.body.classList.contains("high-contrast") ? "on" : "off"
    );
  };

  if (localStorage.getItem("contrast") === "on") {
    document.body.classList.add("high-contrast");
  }

  document.getElementById("fontA").onclick = () => {
    document.documentElement.style.fontSize = "100%";
    localStorage.setItem("fontSize", "100%");
  };

  document.getElementById("fontAPlus").onclick = () => {
    document.documentElement.style.fontSize = "110%";
    localStorage.setItem("fontSize", "110%");
  };

  document.getElementById("fontAPlusPlus").onclick = () => {
    document.documentElement.style.fontSize = "120%";
    localStorage.setItem("fontSize", "120%");
  };

  const savedFont = localStorage.getItem("fontSize");
  if (savedFont) document.documentElement.style.fontSize = savedFont;

  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.onclick = () => {
      localStorage.setItem("lang", btn.dataset.lang);
      alert("Idioma selecionado: " + btn.dataset.lang.toUpperCase());
    };
  });
});

