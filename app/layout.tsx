import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Explora Red Valley | Cuatrimotos en Cusco",
  description:
    "Experiencia inmersiva de tours en cuatrimoto hacia la Montana de 7 Colores, con paquetes y reserva por WhatsApp.",
  keywords: ["cuatrimotos Cusco", "Montana de 7 Colores", "Vinicunca", "tours de aventura"],
  openGraph: {
    title: "Explora Red Valley",
    description: "Conquista el camino hacia uno de los paisajes mas intensos del Cusco.",
    type: "website",
    images: ["/explora-red-valley-logo.jpeg"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="noise">{children}</body>
    </html>
  );
}
