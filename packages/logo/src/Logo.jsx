import React from 'react'
import PropTypes from 'prop-types'
import logoBring from '../logos/logo-bring.svg'
import logoPosten from '../logos/logo-posten.svg'
import '../dist/logo.scss'

export default function Logo({ logo, title }) {
    return (
        <img
            className='hw-logo'
            src={logo === 'posten' ? logoPosten : logoBring}
            alt={title}
        />
    )
}

Logo.propTypes = {
    /**
     * Which logo to show in the footer
     */
    logo: PropTypes.oneOf(['bring', 'posten']).isRequired,

    /**
     * Title for logo
     */
    title: PropTypes.string.isRequired
}

Logo.defaultProps = {
    logo: 'posten'
}
