import { Project } from "./project";


const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

export async function ProjectGrid() {
    const res = await fetch(`${API_URL}/api/news?populate=images`, {
      headers: {
        authorization: `bearer ${API_TOKEN}`,
      },
    });
  
    const { data } = await res.json();

    return (
    <section className="relative w-full min-h-screen flex bg-main">
      <div className="container h-full w-full py-[50px]">
        <div className="grid w-full grid-cols-3 gap-6 deskS:grid-cols-2 mobile:grid-cols-1">
            {
              data.map((project: any)=>{
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