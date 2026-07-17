import type { LucideIcon } from "lucide-react";
import { Bike, Mountain, Route, ShieldCheck, Sparkles, Users } from "lucide-react";

export type PackageCategory =
  | "Cuatrimotos"
  | "Montana de 7 Colores"
  | "Valle Rojo"
  | "Tours privados"
  | "Grupos";

export type TourPackage = {
  slug: string;
  name: string;
  tagline: string;
  category: PackageCategory;
  heroImage: string;
  gallery: string[];
  shortDescription: string;
  fullDescription: string;
  price: number;
  promoPrice?: number;
  currency: "S/";
  duration: string;
  departureTime: string;
  meetingPoint: string;
  difficulty: "Suave" | "Moderada" | "Alta";
  recommendedAge: string;
  minPeople: number;
  maxPeople: number;
  feature: string;
  availability: string;
  activities: string[];
  included: string[];
  notIncluded: string[];
  recommendations: string[];
  cancellationPolicy: string;
  itinerary: { title: string; text: string; time: string }[];
  schedules: string[];
};

export const tourPackages: TourPackage[] = [
  {
    slug: "cuatrimotos-montana-7-colores",
    name: "Cuatrimotos a Montana de 7 Colores",
    tagline: "Acelera por caminos altoandinos hasta mirar Vinicunca de frente.",
    category: "Cuatrimotos",
    heroImage:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Ruta de aventura con cuatrimotos, miradores y ascenso final hacia la montana.",
    fullDescription:
      "Una experiencia de dia completo pensada para viajeros que quieren sentir el camino, no solo llegar al destino. Combina traslado, practica segura, manejo en ruta y tiempo libre en el paisaje altoandino.",
    price: 150,
    promoPrice: 135,
    currency: "S/",
    duration: "12 horas",
    departureTime: "4:30 a. m.",
    meetingPoint: "Centro historico de Cusco o recojo coordinado",
    difficulty: "Moderada",
    recommendedAge: "Desde 12 anos",
    minPeople: 1,
    maxPeople: 14,
    feature: "Ruta panoramica en cuatrimoto",
    availability: "Consultar disponibilidad por WhatsApp",
    activities: ["Cuatrimoto", "Miradores", "Caminata corta", "Fotografia"],
    included: ["Guia local", "Cuatrimoto", "Casco y guantes", "Asistencia en ruta"],
    notIncluded: ["Boleto de ingreso", "Almuerzo", "Gastos personales"],
    recommendations: ["Llevar abrigo", "Usar bloqueador", "Agua personal", "Documento de identidad"],
    cancellationPolicy: "La disponibilidad y politicas finales se confirman por WhatsApp antes del pago.",
    schedules: ["4:30 a. m.", "5:00 a. m."],
    itinerary: [
      { time: "04:30", title: "Recojo", text: "Inicio temprano desde Cusco para aprovechar la luz de montana." },
      { time: "07:30", title: "Preparacion", text: "Briefing de seguridad, entrega de equipo y practica guiada." },
      { time: "08:20", title: "Ruta ATV", text: "Tramo escenico entre quebradas, pampas y montanas de colores." },
      { time: "10:30", title: "Vinicunca", text: "Llegada al mirador principal y tiempo para fotografias." },
      { time: "15:30", title: "Retorno", text: "Regreso progresivo a Cusco con paradas coordinadas." }
    ]
  },
  {
    slug: "valle-rojo-adrenalina",
    name: "Valle Rojo Adrenalina",
    tagline: "Un desvio mineral, silencioso y dramatico despues de la montana.",
    category: "Valle Rojo",
    heroImage:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Extension escenica para quienes buscan una ruta menos comun y mas fotografica.",
    fullDescription:
      "Disenado para viajeros con energia extra. El recorrido suma un tramo hacia el Valle Rojo, con paisajes de tonos intensos y una sensacion mas remota.",
    price: 180,
    currency: "S/",
    duration: "13 horas",
    departureTime: "4:00 a. m.",
    meetingPoint: "Recojo coordinado en Cusco",
    difficulty: "Alta",
    recommendedAge: "Desde 14 anos",
    minPeople: 2,
    maxPeople: 10,
    feature: "Extension al Valle Rojo",
    availability: "Sujeto a clima y condicion de ruta",
    activities: ["Cuatrimoto", "Trekking", "Fotografia", "Miradores"],
    included: ["Guia local", "Equipo de seguridad", "Asistencia", "Oxigeno de apoyo"],
    notIncluded: ["Ingresos locales", "Alimentacion", "Seguro personal"],
    recommendations: ["Aclimatarse antes", "Zapatillas de trekking", "Cortaviento", "Snacks ligeros"],
    cancellationPolicy: "Cambios por clima se coordinan directamente con el operador.",
    schedules: ["4:00 a. m."],
    itinerary: [
      { time: "04:00", title: "Salida", text: "Partida desde Cusco antes del amanecer." },
      { time: "07:20", title: "Practica", text: "Ajuste de equipo y prueba de manejo." },
      { time: "09:10", title: "Montana", text: "Ingreso al circuito principal de Vinicunca." },
      { time: "11:30", title: "Valle Rojo", text: "Extension a un paisaje mineral mas silencioso." },
      { time: "16:30", title: "Cierre", text: "Retorno con asistencia del guia." }
    ]
  },
  {
    slug: "privado-sunrise-7-colores",
    name: "Privado Sunrise 7 Colores",
    tagline: "Una salida mas intima, flexible y enfocada en fotografia.",
    category: "Tours privados",
    heroImage:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517825738774-7de9363ef735?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Experiencia privada con ritmo adaptable y acompanamiento personalizado.",
    fullDescription:
      "Una propuesta para parejas, familias o grupos pequenos que quieren una experiencia mas cuidada, con tiempos flexibles y mejor control de paradas.",
    price: 260,
    promoPrice: 240,
    currency: "S/",
    duration: "11 horas",
    departureTime: "4:15 a. m.",
    meetingPoint: "Hotel del pasajero en zona coordinada",
    difficulty: "Moderada",
    recommendedAge: "Desde 10 anos",
    minPeople: 2,
    maxPeople: 6,
    feature: "Ritmo privado y fotografico",
    availability: "Consultar cupos privados",
    activities: ["Cuatrimoto", "Fotos al amanecer", "Miradores", "Ruta flexible"],
    included: ["Guia privado", "Recojo coordinado", "Equipo de seguridad", "Asistencia personalizada"],
    notIncluded: ["Ingresos", "Comidas", "Propinas"],
    recommendations: ["Ropa por capas", "Bateria externa", "Lentes de sol", "Efectivo para ingresos"],
    cancellationPolicy: "La reserva privada queda sujeta a confirmacion de movilidad, guia y clima.",
    schedules: ["4:15 a. m.", "5:00 a. m."],
    itinerary: [
      { time: "04:15", title: "Recojo privado", text: "Salida directa desde el alojamiento coordinado." },
      { time: "07:00", title: "Briefing", text: "Preparacion con ritmo personalizado." },
      { time: "08:00", title: "Ruta escenica", text: "Conduccion con pausas para fotos y descanso." },
      { time: "10:00", title: "Mirador", text: "Tiempo flexible en la Montana de 7 Colores." },
      { time: "15:00", title: "Retorno", text: "Regreso a Cusco con cierre coordinado." }
    ]
  }
];

export const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: ShieldCheck, title: "Seguridad primero", text: "Briefing, equipo y asistencia durante el recorrido." },
  { icon: Bike, title: "Cuatrimotos listas", text: "Unidades preparadas para rutas altoandinas." },
  { icon: Users, title: "Grupos reducidos", text: "Mejor acompanamiento y ritmo mas humano." },
  { icon: Mountain, title: "Guias locales", text: "Lectura real del clima, la ruta y los miradores." },
  { icon: Sparkles, title: "Reserva rapida", text: "Consulta directa por WhatsApp con todos tus datos." },
  { icon: Route, title: "Ruta memorable", text: "El camino es parte central de la experiencia." }
];

export const categories: Array<"Todos" | PackageCategory> = [
  "Todos",
  "Cuatrimotos",
  "Montana de 7 Colores",
  "Valle Rojo",
  "Tours privados",
  "Grupos"
];

export function getPackage(slug: string) {
  return tourPackages.find((tour) => tour.slug === slug);
}
