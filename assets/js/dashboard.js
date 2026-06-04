async function carregarDashboard() {

 const resposta =
 await fetch('assets/data/dashboard.json');

 const dados =
 await resposta.json();

 document.getElementById("territorios")
 .innerText = dados.territorios;

 document.getElementById("projetos")
 .innerText = dados.projetos;

 document.getElementById("hologramas")
 .innerText = dados.hologramas;

 document.getElementById("ecossistemas")
 .innerText = dados.ecossistemas;

 document.getElementById("agentes")
 .innerText = dados.agentes;

 document.getElementById("status")
 .innerText = dados.status;
}

carregarDashboard();
