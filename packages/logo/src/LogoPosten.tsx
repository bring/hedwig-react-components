import React from 'react'
import LogoPostenSvg from '../logos/logo-posten.svg'
import '../sass/logo.scss'
import '@posten-hedwig/core'

const LogoPosten: React.FC = () => (
    <LogoPostenSvg className='hwc-logo hwc-logo__posten' />
)

export default LogoPosten
