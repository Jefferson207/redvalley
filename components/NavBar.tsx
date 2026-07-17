"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("nav");
  const brand = useTranslations("brand");
  const locale = useLocale();
  const pathname = usePathname();
  const links = [
    [t("home"), "/#inicio"],
    [t("experiences"), "/#experiencias"],
    [t("about"), "/nosotros"],
    [t("gallery"), "/#galeria"],
    [t("faq"), "/faq"],
    [t("contact"), "/#contacto"]
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 transition ${
          scrolled ? "glass" : "border border-white/10 bg-black/75 backdrop-blur-md"
        }`}
        aria-label="Navegacion principal"
      >
        <Link href="/#inicio" className="flex min-w-0 items-center gap-3">
          <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-solar/25 bg-white p-1 shadow-glow">
            <Image src="/explora-red-valley-logo.jpeg" alt="Explora Red Valley" fill sizes="56px" className="object-contain" priority />
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block text-sm font-black uppercase tracking-[.14em] text-white">
              Explora Red Valley
            </span>
            <span className="mt-0.5 hidden max-w-48 truncate text-xs text-white/54 xl:block">
              {brand("tagline")}
            </span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-full px-4 py-2 text-sm text-white/78 transition hover:bg-white/10 hover:text-white">
              {label}
            </Link>
          ))}
        </div>
        <Link
          href="/#experiencias"
          className="magnetic hidden items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-bold text-white lg:flex"
        >
          <MessageCircle size={17} />
          {t("reserve")}
        </Link>
        <div className="hidden rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
          {["es", "en", "pt"].map((item) => (
            <Link
              key={item}
              href={pathname}
              locale={item}
              className={`rounded-full px-3 py-2 text-xs font-black uppercase ${locale === item ? "bg-solar text-black" : "text-white/62 hover:text-white"}`}
            >
              {item}
            </Link>
          ))}
        </div>
        <button
          className="rounded-full border border-white/15 p-2 text-white lg:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Abrir menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open ? (
        <div className="glass mx-4 mt-3 rounded-3xl p-3 lg:hidden">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-white/86">
              {label}
            </Link>
          ))}
          <div className="mb-2 flex gap-2 px-2">
            {["es", "en", "pt"].map((item) => (
              <Link
                key={item}
                href={pathname}
                locale={item}
                onClick={() => setOpen(false)}
                className={`rounded-full px-4 py-2 text-sm font-black uppercase ${locale === item ? "bg-solar text-black" : "bg-white/10 text-white/70"}`}
              >
                {item}
              </Link>
            ))}
          </div>
          <Link href="/#experiencias" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-ember px-4 py-3 font-bold">
            <MessageCircle size={18} />
            {t("reserve")}
          </Link>
        </div>
      ) : null}
    </header>
  );
}
