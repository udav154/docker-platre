import { Inter } from "next/font/google";
import { Logo } from "./logo";
import { NavBar } from "./navbar";
import { CallUs } from "../mainPage/callUsSection";


export function Header() {
  return (
    <header className="fixed h-24 w-full z-10" style={{background: "linear-gradient(180deg, #000000 25.56%, #000000a1 60.64%, #0000006e 75.64%, transparent 100%)"}}>
      <div className="container flex mx-auto h-full items-center justify-between px-4 py-3">
        <Logo />
        <NavBar />
        <CallUs />
      </div>
    </header>
  );
}