import { Eye, ShieldCheck, Target } from "lucide-react";
import Image from "next/image";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { aboutCopy } from "@/data/content";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const copy = aboutCopy[locale];
  return {
    title: `${copy.title} | Nosotros`,
    description: copy.subtitle
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const copy = aboutCopy[locale];

  return (
    <>
      <NavBar />
      <main className="bg-white pt-32 text-slate-950">
        <section className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_18%_0%,rgba(247,183,51,.22),transparent_30rem),radial-gradient(ellipse_at_78%_12%,rgba(239,59,31,.12),transparent_28rem)]" />
          <div className="relative mx-auto max-w-7xl px-5 pb-20">
          <div className="max-w-5xl">
            <p className="text-sm font-black uppercase tracking-[.22em] text-ember">{copy.kicker}</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">{copy.title}</h1>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600 md:text-xl">{copy.subtitle}</p>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-[.95fr_1.05fr]">
            <article className="relative min-h-[560px] overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl">
              <Image src="/pexels-gala-briela-842980063-35925134.jpg" alt={copy.heroTitle} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/66 to-black/28" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/30 to-black/32" />
              <div className="relative z-10 flex min-h-[560px] flex-col justify-end p-7 md:p-10">
                <span className="mb-7 inline-flex w-fit rounded-full bg-solar px-5 py-3 text-sm font-black uppercase tracking-[.12em] text-slate-950">
                  {copy.kicker}
                </span>
                <h2 className="max-w-2xl text-3xl font-black leading-tight text-white md:text-5xl">{copy.heroTitle}</h2>
                <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white drop-shadow-lg">{copy.heroText}</p>
              </div>
            </article>

            <div className="grid gap-6">
              <InfoCard icon={<Target size={28} />} title={copy.missionTitle} text={copy.missionText} />
              <InfoCard icon={<Eye size={28} />} title={copy.visionTitle} text={copy.visionText} />
            </div>
          </div>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-slate-950 md:text-4xl">{copy.valuesTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {copy.values.map(([title, text]) => (
                <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-ember/30 hover:shadow-xl">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ember/10 text-ember">
                    <ShieldCheck size={28} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-slate-950">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </section>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

function InfoCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-solar/40 hover:shadow-xl md:p-10">
      <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-solar">
        {icon}
      </div>
      <h2 className="text-3xl font-black text-slate-950">{title}</h2>
      <p className="mt-6 text-lg font-semibold leading-8 text-slate-600">{text}</p>
    </article>
  );
}
