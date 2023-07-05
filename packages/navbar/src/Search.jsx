import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faXmark } from '@fortawesome/pro-regular-svg-icons'
import { NavbarContext } from './NavbarContext'
import '../sass/search.scss'

const Search = ({ id, placeholder, exitButtonAriaLabel }) => {
    const { setIsSearching } = useContext(NavbarContext)

    return (
        <div className='hwc-navbar__search'>
            <input
                id={id}
                placeholder={placeholder}
                className='hwc-navbar__search__field'
            />
            <button className='hwc-navbar__search__submit'>
                <FontAwesomeIcon
                    icon={faSearch}
                    className='hwc-navbar__search__icon'
                />
            </button>
            <button
                className='hwc-navbar__search__close'
                onClick={() => setIsSearching(false)}
            >
                <FontAwesomeIcon
                    aria-label={exitButtonAriaLabel}
                    icon={faXmark}
                    className='hwc-navbar__search__close__icon'
                />
            </button>
        </div>
    )
}

Search.propTypes = {
    placeholder: PropTypes.string.isRequired
}

export default Search
