import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faSearch } from '@fortawesome/pro-regular-svg-icons'

export default function Search({
    ariaLabel,
    placeholder,
    autoFocus,
    onChange
}) {
    return (
        <div className='hw-search'>
            <div className='hw-search__inner'>
                <form method='get' action='' role='search'>
                    <input
                        className='hw-search__input'
                        onChange={onChange}
                        aria-label={ariaLabel}
                        placeholder={placeholder}
                        autoFocus={autoFocus}
                    />
                </form>
                <FontAwesomeIcon icon={faSearch} className='hw-search__icon' />
                <button className='hw-search__button-inside'>
                    <FontAwesomeIcon
                        icon={faTimesCircle}
                        className='hw-search__icon'
                    />
                </button>
            </div>
        </div>
    )
}

Search.propTypes = {
    ariaLabel: PropTypes.string,
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func
}

Search.defaultProps = {
    autoFocus: true,
    onChange: () => {}
}
