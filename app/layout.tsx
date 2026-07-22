import type { Metadata } from "next";
import { Anton, Archivo, Chivo_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const chivoMono = Chivo_Mono({
  variable: "--font-chivo-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minuto 78 | Software que cierra el partido",
  description:
    "Cualquiera te hace un prototipo. Nosotros entramos al minuto 78: pagos que se acreditan, stock que cierra, sistemas que aguantan un negocio de verdad. Tiendas, reservas y membresias con precio cerrado y plazo en dias.",
  metadataBase: new URL("https://minuto78.vercel.app"),
  openGraph: {
    title: "Minuto 78 | Software que cierra el partido",
    description:
      "El prototipo te lleva al 80%. Nosotros jugamos el otro 80%: software que cobra, factura y no se cae.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${archivo.variable} ${chivoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
