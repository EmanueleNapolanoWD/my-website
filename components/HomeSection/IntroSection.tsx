"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type ReactNode } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type MotionValue,
} from "motion/react";
import {
  ArrowRight,
  Check,
  Gauge,
  MousePointerClick,
  Search,
  ReceiptText,
  Store,
  Utensils,
  Scale,
  Hammer,
  Stethoscope,
  ShoppingBag,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
// Riutilizzo di pattern e varianti già presenti nella HeroSection
// (vanno esportati da HeroSection: vedi le modifiche indicate).
import { EASE, container, fadeUp, Layer, Floating } from "./HeroSection";

/* Contenitore comune: 88% del viewport su desktop (max 1600px), padding laterale su tablet/mobile */
const WRAP =
  "relative mx-auto w-full px-5 sm:px-8 lg:w-[88%] lg:max-w-[1600px] lg:px-0";

const problems = [
  {
    problem: "Il sito c'è, ma i clienti non ti trovano",
    solution:
      "Struttura, testi e SEO locale pensati per le ricerche che fanno davvero i tuoi clienti, ad esempio “idraulico a Napoli”.",
  },
  {
    problem: "Ogni modifica richiede un tecnico e una fattura",
    solution:
      "Un pannello semplice con cui aggiorni testi, foto e prodotti da solo. Ti formiamo noi, con una guida su misura.",
  },
  {
    problem: "Il sito è lento o non si vede bene da telefono",
    solution:
      "Progettiamo prima per smartphone, dove arriva la maggior parte dei tuoi clienti, e ottimizziamo ogni pagina.",
  },
  {
    problem: "Hai paura di costi che crescono senza controllo",
    solution:
      "Preventivo scritto prima di iniziare, con cosa è incluso e cosa no. Nessuna sorpresa a fine lavori.",
  },
];

const benefits = [
  {
    icon: Search,
    title: "Ti trovano su Google",
    text: "SEO di base inclusa: titoli, descrizioni, mappa e scheda attività.",
    color: "text-violet-400 bg-violet-500/10",
  },
  {
    icon: Gauge,
    title: "Veloce su ogni dispositivo",
    text: "Pagine leggere che si caricano in un attimo, anche con connessione debole.",
    color: "text-sky-400 bg-sky-500/10",
  },
  {
    icon: MousePointerClick,
    title: "Facile da aggiornare",
    text: "Cambi un prezzo o una foto in pochi clic, senza chiamare nessuno.",
    color: "text-emerald-400 bg-emerald-500/10",
  },
  {
    icon: ReceiptText,
    title: "Costi chiari",
    text: "Prezzo concordato prima di partire e piano di assistenza opzionale.",
    color: "text-amber-400 bg-amber-500/10",
  },
];

const sectors = [
  {
    icon: Utensils,
    label: "Ristoranti e bar",
    image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDE%3D",
  },
  {
    icon: Hammer,
    label: "Artigiani e imprese edili",
    image: "https://images.unsplash.com/photo-1758522274399-8d3fd26a02f7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    icon: Scale,
    label: "Studi professionali",
    image: "https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    icon: Stethoscope,
    label: "Studi medici e centri benessere",
    image: "https://images.unsplash.com/photo-1700665537650-1bf37979aae0?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    icon: Store,
    label: "Negozi e botteghe",
    image: "https://images.unsplash.com/photo-1605513524006-063ed6ed31e7?q=80&w=1052&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    icon: ShoppingBag,
    label: "Chi vuole vendere online",
    image: "https://images.unsplash.com/photo-1449247666642-264389f5f5b1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];

const guarantees = [
  "Preventivo gratuito e senza impegno",
  "Un unico referente, dall'idea alla pubblicazione",
  "Dominio, codice e accessi restano tuoi",
];

/* Entrata morbida dei blocchi sotto il primo, attivata allo scroll */
function Reveal({
  reduce,
  className,
  children,
}: {
  reduce: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ───────── Visual animato: dalla ricerca su Google al cliente che chiama ───────── */

function IntroVisual({
  sx,
  sy,
  reduce,
}: {
  sx: MotionValue<number>;
  sy: MotionValue<number>;
  reduce: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const show = reduce || inView; // le animazioni partono quando il visual entra nel viewport
  const k = reduce ? 0 : 1;

  return (
    <div
      ref={ref}
      aria-hidden
      className="relative mx-auto h-[460px] w-full max-w-[640px] sm:h-[520px] lg:h-[560px] lg:max-w-none"
    >
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-violet-500/25 via-indigo-500/10 to-sky-500/20 blur-3xl" />

      {show && (
        <>
          {/* scheda di ricerca locale */}
          <Layer
            sx={sx}
            sy={sy}
            depth={12 * k}
            className="absolute left-0 top-14 w-[92%] lg:left-[4%] lg:w-[82%]"
          >
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: EASE }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/90 shadow-2xl shadow-black/50 backdrop-blur"
            >
              {/* barra di ricerca */}
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
                <Search className="h-4 w-4 shrink-0 text-white/40" />
                <motion.span
                  initial={reduce ? false : { width: 0 }}
                  animate={{ width: "19ch" }}
                  transition={{ duration: 1.1, delay: 0.5, ease: "linear" }}
                  className="overflow-hidden whitespace-nowrap text-sm text-white/80"
                >
                  idraulico a Napoli
                </motion.span>
              </div>

              <div className="space-y-3 p-4">
                {/* mappa */}
                <div className="relative h-36 overflow-hidden rounded-xl border border-white/10 bg-neutral-950 sm:h-40">
                  <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg,transparent,transparent 23px,rgba(255,255,255,.6) 24px)," +
                        "repeating-linear-gradient(90deg,transparent,transparent 23px,rgba(255,255,255,.6) 24px)",
                    }}
                  />
                  <div className="absolute -left-[10%] top-[58%] h-px w-[120%] -rotate-12 bg-white/15" />
                  <div className="absolute left-[30%] top-0 h-[120%] w-px rotate-12 bg-white/10" />
                  <MapPin className="absolute left-[16%] top-[26%] h-4 w-4 text-white/25" />
                  <MapPin className="absolute left-[78%] top-[62%] h-4 w-4 text-white/25" />
                  <MapPin className="absolute left-[70%] top-[18%] h-4 w-4 text-white/20" />

                  {/* la tua attività */}
                  <motion.div
                    initial={reduce ? false : { opacity: 0, y: -28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 160,
                      damping: 12,
                      delay: 1.3,
                    }}
                    className="absolute left-[48%] top-[34%]"
                  >
                    <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/30 text-violet-200">
                      <MapPin className="h-4 w-4" />
                      {!reduce && (
                        <motion.span
                          className="absolute inset-0 rounded-full border border-violet-400/60"
                          animate={{ scale: [1, 1.9], opacity: [0.7, 0] }}
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />
                      )}
                    </span>
                  </motion.div>
                </div>

                {/* risultati */}
                <div className="space-y-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={reduce ? false : { opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 1.7 + i * 0.15,
                        ease: EASE,
                      }}
                      className={
                        "flex items-center gap-3 rounded-lg border px-3 py-2.5 " +
                        (i === 0
                          ? "border-violet-400/40 bg-violet-500/10"
                          : "border-white/10 opacity-60")
                      }
                    >
                      <span
                        className={
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold " +
                          (i === 0
                            ? "bg-white text-neutral-950"
                            : "bg-white/10 text-white/50")
                        }
                      >
                        {i + 1}
                      </span>
                      <div className="min-w-0 flex-1 space-y-1.5">
                        <div
                          className={
                            "h-2.5 rounded " +
                            (i === 0
                              ? "w-32 bg-white/70"
                              : i === 1
                                ? "w-24 bg-white/25"
                                : "w-28 bg-white/25")
                          }
                        />
                        {i === 0 ? (
                          <div className="flex gap-0.5">
                            {[0, 1, 2, 3, 4].map((s) => (
                              <Star
                                key={s}
                                className="h-3 w-3 fill-amber-400 text-amber-400"
                              />
                            ))}
                          </div>
                        ) : (
                          <div className="h-2 w-16 rounded bg-white/10" />
                        )}
                      </div>
                      {i === 0 && (
                        <span className="text-[10px] font-medium text-emerald-400">
                          Aperto ora
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Layer>

          {/* richieste dal sito: andamento */}
          <Layer
            sx={sx}
            sy={sy}
            depth={22 * k}
            className="absolute right-0 top-0"
          >
            <Floating delay={2.3} amplitude={9} duration={7.5} reduce={reduce}>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-900/95 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur">
                <svg viewBox="0 0 80 32" className="h-8 w-16">
                  <defs>
                    <linearGradient id="introSpark" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#34d399" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M2 28 L16 22 L28 24 L42 14 L56 16 L78 4"
                    fill="none"
                    stroke="url(#introSpark)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={reduce ? false : { pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.4, delay: 2.5, ease: EASE }}
                  />
                </svg>
                <div>
                  <p className="text-xs font-medium text-white">
                    Più richieste
                  </p>
                  <p className="text-[11px] text-white/40">Dal tuo sito</p>
                </div>
              </div>
            </Floating>
          </Layer>

          {/* chiamata ricevuta */}
          <Layer
            sx={sx}
            sy={sy}
            depth={34 * k}
            className="absolute bottom-4 left-0 lg:-left-2"
          >
            <Floating delay={2.7} amplitude={7} duration={6.5} reduce={reduce}>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-900/95 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur">
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <Phone className="h-4 w-4" />
                  {!reduce && (
                    <motion.span
                      className="absolute inset-0 rounded-full border border-emerald-400/50"
                      animate={{ scale: [1, 1.6], opacity: [0.7, 0] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  )}
                </span>
                <div>
                  <p className="text-xs font-medium text-white">
                    Chiamata ricevuta
                  </p>
                  <p className="text-[11px] text-white/40">
                    Dalla scheda attività
                  </p>
                </div>
              </div>
            </Floating>
          </Layer>

          {/* preventivo richiesto */}
          <Layer
            sx={sx}
            sy={sy}
            depth={40 * k}
            className="absolute bottom-20 right-0 lg:bottom-24"
          >
            <Floating delay={3.1} amplitude={10} duration={6} reduce={reduce}>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-900/95 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/15 text-violet-300">
                  <ReceiptText className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-medium text-white">
                    Richiesta di preventivo
                  </p>
                  <p className="text-[11px] text-white/40">
                    Dal modulo contatti
                  </p>
                </div>
              </div>
            </Floating>
          </Layer>
        </>
      )}
    </div>
  );
}

export default function IntroSection() {
  const reduce = useReducedMotion() ?? false;

  // parallasse col mouse, stesso approccio della HeroSection
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 80, damping: 18, mass: 0.6 });

  return (
    <section
      id="intro"
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative overflow-hidden border-t border-white/10 bg-neutral-950 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-violet-600/10 to-transparent" />

      <div className={WRAP}>
        {/* Blocco 1: promessa (testo a sinistra, visual a destra; su mobile testo poi visual) */}
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16 xl:gap-24">
          <motion.div
            variants={container}
            initial={reduce ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl xl:text-6xl"
            >
              Un sito che porta clienti,{" "}
              <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
                non solo visite
              </span>
              .
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg"
            >
              Lavoriamo con piccole e medie imprese che hanno bisogno di una
              presenza online chiara, veloce e facile da gestire, senza
              dipendere da nessuno per ogni piccola modifica.
            </motion.p>

            <motion.ul variants={fadeUp} className="mt-8 space-y-3">
              {guarantees.map((g) => (
                <li
                  key={g}
                  className="flex items-start gap-3 text-sm text-neutral-300"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                    aria-hidden
                  />
                  {g}
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contatti"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
              >
                Richiedi un preventivo gratuito
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/portfolio"
                className="text-sm text-neutral-400 underline-offset-4 hover:text-white hover:underline"
              >
                Guarda i lavori
              </Link>
            </motion.div>
          </motion.div>

          <IntroVisual sx={sx} sy={sy} reduce={reduce} />
        </div>

        {/* Blocco 2: benefici */}
        <Reveal reduce={reduce} className="mt-24 sm:mt-28">
          <h3 className="max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Cosa cambia per la tua attività
          </h3>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text, color }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${color}`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h4 className="mt-5 font-medium text-white">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Blocco 3: problemi -> soluzioni */}
        <Reveal
          reduce={reduce}
          className="mt-24 grid gap-12 sm:mt-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
        >
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Se hai un&apos;attività, probabilmente ti riconosci
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-400">
              Sono i problemi che sentiamo più spesso al primo incontro. Hanno
              tutti una soluzione concreta.
            </p>
          </div>

          <ul className="divide-y divide-white/10 border-y border-white/10">
            {problems.map(({ problem, solution }) => (
              <li key={problem} className="py-7">
                <h4 className="text-lg font-medium text-white">{problem}</h4>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
                  {solution}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Blocco 4: per chi lavoriamo */}
        <Reveal
          reduce={reduce}
          className="mt-24 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:mt-28 sm:p-10 lg:p-12"
        >
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Per chi lavoriamo
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              Attività locali e professionisti che vogliono farsi trovare,
              ricevere richieste e, se serve, vendere online. Se non ti
              riconosci in questa lista, scrivici lo stesso.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {sectors.map(({ icon: Icon, label, image }) => (
              <li
                key={label}
                className="group relative aspect-square overflow-hidden rounded-xl sm:aspect-[4/3] border border-white/10 bg-gradient-to-br from-violet-500/15 to-sky-500/10"
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 15vw, (min-width: 640px) 30vw, 46vw"
                  className="object-cover opacity-80 motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-neutral-950/5"
                />
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-2 p-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-neutral-950/70 text-violet-400 backdrop-blur">
                    <Icon className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="text-xs font-medium leading-snug text-white sm:text-sm">
                    {label}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
