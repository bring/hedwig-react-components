import React from 'react'
import PropTypes from 'prop-types'
import BaseBadge from './BaseBadge'

export default function Badge({ size, children }) {
    return <BaseBadge size={size}>{children}</BaseBadge>
}

Badge.propTypes = {
    size: PropTypes.oneOf(['smaller', 'small', 'large', 'larger'])
}
