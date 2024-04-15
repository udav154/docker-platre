import type { Metadata } from "next";
import { PT_Sans, Playfair_Display_SC, Sora } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Header } from "@/components/custom/header";

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
      </Head>
      <body>
      <Header/>
      <main className="mx-auto">
        {children}
      </main>
        {/* <footer>
          <div>
          FOOTER
          </div>
        </footer> */}
      </body>
    </html>
  );
}
