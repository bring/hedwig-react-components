import React from 'react'
import PropTypes from 'prop-types'
import BaseBadge from './BaseBadge'

const DarkBadge = ({ size, children }) => (
    <BaseBadge variant='dark' size={size}>
        {children}
    </BaseBadge>
)

DarkBadge.propTypes = {
    size: PropTypes.oneOf(['smaller', 'small', 'large', 'larger'])
}

export default DarkBadge
