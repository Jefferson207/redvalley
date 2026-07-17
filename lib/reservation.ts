import { z } from "zod";
import type { TourPackage } from "@/data/packages";
import type { Locale } from "@/i18n/routing";

export const reservationSchema = z.object({
  packageSlug: z.string().min(1),
  date: z.string().min(1, "Elige una fecha"),
  schedule: z.string().min(1, "Elige un horario"),
  adults: z.coerce.number().int().min(1, "Debe viajar al menos un adulto"),
  children: z.coerce.number().int().min(0),
  atvs: z.coerce.number().int().min(1, "Indica la cantidad de cuatrimotos"),
  mode: z.enum(["Compartida", "Individual"]),
  fullName: z.string().min(3, "Escribe tu nombre completo"),
  country: z.string().min(2, "Indica tu pais"),
  phone: z.string().min(7, "Ingresa un celular valido"),
  email: z.string().email("Ingresa un correo valido"),
  hotel: z.string().min(2, "Indica tu hotel o punto de alojamiento"),
  pickup: z.enum(["Si", "No"]),
  comments: z.string().optional()
});

export type ReservationValues = z.infer<typeof reservationSchema>;

export function getMinDate() {
  return new Date().toISOString().split("T")[0];
}

export function calculateTotal(pkg: TourPackage, values: Pick<ReservationValues, "adults" | "children" | "atvs" | "mode">) {
  const base = pkg.promoPrice ?? pkg.price;
  const childPrice = Math.round(base * 0.75);
  const modeFee = values.mode === "Individual" ? 35 * values.atvs : 0;
  return values.adults * base + values.children * childPrice + modeFee;
}

const whatsappCopy: Record<Locale, {
  title: string;
  intro: string;
  package: string;
  date: string;
  schedule: string;
  adults: string;
  children: string;
  atvs: string;
  mode: string;
  passenger: string;
  name: string;
  country: string;
  phone: string;
  email: string;
  hotel: string;
  pickup: string;
  total: string;
  comment: string;
  fallback: string;
  closing: string;
}> = {
  es: {
    title: "*Nueva solicitud de reserva*",
    intro: "Hola, deseo consultar la disponibilidad del siguiente tour:",
    package: "Paquete",
    date: "Fecha",
    schedule: "Horario",
    adults: "Adultos",
    children: "Ninos",
    atvs: "Cuatrimotos",
    mode: "Modalidad",
    passenger: "*Datos del pasajero*",
    name: "Nombre",
    country: "Pais",
    phone: "Celular",
    email: "Correo",
    hotel: "Hotel",
    pickup: "Recojo",
    total: "Total referencial",
    comment: "Comentario",
    fallback: "Deseo confirmar disponibilidad y precio final para esa fecha.",
    closing: "Quedo atento a su confirmacion. Gracias."
  },
  en: {
    title: "*New booking request*",
    intro: "Hello, I would like to check availability for this tour:",
    package: "Package",
    date: "Date",
    schedule: "Time",
    adults: "Adults",
    children: "Children",
    atvs: "ATVs",
    mode: "Mode",
    passenger: "*Passenger details*",
    name: "Name",
    country: "Country",
    phone: "Phone",
    email: "Email",
    hotel: "Hotel",
    pickup: "Pickup",
    total: "Reference total",
    comment: "Comment",
    fallback: "I would like to confirm availability and final price for that date.",
    closing: "I look forward to your confirmation. Thank you."
  },
  pt: {
    title: "*Nova solicitacao de reserva*",
    intro: "Ola, gostaria de consultar a disponibilidade deste tour:",
    package: "Pacote",
    date: "Data",
    schedule: "Horario",
    adults: "Adultos",
    children: "Criancas",
    atvs: "Quadriciclos",
    mode: "Modalidade",
    passenger: "*Dados do passageiro*",
    name: "Nome",
    country: "Pais",
    phone: "Celular",
    email: "E-mail",
    hotel: "Hotel",
    pickup: "Busca",
    total: "Total referencial",
    comment: "Comentario",
    fallback: "Gostaria de confirmar disponibilidade e preco final para essa data.",
    closing: "Fico no aguardo da confirmacao. Obrigado."
  }
};

export function buildWhatsAppMessage(pkg: TourPackage, values: ReservationValues, total: number, locale: Locale = "es") {
  const w = whatsappCopy[locale];
  return [
    w.title,
    "",
    w.intro,
    "",
    `*${w.package}:* ${pkg.name}`,
    `*${w.date}:* ${values.date}`,
    `*${w.schedule}:* ${values.schedule}`,
    `*${w.adults}:* ${values.adults}`,
    `*${w.children}:* ${values.children}`,
    `*${w.atvs}:* ${values.atvs}`,
    `*${w.mode}:* ${values.mode}`,
    "",
    w.passenger,
    `*${w.name}:* ${values.fullName}`,
    `*${w.country}:* ${values.country}`,
    `*${w.phone}:* ${values.phone}`,
    `*${w.email}:* ${values.email}`,
    `*${w.hotel}:* ${values.hotel}`,
    `*${w.pickup}:* ${values.pickup}`,
    "",
    `*${w.total}:* ${pkg.currency} ${total.toFixed(2)}`,
    "",
    `*${w.comment}:*`,
    values.comments || w.fallback,
    "",
    w.closing
  ].join("\n");
}
