import React from 'react'
import PropTypes from 'prop-types'
import '../dist/linklist.scss'

export default function Linklist({ links, small }) {
    let classes = ['hw-linklist']
    if (small) classes.push('hw-linklist--small')
    return (
        <ul className={classes.join(' ')}>
            {links.map((link) => (
                <li key={link.props.children}>{link}</li>
            ))}
        </ul>
    )
}

Linklist.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            props: PropTypes.shape({
                href: PropTypes.string.isRequired,
                children: PropTypes.node.isRequired
            })
        })
    ),
    small: PropTypes.bool
}

Linklist.defaultProps = {
    small: false
}
