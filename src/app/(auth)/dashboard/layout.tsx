"use client";

import "../../../styles/globals.css";

import DashboardNav from "./page";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="home">
        <DashboardNav />
      </body>
    </html>
  );
}
