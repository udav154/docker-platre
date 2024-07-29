'use client'
import { IProject } from '@/interfaces'
import Link from 'next/link'
interface IProjectCardParams {
  project: IProject
}

export function ProjectCard({ project }: IProjectCardParams) {
  return (
    <Link href={'/'} className='flex items-center justify-center'>
      <div className='w-full h-full grid min-h-[450px] duration-300 hover:scale-105 mobile:min-h-[400px] max-h-[450px]'>
        <div
          className='w-full h-full bg-cover bg-center bg-no-repeat p-5 flex items-end'
          style={{
            backgroundImage: `url(${project.attributes.preview.data.attributes.url})`,
          }}
        >
          <p className='text-lg text-white'>{project.attributes.title}</p>
        </div>
      </div>
    </Link>
  )
}
