import React from 'react'
import PropTypes from 'prop-types'
import BaseLink from './BaseLink'

const SimpleLink = ({ href, title, size, children }) => (
    <BaseLink href={href} title={title} type='no-underline' size={size}>
        {children}
    </BaseLink>
)

SimpleLink.defaultProps = {
    size: ''
}

SimpleLink.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string,
    size: PropTypes.oneOf(['small', 'big', ''])
}

export default SimpleLink
