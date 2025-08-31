export default function Home() {
    return (
        <div className="bg-[url('/images/technology/technologyBg-mobile.jpg')] sm:bg-[url('/images/technology/technologyBg-tablet.jpg')] lg:bg-[url('/images/technology/technologyBg-desktop.jpg')] w-screen h-screen bg-no-repeat bg-cover bg-center text-white p-2">
            <div className="mt-20 items-center md:mt-48 pb-10 flex justify-center md:items-end md:px-34 h-[500px]">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex-1 flex flex-col gap-6 items-center md:items-start">
                        <h4>So, you want to travel to</h4>
                        <h1>SPACE</h1>
                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <p>explore</p>
                    </div>
                </div>
            </div>
        </div>
    );
}