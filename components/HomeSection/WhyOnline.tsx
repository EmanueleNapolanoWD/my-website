"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

const pros = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Aperto 24 ore su 24, 7 giorni su 7",
    desc: "Il tuo sito lavora per te anche di notte, nei weekend e durante le ferie. I clienti ti trovano e si informano sempre.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Raggiungi nuovi clienti",
    desc: "Superi i confini fisici del tuo negozio o ufficio. Google ti aiuta a raggiungere persone che altrimenti non ti avrebbero trovato.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Più credibilità e fiducia",
    desc: "Un sito professionale trasmette serietà, valorizza la tua attività e ti aiuta a distinguerti dalla concorrenza.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: "Marketing più conveniente",
    desc: "Il digitale offre strumenti per promuovere la tua attività, controllare i costi e misurare i risultati delle campagne.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Dati e analisi reali",
    desc: "Scopri quante persone visitano il tuo sito, quali pagine consultano e da dove arrivano. Prendi decisioni basate sui dati.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Vendite anche online",
    desc: "Con un e-commerce puoi vendere prodotti e servizi direttamente dal tuo sito, raggiungendo clienti anche fuori dalla tua zona.",
  },
];

const cons = [
  {
    title: "Investimento iniziale",
    desc: "Realizzare un sito professionale richiede un budget iniziale, che varia in base alle funzionalità e alla complessità del progetto.",
    solution:
      "Propongo soluzioni personalizzate in base alle esigenze e al budget della tua attività.",
  },
  {
    title: "Richiede aggiornamenti",
    desc: "Un sito non è un progetto da abbandonare dopo la pubblicazione: contenuti e componenti tecniche devono essere mantenuti.",
    solution:
      "Posso occuparmi della manutenzione e degli aggiornamenti con piani dedicati.",
  },
  {
    title: "Concorrenza online",
    desc: "Essere presenti sul web significa confrontarsi con altre attività che offrono prodotti e servizi simili ai tuoi.",
    solution:
      "Punto su design personalizzato, contenuti efficaci e ottimizzazione SEO.",
  },
  {
    title: "Gestione del sito",
    desc: "Aggiornare autonomamente un sito può sembrare complicato senza gli strumenti e le conoscenze adeguate.",
    solution:
      "Realizzo pannelli di gestione intuitivi e fornisco supporto per utilizzare le funzionalità.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

export default function WhyOnline() {
  const shouldReduceMotion = useReducedMotion();

  const variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : itemVariants;

  const container = shouldReduceMotion ? {} : containerVariants;

  return (
    <section
      id="perche-essere-online"
      className="relative overflow-hidden bg-white px-6 py-24"
    >
      {/* Elementi decorativi */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-indigo-100/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 -left-40 h-96 w-96 rounded-full bg-violet-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* INTRODUZIONE */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 max-w-2xl"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-indigo-600">
            Perché essere online
          </span>

          <h2 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl">
            La tua attività merita
            <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text text-transparent">
              di essere online.
            </span>
          </h2>

          <p className="text-[15px] leading-relaxed text-gray-500 sm:text-base">
            Oggi avere una presenza digitale non è soltanto un vantaggio: è
            un&apos;opportunità concreta per far crescere la tua attività,
            raggiungere nuovi clienti e distinguerti dalla concorrenza.
          </p>
        </motion.div>

        {/* VANTAGGI */}
        <div className="mb-20">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-8 flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900">
                I vantaggi di essere online
              </h3>
              <p className="text-sm text-gray-500">
                Le opportunità per far crescere la tua attività.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {pros.map(({ icon, title, desc }) => (
              <motion.div
                key={title}
                variants={variants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -6, transition: { duration: 0.2 } }
                }
                className="group flex flex-col gap-5 rounded-2xl border border-gray-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                  <div className="h-5 w-5 [&>svg]:h-full [&>svg]:w-full">
                    {icon}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-gray-900">{title}</h4>

                  <p className="text-sm leading-relaxed text-gray-500">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ASPETTI DA CONSIDERARE */}
        <div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-8 flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Gli aspetti da considerare
              </h3>
              <p className="text-sm text-gray-500">
                Le sfide e le soluzioni per affrontarle.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            {cons.map(({ title, desc, solution }) => (
              <motion.div
                key={title}
                variants={variants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -4, transition: { duration: 0.2 } }
                }
                className="rounded-2xl border border-gray-200 bg-gray-50/70 p-6 transition-all duration-300 hover:border-amber-200 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                  </div>

                  <h4 className="font-semibold text-gray-900">{title}</h4>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-gray-500">
                  {desc}
                </p>

                <div className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50/70 px-4 py-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>

                  <p className="text-sm font-medium leading-relaxed text-emerald-800">
                    {solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CONCLUSIONE */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative mt-16 overflow-hidden rounded-3xl bg-[#0a0a0a] px-8 py-10 sm:px-10"
        >
          {/* Gradiente decorativo */}
          <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div className="max-w-xl">
              <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-indigo-400">
                Il prossimo passo
              </span>

              <h3 className="mb-3 text-2xl font-bold text-white">
                La tua presenza online inizia da qui.
              </h3>

              <p className="text-sm leading-relaxed text-white/60">
                Ogni attività ha esigenze diverse. Raccontami il tuo progetto:
                troveremo insieme la soluzione digitale più adatta alle tue
                necessità.
              </p>
            </div>

            <Link
              href="/contatti"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 transition-all duration-300 hover:bg-indigo-50"
            >
              Parliamone
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
        </motion.div>
      </div>
    </section>
  );
}
