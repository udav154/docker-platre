'use client'

import React from "react";
import { BrandHeader } from "../../brandHeader";
import { ProjectCard } from "./projectCard";
import Link from "next/link";
import { links } from "@/settings/links";
import clsx from "clsx";
import s from './projects.module.scss'
import { IProject } from "@/interfaces";
import { useProjects } from "@/hooks/useProjects";
import { getApiBaseUrl } from "@/lib/api";

const API_URL = getApiBaseUrl();
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;


interface IProps {
  projects?: IProject[]
}

export function ProjectSection() {
  const { data: projects, isLoading, isError } = useProjects();

  if (isLoading) return <div className="text-white">Загрузка проектов...</div>;
  if (isError) return <div className="text-red-500">Ошибка загрузки</div>;

  return (
    <section className="relative w-full min-h-screen grid grid-rows-1 bg-main">
      <div className="relative container h-full flex flex-col items-center gap-16 mx-auto w-full pb-100px pt-10 deskS:pb-[40px] deskS:pt-[20px] deskS:px-mobile deskS:gap-10">
      <BrandHeader />
        <h3 className="text-7xl font-second text-white deskS:text-5xl">
          Наши проекты
        </h3>
        {/* <div className="w-full h-full grid grid-cols-4 gap-6 deskS:grid-cols-2 tablet:grid-cols-1"> */}
        <div className={clsx(s.cardsWrap, "w-full flex flex-wrap")} >
          {projects?.map((item: any) => (
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