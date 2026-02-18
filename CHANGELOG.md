# Changelog

Visi reikšmingi projekto pakeitimai dokumentuojami šiame faile.

Formatas pagal [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), versijavimas – [Semantic Versioning](https://semver.org/).

## [Nereleisuota]

### Prideta

- **SOT_Marketingas:** Rinkodaros vadovo AI operacinė sistema – 10 promptų (30 dienų turinys, Repurpose, LinkedIn, 30s video, Performance→Sprendimas, Objection Handling, Lead Magnet+DM, Case Study, Topical Cluster, MASTER PROMPT).
- **Oranžinė CTA paletė:** Pagrindinė spalvų paletė pakeista į oranžinę (`--accent-primary`, `--cta-bg`, hero gradientas) dėl aukštesnio CTA; STYLEGUIDE.md atnaujintas.
- QA ir dokumentų valdymo procesas: CHANGELOG.md, docs/DOCUMENTATION.md, integracija su AGENTS.md ir .cursorrules.
- Deploy: GitHub Pages workflow (.github/workflows/deploy.yml), DEPLOYMENT.md.
- QA standartas: docs/QA_STANDARTAS.md su nuoroda į [DITreneris/spinoff01](https://github.com/DITreneris/spinoff01).
- Gyvo testavimo dokumentacija: docs/TESTAVIMAS.md (scenarijai ir žurnalas).
- Ryšys su pagrindiniu produktu: badge „Promptų anatomija“ → https://ditreneris.github.io/anatomija/, nuorodos footer ir community skyriuje.
- Favicon: favicon.svg (SVG, „P“ ant teal fono), nuorodos index.html ir privatumas.html.

### Pakeista

- **Struktūra 8 → 10 promptų:** index.html – pridėti block9/prompt9 (Topical Cluster), block10/prompt10 (MASTER PROMPT); progress bar ir JS ciklas atnaujinti į 10; next-steps ir footer. tests/structure.test.js ir docs/LEGACY_GOLDEN_STANDARD.md atnaujinti į 10 promptų.
- **Turinys:** Hero, objectives, instructions ir visi 10 promptų pakeisti į SOT_Marketingas turinį (rinkodaros sistema); placeholder'iai [auditorija], [skausmas], [USP], [kanalas] ir kt.
- Community sekcija: hierarchija ir UX – vienas pagrindinis CTA (brand green #0E7A33, be glow, subtilus shadow), antrinis outline („Promptų anatomija“). Trumpesnė antraštė dviem eilutėm, vertikalūs tarpai (16px / 24px / 16px), kortelė 1px border ir 16px radius. Emoji pašalintas iš CTA. STYLEGUIDE 4.7 atnaujintas.

### Taisyta

- Badge „Promptų anatomija“: paspaudimo zona (min-height/min-width 44px), z-index ir cursor, kad nuoroda būtų aiškiai paspaudžiama.
- A11y WCAG2AA: community skyriaus nuorodos „Promptų anatomija“ kontrastas (teksto spalva #040404).

### Pašalinta

- (tuščia)

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
