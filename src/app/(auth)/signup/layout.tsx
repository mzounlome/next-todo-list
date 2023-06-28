"use client";

import "./layout.css";
import "..//styles/globals.css";

import { Inter } from "next/font/google";
import SignUp from "./page";

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
        <SignUp />
      </body>
    </html>
  );
}
