import React from 'react'
import PropTypes from 'prop-types'

export default function ImportantLinks({ links }) {
    return (
        <span className='hw-footer__importantlinks'>
            {links.map((link, i) => (
                <React.Fragment key={i}>{link}</React.Fragment>
            ))}
        </span>
    )
}

ImportantLinks.propTypes = {
    /**
     * Links for other important pages. For example 'Cookies' and 'Privacy and security'
     */
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
        }).isRequired
    ).isRequired
}
