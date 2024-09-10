import { ProjectSwiper } from '@/components/custom/projectPage/projectSwiper';
import { IProject } from '@/interfaces';
import React from 'react';

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
const NEXT_PUBLIC_API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

const getProject = async (id: string) => {
  const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/news/${id}?populate=images`, {
    headers: {
      authorization: `Bearer ${NEXT_PUBLIC_API_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch project');
  }

  return await response.json();
};

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const project = await getProject(params.id);
  const { data: { attributes }} = project as {data: IProject}

  return (
    <div className="h-full pt-header relative container text-white">
      <ProjectSwiper images={attributes?.images?.data}/>
      <div className='pt-[100px] pb-[100px] mobile:pt-[50px] mobile:pb-[50px]'>
        <h1 className='font-first text-4xl mb-4'>{attributes.title}</h1>
        <p>{attributes.description}</p>
      </div>
      <div className="border-t border-gold h-1px w-full"/>
    </div>
  );
}
