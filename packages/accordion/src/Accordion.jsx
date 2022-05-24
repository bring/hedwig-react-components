import React from 'react'
import PropTypes from 'prop-types'
import { ExpandedProvider } from './ExpandedContext'
import '../dist/accordion.scss'

export default function Accordion({ children, allowMultiple }) {
    return (
        <ul className='hw-accordion'>
            <ExpandedProvider allowMultiple={allowMultiple}>
                {children}
            </ExpandedProvider>
        </ul>
    )
}

Accordion.propTypes = {
    allowMultiple: PropTypes.bool,
    menu: PropTypes.bool,
    children: PropTypes.arrayOf(
        PropTypes.objectOf((child) => {
            if (child.type.displayName !== 'AccordionItem') {
                return new Error(
                    'Invalid child `' +
                        child.type.displayName +
                        '` supplied to `Accordion`. Validation failed'
                )
            }
        })
    )
}

Accordion.defaultProps = {
    allowMultiple: true
}
