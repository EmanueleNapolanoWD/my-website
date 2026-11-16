import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Parliamo della tua attività",
    time: "30 minuti, online o di persona",
    text: "Capiamo cosa vendi, a chi e cosa deve fare il sito per te. Non serve preparare nulla.",
    output: "Obiettivi chiari",
  },
  {
    title: "Ricevi un preventivo scritto",
    time: "Entro 48 ore",
    text: "Costi, tempi e funzioni incluse messi nero su bianco. Se qualcosa non ti serve, lo togliamo.",
    output: "Prezzo fisso concordato",
  },
  {
    title: "Costruiamo il sito con te",
    time: "Da 2 a 8 settimane",
    text: "Vedi l'anteprima online mentre lavoriamo e ci dici cosa cambiare. Tu ci dai solo testi e foto.",
    output: "Anteprima sempre visibile",
  },
  {
    title: "Pubblichiamo e restiamo al tuo fianco",
    time: "Dopo il lancio",
    text: "Ti mostriamo come aggiornare il sito. Per backup, sicurezza e modifiche c'è un piano di assistenza, se lo vuoi.",
    output: "Sito online e formazione",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="come-lavoriamo"
      className="border-t border-white/10 bg-neutral-950 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Come si lavora insieme
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-400">
            Un percorso semplice, con tempi e costi chiari fin dall&apos;inizio.
            Tu ti occupi della tua attività, al resto pensiamo noi.
          </p>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col bg-neutral-950 p-6">
              <span className="text-sm font-medium text-violet-400">
                Passo {i + 1}
              </span>
              <h3 className="mt-3 text-lg font-medium leading-snug text-white">
                {s.title}
              </h3>
              <p className="mt-1 text-xs text-neutral-500">{s.time}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-400">
                {s.text}
              </p>
              <p className="mt-6 border-t border-white/10 pt-4 text-xs text-neutral-300">
                Cosa ottieni: {s.output}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-white/10 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-white">Hai già un&apos;idea, o solo un problema da risolvere?</p>
            <p className="mt-1 text-sm text-neutral-400">
              Raccontacelo: il preventivo è gratuito e senza impegno.
            </p>
          </div>
          <Link
            href="/contatti"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
          >
            Prenota una chiamata
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}