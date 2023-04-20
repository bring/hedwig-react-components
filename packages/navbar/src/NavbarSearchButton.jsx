import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/pro-regular-svg-icons'
import { NavbarContext } from './NavbarContext'
import '../sass/search-button.scss'

const NavbarSearchButton = ({ text, ariaLabel, flagship }) => {
    const { setIsSearching } = useContext(NavbarContext)

    const handleClick = () => {
        setIsSearching(true)
    }

    const classname =
        'hwc-navbar__search-button' +
        (flagship ? ' hwc-navbar__search-button__flagship' : '')
    return (
        <button
            className={classname}
            onClick={handleClick}
            aria-label={ariaLabel || text}
        >
            <span className='hwc-navbar__search-text'>{text}</span>
            <FontAwesomeIcon
                icon={faSearch}
                className='hwc-navbar__icon'
                size='2x'
            />
        </button>
    )
}

NavbarSearchButton.propTypes = {
    text: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string
}

export default NavbarSearchButton
