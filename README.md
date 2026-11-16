# EN Web Developer — Sito vetrina e portfolio freelance

Sito web istituzionale e portfolio di uno sviluppatore web freelance rivolto a piccole e medie imprese (PMI). Presenta i servizi offerti (siti web, e-commerce, CMS, SEO), una raccolta di progetti realizzati con schede dettagliate e un form di contatto che invia messaggi via email.

- **Nome package**: `enwebsite` (`package.json`)
- **Brand del sito**: `EN Web Developer`
- **Versione**: `0.1.0`
- **Tipologia**: applicazione web frontend (Next.js App Router), sito vetrina / portfolio / landing di servizi professionali
- **Lingua dell'interfaccia**: italiano (`lang="it"`, `locale: it_IT`)

## Funzionalità principali

Le funzionalità elencate sono effettivamente implementate nel codice sorgente.

### Homepage (`/`)
- **HeroSection**: presentazione con call-to-action ("Richiedi un preventivo gratuito", "Vedi il portfolio"), contatore animato di progetti/clienti/rating, statistiche, garanzie di servizio e indicatore di scroll.
- **IntroSection**: problemi tipici delle PMI con relative soluzioni, benefici (SEO, velocità, facilità di aggiornamento, costi chiari), settori di riferimento e garanzie.
- **ServicesSection**: schede di servizio (sito web professionale, e-commerce, CMS, ecc.) con dettagli, cosa include, cose da sapere, tempi e destinatari.
- **ProcessSection**: percorso in 4 fasi (colloquio, preventivo scritto, costruzione, pubblicazione e assistenza).
- **TechMarquee**: scorrimento continuo (marquee CSS) del logo/stack tecnologico utilizzato.

### Servizi (`/servizi`)
- Descrizione dettagliata di ogni servizio digitale con vantaggi, svantaggi e soluzioni proposte, sezione FAQ e call-to-action finale.

### Portfolio (`/portfolio` e `/portfolio/[slug]`)
- Elenco dei progetti con immagine di copertina, tag tecnologici, anno e link al dettaglio.
- Pagine di dettaglio progetto generate staticamente (`generateStaticParams`) con galleria immagini, lightbox, funzionalità principali e link esterni (sito live / GitHub quando presenti).
- I dati dei progetti sono gestiti centralmente in `lib/projects.ts` (5 progetti: e-commerce, sito ristorante, gestionale farmacie, gestionale barbershop, portfolio fotografo).

### Contatti (`/contatti`)
- Form di contatto (nome, email, servizio, budget, messaggio) con invio via API route `POST /api/contact` tramite **Resend**.
- Validazione lato server dei campi obbligatori e del formato email.
- Stati del form: inattivo, invio in corso, successo, errore.
- Dati di contatto diretti (email, telefono, posizione), link ai social (LinkedIn, GitHub, Instagram, Facebook) e indicazione di disponibilità.

### SEO e metadati
- Metadati centralizzati in `app/layout.tsx` (title, description, keywords, author, Open Graph, Twitter Card, `metadataBase`).
- `app/sitemap.ts`: sitemap dinamica con rotte statiche e route dei progetti dal portfolio.
- `app/robots.txt`: regole di scansione (esclusa `/api/`), link alla sitemap.
- `app/manifest.ts`: manifest PWA (nome, icone, colori tema, lingua).
- `app/not-found.tsx`: pagina 404 personalizzata con link alla home e ai contatti.

### Tecniche di frontend
- Font ottimizzati `Geist` e `Geist_Mono` tramite `next/font/google`.
- Google Tag Manager integrato tramite `@next/third-parties/google` (variabile `NEXT_PUBLIC_GTM_ID`).
- Immagini ottimizzate con `next/image` (`priority` sulle immagini principali).
- Script di terze parti gestito con `next/script` (Iubenda privacy/cookie policy nel footer).

## Tecnologie utilizzate

| Tecnologia | Versione (da package.json) | Ruolo |
|---|---|---|
| Next.js | `^16.2.1` | Framework React, App Router, API routes, SSR/SSG, ottimizzazioni |
| React | `19.2.4` | Libreria UI |
| React DOM | `19.2.4` | Rendering DOM per React |
| TypeScript | `^5` | Tipizzazione statica |
| Tailwind CSS | `^4` (via `@tailwindcss/postcss`) | Stili utility-first |
| motion | `^14.14.0` | Animazioni e interazioni (framer motion) |
| lucide-react | `^1.73.0` | Icone SVG |
| resend | `^6.9.4` | Invio email transazionali dal form contatti |
| @next/third-parties | `^16.2.1` | Integrazione Google Tag Manager |
| zustand | `^5.0.12` | Gestione stato (installata, **non utilizzata** nel codice sorgente attuale) |
| ESLint | `^9` + `eslint-config-next` | Linting del codice |

Strumenti di sviluppo rilevanti: Node.js (devDependencies `@types/node` ^20), tipi React 19 (`@types/react`, `@types/react-dom`).

## Architettura e struttura del progetto

Di seguito l'albero delle directory principali (sono escluse `node_modules` e `.next`):

```
my-website/
├── app/
│   ├── api/contact/route.ts        # API route POST: invio email contatto (Resend)
│   ├── contatti/page.tsx           # Pagina contatti (form + dati diretti + social)
│   ├── servizi/page.tsx            # Pagina servizi
│   ├── portfolio/page.tsx          # Elenco progetti del portfolio
│   ├── portfolio/[slug]/page.tsx   # Dettaglio singolo progetto (generateStaticParams)
│   ├── test/page.tsx               # Pagina sperimentale di test animazioni motion
│   ├── not-found.tsx               # Pagina 404
│   ├── layout.tsx                  # Layout root, metadati SEO, font, GTM, Navbar e Footer
│   ├── page.tsx                    # Homepage (composizione delle HomeSection)
│   ├── globals.css                 # Stili globali, Tailwind CSS, keyframes animazioni
│   ├── manifest.ts                 # Manifest PWA
│   ├── robots.ts                   # Robots.txt dinamico
│   └── sitemap.ts                  # Sitemap XML statica + dinamica dai progetti
├── components/
│   ├── Contacts/
│   │   └── ContactForm.tsx         # Form contatto con stati di invio
│   ├── HomeSection/
│   │   ├── HeroSection.tsx         # Hero della home (motion, contatori, parallax)
│   │   ├── IntroSection.tsx        # Problemi/soluzioni, benefici, settori
│   │   ├── ServicesSection.tsx     # Schede servizi della home
│   │   └── ProcessSection.tsx      # Percorso di lavoro in 4 fasi
│   ├── Portfolio/
│   │   └── ImageGallery.tsx        # Galleria con lightbox, autoscroll e frecce
│   └── UI/
│       ├── Navbar.tsx              # Navigazione responsive con offcanvas
│       ├── Footer.tsx              # Footer con link, social, contatti, Iubenda
│       └── TechMarquee.tsx         # Marquee dello stack tecnologico
├── lib/
│   └── projects.ts                 # Tipo Project, elenco progetti e getProjectBySlug
├── public/
│   └── assets/
│       ├── projects/               # Immagini dei progetti portfolio
│       └── webSiteImages/          # Logo, immagini servizi, immagini pagine
├── next.config.ts                  # Configurazione Next.js (allowedDevOrigins, turbopack)
├── postcss.config.mjs              # PostCSS con Tailwind CSS v4
├── eslint.config.mjs               # Configurazione ESLint
├── tsconfig.json                   # Configurazione TypeScript (paths @/*)
├── package.json
├── package-lock.json
└── README.md
```

**Responsabilità principali**:
- `app/layout.tsx`: radice dell'applicazione, definisce metadati globali, font, Google Tag Manager, `Navbar` e `Footer` comuni a tutte le pagine.
- `app/page.tsx`: compone le sezioni della homepage importandole da `components/HomeSection`.
- `components/UI`: componenti di layout condivisi (navbar, footer, marquee).
- `components/HomeSection`: sezioni monotematiche della homepage.
- `lib/projects.ts`: unica fonte dati del portfolio, con funzione di ricerca per slug.
- `app/api/contact/route.ts`: unico endpoint API, gestisce l'invio email del form contatti.

## Requisiti

Per eseguire il progetto in locale sono necessari:

- **Node.js** (consigliato LTS, compatibile con React 19 / Next.js 16)
- **npm** (o yarn / pnpm / bun)
- Variabili d'ambiente per le funzionalità email e Google Tag Manager (vedi sezione successiva)


## Configurazione delle variabili d'ambiente

Il codice sorgente fa riferimento alle seguenti variabili d'ambiente. Non esiste un file `.env` di esempio nel repository; crearne uno in root denominato `.env.local`.

### Variabili individuate nel codice

| Variabile | Dove viene usata | Obbligatoria | Note |
|---|---|---|---|
| `RESEND_API_KEY` | `app/api/contact/route.ts` | Sì (per l'invio email) | Chiave API di Resend per il form contatti |
| `NEXT_PUBLIC_GTM_ID` | `app/layout.tsx` | Sì (per il tracciamento GTM) | ID contenitore Google Tag Manager, prefisso `NEXT_PUBLIC_` perché usata lato client |

Senza `RESEND_API_KEY` l'endpoint `/api/contact` non può inviare email; senza `NEXT_PUBLIC_GTM_ID` il componente `GoogleTagManager` riceve un valore non definito.

Esempio di `.env.local` (valori fittizi, da sostituire con quelli reali):

```env
# Chiave API Resend per l'invio delle email dal form contatti
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx

# ID contenitore Google Tag Manager (usato nel layout root)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## Avvio e sviluppo

Gli script disponibili sono quelli dichiarati in `package.json`:

| Comando | Azione |
|---|---|
| `npm run dev` | Avvia il server di sviluppo (`next dev`) |
| `npm run build` | Genera la build di produzione (`next build`) |
| `npm start` | Avvia il server in produzione (`next start`, dopo la build) |
| `npm run lint` | Esegue il linter ESLint (`eslint`) |

Esempi:

```bash
# Sviluppo (server con hot-reload su http://localhost:3000)
npm run dev

# Build di produzione
npm run build

# Avvio in produzione
npm start

# Linting del codice
npm run lint
```

Il file `next.config.ts` imposta `allowedDevOrigins: ["192.168.1.10"]` per consentire l'accesso allo sviluppo dall'IP locale indicato e configura `turbopack` con root sulla working directory.

## Routing e pagine

| Route | File | Descrizione |
|---|---|---|
| `/` | `app/page.tsx` | Homepage con Hero, Intro, Servizi, Processo, TechMarquee |
| `/servizi` | `app/servizi/page.tsx` | Dettaglio servizi digitali, FAQ, CTA |
| `/portfolio` | `app/portfolio/page.tsx` | Griglia dei progetti del portfolio |
| `/portfolio/[slug]` | `app/portfolio/[slug]/page.tsx` | Dettaglio progetto singolo con galleria e lightbox |
| `/contatti` | `app/contatti/page.tsx` | Form contatto, dati diretti, social |
| `/test` | `app/test/page.tsx` | Pagina di test delle animazioni `motion` |
| 404 | `app/not-found.tsx` | Pagina "non trovata" personalizzata |

Le pagine del portfolio `[slug]` sono generate staticamente in build tramite `generateStaticParams()`, basandosi sui dati in `lib/projects.ts`.
Il progetto è configurato con TypeScript in modalità `strict` e percorsi modulari `@/*` mappati sulla root del progetto.

## Installazione

1. Clona il repository (sostituisci `<URL-REPOSITORY>` con l'URL effettivo):

```bash
git clone <URL-REPOSITORY>
cd my-website
```

> Nota: `package.json` non contiene un campo `repository`, pertanto l'URL Git non è ricavabile dal codice.

2. Installa le dipendenze:

```bash
npm install
```

3. Crea il file di variabili d'ambiente (vedi sezione successiva):

```bash
cp .env.example .env.local   # se presente, altrimenti crea manualmente .env.local
```

## Componenti principali

- **`Navbar`** (`components/UI/Navbar.tsx`): navigazione principale (Home, Servizi, Portfolio), link Contatti, menu offcanvas per dispositivi mobili, effetti di scroll e animazione di entrata.
- **`Footer`** (`components/UI/Footer.tsx`): piè di pagina con logo, link di navigazione, servizi, contatti diretti, social, link Privacy/Cookie Policy (Iubenda) e copyright.
- **`TechMarquee`** (`components/UI/TechMarquee.tsx`): scorrimento orizzontale infinito delle tecnologie utilizzate (React, Next.js, TypeScript, Tailwind CSS, Node.js, MongoDB, Figma, Git, PHP e altre).
- **`HeroSection`** (`components/HomeSection/HeroSection.tsx`): hero della homepage con contatori animati, garanzie, statistiche, CTA e mockup con effetto parallax collegato al movimento del mouse.
- **`IntroSection`** (`components/HomeSection/IntroSection.tsx`): problemi delle PMI con soluzioni, benefici, settori di intervento e garanzie.
- **`ServicesSection`** (`components/HomeSection/ServicesSection.tsx`): schede dei servizi con immagine, tag, cosa include, cose da sapere, tempi e destinatari ideali.
- **`ProcessSection`** (`components/HomeSection/ProcessSection.tsx`): percorso di lavoro in 4 fasi con tempi e output attesi.
- **`ContactForm`** (`components/Contacts/ContactForm.tsx`): form cliente con campi nome, email, servizio, budget e messaggio; gestisce stati di inattivo, caricamento, successo ed errore.
- **`ImageGallery`** (`components/Portfolio/ImageGallery.tsx`): galleria immagini per le pagine di dettaglio progetto, con autoscroll, frecce navigazione, indicatore di progresso e lightbox a schermo intero.

## Animazioni e interazioni

Le animazioni sono realizzate con due approcci coesistenti:

1. **Libreria `motion`** (successore di Framer Motion): usata in `HeroSection`, `IntroSection` e nella pagina sperimentale `/test`. Funzionalità impiegate: `motion`, `animate`, `useInView`, `useMotionValue`, `useSpring`, `useTransform`, `useReducedMotion`, varianti di entità (`hidden`/`visible`), `staggerChildren`, `whileHover`, `whileTap`, animazioni basate sulla visibilità nello scroll e parallax collegato alla posizione del mouse.
2. **CSS keyframes** in `app/globals.css`: `fadeUp`, `fadeIn`, `float`, `floatReverse`, `scrollBounce`, `progressBar` e `marquee` (quest'ultima usata da `TechMarquee`, con pausa al passaggio del mouse).

Rispetto delle preferenze utente: `useReducedMotion` è utilizzato per disattivare le animazioni quando l'utente ha attivato la riduzione del movimento.

## Build e deployment

La build di produzione si genera con:

```bash
npm run build
```

L'output della build può essere avviato con:

```bash
npm start
```

Non sono presenti nel codice configurazioni specifiche per piattaforme di deployment (nessun file `Dockerfile`, nessuna configurazione Vercel/Netlify specifica, nessun adattatore serverless). Il progetto può essere deployato su qualsiasi host in grado di eseguire un'applicazione Next.js (es. server Node.js con output standalone, se configurato separatamente).

Prima del deployment assicurarsi di:
- aver eseguito `npm run build` con successo;
- configurare le variabili d'ambiente `RESEND_API_KEY` e `NEXT_PUBLIC_GTM_ID` sull'ambiente di destinazione;
- verificare che le immagini in `public/assets/` siano presenti e referenziate correttamente.

## Stato del progetto

### Implementato e verificato nel codice
- Homepage completa con tutte le sue sezioni.
- Pagine Servizi, Portfolio (elenco e dettaglio dinamico), Contatti.
- API route `/api/contact` per invio email tramite Resend.
- Gestione SEO: metadati, sitemap dinamica, robots.txt, manifest PWA.
- Animazioni con `motion` e CSS keyframes.
- Galleria immagini con lightbox per i progetti.
- Navigazione responsive, menu mobile, effetto scroll sulla navbar.

### Osservazioni verificate (non sono bug, ma elementi da tenere presenti)
- **`zustand`** è installata come dipendenza (`^5.0.12`) ma non viene importata da nessun file in `app/`, `components/` o `lib/`: non gestisce attualmente alcuno stato nell'applicazione.
- Il footer contiene un link a `/servizi` per "Chi sono" (`href="/about"`), ma **non esiste una pagina `/about`** nel progetto: il link porta a una route inesistente (gestita da `not-found.tsx`).
- Esiste una pagina `/test` dedicata alla verifica delle animazioni `motion`: appare sperimentale e non è collegata alla navigazione principale.
- Alcuni progetti in `lib/projects.ts` hanno `link: ''` (nessun link esterno disponibile).
- Non sono presenti test automatizzati né configurazione di CI/CD nel codice esaminato.
