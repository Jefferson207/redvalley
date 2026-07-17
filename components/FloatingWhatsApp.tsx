"use client";

import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { company } from "@/data/company";

export function FloatingWhatsApp() {
  const t = useTranslations("floatingWhatsapp");

  return (
    <a
      href={company.socialLinks.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp"
      aria-label={t("aria")}
    >
      <span className="floating-whatsapp-card">
        <span className="floating-whatsapp-avatar">
          <Image src="/explora-red-valley-logo.jpeg" alt="" fill sizes="52px" className="object-contain" />
        </span>
        <span>
          <span className="block text-sm font-black text-ember">{company.name}</span>
          <span className="block text-lg font-black leading-tight text-white">{t("message")}</span>
        </span>
      </span>
      <span className="floating-whatsapp-button">
        <MessageCircle size={34} strokeWidth={2.5} />
      </span>
    </a>
  );
}
