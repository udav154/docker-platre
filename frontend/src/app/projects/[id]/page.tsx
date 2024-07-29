'use client'

import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

const getProject = async (id) => {
  'use client'
  return  await fetch(`${API_URL}/api/news/${id}`, {
    headers: {
      authorization: `bearer ${API_TOKEN}`,
    },
  });
} 


export default function ProjectPage ({}) {
  const { id } = useParams()
  const [project, setProject] = useState(null)


  useEffect(() => {
   getProject(id).then(res => {
    console.log('res', res)
   })

  }, [id])
  return (
    <>
      <div className="h-full">

      </div>
    </>
  )
}