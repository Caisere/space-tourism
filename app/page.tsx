export default function Home() {
    return (
        <div className="bg-[url('/images/home/homeBg-mobile.jpg')] sm:bg-[url('/images/home/homeBg-tablet.jpg')] lg:bg-[url('/images/home/homeBg-desktop.jpg')] w-screen h-screen bg-no-repeat bg-cover bg-center text-white p-2">
            <div className="mt-38 items-center md:mt-48 pb-10 flex justify-center md:items-end md:px-34 h-[500px]">
                <div className="flex flex-col gap-12 md:flex-row items-center justify-between">
                    <div className="flex-1 flex flex-col gap-6 items-center md:items-start max-w-[327px] text-lg md:max-w-[512px] lg:max-w-full ">
                        <h4 className="uppercase tracking-widest text-center">So, you want to travel to</h4>
                        <h1 className="uppercase text-6xl tracking-wides md:text-9xl">space</h1>
                        <p className="text-center text-[#D0D6F9] text-sm md:text-left leading-7">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="bg-white w-44 h-44 flex justify-center items-center rounded-full">
                            <p className="text-black uppercase font-semibold">explore</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
