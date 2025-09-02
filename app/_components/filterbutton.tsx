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
            className={`py-3 px-5 hover:bg-primary-700 ${activeFilter === filter ? 'bg-primary-800' : ''}`}
            onClick={() => handleDestinationFilter(filter)}
        >
            {children}
        </button>
    )
}

export default FilterButton;