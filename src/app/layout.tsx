import type { Metadata } from "next";
import "./globals.css";
import { DefaultHeader } from "@/components/header/DefaultHeader";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Tabata",
  description: "Desenvolvedora FullStack & UX/UI Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
