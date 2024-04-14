import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/themeContext";
import MyProvider from "@/context";

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
    <html lang="pt-br" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MyProvider>{children}</MyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
