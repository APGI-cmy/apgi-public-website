import { readFile, access } from "node:fs/promises";

const requiredFiles = [
  "dist/index.html",
  "dist/privacy.html",
  "dist/terms.html",
  "dist/styles.css",
  "dist/app.js"
];

const requiredIndexTokens = [
  "id=\"about\"",
  "id=\"services\"",
  "id=\"training\"",
  "id=\"hub\"",
  "id=\"team\"",
  "id=\"contact\"",
  "mailto:info@apginc.ca",
  "tel:+14166429974",
  "https://training-urls-module.vercel.app/courses/vpshr-level-0",
  "https://apgi.thinkific.com/",
  "No contact form",
  "og:title",
  "canonical"
];

const forbiddenTokens = [
  "supabase",
  "createClient(",
  "type=\"password\"",
  "<form",
  "apiKey",
  "contact-form"
];

for (const file of requiredFiles) {
  await access(file);
}

const index = await readFile("dist/index.html", "utf8");
for (const token of requiredIndexTokens) {
  if (!index.includes(token)) {
    throw new Error(`Missing expected token in dist/index.html: ${token}`);
  }
}

const allText = await Promise.all(requiredFiles.map((file) => readFile(file, "utf8"))).then((parts) => parts.join("\n"));
for (const token of forbiddenTokens) {
  if (allText.toLowerCase().includes(token.toLowerCase())) {
    throw new Error(`Forbidden implementation token found in generated output: ${token}`);
  }
}

console.log("APW static output validation passed.");
