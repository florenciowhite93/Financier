import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Financier - Tu Asistente Financiero",
  description: "Dashboard financiero integral basado en las mejores prácticas de Goldman Sachs, Vanguard, Morgan Stanley y más.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen">
        <AuthProvider>
          <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
