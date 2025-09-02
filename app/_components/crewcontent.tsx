import { CrewData } from "../api/crew/route";


type DestinationContentProps = {
    crews: CrewData[];
    filter: string
};

function CrewContent({ crews, filter }: DestinationContentProps) {

    const data = crews?.filter?.((crew) => crew.name === String(filter));


    if (!data) {  
        return <div>Destination not found</div>;
    }       
    
    return (
        <div className="text-center md:text-left">
            {data.map(crew => (
                <div key={crew.id} className="flex flex-col gap-4">
                    <p className="text-2xl text-gray-500 uppercase">{crew.position}</p>
                    <h1 className="uppercase text-6xl tracking-wides md:text-4xl">{crew.name}</h1>
                    <div className="md:max-w-[70%] pb-8">
                        <p className="text-center text-[#D0D6F9] text-sm md:text-left leading-7 ">{crew.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CrewContent;
