import React from "react";
import { BrandHeader } from "../../brandHeader";
import { ProjectCard } from "./projectCard";
import Link from "next/link";
import { links } from "@/settings/links";
import clsx from "clsx";
import s from './projects.module.scss'

const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

export async function ProjectSection() {
  const res = await fetch(`${API_URL}/api/news?populate=preview`, {
    headers: {
      authorization: `bearer ${API_TOKEN}`,
    },
  });

  const { data } = await res.json();

  return (
    <section className="relative w-full min-h-screen h-full grid grid-rows-1 bg-main">
      <div className="relative container h-full flex flex-col items-center gap-16 mx-auto w-full pb-100px pt-10 deskS:pb-[40px] deskS:pt-[20px] deskS:px-mobile deskS:gap-10">
      <BrandHeader />
        <h3 className="text-7xl font-second text-white deskS:text-5xl">
          Наши проекты
        </h3>
        {/* <div className="w-full h-full grid grid-cols-4 gap-6 deskS:grid-cols-2 tablet:grid-cols-1"> */}
        <div className={clsx(s.cardsWrap, "w-full h-full grid gap-6")} >
          {data.map((item: any) => (
            <React.Fragment key={item.id}>
              <ProjectCard project={item}/>
            </React.Fragment>
          ))}
        </div>
        <Link className="min-h-temp-2 w-fit border rounded-md text-white border-gold py-4 px-28 text-nowrap flex items-center hover:scale-[1.05] hover:text-gold hover:border-white duration-300" href={links.projects()} >
          <p className="leading-none">Все проекты</p>
        </Link>
      </div>
    </section>
  );
}