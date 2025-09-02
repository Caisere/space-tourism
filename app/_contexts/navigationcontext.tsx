'use client'

import { createContext, useContext, useState } from "react";


// Define proper types
interface NavigationContextType {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    toggleIsOpen: () => void;
}

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)

    function toggleIsOpen(){
        // console.log('open')
        setIsOpen(!isOpen)
    }

    return (
        <NavigationContext.Provider value={{ isOpen, toggleIsOpen, setIsOpen }}>
            {children}
        </NavigationContext.Provider>
    )
}

function useNavigationContent () {
    const context = useContext(NavigationContext)
    if (context === undefined) {
        throw new Error('Navigation Context is used outside of the Navigation Provider')
    }
    return context
}

export {NavigationProvider, useNavigationContent}