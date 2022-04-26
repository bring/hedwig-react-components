import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { NavbarProvider, NavbarContext } from './NavbarContext'
import NavbarLogoIcon from './NavbarLogoIcon'
import NavbarLogoFlagship from './NavbarLogoFlagship'
import Selector from './Selector'
import Menu from './Menu'
import '@posten-hedwig/core'
import '../dist/navbar.scss'

export default function Navbar({
    logoHref,
    logo,
    logoTitle,
    logoAriaLabel,
    flagship,
    skipToMainHref,
    skipToMainTitle,
    selectorItems,
    menu,
    children
}) {
    const [desktop, setDesktop] = useState()

    function handleWindowSizeChange() {
        setDesktop(window.innerWidth >= 940)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        handleWindowSizeChange()
        return () =>
            window.removeEventListener('resize', handleWindowSizeChange)
    }, [])

    function SkipToMain() {
        return (
            <a href={skipToMainHref} className='hw-navbar__skip-to-content'>
                {skipToMainTitle}
            </a>
        )
    }
    return (
        <header className='hw-navbar'>
            <div className='hw-navbar__content'>
                <div className='hw-navbar__top'>
                    <NavbarProvider>
                        <SkipToMain />
                        {flagship ? (
                            <NavbarLogoFlagship
                                href={logoHref}
                                logo={logo}
                                title={logoTitle}
                                ariaLabel={logoAriaLabel}
                                flagship={flagship}
                            />
                        ) : (
                            <NavbarLogoIcon
                                href={logoHref}
                                logo={logo}
                                title={logoTitle}
                                ariaLabel={logoAriaLabel}
                            />
                        )}
                        {desktop && selectorItems && (
                            <Selector items={selectorItems} desktop={desktop} />
                        )}
                        <nav className='hw-navbar__menu'>
                            {children}
                            {menu && (
                                <Menu
                                    menu={menu}
                                    selectorItems={selectorItems}
                                />
                            )}
                        </nav>
                    </NavbarProvider>
                </div>
            </div>
        </header>
    )
}

Navbar.propTypes = {
    logoHref: PropTypes.string.isRequired,
    logo: PropTypes.oneOf(['bring', 'posten']).isRequired,
    logoTitle: PropTypes.string.isRequired,
    logoAriaLabel: PropTypes.string.isRequired,
    flagship: PropTypes.string,
    selectorItems: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            selected: PropTypes.bool,
            ariaLabel: PropTypes.string.isRequired
        })
    ),
    skipToMainHref: PropTypes.string.isRequired,
    skipToMainTitle: PropTypes.string.isRequired,
    menu: PropTypes.exact({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        closeName: PropTypes.string.isRequired,
        closeTitle: PropTypes.string.isRequired,
        featured: PropTypes.arrayOf(PropTypes.object),
        sections: PropTypes.arrayOf(
            PropTypes.exact({
                title: PropTypes.string.isRequired,
                links: PropTypes.arrayOf(PropTypes.object)
            })
        )
    })
}
