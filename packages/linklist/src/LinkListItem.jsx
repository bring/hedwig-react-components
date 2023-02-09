import React from 'react'
import PropTypes from 'prop-types'

const LinkListItem = ({ children }) => <li>{children}</li>

LinkListItem.propTypes = {
    children: PropTypes.node.isRequired
}

export default LinkListItem
