


import type { DestinationData } from "../api/destination/route";

type DestinationContentProps = {
    destination: DestinationData[];
    filter: string
};

function DestinationContent({ destination, filter }: DestinationContentProps) {

    const data = destination?.filter?.((dest) => dest.name === String(filter).toUpperCase());

    console.log(data)

    if (!data) {  
        return <div>Destination not found</div>;
    }       
    
    return (
        <div className="text-center md:text-left">
            {data.map(dest => (
                <div key={dest.id}>
                    <h1 className="uppercase text-6xl tracking-wides md:text-9xl">{dest.name}</h1>
                    <p className="text-center text-[#D0D6F9] text-sm md:text-left leading-7">{dest.description}</p>
                </div>
            ))}
        </div>
    );
}

export default DestinationContent;
