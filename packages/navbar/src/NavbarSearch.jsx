import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { NavbarContext } from './NavbarContext'
import NavbarSearchButton from './NavbarSearchButton'
import NavbarSearchField from './NavbarSearchField'

const NavbarSearch = ({ text, ariaLabel, placeholder, flagship }) => {
    const { isSearching } = useContext(NavbarContext)

    return (
        <>
            {isSearching && <NavbarSearchField placeholder={placeholder} />}
            {!isSearching && (
                <NavbarSearchButton
                    text={text}
                    ariaLabel={ariaLabel}
                    flagship={flagship}
                />
            )}
        </>
    )
}

NavbarSearch.propTypes = {
    text: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string,
    placeholder: PropTypes.string.isRequired
}

export default NavbarSearch
