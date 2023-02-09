import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@posten-hedwig/link/src'

const LinkListItem = ({ children }) => {
    return (
        <>
            <li>{children}</li>
        </>
    )
}

LinkListItem.propTypes = {
    children: PropTypes.node.isRequired
}

export default LinkListItem
