import type { Metadata } from "next";
import { ReactQueryProvider } from '../providers/reactQueryProvider';
import { PT_Sans, Playfair_Display_SC, Sora } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/custom/header";
import { Footer } from "@/components/custom/footer";

const secondFont = Playfair_Display_SC({
   weight:['400', '700'],
   subsets: ["latin"],
   variable: '--font-second',
  });

const firstFont = PT_Sans({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-first',
});


export const metadata: Metadata = {
  title: "Platre",
  description: "Platre interior design",
  keywords: ['дизайн интерьера', 'архитектура', 'Platre', 'Иваново дизайн интерьера', 'Иваново интерьер', 'Иваново интерьер'],
  icons: [
    {
      url: "/favicon-16x16.png",
      type: 'image/png',
      sizes:"16x16",
      rel: 'icon',
      color:'white'
    },
    {
      url: "/favicon-32x32.png",
      type: 'image/png',
      sizes:"32x32",
      rel: 'icon',
      color:'white'
    },
    {
      url: "/favicon-48x48.png",
      type: 'image/png',
      sizes:"48x48",
      rel: 'icon',
      color:'white'
    },
    {
      url: "/favicon-64x64.png",
      type: 'image/png',
      sizes:"64x64",
      rel: 'icon',
      color:'white'
    },
    {
      url: "/favicon-128x128.png",
      type: 'image/png',
      sizes:"128x128",
      rel: 'icon',
      color:'white'
    },
    {
      url: "/favicon-528x528.png",
      type: 'image/png',
      sizes:"528x528",
      rel: 'icon',
      color:'white'
    },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${firstFont.variable} ${secondFont.variable}`}>
      <ReactQueryProvider>
        <body className="">
        <Header/>
        <main className="mx-auto grow-[1] w-full">
          {children}
        </main>
        <Footer />
        </body>
      </ReactQueryProvider>
    </html>
  );
}
