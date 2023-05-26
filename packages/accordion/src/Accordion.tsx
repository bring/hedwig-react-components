import React from 'react'
import { ExpandedProvider } from './ExpandedContext'
import '../sass/accordion.scss'
import '@posten-hedwig/core'

interface AccordionProps {
    allowMultiple?: boolean

    /**
     * Instances of AccordionItem
     */
    children: React.ReactNode
}
const Accordion: React.FC<AccordionProps> = ({
    children,
    allowMultiple = true
}) => (
    <ul className='hw-accordion'>
        <ExpandedProvider allowMultiple={allowMultiple}>
            {children}
        </ExpandedProvider>
    </ul>
)

export default Accordion
