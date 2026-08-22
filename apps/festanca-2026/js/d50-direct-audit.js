(() => {
  "use strict";

  const TOLERANCE = 3;
  const MAX_RESULTS = 40;
  const auditClass = "d50-overflow-element";

  const style = document.createElement("style");

  style.textContent = `
    .${auditClass}{
      outline:3px solid #ff3b3b !important;
      outline-offset:-3px !important;
    }

    #d50-audit-panel{
      position:fixed;
      z-index:2147483647;
      left:10px;
      right:10px;
      bottom:10px;
      max-width:760px;
      max-height:72vh;
      margin:auto;
      overflow:auto;
      padding:14px;
      border:2px solid #35f39a;
      border-radius:14px;
      background:rgba(3,18,15,.98);
      color:#f4fff9;
      font:14px/1.45 Arial,sans-serif;
      box-shadow:0 10px 40px rgba(0,0,0,.65);
    }

    #d50-audit-panel *{
      box-sizing:border-box;
    }

    #d50-audit-panel h2{
      margin:0 0 8px;
      color:#35f39a;
      font-size:19px;
    }

    #d50-audit-panel pre{
      margin:10px 0;
      padding:10px;
      overflow:auto;
      white-space:pre-wrap;
      overflow-wrap:anywhere;
      border-radius:8px;
      background:#071f19;
      color:#fff;
      font:12px/1.45 monospace;
    }

    #d50-audit-panel button{
      width:auto;
      min-height:40px;
      margin:4px 5px 0 0;
      padding:8px 12px;
      border:1px solid #35f39a;
      border-radius:8px;
      background:#123c30;
      color:#fff;
      font-weight:700;
    }

    #d50-audit-panel .d50-danger{
      color:#ff9d9d;
      font-weight:700;
    }

    #d50-audit-panel .d50-success{
      color:#7dffb5;
      font-weight:700;
    }

    #d50-audit-mini{
      position:fixed;
      z-index:2147483647;
      right:10px;
      bottom:10px;
      display:none;
      min-width:54px;
      min-height:54px;
      border:2px solid #35f39a;
      border-radius:50%;
      background:#09281f;
      color:#35f39a;
      font-size:18px;
      font-weight:900;
    }
  `;

  document.head.appendChild(style);

  const panel = document.createElement("section");
  panel.id = "d50-audit-panel";

  const mini = document.createElement("button");
  mini.id = "d50-audit-mini";
  mini.type = "button";
  mini.textContent = "D50";
  mini.setAttribute("aria-label", "Abrir relatório D50");

  document.body.append(panel, mini);

  function selectorFor(element) {
    if (!element || !element.tagName) return "elemento-desconhecido";

    let selector = element.tagName.toLowerCase();

    if (element.id) {
      selector += `#${element.id}`;
    }

    if (element.classList && element.classList.length) {
      selector += "." +
        Array.from(element.classList)
          .filter(name => name !== auditClass)
          .slice(0, 4)
          .join(".");
    }

    return selector;
  }

  function numeric(value) {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? Math.round(parsed) : 0;
  }

  function audit() {
    document
      .querySelectorAll(`.${auditClass}`)
      .forEach(element => element.classList.remove(auditClass));

    const viewportWidth = document.documentElement.clientWidth;
    const htmlWidth = document.documentElement.scrollWidth;
    const bodyWidth = document.body ? document.body.scrollWidth : 0;
    const documentWidth = Math.max(htmlWidth, bodyWidth);
    const horizontalExcess = Math.max(0, documentWidth - viewportWidth);

    const candidates = [];

    document.querySelectorAll("body *").forEach(element => {
      if (
        element === panel ||
        element === mini ||
        panel.contains(element) ||
        element.tagName === "SCRIPT" ||
        element.tagName === "STYLE"
      ) {
        return;
      }

      const computed = getComputedStyle(element);

      if (
        computed.display === "none" ||
        computed.visibility === "hidden" ||
        Number(computed.opacity) === 0
      ) {
        return;
      }

      const rect = element.getBoundingClientRect();

      if (rect.width <= 0 || rect.height <= 0) return;

      const rightExcess = rect.right - viewportWidth;
      const leftExcess = 0 - rect.left;
      const internalExcess =
        element.scrollWidth - element.clientWidth;

      const exceedsRight = rightExcess > TOLERANCE;
      const exceedsLeft = leftExcess > TOLERANCE;
      const exceedsInternally = internalExcess > TOLERANCE;

      if (!exceedsRight && !exceedsLeft && !exceedsInternally) {
        return;
      }

      candidates.push({
        element,
        selector: selectorFor(element),
        left: Math.round(rect.left),
        right: Math.round(rect.right),
        width: Math.round(rect.width),
        clientWidth: element.clientWidth,
        scrollWidth: element.scrollWidth,
        rightExcess: Math.max(0, Math.round(rightExcess)),
        leftExcess: Math.max(0, Math.round(leftExcess)),
        internalExcess: Math.max(0, Math.round(internalExcess)),
        position: computed.position,
        display: computed.display,
        transform:
          computed.transform === "none"
            ? "nenhum"
            : computed.transform,
        widthCSS: computed.width,
        minWidthCSS: computed.minWidth,
        maxWidthCSS: computed.maxWidth
      });
    });

    /*
     * Prioriza os elementos mais externos.
     * Um descendente deixa de ser listado quando o pai já explica
     * o mesmo transbordamento.
     */
    const relevant = candidates.filter(item => {
      const parent = item.element.parentElement;

      if (!parent) return true;

      return !candidates.some(other =>
        other.element === parent &&
        other.rightExcess >= item.rightExcess &&
        other.leftExcess >= item.leftExcess
      );
    });

    relevant.sort((a, b) => {
      const excessA =
        a.rightExcess + a.leftExcess + a.internalExcess;

      const excessB =
        b.rightExcess + b.leftExcess + b.internalExcess;

      return excessB - excessA;
    });

    relevant
      .slice(0, MAX_RESULTS)
      .forEach(item => item.element.classList.add(auditClass));

    const lines = [];

    lines.push("=== D50 | AUDITORIA DIRETA ===");
    lines.push(`Viewport: ${viewportWidth}px`);
    lines.push(`Documento: ${documentWidth}px`);
    lines.push(`Excesso horizontal: ${horizontalExcess}px`);
    lines.push(`Elementos relevantes: ${relevant.length}`);
    lines.push("");

    relevant.slice(0, MAX_RESULTS).forEach((item, index) => {
      lines.push(`${index + 1}. ${item.selector}`);
      lines.push(
        `   retângulo: left=${item.left}px | right=${item.right}px | width=${item.width}px`
      );
      lines.push(
        `   excesso: direita=${item.rightExcess}px | esquerda=${item.leftExcess}px | interno=${item.internalExcess}px`
      );
      lines.push(
        `   dimensões: clientWidth=${item.clientWidth}px | scrollWidth=${item.scrollWidth}px`
      );
      lines.push(
        `   CSS: display=${item.display} | position=${item.position}`
      );
      lines.push(
        `   width=${item.widthCSS} | min-width=${item.minWidthCSS} | max-width=${item.maxWidthCSS}`
      );
      lines.push(`   transform=${item.transform}`);
      lines.push("");
    });

    const report = lines.join("\n");

    const status = horizontalExcess <= TOLERANCE
      ? `<p class="d50-success">
           ✅ Nenhuma rolagem horizontal estrutural detectada.
         </p>`
      : `<p class="d50-danger">
           ❌ Excesso horizontal detectado: ${horizontalExcess}px.
         </p>`;

    panel.innerHTML = `
      <h2>🚀 D50 — Auditoria Direta</h2>

      ${status}

      <p>
        <strong>Viewport:</strong> ${viewportWidth}px<br>
        <strong>Documento:</strong> ${documentWidth}px<br>
        <strong>Suspeitos relevantes:</strong> ${relevant.length}
      </p>

      <pre id="d50-report">${report}</pre>

      <button type="button" id="d50-copy">
        Copiar diagnóstico
      </button>

      <button type="button" id="d50-rerun">
        Reexecutar
      </button>

      <button type="button" id="d50-hide">
        Minimizar
      </button>
    `;

    document
      .querySelector("#d50-copy")
      .addEventListener("click", async event => {
        try {
          await navigator.clipboard.writeText(report);
          event.currentTarget.textContent = "✅ Copiado";
        } catch {
          const reportElement =
            document.querySelector("#d50-report");

          const range = document.createRange();
          range.selectNodeContents(reportElement);

          const selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);

          event.currentTarget.textContent =
            "Selecione e copie";
        }
      });

    document
      .querySelector("#d50-rerun")
      .addEventListener("click", audit);

    document
      .querySelector("#d50-hide")
      .addEventListener("click", () => {
        panel.style.display = "none";
        mini.style.display = "block";
      });

    return report;
  }

  mini.addEventListener("click", () => {
    mini.style.display = "none";
    panel.style.display = "block";
  });

  let resizeTimer;

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(audit, 350);
  });

  window.addEventListener("load", () => {
    setTimeout(audit, 1800);
  });

  setTimeout(audit, 2500);
})();
