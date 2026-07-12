#!/usr/bin/env node

"use strict";

/**
 * FESTANÇA DE VILA BELA 2026
 * Programação Cultural Inteligente
 *
 * Arquivo:
 * apps/festanca-2026/data/apply-location-ids.js
 *
 * Finalidade:
 * Inserir cirurgicamente o campo locationId nas atividades do arquivo
 * programacao-2026.json, preservando o conteúdo existente.
 *
 * Fluxo:
 *
 * programacao-2026.json
 *          ↓
 *      locationId
 *          ↓
 * locais-2026.json
 *          ↓
 * Google Maps / Rotas / Roteiro Cultural Inteligente
 *
 * Regras:
 * - cria backup antes da alteração;
 * - valida os arquivos JSON;
 * - valida IDs das atividades;
 * - valida vínculos com locais-2026.json;
 * - mantém pendentes as atividades 001 e 021;
 * - grava o arquivo somente após validação;
 * - preserva a estrutura existente.
 *
 * Festança de Vila Bela 2026
 * Coordenação-Geral:
 * Nazário Frazão de Almeida
 */

const fs = require("fs");
const path = require("path");

/* ============================================================
   CAMINHOS DOS ARQUIVOS
============================================================ */

const DATA_DIR = __dirname;

const PROGRAM_FILE = path.join(
  DATA_DIR,
  "programacao-2026.json"
);

const PLACES_FILE = path.join(
  DATA_DIR,
  "locais-2026.json"
);

const BACKUP_FILE = path.join(
  DATA_DIR,
  `programacao-2026.backup-${new Date()
    .toISOString()
    .replace(/[:.]/g, "-")}.json`
);


/* ============================================================
   MAPA OFICIAL DE VÍNCULOS

   activityId
        ↓
   locationId
============================================================ */

const LOCATION_BY_ACTIVITY = {

  "festanca-2026-001": null,

  "festanca-2026-002":
    "loc-casa-capitao-mastro",

  "festanca-2026-003":
    "loc-casa-imperatriz",

  "festanca-2026-004":
    "loc-casa-imperador",

  "festanca-2026-005":
    "loc-casa-rainha-sao-benedito",

  "festanca-2026-006":
    "loc-casa-rei-sao-benedito",

  "festanca-2026-007":
    "loc-casa-juiza-sao-benedito",

  "festanca-2026-008":
    "loc-casa-juiz-sao-benedito",

  "festanca-2026-009":
    "loc-casa-juizes-santissima-trindade",

  "festanca-2026-010":
    "loc-igreja-matriz",

  "festanca-2026-011":
    "loc-casa-capitao-mastro",

  "festanca-2026-012":
    "loc-igreja-matriz",

  "festanca-2026-013":
    "loc-palacio-capitaes-generais",

  "festanca-2026-014":
    "loc-igreja-matriz",

  "festanca-2026-015":
    "loc-casa-imperatriz",

  "festanca-2026-016":
    "loc-casa-imperador",

  "festanca-2026-017":
    "loc-ginasio-melanio-assuncao",

  "festanca-2026-018":
    "loc-ginasio-melanio-assuncao",

  "festanca-2026-019":
    "loc-ginasio-melanio-assuncao",

  "festanca-2026-020":
    "loc-ginasio-melanio-assuncao",

  "festanca-2026-021": null,

  "festanca-2026-022":
    "loc-casa-rainha-sao-benedito",

  "festanca-2026-023":
    "loc-casa-rei-sao-benedito",

  "festanca-2026-024":
    "loc-casa-juiza-sao-benedito",

  "festanca-2026-025":
    "loc-casa-juiz-sao-benedito",

  "festanca-2026-026":
    "rota-danca-do-congo",

  "festanca-2026-027":
    "rota-danca-do-congo",

  "festanca-2026-028":
    "rota-danca-do-congo",

  "festanca-2026-029":
    "rota-danca-do-congo",

  "festanca-2026-030":
    "rota-danca-do-congo",

  "festanca-2026-031":
    "rota-danca-do-congo",

  "festanca-2026-032":
    "rota-danca-do-congo",

  "festanca-2026-033":
    "loc-igreja-matriz",

  "festanca-2026-034":
    "loc-casa-juizes-mae-de-deus",

  "festanca-2026-035":
    "loc-centro-paroquial-sao-francisco",

  "festanca-2026-036":
    "loc-centro-paroquial-sao-francisco",

  "festanca-2026-037":
    "loc-igreja-matriz",

  "festanca-2026-038":
    "loc-casa-juizes-santissima-trindade",

  "festanca-2026-039":
    "loc-centro-paroquial-sao-francisco",

  "festanca-2026-040":
    "loc-ginasio-melanio-assuncao",

  "festanca-2026-041":
    "loc-igreja-matriz",

  "festanca-2026-042":
    "loc-casa-rainha-entrega-imagem"

};


/* ============================================================
   LEITURA SEGURA DE JSON
============================================================ */

function readJson(filePath) {

  try {

    const content = fs.readFileSync(
      filePath,
      "utf8"
    );

    return JSON.parse(content);

  } catch (error) {

    throw new Error(
      `Falha ao ler JSON: ${filePath}\n${error.message}`
    );

  }

}


/* ============================================================
   VALIDAÇÃO
============================================================ */

function assert(condition, message) {

  if (!condition) {

    throw new Error(message);

  }

}


/* ============================================================
   EXECUÇÃO PRINCIPAL
============================================================ */

function main() {

  console.log("");
  console.log("==============================================");
  console.log(" FESTANÇA DE VILA BELA 2026");
  console.log(" ATUALIZAÇÃO DOS LOCATION IDs");
  console.log("==============================================");
  console.log("");


  /* ----------------------------------------------------------
     VERIFICAR EXISTÊNCIA DOS ARQUIVOS
  ---------------------------------------------------------- */

  assert(

    fs.existsSync(PROGRAM_FILE),

    `Arquivo não encontrado: ${PROGRAM_FILE}`

  );


  assert(

    fs.existsSync(PLACES_FILE),

    `Arquivo não encontrado: ${PLACES_FILE}`

  );


  /* ----------------------------------------------------------
     CARREGAR DADOS
  ---------------------------------------------------------- */

  const program = readJson(PROGRAM_FILE);

  const places = readJson(PLACES_FILE);


  /* ----------------------------------------------------------
     VALIDAR ESTRUTURA
  ---------------------------------------------------------- */

  assert(

    Array.isArray(program.activities),

    "Campo activities ausente ou inválido."

  );


  assert(

    Array.isArray(places.places),

    "Campo places ausente ou inválido."

  );


  /* ----------------------------------------------------------
     VALIDAR IDs DAS ATIVIDADES
  ---------------------------------------------------------- */

  const activityIds = program.activities.map(
    item => item.id
  );


  assert(

    new Set(activityIds).size === activityIds.length,

    "Existem IDs de atividades duplicados."

  );


  assert(

    activityIds.length === 42,

    `Esperadas 42 atividades; encontradas ${activityIds.length}.`

  );


  /* ----------------------------------------------------------
     VALIDAR COBERTURA DO MAPA
  ---------------------------------------------------------- */

  const missingMappings = activityIds.filter(

    id =>

      !Object.prototype.hasOwnProperty.call(

        LOCATION_BY_ACTIVITY,

        id

      )

  );


  assert(

    missingMappings.length === 0,

    `Atividades sem mapeamento:\n${missingMappings.join("\n")}`

  );


  /* ----------------------------------------------------------
     VALIDAR IDs DOS LOCAIS
  ---------------------------------------------------------- */

  const placeIds = new Set(

    places.places.map(
      item => item.id
    )

  );


  const invalidLocations = Object
    .entries(LOCATION_BY_ACTIVITY)

    .filter(

      ([, locationId]) =>

        locationId !== null &&

        !placeIds.has(locationId)

    )

    .map(

      ([activityId, locationId]) =>

        `${activityId} -> ${locationId}`

    );


  assert(

    invalidLocations.length === 0,

    `locationId inexistente em locais-2026.json:\n${invalidLocations.join("\n")}`

  );


  /* ----------------------------------------------------------
     INSERÇÃO CIRÚRGICA DO LOCATION ID
  ---------------------------------------------------------- */

  const activities = program.activities.map(

    activity => {

      const updatedActivity = {};


      for (

        const [key, value]

        of Object.entries(activity)

      ) {

        updatedActivity[key] = value;


        /*
         * O locationId será inserido
         * imediatamente após o objeto location.
         */

        if (key === "location") {

          updatedActivity.locationId =

            LOCATION_BY_ACTIVITY[activity.id];

        }

      }


      /*
       * Proteção adicional caso uma atividade
       * não possua o campo location.
       */

      if (

        !Object.prototype.hasOwnProperty.call(

          updatedActivity,

          "locationId"

        )

      ) {

        updatedActivity.locationId =

          LOCATION_BY_ACTIVITY[activity.id];

      }


      return updatedActivity;

    }

  );


  /* ----------------------------------------------------------
     ATUALIZAR DOCUMENTO
  ---------------------------------------------------------- */

  const updatedProgram = {

    ...program,

    lastUpdated:

      new Date()
        .toISOString()
        .slice(0, 10),

    activities

  };


  /* ----------------------------------------------------------
     CRIAR BACKUP
  ---------------------------------------------------------- */

  fs.copyFileSync(

    PROGRAM_FILE,

    BACKUP_FILE

  );


  /* ----------------------------------------------------------
     GRAVAÇÃO TEMPORÁRIA
  ---------------------------------------------------------- */

  const TEMP_FILE =

    `${PROGRAM_FILE}.tmp`;


  fs.writeFileSync(

    TEMP_FILE,

    `${JSON.stringify(
      updatedProgram,
      null,
      2
    )}\n`,

    "utf8"

  );


  /* ----------------------------------------------------------
     VALIDAR ARQUIVO TEMPORÁRIO
  ---------------------------------------------------------- */

  JSON.parse(

    fs.readFileSync(

      TEMP_FILE,

      "utf8"

    )

  );


  /* ----------------------------------------------------------
     SUBSTITUIÇÃO FINAL
  ---------------------------------------------------------- */

  fs.renameSync(

    TEMP_FILE,

    PROGRAM_FILE

  );


  /* ----------------------------------------------------------
     RELATÓRIO
  ---------------------------------------------------------- */

  const pending = activities.filter(

    item => item.locationId === null

  );


  console.log("✅ Atualização concluída.");

  console.log(

    `✅ Atividades processadas: ${activities.length}`

  );

  console.log(

    `✅ Atividades vinculadas: ${activities.length - pending.length}`

  );

  console.log(

    `🟡 Localizações pendentes: ${pending.length}`

  );


  pending.forEach(

    item => {

      console.log(

        `   - ${item.id}: ${item.title}`

      );

    }

  );


  console.log("");

  console.log(

    `✅ Backup criado: ${path.basename(BACKUP_FILE)}`

  );

  console.log("");

  console.log("==============================================");
  console.log(" PROCESSAMENTO FINALIZADO");
  console.log("==============================================");
  console.log("");

}


/* ============================================================
   EXECUÇÃO SEGURA
============================================================ */

try {

  main();

} catch (error) {

  console.error("");

  console.error(
    "❌ Atualização cancelada."
  );

  console.error("");

  console.error(
    error.message
  );

  console.error("");

  process.exit(1);

}
