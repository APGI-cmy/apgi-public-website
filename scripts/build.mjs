import { mkdir, writeFile, cp, rm } from "node:fs/promises";
import { site } from "../src/site-data.mjs";

const outDir = new URL("../dist/", import.meta.url);
const publicDir = new URL("../public/", import.meta.url);
const hubBase = (process.env.ISMS_PUBLIC_BASE_URL || "").replace(/\/$/, "");

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const hubHref = (slug) => (hubBase ? `${hubBase}${slug}` : "#hub-pending");

function layout({ title, description, body }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${escapeHtml(site.canonical)}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${escapeHtml(site.canonical)}">
  <meta name="theme-color" content="#0f172a">
  <link rel="stylesheet" href="/styles.css">
  <script defer src="/app.js"></script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  ${body}
</body>
</html>`;
}

function nav() {
  const items = site.nav.map(([label, href]) => `<a href="${href}">${escapeHtml(label)}</a>`).join("");
  return `<header class="site-header">
    <a class="brand" href="/" aria-label="APGI home">APGI</a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">Menu</button>
    <nav id="primary-nav" class="primary-nav" aria-label="Primary navigation">${items}</nav>
  </header>`;
}

function home() {
  const services = site.services.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const impact = site.impact.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const team = site.team.map((item) => `<p>${escapeHtml(item)}</p>`).join("");
  const hubs = site.hubTiles.map(([id, title, desc, slug]) => {
    const href = hubHref(slug);
    const status = hubBase ? "Configured" : "Pending hub base URL";
    return `<article class="hub-card" data-hub-id="${id}">
      <span class="status">${escapeHtml(status)}</span>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(desc)}</p>
      <a href="${href}" aria-label="Open ${escapeHtml(title)}">Open hub route</a>
    </article>`;
  }).join("");

  return layout({
    title: site.title,
    description: site.description,
    body: `${nav()}
<main id="main">
  <section class="hero" aria-labelledby="hero-title">
    <p class="eyebrow">APGI Public Website</p>
    <h1 id="hero-title">Security, training, and public trust handoffs in one governed website.</h1>
    <p>APGI public information, training pathways, APGI Hub routing, and direct contact options are presented through a static-first public website.</p>
    <div class="cta-row">
      <a class="button" href="#training">Explore training</a>
      <a class="button secondary" href="#contact">Contact APGI</a>
    </div>
  </section>

  <section id="about" class="section" aria-labelledby="about-title">
    <h2 id="about-title">About APGI</h2>
    <p>APGI supports public-facing awareness, training discovery, and governed routing to related capability areas. This v1 website is intentionally public-only and text-first.</p>
  </section>

  <section id="services" class="section" aria-labelledby="services-title">
    <h2 id="services-title">Services</h2>
    <ul class="grid-list">${services}</ul>
  </section>

  <section id="training" class="section" aria-labelledby="training-title">
    <h2 id="training-title">Training handoffs</h2>
    <p>Training links route to approved public destinations.</p>
    <div class="card-row">
      <a class="card-link" href="${site.training.vpshr}">VPSHR Level 0 course</a>
      <a class="card-link" href="${site.training.thinkific}">APGI Thinkific storefront</a>
    </div>
  </section>

  <section id="hub" class="section" aria-labelledby="hub-title">
    <h2 id="hub-title">APGI Hub</h2>
    <p id="hub-pending">Hub links use a public base URL plus frozen route slugs. If the base URL is not configured, links remain visibly pending instead of pretending to be complete.</p>
    <div class="hub-grid">${hubs}</div>
  </section>

  <section id="impact" class="section" aria-labelledby="impact-title">
    <h2 id="impact-title">Impact and governance posture</h2>
    <ul class="grid-list">${impact}</ul>
  </section>

  <section id="team" class="section" aria-labelledby="team-title">
    <h2 id="team-title">Team</h2>
    ${team}
  </section>

  <section id="contact" class="section" aria-labelledby="contact-title">
    <h2 id="contact-title">Contact</h2>
    <p>Email: <a href="mailto:${site.contact.email}">${site.contact.email}</a></p>
    <p>Phone: <a href="${site.contact.phoneHref}">${site.contact.phoneDisplay}</a></p>
    <p class="note">No contact form, CRM capture, account sign-in, or database workflow is included in v1.</p>
  </section>
</main>
<footer class="site-footer">
  <a href="/privacy.html">Privacy</a>
  <a href="/terms.html">Terms</a>
  <span>© APGI</span>
</footer>`
  });
}

function legalPage(kind) {
  const title = kind === "privacy" ? "Privacy" : "Terms";
  const body = `${nav()}<main id="main"><section class="section legal"><h1>${title}</h1><p>This is a governed placeholder for APGI ${title.toLowerCase()} content. Final legal copy remains subject to CS2/Johan approval before launch readiness.</p><p>This v1 website does not include account sign-in, form submission, CRM capture, or database persistence.</p><a href="/">Return home</a></section></main>`;
  return layout({ title: `${title} | APGI`, description: `${title} information for the APGI public website.`, body });
}

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
await writeFile(new URL("index.html", outDir), home());
await writeFile(new URL("privacy.html", outDir), legalPage("privacy"));
await writeFile(new URL("terms.html", outDir), legalPage("terms"));
await cp(publicDir, outDir, { recursive: true });
console.log("APW static site built to dist/.");
