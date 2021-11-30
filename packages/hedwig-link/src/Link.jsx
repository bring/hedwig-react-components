import React from 'react'
import PropTypes from 'prop-types'
import BaseLink from './BaseLink'

export default function Link({ href, title, size, children }) {
    return (
        <BaseLink href={href} size={size}>
            {children}
        </BaseLink>
    )
}

Link.defaultProps = {
    size: ''
}

Link.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string,
    size: PropTypes.oneOf(['small', 'big', ''])
}
