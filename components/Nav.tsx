"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"
import {Links} from '@/types/index'
export const links: Links[] = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Team",
        path: "/team",
    },
    {
        name: "Projects",
        path: "/project",
    },
    {
        name: "Achievement",
        path: "/achievement",
    },
  ]

export default function Nav() {
    const path = usePathname();
  return (
    
    <>
        {links.map((link, index) => (
            <Link  key={index} className={`${path===link.path ?"border-b-2 border-accent text-accent":""} transition-all hover:text-accent` } href={link.path}>{link.name}</Link>
        ))}
        <Link href="/contact">
                    <Button className="text-black bg-accent hover:opacity-80 hover:bg-accent">Contact Me</Button>
        </Link>
    </>
        
  )
}
