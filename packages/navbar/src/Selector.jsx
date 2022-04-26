import React from 'react'
import PropTypes from 'prop-types'
import SelectorItem from './SelectorItem'

export default function Selector({ items, desktop }) {
    return (
        <div
            className={`hw-navbar__selector${
                !desktop ? ' hw-navbar__selector__mobile' : ''
            }`}
        >
            {items.map(({ title, href, selected, ariaLabel }) => (
                <SelectorItem
                    title={title}
                    href={href}
                    selected={selected}
                    ariaLabel={ariaLabel}
                    key={title}
                />
            ))}
        </div>
    )
}

Selector.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            selected: PropTypes.bool,
            ariaLabel: PropTypes.string
        })
    ),
    desktop: PropTypes.bool
}
