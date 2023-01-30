import React from 'react'
import PropTypes from 'prop-types'
import BaseBadge from './BaseBadge'

const Badge = ({ size, children }) => (
    <BaseBadge size={size}>{children}</BaseBadge>
)

Badge.propTypes = {
    size: PropTypes.oneOf(['smaller', 'small', 'large', 'larger'])
}

export default Badge
