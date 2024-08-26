import type { Metadata } from "next";
import { PT_Sans, Playfair_Display_SC, Sora } from "next/font/google";
import "./globals.scss";
import Head from "next/head";
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
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />

        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
      </Head>
      <body className="">
      <Header/>
      <main className="mx-auto grow-[1] w-full">
        {children}
      </main>
      <Footer />
      </body>
    </html>
  );
}
