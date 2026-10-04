import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Jubna Beegum OS — Full Stack Developer",
  description:
    "Portfolio of Jubna Beegum OS, a Full Stack Developer with 2+ years of experience building modern web applications using React, TypeScript, Node.js, Express.js, and MySQL.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05070c] text-slate-100">
        {children}
      </body>
    </html>
  );
}
