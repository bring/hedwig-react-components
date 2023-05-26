import React from 'react'

type GridSizes =
    | 'one-whole'
    | 'one-half'
    | 'one-third'
    | 'two-thirds'
    | 'one-quarter'
    | 'three-quarters'
    | 'one-fifth'
    | 'two-fifths'
    | 'three-fifths'
    | 'four-fifths'
    | 'one-sixth'
    | 'five-sixths'
    | 'one-eighth'
    | 'three-eights'
    | 'five-eights'
    | 'seven-eights'
    | 'one-tenth'
    | 'three-tenths'
    | 'seven-tenths'
    | 'nine-tenths'
    | 'one-twelfth'
    | 'five-twelfths'
    | 'seven-twelfths'
    | 'eleven-twelfths'

interface GridItemProps {
    size: GridSizes
    smallSize?: GridSizes
    mediumSize?: GridSizes
    largeSize?: GridSizes
    xlargeSize?: GridSizes
    children: React.ReactNode
}
const GridItem: React.FC<GridItemProps> = ({
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

export default GridItem
