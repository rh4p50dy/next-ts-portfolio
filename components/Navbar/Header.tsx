"use client"

import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial window width on mount
    setWindowWidth(window.innerWidth);

    // Add event listener to update window width on resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            <Nav />
          </div>
          <div className="xl:hidden items-center gap-8">
            <Menu onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
        {isOpen && <MobileNav setIsOpen={setIsOpen} />}
      </header>
      {windowWidth < 1024 ? <div className="h-[90px]"></div> : null}
    </>
  );
}

export default Header;
