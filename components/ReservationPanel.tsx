"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, CalendarDays, Check, MessageCircle, X } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { company } from "@/data/company";
import type { TourPackage } from "@/data/packages";
import { buildWhatsAppMessage, calculateTotal, getMinDate, reservationSchema, type ReservationValues } from "@/lib/reservation";

type Props = {
  pkg: TourPackage | null;
  open: boolean;
  onClose: () => void;
};

const inputClass = "w-full rounded-2xl border border-white/12 bg-white/[.07] px-4 py-3 text-white outline-none transition placeholder:text-white/38 focus:border-solar";

export function ReservationPanel({ pkg, open, onClose }: Props) {
  const t = useTranslations("reservation");
  const locale = useLocale() as "es" | "en" | "pt";
  const [step, setStep] = useState<1 | 2>(1);
  const [submitting, setSubmitting] = useState(false);
  const storageKey = pkg ? `reservation-${pkg.slug}` : "reservation-draft";

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors }
  } = useForm<ReservationValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      packageSlug: pkg?.slug ?? "",
      date: "",
      schedule: pkg?.schedules[0] ?? "",
      adults: 2,
      children: 0,
      atvs: 1,
      mode: "Compartida",
      fullName: "",
      country: "",
      phone: "",
      email: "",
      hotel: "",
      pickup: "Si",
      comments: ""
    }
  });

  const values = watch();
  const total = useMemo(() => (pkg ? calculateTotal(pkg, values) : 0), [pkg, values]);

  useEffect(() => {
    if (!pkg || !open) return;
    const saved = localStorage.getItem(storageKey);
    reset(saved ? JSON.parse(saved) : { ...values, packageSlug: pkg.slug, schedule: pkg.schedules[0] ?? "" });
    setStep(1);
  }, [pkg, open]);

  useEffect(() => {
    if (!open || !pkg) return;
    const subscription = watch((value) => localStorage.setItem(storageKey, JSON.stringify(value)));
    return () => subscription.unsubscribe();
  }, [open, pkg, watch, storageKey]);

  if (!pkg || !open) return null;

  const goSummary = async () => {
    const ok = await trigger();
    if (ok) setStep(2);
  };

  const submit = (formValues: ReservationValues) => {
    setSubmitting(true);
    const message = buildWhatsAppMessage(pkg, formValues, calculateTotal(pkg, formValues), locale);
    const url = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setSubmitting(false);
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-[70] bg-black/72 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="ml-auto flex h-full w-full max-w-3xl flex-col overflow-y-auto bg-[#100d0a] shadow-2xl">
        <div className="relative min-h-56 overflow-hidden">
          <Image src={pkg.heroImage} alt={pkg.name} fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#100d0a] via-[#100d0a]/25 to-transparent" />
          <button className="absolute right-4 top-4 rounded-full bg-black/50 p-3 text-white backdrop-blur" type="button" onClick={onClose} aria-label="Cerrar reserva">
            <X size={20} />
          </button>
          <div className="absolute bottom-5 left-5 right-5">
            <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-solar px-3 py-1 text-xs font-black uppercase text-black">
              <CalendarDays size={14} />
              {t("title")}
            </p>
            <h2 className="cinema-title text-3xl md:text-5xl">{pkg.name}</h2>
          </div>
        </div>

        <div className="flex gap-2 px-5 pt-5">
          {[1, 2].map((item) => (
            <div key={item} className={`h-1.5 flex-1 rounded-full ${step >= item ? "bg-ember" : "bg-white/12"}`} />
          ))}
        </div>

        <form onSubmit={handleSubmit(submit)} className="space-y-6 p-5 md:p-8">
          <input type="hidden" {...register("packageSlug")} value={pkg.slug} />

          {step === 1 ? (
            <div className="grid gap-4 md:grid-cols-2">
              <Field label={t("date")} error={errors.date?.message}>
                <input className={inputClass} type="date" min={getMinDate()} {...register("date")} />
              </Field>
              <Field label={t("schedule")} error={errors.schedule?.message}>
                <select className={inputClass} {...register("schedule")}>
                  {pkg.schedules.map((schedule) => (
                    <option className="bg-[#100d0a]" key={schedule} value={schedule}>
                      {schedule}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={t("adults")} error={errors.adults?.message}>
                <input className={inputClass} type="number" min={1} {...register("adults")} />
              </Field>
              <Field label={t("children")} error={errors.children?.message}>
                <input className={inputClass} type="number" min={0} {...register("children")} />
              </Field>
              <Field label={t("atvs")} error={errors.atvs?.message}>
                <input className={inputClass} type="number" min={1} {...register("atvs")} />
              </Field>
              <Field label={t("mode")} error={errors.mode?.message}>
                <select className={inputClass} {...register("mode")}>
                  <option className="bg-[#100d0a]" value="Compartida">{t("shared")}</option>
                  <option className="bg-[#100d0a]" value="Individual">{t("individual")}</option>
                </select>
              </Field>
              <Field label={t("fullName")} error={errors.fullName?.message}>
                <input className={inputClass} placeholder="Tu nombre" {...register("fullName")} />
              </Field>
              <Field label={t("country")} error={errors.country?.message}>
                <input className={inputClass} placeholder="Peru, Mexico, Chile..." {...register("country")} />
              </Field>
              <Field label={t("phone")} error={errors.phone?.message}>
                <input className={inputClass} placeholder="+51 999 999 999" {...register("phone")} />
              </Field>
              <Field label={t("email")} error={errors.email?.message}>
                <input className={inputClass} type="email" placeholder="nombre@correo.com" {...register("email")} />
              </Field>
              <Field label={t("hotel")} error={errors.hotel?.message}>
                <input className={inputClass} placeholder="Hotel o punto de referencia" {...register("hotel")} />
              </Field>
              <Field label={t("pickup")} error={errors.pickup?.message}>
                <select className={inputClass} {...register("pickup")}>
                  <option className="bg-[#100d0a]" value="Si">{t("yes")}</option>
                  <option className="bg-[#100d0a]" value="No">{t("no")}</option>
                </select>
              </Field>
              <Field label={t("comments")} className="md:col-span-2" error={errors.comments?.message}>
                <textarea className={`${inputClass} min-h-28 resize-none`} placeholder="Cuéntanos si tienes horarios, dudas o pedidos especiales" {...register("comments")} />
              </Field>
            </div>
          ) : (
            <div className="grid gap-4">
              <div className="rounded-3xl border border-solar/30 bg-solar/10 p-5">
                <p className="text-sm uppercase tracking-[.18em] text-solar">{t("total")}</p>
                <p className="mt-2 text-4xl font-black">{pkg.currency} {total.toFixed(2)}</p>
                <p className="mt-2 text-sm text-white/62">{t("totalNote")}</p>
              </div>
              <Summary label="Paquete" value={pkg.name} />
              <Summary label="Fecha y horario" value={`${values.date || "-"} / ${values.schedule || "-"}`} />
              <Summary label="Pasajeros" value={`${values.adults} adultos, ${values.children} ninos`} />
              <Summary label="Cuatrimotos y modalidad" value={`${values.atvs} / ${values.mode}`} />
              <Summary label="Cliente" value={`${values.fullName || "-"} - ${values.country || "-"}`} />
              <Summary label="Contacto" value={`${values.phone || "-"} / ${values.email || "-"}`} />
              <Summary label="Recojo" value={`${values.pickup} - ${values.hotel || "-"}`} />
              {values.comments ? <Summary label="Observaciones" value={values.comments} /> : null}
            </div>
          )}

          <div className="sticky bottom-0 -mx-5 flex gap-3 border-t border-white/10 bg-[#100d0a]/92 p-5 backdrop-blur md:-mx-8 md:px-8">
            {step === 2 ? (
              <button className="rounded-2xl border border-white/15 px-5 py-3 text-white" type="button" onClick={() => setStep(1)}>
                <ArrowLeft size={18} />
              </button>
            ) : null}
            {step === 1 ? (
              <button className="magnetic flex-1 rounded-2xl bg-solar px-5 py-4 font-black text-black" type="button" onClick={goSummary}>
                {t("summary")}
              </button>
            ) : (
              <button className="magnetic pulse-reserve flex flex-1 items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-4 font-black text-black" type="submit" disabled={submitting}>
                {submitting ? <Check size={20} /> : <MessageCircle size={20} />}
                {submitting ? t("loading") : t("confirm")}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, error, children, className = "" }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-bold text-white/78">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm text-orange-300">{error}</span> : null}
    </label>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[.045] p-4">
      <p className="text-xs uppercase tracking-[.18em] text-white/42">{label}</p>
      <p className="mt-1 font-semibold text-white">{value}</p>
    </div>
  );
}
