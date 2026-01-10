import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
