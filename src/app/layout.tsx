import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "",
  description: "Sistema bancário",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Navbar/>
      <body cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
