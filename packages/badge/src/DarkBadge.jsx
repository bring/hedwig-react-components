import React from 'react'
import PropTypes from 'prop-types'
import BaseBadge from './BaseBadge'

export default function DarkBadge({ size, children }) {
    return (
        <BaseBadge variant='dark' size={size}>
            {children}
        </BaseBadge>
    )
}

DarkBadge.propTypes = {
    size: PropTypes.oneOf(['smaller', 'small', 'large', 'larger'])
}
