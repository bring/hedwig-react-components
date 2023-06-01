import React from 'react'
import '../sass/grid.scss'
import '@posten-hedwig/core'

interface GridProps {
    align?: 'left' | 'center' | 'right'
    gutter?: 'default' | 'narrow' | 'wide' | 'none'
    valign?: 'top' | 'middle' | 'bottom'

    /**
     * Instances of GridItem
     */
    children: React.ReactNode
}
const Grid: React.FC<GridProps> = ({
    align = 'left',
    gutter = 'default',
    valign = 'top',
    children
}) => {
    const classes = ['hw-grid']
    if (['center', 'right'].includes(align)) classes.push('hw-grid--' + align)

    // This does not make any sense typewise, but kept for now just in case
    if (gutter === 'none') classes.push('hw-grid--' + 'full')

    if (['narrow', 'wide', 'full'].includes(gutter))
        classes.push('hw-grid--' + gutter)
    if (['middle', 'bottom'].includes(valign))
        classes.push('hw-grid--' + valign)

    return <div className={classes.join(' ')}>{children}</div>
}

export default Grid
