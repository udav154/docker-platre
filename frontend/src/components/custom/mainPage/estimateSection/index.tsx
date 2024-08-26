'use client'

import { Input } from "@/components/ui/input";
import { BrandHeader } from "../../brandHeader";
import { Label } from "@/components/ui/label";
import { PhoneIcon, UserIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

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

const defaultEstimateValue = 50
const maxEstimateValue = 500

export function EstimateSection() {
  const [estimateValue, setestimateValue] = useState(defaultEstimateValue)

  const handleChangeSquare = (e: number[]) =>{ 
    setestimateValue(e[0])
  }

  return (
    <section className="relative w-full min-h-screen grid grid-rows-1 bg-main">
      <div className="relative container h-full flex flex-col items-center gap-8 mx-auto w-full pb-100px pt-10 deskS:pb-[40px] deskS:pt-[20px] deskS:px-mobile">
        <BrandHeader />

        <div className="h-fill w-full grow flex flex-col gap-12">
          
          <div className="text-white flex flex-col gap-8 items-center">
            <h3 className="text-5xl font-second deskS:text-3xl deskS:text-center">
              РАСЧИТАТЬ ДИЗАЙН-ПРОЕКТ
            </h3>
            <ul className="list-disc">
              {
                pharagraphs.map(item=>(
                 <li key={item.id} className="py-1 ml-[10px] deskS:text-sm">{item.text}</li>
                ))
              }
            </ul>
          </div>

          <div className="w-full max-w-3xl h-fit mx-auto flex flex-col gap-12">

            <div className="grid w-full max-w-full items-center gap-1.5">
              <Label htmlFor="input-name" className="text-white text-xl font-second deskS:text-lg">Имя</Label>
              <div className="grid w-full bg-white items-center" style={{gridTemplateColumns: '1fr auto'}}>
                <Input type="text" id="input-name" placeholder="Введите имя..." className="rounded-none h-temp-2 border-none deskS:h-14" />
                <div className="px-4 flex items-center justify-center text-slate-400">
                  <UserIcon width={30} height={30} className="deskS:h-[25px] deskS:w-[25px]"/>
                </div>
              </div>
            </div>

            <div className="grid w-full max-w-full items-center gap-1.5">
              <Label htmlFor="input-phone" className="text-white text-xl font-second deskS:text-lg">Телефон</Label>
              <div className="grid w-full bg-white items-center" style={{gridTemplateColumns: '1fr auto'}}>
                <Input type="phone" id="input-phone" placeholder="Введите номер..." className="rounded-none h-temp-2 border-none deskS:h-14" />
                <div className="px-4 flex items-center justify-center text-slate-400">
                  <PhoneIcon width={30} height={30} className="deskS:h-[25px] deskS:w-[25px]"/>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-5 deskS:gap-3">
                <Checkbox id="terms" className="bg-white color-gold w-6 h-6"/>
                <Label
                  htmlFor="terms"
                  className="text-white text-base checked:bg-white font-normal deskS:text-sm"
                >
                  Авторский надзор
                </Label>
              </div>
            </div>

            <div className="flex w-full flex-col gap-12">
              <div>
                <p  className="text-white text-xl checked:bg-white font-normal font-second deskS:text-lg">{'Площать (м2)'}</p>
              </div>
              <Slider className="deskS:px-[35px]" defaultValue={[defaultEstimateValue]} value={[estimateValue]} max={maxEstimateValue} step={0.1} onValueChange={handleChangeSquare} />
            </div>
            
            <div className="w-full flex justify-center">
              <button className="h-temp-2 w-fit border text-white border-gold py-4 px-20 text-nowrap">
                <p className="leading-none text-xl">Оставить заявку</p>
              </button>
            </div>

          </div>
        </div>
        <div className="border-t border-gold h-1px w-full"/>
      </div>
    </section>
    
  )
}

