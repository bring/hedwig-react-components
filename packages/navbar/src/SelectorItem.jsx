import React from 'react'
import PropTypes from 'prop-types'

export default function SelectorItem({ href, title, selected, ariaLabel }) {
    return (
        <a
            href={href}
            className={`hw-navbar__selector-item${
                selected ? ' hw-navbar__selector-item__selected' : ''
            }`}
            aria-label={ariaLabel || title}
        >
            {title}
        </a>
    )
}

SelectorItem.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    ariaLabel: PropTypes.string
}

SelectorItem.defaultProps = {
    selected: false
}
