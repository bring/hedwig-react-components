import React from 'react'
import PropTypes from 'prop-types'

export default function SelectorItem({ link, selected }) {
    let classes = ['hw-navbar__selector-item']
    if (selected) {
        classes.push(classes[0] + '__selected')
    }
    return <span className={classes.join(' ')}>{link}</span>
}

SelectorItem.propTypes = {
    link: PropTypes.object.isRequired,
    selected: PropTypes.bool
}

SelectorItem.defaultProps = {
    selected: false
}
