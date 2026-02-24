# Deployment – DI Promptų Biblioteka

**QA standartas:** [DITreneris/spinoff01](https://github.com/DITreneris/spinoff01)

**Production URL (šis projektas):** https://ditreneris.github.io/marketingas/

---

## Įspėjimas: į kurią repo keliama

- Šis projektas deploy'inamas **tik** į repo **marketingas** → URL `https://ditreneris.github.io/marketingas/`.
- Lokaliai yra keli remotes: `marketing` (biblioteka), `spinoff01`, **`marketingas`**.
- **Nepushinti į kitas repozitorijas** per klaidą. Naudoti tik: `git push marketingas main`.

---

## 1. GitHub Pages (rekomenduojama)

### Pirmą kartą – deploy į marketingas

1. **GitHub:** sukurti repozitoriją **marketingas** (jei dar nėra) organizacijoje/vartotoje DITreneris. Repo pavadinimas turi būti būtent **marketingas**, kad URL būtų `https://ditreneris.github.io/marketingas/`.
2. **Lokaliai:** įsitikinti, kad remote `marketingas` nurodo į teisingą repo:
   ```bash
   git remote -v
   # marketingas  https://github.com/DITreneris/marketingas.git (fetch)
   # marketingas  https://github.com/DITreneris/marketingas.git (push)
   ```
3. **Push tik į marketingas:** `git push marketingas main` (ne `git push marketing main` ir ne `git push` be remote vardo).
4. **GitHub (repo marketingas):** Settings → Pages → **Build and deployment** → Source: **GitHub Actions**.
5. Po pirmo push workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) paleidžiamas automatiškai: testai → deploy.

### Vėlesni deploy

- Kiekvienas `git push marketingas main` paleidžia testus ir deploy į https://ditreneris.github.io/marketingas/.

### URL

- Šis projektas: `https://ditreneris.github.io/marketingas/`
- Bendrai: `https://<org-or-username>.github.io/<repo-name>/`

### Rankinis deploy (repo marketingas)

- **Actions** → workflow **Deploy to GitHub Pages** → **Run workflow** (branch: `main`).

---

## 2. Lokalus tikrinimas prieš deploy

```bash
npm install
npm test
```

A11y (pasirinktinai):

```bash
npx serve -s . -l 3000
# Kitoje terminale:
npx pa11y http://localhost:3000/ --standard WCAG2AA --ignore "warning"
npx pa11y http://localhost:3000/privatumas.html --standard WCAG2AA --ignore "warning"
```

---

## 3. Po deploy – gyvas testavimas

- Atlikti gyvą testavimą pagal [docs/TESTAVIMAS.md](docs/TESTAVIMAS.md).
- Rezultatus įrašyti į testavimo žurnalą (tame pačiame faile arba susietame).

---

## 4. Troubleshooting

| Problema | Sprendimas |
|----------|------------|
| Pages rodo 404 | Patikrinti, ar Settings → Pages šaltinis = **GitHub Actions**. |
| Workflow nepaleidžiamas | Patikrinti, ar failas `.github/workflows/deploy.yml` yra `main` šakoje. |
| **Deploy workflow failed** | Actions → atidaryti nepavykusį run → žiūrėti **test** job: jei nepraėjo `npm test`, lokaliai paleisti `npm test` ir taisyti; jei nepraėjo **deploy** job – tikrinti environment/permissions. |
| **CI workflow failed** | Dažniausiai `pa11y` (a11y klaidos) arba `npm test`. Lokaliai: `npm test`, tada `npx serve -s . -l 3000` ir `npx pa11y http://localhost:3000/ --standard WCAG2AA`. |
| **pa11y: No usable sandbox** (CI) | Chromium GitHub Actions aplinkoje reikalauja `--no-sandbox`. Projektas turi `.pa11yrc.json` su `launchOptions.args`. Jei vis tiek nepavyksta – pabandykite `chromeLaunchOptions` vietoj `launchOptions` tame faile. |
| Svetainė tuščia / neteisingas kelias | Projektas – statinis iš root; `path: .` – teisingas. Jei naudojate subfolderį, pakeisti `path`. |

---

## 5. Susiję dokumentai

- [docs/QA_STANDARTAS.md](docs/QA_STANDARTAS.md) – QA standartas (nuoroda į spinoff01)
- [docs/TESTAVIMAS.md](docs/TESTAVIMAS.md) – gyvo testavimo dokumentacija
- [AGENTS.md](AGENTS.md) – release ir QA procesas
