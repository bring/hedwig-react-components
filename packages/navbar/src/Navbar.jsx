import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { NavbarProvider, NavbarContext } from './NavbarContext'
import NavbarLogoIcon from './NavbarLogoIcon'
import NavbarLogoFlagship from './NavbarLogoFlagship'
import Selector from './Selector'
import Menu from './Menu'
import '@posten-hedwig/core'
import '../sass/navbar.scss'

const Navbar = ({
    logoHref,
    logo,
    logoAriaLabel,
    flagship,
    skipToMainHref,
    skipToMainTitle,
    selectorItems,
    menuSections,
    menuOpenName,
    menuOpenTitle,
    menuCloseName,
    menuCloseTitle,
    menuFeaturedLinks,
    children
}) => {
    const [desktop, setDesktop] = useState()

    const handleWindowSizeChange = () => {
        setDesktop(window.innerWidth >= 940)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        handleWindowSizeChange()
        return () =>
            window.removeEventListener('resize', handleWindowSizeChange)
    }, [])

    const SkipToMain = () => (
        <a href={skipToMainHref} className='hw-navbar__skip-to-content'>
            {skipToMainTitle}
        </a>
    )
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
                                ariaLabel={logoAriaLabel}
                                flagship={flagship}
                            />
                        ) : (
                            <NavbarLogoIcon
                                href={logoHref}
                                logo={logo}
                                ariaLabel={logoAriaLabel}
                            />
                        )}
                        {desktop && selectorItems && (
                            <Selector items={selectorItems} desktop={desktop} />
                        )}
                        <nav className='hw-navbar__menu'>
                            {children}
                            {menuOpenName &&
                                menuOpenTitle &&
                                menuCloseName &&
                                menuCloseTitle && (
                                    <Menu
                                        sections={menuSections}
                                        selectorItems={selectorItems}
                                        featuredLinks={menuFeaturedLinks}
                                        openName={menuOpenName}
                                        openTitle={menuOpenTitle}
                                        closeName={menuCloseName}
                                        closeTitle={menuCloseTitle}
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
            link: PropTypes.object.isRequired,
            selected: PropTypes.bool
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
     * Name showing on the menu button on desktop. When the menu is open menuCloseName will show instead. Required when any items are to be shown in the menu
     */
    menuOpenName: PropTypes.string,

    /**
     * Title for menu button for mouse over when the menu is closed. When the menu is open menuCloseTitle will show instead. Required when any items are to be shown in the menu
     */
    menuOpenTitle: PropTypes.string,

    /**
     * Name showing on the menu button on desktop when the menu is open. When the menu is closed menuOpenName will show instead. Required when any items are to be shown in the menu
     */
    menuCloseName: PropTypes.string,

    /**
     * Title for menu button for mouse over when the menu is open. When the menu is open menuOpenTitle will show instead. Required when any items are to be shown in the menu
     */
    menuCloseTitle: PropTypes.string,

    /**
     * Specify the main sections including items that are in the menu. Each section consists of a title and an array of links. Can be either links with href, React Router Links or Hedwig Links. [More details](#navbar-menusections)
     */
    menuSections: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string.isRequired,
            links: PropTypes.arrayOf(
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
        })
    ),

    /**
     * Specify items that are featured in the menu. This is an array of links with icons. Can be either links with href, React Router Links or Hedwig Links
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

export default Navbar
