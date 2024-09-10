import { IProject } from "@/interfaces";
import { Project } from "./project";


const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
const NEXT_PUBLIC_API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export async function getServerSideProps() {
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


interface IProps {
  projects?: IProject[]
}

export async function ProjectGrid({projects}: IProps) {


    return (
    <section className="relative w-full min-h-screen flex bg-main">
      <div className="container h-full w-full py-[50px]">
        <div className="grid w-full grid-cols-3 gap-6 deskS:grid-cols-2 mobile:grid-cols-1">
            {
              projects?.map((project: any)=>{
                return (
                  <Project key={project.id} project={project}/>
                )
              })
            }
        </div>
      </div>
    </section>
  );
}