import React from 'react'
import PropTypes from 'prop-types'
import { LogoBring, LogoPosten } from '@posten-hedwig/logo'

const NavbarLogoIcon = ({ href, logo, ariaLabel }) => (
    <a
        href={href}
        className='hw-navbar__logo'
        style={{ zIndex: '300' }}
        aria-label={ariaLabel}
    >
        {logo === 'bring' ? (
            <LogoBring className='hw-navbar__logo-standard' />
        ) : (
            <LogoPosten className='hw-navbar__logo-standard' />
        )}
    </a>
)

NavbarLogoIcon.propTypes = {
    href: PropTypes.string.isRequired,
    logo: PropTypes.oneOf(['bring', 'posten']).isRequired,
    ariaLabel: PropTypes.string.isRequired
}

export default NavbarLogoIcon
