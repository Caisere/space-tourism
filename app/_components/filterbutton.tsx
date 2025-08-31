import { ReactNode } from "react";


type FilterButtonProp = {
    children: ReactNode,
    filter: string,
    handleCabinFilter: (filter:string) => void,
    activeFilter: string
}



function FilterButton ({children, filter, handleCabinFilter, activeFilter}:FilterButtonProp) {
    return (
        <button 
            className={`py-3 px-5 hover:bg-primary-700 ${activeFilter === filter ? 'bg-primary-800' : ''}`}
            onClick={() => handleCabinFilter(filter)}
        >
            {children}
        </button>
    )
}

export default FilterButton;