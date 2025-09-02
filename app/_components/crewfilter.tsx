"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CrewFilterButton from "./crewfilterbutton";



function CrewFilter() {
    const searchParams = useSearchParams()

    const router = useRouter()

    const pathname = usePathname()

    const activeFilter = searchParams.get('crew') || 'Douglas Hurley' as string


    function handleCrewFilter(filter:string) {
        const params = new URLSearchParams(searchParams);
        params.set('crew', filter);
        router.replace(`${pathname}?${params.toString()}`, {scroll: false})
    }

    return (
        <div className="flex flex-row justify-between gap-6 mt-4">
            <CrewFilterButton
                filter='Douglas Hurley'
                handleCrewFilter={handleCrewFilter}
                activeFilter={activeFilter}
            />
            

            <CrewFilterButton
                filter='Victor Glover'
                handleCrewFilter={handleCrewFilter}
                activeFilter={activeFilter}
            />
            

            <CrewFilterButton
                filter='mark shuttleworth'
                handleCrewFilter={handleCrewFilter}
                activeFilter={activeFilter}
            />
            

            <CrewFilterButton
                filter='Anousheh Ansari'
                handleCrewFilter={handleCrewFilter}
                activeFilter={activeFilter}
            />
            
        </div>
    );
}

export default CrewFilter;