import React, { createContext, useState } from 'react'

const SuggestionsContext = createContext([{}, () => {}])

const SuggestionsProvider = ({ advancedSuggestions, children }) => {
    const [state, setState] = useState({ advancedSuggestions })

    return (
        <SuggestionsContext.Provider value={[state, setState]}>
            {children}
        </SuggestionsContext.Provider>
    )
}

export { SuggestionsContext, SuggestionsProvider }
