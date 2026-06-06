async function carregarAtlas() {

  const resposta =
    await fetch('assets/data/territorios.json');

  const dados =
    await resposta.json();

  const container =
    document.getElementById('atlasTerritorial');

  container.innerHTML = '';

  dados.territorios.forEach(t => {

    container.innerHTML += `

      <div class="territorio-card">

        <h3>${t.nome}</h3>

        <p>${t.tipo}</p>

        <p>Status: ${t.status}</p>

        <p>Atrativos: ${t.atrativos}</p>

      </div>

    `;
  });

}

carregarAtlas();
