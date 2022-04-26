import React, { useContext, useEffect, createRef, useState } from 'react'
import PropTypes from 'prop-types'
import { NavbarContext } from './NavbarContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/pro-regular-svg-icons'
import { faTimes } from '@fortawesome/pro-light-svg-icons'
import '../dist/menu-button.scss'

export default function MenuButton({
    menuName,
    menuTitle,
    closeName,
    closeTitle
}) {
    const { menuOpen, setMenuOpen, desktop } = useContext(NavbarContext)
    const [labelWidth, setLabelWidth] = useState()

    function handleClick() {
        setMenuOpen(!menuOpen)
    }

    const openLabel = createRef()
    const closeLabel = createRef()

    useEffect(() => {
        if (desktop) {
            setLabelWidth(openLabel.current.offsetWidth)
        }
    }, [desktop])

    function Icon({ icon, title }) {
        return (
            <span className='fa-stack hw-navbar__menu-button-toggle'>
                <FontAwesomeIcon
                    icon={icon}
                    className='fa-fw fa-stack-2x'
                    title={title}
                />
            </span>
        )
    }

    return (
        <button
            className='hw-navbar__menu-button'
            onClick={handleClick}
            aria-label={menuOpen ? closeTitle : menuTitle}
        >
            {!menuOpen && (
                <>
                    {desktop && (
                        <span
                            className='hw-navbar__menu-button-label-menu'
                            ref={openLabel}
                            style={{ width: labelWidth }}
                        >
                            {menuName}
                        </span>
                    )}
                    <Icon icon={faBars} title={menuTitle} />
                </>
            )}
            {menuOpen && (
                <>
                    {desktop && (
                        <span
                            className='hw-navbar__menu-button-label-close'
                            style={{
                                display: 'inline',
                                width: labelWidth
                            }}
                            ref={closeLabel}
                        >
                            {closeName}
                        </span>
                    )}
                    <Icon icon={faTimes} title={closeTitle} />
                </>
            )}
        </button>
    )
}

MenuButton.propTypes = {
    menuName: PropTypes.string.isRequired,
    menuTitle: PropTypes.string.isRequired,
    closeName: PropTypes.string.isRequired,
    closeTitle: PropTypes.string.isRequired
}
