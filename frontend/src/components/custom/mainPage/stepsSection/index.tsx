
import { Step1, Step2, Step3, Step4, Step5, Step6 } from '@/assets/icons';
import Image from 'next/image';
import { BrandHeader } from '../../brandHeader';

const steps = [
  { number: 1, title: 'Консультация', icon: <Step1 /> },
  { number: 2, title: 'Обмер', icon: <Step2 /> },
  { number: 3, title: 'Разработка', icon: <Step3 /> },
  { number: 4, title: 'Утверждение', icon: <Step4 /> },
  { number: 5, title: 'Авторский надзор', icon: <Step5 /> },
  { number: 6, title: 'Сдача объекта', icon: <Step6 /> },
];

export function StepsSection() {

  return (
    <section className="relative w-screen bg-main">
       <div className="relative container h-full flex flex-col items-center gap-16 mx-auto w-full pb-100px pt-10 deskS:pb-[40px] deskS:pt-[20px] deskS:px-mobile deskS:gap-10">
        <BrandHeader />
        <div style={{background: 'url("/stepsBg.jpg")'}}className="flex gap-28 justify-center w-full h-auto py-100px deskS:flex-col-reverse deskS:items-center deskS:pb-[40px] deskS:pt-[20px] deskS:px-mobile deskS:gap-10  rounded-xl">
          <div  style={{backdropFilter: "blur(5px)", backgroundColor: "#00000061"}} className="flex justify-between mx-auto text-white gap-[30px] rounded-xl p-5">
            {steps.map((step, idx, arr) => (
              <div key={step.number} className="relative text-center flex items-center gap-1 flex-col  p-5">
                <div className="text-4xl font-second font-bold mb-2">{step.number}</div>
                <div className="font-second text-xl font-medium">{step.title}</div>
                <div className="border-b border-white mb-2 w-full"></div>
                <div className="w-[130px] h-[130px] flex items-center justify-center">
                  {step.icon}
                </div>
                {/* <Image src={step.icon} alt={step.title} width={50} height={50} /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
