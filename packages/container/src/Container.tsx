import React from 'react'
import '@posten-hedwig/core'
import '../sass/container.scss'

interface ContainerProps {
    as?: keyof JSX.IntrinsicElements

    /**
     * Makes the container slim
     */
    slim?: boolean
    /**
     * Adds responsive padding on top
     */
    pt?: boolean
    /**
     * Adds responsive padding on the bottom
     */
    pb?: boolean

    children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({
    as: ContainerComponent = 'div',
    slim,
    pt,
    pb,
    children
}) => {
    const classes = ['hwc-container']
    if (slim) {
        classes.push('hwc-container--slim')
    }
    if (pt) {
        classes.push('hwc-container--pt')
    }
    if (pb) {
        classes.push('hwc-container--pb')
    }

    return (
        <ContainerComponent className={classes.join(' ')}>
            {children}
        </ContainerComponent>
    )
}

export default Container
