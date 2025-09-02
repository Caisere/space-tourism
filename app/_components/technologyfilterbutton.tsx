


type CrewFilterButtonProp = {
    children: React.ReactNode,
    filter: string,
    handleTechnologyFilter: (filter:string) => void,
    activeFilter: string
}



function TechnologyFilterButton ({children, filter, handleTechnologyFilter, activeFilter}:CrewFilterButtonProp) {
    return (
        <button 
            className={`w-10 h-10 rounded-full border-1 hover:bg-primary-700 ${activeFilter === filter ? 'bg-primary-800' : ''}`}
            onClick={() => handleTechnologyFilter(filter)}
        >
            {children}
        </button>
    )
}

export default TechnologyFilterButton;