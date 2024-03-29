import React, { useContext, useEffect, createRef, useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { NavbarContext } from './NavbarContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/pro-regular-svg-icons'
import { faTimes } from '@fortawesome/pro-light-svg-icons'
import '../sass/menu-button.scss'

const MenuButton = ({ openName, openTitle, closeName, closeTitle }) => {
    const { menuOpen, setMenuOpen, desktop } = useContext(NavbarContext)
    const [labelWidth, setLabelWidth] = useState()

    const buttonRef = createRef()

    const measureLabel = (element, callback) => {
        const container = document.createElement('div')
        container.style.cssText =
            'display:inline-block;position:absolute;visibility:hidden;'
        buttonRef.current.appendChild(container)
        ReactDOM.render(element, container, () => {
            callback(container.offsetWidth)
            ReactDOM.unmountComponentAtNode(container)
            container.parentNode.removeChild(container)
        })
    }

    const CloseLabel = () => (
        <span
            className='hwc-navbar__menu-button-label-close'
            style={{ width: labelWidth }}
        >
            {closeName}
        </span>
    )

    const OpenLabel = () => (
        <span
            className='hwc-navbar__menu-button-label-menu'
            style={{ width: labelWidth }}
        >
            {openName}
        </span>
    )

    useEffect(() => {
        if (desktop && !labelWidth) {
            measureLabel(<OpenLabel />, (openLabelWidth) => {
                measureLabel(<CloseLabel />, (closeLabelWidth) => {
                    setLabelWidth(Math.max(openLabelWidth, closeLabelWidth) + 1)
                })
            })
        }
    }, [desktop, labelWidth])

    const Icon = ({ icon, title }) => (
        <span className='fa-stack hwc-navbar__menu-button-toggle'>
            <FontAwesomeIcon
                icon={icon}
                className='fa-fw fa-stack-2x'
                title={title}
            />
        </span>
    )

    return (
        <button
            className='hwc-navbar__menu-button'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? closeTitle : openTitle}
            ref={buttonRef}
        >
            {!menuOpen && (
                <>
                    {desktop && <OpenLabel />}
                    <Icon icon={faBars} title={openTitle} />
                </>
            )}
            {menuOpen && (
                <>
                    {desktop && <CloseLabel />}
                    <Icon icon={faTimes} title={closeTitle} />
                </>
            )}
        </button>
    )
}

MenuButton.propTypes = {
    openName: PropTypes.string.isRequired,
    openTitle: PropTypes.string.isRequired,
    closeName: PropTypes.string.isRequired,
    closeTitle: PropTypes.string.isRequired
}

export default MenuButton
