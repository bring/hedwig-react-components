import React from 'react'
import PropTypes from 'prop-types'
import { LogoBring, LogoPosten } from '@posten-hedwig/logo'

const NavbarLogoFlagship = ({ href, logo, ariaLabel, flagship }) => (
    <span className='hw-navbar__logo hw-navbar__logo--service'>
        <a href={href} style={{ zIndex: '300' }} aria-label={ariaLabel}>
            {logo === 'bring' ? (
                <LogoBring className='hw-navbar__logo-standard' />
            ) : (
                <LogoPosten className='hw-navbar__logo-standard' />
            )}
        </a>
        <span className='hw-navbar__logo-flagship'>{flagship}</span>
    </span>
)

NavbarLogoFlagship.propTypes = {
    href: PropTypes.string.isRequired,
    logo: PropTypes.oneOf(['bring', 'posten']).isRequired,
    ariaLabel: PropTypes.string,
    flagship: PropTypes.string.isRequired
}

export default NavbarLogoFlagship
