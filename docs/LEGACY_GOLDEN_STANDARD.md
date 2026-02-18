# Legacy Golden Standard – DI Promptų Biblioteka (SOT_Marketingas)

**Tikslas:** Dabartinis kodas yra atskaitos taškas (legacy golden standard). Keičiant **turinį** (promptus, antraštes, aprašymus) – būtina laikytis šios struktūros ir konvencijų. Struktūros, ID, CSS klasių ir JavaScript API nekeičiame be QA patvirtinimo ir dokumento atnaujinimo. Projektas: SOT_Marketingas (10 promptų rinkodaros sistemai).

**Versija:** 1.3  
**Data:** 2026-02-18  
**Kalba:** LT

---

## 1. Santrauka

| Kategorija | Fiksuota (nekeičiame keisdami turinį) | Leidžiama keisti (turinys) |
|------------|----------------------------------------|----------------------------|
| **HTML** | Struktūra: `<main id="main-content">`, sekcijos, 10× `<article class="prompt">`, id `block1`–`block10`, `prompt1`–`prompt10`, data-* atributai | Tekstai: hero h1/p, .objectives sąrašas, instrukcijos, .prompt-title, .prompt-desc, `<pre class="code-text">` turinys, .info-content, .next-steps, .community, .footer, privatumas.html |
| **CSS** | `:root` kintamieji, komponentų klasės (.code-block, .btn, .toast, .progress-bar ir kt.) – žr. [STYLEGUIDE.md](../STYLEGUIDE.md) | Nėra (turinio keitimas neturi keisti klasių ar layout) |
| **JS** | IIFE, CONFIG, selectText, copyPrompt, handleCodeBlockKeydown, fallbackCopy, showSuccess/showError/showToast, localStorage raktai `di_prompt_done_1`…`10`, debounce; HTML kviečia onclick/onkeydown | Nėra |
| **A11y** | Skip link `#main-content`, role="button"/tabindex="0" ant .code-block, aria-label mygtukams ir checkbox, aria-live/role="progressbar", toast role="status" | Nėra (prieinamumo atributų reikšmes keisti tik pagal reikalavimus, nekeičiant struktūros) |

---

## 2. HTML struktūros schema

```
index.html
├── <a class="skip-link" href="#main-content">
├── <div class="container">
│   └── <main id="main-content">
│       ├── <header class="header">        (hero, badges, h1, p, .header-cta)
│       ├── <section class="objectives">    (h2#objectives-title, ul > li)
│       ├── <section class="instructions"> (h2#instructions-title, ol > li)
│       ├── <div class="progress-wrap" id="progressIndicator">
│       │   ├── <p id="progressText">
│       │   └── <div class="progress-bar" role="progressbar" aria-valuenow/min/max>
│       │       └── <div class="progress-bar-fill" id="progressBarFill">
│       ├── 10× <article class="prompt">
│       │   ├── <div class="prompt-header">
│       │   │   ├── <div class="prompt-meta"> (.number, .category, .prompt-time)
│       │   │   ├── <h2 class="prompt-title">
│       │   │   └── <p class="prompt-desc">
│       │   ├── <div class="prompt-body">
│       │   │   ├── <div class="code-block" id="blockN" role="button" tabindex="0" onclick="selectText(this)" onkeydown="handleCodeBlockKeydown(event, this)">
│       │   │   │   └── <pre class="code-text" id="promptN">  ← TURINYS KEICIAMAS
│       │   │   └── <div class="info-box"> (.info-icon, .info-content: strong + p)  ← TURINYS KEICIAMAS
│       │   └── <div class="prompt-footer">
│       │       ├── <p class="prompt-cta">
│       │       ├── <button class="btn" onclick="copyPrompt(this, 'promptN')" data-prompt-id="promptN" aria-label="...">
│       │       └── <label class="prompt-done-wrap">
│       │           └── <input type="checkbox" class="prompt-done" data-prompt-id="N" aria-label="...">
│       ├── <section class="next-steps">   (h2#next-steps-title, p, .next-steps-links > a)
│       ├── <section class="community" id="community">
│       └── <footer class="footer">
├── <textarea class="hidden" id="hiddenTextarea">
└── <div class="toast" id="toast" role="status" aria-live="polite">
```

**Būtini ID ir atributai (nekeisti):**

- `main-content`, `progressIndicator`, `progressText`, `progressBarFill`, `toast`, `hiddenTextarea`
- Kiekvienam promptui: `id="block1"` … `id="block10"`, `id="prompt1"` … `id="prompt10"`
- Mygtukas: `data-prompt-id="prompt1"` … `"prompt10"`
- Checkbox: `data-prompt-id="1"` … `"10"`
- localStorage raktai: `di_prompt_done_1` … `di_prompt_done_10` (naudojami JS)

---

## 3. JavaScript API (fiksuota)

- **selectText(element)** – pasirenka tekstą .code-block `<pre>` elemente; kviečiamas iš onclick ir onkeydown (Enter/Space).
- **copyPrompt(button, promptId)** – kopijuoja promptą pagal `promptId` (pvz. `'prompt1'`) į mainų atmintinę; kviečiamas iš .btn onclick.
- **handleCodeBlockKeydown(event, element)** – klaviatūros navigacija code-block (Enter/Space).
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

**Paskutinis atnaujinimas:** 2026-02-18
