import "./globals.css";
import { IBM_Plex_Mono, Space_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm-plex-mono",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata = {
  metadataBase: new URL("https://portfolio-eight-ochre-uwuzusri1a.vercel.app"),
  title: "Rachna | Cybersecurity Student Portfolio",
  description: "A cybersecurity student passionate about hands-on learning through real-world projects and experiments. Curious to explore what I'm working on?",
  icons: {
    icon: "/icons/favicon.ico",
  },
  openGraph: {
    images: "/images/opengraph.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
