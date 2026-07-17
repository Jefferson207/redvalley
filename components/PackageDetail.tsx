"use client";

import { ArrowLeft, CheckCircle2, Clock, Gauge, MapPin, MessageCircle, XCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { tourPackages, type TourPackage } from "@/data/packages";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { NavBar } from "./NavBar";
import { ReservationPanel } from "./ReservationPanel";
import { Reveal } from "./Reveal";
import { SmoothScroll } from "./SmoothScroll";

const packageCopy: Record<Locale, {
  back: string;
  duration: string;
  difficulty: string;
  departure: string;
  from: string;
  reservePackage: string;
  experience: string;
  detailsTitle: string;
  meetingPoint: string;
  recommendedAge: string;
  people: string;
  availability: string;
  feature: string;
  policy: string;
  itinerary: string;
  itineraryTitle: string;
  includes: string;
  notIncludes: string;
  packageGallery: string;
  galleryTitle: string;
  recommendations: string;
  relatedKicker: string;
  relatedTitle: string;
  reserveNow: string;
}> = {
  es: {
    back: "Volver a experiencias",
    duration: "Duracion",
    difficulty: "Dificultad",
    departure: "Salida",
    from: "Desde",
    reservePackage: "Reservar este paquete",
    experience: "La experiencia",
    detailsTitle: "Detalles para decidir rapido.",
    meetingPoint: "Punto de encuentro",
    recommendedAge: "Edad recomendada",
    people: "Personas",
    availability: "Disponibilidad",
    feature: "Caracteristica principal",
    policy: "Politica",
    itinerary: "Itinerario",
    itineraryTitle: "El camino por etapas.",
    includes: "Incluye",
    notIncludes: "No incluye",
    packageGallery: "Galeria del paquete",
    galleryTitle: "Mira la ruta antes de reservar.",
    recommendations: "Recomendaciones",
    relatedKicker: "Tambien puedes mirar",
    relatedTitle: "Paquetes relacionados.",
    reserveNow: "Reservar ahora"
  },
  en: {
    back: "Back to experiences",
    duration: "Duration",
    difficulty: "Difficulty",
    departure: "Departure",
    from: "From",
    reservePackage: "Book this package",
    experience: "The experience",
    detailsTitle: "Details to decide quickly.",
    meetingPoint: "Meeting point",
    recommendedAge: "Recommended age",
    people: "People",
    availability: "Availability",
    feature: "Main feature",
    policy: "Policy",
    itinerary: "Itinerary",
    itineraryTitle: "The route by stages.",
    includes: "Includes",
    notIncludes: "Not included",
    packageGallery: "Package gallery",
    galleryTitle: "See the route before booking.",
    recommendations: "Recommendations",
    relatedKicker: "You may also like",
    relatedTitle: "Related packages.",
    reserveNow: "Book now"
  },
  pt: {
    back: "Voltar para experiencias",
    duration: "Duracao",
    difficulty: "Dificuldade",
    departure: "Saida",
    from: "Desde",
    reservePackage: "Reservar este pacote",
    experience: "A experiencia",
    detailsTitle: "Detalhes para decidir rapido.",
    meetingPoint: "Ponto de encontro",
    recommendedAge: "Idade recomendada",
    people: "Pessoas",
    availability: "Disponibilidade",
    feature: "Caracteristica principal",
    policy: "Politica",
    itinerary: "Itinerario",
    itineraryTitle: "O caminho por etapas.",
    includes: "Inclui",
    notIncludes: "Nao inclui",
    packageGallery: "Galeria do pacote",
    galleryTitle: "Veja a rota antes de reservar.",
    recommendations: "Recomendacoes",
    relatedKicker: "Voce tambem pode ver",
    relatedTitle: "Pacotes relacionados.",
    reserveNow: "Reservar agora"
  }
};

export function PackageDetail({ pkg, locale }: { pkg: TourPackage; locale: Locale }) {
  const [reserveOpen, setReserveOpen] = useState(false);
  const related = tourPackages.filter((item) => item.slug !== pkg.slug).slice(0, 2);
  const c = packageCopy[locale];

  return (
    <>
      <SmoothScroll />
      <NavBar />
      <main>
        <section className="relative min-h-screen overflow-hidden">
          <Image src={pkg.heroImage} alt={pkg.name} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/56 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
          <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-24 pt-32">
            <div className="max-w-4xl">
              <Link href="/#experiencias" className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
                <ArrowLeft size={17} />
                {c.back}
              </Link>
              <p className="mb-4 inline-flex rounded-full bg-solar px-4 py-2 text-sm font-black uppercase tracking-[.18em] text-black">{pkg.category}</p>
              <h1 className="cinema-title text-5xl md:text-8xl">{pkg.name}</h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-white/78">{pkg.tagline}</p>
              <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-4">
                <Metric icon={<Clock />} label={c.duration} value={pkg.duration} />
                <Metric icon={<Gauge />} label={c.difficulty} value={pkg.difficulty} />
                <Metric icon={<MapPin />} label={c.departure} value={pkg.departureTime} />
                <Metric icon={<MessageCircle />} label={c.from} value={`${pkg.currency} ${pkg.promoPrice ?? pkg.price}`} />
              </div>
              <button className="magnetic pulse-reserve mt-8 rounded-full bg-ember px-8 py-5 font-black text-white" type="button" onClick={() => setReserveOpen(true)}>
                {c.reservePackage}
              </button>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr]">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[.22em] text-skyglass">{c.experience}</p>
              <h2 className="cinema-title mt-3 text-4xl md:text-6xl">{c.detailsTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-white/68">{pkg.fullDescription}</p>
            </Reveal>
            <Reveal className="grid gap-4 md:grid-cols-2">
              {[
                [c.meetingPoint, pkg.meetingPoint],
                [c.recommendedAge, pkg.recommendedAge],
                [c.people, `${pkg.minPeople} a ${pkg.maxPeople}`],
                [c.availability, pkg.availability],
                [c.feature, pkg.feature],
                [c.policy, pkg.cancellationPolicy]
              ].map(([label, value]) => (
                <article className="rounded-3xl border border-white/10 bg-white/[.045] p-5" key={label}>
                  <p className="text-xs uppercase tracking-[.18em] text-solar">{label}</p>
                  <p className="mt-2 font-semibold text-white/82">{value}</p>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-5">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[.22em] text-ember">{c.itinerary}</p>
              <h2 className="cinema-title mt-3 text-4xl md:text-7xl">{c.itineraryTitle}</h2>
            </Reveal>
            <div className="mt-10 grid gap-4">
              {pkg.itinerary.map((stage, index) => (
                <Reveal key={stage.title} delay={index * .05}>
                  <article className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[.045] p-5 md:grid-cols-[140px_1fr] md:items-center">
                    <div className="text-4xl font-black text-solar">{stage.time}</div>
                    <div>
                      <h3 className="text-2xl font-black">{stage.title}</h3>
                      <p className="mt-2 text-white/64">{stage.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2">
            <Reveal>
              <h2 className="cinema-title text-4xl md:text-6xl">{c.includes}</h2>
              <div className="mt-6 space-y-3">
                {pkg.included.map((item) => (
                  <p className="flex items-center gap-3 rounded-2xl bg-emerald-500/10 p-4 text-white/82" key={item}>
                    <CheckCircle2 className="text-emerald-400" />
                    {item}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={.1}>
              <h2 className="cinema-title text-4xl md:text-6xl">{c.notIncludes}</h2>
              <div className="mt-6 space-y-3">
                {pkg.notIncluded.map((item) => (
                  <p className="flex items-center gap-3 rounded-2xl bg-ember/10 p-4 text-white/82" key={item}>
                    <XCircle className="text-ember" />
                    {item}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-5">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[.22em] text-solar">{c.packageGallery}</p>
              <h2 className="cinema-title mt-3 text-4xl md:text-7xl">{c.galleryTitle}</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {pkg.gallery.map((src, index) => (
                <Reveal key={src} delay={index * .05}>
                  <div className={`relative overflow-hidden rounded-[2rem] border border-white/10 ${index === 0 ? "h-[520px] md:col-span-2" : "h-[250px]"}`}>
                    <Image src={src} alt={`${pkg.name} fotografia ${index + 1}`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-5">
            <Reveal>
              <h2 className="cinema-title text-4xl md:text-6xl">{c.recommendations}</h2>
            </Reveal>
            <div className="mt-6 flex flex-wrap gap-3">
              {pkg.recommendations.map((item) => (
                <span className="rounded-full border border-white/10 bg-white/[.06] px-5 py-3 font-bold text-white/78" key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-5">
            <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[.22em] text-skyglass">{c.relatedKicker}</p>
                <h2 className="cinema-title mt-3 text-4xl md:text-6xl">{c.relatedTitle}</h2>
              </div>
              <button className="magnetic hidden rounded-full bg-ember px-7 py-4 font-black md:inline-flex" onClick={() => setReserveOpen(true)} type="button">
                {c.reservePackage}
              </button>
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {related.map((item) => (
                <Link href={`/paquetes/${item.slug}`} key={item.slug} className="group relative h-80 overflow-hidden rounded-[2rem] border border-white/10">
                  <Image src={item.heroImage} alt={item.name} fill sizes="50vw" className="object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="cinema-title text-3xl">{item.name}</h3>
                    <p className="mt-2 text-white/64">{item.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <button className="fixed bottom-4 left-4 right-4 z-40 rounded-2xl bg-ember px-5 py-4 font-black text-white shadow-glow md:hidden" type="button" onClick={() => setReserveOpen(true)}>
        {c.reserveNow}
      </button>

      <ReservationPanel pkg={pkg} open={reserveOpen} onClose={() => setReserveOpen(false)} />
    </>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="glass rounded-3xl p-4">
      <div className="text-solar">{icon}</div>
      <p className="mt-3 text-xs uppercase tracking-[.18em] text-white/42">{label}</p>
      <p className="mt-1 font-black">{value}</p>
    </div>
  );
}
