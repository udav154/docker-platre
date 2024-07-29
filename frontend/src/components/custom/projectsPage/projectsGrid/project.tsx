'use client'

import { IProject } from "@/interfaces";
import Link from "next/link";

interface IProjectCardParams {
  project: IProject
}

export function Project({
  project
}: IProjectCardParams) {

  return (
    <Link href={'/'}>
      <div 
        className='w-full h-full grid uration-300 hover:scale-105 '
        style={{
          gridTemplateRows: '1fr auto'
        }}
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat p-5 aspect-square flex items-end shadow-[27px_17px_8px_0px_rgba(0,0,0,0.18)]" 
          style={{ 
            backgroundImage: `url(${project.attributes.preview.data.attributes.url})`,
          }}
        >
          <p 
            className="text-lg text-white"
            >
            {project.attributes.title}
          </p>
        </div>
      </div>
    </Link>
  );
}