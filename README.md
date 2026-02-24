# Spin-off Nr. 2 – Rinkodaros vadovo AI operacinė sistema

📚 **10 promptų rinkodaros sistemai: kasdienis turinys, potencialūs klientai, rodikliai. Plan → Kurk → Distribuok → Matuok → Spręsk.**

## Apie projektą

Šis projektas yra interaktyvi HTML platforma (Spin-off Nr. 2) – Rinkodaros vadovo AI operacinė sistema. Integruota turinio ir distribucijos sistema: 30 dienų planas, vienos idėjos daug formatų, LinkedIn, video, rezultatų analizė, prieštaravimų apdorojimas, lead generator, kliento istorijos, temų grupė ir pagrindinis promptas (valdymo centras).

### Funkcijos

- ✅ **10 specializuotų promptų** rinkodaros sistemai (Pradžia, Įgūdžiai, Plėtra, Viskas kartu)
- 🎯 **Interaktyvus dizainas** su oranžine CTA palete (aukštesnis CTA)
- 📋 **Automatinis tekstų kopijavimas** į mainų atmintinę
- 📱 **Responsive dizainas** – veikia visuose įrenginiuose (Mobile UI First)
- 🎨 **Minimali aplikacija** – **nerinkime jokių vartotojų duomenų**; kontaktų forma šiame etape išjungta

## Promptų sąrašas

1. **30 dienų turinio sistema** – 4 kolonos (Autoritetas, Problema, Pavyzdys, Pasiūlymas)
2. **Viena idėja → 7 formatai** – Vienos idėjos daug formatų (LinkedIn, karuselė, video, el. laiškas, titulinis ekranas, reklama, įžūgis)
3. **Linkedin Autoriteto Kūrimas** – 150–200 žodžių su įžanginiu kabliuku, įrodymais, raginimu veikti
4. **30 sek. video scenarijus** – Įžanginis kabliukas, 3 punktai, pavyzdys, raginimas veikti
5. **Kasdienė analizė (Veikla→Sprendimas)** – Iš rodiklių suprask: kas neveikia, kodėl, ką daryti
6. **Prieštaravimų apdorojimas** – 10 turinio vienetų iš klientų prieštaravimų
7. **Lead generator postas + DM seka** – Postas + 4 žinučių seka (pristatyti → kvalifikacija → vertė → pasiūlymas)
8. **Kliento istorijos struktūra** – Problema, sprendimas, procesas, rezultatas, pagrindinės mintys, raginimas veikti
9. **Temų grupė (SEO autoritetas)** – 1 pagrindinė tema + 8 subtemos, vidinės nuorodos, raginimas veikti
10. **Pagrindinis promptas (valdymo centras)** – Vienas valdymo centras: 30 d. struktūra, 5 turinio vienetai, vienos idėjos daug formatų, hipotezės, veiksmai

## Kaip naudoti

1. Atidarykite `index.html` naršyklėje
2. Pasirinkite promptą ir spauskite ant jo – tekstas automatiškai pažymėsis
3. Spauskite mygtuką **"Kopijuoti promptą"** arba naudokite `Ctrl+C` / `Cmd+C`
4. Įklijuokite į ChatGPT, Claude ar kitą DI (dirbtinio intelekto) įrankį
5. Pakeiskite `[auditorija]`, `[galvos skausmas]`, `[unikalus pardavimo pasiūlymas]`, `[kanalas]` ir kitus laukus savo duomenimis

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
- **Production URL:** https://ditreneris.github.io/marketingas/ (deploy tik į repo **marketingas**, žr. [DEPLOYMENT.md](DEPLOYMENT.md))
- **QA standartas:** [DITreneris/spinoff01](https://github.com/DITreneris/spinoff01). Projektas laikosi [docs/QA_STANDARTAS.md](docs/QA_STANDARTAS.md); po deploy – gyvas testavimas pagal [docs/TESTAVIMAS.md](docs/TESTAVIMAS.md).

## Reikalavimai

- **Naudojimui:** Nėra priklausomybių – tiesiog atidarykite HTML failą naršyklėje
- **Development/CI:** `npm install` ir `npm run lint:html`, `npm run lint:js` (žr. package.json)

## Kontaktų rinkimas (vėlesniems etapams)

Dabartinė versija minimali – kontaktų formos nėra. Jei vėliau reikės rinkti atsiliepimus, integracijos instrukcijos saugomos repozitorijoje (vėlesniems etapams).

## Licencija

Šis projektas yra atviro kodo ir gali būti naudojamas laisvai.

## Autorius

Sukurta rinkodaros vadovams ir komandoms, kurios nori sistemingai generuoti turinį, kurti potencialius klientus ir matuoti rezultatus.

---

**Sėkmės rinkodaroje! 🚀**
