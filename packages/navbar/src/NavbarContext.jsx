import React, { createContext, useState, useEffect } from 'react'

const NavbarContext = createContext([{}, () => {}])

const NavbarProvider = ({ children }) => {
    //const [state, setState] = useState({ isSearching: false, menuOpen: false })
    const [desktop, setDesktop] = useState()
    const [menuOpen, setMenuOpen] = useState(false)

    function handleWindowSizeChange() {
        setDesktop(window.innerWidth >= 940)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        handleWindowSizeChange()
        return () =>
            window.removeEventListener('resize', handleWindowSizeChange)
    }, [])

    return (
        <NavbarContext.Provider value={{ desktop, menuOpen, setMenuOpen }}>
            {children}
        </NavbarContext.Provider>
    )
}

export { NavbarContext, NavbarProvider }
