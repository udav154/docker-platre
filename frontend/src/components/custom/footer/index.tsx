import { InstIcon, LogoMedium, TelegramIcon } from "@/assets/icons";
import Link from "next/link";


export function Footer() {
  return (
    <footer className="h-fit w-full z-10 relative grid grid-rows-1 bg-main pt-3">
      <div className="container flex flex-col mx-auto h-full justify-end items-center px-4 py-3">

        <div className="flex flex-col items-center gap-3">
          <p className="text-white text-2xl font-second">Ищите нас</p>
          <div className="text-white flex gap-5"><InstIcon className={'w-[25px] h-[25px]'}/> <Link  href={'https://www.instagram.com/platre.interiors/'}>@platre_interiors</Link></div>
          <div className="text-white flex gap-5"><TelegramIcon className={'w-[25px] h-[25px]'}/> <Link href={'https://t.me/platre_interiors'}>@platre_interiors</Link></div>
        </div> 

        <div className="flex w-full items-center justify-between px-4 py-3">
          <div className="w-full h-1px border-t border-gold"/>
          <div className={'mx-8 text-gold'} >
            <LogoMedium
              width={76}
              height={76}
            />
          </div>
          <div className="w-full h-1px border-t border-gold"/>
        </div>

      </div>
    </footer>
  );
}