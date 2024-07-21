"use client"

import Link from "next/link"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { useState } from "react"
import { Menu } from "lucide-react"

function Header() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    
        <header className="py-8 xl:py-8 text-white lg:relative fixed bg-[#181717cc] w-full">
            <div className="container mx-auto flex justify-between items-center ">
                <Link href="/">
                    <h1 className="lg:text-4xl text-xl font-semibold">
                        RH4P
                        <span className="text-accent">50DY</span>
                        
                    </h1>
                </Link>
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                </div>
                <div className="xl:hidden items-center gap-8">
                    <Menu onClick={()=>setIsOpen(!isOpen)}/>
                </div>
                
            </div>
            {isOpen && <MobileNav setIsOpen={setIsOpen}/>}
        </header>
        {window.innerWidth < 1024 ? (<div className="h-[90px]"></div>) : <></>}
    </>
  )
}

export default Header