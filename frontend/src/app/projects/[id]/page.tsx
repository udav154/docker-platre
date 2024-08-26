import React from 'react';

const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

const getProject = async (id: string) => {
  const response = await fetch(`${API_URL}/api/news/${id}`, {
    headers: {
      authorization: `Bearer ${API_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch project');
  }

  return await response.json();
};

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const project = await getProject(params.id);
  const { data: { attributes } } = project

  return (
    <div className="h-full pt-header relative container">
      <h1>{attributes.title}</h1>
      <p>{attributes.description}</p>
    </div>
  );
}
