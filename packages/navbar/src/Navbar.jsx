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
    menuName,
    menuFeaturedLinks,
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
                                    featuredLinks={menuFeaturedLinks}
                                    name={menuName}
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
    /**
     * Which logo to show in the navbar
     */
    logo: PropTypes.oneOf(['bring', 'posten']).isRequired,
    /**
     * Specify the href for clicking on the logo
     */
    logoHref: PropTypes.string.isRequired,
    /**
     * Title for logo
     */
    logoTitle: PropTypes.string.isRequired,
    /**
     * Aria label for logo
     */
    logoAriaLabel: PropTypes.string.isRequired,
    /**
     * Specify the flagship name. This will be shown to the right of the logo
     */
    flagship: PropTypes.string,
    /**
     * Specify what happens when clicking on the  Private / Business selector
     * This can be either links with href, React Router Links or Hedwig Links
     */
    selectorItems: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            selected: PropTypes.bool,
            ariaLabel: PropTypes.string.isRequired
        })
    ),
    /**
     * Href for skipping to main content
     */
    skipToMainHref: PropTypes.string.isRequired,
    /**
     * Title for skipping to main content
     */
    skipToMainTitle: PropTypes.string.isRequired,
    /**
     * Name showing on the menu button on desktop. When the menu is open the menuCloseName will show instead. Required when any items are to be shown in the menu
     */
    menuName: PropTypes.string,
    /**
     * Specify menu details. An object with various properties for showing the menu.
     */
    menu: PropTypes.exact({
        title: PropTypes.string.isRequired,
        closeName: PropTypes.string.isRequired,
        closeTitle: PropTypes.string.isRequired,
        sections: PropTypes.arrayOf(
            PropTypes.exact({
                title: PropTypes.string.isRequired,
                links: PropTypes.arrayOf(PropTypes.object)
            })
        )
    }),
    /**
     * Specify items that are featured in the menu. This is an array of links. Can be either links with href, React Router Links or Hedwig Links
     */
    menuFeaturedLinks: PropTypes.arrayOf(
        PropTypes.shape({
            props: PropTypes.oneOfType([
                PropTypes.shape({
                    href: PropTypes.string.isRequired,
                    children: PropTypes.node.isRequired
                }),
                PropTypes.shape({
                    to: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.object,
                        PropTypes.func
                    ]),
                    children: PropTypes.node.isRequired
                })
            ]).isRequired
        })
    )
}
