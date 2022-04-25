import React from 'react'
import PropTypes from 'prop-types'
import '../dist/linklist.scss'

export default function Linklist({ links, small }) {
    let classes = ['hw-linklist']

    return (
        <ul className={classes}>
            {links.map((link) => {
                return (
                    <li>
                        {{
                            ...link,
                            key: link.props.href + link.props.children
                        }}
                    </li>
                )
            })}
        </ul>
    )
}

Linklist.propTypes = {
    links: PropTypes.arrayOf(function (
        propValue,
        key,
        componentName,
        location,
        propFullName
    ) {
        console.log(propValue)
        console.log(key)
        console.log(componentName)
        console.log(location)
        console.log(propFullName)
        console.log(propValue[key])

        /*
        if (!/matchme/.test(propValue[key])) {
          return new Error(
            'Invalid prop `' + propFullName + '` supplied to' +
            ' `' + componentName + '`. Validation failed.'
          );
        }*/
        return true
    }),
    small: PropTypes.bool
}

Linklist.defaultProps = {
    small: false
}
