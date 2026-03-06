# Changelog

Visi reikšmingi projekto pakeitimai dokumentuojami šiame faile.

Formatas pagal [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), versijavimas – [Semantic Versioning](https://semver.org/).

## [Nereleisuota]

### Prideta

- Mikroteksto auditas EN UI: docs/MICROCOPY_AUDIT_EN.md (inventorius, rekomendacijos, backlog §7). EN stringų sinchronizacijos pastaba docs/MULTILINGUAL_STRUCTURE.md §4 – LT tekstus atnaujinti, kai keičiami EN.
- Daugiakalbiška architektūra (LT/EN): folder-based URL (`/lt/`, `/en/`), kalbos jungiklis (Lietuvių | English) visuose puslapiuose, root redirect pagal `navigator.language` arba localStorage, hreflang ir `x-default` SEO. EN turinys: en/index.html (library), en/privacy.html. Žr. docs/MULTILINGUAL_STRUCTURE.md, MUST_TODO.md skyrių „Multilingual“.
- Bullet-proof promptų standartas: docs/BULLET_PROOF_PROMPTS.md (META/INPUT/OUTPUT struktūra, reikalavimai, „Naudok kai“ taksonomija). Dokumentų inventoriuje – docs/DOCUMENTATION.md.
- Kiekviename prompte: META/INPUT/OUTPUT blokai, „Pakeisk prieš naudodamas:“, „Rezultatas:“, „Naudok kai:“. Pirmame prompte – „Tai nėra klausimynas. Nukopijuok šį tekstą ir įklijuok į ChatGPT arba Claude.“
- Kortelėse: „Naudok kai“ eilutė po kiekvieno prompto aprašymo (CSS .prompt-when). Gyvo testavimo checklist: „Turinio / bullet-proof“ skyrius docs/TESTAVIMAS.md.
- QA ir dokumentų valdymo procesas: CHANGELOG.md, docs/DOCUMENTATION.md, integracija su AGENTS.md ir .cursorrules.
- Deploy: GitHub Pages workflow (.github/workflows/deploy.yml), DEPLOYMENT.md.
- QA standartas: docs/QA_STANDARTAS.md su nuoroda į [DITreneris/spinoff01](https://github.com/DITreneris/spinoff01).
- Gyvo testavimo dokumentacija: docs/TESTAVIMAS.md (scenarijai ir žurnalas).
- Ryšys su pagrindiniu produktu: badge „Promptų anatomija“ → https://ditreneris.github.io/anatomija/, nuorodos footer ir community skyriuje.
- Favicon: favicon.svg (SVG, „P“ ant teal fono), nuorodos index.html ir privatumas.html.
- `.nojekyll` root’e – GitHub Pages naudoja statinius failus be Jekyll.

### Pakeista

- EN mikrotekstas (aukšta prioritetas): hero „For?“ → „Who it's for:“; visos JS klaidos pakeistos vartotojui suprantamu tekstu („Something went wrong. Try copying again.“, manual copy hint kai clipboard nepavyksta); vardas vienodas – „Prompt Anatomy“ (privacy title, root redirect title, privacy „Back to library“). Vidutinio/žemo prioriteto punktai – backlog docs/MICROCOPY_AUDIT_EN.md §7.
- Root redirect: base path išvedamas iš `location.pathname`, kai meta `base-path` tuščias – veikia GitHub Pages project site (`https://DITreneris.github.io/biblioteka/`). DEPLOYMENT.md – nurodytas production URL.
- Instrukcijos „Kaip naudoti“ ir footer: aiškinama, kad [ĮMONĖ]/[MANO ROLĖ] keičiami savo duomenimis; DI rolė (pvz. „kritiškas analitikas“) jau nurodyta prompte – jos keisti nereikia. README.md „Kaip naudoti“ atnaujintas atitinkamai.
- Visi 8 promptai perrašyti į META/INPUT/OUTPUT struktūrą; „Rolė – X“ pakeista į „Tu esi X“ (META). DI rolė atskirta nuo vartotojo rolės [MANO ROLĖ].
- Copyable promptas: į mainų atmintinę kopijuojamas tik META+INPUT+OUTPUT. Instrukcijos (Naudok kai, Pakeisk prieš naudodamas, Ką daryti) perkeltos į atskirą bloką „Prieš naudojant“ tarp code-block ir „Kodėl tai svarbu“; „Naudok kai“ pašalintas iš prompt-header.
- Community sekcija: hierarchija ir UX – vienas pagrindinis CTA (brand green #0E7A33, be glow, subtilus shadow), antrinis outline („Promptų anatomija“). Trumpesnė antraštė dviem eilutėm, vertikalūs tarpai (16px / 24px / 16px), kortelė 1px border ir 16px radius. Emoji pašalintas iš CTA. STYLEGUIDE 4.7 atnaujintas.

### Taisyta

- Badge „Promptų anatomija“: paspaudimo zona (min-height/min-width 44px), z-index ir cursor, kad nuoroda būtų aiškiai paspaudžiama.
- A11y WCAG2AA: community skyriaus nuorodos „Promptų anatomija“ kontrastas (teksto spalva #040404).
- Hreflang skriptas (lt/en index + privatumas/privacy): null patikros prieš `getElementById(...).href`, kad nebūtų klaidos, jei elemento nėra.
- Hreflang `<link>`: pradinis `href=""` pakeistas į `href="#"` – HTML validatoriumi leidžiama, skriptas vėliau nustato tikrus URL.
- package.json: „serve“ įtrauka sutvarkyta; lint:js naudoja `npx eslint` (veikia be globalaus eslint).

### Pašalinta

- Root `privatumas.html`: nenaudojamas (kanoniniai puslapiai – `lt/privatumas.html`, `en/privacy.html`). docs/DOCUMENTATION.md inventoriuje atnaujinta nuoroda į lt/privatumas.html ir en/privacy.html.

### Deprecated

- (tuščia)

### Saugumas

- (tuščia)

---

## [1.0.0] - 2026-02-18

### Prideta

- Pradinė DI Promptų Biblioteka: 8 promptai, interaktyvus dizainas, kopijavimo funkcija.
- Dokumentacija: README.md, INTEGRACIJA.md, AGENTS.md, .cursorrules, feedback-schema.md.
- CI: lint, testai, a11y (pa11y) per .github/workflows/ci.yml.
- PR šablonas ir agentų commit prefiksai.

### Pakeista

- (pirmas release – nėra ankstesnių pakeitimų)

### Taisyta

- (nėra)
