import Image from "next/image";
import Link from "next/link";


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
                    <li key={route.name}>
                        <Link href={route.link} className="flex gap-1">
                            <span className="font-semibold">0{i}</span>
                            {route.name.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
