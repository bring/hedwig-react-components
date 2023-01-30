import React from 'react'
import PropTypes from 'prop-types'
import BaseBadge from './BaseBadge'

const WhiteBadge = ({ size, children }) => (
    <BaseBadge variant='white' size={size}>
        {children}
    </BaseBadge>
)

WhiteBadge.propTypes = {
    size: PropTypes.oneOf(['smaller', 'small', 'large', 'larger'])
}

export default WhiteBadge
