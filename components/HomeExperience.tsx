"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bike, ChevronDown, ClipboardCheck, Clock, Gauge, MapPin, MapPinned, MessageCircle, MoveRight, ShieldCheck, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { homeCopy } from "@/data/content";
import { categories, tourPackages, type TourPackage } from "@/data/packages";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { NavBar } from "./NavBar";
import { ReservationPanel } from "./ReservationPanel";
import { Reveal } from "./Reveal";
import { SmoothScroll } from "./SmoothScroll";

export function HomeExperience({ locale }: { locale: Locale }) {
  const [selected, setSelected] = useState<TourPackage | null>(null);
  const [category, setCategory] = useState("Todos");
  const [heroSlide, setHeroSlide] = useState(0);
  const copy = homeCopy[locale];
  const routeStepIcons = [MapPinned, ClipboardCheck, ShieldCheck, Bike];
  const heroSlides = useMemo(() => tourPackages.map((pkg) => ({
    image: pkg.heroImage,
    title: pkg.name,
    category: pkg.category,
    text: pkg.tagline
  })), []);

  const filtered = useMemo(
    () =>
      tourPackages.filter((pkg) => {
        return category === "Todos" || pkg.category === category;
      }),
    [category]
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <>
      <SmoothScroll />
      <NavBar />
      <main className="expedition-flow">
        <section id="inicio" className="hero-section relative min-h-screen overflow-hidden">
          <Image src="/pexels-danieltello-4166363.jpg" alt="Paisaje de aventura en Cusco" fill priority sizes="100vw" className="hero-cover object-cover" />
          <div className="hero-aurora" aria-hidden="true" />
          <div className="floating-field" aria-hidden="true">
            <span className="float-speck speck-a" />
            <span className="float-speck speck-b" />
            <span className="float-speck speck-c" />
            <span className="float-line line-a" />
          </div>
          <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-24 pt-32 lg:grid-cols-[1fr_430px] lg:pb-0 xl:grid-cols-[1fr_500px]">
            <div className="max-w-3xl">
              <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mb-5 inline-flex rounded-full border border-solar/35 bg-black/35 px-4 py-2 text-sm font-black uppercase tracking-[.22em] text-solar backdrop-blur">
                {copy.heroKicker}
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 38 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .8 }} className="cinema-title max-w-4xl text-3xl text-white sm:text-4xl md:text-6xl">
                <TypewriterTitle text={copy.heroTitle} />
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .75 }} className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                {copy.heroText}
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .32 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/#experiencias" className="magnetic pulse-reserve inline-flex items-center justify-center gap-2 rounded-full bg-ember px-7 py-4 font-black text-white">
                  {copy.reserveAdventure} <MessageCircle size={20} />
                </Link>
                <Link href="/#recorrido" className="magnetic inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur">
                  {copy.discover} <ChevronDown size={20} />
                </Link>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, x: 34 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .22, duration: .7 }} className="hero-carousel">
              <div className="relative h-full min-h-[430px] overflow-hidden rounded-[2rem] border border-white/12 bg-black shadow-2xl">
                {heroSlides.map((slide, index) => (
                  <div key={slide.title} className={`absolute inset-0 transition duration-700 ${heroSlide === index ? "opacity-100" : "opacity-0"}`}>
                    <Image src={slide.image} alt={slide.title} fill priority={index === 0} sizes="(min-width: 1280px) 500px, (min-width: 1024px) 430px, 100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/22 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="inline-flex rounded-full border border-solar/25 bg-black/42 px-3 py-1 text-xs font-black uppercase tracking-[.16em] text-solar backdrop-blur">
                        {slide.category}
                      </span>
                      <h2 className="mt-4 text-2xl font-black leading-tight text-white">{slide.title}</h2>
                      <p className="mt-3 text-sm leading-6 text-white/72">{slide.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  {heroSlides.map((slide, index) => (
                    <button key={slide.title} type="button" onClick={() => setHeroSlide(index)} aria-label={`Ver imagen ${index + 1}`} className={`h-2.5 rounded-full transition ${heroSlide === index ? "w-8 bg-solar" : "w-2.5 bg-white/28 hover:bg-white/50"}`} />
                  ))}
                </div>
                <Link href="/#experiencias" className="inline-flex items-center gap-2 text-sm font-black text-white/74 transition hover:text-solar">
                  {copy.experiencesKicker}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="story-chapter section-light relative overflow-hidden py-28" id="concepto">
          <div className="moving-mist" />
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.82fr_1.18fr]">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[.22em] text-ember">{copy.conceptKicker}</p>
              <h2 className="cinema-title mt-4 text-2xl text-slate-950 md:text-4xl">{copy.conceptTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">{copy.conceptText}</p>
            </Reveal>
            <Reveal delay={.1} className="relative grid gap-4 md:grid-cols-2">
              {copy.stages.map(([title, text]) => (
                <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm" key={title}>
                  <h3 className="text-xl font-black text-slate-950">{title}</h3>
                  <p className="mt-3 text-slate-600">{text}</p>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        <div className="shared-route-backdrop relative overflow-hidden">
          <Image src="/pexels-gala-briela-842980063-35925134.jpg" alt="Ruta de cuatrimoto en montana" fill sizes="100vw" className="shared-route-image object-cover" />
          <div className="absolute inset-0 z-[1] bg-black/58" />
          <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/38 via-transparent to-black/30" />
          <div className="route-floating-field" aria-hidden="true">
            <span className="route-glow-dot dot-a" />
            <span className="route-glow-dot dot-b" />
            <span className="route-glow-dot dot-c" />
          </div>

          <section id="experiencias" className="story-chapter chapter-experiences route-shared-section relative py-24">
            <div className="pointer-events-none absolute left-0 right-0 top-0 z-[1] h-72 bg-[radial-gradient(ellipse_at_30%_20%,rgba(247,183,51,.16),transparent_44%),radial-gradient(ellipse_at_74%_14%,rgba(239,59,31,.14),transparent_48%)] blur-2xl" />
            <div className="mx-auto max-w-7xl px-5">
              <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div className="section-copy-boost">
                  <p className="text-sm font-black uppercase tracking-[.22em] text-solar">{copy.experiencesKicker}</p>
                  <h2 className="cinema-title mt-3 text-2xl text-white md:text-4xl">{copy.experiencesTitle}</h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-white/82">{copy.experiencesText}</p>
                </div>
                <div className="glass rounded-2xl p-3 md:max-w-xl">
                  <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[.12em] text-solar">
                    <SlidersHorizontal size={16} className="text-solar" />
                    {copy.filters}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {categories.map((item) => (
                      <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-3 py-1.5 text-xs font-black transition ${category === item ? "bg-solar text-black" : "bg-white/9 text-white/68 hover:bg-white/14 hover:text-white"}`} type="button">
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>

              <div className="relative mt-14 grid gap-6 lg:grid-cols-3">
                <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-solar/40 to-transparent lg:block" />
                {filtered.map((pkg, index) => (
                  <Reveal key={pkg.slug} delay={index * .06}>
                    <article className={`group relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl transition duration-500 hover:-translate-y-2 hover:rotate-[.35deg] hover:border-solar/35 ${index === 1 ? "lg:mt-16" : ""}`}>
                      <Image src={pkg.heroImage} alt={pkg.name} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent transition group-hover:via-black/10" />
                      <div className="absolute left-5 top-5 rounded-full bg-black/45 px-4 py-2 text-sm font-black text-solar backdrop-blur">{pkg.category}</div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="cinema-title text-xl">{pkg.name}</h3>
                        <p className="mt-3 text-white/72">{pkg.shortDescription}</p>
                        <div className="mt-5 grid grid-cols-3 gap-2 text-sm">
                          <Pill icon={<Clock size={15} />} text={pkg.duration} />
                          <Pill icon={<Gauge size={15} />} text={pkg.difficulty} />
                          <Pill icon={<MapPin size={15} />} text={pkg.departureTime} />
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-3">
                          <div>
                            <p className="text-xs uppercase tracking-[.18em] text-white/48">{copy.from}</p>
                            <p className="text-2xl font-black text-solar">{pkg.currency} {pkg.promoPrice ?? pkg.price}</p>
                          </div>
                          <div className="flex translate-y-2 gap-2 opacity-90 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <Link href={`/paquetes/${pkg.slug}`} className="rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold">{copy.view}</Link>
                            <button className="magnetic rounded-full bg-ember px-4 py-3 text-sm font-black" type="button" onClick={() => setSelected(pkg)}>
                              {copy.reserve}
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section id="recorrido" className="story-chapter route-feature route-shared-section relative overflow-hidden py-28">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr]">
              <Reveal>
                <p className="text-sm font-black uppercase tracking-[.22em] text-solar">{copy.routeKicker}</p>
                <h2 className="cinema-title mt-3 text-xl text-white md:text-3xl">{copy.routeTitle}</h2>
                <p className="mt-6 text-lg leading-8 text-white/72">{copy.routeText}</p>
              </Reveal>
              <div className="route-board route-arrow-board relative rounded-[2rem] border border-white/10 p-5">
                {copy.routeStages.map((item, index) => {
                  const Icon = routeStepIcons[index] ?? MapPinned;
                  return (
                    <Reveal key={item} delay={index * .04} className="relative">
                      <div className="route-step-card route-arrow-card rounded-2xl p-5 text-center">
                        <span className="route-step-number">{index + 1}</span>
                        <span className="route-step-icon">
                          <Icon size={42} strokeWidth={2.1} />
                        </span>
                        <h3 className="mt-5 text-base font-black text-slate-950">{item}</h3>
                        <p className="mt-2 text-xs leading-5 text-slate-600">{copy.routeStageTexts[index]}</p>
                        <span className="mx-auto mt-5 block h-0.5 w-10 rounded-full bg-ember/80" />
                      </div>
                      {index < copy.routeStages.length - 1 ? <MoveRight className="route-arrow-icon" size={22} /> : null}
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        <section id="galeria" className="story-chapter section-light overflow-hidden py-20">
          <div className="mx-auto max-w-7xl px-5">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[.22em] text-ember">{copy.galleryKicker}</p>
              <h2 className="cinema-title mt-3 text-xl text-slate-950 md:text-3xl">{copy.galleryTitle}</h2>
            </Reveal>
            <div className="gallery-marquee mask-fade mt-8 overflow-hidden pb-4">
              <div className="gallery-track">
                {[...tourPackages.flatMap((pkg) => pkg.gallery), ...tourPackages.flatMap((pkg) => pkg.gallery)].map((src, index) => (
                  <button key={`${src}-${index}`} className={`group relative shrink-0 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100 shadow-sm ${index % 3 === 0 ? "h-[320px] w-[250px]" : "mt-8 h-[270px] w-[220px]"}`} type="button" aria-label="Open photo">
                    <Image src={src} alt="Adventure landscape in Cusco" fill sizes="280px" className="object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-0 transition group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="story-chapter final-reserve relative min-h-[82vh] overflow-hidden py-24">
          <Image src="/pexels-jibanesports-5095992.jpg" alt="Aventura en cuatrimoto" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/94 via-black/78 to-black/54" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/94 via-black/42 to-black/52" />
            <div className="relative z-10 mx-auto flex min-h-[62vh] max-w-7xl items-center px-5">
            <Reveal className="section-copy-boost max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[.22em] text-solar">{copy.finalKicker}</p>
              <h2 className="cinema-title mt-4 text-3xl text-white md:text-6xl">{copy.finalTitle}</h2>
              <button className="magnetic pulse-reserve mt-9 inline-flex items-center gap-3 rounded-full bg-emerald-500 px-8 py-5 font-black text-black" type="button" onClick={() => setSelected(tourPackages[0])}>
                {copy.reserveWhatsApp} <ArrowRight size={22} />
              </button>
            </Reveal>
          </div>
        </section>

        <Footer />
      </main>

      <FloatingWhatsApp />

      <ReservationPanel pkg={selected} open={Boolean(selected)} onClose={() => setSelected(null)} />
    </>
  );
}

function Pill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="flex min-h-11 items-center justify-center gap-1 rounded-xl bg-white/10 px-2 text-center text-xs text-white/76 backdrop-blur [&_svg]:text-solar">
      {icon}
      {text}
    </span>
  );
}

function TypewriterTitle({ text }: { text: string }) {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setVisibleText(text);
      return;
    }

    setVisibleText("");
    let index = 0;
    const startDelay = window.setTimeout(() => {
      const interval = window.setInterval(() => {
        index += 1;
        setVisibleText(text.slice(0, index));
        if (index >= text.length) window.clearInterval(interval);
      }, 28);
    }, 450);

    return () => window.clearTimeout(startDelay);
  }, [text]);

  return (
    <span className="typewriter-title" aria-label={text}>
      <span aria-hidden="true">{visibleText}</span>
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
}
