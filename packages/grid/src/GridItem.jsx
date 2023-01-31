import React from 'react'
import PropTypes from 'prop-types'

const GridItem = ({
    size,
    smallSize,
    mediumSize,
    largeSize,
    xlargeSize,
    children
}) => {
    const classes = ['hw-grid__item']

    if (size) {
        classes.push('hw-' + size)
    }

    if (smallSize) {
        classes.push('hw-small--' + smallSize)
    }

    if (mediumSize) {
        classes.push('hw-medium--' + mediumSize)
    }

    if (largeSize) {
        classes.push('hw-large--' + largeSize)
    }

    if (xlargeSize) {
        classes.push('hw-xlarge--' + xlargeSize)
    }

    return <div className={classes.join(' ')}>{children}</div>
}

const sizes = [
    'one-whole',
    'one-half',
    'one-third',
    'two-thirds',
    'one-quarter',
    'three-quarters',
    'one-fifth',
    'two-fifths',
    'three-fifths',
    'four-fifths',
    'one-sixth',
    'five-sixths',
    'one-eighth',
    'three-eights',
    'five-eights',
    'seven-eights',
    'one-tenth',
    'three-tenths',
    'seven-tenths',
    'nine-tenths',
    'one-twelfth',
    'five-twelfths',
    'seven-twelfths',
    'eleven-twelfths'
]

GridItem.propTypes = {
    size: PropTypes.oneOf(sizes),
    smallSize: PropTypes.oneOf(sizes),
    mediumSize: PropTypes.oneOf(sizes),
    largeSize: PropTypes.oneOf(sizes),
    xlargeSize: PropTypes.oneOf(sizes)
}

export default GridItem
