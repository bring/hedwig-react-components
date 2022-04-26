import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/pro-regular-svg-icons'
import { NavbarContext } from './NavbarContext'
import '../dist/search-button.scss'

export default function NavbarSearchButton({ text, ariaLabel }) {
    const [state, setState] = useContext(NavbarContext)

    function handleClick() {
        setState((state) => ({ ...state, isSearching: true }))
    }

    return (
        <button
            className='hw-navbar__search-button'
            onClick={handleClick}
            aria-label={ariaLabel || text}
        >
            <span className='hw-navbar__search-text'>{text}</span>
            <FontAwesomeIcon
                icon={faSearch}
                className='hw-navbar__icon'
                size='2x'
            />
        </button>
    )
}

NavbarSearchButton.propTypes = {
    text: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string
}
