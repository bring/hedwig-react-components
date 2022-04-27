import React from 'react'
import PropTypes from 'prop-types'
import MenuButton from './MenuButton'
import MenuDrawer from './MenuDrawer'

export default function Menu({
    menu: { title, closeName, closeTitle, sections },
    openName,
    featuredLinks,
    selectorItems
}) {
    return (
        <>
            <MenuButton
                openName={openName}
                menuTitle={title}
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
