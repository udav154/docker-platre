import { ProjectSwiper } from '@/components/custom/projectPage/projectSwiper';
import { IProject } from '@/interfaces';
import { getApiBaseUrl, getProject } from '@/lib/api';
import React from 'react';

const API_URL = getApiBaseUrl();
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const project = await getProject(params.id);
  const { attributes } = project;

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
