import type { Metadata } from "next";
import ContactForm from "@/components/Contacts/ContactForm";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Hai un progetto in mente? Scrivimi e ricevi un preventivo gratuito entro 24 ore.",
};

const contacts = [
  {
    label: "Email",
    value: "emanuele.webdeveloper.92@gmail.it",
    href: "mailto:emanuele.webdeveloper.92@gmail.it",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+39 328 620 8187",
    href: "https://wa.me/393286208187",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.52 3.48A11.8 11.8 0 0 0 12.13 0C5.57 0 .23 5.34.23 11.9c0 2.1.55 4.15 1.6 5.96L.13 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01c6.56 0 11.9-5.34 11.9-11.9a11.8 11.8 0 0 0-3.52-8.42ZM12.14 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.85 9.85 0 0 1-1.52-5.27c0-5.46 4.45-9.9 9.92-9.9a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.9 7c0 5.46-4.45 9.9-9.9 9.9Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.07-.81.37-.28.3-1.06 1.03-1.06 2.51s1.09 2.91 1.24 3.11c.15.2 2.14 3.27 5.18 4.59.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
      </svg>
    ),
  },
  {
    label: "Posizione",
    value: "Italia — disponibile da remoto",
    href: null,
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emanuele-napolano-web-developer/",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/EmanueleNapolanoWebDeveloper",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/en_webdeveloper/",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61580969770286",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5v1.8H17l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
      </svg>
    ),
  },
];

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-widest uppercase rounded-full bg-white/5 border border-white/10 text-white/50">
          Contatti
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Iniziamo a{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">
            lavorare insieme
          </span>
        </h1>
        <p className="max-w-xl mx-auto text-white/50 text-lg">
          Hai un progetto in mente? Raccontamelo. Rispondo entro 24 ore con un
          preventivo gratuito e senza impegno.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sidebar info */}
          <aside className="lg:col-span-2 flex flex-col gap-6">
            {/* Contatti diretti */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/8">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-white/35 mb-5">
                Contatti diretti
              </h2>
              <ul className="flex flex-col gap-5">
                {contacts.map(({ label, value, href, icon }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="mt-0.5 w-9 h-9 shrink-0 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/40">
                      {icon}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-white/30">{label}</span>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm text-white/70 hover:text-white transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={value}
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-sm text-white/70">{value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/8">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-white/35 mb-5">
                Seguimi
              </h2>
              <div className="flex items-center gap-3">
                {socials.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Disponibilità */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/8">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-white/35 mb-4">
                Disponibilità
              </h2>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
                <span className="text-sm text-emerald-400 font-medium">
                  Disponibile per nuovi progetti
                </span>
              </div>
              <p className="text-xs text-white/35 leading-relaxed">
                Accetto nuovi lavori da remoto o in presenza in tutta Italia. I
                tempi di avvio dipendono dal carico di lavoro attuale.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-3 p-8 rounded-2xl bg-white/[0.03] border border-white/8">
            <h2 className="text-lg font-semibold mb-1">Inviami un messaggio</h2>
            <p className="text-sm text-white/40 mb-8">
              Compila il form e ti rispondo nel più breve tempo possibile.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
