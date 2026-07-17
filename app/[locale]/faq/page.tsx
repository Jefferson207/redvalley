import { HelpCircle, MessageCircle } from "lucide-react";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { company } from "@/data/company";
import { faqCopy, homeCopy } from "@/data/content";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const copy = faqCopy[locale];
  return {
    title: `${copy.title} | Explora Red Valley`,
    description: copy.subtitle
  };
}

export default async function FaqPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const copy = faqCopy[locale];
  const home = homeCopy[locale];

  return (
    <>
      <NavBar />
      <main className="bg-slate-50 pt-32 text-slate-950">
        <section className="mx-auto max-w-5xl px-5 pb-20">
          <div>
            <p className="text-sm font-black uppercase tracking-[.22em] text-ember">{copy.kicker}</p>
            <h1 className="mt-4 text-5xl font-light tracking-tight text-slate-950 md:text-7xl">{copy.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">{copy.subtitle}</p>
          </div>

          <div className="mt-10 space-y-4">
            {home.faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-xl font-semibold text-slate-950">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="shrink-0 text-ember" size={24} />
                    {question}
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-500 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-5 border-t border-slate-100 pt-5 text-lg leading-8 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>

          <aside className="mt-10 rounded-[2rem] bg-slate-950 p-7 text-white md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="text-3xl font-light">{copy.contactTitle}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-white/70">{copy.contactText}</p>
            </div>
            <a href={company.socialLinks.whatsapp} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-ember px-6 py-4 font-black text-white md:mt-0">
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </aside>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
