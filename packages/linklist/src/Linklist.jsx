import React from 'react'
import PropTypes from 'prop-types'
import '../sass/linklist.scss'

const Linklist = ({ links, small }) => {
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
            props: PropTypes.oneOfType([
                PropTypes.shape({
                    href: PropTypes.string.isRequired,
                    children: PropTypes.node.isRequired
                }),
                PropTypes.shape({
                    to: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.object,
                        PropTypes.func
                    ]),
                    children: PropTypes.node.isRequired
                })
            ]).isRequired
        })
    ),
    small: PropTypes.bool
}

Linklist.defaultProps = {
    small: false
}

export default Linklist
