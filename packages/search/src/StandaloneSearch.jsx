import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/pro-regular-svg-icons'
import { faTimesCircle } from '@fortawesome/pro-solid-svg-icons'
import { SuggestionsProvider } from './SuggestionsContext'
import SearchSuggestion from './SearchSuggestion'
import './search.css'

export default function StandAloneSearch({
    label,
    placeholder,
    buttonLabel,
    extendedSuggestions,
    onChange,
    onClick,
    children
}) {
    const extedendedClass = extendedSuggestions
        ? ''
        : 'hw-search__suggestions--simple'
    const [hasValue, setHasValue] = useState(false)
    const inputRef = useRef()

    const handleOnChange = (e) => {
        setHasValue(inputRef.current.value !== '')
        if (onChange) {
            onChange(e)
        }
    }

    const reset = () => {
        inputRef.current.value = ''
        setHasValue(false)
    }

    const handleOnclick = () => {
        onClick(inputRef.current.value)
    }

    return (
        <label className='hw-label'>
            {label}
            <div
                className={`hw-search hw-search--standalone ${
                    hasValue ? 'hw-search--hasvalue' : ''
                }`}
                data-hw-search
                data-hw-search-placeholders=''
            >
                <div className='hw-search__inner'>
                    <input
                        data-hw-search-input
                        className='hw-search__input'
                        type='text'
                        aria-label='Search'
                        placeholder={placeholder}
                        onChange={(e) => handleOnChange(e)}
                        ref={inputRef}
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        className='hw-search__icon'
                    />

                    <button
                        className='hw-search__button-inside'
                        data-hw-search-reset
                        onClick={() => reset()}
                    >
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </button>
                </div>
                <SuggestionsProvider advancedSuggestions={extendedSuggestions}>
                    <ul className={`hw-search__suggestions ${extedendedClass}`}>
                        {children}
                    </ul>
                </SuggestionsProvider>

                <button
                    type='submit'
                    onClick={() => handleOnclick()}
                    className='hw-button hw-button--primary hw-search__button'
                >
                    {buttonLabel}
                </button>
            </div>
        </label>
    )
}
StandaloneSearch.defaultProps = {
    extendedSuggestions: false
}

StandaloneSearch.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    buttonLabel: PropTypes.string,
    extendedSuggestions: PropTypes.bool,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.objectOf(SearchSuggestion))
}
