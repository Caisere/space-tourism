"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CrewFilterButton from "./crewfilterbutton";



function CrewFilter() {
    const searchParams = useSearchParams()

    const router = useRouter()

    const pathname = usePathname()

    const activeFilter = searchParams.get('crew') || 'Douglas Hurley' as string


    function handleCabinFilter(filter:string) {
        const params = new URLSearchParams(searchParams);
        params.set('crew', filter);
        router.replace(`${pathname}?${params.toString()}`, {scroll: false})
    }

    return (
        <div className="flex flex-row justify-between mt-4 max-w-[20%]">
            <CrewFilterButton
                filter='Douglas Hurley'
                handleCabinFilter={handleCabinFilter}
                activeFilter={activeFilter}
            >
                Moon
            </CrewFilterButton>

            <CrewFilterButton
                filter='Victor Glover'
                handleCabinFilter={handleCabinFilter}
                activeFilter={activeFilter}
            >
                Mars
            </CrewFilterButton>

            <CrewFilterButton
                filter='mark shuttleworth'
                handleCabinFilter={handleCabinFilter}
                activeFilter={activeFilter}
            >
                Titan
            </CrewFilterButton>

            <CrewFilterButton
                filter='Anousheh Ansari'
                handleCabinFilter={handleCabinFilter}
                activeFilter={activeFilter}
            >
                Europa
            </CrewFilterButton>
        </div>
    );
}

export default CrewFilter;