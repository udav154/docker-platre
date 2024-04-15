import React from "react";
import { BrandHeader } from "../../brandHeader";
import { ProjectCard } from "./projectCard";

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
      <div className="relative container h-full flex flex-col items-center gap-16 mx-auto w-full pb-100px pt-10">
      <BrandHeader />
        <h3 className="text-7xl font-second text-white">
          Наши проекты
        </h3>
        <div className="w-full h-full grid grid-cols-4 p-5 gap-6">
          {data.map((item: any) => (
            <React.Fragment key={item.id}>
              <ProjectCard project={item}/>
            </React.Fragment>
          ))}
        </div>
        <button className="h-temp-2 w-fit border rounded-md text-white border-gold py-4 px-28 text-nowrap">
          <p className="leading-none">Все проекты</p>
        </button>
      </div>
    </section>
  );
}