document.addEventListener("DOMContentLoaded", () => {
  fetch("./data/dashboards.json?v=3.3")
    .then(response => response.json())
    .then(data => {
      const grid = document.querySelector("#dashboardGrid");
      if (!grid) return;

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
    })
    .catch(error => {
      console.log("Erro ao carregar dashboard:", error);
    });
});

