import React from 'react'
import PropTypes from 'prop-types'
import logoBring from '../icons/logo-bring.svg'
import logoPosten from '../icons/logo-posten.svg'

const NavbarLogoIcon = ({ href, logo, title, ariaLabel }) => (
    <a
        href={href}
        className='hw-navbar__logo'
        style={{ zIndex: '300' }}
        aria-label={ariaLabel}
    >
        <img
            src={logo === 'posten' ? logoPosten : logoBring}
            className='hw-navbar__logo-standard'
            alt={title}
        />
    </a>
)

NavbarLogoIcon.propTypes = {
    href: PropTypes.string.isRequired,
    logo: PropTypes.oneOf(['bring', 'posten']).isRequired,
    title: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired
}

export default NavbarLogoIcon
