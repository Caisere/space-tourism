import { ReactNode } from "react";


type CrewFilterButtonProp = {
    children: ReactNode,
    filter: string,
    handleCrewFilter: (filter:string) => void,
    activeFilter: string
}



function CrewFilterButton ({children, filter, handleCrewFilter, activeFilter}:CrewFilterButtonProp) {
    return (
        <button 
            className={`w-4 h-4 rounded-full border-1 hover:bg-primary-700 ${activeFilter === filter ? 'bg-primary-800' : ''}`}
            onClick={() => handleCrewFilter(filter)}
        />
    )
}

export default CrewFilterButton;