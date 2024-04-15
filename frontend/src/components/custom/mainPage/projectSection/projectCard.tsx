'use client'
import { IProject } from "@/interfaces";
import Link from "next/link";
interface IProjectCardParams {
  project: IProject
}

export function ProjectCard({
  project
}: IProjectCardParams) {

  return (
    <Link href={'/'}>
      <div 
        className='w-full h-full grid min-h-550px duration-300 hover:scale-105'
        style={{
          gridTemplateRows: '1fr auto'
        }}
        >
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat p-5 flex items-end" 
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