import React from 'react'
import PropTypes from 'prop-types'
import BaseLink from './BaseLink'

export default function SolidLink({ href, title, size, children }) {
    return (
        <BaseLink href={href} title={title} type='solid' size={size}>
            {children}
        </BaseLink>
    )
}

SolidLink.defaultProps = {
    size: ''
}

SolidLink.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string,
    size: PropTypes.oneOf(['small', 'big', ''])
}
