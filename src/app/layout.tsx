import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Social Media Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
