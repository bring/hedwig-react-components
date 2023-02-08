import React from 'react'
import PropTypes from 'prop-types'
import LogoBringSvg from '../logos/logo-bring.svg'
import '../sass/logo.scss'
import '@posten-hedwig/core'

const LogoBring = ({ title }) => (
    <LogoBringSvg alt={title} className='hw-logo' />
)

LogoBring.propTypes = {
    /**
     * Title for logo
     */
    title: PropTypes.string.isRequired
}

export default LogoBring
