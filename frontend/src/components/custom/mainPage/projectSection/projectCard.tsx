'use client'
import { IProject } from '@/interfaces'
import { links } from '@/settings/links'
import Link from 'next/link'
interface IProjectCardParams {
  project: IProject
}

export function ProjectCard({ project }: IProjectCardParams) {
  const preview = project.attributes.images.data[0]

  return (
    <Link href={links.project(project.id)} className='flex items-center justify-center h-fit'>
      <div className='grow-[1] duration-300 hover:scale-105 w-full h-full'>
        <div
          className='bg-cover bg-center bg-no-repeat p-5 flex items-end  w-full h-full'
          style={{
            backgroundImage: `url(${preview.attributes.url})`,
          }}
        >
          <p className='text-lg text-white'>{project.attributes.title}</p>
        </div>
      </div>
    </Link>
  )
}
