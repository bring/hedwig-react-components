import React from 'react'
import PropTypes from 'prop-types'
import '@posten-hedwig/core'
import '../sass/container.scss'

const Container = ({ slim, pt, pb, children }) => {
    let classes = ['hw-container']
    if (slim) {
        classes.push('hw-container--slim')
    }
    if (pt) {
        classes.push('hw-container--pt')
    }
    if (pb) {
        classes.push('hw-container--pb')
    }

    return <div className={classes.join(' ')}>{children}</div>
}

Container.propTypes = {
    /**
     * Makes the container slim
     */
    slim: PropTypes.bool,
    /**
     * Adds responsive padding on top
     */
    pt: PropTypes.bool,
    /**
     * Adds responsive padding on the bottom
     */
    pb: PropTypes.bool
}

Container.defaultProps = {
    slim: false,
    pt: false,
    pb: false
}

export default Container
