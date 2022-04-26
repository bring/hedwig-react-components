import React from 'react'
import PropTypes from 'prop-types'
import '../dist/icon.scss'

export default function Icon({ icon, title, size }) {
    let classes = ['hw-icon']
    if (size) {
        classes.push('hw-icon--size-' + size)
    }
    return <img className={classes.join(' ')} src={icon} alt={title}></img>
}

Icon.propTypes = {
    /**
     * Specifies which icon to be rendered.
     * Import the icons you need to use
     */
    icon: PropTypes.string.isRequired,
    /**
     * Specify the alt text
     */
    title: PropTypes.string.isRequired,
    /**
     * Specify the size of the icon
     * small: 18px x 18px
     * medium: 24px x 24px
     * default: not set
     */
    size: PropTypes.oneOf(['small', 'medium', null])
}

Icon.defaultProps = {
    size: null
}
