import CrewContent from "../_components/crewcontent";
import CrewFilter from "../_components/crewfilter";
import CrewImage from "../_components/crewimage";
import { getCrewData } from "../libs/data-service";

export const dynamic = 'force-dynamic';

type DestinationProps = {
    searchParams: Promise<{ [key: string]: string }>;
}


export default async function Home({searchParams,}: DestinationProps) {
    
    const data = await getCrewData();
    const {crew} = data


    const params = await searchParams;
    const filter = params.crew || "Douglas Hurley";

    return (
        <div className="bg-[url('/images/crew/crewBg-mobile.jpg')] sm:bg-[url('/images/crew/crewBg-tablet.jpg')] lg:bg-[url('/images/crew/crewBg-desktop.jpg')] w-screen h-screen bg-no-repeat bg-cover bg-center text-white p-2 min-h-screen">
            <div className="px-34 pt-24 md:pt-36 text-center md:text-start tracking-widest space-x-4">
                <span className="font-semibold text-gray-500">02</span>
                <span>Meet Your Crew</span>
            </div>

            <div className="mt-20 items-center md:mt-10 pb-10 flex justify-center md:items-end md:px-34 h-[500px]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 md:items-start space-y-12 flex flex-col">
                        <div className="flex flex-col gap-6 items-center md:items-start ml-8">
                            <CrewContent crews={crew} filter={filter} />
                        </div>
                        <span className=" max-w-[20%]">
                            <CrewFilter />
                        </span>
                    </div>
                    <div className="flex justify-center w-[70%] md:w-[40%]">
                        <CrewImage filter={filter} />
                    </div>
                </div>
            </div>
        </div>
    );
}