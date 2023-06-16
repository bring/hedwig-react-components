import React from 'react'
import PropTypes from 'prop-types'
import SelectorItem from './SelectorItem'
import '../sass/selector.scss'

const Selector = ({ items, desktop }) => (
    <div
        className={`hwc-navbar__selector${
            !desktop ? ' hwc-navbar__selector__mobile' : ''
        }`}
    >
        {items.map(({ link, selected }) => (
            <SelectorItem
                link={link}
                selected={selected}
                key={link.props.children}
            />
        ))}
    </div>
)

Selector.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            link: PropTypes.object.isRequired,
            selected: PropTypes.bool
        })
    ),
    desktop: PropTypes.bool
}

export default Selector
