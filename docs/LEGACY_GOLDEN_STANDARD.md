# Legacy Golden Standard – DI Promptų Biblioteka (Spin-off Nr. 2)

**Tikslas:** Dabartinis kodas yra atskaitos taškas (legacy golden standard). Keičiant **turinį** (promptus, antraštes, aprašymus) – būtina laikytis šios struktūros ir konvencijų. Struktūros, ID, CSS klasių ir JavaScript API nekeičiame be QA patvirtinimo ir dokumento atnaujinimo. Projektas: Spin-off Nr. 2 (10 promptų rinkodaros sistemai).

**Versija:** 1.5  
**Data:** 2026-03  
**Kalba:** LT

**LT/EN lokalizacija:** Keičiant tik turinio tekstus ir `lang`/meta – DOM (id, class, data-*), a11y struktūra (role, aria-* pavadinimai) lieka tie patys abiem kalbom. **Terminologija:** LT – naudoti **DI** (dirbtinis intelektas), EN – naudoti **AI** (Artificial Intelligence). Žr. [LT_EN_UI_UX_REPORT.md](../LT_EN_UI_UX_REPORT.md), [docs/GILI_ANALIZE_LT_EN_TERMINOLOGIJA.md](GILI_ANALIZE_LT_EN_TERMINOLOGIJA.md).

**Sinchronizuota su kodu (2026-02-19):** skip-link „Pereiti prie turinio“, hero (Turinio DI sistema / rinkodaros vadovams, Spin-off Nr. 2, Gauti nemokamai), progress bar `aria-label` pradžia ir JS atnaujinimas, info-box `aria-label` „Informacija: promptas N“, puslapio title „Turinio DI sistema – rinkodaros vadovams“.

---

## 1. Santrauka

| Kategorija | Fiksuota (nekeičiame keisdami turinį) | Leidžiama keisti (turinys) |
|------------|----------------------------------------|----------------------------|
| **HTML** | Struktūra: `<main id="main-content">`, sekcijos, 10× `<article class="prompt">`, id `block1`–`block10`, `prompt1`–`prompt10`, data-* atributai | Tekstai: hero h1/p, .objectives sąrašas, instrukcijos, .prompt-title, .prompt-desc, `<pre class="code-text">` turinys, .info-content, .next-steps, .community, .footer, privatumas.html |
| **CSS** | `:root` kintamieji, komponentų klasės (.code-block, .btn, .toast, .progress-bar ir kt.) – žr. [STYLEGUIDE.md](../STYLEGUIDE.md) | Nėra (turinio keitimas neturi keisti klasių ar layout) |
| **JS** | IIFE, CONFIG, selectText, copyPrompt, handleCodeBlockKeydown, fallbackCopy, showSuccess/showError/showToast, localStorage raktai `di_prompt_done_1`…`10`, debounce; locale resolve, uiText, applyStaticLocaleText, LANG_KEY `di_promptu_biblioteka_lang`; HTML kviečia onclick/onkeydown | Nėra |
| **A11y** | Skip link `#main-content`, role="button"/tabindex="0" ant .code-block, aria-label mygtukams ir checkbox, aria-live/role="progressbar", toast role="status" | Nėra (prieinamumo atributų reikšmes keisti tik pagal reikalavimus, nekeičiant struktūros) |

**Promptų turinio formatas:** Kiekvieno prompto tekstas `<pre class="code-text">` laikosi šablono: **META** (vaidmuo su patirtimi, tikslas, auditorija, kontekstas), **INPUT** (konkretūs duomenys/placeholderiai, apribojimai), **OUTPUT** (formatas, struktūra, kalba, tonas). Keičiant turinį – išlaikyti šią struktūrą siekiant vienodo praktiškumo.

---

## 2. HTML struktūros schema

```
index.html
├── <a class="skip-link" href="#main-content">Pereiti prie turinio</a>
├── <div class="container">
│   └── <main id="main-content">
│       ├── <header class="header">        (hero: .header-badges, h1, p, .header-cta)
│       ├── <section class="objectives">   (h2#objectives-title, ul > li)
│       ├── <section class="instructions"> (h2#instructions-title, ol > li)
│       ├── <div class="progress-wrap" id="progressIndicator" aria-live="polite" aria-atomic="true">
│       │   ├── <p id="progressText">
│       │   └── <div class="progress-bar" role="progressbar" aria-valuenow/min/max aria-label="Progresas: 0 iš 10 promptų">
│       │       └── <div class="progress-bar-fill" id="progressBarFill">
│       ├── 10× <article class="prompt">
│       │   ├── <div class="prompt-header">
│       │   │   ├── <div class="prompt-meta"> (.number, .category, .prompt-time)
│       │   │   ├── <h2 class="prompt-title">
│       │   │   └── <p class="prompt-desc">
│       │   ├── <div class="prompt-body">
│       │   │   ├── <div class="code-block" id="blockN" role="button" tabindex="0" aria-label="Pasirinkti ir kopijuoti promptą N" onclick="selectText(this)" onkeydown="handleCodeBlockKeydown(event, this)">
│       │   │   │   └── <pre class="code-text" id="promptN">  ← TURINYS KEICIAMAS
│       │   │   └── <div class="info-box" role="note" aria-label="Informacija: promptas N"> (.info-icon, .info-content: strong + p)  ← TURINYS KEICIAMAS
│       │   └── <div class="prompt-footer">
│       │       ├── <p class="prompt-cta">
│       │       ├── <button class="btn" onclick="copyPrompt(this, 'promptN')" data-prompt-id="promptN" aria-label="Kopijuoti promptą N į mainų atmintinę">
│       │       └── <label class="prompt-done-wrap">
│       │           └── <input type="checkbox" class="prompt-done" data-prompt-id="N" aria-label="Pažymėti, kad atlikai šį žingsnį">
│       ├── <section class="next-steps">   (h2#next-steps-title, p, .next-steps-links > a)
│       ├── <section class="community" id="community">
│       └── <footer class="footer">
├── <textarea class="hidden" id="hiddenTextarea" aria-hidden="true">
└── <div class="toast" id="toast" role="status" aria-live="polite" aria-label="Kopijavimo pranešimas">
```

**Būtini ID ir atributai (nekeisti):**

- `main-content`, `progressIndicator`, `progressText`, `progressBarFill`, `toast`, `hiddenTextarea`
- Kiekvienam promptui: `id="block1"` … `id="block10"`, `id="prompt1"` … `id="prompt10"`
- Mygtukas: `data-prompt-id="prompt1"` … `"prompt10"`, `aria-label="Kopijuoti promptą N į mainų atmintinę"`
- Checkbox: `data-prompt-id="1"` … `"10"`, `aria-label="Pažymėti, kad atlikai šį žingsnį"`
- Progreso juosta: `.progress-bar` turi `aria-label="Progresas: 0 iš 10 promptų"` (pradžia); JS atnaujina į „Progresas: X iš 10 promptų“
- Info-box: `aria-label="Informacija: promptas N"` (N 1–10)
- localStorage raktai: `di_prompt_done_1` … `di_prompt_done_10` (naudojami JS)

---

## 3. JavaScript API (fiksuota)

- **selectText(element)** – pasirenka tekstą .code-block `<pre>` elemente; kviečiamas iš onclick ir onkeydown (Enter/Space).
- **copyPrompt(button, promptId)** – kopijuoja promptą pagal `promptId` (pvz. `'prompt1'`) į mainų atmintinę; kviečiamas iš .btn onclick.
- **handleCodeBlockKeydown(event, element)** – klaviatūros navigacija code-block (Enter/Space).
- **updateProgressIndicator()** – skaičiuoja „Pažymėjau kaip atlikau“ (localStorage), atnaujina `progressText`, `progressBarFill` plotį, `barEl.setAttribute('aria-valuenow', count)` ir `barEl.setAttribute('aria-label', 'Progresas: ' + count + ' iš 10 promptų')`.
- **CONFIG** – SELECTION_TIMEOUT, TOAST_DURATION, BUTTON_RESET_TIMEOUT, ERROR_TIMEOUT, DEBOUNCE_DELAY.
- **localStorage:** raktai `di_prompt_done_1` … `di_prompt_done_10`; reikšmės `'true'` / `'false'`.

Keičiant turinį **nepridėti** naujų `onclick`/`onkeydown` handlerių, nekeisti funkcijų pavadinimų, neištraukti JS į atskirą failą be proceso atnaujinimo (žr. [KODO_BAZES_ANALIZE.md](../KODO_BAZES_ANALIZE.md)).

---

## 4. .code-block komponentas (fiksuota)

`.code-block` turi pseudo-elementą `::before` su etikete „💡 Spausk čia ir nukopijuok“ (matoma hover/focus būsenose).

| Savybė | Reikšmė | Pastaba |
|--------|---------|---------|
| Etiketė | `content: '💡 Spausk čia ir nukopijuok'` | Nekeisti be Content/UI koordinacijos |
| Pozicija | `position: absolute`, `top: 12px`, `right: 20px`, `z-index: 1` | Etiketė **viduje** bloko viršuje – ne virš rėmelio (išvengti „palenkti po linija“) |
| Layout | `margin-top: 20px`, `margin-bottom: 24px` | Vieta virš pirmo code-block; etiketė nesikerta su prompt-header border |

Koreguojant `.code-block` ar `.prompt` CSS, patikrinti: etiketė matoma, nesikertanti su header riba.

---

## 5. Checklist prieš commit (Content / QA)

- [ ] Nepakeisti jokių `id` (block1–block10, prompt1–prompt10, progressText, progressBarFill, toast, main-content, hiddenTextarea).
- [ ] Nepakeisti `data-prompt-id` ant mygtukų ir checkbox (prompt1…prompt10 ir 1…10).
- [ ] Kiekvienas promptas lieka tos pačios struktūros: .prompt-header → .prompt-body (.code-block + .info-box) → .prompt-footer (.btn + .prompt-done).
- [ ] .code-block turi `onclick="selectText(this)"` ir `onkeydown="handleCodeBlockKeydown(event, this)"`; .btn – `onclick="copyPrompt(this, 'promptN')"` su atitinkamu N.
- [ ] Nauji ar pakeisti promptai naudoja tą patį HTML šabloną (article.prompt su tais pačiais klasėmis ir atributais).

---

## 6. Susiję dokumentai

- [index.html](../index.html) – pagrindinis puslapis (implementacija)
- [STYLEGUIDE.md](../STYLEGUIDE.md) – spalvų paletė, komponentai, tipografija
- [KODO_BAZES_ANALIZE.md](../KODO_BAZES_ANALIZE.md) – gili kodo analizė, neatitikimai, rekomendacijos
- [AGENTS.md](../AGENTS.md) – agentų rolės ir užduočių seka (skyrius „Užduočių seka ir golden standard“)
- [docs/DOCUMENTATION.md](DOCUMENTATION.md) – dokumentų inventorius

---

**Paskutinis atnaujinimas:** 2026-02-19
