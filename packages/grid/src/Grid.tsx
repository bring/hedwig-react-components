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
    const classes = ['hwc-grid']
    if (['center', 'right'].includes(align)) classes.push('hwc-grid--' + align)

    // This does not make any sense typewise, but kept for now just in case
    if (gutter === 'none') classes.push('hwc-grid--' + 'full')

    if (['narrow', 'wide', 'full'].includes(gutter))
        classes.push('hwc-grid--' + gutter)
    if (['middle', 'bottom'].includes(valign))
        classes.push('hwc-grid--' + valign)

    return <div className={classes.join(' ')}>{children}</div>
}

export default Grid
