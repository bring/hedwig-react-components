import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { NavbarContext } from './NavbarContext'
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
}) => {
    const { isSearching, desktop } = useContext(NavbarContext)

    if (!isSearching || desktop) {
        return (
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
    }
    return null
}

export default Menu
