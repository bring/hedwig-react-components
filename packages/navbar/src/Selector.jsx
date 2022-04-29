import React from 'react'
import PropTypes from 'prop-types'
import SelectorItem from './SelectorItem'
import '../dist/selector.scss'

export default function Selector({ items, desktop }) {
    return (
        <div
            className={`hw-navbar__selector${
                !desktop ? ' hw-navbar__selector__mobile' : ''
            }`}
        >
            {items.map(({ link, selected }) => (
                <SelectorItem
                    link={link}
                    selected={selected}
                    key={link.props.children}
                    className='hmmm'
                />
            ))}
        </div>
    )
}

Selector.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            link: PropTypes.object.isRequired,
            selected: PropTypes.bool
        })
    ),
    desktop: PropTypes.bool
}
