import React from 'react'
import PropTypes from 'prop-types'
import '../dist/grid.scss'

export default function Grid({ align, gutter, valign, children }) {
    const classes = ['hw-grid']
    if (['center', 'right'].includes(align)) classes.push('hw-grid--' + align)
    if (gutter == 'none') gutter = 'full'
    if (['narrow', 'wide', 'full'].includes(gutter))
        classes.push('hw-grid--' + gutter)
    if (['middle', 'bottom'].includes(valign))
        classes.push('hw-grid--' + valign)

    return <div className={classes.join(' ')}>{children}</div>
}

Grid.defaultProps = {
    align: 'left',
    gutter: 'default',
    valign: 'top'
}

Grid.propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right']),
    gutter: PropTypes.oneOf(['default', 'narrow', 'wide', 'none']),
    valign: PropTypes.oneOf(['top', 'middle', 'bottom'])
}
