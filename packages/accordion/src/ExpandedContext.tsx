import React, { createContext, useState } from 'react'

interface ExtandedContextState {
    allowMultiple?: boolean
    open?: string
    hasSetInitialExpanded: boolean
}
type SetExpandedState = React.Dispatch<React.SetStateAction<ExtandedContextState>>

const ExpandedContext = createContext<[ExtandedContextState, SetExpandedState]>(
    [{ hasSetInitialExpanded: false }, () => {}]
)

interface ExpandedProviderProps {
    allowMultiple?: boolean
    children: React.ReactNode
}
const ExpandedProvider: React.FC<ExpandedProviderProps> = ({
    allowMultiple,
    children
}) => {
    const [state, setState] = useState<ExtandedContextState>({
        allowMultiple,
        hasSetInitialExpanded: false
    })

    return (
        <ExpandedContext.Provider value={[state, setState]}>
            {children}
        </ExpandedContext.Provider>
    )
}

export { ExpandedContext, ExpandedProvider }
