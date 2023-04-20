import React, { createContext, useState, useEffect } from 'react'

const NavbarContext = createContext([{}, () => {}])

const NavbarProvider = ({ children }) => {
    const [desktop, setDesktop] = useState()
    const [menuOpen, setMenuOpen] = useState(false)
    const [isSearching, setIsSearching] = useState(false)

    const handleWindowSizeChange = () => {
        setDesktop(window.innerWidth >= 940)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        handleWindowSizeChange()
        return () =>
            window.removeEventListener('resize', handleWindowSizeChange)
    }, [])

    return (
        <NavbarContext.Provider
            value={{
                desktop,
                menuOpen,
                setMenuOpen,
                isSearching,
                setIsSearching
            }}
        >
            {children}
        </NavbarContext.Provider>
    )
}

export { NavbarContext, NavbarProvider }
