import { IProject } from "@/interfaces";
import { Project } from "./project";
import { useProjects } from "@/hooks/useProjects";
import { getProjects } from "@/lib/api";


interface IProps {
  projects?: IProject[]
}

export async function ProjectGrid() {
  const projects = await getProjects();

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