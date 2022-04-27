import React from 'react'
import PropTypes from 'prop-types'
import MenuButton from './MenuButton'
import MenuDrawer from './MenuDrawer'

export default function Menu({
    menu: { sections },
    openName,
    openTitle,
    closeName,
    closeTitle,
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
