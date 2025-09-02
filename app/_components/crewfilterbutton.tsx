import { ReactNode } from "react";


type CrewFilterButtonProp = {
    children: ReactNode,
    filter: string,
    handleCabinFilter: (filter:string) => void,
    activeFilter: string
}



function CrewFilterButton ({children, filter, handleCabinFilter, activeFilter}:CrewFilterButtonProp) {
    return (
        <button 
            className={`w-4 h-4 rounded-full border-1 hover:bg-primary-700 ${activeFilter === filter ? 'bg-primary-800' : ''}`}
            onClick={() => handleCabinFilter(filter)}
        />
    )
}

export default CrewFilterButton;