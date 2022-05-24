import React from 'react'
import PropTypes from 'prop-types'
import logoBring from '../logos/logo-bring.svg'
import logoPosten from '../logos/logo-posten.svg'

export default function Logo({ logo, href, title }) {
    return (
        <a href={href} className='hw-footer__logo-link'>
            <img
                src={logo === 'posten' ? logoPosten : logoBring}
                className='hw-footer__logo-link-standard'
                alt={title}
            />
        </a>
    )
}

Logo.propTypes = {
    /**
     * Which logo to show in the footer
     */
    logo: PropTypes.oneOf(['bring', 'posten']).isRequired,

    /**
     * Specify the href for clicking on the logo
     */
    href: PropTypes.string.isRequired,

    /**
     * Title for logo
     */
    title: PropTypes.string.isRequired
}

Logo.defaultProps = {
    logo: 'posten'
}
