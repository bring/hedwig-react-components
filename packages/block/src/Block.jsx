import React from 'react'
import PropTypes from 'prop-types'
import '../sass/block.scss'

const Block = ({ px, py, mt, mb, elementType, classList, children }) => {
    const classes = ['hw-block']
    if (px) classes.push(px === 'on' ? 'hw-block--px' : 'hw-block--px-' + px)
    if (py) classes.push(py === 'on' ? 'hw-block--py' : 'hw-block--py-' + py)
    if (mt) classes.push(mt === 'on' ? 'hw-block--mt' : 'hw-block--mt-' + mt)
    if (mb) classes.push(mb === 'on' ? 'hw-block--mb' : 'hw-block--mb-' + mb)
    if (classList) classes.push(classList)

    return React.createElement(
        elementType,
        {
            className: classes.join(' ')
        },
        children
    )
}

const marginSizes = [
    'small-1',
    'small-2',
    'small-3',
    'small-4',
    'medium-1',
    'medium-2',
    'medium-3',
    'medium-4',
    'large-1',
    'large-2',
    'large-3',
    'large-4',
    'large-5',
    'small-1-responsive',
    'small-2-responsive',
    'small-3-responsive',
    'small-4-responsive',
    'medium-1-responsive',
    'medium-2-responsive',
    'medium-3-responsive',
    'medium-4-responsive',
    'large-1-responsive',
    'large-2-responsive',
    'large-3-responsive',
    'large-4-responsive',
    'large-5-responsive'
]

Block.defaultProps = {
    elementType: 'div'
}

Block.propTypes = {
    px: PropTypes.oneOf(['on', 'responsive', 'mobile']),
    py: PropTypes.oneOf(['on', 'responsive']),
    mt: PropTypes.oneOf(['on', ...marginSizes]),
    mb: PropTypes.oneOf(['on', ...marginSizes]),
    elementType: PropTypes.oneOf(['article', 'div', 'p']),
    classList: PropTypes.string
}

export default Block
