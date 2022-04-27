import React from 'react'
import PropTypes from 'prop-types'
import MenuButton from './MenuButton'
import MenuDrawer from './MenuDrawer'

export default function Menu({
    menu: { closeName, closeTitle, sections },
    openName,
    openTitle,
    featuredLinks,
    selectorItems
}) {
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
