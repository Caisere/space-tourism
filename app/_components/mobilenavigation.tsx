"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { useNavigationContent } from "../_contexts/navigationcontext";

const routes = [
    {
        name: "home",
        link: "/",
    },
    {
        name: "destination",
        link: "/destination",
    },
    {
        name: "crew",
        link: "/crew",
    },
    {
        name: "technology",
        link: "/technology",
    },
];

function MobileNavigation() {
    const { isOpen, toggleIsOpen } = useNavigationContent();

  // Don't render anything if not open
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/50 ">
            {/* Mobile Navigation Overlay */}
            <div className="fixed inset-0 bg-black/20" onClick={toggleIsOpen} />

            {/* Navigation Content */}
            <div className="fixed right-0 top-0 h-full w-60 bg-white/10 backdrop-blur-md border-l border-white/20">
                {/* Header with Logo and Close Button */}
                <div className="flex justify-between items-center p-6 border-b border-white/20">
                    <Image src="/icon.png" alt="website logo" width="28" height="28" />
                    <button
                        onClick={toggleIsOpen}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Close navigation"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="p-6">
                    <ul className="space-y-6">
                        {routes.map((route, i) => (
                            <li key={route.name}>
                                <Link
                                    href={route.link}
                                    onClick={toggleIsOpen}
                                    className="flex items-center gap-4 text-white hover:text-gray-300 transition-colors group"
                                >
                                    <span className="font-bold text-lg opacity-60 group-hover:opacity-100 transition-opacity">
                                        0{i + 1}
                                    </span>
                                    <span className="text-xl uppercase tracking-wider font-light">
                                        {route.name}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default MobileNavigation;
