import React from 'react'
import PropTypes from 'prop-types'
import BaseLink from './BaseLink'

const Link = ({ href, title, size, children }) => (
    <BaseLink href={href} size={size} title={title}>
        {children}
    </BaseLink>
)

Link.defaultProps = {
    size: ''
}

Link.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string,
    size: PropTypes.oneOf(['small', 'big', ''])
}

export default Link
