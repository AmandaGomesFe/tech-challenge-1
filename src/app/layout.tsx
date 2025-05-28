import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

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
      <body cz-shortcut-listen="true">
        <div className="md:px-10 lg:px-40 px-0">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
