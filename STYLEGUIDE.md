# DI Promptų Biblioteka – stiliaus gidas (SOT_Marketingas)

**Versija:** 1.1  
**Data:** 2026-02-18  
**Kalba:** LT

Šis dokumentas aprašo spalvų gamą, tipografiją ir komponentų stilius projekte – SOT_Marketingas (Rinkodaros vadovo AI operacinė sistema). Oranžinė pagrindinė paletė pasirinkta dėl aukštesnio CTA.

---

## 1. Spalvų paletė

### 1.1 Pagrindinės spalvos

| Kintamasis | Hex | Paskirtis | WCAG pastaba |
|------------|-----|-----------|--------------|
| `--bg` | `#F7F8FA` | Puslapio fonas | Tekstas `--text` ant jo atitinka AA |
| `--text` | `#1A202C` | Pagrindinis tekstas, antraštės | Kontrastas ant `--bg` > 4.5:1 |
| `--text-light` | `#4A5568` | Antrinis tekstas, meta | Kontrastas ant `--bg` > 4.5:1 |
| `--white` | `#FFFFFF` | Kortelių fonas, mygtukų tekstas | Naudoti ant tamsių fonų (ant oranžinės CTA atitinka AA) |

### 1.2 Akcentai (brand) – oranžinė CTA paletė

| Kintamasis | Hex | Paskirtis | Naudojimas |
|------------|-----|-----------|------------|
| `--accent-primary` | `#EA580C` | Pagrindinė oranžinė (aukštesnis CTA) | CTA mygtukai, hero, progreso juosta |
| `--accent-primary-hover` | `#C2410C` | Tamsesnė oranžinė | Hover būsena CTA |
| `--accent-gold` | `#EA580C` | Sutapatintas su primary oranžine | Badge, focus ring, paryškinti elementai |
| `--accent-gold-dark` | `#C2410C` | Tamsesnė oranžinė atmaina | Hover, numerio badge |
| `--accent-dark` | `#3C485A` | Antrinis akcentas (tamsiai pilka) | Outline mygtukai, borders, antraštės |
| `--accent-dark-hover` | `#2D3848` | Hover būsena | Antrinių mygtukų hover |

**Kontrastas:** Ant oranžinės (`--accent-primary`, `--cta-bg`) naudoti **baltą tekstą** (`--white`) – atitinka WCAG AA. Ant `--accent-dark` – **baltas tekstas** (`--white`).

### 1.3 Tertiarinė (bibliotekos identitetas)

| Kintamasis | Hex | Paskirtis |
|------------|-----|-----------|
| `--tertiary` | `#0D9488` | Teal – kategorijos, „Kas toliau?“ blokas, info box |
| `--tertiary-light` | `#CCFBF1` | Šviesus teal fonas |

### 1.4 Semantinės ir pagalbinės

| Kintamasis | Naudojimas |
|------------|------------|
| `--cta-bg` | `#EA580C` – pagrindinis CTA fonas (hero mygtukas, „Kopijuoti promptą“) |
| `--cta-hover` | `#C2410C` – CTA hover |
| `--blue` | Sutapatintas su `--accent-dark` (3C485A) – objektų rėmeliai, antraštės |
| `--blue-light` | `#E8ECF0` – šviesus fonas gradientuose |
| `--orange` | `#EA580C` – pagrindinė oranžinė (suderinta su CTA) |
| `--orange-light` | `#FFF7ED` – šviesus oranžinės atspalvis (instrukcijos, progreso wrap, code-block hover) |
| `--green` | `#38A169` – sėkmės būsena (toast, checkbox, „Nukopijuota“) |
| `--purple` | `#6B5B95` – rezervuota (nenaudojama pagrindiniuose komponentuose) |
| `--border` | `#CBD5E0` – rėmeliai, atskyrimai |
| `--community-cta-green` | `#0E7A33` – bendruomenės CTA (hierarchija – atskirti nuo pagrindinio oranžinio) |
| `--community-cta-green-hover` | `#0B6B2D` – hover būsena |

---

## 2. Hero ir gradientai

- **Hero (header):** Horizontalus gradientas (to right): šilta oranžinė atmaina – suderinta su CTA.  
  - `--hero-gradient-start: #C2410C`, `--hero-gradient-mid: #EA580C`, `--hero-gradient-end: #F97316`.
  - **Overlay:** 10% tamsesnis sluoksnis (`rgba(0,0,0,0.1)`) – tekstas aiškesnis, premium pojūtis.
- **CTA:** `--cta-bg: #EA580C` (oranžinė) – pagrindinis veiksmas; hover `--cta-hover: #C2410C`. Baltas tekstas ant oranžinės atitinka WCAG AA.
- **Prompt kortelės header:** `linear-gradient(to right, var(--blue-light), var(--orange-light))`, apatinis border: `--accent-dark`.

---

## 3. Tipografija

- **Šeima:** `'Inter', -apple-system, sans-serif`
- **Kodas:** `'JetBrains Mono', monospace`
- **Pagrindinis teksto dydis:** 18px (body), 16–19px sekcijose
- **Antraštės:** 22–52px, svoris 700–800 (priklausomai nuo lygio)
- **Hierarchija:** h1 (hero) 52px/800, h2 (sekcijos) 22–32px/800, meta tekstas 13–15px/700
- **Letter-spacing:** hero h1 `-0.01em` (ne per suspausta), badge (caps) `0.1em` (daugiau oro)
- **En-dash:** skaičiuose be tarpų (pvz. 30–50%); subtekste su tarpais („…šablonais – rezultatai…“)

---

## 4. Komponentai

### 4.1 Mygtukai

- **Pagrindinis (CTA):** `background: var(--cta-bg)` (oranžinė), `color: white`, `border-radius: 12px`, hover – `--cta-hover`, `translateY(-2px)`, focus-visible – `outline 3px var(--accent-gold)`.
- **Sėkmės būsena:** `background: var(--green)` (pvz. „Nukopijuota“).
- **Antrinis (nuorodos „Kas toliau?“):** `background: var(--tertiary)`, hover `#0f766e`, focus-visible – oranžinio ringas.

### 4.2 Badge ir žymos

- **Hero badge:** pusiau skaidrus baltas fonas, baltas tekstas.
- **Kategorija (prompt kortelėje):** `background: var(--tertiary-light)`, `color/border: var(--tertiary)`.
- **Numeris (prompt kortelėje):** `background: var(--accent-gold)`, `color: var(--text)` (tamsus tekstas dėl kontrasto).

### 4.3 Progreso juosta

- **Track:** `background: var(--border)`.
- **Užpildas:** `background: var(--accent-gold)`.
- **Wrap:** `background: var(--orange-light)`, `border: 2px solid var(--accent-gold)`.

### 4.4 Code block (promptų laukas)

- **Border:** `var(--accent-dark)`.
- **Hover:** `background: var(--orange-light)`, `border-color: var(--accent-gold)`.
- **Focus-visible:** `outline 3px var(--accent-gold)`.
- **„Spausk čia ir nukopijuok“ etiketė:** `background: var(--accent-dark)`, baltas tekstas.

### 4.5 Info box

- **Fonas:** `var(--tertiary-light)`, **border ir antraštė:** `var(--tertiary)`.

### 4.6 Instrukcijų blokas

- **Fonas:** `var(--orange-light)`, **border:** `var(--accent-gold)`, numeracija ir code – aukso atspalviai, antraštė – `var(--accent-dark)`.

### 4.7 Bendruomenė (community) CTA

- **Hierarchija:** vienas pagrindinis CTA (WhatsApp), antrinis – outline („Promptų anatomija“). Jokio glow – tik subtilus šešėlis.
- **Pagrindinis CTA (`.community-cta-primary`):** vienas brand green – `--community-cta-green: #0E7A33`, hover `--community-cta-green-hover: #0B6B2D`. Šešėlis: `0 6px 16px rgba(0,0,0,0.12)` (be glow). `border-radius: 12px`, font 18px / 600. Hover: `scale(1.02)`. Focus-visible – `outline 3px var(--accent-gold)`.
- **Antrinis CTA (`.community-cta-secondary`):** outline stilius – `border: 2px solid var(--accent-dark)`, permatomas fonas, `margin-top: 16px`. Hover – šviesus fonas (`--blue-light`).
- **Kortelė:** `border: 1px solid var(--border)`, `border-radius: 16px`, šviesus šešėlis. Vertikalūs tarpai: h2 → 16px → subtext → 24px → primary CTA → 16px → secondary link.
- **Antraštė:** dvi eilutės („Nori daugiau?“ / „Prisijunk prie WhatsApp grupės.“) – mažesnis skaitymo tankis.

---

## 5. Prieinamumas (a11y)

- Visi interaktyvūs elementai turi **focus-visible** būseną (3px outline, dažniausiai `--accent-gold` arba `--accent-dark`).
- **Kontrastas:** Tekstas ant fonų atitinka WCAG AA (normalus tekstas ≥ 4.5:1).
- **Redukuotas judesys:** `@media (prefers-reduced-motion: reduce)` – animacijos ir perėjimai sumažinami iki 0.01ms.
- Skip link, ARIA atributai ir semantinė struktūra išlaikomi pagal projekto taisykles.

---

## 6. Failų nuorodos

- Spalvos ir komponentai implementuoti: [index.html](index.html) (CSS bloke, `:root` ir atitinkamos klasės).
- Planas: žr. planą „Promptų Anatomija spin-off UI/UX“ (spalvų gama, vizualika, prioritetai).

---

**Paskutinis atnaujinimas:** 2026-02-18
