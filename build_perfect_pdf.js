const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

async function createPDF() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium',
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--allow-file-access-from-files'
    ]
  });

  const page = await browser.newPage();

  // Helper to get base64
  const getB64 = (filename) => {
    const fullPath = path.join(__dirname, 'screenshots', filename);
    const data = fs.readFileSync(fullPath).toString('base64');
    return `data:image/png;base64,${data}`;
  };

  const imgHero = getB64('user_screenshot_1_homepage_hero.png');
  const imgFeatured = getB64('user_screenshot_2_featured_properties.png');
  const imgDetailTop = getB64('user_screenshot_3_property_detail_top.png');
  const imgDetailSpecs = getB64('user_screenshot_4_property_detail_specs.png');
  const imgPsiNew = getB64('user_pagespeed_new_vercel_98.png');
  const imgPsiOld = getB64('user_pagespeed_old_website_34.png');

  const html = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Tempo Family Real Estate - Website Redesign Preview</title>
  <style>
    @page {
      size: 297mm 210mm; /* A4 Landscape */
      margin: 0;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background: #FFFFFF;
      color: #1E293B;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    
    .page {
      width: 297mm;
      height: 210mm;
      page-break-after: always;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 12mm 16mm;
      background: #FFFFFF;
    }
    
    /* Luxury Header */
    .brand-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #1B1F52;
      padding-bottom: 8px;
      margin-bottom: 8px;
    }
    
    .brand-group {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .brand-icon-box {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      background: #1B1F52;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(237, 190, 0, 0.4);
    }
    
    .brand-icon-box svg {
      width: 20px;
      height: 20px;
    }
    
    .brand-text-col {
      display: flex;
      flex-direction: column;
    }
    
    .brand-main-title {
      font-family: Georgia, serif;
      font-size: 18px;
      font-weight: 700;
      color: #1B1F52;
      line-height: 1;
    }
    
    .brand-sub-title {
      font-size: 8.5px;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #EDBE00;
      margin-top: 2px;
    }
    
    .page-title-col {
      text-align: right;
    }
    
    .page-main-heading {
      font-family: Georgia, serif;
      font-size: 19px;
      font-weight: 700;
      color: #1B1F52;
    }
    
    .page-sub-heading {
      font-size: 9px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #64748B;
      margin-top: 1px;
    }
    
    /* PAGE 1: COVER / HERO SHOWCASE */
    .cover-top-box {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 6px;
    }
    
    .cover-badge-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      border-radius: 9999px;
      background: rgba(27, 31, 82, 0.08);
      border: 1px solid rgba(237, 190, 0, 0.5);
      color: #1B1F52;
      font-size: 9.5px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    
    .cover-headline {
      font-family: Georgia, serif;
      font-size: 26px;
      font-weight: 700;
      color: #1B1F52;
      margin-top: 4px;
      line-height: 1.15;
    }
    
    .cover-tagline {
      font-size: 12px;
      color: #EDBE00;
      font-weight: 600;
      font-style: italic;
    }
    
    .cover-meta {
      text-align: right;
      font-size: 10px;
      color: #64748B;
      line-height: 1.4;
    }
    
    .cover-meta strong {
      color: #1B1F52;
    }
    
    .main-image-container {
      flex: 1;
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid #CBD5E1;
      box-shadow: 0 10px 30px rgba(27, 31, 82, 0.12);
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      max-height: 138mm;
    }
    
    .main-image-container img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      display: block;
    }
    
    .metrics-summary-bar {
      margin-top: 8px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      background: #F8F9FC;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 6px 14px;
    }
    
    .ms-item {
      text-align: center;
    }
    
    .ms-val {
      font-family: Georgia, serif;
      font-size: 14px;
      font-weight: 700;
      color: #1B1F52;
    }
    
    .ms-lbl {
      font-size: 8.5px;
      font-weight: 600;
      color: #64748B;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    /* PAGE 2: COMPARISON */
    .delta-grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      margin-bottom: 8px;
    }
    
    .delta-box {
      background: #F8F9FC;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 6px 10px;
      text-align: center;
    }
    
    .delta-box.featured-delta {
      background: #F0FDF4;
      border-color: #86EFAC;
    }
    
    .delta-title {
      font-size: 8.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #64748B;
      margin-bottom: 2px;
    }
    
    .delta-nums {
      display: flex;
      align-items: baseline;
      justify-content: center;
      gap: 6px;
    }
    
    .delta-before {
      font-size: 12px;
      font-weight: 700;
      color: #DC2626;
      text-decoration: line-through;
    }
    
    .delta-after {
      font-size: 17px;
      font-weight: 800;
      color: #16A34A;
    }
    
    .delta-pill {
      display: inline-block;
      font-size: 7.5px;
      font-weight: 700;
      text-transform: uppercase;
      padding: 1px 6px;
      border-radius: 4px;
      background: #DCFCE7;
      color: #15803D;
      margin-top: 1px;
    }
    
    .comparison-flex {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      flex: 1;
      max-height: 128mm;
    }
    
    .comparison-column {
      background: #FFFFFF;
      border-radius: 10px;
      border: 1px solid #CBD5E1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    }
    
    .col-header {
      padding: 6px 12px;
      background: #F8F9FC;
      border-bottom: 1px solid #E2E8F0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .col-title {
      font-size: 10.5px;
      font-weight: 700;
      color: #1E293B;
    }
    
    .col-badge {
      font-size: 9.5px;
      font-weight: 800;
      padding: 2px 8px;
      border-radius: 6px;
    }
    
    .badge-bad {
      background: #FEE2E2;
      color: #DC2626;
    }
    
    .badge-good {
      background: #DCFCE7;
      color: #15803D;
    }
    
    .comparison-img-wrap {
      flex: 1;
      background: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      padding: 4px;
    }
    
    .comparison-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }
    
    /* Description Caption Box */
    .desc-caption-box {
      margin-top: 8px;
      background: #F8F9FC;
      border-left: 3px solid #EDBE00;
      border-radius: 0 6px 6px 0;
      padding: 6px 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .desc-text {
      font-size: 10.5px;
      color: #334155;
      line-height: 1.4;
      max-width: 82%;
    }
    
    .desc-tag {
      font-size: 8.5px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      background: #1B1F52;
      color: #FFFFFF;
      padding: 3px 8px;
      border-radius: 4px;
    }
    
    .page-footer-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #E2E8F0;
      padding-top: 6px;
      margin-top: 6px;
      font-size: 9.5px;
      color: #94A3B8;
    }
  </style>
</head>
<body>

  <!-- =========================================================================
       PAGE 1: HOMEPAGE HERO SHOWCASE
       ========================================================================= -->
  <div class="page">
    <div>
      <div class="brand-header">
        <div class="brand-group">
          <div class="brand-icon-box">
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
              <path d="M20 5L6 16V34C6 35.1 6.9 36 8 36H32C33.1 36 34 34V16L20 5Z" stroke="#EDBE00" stroke-width="2.5" />
              <path d="M14 24H26M20 18V30" stroke="#EDBE00" stroke-width="2.5" />
            </svg>
          </div>
          <div class="brand-text-col">
            <span class="brand-main-title">TEMPO FAMILY REAL ESTATE</span>
            <span class="brand-sub-title">Boutique Inmobiliaria • Cantabria</span>
          </div>
        </div>
        <div class="page-title-col">
          <h2 class="page-main-heading">Homepage: Hero Section & Navegación</h2>
          <p class="page-sub-heading">Pantalla de Bienvenida • Above the Fold</p>
        </div>
      </div>

      <div class="cover-top-box">
        <div>
          <span class="cover-badge-pill">Rediseño Web Premium</span>
          <h1 class="cover-headline">«Cada familia tiene su historia, ven y conoce la nuestra»</h1>
          <p class="cover-tagline">Presencia digital exclusiva y moderna para Tempo Family Real Estate</p>
        </div>
        <div class="cover-meta">
          <p><strong>Despliegue:</strong> tempofamilyrealestate.vercel.app</p>
          <p><strong>Sede Central:</strong> Calle San Roque 15, Cartes (Cantabria)</p>
          <p><strong>Teléfono:</strong> +34 636 735 856</p>
        </div>
      </div>

      <!-- User's exact Homepage Screenshot -->
      <div class="main-image-container">
        <img src="${imgHero}" alt="Homepage Hero Screenshot" />
      </div>

      <div class="metrics-summary-bar">
        <div class="ms-item">
          <div class="ms-val">Next.js 14 SSG</div>
          <div class="ms-lbl">Arquitectura Ultra-Optimizada</div>
        </div>
        <div class="ms-item">
          <div class="ms-val">15 Inmuebles Reales</div>
          <div class="ms-lbl">Cartera Exclusiva Cantabria</div>
        </div>
        <div class="ms-item">
          <div class="ms-val">Puntuación 98</div>
          <div class="ms-lbl">Google PageSpeed Mobile</div>
        </div>
        <div class="ms-item">
          <div class="ms-val">1.1 s LCP</div>
          <div class="ms-lbl">Carga 21x Más Rápida</div>
        </div>
      </div>
    </div>

    <div class="page-footer-bar">
      <span>Tempo Family Real Estate S.L. • Rediseño Web & Optimización de Rendimiento</span>
      <span>Página 1</span>
    </div>
  </div>

  <!-- =========================================================================
       PAGE 2: LIVE PERFORMANCE COMPARISON (OLD VS NEW)
       ========================================================================= -->
  <div class="page">
    <div>
      <div class="brand-header">
        <div class="brand-group">
          <div class="brand-icon-box">
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
              <path d="M20 5L6 16V34C6 35.1 6.9 36 8 36H32C33.1 36 34 34V16L20 5Z" stroke="#EDBE00" stroke-width="2.5" />
            </svg>
          </div>
          <div class="brand-text-col">
            <span class="brand-main-title">TEMPO FAMILY REAL ESTATE</span>
            <span class="brand-sub-title">Auditoría Oficial Google PageSpeed</span>
          </div>
        </div>
        <div class="page-title-col">
          <h2 class="page-main-heading">Resultados en Vivo: Antes vs Después</h2>
          <p class="page-sub-heading">Google Lighthouse 13.6.0 • Emulated Moto G Power (4G Móvil)</p>
        </div>
      </div>

      <!-- Delta Highlight Cards -->
      <div class="delta-grid-4">
        <div class="delta-box featured-delta">
          <div class="delta-title">Puntuación Global de Rendimiento</div>
          <div class="delta-nums">
            <span class="delta-before">34</span>
            <span style="color:#94A3B8; font-size:11px;">➔</span>
            <span class="delta-after">98</span>
          </div>
          <span class="delta-pill">+188% Mejora Extraordinaria</span>
        </div>

        <div class="delta-box featured-delta">
          <div class="delta-title">Largest Contentful Paint (LCP)</div>
          <div class="delta-nums">
            <span class="delta-before">23.2 s</span>
            <span style="color:#94A3B8; font-size:11px;">➔</span>
            <span class="delta-after">1.1 s</span>
          </div>
          <span class="delta-pill">21x Más Rápido (-22.1 segundos)</span>
        </div>

        <div class="delta-box featured-delta">
          <div class="delta-title">Total Blocking Time (TBT)</div>
          <div class="delta-nums">
            <span class="delta-before">1,160 ms</span>
            <span style="color:#94A3B8; font-size:11px;">➔</span>
            <span class="delta-after">0 ms</span>
          </div>
          <span class="delta-pill">100% Sin Bloqueo de Interfaz</span>
        </div>

        <div class="delta-box featured-delta">
          <div class="delta-title">SEO & Best Practices</div>
          <div class="delta-nums">
            <span class="delta-before">83 / 96</span>
            <span style="color:#94A3B8; font-size:11px;">➔</span>
            <span class="delta-after">100 / 100</span>
          </div>
          <span class="delta-pill">Calificación Máxima Absoluta</span>
        </div>
      </div>

      <!-- Side-by-side User Uploaded PageSpeed Screenshots -->
      <div class="comparison-flex">
        <!-- Old Website -->
        <div class="comparison-column" style="border-top: 3px solid #EF4444;">
          <div class="col-header">
            <div>
              <span class="col-title">Sitio Web Anterior (tempofamilyrealestate.es)</span>
              <p style="font-size: 8.5px; color: #64748B;">Lighthouse 13.6.0 • 5:00:47 PM</p>
            </div>
            <span class="col-badge badge-bad">Puntuación: 34 / 100</span>
          </div>
          <div class="comparison-img-wrap">
            <img src="${imgPsiOld}" alt="PageSpeed Reporte Anterior 34" />
          </div>
        </div>

        <!-- New Vercel Deployment -->
        <div class="comparison-column" style="border-top: 3px solid #10B981;">
          <div class="col-header">
            <div>
              <span class="col-title">Nuevo Sitio Reconstruido (Vercel Production)</span>
              <p style="font-size: 8.5px; color: #64748B;">Lighthouse 13.6.0 • 4:59:41 PM</p>
            </div>
            <span class="col-badge badge-good">Puntuación: 98 / 100</span>
          </div>
          <div class="comparison-img-wrap">
            <img src="${imgPsiNew}" alt="PageSpeed Reporte Nuevo Vercel 98" />
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer-bar">
      <span>Tempo Family Real Estate • Comparativa Oficial de Rendimiento Google PageSpeed</span>
      <span>Página 2</span>
    </div>
  </div>

  <!-- =========================================================================
       PAGE 3: FEATURED PROPERTIES COLLECTION
       ========================================================================= -->
  <div class="page">
    <div>
      <div class="brand-header">
        <div class="brand-group">
          <div class="brand-icon-box">
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
              <path d="M20 5L6 16V34C6 35.1 6.9 36 8 36H32C33.1 36 34 34V16L20 5Z" stroke="#EDBE00" stroke-width="2.5" />
            </svg>
          </div>
          <div class="brand-text-col">
            <span class="brand-main-title">TEMPO FAMILY REAL ESTATE</span>
            <span class="brand-sub-title">Experiencia de Usuario</span>
          </div>
        </div>
        <div class="page-title-col">
          <h2 class="page-main-heading">Colección Seleccionada: Inmuebles Destacados</h2>
          <p class="page-sub-heading">Diseño Editorial • Micro-interacciones & Badges</p>
        </div>
      </div>

      <!-- User's Featured Properties Screenshot -->
      <div class="main-image-container">
        <img src="${imgFeatured}" alt="Featured Properties Screenshot" />
      </div>

      <div class="desc-caption-box">
        <p class="desc-text">
          <strong>Presentación de alto impacto y confianza:</strong> Tarjetas reactivas de propiedades con aspecto panorámico 16:10, badges dorados («Lujo Exclusivo», «Primera Línea Golf», «Licencia Turística»), indicador de calificación energética (A, B, C), desglose de dormitorios, baños y m² construidos, y enlace directo a la ficha detallada.
        </p>
        <span class="desc-tag">Catálogo Destacado</span>
      </div>
    </div>

    <div class="page-footer-bar">
      <span>Tempo Family Real Estate S.L. • Rediseño Web Premium</span>
      <span>Página 3</span>
    </div>
  </div>

  <!-- =========================================================================
       PAGE 4: INDIVIDUAL PROPERTY DETAIL (TOP / GALLERY)
       ========================================================================= -->
  <div class="page">
    <div>
      <div class="brand-header">
        <div class="brand-group">
          <div class="brand-icon-box">
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
              <path d="M20 5L6 16V34C6 35.1 6.9 36 8 36H32C33.1 36 34 34V16L20 5Z" stroke="#EDBE00" stroke-width="2.5" />
            </svg>
          </div>
          <div class="brand-text-col">
            <span class="brand-main-title">TEMPO FAMILY REAL ESTATE</span>
            <span class="brand-sub-title">Ficha de Inmueble</span>
          </div>
        </div>
        <div class="page-title-col">
          <h2 class="page-main-heading">Ficha de Propiedad: Galería & Ficha Técnica</h2>
          <p class="page-sub-heading">Experiencia Inmersiva & Formulario de Captación</p>
        </div>
      </div>

      <!-- User's Property Detail Top Screenshot -->
      <div class="main-image-container">
        <img src="${imgDetailTop}" alt="Property Detail Top Screenshot" />
      </div>

      <div class="desc-caption-box">
        <p class="desc-text">
          <strong>Ficha de propiedad orientada a la conversión:</strong> Gran visor de imágenes de alta resolución con modo pantalla completa, cabecera con precio prominente (975.000 € • ~3.750 €/m²), barra de características esenciales (4 habs, 3 baños, 260 m², etiqueta energética A), y columna lateral con llamada telefónica directa, chat de WhatsApp y formulario de contacto.
        </p>
        <span class="desc-tag">Ficha Individual</span>
      </div>
    </div>

    <div class="page-footer-bar">
      <span>Tempo Family Real Estate S.L. • Rediseño Web Premium</span>
      <span>Página 4</span>
    </div>
  </div>

  <!-- =========================================================================
       PAGE 5: PROPERTY DETAIL SPECS & AMENITIES
       ========================================================================= -->
  <div class="page">
    <div>
      <div class="brand-header">
        <div class="brand-group">
          <div class="brand-icon-box">
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
              <path d="M20 5L6 16V34C6 35.1 6.9 36 8 36H32C33.1 36 34 34V16L20 5Z" stroke="#EDBE00" stroke-width="2.5" />
            </svg>
          </div>
          <div class="brand-text-col">
            <span class="brand-main-title">TEMPO FAMILY REAL ESTATE</span>
            <span class="brand-sub-title">Detalles & Garantía</span>
          </div>
        </div>
        <div class="page-title-col">
          <h2 class="page-main-heading">Descripción Arquitectónica & Equipamiento</h2>
          <p class="page-sub-heading">Checklist de Comodidades & Garantía Jurídica</p>
        </div>
      </div>

      <!-- User's Property Detail Specs Screenshot -->
      <div class="main-image-container">
        <img src="${imgDetailSpecs}" alt="Property Detail Specs Screenshot" />
      </div>

      <div class="desc-caption-box">
        <p class="desc-text">
          <strong>Transparencia y detalle exhaustivo:</strong> Redacción editorial descriptiva que destaca la luz, los materiales y la distribución, acompañada de una cuadrícula de características y equipamiento destacado (aerotermia, suelo radiante, piscina LED, jardín de 850 m², preinstalación de vehículo eléctrico) y el sello de Garantía Jurídica Tempo Family.
        </p>
        <span class="desc-tag">Equipamiento Completo</span>
      </div>
    </div>

    <div class="page-footer-bar">
      <span>Tempo Family Real Estate S.L. • Rediseño Web Premium</span>
      <span>Página 5</span>
    </div>
  </div>

</body>
</html>
  `;

  await page.setContent(html, { waitUntil: 'domcontentloaded' });

  // Wait a moment for all base64 images to fully decode and render
  await new Promise(r => setTimeout(r, 1500));

  const finalPdf = path.join(__dirname, 'Tempo_Family_Real_Estate_Final_Preview.pdf');
  const previewPdf = path.join(__dirname, 'Tempo_Family_Real_Estate_Website_Preview.pdf');

  await page.pdf({
    path: finalPdf,
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  // Also update preview PDF with the same aesthetic layout
  fs.copyFileSync(finalPdf, previewPdf);

  await browser.close();
  console.log('✓ Successfully generated both PDFs with user-provided screenshots!');
}

createPDF().catch(err => {
  console.error('Error in PDF generation:', err);
  process.exit(1);
});
