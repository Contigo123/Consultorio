// Impresión de las tarjetas de la Caja Física CONTIGO.
//
// Antes se imprimía la propia página con window.print() y una clase en <body>.
// En celulares el navegador dispara "afterprint" casi de inmediato y genera el
// archivo después, cuando la clase ya se había quitado: salía la web completa en
// lugar de las tarjetas. Ahora las tarjetas se arman en un documento aparte
// (pestaña nueva) que solo contiene las tarjetas, y se imprime ese documento.

import { BOX_ITEMS } from './box-simulator.js';

const CARDS_PER_SHEET = 6; // A4 vertical, 2 columnas x 3 filas

const CARDS_CSS = `
  @page { size: A4 portrait; margin: 10mm; }

  * { box-sizing: border-box; }

  html, body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: 'Plus Jakarta Sans', 'Segoe UI', Arial, sans-serif;
    color: #1e293b;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* Barra de ayuda: solo se ve en pantalla, nunca en el papel */
  .print-bar {
    position: sticky;
    top: 0;
    z-index: 5;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 14px;
    background: #009aa6;
    color: #fff;
    font-size: 14px;
  }
  .print-bar button {
    border: 0;
    border-radius: 99px;
    padding: 9px 18px;
    background: #fff;
    color: #007780;
    font: inherit;
    font-weight: 700;
    cursor: pointer;
  }
  .print-bar p { margin: 0; }

  .print-sheet {
    display: grid;
    grid-template-columns: repeat(2, 92mm);
    grid-auto-rows: 88mm;
    gap: 4.5mm 6mm;
    justify-content: center;
    align-content: start;
    break-after: page;
    page-break-after: always;
    break-inside: avoid;
  }
  .print-sheet:last-child {
    break-after: auto;
    page-break-after: auto;
  }

  .pcard {
    width: 92mm;
    height: 88mm;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: #fff;
    border: 0.35mm dashed #9aa6b2; /* guía de corte */
    border-radius: 4mm;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .pcard-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3mm;
    padding: 2.6mm 4mm;
    background: #009aa6;
    color: #fff;
  }
  .pcard-cat {
    display: inline-flex;
    align-items: center;
    gap: 2mm;
    font-size: 7.2pt;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  .pcard-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
    width: 6.4mm;
    height: 6.4mm;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.22);
  }
  .pcard-icon svg { width: 3.8mm; height: 3.8mm; }
  .pcard-num {
    min-width: 7mm;
    padding: 0.6mm 2mm;
    border-radius: 99px;
    background: #fff;
    color: #007780;
    font-size: 8pt;
    font-weight: 800;
    text-align: center;
  }

  .pcard-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.8mm;
    padding: 2.8mm 4.4mm 1.5mm;
    background: linear-gradient(to bottom, #e3f4f5 0, #fff 20mm);
    min-height: 0;
  }
  .pcard-title {
    margin: 0;
    font-family: 'Outfit', 'Plus Jakarta Sans', Arial, sans-serif;
    font-size: 13pt;
    line-height: 1.15;
    font-weight: 700;
    color: #007780;
  }
  .pcard-lead {
    margin: 0;
    padding-bottom: 2mm;
    border-bottom: 0.4mm solid #009aa6;
    font-size: 8.3pt;
    line-height: 1.3;
    color: #334155;
  }
  .pcard-block p {
    margin: 0.6mm 0 0;
    font-size: 8.2pt;
    line-height: 1.3;
    color: #1e293b;
  }
  .pcard-label {
    display: inline-block;
    padding: 0.3mm 2mm;
    border-radius: 99px;
    background: #009aa6;
    color: #fff;
    font-size: 6.4pt;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .pcard-foot {
    padding: 1.8mm 3mm;
    border-top: 0.3mm solid #e2e8f0;
    background: #fff;
    font-size: 6pt;
    letter-spacing: 0.04em;
    text-align: center;
    color: #64748b;
  }

  /* Vista previa en pantalla (celular): las tarjetas se acomodan al ancho */
  @media screen {
    body { background: #eef2f4; }
    .print-sheet {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 14px;
      padding: 14px;
    }
    .pcard {
      width: 92mm;
      max-width: 100%;
      height: auto;
      min-height: 88mm;
    }
  }

  @media print {
    .print-bar { display: none !important; }
  }
`;

function buildCardsMarkup() {
  const sheets = [];
  for (let i = 0; i < BOX_ITEMS.length; i += CARDS_PER_SHEET) {
    const cards = BOX_ITEMS.slice(i, i + CARDS_PER_SHEET).map((item, j) => `
      <article class="pcard">
        <header class="pcard-top">
          <span class="pcard-cat"><span class="pcard-icon">${item.icon}</span>${item.category}</span>
          <span class="pcard-num">${String(i + j + 1).padStart(2, '0')}</span>
        </header>
        <div class="pcard-main">
          <h3 class="pcard-title">${item.title}</h3>
          <p class="pcard-lead">${item.desc}</p>
          <div class="pcard-block">
            <span class="pcard-label">Objetivo clínico</span>
            <p>${item.clinicalObjective}</p>
          </div>
          <div class="pcard-block">
            <span class="pcard-label">Modo de uso</span>
            <p>${item.howToUse}</p>
          </div>
        </div>
        <footer class="pcard-foot">CONTIGO · Consultorio Psicológico FUNDES</footer>
      </article>`).join('');
    sheets.push(`<section class="print-sheet">${cards}</section>`);
  }
  return sheets.join('');
}

function buildCardsDocument() {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tarjetas Caja Fisica CONTIGO</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@600;700&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>${CARDS_CSS}</style>
</head>
<body>
  <div class="print-bar">
    <p>Tarjetas de la Caja Física CONTIGO · A4 vertical, 6 por hoja</p>
    <button type="button" onclick="window.print()">Imprimir / Guardar PDF</button>
  </div>
  ${buildCardsMarkup()}
  <script>
    // Imprime solo cuando las fuentes y el diseño ya están listos
    (function () {
      var done = false;
      function go() {
        if (done) return;
        done = true;
        setTimeout(function () { window.print(); }, 300);
      }
      window.addEventListener('load', function () {
        if (document.fonts && document.fonts.ready) {
          Promise.race([document.fonts.ready, new Promise(function (r) { setTimeout(r, 2500); })]).then(go);
        } else {
          go();
        }
      });
    })();
  </script>
</body>
</html>`;
}

// Respaldo si el navegador bloquea la pestaña nueva: imprime desde un iframe oculto
function printFromIframe(html) {
  const frame = document.createElement('iframe');
  frame.setAttribute('aria-hidden', 'true');
  frame.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden';
  frame.srcdoc = html.replace(/<script>[\s\S]*?<\/script>/, ''); // el iframe se imprime desde aquí
  frame.onload = () => {
    try {
      frame.contentWindow.focus();
      frame.contentWindow.print();
    } catch (err) {
      console.warn('No se pudo imprimir las tarjetas', err);
    }
    setTimeout(() => frame.remove(), 60000);
  };
  document.body.appendChild(frame);
}

export function printBoxCards() {
  const html = buildCardsDocument();

  // La pestaña se abre de forma síncrona dentro del clic para que no la bloquee el navegador
  const win = window.open('', '_blank');
  if (!win) {
    printFromIframe(html);
    return;
  }
  win.document.open();
  win.document.write(html);
  win.document.close();
}
