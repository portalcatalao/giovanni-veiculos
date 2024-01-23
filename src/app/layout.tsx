import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ButtonWhatsapp } from "@/components/button-whatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Giovanni Veículos Multimarcas",
  description: "Especializados na venda de veículos novos e usados, nacionais e importados.",
  authors: [{name: 'Ezequiel Pires', url: 'https://ezequiel-pires.vercel.app/'}],
  openGraph: {
    title: "Giovanni Veículos Multimarcas",
    description: "Especializados na venda de veículos novos e usados, nacionais e importados.",
    images: ['/default.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-zinc-900'}>
        <div className="flex flex-col min-h-screen w-full">
          <Header />
          {children}
          <Footer />
          <ButtonWhatsapp />
        </div>
      </body>
    </html>
  );
}
