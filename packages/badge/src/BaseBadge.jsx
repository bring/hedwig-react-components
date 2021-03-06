import React from 'react'
import { oneOf } from 'prop-types'
import '@posten-hedwig/core'
import '../dist/badge.scss'

export default function BaseBadge({ variant, size, children }) {
    return (
        <span
            className={`hw-badge ${size ? 'hw-badge--' + size : ''} ${
                variant ? 'hw-badge--' + variant : ''
            }`}
        >
            {children}
        </span>
    )
}

BaseBadge.propTypes = {
    variant: oneOf(['dark', 'white', 'warning']),
    size: oneOf(['smaller', 'small', 'large', 'larger'])
}
