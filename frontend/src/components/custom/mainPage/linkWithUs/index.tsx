import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MailIcon, PhoneIcon, PodcastIcon, UserIcon } from "lucide-react";
import Image from "next/image";


export function LinkWithUs() {

  return (
    <section className="relative w-full min-h-screen grid grid-rows-1 bg-white">
      <div className="relative container h-full flex flex-col items-center gap-8 mx-auto w-full py-100px deskS:py-[50px] deskS:px-mobile">
      <div className="border-t border-main h-1px w-full"/>

        <div className="flex flex-col gap-5 h-fill w-full grow py-20 deskS:py-5">
          <h3 className="text-5xl font-second text-main text-center">
            ОСТАЛИСЬ ВОПРОСЫ?
          </h3>
          <h4 className="text-3xl font-light font-second text-main text-center">
            Тогда свяжитесь с нами
          </h4>
           
          <div className="grid gap-16 grid-cols-[1fr_auto] deskS:grid-cols-1 justify-center">
            <div className="flex flex-col gap-10 justify-center">
              <div className="grid w-full max-w-full items-center gap-1.5">
                <Label htmlFor="input-name" className="text-main text-xl font-second">Имя</Label>
                <div className="grid w-full bg-white items-center border border-gold" style={{gridTemplateColumns: '1fr auto'}}>
                  <Input type="text" id="input-name" placeholder="Введите имя..." className="placeholder:text-gray rounded-none h-temp-2 border-none deskS:h-14" />
                  <div className="px-4 flex items-center justify-center text-gray">
                    <UserIcon width={30} height={30} className="deskS:h-[25px] deskS:w-[25px]" />
                  </div>
                </div>
              </div>

              <div className="grid w-full max-w-full items-center gap-1.5">
                <Label htmlFor="input-phone" className="text-xl font-second text-main">Телефон</Label>
                <div className="grid w-full bg-white items-center border border-gold" style={{gridTemplateColumns: '1fr auto'}}>
                  <Input type="phone" id="input-phone" placeholder="Введите номер..." className="placeholder:text-gray rounded-none h-temp-2 border-none deskS:h-14" />
                  <div className="px-4 flex items-center justify-center text-gray">
                    <PhoneIcon width={30} height={30} className="deskS:h-[25px] deskS:w-[25px]" />
                  </div>
                </div>
              </div>

              <div className="grid w-full max-w-full items-center gap-1.5">
                <Label htmlFor="input-email" className="text-main text-xl font-second">Почта</Label>
                <div className="grid w-full bg-white items-center border border-gold" style={{ gridTemplateColumns: '1fr auto' }}>
                  <Input type="phone" id="input-email" placeholder="Введите почту..." className="placeholder:text-gray rounded-none h-temp-2 border-none deskS:h-14" />
                  <div className="px-4 flex items-center justify-center text-gray">
                    <MailIcon width={30} height={30} className="deskS:h-[25px] deskS:w-[25px]" />
                  </div>
                </div>
              </div>
              
              <div className="w-full flex justify-center">
                <button className="h-temp-2 w-fit border text-gold border-gold py-4 px-20 text-nowrap">
                  <p className="leading-none text-xl">Связаться</p>
                </button>
              </div>
            </div>
            <Image 
              className="shadow-shadow2 rounded-lg deskS:hidden"
              alt="linkWithUs"
              src={'/linkWithUs.jpg'}
              width={480}
              height={540}
            />
          </div>

        </div>
        <div className="border-t border-main h-1px w-full"/>
      </div>
    </section>
    
  )
}

