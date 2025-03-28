'use client'

import { useMediaQuery } from 'react-responsive';
import { Step1, Step2, Step3, Step4, Step5, Step6 } from '@/assets/icons';
import { BrandHeader } from '../../brandHeader';
import { StepsDesktop } from './desktop';
import { StepsMobile } from './mobile';
import { useEffect, useState } from 'react';

const steps = [
  { number: 1, title: 'Консультация', icon: <Step1 /> },
  { number: 2, title: 'Обмер', icon: <Step2 /> },
  { number: 3, title: 'Разработка', icon: <Step3 /> },
  { number: 4, title: 'Утверждение', icon: <Step4 /> },
  { number: 5, title: 'Авторский надзор', icon: <Step5 /> },
  { number: 6, title: 'Сдача объекта', icon: <Step6 /> },
];

export function StepsSection() {
  const [hasMounted, setHasMounted] = useState(false)
  const isAdaptive = useMediaQuery({ maxWidth: 1450 });
  
  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null
  return (
    <section className="relative w-screen bg-main">
       <div className="relative container h-full flex flex-col items-center gap-10 mx-auto w-full pb-50px pt-10 deskS:pb-[40px] deskS:pt-[20px] deskS:px-mobile deskS:gap-10">
        <BrandHeader />
        <h3 className="text-5xl font-second text-white deskS:text-5xl">
          Процесс работы
        </h3>
        {isAdaptive ? <StepsMobile /> : <StepsDesktop />}
      </div>
    </section>
  )
}
