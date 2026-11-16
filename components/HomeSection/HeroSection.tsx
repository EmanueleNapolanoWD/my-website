"use client";

import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
  type Variants,
} from "motion/react";
import { ArrowRight, Bell, Check, ChevronDown, Search } from "lucide-react";

/* Esportati: riutilizzati da IntroSection */
export const EASE = [0.22, 1, 0.36, 1] as const;

/* ───────────────────────── Varianti di entrata ───────────────────────── */

export const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const lineReveal: Variants = {
  hidden: { y: "110%" },
  visible: { y: 0, transition: { duration: 0.9, ease: EASE } },
};

/* ───────────────────────── Dati ───────────────────────── */

const trust = [
  "Preventivo gratuito e senza impegno",
  "Prezzo e tempi concordati prima di iniziare",
  "Assistenza anche dopo il lancio",
];

const stats = [
  { to: 50, suffix: "+", label: "Progetti consegnati" },
  { to: 98, suffix: "%", label: "Clienti soddisfatti" },
  { to: 5, suffix: "★", label: "Rating medio" },
];

const bars = [35, 48, 42, 60, 55, 72, 68, 85, 94];

/* ───────────────────────── Componenti di supporto ───────────────────────── */

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!inView || !el) return;
    if (reduce) {
      el.textContent = `${to}${suffix}`;
      return;
    }
    const controls = animate(0, to, {
      duration: 1.8,
      delay: 0.9,
      ease: "easeOut",
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, to, suffix]);

  return <span ref={ref}>{`0${suffix}`}</span>;
}

/** Sposta i figli in base al mouse: più "depth", più si muovono. */
export function Layer({
  sx,
  sy,
  depth,
  className,
  children,
}: {
  sx: MotionValue<number>;
  sy: MotionValue<number>;
  depth: number;
  className?: string;
  children: ReactNode;
}) {
  const x = useTransform(sx, (v) => v * depth);
  const y = useTransform(sy, (v) => v * depth);
  return (
    <motion.div style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
}

/** Entrata ritardata + leggero galleggiamento continuo. */
export function Floating({
  delay,
  amplitude = 8,
  duration = 6,
  reduce,
  children,
}: {
  delay: number;
  amplitude?: number;
  duration?: number;
  reduce: boolean;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.9, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -amplitude, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ───────────────────────── Mockup illustrativo ───────────────────────── */

function Mockup({
  sx,
  sy,
  reduce,
}: {
  sx: MotionValue<number>;
  sy: MotionValue<number>;
  reduce: boolean;
}) {
  const k = reduce ? 0 : 1;

  return (
    <div
      aria-hidden
      className="relative mx-auto h-[460px] w-full max-w-[540px] sm:h-[520px] lg:h-[560px] lg:max-w-[640px]"
    >
      {/* alone */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-indigo-500/25 via-violet-500/10 to-sky-500/20 blur-3xl" />

      {/* finestra browser */}
      <Layer
        sx={sx}
        sy={sy}
        depth={14 * k}
        className="absolute left-0 top-10 w-[86%]"
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: EASE }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/90 shadow-2xl shadow-black/50 backdrop-blur"
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <div className="ml-3 flex-1 rounded-md bg-white/5 px-3 py-1 text-[11px] text-white/35">
              www.latuaattivita.it
            </div>
          </div>

          <div className="space-y-4 p-5">
            <div className="flex items-center justify-between">
              <div className="h-3 w-24 rounded bg-white/25" />
              <div className="flex gap-2">
                <div className="h-2 w-8 rounded bg-white/10" />
                <div className="h-2 w-8 rounded bg-white/10" />
                <div className="h-2 w-8 rounded bg-white/10" />
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-indigo-500/25 to-sky-500/10 p-5">
              <motion.div
                initial={reduce ? false : { width: 0 }}
                animate={{ width: "70%" }}
                transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
                className="h-3.5 rounded bg-white/70"
              />
              <motion.div
                initial={reduce ? false : { width: 0 }}
                animate={{ width: "48%" }}
                transition={{ duration: 0.9, delay: 1.25, ease: EASE }}
                className="mt-2 h-3.5 rounded bg-white/70"
              />
              <div className="mt-4 h-2 w-4/5 rounded bg-white/20" />
              <div className="mt-1.5 h-2 w-3/5 rounded bg-white/20" />
              <div className="mt-5 inline-block rounded-full bg-white px-4 py-1.5 text-[11px] font-medium text-neutral-950">
                Chiama ora
              </div>
            </div>

            {/* grafico visite */}
            <div className="rounded-xl border border-white/10 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="h-2 w-20 rounded bg-white/20" />
                <div className="h-2 w-8 rounded bg-emerald-400/60" />
              </div>
              <div className="flex h-20 items-end gap-1.5">
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={reduce ? false : { height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{
                      duration: 0.8,
                      delay: 1.5 + i * 0.07,
                      ease: EASE,
                    }}
                    className="flex-1 rounded-t bg-gradient-to-t from-indigo-500/40 to-sky-400/80"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Layer>

      {/* smartphone */}
      <Layer
        sx={sx}
        sy={sy}
        depth={28 * k}
        className="absolute bottom-0 right-2 w-[27%]"
      >
        <Floating delay={1.3} amplitude={6} duration={7} reduce={reduce}>
          <div className="rounded-[1.4rem] border border-white/15 bg-neutral-900 p-1.5 shadow-2xl shadow-black/60">
            <div className="space-y-2 rounded-[1.1rem] bg-neutral-950 p-2.5 pb-3">
              <div className="mx-auto h-1 w-8 rounded-full bg-white/15" />
              <div className="h-14 rounded-lg bg-gradient-to-br from-violet-500/30 to-sky-500/20" />
              <div className="h-1.5 w-full rounded bg-white/20" />
              <div className="h-1.5 w-2/3 rounded bg-white/10" />
              <div className="mt-2 rounded-full bg-white py-1 text-center text-[8px] font-medium text-neutral-950">
                Prenota
              </div>
            </div>
          </div>
        </Floating>
      </Layer>

      {/* richiesta in arrivo */}
      <Layer
        sx={sx}
        sy={sy}
        depth={34 * k}
        className="absolute bottom-3 left-0 sm:-left-4"
      >
        <Floating delay={1.9} amplitude={7} duration={6.5} reduce={reduce}>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-900/95 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
              <Bell className="h-4 w-4" />
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
                Nuova richiesta di preventivo
              </p>
              <p className="text-[11px] text-white/40">
                Dal modulo contatti · 2 minuti fa
              </p>
            </div>
          </div>
        </Floating>
      </Layer>

      {/* google */}
      <Layer sx={sx} sy={sy} depth={22 * k} className="absolute right-0 top-0">
        <Floating delay={1.6} amplitude={9} duration={7.5} reduce={reduce}>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-900/95 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/15 text-sky-400">
              <Search className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[11px] text-white/40">Ricerca su Google</p>
              <p className="text-xs font-medium text-white">
                Più visibile nella tua zona
              </p>
            </div>
          </div>
        </Floating>
      </Layer>

      {/* velocità */}
      <Layer
        sx={sx}
        sy={sy}
        depth={40 * k}
        className="absolute right-1 top-[36%]"
      >
        <Floating delay={2.2} amplitude={10} duration={6} reduce={reduce}>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-900/95 px-3.5 py-3 shadow-xl shadow-black/40 backdrop-blur">
            <div className="relative h-11 w-11">
              <svg viewBox="0 0 44 44" className="h-full w-full -rotate-90">
                <circle
                  cx="22"
                  cy="22"
                  r="18"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="4"
                />
                <motion.circle
                  cx="22"
                  cy="22"
                  r="18"
                  fill="none"
                  stroke="url(#heroSpeed)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={reduce ? false : { pathLength: 0 }}
                  animate={{ pathLength: 0.96 }}
                  transition={{ duration: 1.6, delay: 2.4, ease: EASE }}
                />
                <defs>
                  <linearGradient id="heroSpeed" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                98
              </span>
            </div>
            <div>
              <p className="text-xs font-medium text-white">Velocità</p>
              <p className="text-[11px] text-white/40">Anche da mobile</p>
            </div>
          </div>
        </Floating>
      </Layer>
    </div>
  );
}

/* ───────────────────────── Hero ───────────────────────── */

export default function HeroSection() {
  const reduce = useReducedMotion() ?? false;

  // posizione del mouse rispetto al centro della sezione (-0.5 … 0.5)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 80, damping: 18, mass: 0.6 });

  return (
    <section
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
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0a] py-28 lg:py-20"
    >
      {/* ── Blob animati ── */}
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-indigo-600/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="animate-float-reverse pointer-events-none absolute -bottom-40 -right-24 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[100px]"
        style={{ animationDelay: "2s" }}
      />

      {/* ── Griglia ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.5) 40px)," +
            "repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.5) 40px)",
        }}
      />

      {/* ── Contenuto: 88% del viewport su desktop (max 1600px), padding su tablet/mobile ── */}
      <div className="relative z-10 mx-auto grid w-full items-center gap-16 px-5 sm:px-8 lg:w-[88%] lg:max-w-[1600px] lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:px-0 xl:gap-20">
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="visible"
          className="text-center lg:text-left"
        >
          {/* badge */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center lg:justify-start"
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur">
              <span className="relative flex h-2 w-2">
                {!reduce && (
                  <motion.span
                    className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
                    animate={{ scale: [1, 2.4], opacity: [0.7, 0] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                )}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Siti web e e-commerce per le PMI
            </span>
          </motion.div>

          {/* titolo */}
          <h1 className="mt-7 font-bold leading-[1.08] tracking-tight text-white">
            {[
              { text: "Siti web che", gradient: false },
              { text: "portano clienti", gradient: true },
              { text: "alla tua attività.", gradient: false },
            ].map(({ text, gradient }) => (
              <span key={text} className="block overflow-hidden pb-2">
                <motion.span
                  variants={lineReveal}
                  className={
                    "block text-5xl sm:text-6xl xl:text-7xl " +
                    (gradient
                      ? "bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400 bg-clip-text text-transparent"
                      : "")
                  }
                >
                  {text}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* sottotitolo */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg lg:mx-0"
          >
            Progettiamo siti veloci, facili da gestire e pensati per farti
            trovare su Google e ricevere richieste. Preventivo chiaro prima di
            iniziare, assistenza anche dopo il lancio.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <motion.div
              whileHover={reduce ? undefined : { scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/contatti"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 transition-shadow duration-200 hover:shadow-[0_0_40px_rgba(255,255,255,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
              >
                Richiedi un preventivo gratuito
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={reduce ? undefined : { scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/80 transition-colors duration-200 hover:border-white/30 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
              >
                Vedi il portfolio
              </Link>
            </motion.div>
          </motion.div>

          {/* garanzie */}
          <motion.ul
            variants={fadeUp}
            className="mt-8 flex flex-col items-center gap-2.5 lg:items-start"
          >
            {trust.map((t) => (
              <li
                key={t}
                className="flex items-center gap-2.5 text-sm text-white/60"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <Check className="h-3 w-3" aria-hidden />
                </span>
                {t}
              </li>
            ))}
          </motion.ul>

          {/* statistiche */}
          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap justify-center gap-10 border-t border-white/10 pt-8 lg:justify-start"
          >
            {stats.map(({ to, suffix, label }) => (
              <div key={label} className="text-center lg:text-left">
                <p className="text-3xl font-bold tabular-nums text-white">
                  <CountUp to={to} suffix={suffix} />
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/40">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <Mockup sx={sx} sy={sy} reduce={reduce} />
      </div>

      {/* ── Indicatore di scroll ── */}
      <motion.div
        aria-hidden
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.8 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/30"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
