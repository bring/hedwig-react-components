import React from 'react'
import PropTypes from 'prop-types'

export default function Copyright({ text }) {
    return <span className='hw-copyright'>© {text}</span>
}

Copyright.propTypes = {
    /**
     * Text for copyright
     */
    text: PropTypes.string.isRequired
}
