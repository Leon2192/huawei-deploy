import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar"
import Footer from "@/components/shared/Footer/Footer"
import StaticButtons from "@/components/shared/StaticButtons/StaticButtons";

import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "HUAWEI eKit",
  description: "Sitio web de Huawei",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        <StaticButtons />
        {children}
        <Footer />
      </body>
    </html>
  );
}
