import React, { useContext, useEffect, createRef } from 'react'
import PropTypes from 'prop-types'
import MenuButton from './MenuButton'
import MenuDrawer from './MenuDrawer'

export default function Menu({
    menu: { name, title, closeName, closeTitle, featured, sections },
    selectorItems
}) {
    return (
        <>
            <MenuButton
                menuName={name}
                menuTitle={title}
                closeName={closeName}
                closeTitle={closeTitle}
            />
            <MenuDrawer
                featured={featured}
                sections={sections}
                selectorItems={selectorItems}
            />
        </>
    )
}
