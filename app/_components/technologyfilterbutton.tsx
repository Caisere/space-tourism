


type CrewFilterButtonProp = {
    children: React.ReactNode,
    filter: string,
    handleCabinFilter: (filter:string) => void,
    activeFilter: string
}



function TechnologyFilterButton ({children, filter, handleCabinFilter, activeFilter}:CrewFilterButtonProp) {
    return (
        <button 
            className={`w-10 h-10 rounded-full border-1 hover:bg-primary-700 ${activeFilter === filter ? 'bg-primary-800' : ''}`}
            onClick={() => handleCabinFilter(filter)}
        >
            {children}
        </button>
    )
}

export default TechnologyFilterButton;