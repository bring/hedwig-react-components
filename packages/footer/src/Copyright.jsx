import React from 'react'
import PropTypes from 'prop-types'

const Copyright = ({ text }) => <span className='hwc-copyright'>© {text}</span>

Copyright.propTypes = {
    /**
     * Text for copyright
     */
    text: PropTypes.string.isRequired
}

export default Copyright
