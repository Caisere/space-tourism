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
        <nav className="flex justify-between items-center w-full absolute top-10 z-50 px-10">
            <div className="flex-1">
                <Image
                    src='/icon.png'
                    alt="website logo"
                    width='28'
                    height='28'
                />
            </div>
            <ul className="hidden bg-white/5 sm:flex items-center gap-4 py-4 px-8  flex-1 justify-end ">
                {routes.map((route, i) => (
                    <NavigationList key={route.name} route={route} index={i} />
                ))}
            </ul>
            <div className="block md:hidden">
                <Hamburger />
            </div>
        </nav>
    );
}

export default Navigation;
