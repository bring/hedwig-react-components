import React from 'react'
import PropTypes from 'prop-types'
import logoBring from '../icons/logo-bring.svg'
import logoPosten from '../icons/logo-posten.svg'

export default function NavbarLogoFlagship({
    href,
    logo,
    title,
    ariaLabel,
    flagship
}) {
    return (
        <span className='hw-navbar__logo hw-navbar__logo--service'>
            <a href={href} style={{ zIndex: '300' }} aria-label={ariaLabel}>
                <img
                    src={logo === 'posten' ? logoPosten : logoBring}
                    className='hw-navbar__logo-standard'
                    alt={title}
                />
            </a>
            <span className='hw-navbar__logo-flagship'>{flagship}</span>
        </span>
    )
}

NavbarLogoFlagship.propTypes = {
    href: PropTypes.string.isRequired,
    logo: PropTypes.oneOf(['bring', 'posten']).isRequired,
    title: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string,
    flagship: PropTypes.string.isRequired
}
