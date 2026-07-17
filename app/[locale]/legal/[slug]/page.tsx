import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { company } from "@/data/company";
import type { Locale } from "@/i18n/routing";

const legalSlugs = [
  "politica-privacidad",
  "proteccion-datos-personales",
  "terminos-condiciones",
  "politica-cookies",
  "medios-pago",
  "politica-cancelacion",
  "libro-reclamaciones",
  "esnna-mincetur"
] as const;

type LegalSlug = (typeof legalSlugs)[number];

const legalCopy: Record<Locale, Record<LegalSlug, { title: string; intro: string; points: string[] }>> = {
  es: {
    "politica-privacidad": {
      title: "Politica de Privacidad",
      intro: "Contenido provisional pendiente de validacion legal por el cliente.",
      points: ["Se informara como se recopilan y usan los datos de contacto.", "Se detallaran los canales para solicitudes de privacidad.", "No se incluyen datos legales finales hasta recibir confirmacion oficial."]
    },
    "proteccion-datos-personales": {
      title: "Politica de Proteccion de Datos Personales",
      intro: "Contenido provisional para documentar el tratamiento responsable de datos.",
      points: ["Se indicaran finalidades de reserva y atencion al viajero.", "Se explicaran derechos de acceso, rectificacion y cancelacion.", "El texto final debe revisarse con asesoria legal local."]
    },
    "terminos-condiciones": {
      title: "Terminos y Condiciones",
      intro: "Condiciones comerciales referenciales hasta que el cliente entregue sus politicas oficiales.",
      points: ["Las reservas quedan sujetas a disponibilidad.", "Precios, horarios e itinerarios pueden confirmarse por WhatsApp.", "Las condiciones finales se comunicaran antes del pago."]
    },
    "politica-cookies": {
      title: "Politica de Cookies",
      intro: "Aviso provisional sobre tecnologias de medicion y mejora del sitio.",
      points: ["El sitio puede usar cookies tecnicas y analiticas.", "Se actualizara si se integran pixeles publicitarios.", "El cliente debera aprobar el texto final."]
    },
    "medios-pago": {
      title: "Medios de Pago",
      intro: "Informacion provisional sobre formas de pago disponibles.",
      points: ["Los medios habilitados se confirmaran antes de la reserva.", "No se declaran pasarelas o cuentas no confirmadas.", "El comprobante y condiciones de pago seran indicados por el equipo comercial."]
    },
    "politica-cancelacion": {
      title: "Politica de cancelacion",
      intro: "Politica referencial pendiente de confirmacion operativa.",
      points: ["Cambios por clima o seguridad pueden modificar la ruta.", "Cancelaciones y reprogramaciones se confirmaran por escrito.", "No se establecen penalidades finales sin aprobacion del cliente."]
    },
    "libro-reclamaciones": {
      title: "Libro de Reclamaciones",
      intro: "Espacio provisional para enlazar o implementar el libro oficial de reclamaciones.",
      points: ["El formulario oficial sera agregado cuando el cliente entregue el enlace o requisito aplicable.", "No se reemplaza el mecanismo legal definitivo.", "Los datos de razon social y RUC estan pendientes de confirmacion."]
    },
    "esnna-mincetur": {
      title: "Informacion ESNNA/MINCETUR",
      intro: "Bloque informativo provisional sobre prevencion ESNNA y seguridad del viajero.",
      points: ["No se afirman certificaciones ni registros no confirmados.", "Se incluira la informacion oficial cuando el cliente la proporcione.", "La comunicacion final debe alinearse a la normativa aplicable."]
    }
  },
  en: {
    "politica-privacidad": {
      title: "Privacy Policy",
      intro: "Temporary content pending legal validation by the client.",
      points: ["This page will explain how contact data is collected and used.", "Privacy request channels will be detailed.", "Final legal data will not be included until officially confirmed."]
    },
    "proteccion-datos-personales": {
      title: "Personal Data Protection Policy",
      intro: "Temporary content for responsible data handling information.",
      points: ["Booking and traveler support purposes will be stated.", "Access, correction and cancellation rights will be explained.", "The final text should be reviewed with local legal advice."]
    },
    "terminos-condiciones": {
      title: "Terms and Conditions",
      intro: "Reference commercial conditions until the client provides official policies.",
      points: ["Bookings are subject to availability.", "Prices, schedules and itineraries may be confirmed on WhatsApp.", "Final conditions will be communicated before payment."]
    },
    "politica-cookies": {
      title: "Cookie Policy",
      intro: "Temporary notice about site measurement and improvement technologies.",
      points: ["The site may use technical and analytics cookies.", "This page will be updated if advertising pixels are integrated.", "The client must approve the final text."]
    },
    "medios-pago": {
      title: "Payment Methods",
      intro: "Temporary information about available payment methods.",
      points: ["Enabled methods will be confirmed before booking.", "No unconfirmed gateways or accounts are declared.", "Receipts and payment conditions will be indicated by the commercial team."]
    },
    "politica-cancelacion": {
      title: "Cancellation Policy",
      intro: "Reference policy pending operational confirmation.",
      points: ["Weather or safety changes may modify the route.", "Cancellations and rescheduling will be confirmed in writing.", "No final penalties are established without client approval."]
    },
    "libro-reclamaciones": {
      title: "Complaints Book",
      intro: "Temporary page to link or implement the official complaints book.",
      points: ["The official form will be added when the client provides the applicable link or requirement.", "This does not replace the final legal mechanism.", "Legal name and tax ID are pending confirmation."]
    },
    "esnna-mincetur": {
      title: "ESNNA/MINCETUR Information",
      intro: "Temporary information block about ESNNA prevention and traveler safety.",
      points: ["No unconfirmed certifications or registrations are claimed.", "Official information will be included when provided by the client.", "Final communication must align with applicable regulations."]
    }
  },
  pt: {
    "politica-privacidad": {
      title: "Politica de Privacidade",
      intro: "Conteudo temporario pendente de validacao legal pelo cliente.",
      points: ["Esta pagina explicara como os dados de contato sao coletados e usados.", "Os canais para solicitacoes de privacidade serao detalhados.", "Dados legais finais nao serao incluidos ate confirmacao oficial."]
    },
    "proteccion-datos-personales": {
      title: "Politica de Protecao de Dados Pessoais",
      intro: "Conteudo temporario sobre tratamento responsavel de dados.",
      points: ["Serao indicadas finalidades de reserva e atendimento ao viajante.", "Direitos de acesso, correcao e cancelamento serao explicados.", "O texto final deve ser revisado com assessoria legal local."]
    },
    "terminos-condiciones": {
      title: "Termos e Condicoes",
      intro: "Condicoes comerciais referenciais ate que o cliente entregue suas politicas oficiais.",
      points: ["As reservas estao sujeitas a disponibilidade.", "Precos, horarios e itinerarios podem ser confirmados pelo WhatsApp.", "As condicoes finais serao comunicadas antes do pagamento."]
    },
    "politica-cookies": {
      title: "Politica de Cookies",
      intro: "Aviso temporario sobre tecnologias de medicao e melhoria do site.",
      points: ["O site pode usar cookies tecnicos e analiticos.", "Esta pagina sera atualizada se pixels publicitarios forem integrados.", "O cliente devera aprovar o texto final."]
    },
    "medios-pago": {
      title: "Meios de Pagamento",
      intro: "Informacao temporaria sobre formas de pagamento disponiveis.",
      points: ["Os meios habilitados serao confirmados antes da reserva.", "Nao sao declaradas contas ou plataformas nao confirmadas.", "Comprovantes e condicoes de pagamento serao indicados pela equipe comercial."]
    },
    "politica-cancelacion": {
      title: "Politica de cancelamento",
      intro: "Politica referencial pendente de confirmacao operacional.",
      points: ["Mudancas por clima ou seguranca podem alterar a rota.", "Cancelamentos e reagendamentos serao confirmados por escrito.", "Nao sao estabelecidas penalidades finais sem aprovacao do cliente."]
    },
    "libro-reclamaciones": {
      title: "Livro de Reclamacoes",
      intro: "Pagina temporaria para vincular ou implementar o livro oficial de reclamacoes.",
      points: ["O formulario oficial sera adicionado quando o cliente fornecer o link ou requisito aplicavel.", "Isto nao substitui o mecanismo legal definitivo.", "Razao social e RUC estao pendentes de confirmacao."]
    },
    "esnna-mincetur": {
      title: "Informacao ESNNA/MINCETUR",
      intro: "Bloco informativo temporario sobre prevencao ESNNA e seguranca do viajante.",
      points: ["Nao sao afirmadas certificacoes ou registros nao confirmados.", "A informacao oficial sera incluida quando o cliente fornecer.", "A comunicacao final deve seguir a regulamentacao aplicavel."]
    }
  }
};

export function generateStaticParams() {
  return legalSlugs.flatMap((slug) => ["es", "en", "pt"].map((locale) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: LegalSlug }> }) {
  const { locale, slug } = await params;
  const page = legalCopy[locale]?.[slug];
  if (!page) return {};
  return {
    title: `${page.title} | ${company.name}`,
    description: page.intro
  };
}

export default async function LegalPage({ params }: { params: Promise<{ locale: Locale; slug: LegalSlug }> }) {
  const { locale, slug } = await params;
  const page = legalCopy[locale]?.[slug];
  if (!page) notFound();

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-[radial-gradient(ellipse_at_20%_0%,rgba(239,59,31,.16),transparent_28rem),linear-gradient(180deg,#100907,#050403)] px-5 pb-20 pt-36 text-white">
        <section className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[.045] p-6 shadow-2xl backdrop-blur md:p-10">
          <p className="text-sm font-black uppercase tracking-[.22em] text-solar">{company.name}</p>
          <h1 className="cinema-title mt-4 text-3xl md:text-5xl">{page.title}</h1>
          <p className="mt-6 text-lg leading-8 text-white/72">{page.intro}</p>
          <ul className="mt-8 space-y-4">
            {page.points.map((point) => (
              <li key={point} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-white/70">
                {point}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
