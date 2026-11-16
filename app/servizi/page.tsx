import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import IntroSection from "@/components/HomeSection/IntroSection";


export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Scopri tutti i servizi digitali su misura per le PMI: siti web, e-commerce, CMS, SEO e molto altro.",
};

/* ─── Dati ────────────────────────────────────────────────────── */


const services = [
  {
    tag: "Presenza online",
    title: "Sito web professionale",
    desc: "Il biglietto da visita digitale della tua azienda. Realizzo siti vetrina, istituzionali e landing page veloci, moderni e ottimizzati per Google. Ogni progetto è costruito su misura: nessun template uguale per tutti.",
    features: [
      "Design personalizzato e originale",
      "Ottimizzato per Google (SEO on-page)",
      "Perfetto su smartphone e tablet",
      "Velocità di caricamento elevata",
      "Certificato SSL incluso",
      "Form di contatto e integrazione mappe",
    ],
    color: "indigo",
    ideal:
      "Ideale per: negozi, studi professionali, artigiani, ristoranti, aziende B2B",
    image: "/assets/webSiteImages/pageservice/sitoweb.png",
  },
  {
    tag: "Vendite online",
    title: "E-commerce & negozio online",
    desc: "Vendi i tuoi prodotti o servizi direttamente dal web, 24 ore su 24. Costruisco shop online completi con gestione catalogo, pagamenti sicuri e un'esperienza d'acquisto fluida che converte i visitatori in clienti.",
    features: [
      "Catalogo prodotti illimitato",
      "Pagamenti sicuri (carta, PayPal, bonifico)",
      "Gestione ordini e inventario",
      "Pannello admin intuitivo",
      "Spedizioni e fatturazione automatica",
      "Ottimizzato per mobile e velocità",
    ],
    color: "violet",
    ideal:
      "Ideale per: negozi fisici che vogliono vendere online, produttori, artigiani",
    image: "/assets/webSiteImages/pageservice/ecommerce.png",
  },
  {
    tag: "Gestione contenuti",
    title: "CMS & pannello di controllo",
    desc: "Non dipendere sempre da un tecnico per aggiornare il tuo sito. Integro sistemi di gestione contenuti semplici e intuitivi: aggiorni testi, immagini, prezzi e news in autonomia, dal PC o dallo smartphone.",
    features: [
      "Interfaccia semplice, nessuna competenza tecnica",
      "Aggiorna contenuti da qualsiasi dispositivo",
      "Gestione notizie, blog e promozioni",
      "Ruoli utente (admin, editor, ecc.)",
      "Formazione e supporto iniziale inclusi",
      "Backup automatico dei contenuti",
    ],
    color: "sky",
    ideal:
      "Ideale per: aziende con aggiornamenti frequenti, studi, associazioni",
    image: "/assets/webSiteImages/pageservice/CMS.png",
  },
  {
    tag: "Visibilità su Google",
    title: "SEO & ottimizzazione",
    desc: "Essere online non basta: bisogna essere trovati. Ottimizza il tuo sito per scalare le posizioni su Google e portare traffico di qualità, fatto di persone che cercano esattamente quello che offri.",
    features: [
      "Analisi delle parole chiave del tuo settore",
      "Ottimizzazione tecnica del sito",
      "Contenuti ottimizzati per i motori di ricerca",
      "Google Business Profile",
      "Report mensili con i progressi",
      "Link building e autorevolezza del dominio",
    ],
    color: "emerald",
    ideal: "Ideale per: qualsiasi attività che vuole più clienti da Google",
    image: "/assets/webSiteImages/pageservice/seo.png",
  },
  {
    tag: "Performance & sicurezza",
    title: "Manutenzione & supporto",
    desc: "Il tuo sito è un asset importante e va protetto. Mi occupo di aggiornamenti, backup, sicurezza e performance in modo continuativo, così tu pensi al tuo lavoro e io penso al tuo sito.",
    features: [
      "Aggiornamenti software e sicurezza",
      "Backup giornalieri automatici",
      "Monitoraggio uptime 24/7",
      "Ottimizzazione velocità e performance",
      "Supporto tecnico prioritario",
      "Report mensile sullo stato del sito",
    ],
    color: "amber",
    ideal: "Ideale per: chi ha già un sito e vuole stare tranquillo",
    image: "/assets/webSiteImages/pageservice/gestionali.png",
  },
  {
    tag: "Comunicazione",
    title: "Email marketing & automazioni",
    desc: "Rimani in contatto con i tuoi clienti in modo professionale. Creo newsletter, campagne email e automazioni che portano i clienti a tornare, aumentando il valore nel tempo di chi ti ha già scelto.",
    features: [
      "Template email brandizzati",
      "Campagne newsletter periodiche",
      "Automazioni (benvenuto, carrello abbandonato)",
      "Segmentazione del pubblico",
      "Report aperture e click",
      "Integrazione con sito e e-commerce",
    ],
    color: "rose",
    ideal: "Ideale per: e-commerce, negozi, studi con lista clienti attiva",
    image: "/assets/webSiteImages/pageservice/marketing.png",
  },
];

const colorMap: Record<
  string,
  { badge: string; border: string; bullet: string }
> = {
  indigo: {
    badge: "bg-indigo-50 text-indigo-600 border-indigo-100",
    border: "border-indigo-100 hover:border-indigo-200",
    bullet: "bg-indigo-400",
  },
  violet: {
    badge: "bg-violet-50 text-violet-600 border-violet-100",
    border: "border-violet-100 hover:border-violet-200",
    bullet: "bg-violet-400",
  },
  sky: {
    badge: "bg-sky-50 text-sky-600 border-sky-100",
    border: "border-sky-100 hover:border-sky-200",
    bullet: "bg-sky-400",
  },
  emerald: {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
    border: "border-emerald-100 hover:border-emerald-200",
    bullet: "bg-emerald-400",
  },
  amber: {
    badge: "bg-amber-50 text-amber-700 border-amber-100",
    border: "border-amber-100 hover:border-amber-200",
    bullet: "bg-amber-400",
  },
  rose: {
    badge: "bg-rose-50 text-rose-600 border-rose-100",
    border: "border-rose-100 hover:border-rose-200",
    bullet: "bg-rose-400",
  },
};

const faq = [
  {
    q: "Quanto costa un sito web?",
    a: "Dipende dalla complessità del progetto. Un sito vetrina parte da poche centinaia di euro, un e-commerce è più articolato. Faccio sempre un preventivo gratuito e personalizzato prima di iniziare qualsiasi lavoro.",
  },
  {
    q: "Quanto tempo ci vuole per realizzare un sito?",
    a: "Un sito vetrina richiede in genere 2-4 settimane. Un e-commerce o un progetto più complesso può richiedere 4-8 settimane. I tempi dipendono anche dalla velocità con cui mi vengono forniti testi, immagini e materiali.",
  },
  {
    q: "Posso gestire il sito da solo dopo la consegna?",
    a: "Assolutamente sì. Integro sempre un pannello di controllo semplice e intuitivo. Fornisco anche una sessione di formazione iniziale così puoi aggiornare tutto in autonomia.",
  },
  {
    q: "Il sito sarà visibile su Google?",
    a: "Ogni sito che realizzo viene ottimizzato con le basi SEO (struttura, velocità, tag, sitemap). Per risultati più avanzati e posizionamenti competitivi, offro anche un servizio SEO dedicato.",
  },
  {
    q: "Cosa succede se ho un problema dopo la consegna?",
    a: "Offro un periodo di garanzia post-consegna e piani di manutenzione mensili. Non sparisco dopo aver consegnato il progetto: sono disponibile per supporto e aggiornamenti nel tempo.",
  },
  {
    q: "Lavori solo con aziende della tua zona?",
    a: "No, lavoro completamente da remoto con clienti da tutta Italia. Tutta la comunicazione e i meeting avvengono online, senza nessun problema.",
  },
];

/* ─── Page ────────────────────────────────────────────────────── */

export default function ServiziPage() {
  return (
    <main className="bg-white">
      {/* ══ HERO ════════════════════════════════════════════════ */}
      <IntroSection />

      {/* ══ SERVIZI ═════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-gray-500 mb-6">
              Cosa faccio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
              I servizi che offro
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              Ogni servizio è pensato per dare un risultato concreto alla tua
              attività. Niente di inutile, tutto ciò che serve.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {services.map(
              ({ tag, title, desc, features, color, ideal, image }, i) => {
                const c = colorMap[color];
                return (
                  <div
                    key={title}
                    className={`group rounded-3xl border ${c.border} bg-white overflow-hidden transition-all duration-300 hover:shadow-lg`}
                  >
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-last" : ""}`}
                    >
                      {/* Immagine */}
                      <div className="relative aspect-[4/3] lg:aspect-auto min-h-64 overflow-hidden">
                        <Image
                          src={image}
                          alt={title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span
                            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${c.badge}`}
                          >
                            {tag}
                          </span>
                        </div>
                      </div>

                      {/* Contenuto */}
                      <div className="flex flex-col justify-center gap-6 p-8 lg:p-10">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {title}
                          </h3>
                          <p className="text-gray-500 text-[15px] leading-relaxed">
                            {desc}
                          </p>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {features.map((f) => (
                            <li key={f} className="flex items-start gap-2.5">
                              <span
                                className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.bullet}`}
                              />
                              <span className="text-sm text-gray-600">{f}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-gray-400 border-t border-gray-100 pt-4">
                          {ideal}
                        </p>
                        <Link
                          href="/contatti"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors group/link w-fit"
                        >
                          Richiedi informazioni
                          <svg
                            className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M3 8h10M9 4l4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* ══ FAQ ═════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Domande frequenti
            </h2>
            <p className="text-gray-500">
              Le risposte alle domande che mi fanno più spesso le PMI.
            </p>
          </div>
          <div className="flex flex-col divide-y divide-gray-100">
            {faq.map(({ q, a }) => (
              <div key={q} className="py-6">
                <p className="font-semibold text-gray-900 mb-2">{q}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA FINALE ══════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Pronto a portare la tua attività online?
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Raccontami il tuo progetto. Analizzerò la tua situazione e ti
            proporrò la soluzione più adatta — senza impegno e senza costi
            nascosti.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contatti"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-gray-900 hover:bg-white/90 transition-colors"
            >
              Contattami ora — è gratuito
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white/70 hover:text-white hover:border-white/30 transition-all"
            >
              Vedi i miei lavori
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
