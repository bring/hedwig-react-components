import React from 'react'
import PropTypes from 'prop-types'
import logoBring from '../logos/logo-bring.svg'
import logoPosten from '../logos/logo-posten.svg'
import '../sass/logo.scss'
import '@posten-hedwig/core'

const Logo = ({ logo, title }) => (
    <img
        className='hw-logo'
        src={logo === 'posten' ? logoPosten : logoBring}
        alt={title}
    />
)

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
