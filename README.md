# SOT_Marketingas – Rinkodaros vadovo AI operacinė sistema

📚 **10 promptų rinkodaros sistemai: kasdienis turinys, lead'ai, metrikos. Plan → Kurk → Distribuok → Matuok → Spręsk.**

## Apie projektą

Šis projektas yra interaktyvi HTML platforma (SOT_Marketingas) – Rinkodaros vadovo AI operacinė sistema. Integruota turinio ir distribucijos sistema: 30 dienų planas, repurpose mašina, LinkedIn, video, performance analizė, objection handling, lead magnet, case study, topical cluster ir MASTER PROMPT.

### Funkcijos

- ✅ **10 specializuotų promptų** rinkodaros sistemai (MUST, SHOULD, WANT, MASTER)
- 🎯 **Interaktyvus dizainas** su oranžine CTA palete (aukštesnis CTA)
- 📋 **Automatinis tekstų kopijavimas** į mainų atmintinę
- 📱 **Responsive dizainas** – veikia visuose įrenginiuose (Mobile UI First)
- 🎨 **Minimali aplikacija** – **nerinkime jokių vartotojų duomenų**; kontaktų forma šiame etape išjungta

## Promptų sąrašas

1. **30 dienų turinio sistema** – 4 kolonos (Autoritetas, Problema, Case, Pasiūlymas)
2. **One Insight → 7 formatai** – Repurpose mašina (LinkedIn, carousel, video, email, landing, ad, hook)
3. **LinkedIn Authority Post** – 150–200 žodžių su hook, proof, CTA
4. **30s Short-Form Video scenarijus** – Hook, 3 punktai, pavyzdys, CTA
5. **Performance → Sprendimas** – Kasdienė analizė: kas neveikia, ką testuoti, ką stabdyti
6. **Objection Handling Generatorius** – 10 turinio vienetų iš klientų objection'ų
7. **Lead Magnet Post + DM seka** – Postas + 4 žinučių follow-up (deliver → kvalifikacija → vertė → pasiūlymas)
8. **Case Study struktūra** – Problema, sprendimas, procesas, rezultatas, pamokos, CTA
9. **Topical Cluster (SEO autoritetas)** – 1 pillar + 8 supporting temas, vidinės nuorodos, CTA
10. **MASTER PROMPT** – Vienas valdymo centras: 30 d. struktūra, 5 turinio vienetai, repurpose, hipotezės, veiksmai

## Kaip naudoti

1. Atidarykite `index.html` naršyklėje
2. Pasirinkite promptą ir spauskite ant jo – tekstas automatiškai pažymėsis
3. Spauskite mygtuką **"Kopijuoti promptą"** arba naudokite `Ctrl+C` / `Cmd+C`
4. Įklijuokite į ChatGPT, Claude ar kitą DI įrankį
5. Pakeiskite `[auditorija]`, `[skausmas]`, `[USP]`, `[kanalas]` ir kitus laukus savo duomenimis

## Technologijos

- **HTML5** - Semantinė struktūra
- **CSS3** - Modernus dizainas su CSS kintamaisiais
- **Vanilla JavaScript** - Interaktyvumas be priklausomybių
- **Google Fonts** - Inter ir JetBrains Mono šriftai

## Struktūra

```
.
├── index.html          # Pagrindinis puslapis
├── README.md           # Dokumentacija
├── CHANGELOG.md        # Versijų istorija (Keep a Changelog)
├── privatumas.html     # Privatumo politika
├── package.json        # Dev: lint, testai, a11y
├── DEPLOYMENT.md       # Deploy instrukcijos (GitHub Pages)
├── docs/
│   ├── DOCUMENTATION.md
│   ├── QA_STANDARTAS.md   # QA standartas (spinoff01)
│   └── TESTAVIMAS.md      # Gyvo testavimo žurnalas
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── deploy.yml
│   └── PULL_REQUEST_TEMPLATE.md
└── .gitignore
```

## Privatumas

- **Minimali aplikacija:** šiuo metu **nerinkime jokių asmens duomenų**. Visas naudojimas vyksta tik tavo įrenginyje (kopijavimas, „Pažymėjau kaip atlikau“ – localStorage).
- **Privatumo politika:** [privatumas.html](privatumas.html) – aprašymas, kad duomenų nerinkime; jei vėliau bus įjungta kontaktų forma, bus atnaujinta.

## Deployment ir gyvas testavimas

- **Deploy:** GitHub Pages per [.github/workflows/deploy.yml](.github/workflows/deploy.yml). Instrukcijos: [DEPLOYMENT.md](DEPLOYMENT.md).
- **Production URL:** (užpildyti po pirmo deploy, pvz. `https://<org>.github.io/<repo>/`)
- **QA standartas:** [DITreneris/spinoff01](https://github.com/DITreneris/spinoff01). Projektas laikosi [docs/QA_STANDARTAS.md](docs/QA_STANDARTAS.md); po deploy – gyvas testavimas pagal [docs/TESTAVIMAS.md](docs/TESTAVIMAS.md).

## Reikalavimai

- **Naudojimui:** Nėra priklausomybių – tiesiog atidarykite HTML failą naršyklėje
- **Development/CI:** `npm install` ir `npm run lint:html`, `npm run lint:js` (žr. package.json)

## Kontaktų rinkimas (vėlesniems etapams)

Dabartinė versija minimali – kontaktų formos nėra. Jei vėliau reikės rinkti atsiliepimus, integracijos instrukcijos saugomos repozitorijoje (vėlesniems etapams).

## Licencija

Šis projektas yra atviro kodo ir gali būti naudojamas laisvai.

## Autorius

Sukurta rinkodaros vadovams ir komandoms, kurios nori sistemingai generuoti turinį, kurti lead'us ir matuoti rezultatus.

---

**Sėkmės rinkodaroje! 🚀**
