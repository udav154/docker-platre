import { links } from "@/settings/links";
import clsx from "clsx";
import Link from "next/link";
import s from './index.module.scss'


export function BannerSection() {

  return (
    <section className="relative w-full h-screen flex justify-center items-center">
      <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/before-after.png")' }} />
      <div className={clsx("absolute bottom-[25%]", s.btn)}>
        {/* <Link className={clsx("relative min-h-temp w-fit border rounded-md text-white border-none bg-gold py-4 px-20 text-nowrap flex items-center")} href={links.projects()}>
          <p className="leading-none text-xl font-first">Примеры Проектов</p>
        </Link> */}
         <Link 
          className={clsx(
            "relative w-fit border-0 rounded-full text-white bg-gold py-4 px-20 text-nowrap flex items-center shadow-lg transform ease-in-out hover:scale-[1.05] hover:shadow-xl duration-500"
          )} 
            href={links.projects()}
          >
            <p className="leading-none text-xl font-first">Примеры Проектов</p>
          </Link>
      </div>
    </section>
  );
}