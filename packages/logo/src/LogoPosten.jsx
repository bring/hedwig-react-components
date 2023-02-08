import React from 'react'
import PropTypes from 'prop-types'
import LogoPostenSvg from '../logos/logo-posten.svg'
import '../sass/logo.scss'
import '@posten-hedwig/core'

const LogoPosten = ({ title }) => (
    <LogoPostenSvg alt={title} className='hw-logo' />
)

LogoPosten.propTypes = {
    /**
     * Title for logo
     */
    title: PropTypes.string.isRequired
}

export default LogoPosten
