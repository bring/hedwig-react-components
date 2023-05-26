import React from 'react'
import '@posten-hedwig/core'
import '../sass/container.scss'

interface ContainerProps {
    as: keyof JSX.IntrinsicElements

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
    as: ContainerComponent,
    slim,
    pt,
    pb,
    children
}) => {
    const classes = ['hw-container']
    if (slim) {
        classes.push('hw-container--slim')
    }
    if (pt) {
        classes.push('hw-container--pt')
    }
    if (pb) {
        classes.push('hw-container--pb')
    }

    return (
        <ContainerComponent className={classes.join(' ')}>
            {children}
        </ContainerComponent>
    )
}

export default Container
