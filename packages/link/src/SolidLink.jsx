import React from 'react'
import PropTypes from 'prop-types'
import BaseLink from './BaseLink'

const SolidLink = ({ href, title, size, children }) => (
    <BaseLink href={href} title={title} type='solid' size={size}>
        {children}
    </BaseLink>
)

SolidLink.defaultProps = {
    size: ''
}

SolidLink.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string,
    size: PropTypes.oneOf(['small', 'big', ''])
}

export default SolidLink
