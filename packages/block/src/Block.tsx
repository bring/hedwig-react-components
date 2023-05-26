import React from 'react'
import '../sass/block.scss'
import '@posten-hedwig/core'

type MarginSize =
    | 'on'
    | 'responsive'
    | 'mobile'
    | 'small-1'
    | 'small-2'
    | 'small-3'
    | 'small-4'
    | 'medium-1'
    | 'medium-2'
    | 'medium-3'
    | 'medium-4'
    | 'large-1'
    | 'large-2'
    | 'large-3'
    | 'large-4'
    | 'large-5'
    | 'small-1-responsive'
    | 'small-2-responsive'
    | 'small-3-responsive'
    | 'small-4-responsive'
    | 'medium-1-responsive'
    | 'medium-2-responsive'
    | 'medium-3-responsive'
    | 'medium-4-responsive'
    | 'large-1-responsive'
    | 'large-2-responsive'
    | 'large-3-responsive'
    | 'large-4-responsive'
    | 'large-5-responsive'

interface BlockProps {
    px?: 'on' | 'responsive' | 'mobile'
    py?: 'on' | 'responsive'
    mt?: 'on' | MarginSize
    mb?: 'on' | MarginSize
    elementType?: 'article' | 'div' | 'p'
    classList?: string
    children?: React.ReactNode
}
const Block: React.FC<BlockProps> = ({
    px,
    py,
    mt,
    mb,
    elementType = 'div',
    classList,
    children
}) => {
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

export default Block
