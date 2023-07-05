import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/pro-regular-svg-icons'
import { NavbarContext } from './NavbarContext'
import '../sass/search-field.scss'

const NavbarSearchField = ({ id, placeholder }) => {
    const { setIsSearching } = useContext(NavbarContext)

    return (
        <>
            <input
                id={id}
                placeholder={placeholder}
                className='hwc-navbar__search-field'
            />
            <FontAwesomeIcon
                icon={faSearch}
                className='hwc-navbar__search-icon'
            />
        </>
    )
}

NavbarSearchField.propTypes = {
    placeholder: PropTypes.string.isRequired
}

export default NavbarSearchField
