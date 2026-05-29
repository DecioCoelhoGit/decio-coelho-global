fetch("data/dashboards.json?v=3.2")
  .then(response => response.json())
  .then(data => {
    const grid = document.getElementById("dashboardGrid");
    if (!grid) return;

    grid.innerHTML = data.indicadores.map(item => `
      <div class="dashboard-card">
        <strong>${item.valor}</strong>
        <span>${item.titulo}</span>
      </div>
    `).join("");
  })
  .catch(() => {
    const grid = document.getElementById("dashboardGrid");
    if (grid) grid.innerHTML = "<p>Dashboard em atualização.</p>";
  });

