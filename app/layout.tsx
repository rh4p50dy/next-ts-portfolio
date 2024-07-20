import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Meta from "./meta";

const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"], variable: "--font-jetbrains-mono"  });

export const metadata: Metadata = {
  title: "Minn Sitt Paing Mhuu"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Meta/>
      <body className={JetBrainsMono.variable}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
