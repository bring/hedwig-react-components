import React from 'react'
import { LogoBring, LogoPosten } from '@posten-hedwig/logo'

const LogoLink = ({ href, title, logo }) => (
    <a href={href} aria-label={title} className='hw-footer__logo-link'>
        {logo === 'bring' ? <LogoBring /> : <LogoPosten />}
    </a>
)

export default LogoLink
