'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { steps } from './consts'


export function StepsDesktop() {
  const intervalRef = useRef<null | NodeJS.Timeout>(null)
  const [visibleElement, setVisibleElement] = useState<number | null>(null)

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) {
        startAnimation()
      } else {
        stopAnimation()
      }
    },
  })

  useEffect(() => {
    // Очищаем интервал при размонтировании компонента
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const startAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    setVisibleElement(0)

    intervalRef.current = setInterval(() => {
      setVisibleElement((prev) => {
        if (prev === null) return 0
        const next = prev < steps.length - 1 ? prev + 1 : 0
        return next
      })
    }, 2000)
  }

  const stopAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setVisibleElement(null)
  }

  return (
    <div
      style={{ background: 'url("/stepsBg.jpg")' }}
      className='flex gap-28 justify-center w-full h-auto py-100px deskS:flex-col-reverse deskS:items-center deskS:pb-[40px] deskS:pt-[20px] deskS:px-mobile deskS:gap-10  rounded-xl'
    >
      <div
        ref={ref}
        style={{ backdropFilter: 'blur(5px)', backgroundColor: '#00000061' }}
        className='flex justify-between mx-auto text-white gap-[30px] rounded-xl p-5'
      >
        {steps.map((step, idx, arr) => (
          <motion.div
            key={step.number}
            className='relative text-center flex items-center gap-1 flex-col  p-5'
            initial={{ scale: 1 }}
            animate={{
              scale: visibleElement === idx ? 1.2 : 1,
              opacity: visibleElement === idx ? 1 : 0.5,
            }}
            transition={{ duration: 1 }} // Длительность увеличения
          >
            <div className='text-4xl font-second font-bold mb-2'>{step.number}</div>
            <div className='font-second text-xl font-medium'>{step.title}</div>
            <div className='border-b border-white mb-2 w-full'></div>
            <div className='w-[130px] h-[130px] flex items-center justify-center'>{step.icon}</div>
            {/* <Image src={step.icon} alt={step.title} width={50} height={50} /> */}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
