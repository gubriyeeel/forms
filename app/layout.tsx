import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  variable: "--font-funnel-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Forms",
  description: "This is a forms app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${funnelSans.className} antialiased`}>{children}</body>
    </html>
  );
}
