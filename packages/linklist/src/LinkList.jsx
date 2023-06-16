import React from 'react'
import PropTypes from 'prop-types'
import '../sass/linklist.scss'
import '@posten-hedwig/core'

const LinkList = ({ small, children }) => {
    let classes = ['hwc-linklist']
    if (small) classes.push('hwc-linklist--small')
    return <ul className={classes.join(' ')}>{children}</ul>
}

LinkList.propTypes = {
    small: PropTypes.bool
}

LinkList.defaultProps = {
    small: false
}

export default LinkList
