import { BrandHeader } from "../../brandHeader";

const pharagraphs = [
  {
    id: 0,
    text: 'Планировочные решения всех помещений'
  },
  {
    id: 0,
    text: '3D визуализация и рендеры'
  },
  {
    id: 0,
    text: 'Подбор отделочных материалов, мебели и света'
  },
  {
    id: 0,
    text: 'Техническая документация и чертежи'
  },
]

export function EstimateSection() {
  return (
    <section className="relative w-full min-h-screen h-full grid grid-rows-1 bg-main">
      <div className="relative container h-full flex flex-col items-center gap-8 mx-auto w-full pb-100px pt-10">
        <BrandHeader />
        <div className="h-fill w-full grow">
          <div className="text-white flex flex-col gap-8 items-center">
            <h3 className="text-5xl font-second">
              РАСЧИТАТЬ ДИЗАЙН-ПРОЕКТ
            </h3>
            <ul className="list-disc">
              {
                pharagraphs.map(item=>(
                 <li key={item.id} className="py-1">{item.text}</li>
                ))
              }
            </ul>
          </div>
          <div>
              

          </div>
        </div>
        <div className="border-t border-gold h-1px w-full"/>
      </div>
    </section>
    
  )
}

