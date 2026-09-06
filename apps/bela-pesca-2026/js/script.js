"use strict";

const DATA_URL = "./data/edition-2026.json";

async function loadEdition() {
  try {
    const response = await fetch(DATA_URL);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const edition = await response.json();

    document.documentElement.dataset.edition = edition.edition;
    document.documentElement.dataset.event = edition.id;

    console.info("[BELA PESCA DIGITAL]", {
      id: edition.id,
      edition: edition.edition,
      status: edition.status,
      scope: edition.scope
    });

    window.BelaPesca = Object.freeze({
      edition
    });

    document.dispatchEvent(
      new CustomEvent("bela-pesca:edition-ready", {
        detail: edition
      })
    );
  } catch (error) {
    console.error(
      "[BELA PESCA DIGITAL] Falha ao carregar edition-2026.json:",
      error
    );
  }
}

document.addEventListener("DOMContentLoaded", loadEdition);
