import React from "react";
import { BrandHeader } from "../../brandHeader";
import { ProjectCard } from "./projectCard";
import Link from "next/link";
import { links } from "@/settings/links";
import clsx from "clsx";
import s from './projects.module.scss'
import { IProject } from "@/interfaces";
import { GetServerSideProps } from "next";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
const NEXT_PUBLIC_API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;


interface IProps {
  projects?: IProject[]
}


export const getServerSideProps: GetServerSideProps<IProps> = async () => {
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/news?populate=images`, {
    headers: {
      authorization: `bearer ${NEXT_PUBLIC_API_TOKEN}`,
    },
  });
  const { data: projects } = await res.json();

  return {
    props: { projects },
  };
}

export async function ProjectSection({projects}: IProps) {

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