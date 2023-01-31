import React from 'react'
import PropTypes from 'prop-types'
import MenuButton from './MenuButton'
import MenuDrawer from './MenuDrawer'

const Menu = ({
    sections,
    openName,
    openTitle,
    closeName,
    closeTitle,
    featuredLinks,
    selectorItems
}) => (
    <>
        <MenuButton
            openName={openName}
            openTitle={openTitle}
            closeName={closeName}
            closeTitle={closeTitle}
        />
        <MenuDrawer
            featuredLinks={featuredLinks}
            sections={sections}
            selectorItems={selectorItems}
        />
    </>
)

export default Menu
