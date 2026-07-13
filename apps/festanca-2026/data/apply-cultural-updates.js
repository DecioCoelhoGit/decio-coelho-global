"use strict";

/**
 * FESTANÇA DE VILA BELA 2026
 * Atualizações culturais cirúrgicas
 *
 * 1. Corrige festanca-2026-021 para a Prefeitura Municipal.
 * 2. Normaliza todas as Rezas Cantadas como residência de festeiro.
 *
 * Execução:
 * node apply-cultural-updates.js
 */

const fs = require("node:fs");
const path = require("node:path");

const DATA_DIR = __dirname;

const PROGRAM_FILE = path.join(
  DATA_DIR,
  "programacao-2026.json"
);

const BACKUP_FILE = path.join(
  DATA_DIR,
  "programacao-2026.before-cultural-updates.json"
);

const ACTIVITY_KEYS_ID = "festanca-2026-021";

const PRIVATE_VISIT_POLICY = {
  accessType: "programacao-oficial",
  publicOpenVisit: false,
  guidance:
    "A visita ocorre somente durante o recebimento ou a entrega oficial do festeiro ou da festeira, conforme data e horário da programação. Para outras orientações, consulte previamente a organização."
};

function readJson(filePath) {
  return JSON.parse(
    fs.readFileSync(filePath, "utf8")
  );
}

function writeJson(filePath, data) {
  fs.writeFileSync(
    filePath,
    `${JSON.stringify(data, null, 2)}\n`,
    "utf8"
  );
}

function appendUniqueNote(currentNotes, newNote) {
  const current = String(currentNotes || "").trim();

  if (!current) {
    return newNote;
  }

  if (current.includes(newNote)) {
    return current;
  }

  return `${current} ${newNote}`;
}

function isRezaCantada(activity) {
  const categories = Array.isArray(activity.categories)
    ? activity.categories
    : [];

  const title = String(activity.title || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  return (
    categories.includes("reza-cantada") ||
    title.includes("reza cantada")
  );
}

function normalizeRezaLocation(activity) {
  if (!isRezaCantada(activity)) {
    return false;
  }

  activity.location ??= {};

  activity.location.type =
    "residencia-de-festeiro";

  activity.location.accessPolicy = {
    ...PRIVATE_VISIT_POLICY
  };

  activity.notes = appendUniqueNote(
    activity.notes,
    "A residência integra a programação exclusivamente no momento oficial da atividade. Não se caracteriza como ponto permanente de visitação pública."
  );

  return true;
}

function updateKeysActivity(activity) {
  if (activity.id !== ACTIVITY_KEYS_ID) {
    return false;
  }

  activity.title =
    "Apresentação da Dança do Congo, cortejo e recebimento simbólico das Chaves da Cidade";

  activity.description =
    "Após o percurso tradicional pelo Centro Histórico e adjacências, o cortejo culmina na Prefeitura Municipal, onde o Prefeito realiza a entrega simbólica das Chaves da Cidade.";

  activity.locationId =
    "local-prefeitura-municipal";

  activity.location = {
    type: "sede-do-poder-executivo",
    name: "Prefeitura Municipal de Vila Bela da Santíssima Trindade",
    street: null,
    district: "Centro",
    reference:
      "Destino institucional do cortejo para o recebimento simbólico das Chaves da Cidade",
    city: "Vila Bela da Santíssima Trindade",
    state: "MT",
    country: "Brasil",
    coordinates: null,
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Prefeitura+Municipal+de+Vila+Bela+da+Santissima+Trindade+MT",
    verificationStatus:
      "local-institucional-documentado-coordenadas-pendentes"
  };

  activity.route = {
    isItinerant: true,
    departure:
      "Percurso tradicional da Dança do Congo — ponto inicial a confirmar",
    destinations: [
      "Centro Histórico de Vila Bela da Santíssima Trindade",
      "Instituições e pontos integrantes do cerimonial oficial",
      "Prefeitura Municipal de Vila Bela da Santíssima Trindade"
    ],
    description:
      "O percurso institucional detalhado será atualizado após validação conjunta com a Associação do Grupo do Congo e os órgãos participantes."
  };

  activity.participants ??= [];

  const hasMayor = activity.participants.some(
    participant =>
      participant.role === "Prefeito Municipal"
  );

  if (!hasMayor) {
    activity.participants.push({
      role: "Prefeito Municipal",
      name: "A confirmar institucionalmente"
    });
  }

  activity.notes = appendUniqueNote(
    activity.notes,
    "O detalhamento do cerimonial poderá envolver Prefeitura Municipal, Polícia Civil, Polícia Militar, Corpo de Bombeiros, Fórum e outras instituições, sujeito à confirmação oficial."
  );

  return true;
}

function validateProgram(program) {
  if (!program || !Array.isArray(program.activities)) {
    throw new Error(
      'Estrutura inválida: o campo "activities" não foi encontrado.'
    );
  }

  const ids = new Set();

  for (const activity of program.activities) {
    if (!activity.id) {
      throw new Error(
        "Existe atividade sem identificador."
      );
    }

    if (ids.has(activity.id)) {
      throw new Error(
        `ID duplicado: ${activity.id}`
      );
    }

    ids.add(activity.id);
  }

  const keysActivity = program.activities.find(
    activity =>
      activity.id === ACTIVITY_KEYS_ID
  );

  if (!keysActivity) {
    throw new Error(
      `Atividade ${ACTIVITY_KEYS_ID} não encontrada.`
    );
  }

  if (
    keysActivity.locationId !==
    "local-prefeitura-municipal"
  ) {
    throw new Error(
      "O locationId da entrega das Chaves não foi atualizado."
    );
  }

  const rezas = program.activities.filter(
    isRezaCantada
  );

  const invalidRezas = rezas.filter(
    activity =>
      activity.location?.type !==
      "residencia-de-festeiro"
  );

  if (invalidRezas.length > 0) {
    throw new Error(
      `Existem ${invalidRezas.length} Rezas Cantadas não normalizadas.`
    );
  }

  return {
    totalActivities: program.activities.length,
    totalRezasCantadas: rezas.length,
    keysActivityUpdated: true
  };
}

function main() {
  if (!fs.existsSync(PROGRAM_FILE)) {
    throw new Error(
      `Arquivo não encontrado: ${PROGRAM_FILE}`
    );
  }

  const program = readJson(PROGRAM_FILE);

  if (!fs.existsSync(BACKUP_FILE)) {
    fs.copyFileSync(
      PROGRAM_FILE,
      BACKUP_FILE
    );

    console.log(
      `✅ Backup criado: ${path.basename(BACKUP_FILE)}`
    );
  } else {
    console.log(
      `ℹ️ Backup já existente: ${path.basename(BACKUP_FILE)}`
    );
  }

  let normalizedRezas = 0;
  let keysActivityUpdated = false;

  for (const activity of program.activities) {
    if (normalizeRezaLocation(activity)) {
      normalizedRezas += 1;
    }

    if (updateKeysActivity(activity)) {
      keysActivityUpdated = true;
    }
  }

  program.lastUpdated = new Date()
    .toISOString()
    .slice(0, 10);

  program.culturalRules = {
    ...(program.culturalRules || {}),
    rezaCantada:
      "Realizada na residência do festeiro ou da festeira correspondente.",
    missa:
      "Realizada em igreja, centro paroquial ou espaço litúrgico oficialmente indicado.",
    symbolicKeys:
      "O cortejo culmina na Prefeitura Municipal, onde o Prefeito realiza a entrega simbólica das Chaves da Cidade.",
    privateResidenceAccess:
      PRIVATE_VISIT_POLICY.guidance
  };

  const validation = validateProgram(program);

  writeJson(PROGRAM_FILE, program);

  console.log("");
  console.log("✅ Atualização concluída.");
  console.log(
    `✅ Rezas Cantadas normalizadas: ${normalizedRezas}`
  );
  console.log(
    `✅ Atividade das Chaves corrigida: ${keysActivityUpdated}`
  );
  console.log(
    `✅ Total de atividades preservado: ${validation.totalActivities}`
  );
  console.log(
    `✅ Total de Rezas Cantadas: ${validation.totalRezasCantadas}`
  );
  console.log("✅ JSON validado.");
}

try {
  main();
} catch (error) {
  console.error("");
  console.error(
    `❌ Falha na atualização: ${error.message}`
  );
  process.exitCode = 1;
}
