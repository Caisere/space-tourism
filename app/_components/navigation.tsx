import Image from "next/image";
import NavigationList from "./navigationlist";
import Hamburger from "./hamburger";


const routes = [
    {
        name: 'home',
        link: '/'
    },
    {
        name: 'destination',
        link: '/destination'
    },
    {
        name: 'crew',
        link: '/crew'
    },
    {
        name: 'technology',
        link: '/technology'
    }
]


function Navigation() {
    return (
        <nav className="flex justify-between items-center w-full absolute top-10 z-50">
            <div className="flex-1 px-10">
                <Image
                    src='/icon.png'
                    alt="website logo"
                    width='28'
                    height='28'
                />
            </div>
            <ul className="hidden bg-white/5 backdrop-blur-xl  sm:flex items-center gap-4 px-8  flex-1 justify-end ">
                <div className="hidden md:block h-[2px] w-xl bg-amber-50/20 absolute -left-[520px]"/>
                {routes.map((route, i) => (
                    <NavigationList key={route.name} route={route} index={i} />
                ))}
            </ul>
            <div className="block sm:hidden">
                <Hamburger />
            </div>
        </nav>
    );
}

export default Navigation;
