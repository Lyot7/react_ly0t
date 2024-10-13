import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio d'Ly0t (Eliott BOUQUEREL)",
  description: "Portfolio d'Ly0t (Eliott BOUQUEREL)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-background text-foreground`}>{children}</body>
    </html>
  );
}
