import "./globals.css";

export const metadata = {
  title: "Rachna Portfolio",
  description: "Terminal-inspired personal portfolio hero section.",
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
