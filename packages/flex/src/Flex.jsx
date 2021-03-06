import React from 'react'
import PropTypes from 'prop-types'
import '../dist/flex.scss'

export default function Flex({
    gutterMobile,
    gutterDesktop,
    wrap,
    variableHeight,
    children,
    elementType
}) {
    let classes = ['hw-flex']
    if (gutterMobile) classes.push(`hw-flex--gutter-${gutterMobile}-mobile`)
    if (gutterDesktop) classes.push(`hw-flex--gutter-${gutterDesktop}-desktop`)
    if (wrap) classes.push(`hw-flex--${wrap}`)
    if (variableHeight) classes.push('hw-flex--variable-height')

    return React.createElement(
        elementType,
        {
            className: classes.join(' ')
        },
        children
    )
}

Flex.propTypes = {
    gutterMobile: PropTypes.oneOf(['large', 'larger', 'largest']),
    gutterDesktop: PropTypes.oneOf(['medium', 'large', 'larger', 'largest']),
    wrap: PropTypes.oneOf(['twos', 'thirds', 'fourths']),
    variableHeight: PropTypes.bool,
    elementType: PropTypes.oneOf(['div', 'ul'])
}

Flex.defaultProps = {
    elementType: 'div'
}
