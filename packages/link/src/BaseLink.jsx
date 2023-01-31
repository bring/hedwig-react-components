import React from 'react'
import PropTypes from 'prop-types'
import '@posten-hedwig/core'
import '../sass/link.scss'

const BaseLink = ({ href, title, size, type, children }) => {
    let modifier = type != '' ? ' hw-link--' + type : ''
    if (size != '') {
        modifier += ' hw-link--' + size
    }

    return (
        <a href={href} title={title} className={'hw-link' + modifier}>
            {children}
        </a>
    )
}

BaseLink.defaultProps = {
    type: '',
    size: ''
}

BaseLink.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string,
    size: PropTypes.oneOf(['small', 'big', '']),
    type: PropTypes.oneOf(['solid', 'inverted', 'no-underline', ''])
}

export default BaseLink
