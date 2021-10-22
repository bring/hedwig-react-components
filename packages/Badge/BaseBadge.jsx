import React from "react"
import PropTypes from 'prop-types'
import Core from '../core/Core'

export default function BaseBadge({variant, size, children}) {
    return (
        <span className={`hw-badge ${size ? 'hw-badge--' + size : ''} ${variant ? 'hw-badge--' + variant : ''}`}>
            {children}
        </span>
    )
}

BaseBadge.propTypes = {
    variant : PropTypes.oneOf(['dark', 'white','warning']),
    size : PropTypes.oneOf(['smaller', 'small', 'large', 'larger'])
}
