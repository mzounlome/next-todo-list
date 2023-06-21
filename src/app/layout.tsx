"use client";

import "./layout.css";
import "..//styles/globals.css";

import { Inter } from "next/font/google";
import Navbar from "@/components/ui/Bar/Navbar";

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
      </body>
    </html>
  );
}
