# Changelog

Visi reikšmingi projekto pakeitimai dokumentuojami šiame faile.

Formatas pagal [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), versijavimas – [Semantic Versioning](https://semver.org/).

## [Nereleisuota]

### Prideta

- **Pedagoginė specifikacija (2026-02-19):** docs/PEDAGOGINES_SPECIFIKACIJA.md – pedagoginiai tikslai, auditorija, terminologija ir paaiškinimai, „paprasta kalba“ kriterijai, vartotojo kelionė. docs/DOCUMENTATION.md – į inventorių įtraukti PEDAGOGINES_SPECIFIKACIJA.md ir TURINIO_AUDITAS_DETALUS.md.
- **Spin-off Nr. 2:** Rinkodaros vadovo AI operacinė sistema – 10 promptų (30 dienų turinys, Repurpose, LinkedIn, 30s video, Performance→Sprendimas, Objection Handling, Lead Magnet+DM, Case Study, Topical Cluster, MASTER PROMPT).
- **Oranžinė CTA paletė:** Pagrindinė spalvų paletė pakeista į oranžinę (`--accent-primary`, `--cta-bg`, hero gradientas) dėl aukštesnio CTA; STYLEGUIDE.md atnaujintas.
- QA ir dokumentų valdymo procesas: CHANGELOG.md, docs/DOCUMENTATION.md, integracija su AGENTS.md ir .cursorrules.
- Deploy: GitHub Pages workflow (.github/workflows/deploy.yml), DEPLOYMENT.md.
- QA standartas: docs/QA_STANDARTAS.md su nuoroda į [DITreneris/spinoff01](https://github.com/DITreneris/spinoff01).
- Gyvo testavimo dokumentacija: docs/TESTAVIMAS.md (scenarijai ir žurnalas).
- Ryšys su pagrindiniu produktu: badge „Promptų anatomija“ → https://ditreneris.github.io/anatomija/, nuorodos footer ir community skyriuje.
- Favicon: favicon.svg (SVG, „P“ ant teal fono), nuorodos index.html ir privatumas.html.

### Pakeista

- **Poliravimas – UI/UX ir a11y (2026-02-19):** Spacing: suvienodinta sekcijų margin-bottom (prompt 32px), prompt-header/footer padding 32px. Focus: paliktas tik `:focus-visible` form-input, .btn, .code-block; outline-offset hero CTA ir outline mygtukų 2px. Transitions: .next-steps-links a, .cta-secondary – pridėtas transition hover būsenoms. ARIA: progreso juosta – aria-label „Progresas: X iš 10 promptų“ (atnaujinama JS), info-box – „Informacija: promptas N“ (N 1–10). Mažų ekranų (375px) .footer padding 24px 16px. STYLEGUIDE.md sinchronizuotas su implementacija: hero vertikalus gradientas, spalvos #c75515/#b54f14, hover translateY(-1px), numerio badge color var(--white), community CTA hover; pridėta border-radius skalė (4.8).
- **Lead generator (2026-02-19):** „Nemokamo vediklio“ / „vediklis“ pakeista į „Lead generator“ – vediklis šioje aplikacijoje netinka. index.html (antraštė, aprašymas, prompt7, next-steps, footer, aria-label), README, docs/PEDAGOGINES_SPECIFIKACIJA.md.
- **Promptų ir turinio draugiškumas (2026-02-19):** TURINIO_AUDITAS ir pedagoginė spec. įgyvendinti: objectives (lead'us→potencialius klientus), žodynėlis (hook, CTR, reach, B2B), promptų antraštės/aprašymai (30s Short-Form→30 sek. video, MASTER PROMPT→Pagrindinis promptas), promptų tekste (Carousel/Landing hero→lietuviškai, lead generation/CMO/spamo→lietuviški atitikmenys, B2B paaiškintas), CTA tekstai varijuoti, next-steps ir footer (MASTER PROMPT, Lead magnet→Nemokamo vediklio, CTA fokusas→Veiksmų fokusas). Aria-label: „lead magnet versija“→„nemokamo vediklio versija“. README ir privatumas.html – žargonas pakeistas į lietuviškus atitikmenis, DI paaiškintas, localStorage (naršyklės vietinė atmintinė), „panašiai“→„panašią formą“.

- **Turinio ir kalbos auditas (2026-02-18):** Žargono mažinimas – DI paaiškintas, glosarė (USP, CTA, KPI), „fluff“→„tuščios frazės“, „proof“→„įrodymai“, „objection“→„prieštaravimai“, „repurpose“→„vienos idėjos daug formatų“, „lead magnet“→„nemokamas vediklis“, „insight“→„idėja“, „case study“→„kliento istorija“, „pillar/supporting“→„pagrindinė tema ir subtemos“. Kategorijos MUST/SHOULD/WANT/MASTER pakeistos į Pradžia/Įgūdžiai/Plėtra/Viskas kartu.
- **Turinio pataisymai (2026-02-18):** Short-form→Trumpas formatas, scroll'inimą→slinkimą, repurpose (prompt10)→vienos idėjos daug formatų, case'ai→klientų istorijos; encoding ir gramatikos pataisymai; žargonas: objection'ų→prieštaravimų, Lead'ai→Potencialūs klientai, follower'io→sekėjo, lead'ą→potencialų klientą.
- **Privatumas:** privatumas.html pavadinimas suderintas su index.html (DI Promptų biblioteka).
- **Spalvų paletė:** pridėti kintamieji --tertiary-dark, --tertiary-hover, --green-dark, --error, --bg-subtle; hardcoded spalvos pakeistos į kintamuosius; numerio badge – baltas tekstas (WCAG AA); STYLEGUIDE.md atnaujintas.
- **Dokumentacija:** docs/DOCUMENTATION.md papildytas „Greita schema – kas kur ir kam“.
- **Struktūra 8 → 10 promptų:** index.html – pridėti block9/prompt9 (Topical Cluster), block10/prompt10 (MASTER PROMPT); progress bar ir JS ciklas atnaujinti į 10; next-steps ir footer. tests/structure.test.js ir docs/LEGACY_GOLDEN_STANDARD.md atnaujinti į 10 promptų.
- **Turinys:** Hero, objectives, instructions ir visi 10 promptų pakeisti į Spin-off Nr. 2 turinį (rinkodaros sistema); placeholder'iai [auditorija], [skausmas], [USP], [kanalas] ir kt.
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
