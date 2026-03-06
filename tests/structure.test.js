/**
 * Struktūriniai testai – LT/EN puslapiai
 * Tikrina, kad lt/index.html, en/index.html ir privatumo puslapiuose yra būtini elementai.
 * Paleisti: node tests/structure.test.js (arba npm test)
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT_INDEX = path.join(__dirname, '..', 'index.html');
const LT_INDEX = path.join(__dirname, '..', 'lt', 'index.html');
const LT_PRIVATUMAS = path.join(__dirname, '..', 'lt', 'privatumas.html');
const EN_INDEX = path.join(__dirname, '..', 'en', 'index.html');
const EN_PRIVACY = path.join(__dirname, '..', 'en', 'privacy.html');

function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    return null;
  }
}

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ ${message}`);
    return false;
  }
  console.log(`✅ ${message}`);
  return true;
}

function checkLibraryPage(html, lang, copyButtonText, skipText, privacyLink) {
  let passed = 0;
  let failed = 0;
  for (let i = 1; i <= 8; i++) {
    if (assert(html.includes(`id="prompt${i}"`), `${lang}: Prompt ${i} ID`)) passed++;
    else failed++;
  }
  for (let i = 1; i <= 8; i++) {
    if (assert(html.includes(`id="block${i}"`), `${lang}: Anchor block${i}`)) passed++;
    else failed++;
  }
  const copyCount = (html.match(new RegExp(copyButtonText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
  if (assert(copyCount >= 8, `${lang}: Copy buttons >= 8`)) passed++;
  else failed++;
  const codeBlocks = (html.match(/class="[^"]*code-block[^"]*"/g) || []).length;
  if (assert(codeBlocks >= 8, `${lang}: Code-block count >= 8`)) passed++;
  else failed++;
  const checkboxes = (html.match(/class="[^"]*prompt-done[^"]*"/g) || []).length;
  if (assert(checkboxes >= 8, `${lang}: Prompt-done checkbox >= 8`)) passed++;
  else failed++;
  if (assert(html.includes('skip-link') && html.includes(skipText), `${lang}: Skip link`)) passed++;
  else failed++;
  if (assert(html.includes('id="main-content"') && html.includes('<main'), `${lang}: Main region`)) passed++;
  else failed++;
  if (assert(html.includes('id="progressText"') && html.includes('id="progressBarFill"'), `${lang}: Progress`)) passed++;
  else failed++;
  if (assert(html.includes('id="toast"') && html.includes('role="status"'), `${lang}: Toast`)) passed++;
  else failed++;
  if (assert(html.includes(privacyLink), `${lang}: Privacy link`)) passed++;
  else failed++;
  if (assert(html.includes('copyPrompt') && html.includes('selectText'), `${lang}: Copy functions`)) passed++;
  else failed++;
  if (assert(html.includes('localStorage') && html.includes('di_prompt_done_'), `${lang}: localStorage`)) passed++;
  else failed++;
  if (assert(html.includes('hiddenTextarea'), `${lang}: Fallback textarea`)) passed++;
  else failed++;
  return { passed, failed };
}

function run() {
  let passed = 0;
  let failed = 0;

  // --- Root redirect ---
  const rootHtml = readFile(ROOT_INDEX);
  if (assert(rootHtml && (rootHtml.includes('Redirecting') || rootHtml.includes('location')), 'Root index: redirect page')) passed++;
  else failed++;

  // --- LT library ---
  const ltHtml = readFile(LT_INDEX);
  if (!ltHtml) {
    console.error('❌ lt/index.html nerastas');
    process.exit(1);
  }
  const ltRes = checkLibraryPage(ltHtml, 'LT', 'Kopijuoti promptą', 'Pereiti prie turinio', 'privatumas.html');
  passed += ltRes.passed;
  failed += ltRes.failed;
  if (assert(ltHtml.includes('lang="lt"'), 'LT: html lang="lt"')) passed++;
  else failed++;

  // --- EN library ---
  const enHtml = readFile(EN_INDEX);
  if (!enHtml) {
    console.error('❌ en/index.html nerastas');
    process.exit(1);
  }
  const enRes = checkLibraryPage(enHtml, 'EN', 'Copy prompt', 'Skip to content', 'privacy.html');
  passed += enRes.passed;
  failed += enRes.failed;
  if (assert(enHtml.includes('lang="en"'), 'EN: html lang="en"')) passed++;
  else failed++;

  // --- Privacy pages exist ---
  if (assert(readFile(LT_PRIVATUMAS) !== null && readFile(LT_PRIVATUMAS).length > 0, 'lt/privatumas.html egzistuoja')) passed++;
  else failed++;
  if (assert(readFile(EN_PRIVACY) !== null && readFile(EN_PRIVACY).length > 0, 'en/privacy.html egzistuoja')) passed++;
  else failed++;

  console.log('\n---');
  console.log(`Rezultatas: ${passed} praeina, ${failed} nepraeina.`);
  if (failed > 0) {
    process.exit(1);
  }
  console.log('Visi struktūriniai testai praeina.\n');
}

run();
