"use client";

import "./layout.css";
import "../styles/globals.css";

import Navbar from "@/components/ui/Navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <html lang="en">
      <body className="home">
        {path !== "/dashboard" ? <Navbar /> : null}
        <main>{children}</main>
      </body>
    </html>
  );
}
