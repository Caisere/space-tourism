"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FilterButton from "./filterbutton";



function DestinationFilter() {
    const searchParams = useSearchParams()

    const router = useRouter()

    const pathname = usePathname()

    const activeFilter = searchParams.get('dest') || 'moon' as string


    function handleDestinationFilter(filter:string) {
        const params = new URLSearchParams(searchParams);
        params.set('dest', filter);
        router.replace(`${pathname}?${params.toString()}`, {scroll: false})
    }

    return (
        <div className="flex flex-row mb-4">
            <FilterButton
                filter='moon'
                handleDestinationFilter={handleDestinationFilter}
                activeFilter={activeFilter}
            >
                Moon
            </FilterButton>

            <FilterButton
                filter='mars'
                handleDestinationFilter={handleDestinationFilter}
                activeFilter={activeFilter}
            >
                Mars
            </FilterButton>

            <FilterButton
                filter='titan'
                handleDestinationFilter={handleDestinationFilter}
                activeFilter={activeFilter}
            >
                Titan
            </FilterButton>

            <FilterButton
                filter='europa'
                handleDestinationFilter={handleDestinationFilter}
                activeFilter={activeFilter}
            >
                Europa
            </FilterButton>
        </div>
    );
}

export default DestinationFilter;