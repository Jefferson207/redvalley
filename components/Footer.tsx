"use client";

import {
  Clock,
  ExternalLink,
  Facebook,
  FileText,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  ShieldCheck
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState, type ReactNode } from "react";
import { company } from "@/data/company";
import { Link } from "@/i18n/navigation";

type LinkItem = {
  label: string;
  href: string;
};

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();
  const quickLinks = t.raw("quickLinks.items") as LinkItem[];
  const legalLinks = t.raw("legal.items") as LinkItem[];

  return (
    <footer className="expedition-footer">
      <div className="footer-nightfall" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_.9fr_1.1fr_1fr] lg:gap-10">
          <section className="footer-panel footer-company">
            <div className="flex items-center gap-4">
              <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/15 bg-white">
                <Image src="/explora-red-valley-logo.jpeg" alt={company.name} fill sizes="56px" className="object-cover" />
              </span>
              <div>
                <p className="text-lg font-black uppercase tracking-[.12em] text-white">{company.name}</p>
                <p className="mt-1 text-sm text-solar">{t("company.kicker")}</p>
              </div>
            </div>
            <p className="mt-6 text-base leading-7 text-white/70">{t("company.description")}</p>
            <dl className="mt-6 space-y-3 text-sm text-white/64">
              <FooterFact label={t("company.legalName")} value={company.legalName} />
              <FooterFact label={t("company.ruc")} value={company.ruc} />
              <FooterFact label={t("company.serviceType")} value={company.serviceType} />
            </dl>
            <div className="mt-6 flex flex-wrap gap-2">
              <SocialLink href={company.socialLinks.whatsapp} label="WhatsApp" icon={<MessageCircle size={18} />} />
              <SocialLink href={company.socialLinks.facebook} label="Facebook" icon={<Facebook size={18} />} />
              <SocialLink href={company.socialLinks.instagram} label="Instagram" icon={<Instagram size={18} />} />
              <SocialLink href={company.socialLinks.tiktok} label="TikTok" icon={<Music2 size={18} />} />
            </div>
          </section>

          <FooterAccordion title={t("quickLinks.title")} defaultOpen>
            <FooterLinks items={quickLinks} />
          </FooterAccordion>

          <FooterAccordion title={t("legal.title")} defaultOpen={false}>
            <FooterLinks items={legalLinks} icon="legal" />
            <div className="mt-6 rounded-2xl border border-solar/20 bg-solar/[.06] p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-solar/15 text-solar">
                <ShieldCheck size={20} />
              </div>
              <p className="text-sm leading-6 text-white/72">{t("legal.notice")}</p>
            </div>
          </FooterAccordion>

          <FooterAccordion title={t("contact.title")} defaultOpen>
            <ul className="space-y-4 text-sm text-white/70">
              <ContactItem icon={<MapPin size={18} />} label={t("contact.address")} value={company.address} />
              <ContactItem icon={<Phone size={18} />} label={t("contact.phone")} value={company.phone} href={`tel:${company.phone.replace(/\s/g, "")}`} />
              <ContactItem icon={<MessageCircle size={18} />} label="WhatsApp" value={company.phone} href={company.socialLinks.whatsapp} external />
              <ContactItem icon={<Mail size={18} />} label={t("contact.email")} value={company.email} href={`mailto:${company.email}`} />
              <ContactItem icon={<Clock size={18} />} label={t("contact.schedule")} value={company.schedule} />
              <ContactItem icon={<MapPin size={18} />} label={t("contact.location")} value={company.location} />
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={company.googleMapsUrl} target="_blank" rel="noreferrer" className="footer-action">
                <MapPin size={17} />
                {t("contact.maps")}
              </a>
              <a href={company.socialLinks.whatsapp} target="_blank" rel="noreferrer" className="footer-action footer-action-primary">
                <MessageCircle size={17} />
                {t("contact.whatsappButton")}
              </a>
            </div>
          </FooterAccordion>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/54 md:flex-row md:items-center md:justify-between">
          <p>© {year} {company.name}. {t("bottom.rights")}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/legal/politica-privacidad" className="transition hover:text-solar">{t("bottom.privacy")}</Link>
            <Link href="/legal/terminos-condiciones" className="transition hover:text-solar">{t("bottom.terms")}</Link>
            <span>{t("bottom.developedBy")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterAccordion({ title, children, defaultOpen }: { title: string; children: ReactNode; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="footer-panel footer-accordion" data-open={open}>
      <button className="footer-accordion-trigger" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        {title}
      </button>
      <div className={`footer-accordion-content ${open ? "block" : "hidden"} lg:block`}>{children}</div>
    </section>
  );
}

function FooterLinks({ items, icon }: { items: LinkItem[]; icon?: "legal" }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={`${item.href}-${item.label}`}>
          <Link href={item.href} className="footer-link">
            {icon ? <FileText size={16} /> : <ExternalLink size={15} />}
            <span>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function FooterFact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-white/42">{label}</dt>
      <dd className="mt-1 text-white/72">{value}</dd>
    </div>
  );
}

function ContactItem({ icon, label, value, href, external }: { icon: ReactNode; label: string; value: string; href?: string; external?: boolean }) {
  const content = (
    <>
      <span className="mt-1 text-solar">{icon}</span>
      <span>
        <span className="block text-xs uppercase tracking-[.14em] text-white/42">{label}</span>
        <span className="mt-1 block leading-6">{value}</span>
      </span>
    </>
  );

  return (
    <li>
      {href ? (
        <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="flex gap-3 transition hover:text-white">
          {content}
        </a>
      ) : (
        <div className="flex gap-3">{content}</div>
      )}
    </li>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[.04] text-white/76 transition hover:border-solar/35 hover:bg-solar/10 hover:text-solar">
      {icon}
    </a>
  );
}
