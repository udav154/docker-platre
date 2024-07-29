'use client'

import { Inter } from "next/font/google";
import { Logo } from "./logo";
import { NavBar } from "./navbar";
import { CallUs } from "../mainPage/callUsSection";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { BurgerMenu } from "./burgerMenu";


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }
  return (
    <header className="fixed h-24 w-full z-10 tabletS:h-16" style={{background: "linear-gradient(180deg, #000000 25.56%, #000000a1 60.64%, #0000006e 75.64%, transparent 100%)"}}>
      <div className="container flex mx-auto h-full items-center justify-between px-4 py-3">
        <Logo />
        <div className="deskS:hidden">
          <NavBar />
        </div>
        <div className="flex items-center gap-7">
          <div className="tablet:hidden">
            <CallUs />
          </div>
          <div className="hidden deskS:block text-white">
            <button>
              <MenuIcon className="w-8 h-8" onClick={handleMenu}/>
            </button>
            </div>
          </div>
      </div>
      <BurgerMenu open={isMenuOpen} handleMenu={handleMenu}/>
    </header>
  );
}