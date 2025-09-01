


import type { DestinationData } from "../api/destination/route";

type DestinationContentProps = {
    destination: DestinationData[];
    filter: string
};

function DestinationContent({ destination, filter }: DestinationContentProps) {

    const data = destination?.filter?.((dest) => dest.name === String(filter));

    console.log(data)

    if (!data) {  
        return <div>Destination not found</div>;
    }       
    
    return (
        <div className="text-center md:text-left">
            {data.map(dest => (
                <div key={dest.id}>
                    <h1 className="uppercase text-6xl tracking-wides md:text-9xl">{dest.name}</h1>
                    <div className="border-b md:max-w-[70%] pb-8">
                        <p className="text-center text-[#D0D6F9] text-sm md:text-left leading-7 ">{dest.description}</p>
                    </div>
                    <div className="flex max-w-full justify-between items-center md:max-w-[60%] mt-5">
                        <div className="flex flex-col gap-1">
                            <p className="uppercase text-[12px]">ave. distance</p>
                            <p className="font-semibold text-2xl uppercase">{dest.averageDis} MIL. KM</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="uppercase text-[12px]">est. travel time</p>
                            <p className="font-semibold text-2xl uppercase">{dest.month} Months</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DestinationContent;
