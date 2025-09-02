import { ReactNode } from "react";


type FilterButtonProp = {
    children: ReactNode,
    filter: string,
    handleDestinationFilter: (filter:string) => void,
    activeFilter: string
}



function FilterButton ({children, filter, handleDestinationFilter, activeFilter}:FilterButtonProp) {
    return (
        <button 
            className={`py-3 hover:bg-primary-700 ${activeFilter === filter ? 'border-b-2 border-white' : ''}`}
            onClick={() => handleDestinationFilter(filter)}
        >
            {children}
        </button>
    )
}

export default FilterButton;