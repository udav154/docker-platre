'use client'

import { steps } from './consts'


export function StepsMobile() {

  return (
    <div
      className='flex gap-28 justify-center w-full h-auto deskS:flex-col-reverse deskS:items-center deskS:gap-10 rounded-xl'
    >
      <div
        className='flex text-white gap-[30px] w-full justify-center items-center flex-wrap'
        >
        {steps.map((step, idx, arr) => (
          <div
            style={{ backgroundColor: '#00000061' }}
            key={step.number}
            className='relative text-center flex items-center gap-1 flex-col p-5 rounded-xl max-w-[1000px] w-[30%] max800:w-[45%] max550:w-[100%]'
          >
            <div className='text-4xl font-second font-bold mb-2'>{step.number}</div>
            <div className='font-second text-xl font-medium'>{step.title}</div>
            <div className='border-b border-white mb-2 w-full max-w-[500px]'></div>
            <div className='w-[130px] h-[130px] flex items-center justify-center'>{step.icon}</div>
            {/* <Image src={step.icon} alt={step.title} width={50} height={50} /> */}
          </div>
        ))}
      </div>
    </div>
  )
}
