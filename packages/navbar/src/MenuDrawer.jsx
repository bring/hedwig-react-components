import React, { useContext } from 'react'
import { NavbarContext } from './NavbarContext'
import Flex from '@posten-hedwig/flex'
import Block from '@posten-hedwig/block'
import '../dist/menu-drawer.scss'
import Selector from './Selector'
import { Accordion, AccordionItem } from '@posten-hedwig/accordion'
import { Linklist } from '@posten-hedwig/linklist'

export default function MenuDrawer({
    featuredLinks,
    loginLink,
    sections,
    selectorItems
}) {
    const { menuOpen, desktop } = useContext(NavbarContext)

    const style = {
        transform: 'rotateX(0deg)',
        transformOrigin: 'top',
        opacity: '1',
        visibility: 'visible'
    }

    function Desktop() {
        return (
            <div className='hw-navbar__drawer-desktop'>
                {featuredLinks && (
                    <Flex wrap='fourths' gutterDesktop='large' elementType='ul'>
                        {featuredLinks.map((link) => (
                            <li key={link.props.children}>{link}</li>
                        ))}
                    </Flex>
                )}
                <Flex gutterDesktop='large' wrap='fourths'>
                    {sections.map((section) => (
                        <Block key={section.title}>
                            <h5>{section.title}</h5>
                            <Linklist links={section.links} />
                        </Block>
                    ))}
                </Flex>
            </div>
        )
    }

    function Mobile() {
        return (
            <div className='hw-navbar__drawer-mobile'>
                {selectorItems && (
                    <Selector items={selectorItems} desktop={false} />
                )}
                {(featuredLinks || loginLink) && (
                    <Block mt='medium-2'>
                        <Linklist links={featuredLinks} />
                    </Block>
                )}
                <Accordion menu>
                    {sections.map((section) => (
                        <AccordionItem
                            title={section.title}
                            key={section.title}
                        >
                            <ul className='hw-accordion__link-items'>
                                {section.links.map((link) => (
                                    <li
                                        className='hw-accordion__link-item'
                                        key={link.props.children}
                                    >
                                        <a
                                            className='hw-accordion__link'
                                            href={link.props.href}
                                        >
                                            {link.props.children}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        )
    }

    return (
        menuOpen && (
            <section className='hw-navbar__drawer' style={style}>
                <div className='hw-navbar__drawer-content'>
                    {desktop && <Desktop />}
                    {!desktop && <Mobile />}
                </div>
            </section>
        )
    )
}
