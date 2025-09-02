
import { TechData } from "../api/technology/route";


type TechnologyContentProps = {
    technology: TechData[];
    filter: string
};

function TechnologyContent({ technology, filter }: TechnologyContentProps) {

    const data = technology?.filter?.((tech) => tech.name === String(filter).toUpperCase());


    if (!data) {  
        return <div>Destination not found</div>;
    }       
    
    return (
        <div className="text-center md:text-left">
            {data.map(tech => (
                <div key={tech.id} className="flex flex-col gap-4">
                    <h3 className="uppercase text-2xl text-gray-400">The Terminology...</h3>
                    <h1 className="uppercase text-6xl tracking-wides md:text-6xl">{tech.name}</h1>
                    <div className="md:max-w-[70%] pb-8">
                        <p className="text-center text-[#D0D6F9] text-sm md:text-left leading-7 ">{tech.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TechnologyContent;
