import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "The Place | Barber Shop & Spa",
    template: "%s | The Place",
  },
  description:
    "The Place Barber Shop & Spa — precision grooming, beauty and wellness in Diani, Kenya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-950 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
