"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import TechnologyFilterButton from "./technologyfilterbutton";




function TechnologyFilter() {
    const searchParams = useSearchParams()

    const router = useRouter()

    const pathname = usePathname()

    const activeFilter = searchParams.get('tech') || 'launch vehicle' as string


    function handleCabinFilter(filter:string) {
        const params = new URLSearchParams(searchParams);
        params.set('tech', filter);
        router.replace(`${pathname}?${params.toString()}`, {scroll: false})
    }

    return (
        <div className="flex flex-row md:flex-col justify-between gap-4 md:max-w-[20%]">
            <TechnologyFilterButton
                filter='launch vehicle'
                handleCabinFilter={handleCabinFilter}
                activeFilter={activeFilter}
            >
                <span>1</span>
            </TechnologyFilterButton>

            <TechnologyFilterButton
                filter='spaceport'
                handleCabinFilter={handleCabinFilter}
                activeFilter={activeFilter}
            >
                <span>2</span>
            </TechnologyFilterButton>

            <TechnologyFilterButton
                filter='space capsule'
                handleCabinFilter={handleCabinFilter}
                activeFilter={activeFilter}
            >
                <span>3</span>
            </TechnologyFilterButton>
        </div>
    );
}

export default TechnologyFilter;