import React from 'react'
import PropTypes from 'prop-types'
import BaseBadge from './BaseBadge'

export default function WarningBadge({ size, children }) {
    return (
        <BaseBadge variant='warning' size={size}>
            {children}
        </BaseBadge>
    )
}

WarningBadge.propTypes = {
    size: PropTypes.oneOf(['smaller', 'small', 'large', 'larger'])
}
