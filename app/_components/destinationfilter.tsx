"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FilterButton from "./filterbutton";



function DestinationFilter() {
    const searchParams = useSearchParams()

    const router = useRouter()

    const pathname = usePathname()

    const activeFilter = searchParams.get('dest') || 'moon' as string


    function handleCabinFilter(filter:string) {
        const params = new URLSearchParams(searchParams);
        params.set('dest', filter);
        router.replace(`${pathname}?${params.toString()}`, {scroll: false})
    }

    return (
        <div className="flex flex-row mb-4">
            <FilterButton
                filter='moon'
                handleCabinFilter={handleCabinFilter}
                activeFilter={activeFilter}
            >
                Moon
            </FilterButton>

            <FilterButton
                filter='mars'
                handleCabinFilter={handleCabinFilter}
                activeFilter={activeFilter}
            >
                Mars
            </FilterButton>

            <FilterButton
                filter='titan'
                handleCabinFilter={handleCabinFilter}
                activeFilter={activeFilter}
            >
                Titan
            </FilterButton>

            <FilterButton
                filter='europa'
                handleCabinFilter={handleCabinFilter}
                activeFilter={activeFilter}
            >
                Europa
            </FilterButton>
        </div>
    );
}

export default DestinationFilter;