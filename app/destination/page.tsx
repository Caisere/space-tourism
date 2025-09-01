import DestinationContent from "../_components/destinationcontent";
import DestinationFilter from "../_components/destinationfilter";
import DestinationImg from "../_components/destinationimg";
import { getDestinationData } from "../libs/data-service";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const data = await getDestinationData();
  const { destination } = data;

  const params = await searchParams;
  const filter = params.dest || "moon";
  console.log(filter);

  return (
    <div className="bg-[url('/images/destination/destinationBg-mobile.jpg')] sm:bg-[url('/images/destination/destinationBg-tablet.jpg')] lg:bg-[url('/images/destination/destinationBg-desktop.jpg')] w-screen h-screen bg-no-repeat bg-cover bg-center text-white p-2 min-h-screen">
      <div className="px-34 pt-24 md:pt-36 text-center md:text-start">
        <span>01</span>
        <span>Pick Your Destination</span>
      </div>

      <div className="mt-20 items-center md:mt-10 pb-10 flex justify-center md:items-end md:px-34 h-[500px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex justify-center w-[70%] md:w-[40%]">
            <DestinationImg filter={filter} />
          </div>
          <div className="flex-1 md:items-start">
            <DestinationFilter />
            <div className="flex flex-col gap-6 items-center md:items-start ml-8">
              <DestinationContent destination={destination} filter={filter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
