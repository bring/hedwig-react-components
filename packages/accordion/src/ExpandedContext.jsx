import React, { createContext, useState } from 'react'

const ExpandedContext = createContext([{}, () => {}])

const ExpandedProvider = ({ allowMultiple, children }) => {
    const [state, setState] = useState({ allowMultiple })

    return (
        <ExpandedContext.Provider value={[state, setState]}>
            {children}
        </ExpandedContext.Provider>
    )
}

export { ExpandedContext, ExpandedProvider }
