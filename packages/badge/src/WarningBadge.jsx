import React from 'react'
import PropTypes from 'prop-types'
import BaseBadge from './BaseBadge'

const WarningBadge = ({ size, children }) => (
    <BaseBadge variant='warning' size={size}>
        {children}
    </BaseBadge>
)

WarningBadge.propTypes = {
    size: PropTypes.oneOf(['smaller', 'small', 'large', 'larger'])
}

export default WarningBadge
