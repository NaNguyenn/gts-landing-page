import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { AppConfig } from "@/utils/app-config";
import Header from "@/components/header";

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={AppConfig.locale}>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
