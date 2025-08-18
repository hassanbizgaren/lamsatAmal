import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "جمعية لمسة أمل - منح الأمل والدعم لأسر وأطفال التوحد | Lamsat Amal Association",
  description: "جمعية تهدف إلى دعم أسر وأطفال التوحد من خلال التوعية والتكوين والأنشطة الترفيهية - Association supporting autism families through awareness, training and recreational activities",
  keywords: "التوحد، دعم الأسر، التوعية، التكوين، الأطفال، المغرب، autism, family support, awareness, training, children, Morocco, autisme, soutien familial, sensibilisation, formation, enfants, Maroc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
