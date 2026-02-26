import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Boyce Poleon Jr — I build AI teams that run businesses",
    template: "%s | boyce.pro",
  },
  description:
    "AI operator team infrastructure — custom multi-agent systems deployed in 3-5 days. Self-hosted, zero vendor lock-in.",
  metadataBase: new URL("https://agentbolt.ai"),
  openGraph: {
    title: "Boyce Poleon Jr — I build AI teams that run businesses",
    description:
      "Custom multi-agent AI systems deployed in 3-5 days for businesses.",
    url: "https://agentbolt.ai",
    siteName: "AgentBolt",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BoycePoleonJr",
    creator: "@BoycePoleonJr",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
