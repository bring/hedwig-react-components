import React from 'react'
import PropTypes from 'prop-types'
import BaseLink from './BaseLink'

const InvertedLink = ({ href, title, size, children }) => (
    <BaseLink href={href} title={title} type='inverted' size={size}>
        {children}
    </BaseLink>
)

InvertedLink.defaultProps = {
    size: ''
}

InvertedLink.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string,
    size: PropTypes.oneOf(['small', 'big', ''])
}

export default InvertedLink
