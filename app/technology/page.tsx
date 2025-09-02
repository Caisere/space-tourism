import TechnologyContent from "../_components/technologycontent";
import TechnologyFilter from "../_components/technologyfilter";
import TechnologyImage from "../_components/technologyimage";
import { getTechnologyData } from "../libs/data-service";

export const dynamic = 'force-dynamic';

type TechnologyProps = {
    searchParams: Promise<{ [key: string]: string }>;
}


export default async function Home({searchParams,}: TechnologyProps) {
    
    const data = await getTechnologyData();

    const {tec} = data



    const params = await searchParams;
    const filter = params.tech || "launch vehicle";

    return (
        <div className="bg-[url('/images/crew/crewBg-mobile.jpg')] sm:bg-[url('/images/crew/crewBg-tablet.jpg')] lg:bg-[url('/images/crew/crewBg-desktop.jpg')] w-screen h-screen bg-no-repeat bg-cover bg-center text-white p-2 min-h-screen">
            <div className="px-34 pt-24 md:pt-36 text-center md:text-start">
                <span>03</span>
                <span>Space Launch 101</span>
            </div>

            <div className="mt-20 items-center md:mt-10 pb-10 flex justify-center md:items-end md:px-34 h-[500px]">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 flex flex-col items-center md:flex-row md:items-center justify-between gap-12">
                        <TechnologyFilter />
                        <div className="flex flex-col gap-6 items-center">
                            <TechnologyContent technology={tec} filter={filter} />
                        </div>
                    </div>
                    <div className="flex justify-center w-[70%] md:w-[40%]">
                        <TechnologyImage filter={filter} />
                    </div>
                </div>
            </div>
        </div>
    );
}