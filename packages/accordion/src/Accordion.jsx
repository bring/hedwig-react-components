import React from 'react'
import PropTypes from 'prop-types'
import { ExpandedProvider } from './ExpandedContext'
import '../sass/accordion.scss'

const Accordion = ({ children, allowMultiple }) => (
    <ul className='hw-accordion'>
        <ExpandedProvider allowMultiple={allowMultiple}>
            {children}
        </ExpandedProvider>
    </ul>
)

Accordion.propTypes = {
    allowMultiple: PropTypes.bool,
    children: PropTypes.arrayOf(
        PropTypes.objectOf((child) => {
            if (child.type.name !== 'AccordionItem') {
                return new Error(
                    'Invalid child `' +
                        child.type.name +
                        '` supplied to `Accordion`. Validation failed'
                )
            }
        })
    )
}

Accordion.defaultProps = {
    allowMultiple: true
}

export default Accordion
