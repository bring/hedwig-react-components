import React from 'react'
import PropTypes from 'prop-types'
import LogoBring from '../logos/logo-bring.svg'
import LogoPosten from '../logos/logo-posten.svg'
import '../sass/logo.scss'
import '@posten-hedwig/core'

const Logo = ({ logo, title }) =>
    logo === 'posten' ? <LogoPosten alt={title} /> : <LogoBring alt={title} />

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

export default Logo
