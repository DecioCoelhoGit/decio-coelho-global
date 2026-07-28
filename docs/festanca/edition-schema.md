FESTANÇA DE VILA BELA


Contrato Técnico das Edições Anuais


Arquivo: docs/festanca/edition-schema.md
Fase: F1 — Portal Oficial
Etapa: F1-P2 — Contrato Técnico das Edições
Versão: 1.0.0
Status: Documento Estrutural Inicial
Projeto-piloto: Festança 2026
Local: Vila Bela da Santíssima Trindade — Mato Grosso — Brasil  



1. Finalidade


Este documento define o contrato técnico oficial para criação, validação, publicação, manutenção e arquivamento das edições anuais da Festança de Vila Bela.


Ele estabelece:




arquivos obrigatórios;


campos mínimos;


tipos de dados;


relacionamentos;


identificadores;


regras de validação;


status editoriais;


origem e confiabilidade das informações;


critérios de integridade;


estrutura mínima para ativação de uma nova edição;


regras de compatibilidade entre 2026, 2027, 2028 e os exercícios futuros.




Este contrato deverá ser respeitado por qualquer nova edição do Portal Oficial.



2. Princípio do Contrato


Cada edição anual deve ser tratada como uma unidade autônoma, versionada e preservável.


Exemplo:


data/editions/2026/
data/editions/2027/
data/editions/2028/



Cada pasta anual deverá conter dados suficientes para permitir:




publicação independente;


consulta histórica;


auditoria;


comparação entre exercícios;


arquivamento;


reutilização futura;


carregamento automático pelo Portal.





3. Estrutura Mínima de uma Edição


data/
└── editions/
    └── 2026/
        ├── edition.json
        ├── programacao.json
        ├── festeiros.json
        ├── coordenacao.json
        ├── locais.json
        ├── news.json
        ├── gallery.json
        ├── partners.json
        ├── downloads.json
        └── publication-status.json



Arquivos opcionais futuros:


volunteers.json
press.json
reports.json
routes.json
accessibility.json
sponsors.json
documents.json
statistics.json




4. Regras Gerais de Dados


Todos os arquivos JSON deverão:




usar UTF-8;


possuir JSON válido;


usar nomes de campos em inglês técnico padronizado;


manter conteúdo textual em português quando destinado ao público;


usar identificadores únicos;


usar datas no formato ISO YYYY-MM-DD;


usar horários no formato HH:MM;


evitar campos duplicados;


evitar valores ambíguos;


evitar dados presumidos;


possuir metadados de origem;


possuir status de validação;


manter compatibilidade com versões anteriores sempre que possível.





5. Convenções de Tipos


Os tipos aceitos neste contrato são:


string
integer
number
boolean
date
time
datetime
array
object
enum
null



5.1 Datas


Formato obrigatório:


YYYY-MM-DD



Exemplo:


"date": "2026-07-15"



5.2 Horários


Formato obrigatório:


HH:MM



Exemplo:


"time": "20:00"



5.3 Data e hora


Formato recomendado:


YYYY-MM-DDTHH:MM:SS-04:00



Exemplo:


"updatedAt": "2026-07-15T18:30:00-04:00"



5.4 Booleanos


Somente:


true
false



Não usar:


"sim"
"não"
"yes"
"no"




6. Identificadores


Todo registro relacional deverá possuir campo id.


6.1 Regras


O identificador deve:




ser único dentro de seu domínio;


usar letras minúsculas;


usar hífen;


não usar espaços;


não usar acentos;


não depender apenas do nome visível;


permanecer estável após publicação.




Exemplos:


festanca-vila-bela-2026
glorioso-sao-benedito
grupo-do-congo
praca-da-bandeira
reza-cantada-imperatriz-2026-05-23




7. Metadados Comuns


Todo arquivo anual deverá conter, sempre que aplicável:


{
  "schemaVersion": "1.0.0",
  "editionYear": 2026,
  "eventId": "festanca-vila-bela-2026",
  "source": {
    "id": "programacao-oficial-festanca-2026",
    "providedBy": "Coordenação-Geral",
    "receivedAt": "2026-07-11",
    "status": "documentado"
  },
  "validation": {
    "status": "aguardando-conferencia-institucional-final",
    "validatedBy": null,
    "validatedAt": null
  },
  "updatedAt": "2026-07-11"
}




8. Arquivo edition.json


Este é o arquivo-mestre da edição.


8.1 Estrutura


{
  "schemaVersion": "1.0.0",
  "editionId": "festanca-vila-bela-2026",
  "editionYear": 2026,
  "eventName": "Festança de Vila Bela 2026",
  "shortName": "Festança 2026",
  "tagline": "Cultura, arte e legado que fazem parte de quem somos, todos os dias.",
  "city": "Vila Bela da Santíssima Trindade",
  "state": "Mato Grosso",
  "country": "Brasil",
  "status": "publicada",
  "preparatoryPeriod": {
    "startDate": "2026-04-05",
    "endDate": "2026-05-31"
  },
  "mainPeriod": {
    "startDate": "2026-07-15",
    "endDate": "2026-07-27"
  },
  "active": true,
  "defaultLanguage": "pt-BR",
  "supportedLanguages": ["pt-BR"],
  "theme": {
    "name": "Festança 2026",
    "logo": "assets/editions/2026/brand/festanca-2026-logo-oficial.png",
    "socialImage": "assets/editions/2026/social-media/festanca-2026-social.jpg"
  },
  "source": {
    "providedBy": "Coordenação-Geral",
    "status": "documentado"
  },
  "validation": {
    "status": "validado"
  }
}



8.2 Campos obrigatórios

CampoTipoObrigatórioRegraschemaVersionstringsimsemvereditionIdstringsimúnicoeditionYearintegersimquatro dígitoseventNamestringsimnome oficialshortNamestringsimnome curtocitystringsimmunicípiostatestringsimestadocountrystringsimpaísstatusenumsimstatus editorialmainPeriodobjectsimperíodo principalactivebooleansimedição ativa ou nãodefaultLanguagestringsimpadrão BCP 47sourceobjectsimorigemvalidationobjectsimvalidação


9. Arquivo programacao.json


Armazena as atividades oficiais da edição.


9.1 Estrutura


{
  "schemaVersion": "1.0.0",
  "editionYear": 2026,
  "activities": [
    {
      "id": "reza-cantada-imperatriz-2026-05-23",
      "title": "Reza Cantada — Casa da Imperatriz",
      "description": null,
      "date": "2026-05-23",
      "startTime": "20:00",
      "endTime": null,
      "category": "reza-cantada",
      "brotherhoodId": "senhor-divino",
      "locationId": "residencia-imperatriz-2026",
      "participants": [
        {
          "role": "Imperatriz",
          "personId": "evelyn-juliane-frazao-de-almeida"
        }
      ],
      "route": null,
      "status": "confirmado",
      "public": true,
      "source": {
        "providedBy": "Coordenação-Geral",
        "status": "documentado"
      },
      "validation": {
        "status": "validado"
      }
    }
  ]
}



9.2 Campos obrigatórios por atividade

CampoTipoObrigatórioRegraidstringsimúnicotitlestringsimtítulo públicodatedatesimISOstartTimetimesimHH:MMcategoryenumsimcategoria oficiallocationIdstring/nullsimreferência a locaisstatusenumsimsituaçãopublicbooleansimvisibilidadesourceobjectsimorigemvalidationobjectsimvalidação

9.3 Categorias iniciais


religiosa
reza-cantada
tradicional
reuniao
liturgica
cultural
cortejo
apresentacao
institucional
turistica



9.4 Status da atividade


rascunho
a-confirmar
confirmado
alterado
adiado
cancelado
realizado
arquivado




10. Arquivo festeiros.json


Armazena os festeiros e cargos da edição.


10.1 Estrutura


{
  "schemaVersion": "1.0.0",
  "editionYear": 2026,
  "people": [
    {
      "id": "evelyn-juliane-frazao-de-almeida",
      "name": "Evelyn Juliane Frazão de Almeida",
      "title": "Imperatriz",
      "brotherhoodId": "senhor-divino",
      "photo": null,
      "bio": null,
      "publicContact": null,
      "status": "confirmado",
      "source": {
        "providedBy": "Coordenação-Geral",
        "status": "documentado"
      },
      "validation": {
        "status": "validado"
      }
    }
  ]
}



10.2 Regra de privacidade


Contatos pessoais, endereço residencial e outros dados sensíveis não deverão ser publicados sem autorização específica.



11. Arquivo coordenacao.json


Armazena coordenação, comissões e funções institucionais.


11.1 Estrutura


{
  "schemaVersion": "1.0.0",
  "editionYear": 2026,
  "members": [
    {
      "id": "nazario-frazao-de-almeida",
      "name": "Nazário Frazão de Almeida",
      "role": "Coordenador-Geral",
      "organization": null,
      "photo": null,
      "status": "confirmado",
      "source": {
        "providedBy": "Coordenação-Geral",
        "status": "documentado"
      },
      "validation": {
        "status": "validado"
      }
    }
  ]
}




12. Arquivo locais.json


Armazena locais permanentes e temporários usados na edição.


12.1 Estrutura


{
  "schemaVersion": "1.0.0",
  "editionYear": 2026,
  "locationPolicy": {
    "googleMapsEnabled": true,
    "coordinatesMustBeVerified": true,
    "privateResidenceExactPinRequiresAuthorization": true,
    "publicPlacesMayUseVerifiedCoordinates": true,
    "fallbackMode": "google-maps-search-query"
  },
  "locations": [
    {
      "id": "praca-da-bandeira",
      "name": "Praça da Bandeira",
      "type": "public-place",
      "address": null,
      "city": "Vila Bela da Santíssima Trindade",
      "state": "MT",
      "latitude": null,
      "longitude": null,
      "coordinatesVerified": false,
      "privateResidence": false,
      "exactPinAuthorized": true,
      "googleMapsQuery": "Praça da Bandeira, Vila Bela da Santíssima Trindade MT",
      "status": "em-verificacao"
    }
  ]
}



12.2 Tipos de local


public-place
church
parish-center
religious-space
private-residence
event-center
route-point
tourist-attraction
meeting-point
other



12.3 Regra de consistência


Todo locationId usado em programacao.json deverá existir em locais.json.



13. Arquivo news.json


Armazena notícias e comunicados.


13.1 Estrutura


{
  "schemaVersion": "1.0.0",
  "editionYear": 2026,
  "items": [
    {
      "id": "programacao-oficial-publicada",
      "title": "Programação oficial da Festança 2026",
      "summary": "A programação oficial foi disponibilizada para consulta.",
      "body": null,
      "publishedAt": "2026-07-11T18:00:00-04:00",
      "updatedAt": null,
      "author": "Coordenação-Geral",
      "category": "comunicado",
      "image": null,
      "featured": true,
      "status": "publicado"
    }
  ]
}




14. Arquivo gallery.json


Armazena o catálogo de imagens e vídeos da edição.


14.1 Estrutura


{
  "schemaVersion": "1.0.0",
  "editionYear": 2026,
  "items": [
    {
      "id": "grupo-do-congo-2026-001",
      "type": "image",
      "title": "Grupo do Congo",
      "description": null,
      "file": "assets/editions/2026/gallery/grupo-do-congo-2026-001.jpg",
      "thumbnail": null,
      "date": null,
      "author": null,
      "credit": null,
      "altText": "Integrantes do Grupo do Congo em apresentação cultural.",
      "rightsStatus": "autorizado",
      "featured": false,
      "status": "publicado"
    }
  ]
}



14.2 Tipos de mídia


image
video
audio
document
external-video



14.3 Campos essenciais de acessibilidade


Toda imagem publicada deverá possuir:


altText



Quando aplicável:


description
credit
author
rightsStatus




15. Arquivo partners.json


Armazena patrocinadores, apoiadores, parceiros e colaboradores.


15.1 Estrutura


{
  "schemaVersion": "1.0.0",
  "editionYear": 2026,
  "organizations": [
    {
      "id": "parceiro-exemplo",
      "name": "Parceiro Exemplo",
      "category": "apoio-institucional",
      "logo": "assets/editions/2026/partners/parceiro-exemplo.png",
      "website": null,
      "order": 1,
      "active": true,
      "authorizationStatus": "autorizado",
      "status": "publicado"
    }
  ]
}



15.2 Categorias


realizacao
co-realizacao
patrocinio
apoio-institucional
parceria-tecnologica
parceria-cultural
colaboracao
media-partner




16. Arquivo downloads.json


Armazena arquivos públicos para download.


16.1 Estrutura


{
  "schemaVersion": "1.0.0",
  "editionYear": 2026,
  "items": [
    {
      "id": "programacao-oficial-2026",
      "title": "Programação Oficial — Festança 2026",
      "description": null,
      "file": "assets/editions/2026/downloads/programacao-oficial-2026.pdf",
      "fileType": "pdf",
      "fileSize": null,
      "publishedAt": "2026-07-11",
      "version": "1.0.0",
      "status": "publicado"
    }
  ]
}




17. Arquivo publication-status.json


Controla a prontidão editorial e técnica.


17.1 Estrutura


{
  "schemaVersion": "1.0.0",
  "editionYear": 2026,
  "overallStatus": "pronto-para-publicar",
  "checks": {
    "edition": "aprovado",
    "programacao": "aprovado",
    "festeiros": "aprovado",
    "coordenacao": "aprovado",
    "locais": "aprovado",
    "news": "aprovado",
    "gallery": "aprovado",
    "partners": "aprovado",
    "downloads": "aprovado",
    "accessibility": "aprovado",
    "mobile": "aprovado",
    "links": "aprovado",
    "backup": "concluido"
  },
  "approvedBy": null,
  "approvedAt": null,
  "notes": []
}



17.2 Valores aceitos


nao-iniciado
em-andamento
precisa-ajustar
aguardando-validacao
aprovado
reprovado
nao-aplicavel
concluido




18. Relacionamentos Oficiais


18.1 Programação → Locais


programacao.activities[].locationId
→
locais.locations[].id



18.2 Programação → Festeiros


programacao.activities[].participants[].personId
→
festeiros.people[].id



18.3 Programação → Irmandades


programacao.activities[].brotherhoodId
→
data/permanent/groups.json



18.4 Galeria → Ativos


gallery.items[].file
→
assets/editions/[ano]/gallery/



18.5 Parceiros → Logos


partners.organizations[].logo
→
assets/editions/[ano]/partners/



18.6 Downloads → Arquivos


downloads.items[].file
→
assets/editions/[ano]/downloads/




19. Integridade Referencial


A validação deverá detectar:




locationId inexistente;


personId inexistente;


brotherhoodId inexistente;


arquivo de imagem ausente;


logo ausente;


download inexistente;


identificador duplicado;


data fora do período da edição;


horário inválido;


status não reconhecido;


campo obrigatório ausente;


JSON inválido.




Nenhuma referência quebrada deverá ser considerada pronta para publicação.



20. Status Editoriais Gerais


rascunho
recebido
em-conferencia
aguardando-validacao
validado
documentado
publicado
corrigido
encerrado
arquivado



20.1 Fluxo recomendado


rascunho
→ recebido
→ em-conferencia
→ validado
→ documentado
→ publicado
→ encerrado
→ arquivado




21. Origem da Informação


Todo dado oficial deverá registrar sua origem.


21.1 Estrutura


{
  "source": {
    "id": "fonte-unica",
    "type": "official-document",
    "providedBy": "Coordenação-Geral",
    "receivedAt": "2026-07-11",
    "reference": null,
    "status": "documentado"
  }
}



21.2 Tipos de fonte


official-document
institutional-message
official-interview
public-record
historical-document
personal-memory
photographic-record
audio-record
video-record
verified-web-source
other




22. Confiabilidade


Quando aplicável, o dado poderá receber classificação:


confirmado
documentado
memoria-pessoal
em-verificacao
divergente
nao-confirmado



22.1 Regra


Dados divergente ou nao-confirmado não devem ser publicados como fato oficial sem contextualização.



23. Campos Nulos


Um campo poderá receber null quando:




for opcional;


ainda estiver em apuração;


não se aplicar;


depender de autorização.




Não usar texto vazio para simular ausência de dado.


Preferir:


"photo": null



Evitar:


"photo": ""




24. Campos de Texto


24.1 Limites recomendados

CampoLimite recomendadotitle120 caracteresshortName60 caracteressummary280 caracteresdescription1.000 caracteresaltText200 caracteresnotes2.000 caracteres

Esses limites poderão ser ajustados em versões futuras.



25. Regras para Nova Edição


Para criar uma nova edição, executar:


1. Duplicar apenas a estrutura vazia
2. Atualizar editionYear
3. Criar novo editionId
4. Inserir períodos oficiais
5. Cadastrar coordenação
6. Cadastrar festeiros
7. Cadastrar locais
8. Inserir programação
9. Registrar fontes
10. Validar relacionamentos
11. Cadastrar identidade visual
12. Validar parceiros
13. Validar downloads
14. Executar auditoria
15. Atualizar active-edition.json
16. Publicar



Nenhum dado específico de 2026 deverá ser copiado para 2027 sem revisão.



26. Estrutura Mínima para Ativação


A edição só poderá ser ativada quando existirem:


edition.json
programacao.json
festeiros.json
coordenacao.json
locais.json
publication-status.json



Os seguintes poderão iniciar vazios, desde que válidos:


news.json
gallery.json
partners.json
downloads.json



Exemplo válido:


{
  "schemaVersion": "1.0.0",
  "editionYear": 2027,
  "items": []
}




27. Compatibilidade


Mudanças futuras no schema deverão:




preservar campos existentes sempre que possível;


documentar campos removidos;


fornecer regra de migração;


atualizar schemaVersion;


evitar quebra da edição ativa;


manter leitura das edições arquivadas.





28. Versionamento do Schema


O campo:


"schemaVersion": "1.0.0"



seguirá:




MAJOR: quebra de compatibilidade;


MINOR: novos campos compatíveis;


PATCH: correções sem mudança estrutural.





29. Validação Automatizada


Futuramente, deverá existir script de validação, por exemplo:


scripts/validate-edition.js



O script deverá verificar:




sintaxe JSON;


campos obrigatórios;


tipos;


enums;


IDs duplicados;


relações;


arquivos ausentes;


datas;


horários;


status;


caminhos;


edição ativa;


prontidão de publicação.





30. Regras de Publicação Segura


Antes da publicação:




confirmar grafia dos nomes;


confirmar cargos;


confirmar datas;


confirmar horários;


confirmar locais;


verificar coordenadas;


proteger residências privadas;


verificar autorização de imagens;


verificar logos;


testar downloads;


validar links;


testar mobile;


testar acessibilidade;


criar backup;


registrar aprovação.





31. Exemplo Mínimo de Nova Edição


{
  "schemaVersion": "1.0.0",
  "editionId": "festanca-vila-bela-2027",
  "editionYear": 2027,
  "eventName": "Festança de Vila Bela 2027",
  "shortName": "Festança 2027",
  "city": "Vila Bela da Santíssima Trindade",
  "state": "Mato Grosso",
  "country": "Brasil",
  "status": "planejamento",
  "mainPeriod": {
    "startDate": null,
    "endDate": null
  },
  "active": false,
  "defaultLanguage": "pt-BR",
  "supportedLanguages": ["pt-BR"],
  "source": {
    "providedBy": null,
    "status": "rascunho"
  },
  "validation": {
    "status": "rascunho"
  }
}




32. Regra Constitucional do Schema


Nenhuma nova edição deverá depender de alterações manuais espalhadas pelo HTML para funcionar.


A edição anual deverá ser carregada prioritariamente por dados estruturados.




O Portal permanece. A edição muda. A memória se acumula.





33. Próximo Documento Recomendado


docs/festanca/publication-workflow.md



Esse documento deverá estabelecer:




fluxo de recebimento;


conferência;


aprovação;


publicação;


correção;


retirada;


encerramento;


arquivamento;


responsabilidades;


checklist operacional por edição.





FESTANÇA DE VILA BELA
Portal Oficial Permanente
Contrato Técnico das Edições Anuais
