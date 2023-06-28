"use client";

import "./layout.css";
import "..//styles/globals.css";

import Heading from "@/components/ui/Heading";
import { Inter } from "next/font/google";
import LandingImage from "@/components/ui/LandingImage";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="home">
        {children}
        <Navbar />
        <Heading />
        <LandingImage />
      </body>
    </html>
  );
}
