import React, { useContext } from 'react'
import { SuggestionsContext } from './SuggestionsContext'
import PropTypes from 'prop-types'

export default function SearchSuggestion({ title, subTitle, href }) {
    const [suggestionsState] = useContext(SuggestionsContext)

    return (
        <li className='hw-search__suggestion' data-hw-search-suggestion>
            <a className='hw-search__suggestion-link' tabIndex='-1' href={href}>
                <p className='hw-search__suggestion-title'>{title}</p>
                {suggestionsState.advancedSuggestions && (
                    <p className='hw-search__suggestion-extra'>{subTitle}</p>
                )}
            </a>
        </li>
    )
}

SearchSuggestion.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}
