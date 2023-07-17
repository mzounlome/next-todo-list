"use client";

import "./layout.css";
import "../styles/globals.css";

import Navbar from "@/components/ui/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="home">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
