"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"



function NavigationList({route, index}: {route: {name: string, link: string}, index: number}) {

    const pathname = usePathname()

    const isActive = pathname === route.link


    return (
        <li key={route.name}>
            <Link href={route.link} className={`flex gap-1 ${isActive ? 'text-white border-b-2 border-white' : 'text-gray-400'}`}>
                <span className="font-semibold">0{index}</span>
                {route.name.toUpperCase()}
            </Link>
        </li>
    )
}

export default NavigationList