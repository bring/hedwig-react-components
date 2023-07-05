import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { NavbarContext } from './NavbarContext'
import InitiateSearchButton from './InitiateSearchButton'
import Search from './Search'

const SearchToggle = ({
    text,
    ariaLabel,
    placeholder,
    flagship,
    exitButtonAriaLabel
}) => {
    const { isSearching } = useContext(NavbarContext)

    return (
        <>
            {isSearching ? (
                <Search
                    placeholder={placeholder}
                    exitButtonAriaLabel={exitButtonAriaLabel}
                />
            ) : (
                <InitiateSearchButton
                    text={text}
                    ariaLabel={ariaLabel}
                    flagship={flagship}
                />
            )}
        </>
    )
}

SearchToggle.propTypes = {
    text: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string,
    placeholder: PropTypes.string.isRequired
}

export default SearchToggle
