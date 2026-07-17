import type { Locale } from "@/i18n/routing";

type HomeCopy = {
  heroKicker: string;
  heroTitle: string;
  heroText: string;
  reserveAdventure: string;
  discover: string;
  conceptKicker: string;
  conceptTitle: string;
  conceptText: string;
  stages: Array<[string, string]>;
  experiencesKicker: string;
  experiencesTitle: string;
  experiencesText: string;
  filters: string;
  max: string;
  from: string;
  view: string;
  reserve: string;
  routeKicker: string;
  routeTitle: string;
  routeText: string;
  routeStages: string[];
  routeStageTexts: string[];
  galleryKicker: string;
  galleryTitle: string;
  trustKicker: string;
  trustTitle: string;
  testimonials: Array<[string, string]>;
  faqKicker: string;
  faqTitle: string;
  faqs: Array<[string, string]>;
  finalKicker: string;
  finalTitle: string;
  reserveWhatsApp: string;
};

export const homeCopy: Record<Locale, HomeCopy> = {
  es: {
    heroKicker: "Expedicion digital / Cusco",
    heroTitle: "No vengas solo a conocer la montana. Ven a conquistar el camino.",
    heroText: "Vive una aventura en cuatrimoto hacia uno de los paisajes mas impresionantes del Cusco.",
    reserveAdventure: "Reservar mi aventura",
    discover: "Descubrir la experiencia",
    conceptKicker: "Preparacion",
    conceptTitle: "La ruta empieza antes de acelerar.",
    conceptText: "El sitio avanza como un viaje: amanecer, neblina, motor, ascenso, color y reserva.",
    stages: [
      ["Amanecer", "El viaje empieza oscuro, con niebla y una luz naranja que abre el camino."],
      ["Preparacion", "El visitante entiende la aventura sin perder la emocion del paisaje."],
      ["Ascenso", "Tierra, azul andino y franjas de color inspiradas en la marca."],
      ["Llegada", "Rojo, sol y montana aparecen como escena final de conquista."]
    ],
    experiencesKicker: "Inicio del recorrido",
    experiencesTitle: "Paradas de la expedicion.",
    experiencesText: "Cada experiencia aparece como una decision en el camino: velocidad, altura, fotografia o ruta privada.",
    filters: "Filtros rapidos",
    max: "Hasta",
    from: "Desde",
    view: "Ver",
    reserve: "Reservar",
    routeKicker: "Ascenso en cuatrimoto",
    routeTitle: "La aventura avanza paso a paso.",
    routeText: "Del recojo al retorno, la pagina cuenta el viaje como una progresion visual.",
    routeStages: ["Elige tu experiencia", "Coordina tu reserva", "Preparate para la ruta", "Vive la aventura"],
    routeStageTexts: [
      "Revisa las rutas disponibles y elige la experiencia que mejor va con tu viaje.",
      "Envianos tus datos, fecha y cantidad de viajeros para confirmar disponibilidad.",
      "Recibe indicaciones, equipo basico y una breve orientacion antes de manejar.",
      "Disfruta el camino, los miradores y el paisaje altoandino con asistencia del equipo."
    ],
    galleryKicker: "Valle Rojo",
    galleryTitle: "Velocidad, altura y color.",
    trustKicker: "Montaña de 7 Colores",
    trustTitle: "Aventura con criterio local.",
    testimonials: [
      ["Parecia una pelicula", "La ruta en cuatrimoto hizo que el destino se sintiera mucho mas emocionante."],
      ["Muy buena organizacion", "El guia explico todo antes de salir y siempre estuvo atento al grupo."],
      ["Fotos increibles", "Los miradores y los colores del paisaje fueron lo mejor del viaje."]
    ],
    faqKicker: "Preguntas frecuentes",
    faqTitle: "Antes de acelerar.",
    faqs: [
      ["Necesito experiencia manejando?", "No necesariamente. Antes de iniciar se realiza una practica guiada."],
      ["El precio es definitivo?", "El total mostrado es referencial y se confirma por WhatsApp."],
      ["Pueden recogerme en mi hotel?", "El formulario permite indicar recojo; el equipo confirma si aplica."],
      ["Que pasa si hay mal clima?", "La ruta puede ajustarse por seguridad antes de cerrar la reserva."]
    ],
    finalKicker: "Reserva final",
    finalTitle: "La montana te espera. El siguiente aventurero puedes ser tu.",
    reserveWhatsApp: "Reservar por WhatsApp"
  },
  en: {
    heroKicker: "Digital expedition / Cusco",
    heroTitle: "Do not just visit the mountain. Come conquer the road.",
    heroText: "Ride an ATV toward one of Cusco's most unforgettable landscapes.",
    reserveAdventure: "Book my adventure",
    discover: "Discover the experience",
    conceptKicker: "Preparation",
    conceptTitle: "The route begins before the engine starts.",
    conceptText: "The site moves like a journey: sunrise, mist, engine, ascent, color and booking.",
    stages: [
      ["Sunrise", "The journey starts in shadow, with mist and warm light opening the road."],
      ["Preparation", "The visitor understands the adventure while the landscape keeps leading."],
      ["Ascent", "Earth tones, Andean blue and brand-inspired color bands take over."],
      ["Arrival", "Red, sun and mountain become the final scene of conquest."]
    ],
    experiencesKicker: "Start of the ride",
    experiencesTitle: "Expedition stops.",
    experiencesText: "Each experience feels like a decision on the road: speed, altitude, photography or a private route.",
    filters: "Quick filters",
    max: "Up to",
    from: "From",
    view: "View",
    reserve: "Book",
    routeKicker: "ATV ascent",
    routeTitle: "The adventure moves step by step.",
    routeText: "From pickup to return, the page tells the trip as a visual progression.",
    routeStages: ["Choose your experience", "Coordinate your booking", "Get ready for the route", "Live the adventure"],
    routeStageTexts: [
      "Review the available routes and choose the experience that best fits your trip.",
      "Send your details, date and number of travelers so we can confirm availability.",
      "Receive instructions, basic gear and a short orientation before riding.",
      "Enjoy the road, viewpoints and high-Andean scenery with team support."
    ],
    galleryKicker: "Red Valley",
    galleryTitle: "Speed, altitude and color.",
    trustKicker: "Rainbow Mountain",
    trustTitle: "Adventure with local judgment.",
    testimonials: [
      ["It felt like a movie", "The ATV route made the destination feel much more exciting."],
      ["Very organized", "The guide explained everything before leaving and watched the group closely."],
      ["Amazing photos", "The viewpoints and landscape colors were the best part of the trip."]
    ],
    faqKicker: "FAQ",
    faqTitle: "Before you ride.",
    faqs: [
      ["Do I need riding experience?", "Not necessarily. A guided practice happens before starting."],
      ["Is the price final?", "The displayed total is a reference and is confirmed on WhatsApp."],
      ["Can you pick me up at my hotel?", "The form lets you request pickup; the team confirms if it applies."],
      ["What if the weather is bad?", "The route can be adjusted for safety before confirming the booking."]
    ],
    finalKicker: "Final booking",
    finalTitle: "The mountain is waiting. The next adventurer can be you.",
    reserveWhatsApp: "Book on WhatsApp"
  },
  pt: {
    heroKicker: "Expedicao digital / Cusco",
    heroTitle: "Nao venha apenas conhecer a montanha. Venha conquistar o caminho.",
    heroText: "Viva uma aventura de quadriciclo rumo a uma das paisagens mais impressionantes de Cusco.",
    reserveAdventure: "Reservar minha aventura",
    discover: "Descobrir a experiencia",
    conceptKicker: "Preparacao",
    conceptTitle: "A rota comeca antes de acelerar.",
    conceptText: "O site avanca como uma viagem: amanhecer, neblina, motor, subida, cor e reserva.",
    stages: [
      ["Amanhecer", "A jornada comeca escura, com neblina e luz quente abrindo o caminho."],
      ["Preparacao", "O visitante entende a aventura sem perder a emocao da paisagem."],
      ["Subida", "Terra, azul andino e faixas de cor inspiradas na marca."],
      ["Chegada", "Vermelho, sol e montanha aparecem como cena final de conquista."]
    ],
    experiencesKicker: "Inicio do percurso",
    experiencesTitle: "Paradas da expedicao.",
    experiencesText: "Cada experiencia surge como uma decisao no caminho: velocidade, altitude, fotografia ou rota privada.",
    filters: "Filtros rapidos",
    max: "Ate",
    from: "Desde",
    view: "Ver",
    reserve: "Reservar",
    routeKicker: "Subida de quadriciclo",
    routeTitle: "A aventura avanca passo a passo.",
    routeText: "Da busca ao retorno, a pagina conta a viagem como uma progressao visual.",
    routeStages: ["Escolha sua experiencia", "Coordene sua reserva", "Prepare-se para a rota", "Viva a aventura"],
    routeStageTexts: [
      "Veja as rotas disponiveis e escolha a experiencia que combina com sua viagem.",
      "Envie seus dados, data e quantidade de viajantes para confirmar disponibilidade.",
      "Receba instrucoes, equipamento basico e uma breve orientacao antes de dirigir.",
      "Aproveite o caminho, os mirantes e a paisagem altoandina com apoio da equipe."
    ],
    galleryKicker: "Vale Vermelho",
    galleryTitle: "Velocidade, altitude e cor.",
    trustKicker: "Montanha de 7 Cores",
    trustTitle: "Aventura com criterio local.",
    testimonials: [
      ["Parecia um filme", "A rota de quadriciclo deixou o destino muito mais emocionante."],
      ["Muito organizado", "O guia explicou tudo antes de sair e acompanhou o grupo de perto."],
      ["Fotos incriveis", "Os mirantes e as cores da paisagem foram o melhor da viagem."]
    ],
    faqKicker: "Perguntas frequentes",
    faqTitle: "Antes de acelerar.",
    faqs: [
      ["Preciso ter experiencia?", "Nao necessariamente. Antes de iniciar ha uma pratica guiada."],
      ["O preco e definitivo?", "O total exibido e referencial e confirmado pelo WhatsApp."],
      ["Podem me buscar no hotel?", "O formulario permite solicitar busca; a equipe confirma se aplica."],
      ["E se o clima estiver ruim?", "A rota pode ser ajustada por seguranca antes de confirmar a reserva."]
    ],
    finalKicker: "Reserva final",
    finalTitle: "A montanha espera por voce. O proximo aventureiro pode ser voce.",
    reserveWhatsApp: "Reservar pelo WhatsApp"
  }
};

type AboutCopy = {
  title: string;
  subtitle: string;
  kicker: string;
  heroTitle: string;
  heroText: string;
  missionTitle: string;
  missionText: string;
  visionTitle: string;
  visionText: string;
  valuesTitle: string;
  values: Array<[string, string]>;
};

export const aboutCopy: Record<Locale, AboutCopy> = {
  es: {
    title: "Explora Red Valley",
    subtitle: "Aventura organizada en Cusco con cuatrimotos, paisajes altoandinos y atencion cercana.",
    kicker: "Sobre nosotros",
    heroTitle: "Creamos rutas de aventura con seguridad, emocion y criterio local.",
    heroText: "Acompanamos a viajeros que buscan vivir la Montana de 7 Colores y el Valle Rojo de una forma mas intensa, ordenada y memorable. Nuestro enfoque combina informacion clara, coordinacion responsable y experiencias pensadas para disfrutar el camino.",
    missionTitle: "Mision",
    missionText: "Brindar experiencias de aventura claras, seguras y bien organizadas, ayudando a cada viajero a descubrir paisajes del Cusco con confianza.",
    visionTitle: "Vision",
    visionText: "Ser una marca referente en rutas de cuatrimotos y aventura en Cusco por su calidad, cercania y forma responsable de operar.",
    valuesTitle: "Lo que cuidamos en cada salida",
    values: [
      ["Seguridad", "Briefing, equipo y acompanamiento durante el recorrido."],
      ["Claridad", "Informacion simple antes de reservar y antes de salir a ruta."],
      ["Experiencia local", "Ritmo, clima y paradas definidos con conocimiento del territorio."]
    ]
  },
  en: {
    title: "Explora Red Valley",
    subtitle: "Organized adventure in Cusco with ATVs, high-Andean landscapes and close service.",
    kicker: "About us",
    heroTitle: "We create adventure routes with safety, emotion and local judgment.",
    heroText: "We support travelers who want to experience Rainbow Mountain and Red Valley in a more intense, organized and memorable way. Our approach combines clear information, responsible coordination and experiences designed to enjoy the road.",
    missionTitle: "Mission",
    missionText: "To provide clear, safe and well-organized adventure experiences, helping each traveler discover Cusco landscapes with confidence.",
    visionTitle: "Vision",
    visionText: "To become a reference brand for ATV and adventure routes in Cusco through quality, close service and responsible operation.",
    valuesTitle: "What we care for on every ride",
    values: [
      ["Safety", "Briefing, equipment and support throughout the route."],
      ["Clarity", "Simple information before booking and before starting the ride."],
      ["Local experience", "Pace, weather and stops defined with real knowledge of the territory."]
    ]
  },
  pt: {
    title: "Explora Red Valley",
    subtitle: "Aventura organizada em Cusco com quadriciclos, paisagens altoandinas e atendimento proximo.",
    kicker: "Sobre nos",
    heroTitle: "Criamos rotas de aventura com seguranca, emocao e criterio local.",
    heroText: "Acompanhamos viajantes que querem viver a Montanha de 7 Cores e o Vale Vermelho de uma forma mais intensa, organizada e memoravel. Nosso enfoque combina informacao clara, coordenacao responsavel e experiencias pensadas para aproveitar o caminho.",
    missionTitle: "Missao",
    missionText: "Oferecer experiencias de aventura claras, seguras e bem organizadas, ajudando cada viajante a descobrir paisagens de Cusco com confianca.",
    visionTitle: "Visao",
    visionText: "Ser uma marca referencia em rotas de quadriciclo e aventura em Cusco por sua qualidade, proximidade e operacao responsavel.",
    valuesTitle: "O que cuidamos em cada saida",
    values: [
      ["Seguranca", "Briefing, equipamento e acompanhamento durante o percurso."],
      ["Clareza", "Informacao simples antes de reservar e antes de iniciar a rota."],
      ["Experiencia local", "Ritmo, clima e paradas definidos com conhecimento real do territorio."]
    ]
  }
};

type FaqCopy = {
  title: string;
  subtitle: string;
  kicker: string;
  contactTitle: string;
  contactText: string;
};

export const faqCopy: Record<Locale, FaqCopy> = {
  es: {
    title: "Preguntas frecuentes",
    subtitle: "Respuestas claras antes de reservar tu aventura en cuatrimoto.",
    kicker: "Antes de acelerar",
    contactTitle: "Aun tienes dudas?",
    contactText: "Escribenos por WhatsApp y confirmamos disponibilidad, recojo, horarios y precio final antes de cerrar la reserva."
  },
  en: {
    title: "Frequently asked questions",
    subtitle: "Clear answers before booking your ATV adventure.",
    kicker: "Before you ride",
    contactTitle: "Still have questions?",
    contactText: "Message us on WhatsApp and we will confirm availability, pickup, schedules and final price before closing the booking."
  },
  pt: {
    title: "Perguntas frequentes",
    subtitle: "Respostas claras antes de reservar sua aventura de quadriciclo.",
    kicker: "Antes de acelerar",
    contactTitle: "Ainda tem duvidas?",
    contactText: "Escreva pelo WhatsApp e confirmamos disponibilidade, busca, horarios e preco final antes de fechar a reserva."
  }
};
