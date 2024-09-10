import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BrandHeader } from "../brandHeader"
import { LogoIcon } from "./logo"
import Link from "next/link"
import { links } from "@/settings/links"

export const BurgerMenu = ({ open = false, handleMenu }: any) => {

  return (
  <Sheet open={open}>
    <SheetContent onClose={handleMenu} className="flex flex-col" >
      <SheetHeader>
        <SheetTitle>
          <div className="flex gap-4 items-center justify-center mx-auto text-gold">
            <div className="w-full h-1px border-t border-current"/>
            <div>
              <LogoIcon className='h-14 w-14'/>
            </div>
            <div className="w-full h-1px border-t border-current"/>
          </div>
        </SheetTitle>
      </SheetHeader>
        <div className="h-full">
          <nav className="font-first flex flex-col w-full items-end gap-4 text-2xl text-main">
            <Link className="" href={links.projects()} >
              <span
                className=""
                >
                {"Проекты"}
              </span>
            </Link>
            {/* <Link className="" href="/">
              <span
                className=""
                >
                {"Услуги и Цены"}
              </span>
            </Link> */}
            {/* <Link className="" href="/">
              <span
                className=""
                >
                {"Контакты"}
              </span>
            </Link> */}
          </nav>
        </div>
    <SheetFooter className="">
      <div className="font-first flex w-full flex-col gap-4 items-center text-main text-lg">
        <address>
          <a href="tel:+79885446232" className="not-italic">+7 (988) 544‑6232</a>
        </address>
      
        <button className="h-temp-1 border rounded-md border-gold text-gold px-mobile py-4">
          <p className="leading-none">Узнать цену</p>
        </button>
      </div>
    </SheetFooter>
    </SheetContent>
  </Sheet>
  )
}