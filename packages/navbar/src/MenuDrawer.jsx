import React, { useContext } from 'react'
import { NavbarContext } from './NavbarContext'
import { Flex } from '@posten-hedwig/flex'
import { Block } from '@posten-hedwig/block'
import '../sass/menu-drawer.scss'
import Selector from './Selector'
import { Accordion, AccordionItem } from '@posten-hedwig/accordion'
import { LinkList } from '@posten-hedwig/linklist'

const MenuDrawer = ({ featuredLinks, loginLink, sections, selectorItems }) => {
    const { menuOpen, desktop } = useContext(NavbarContext)

    const style = {
        transform: 'rotateX(0deg)',
        transformOrigin: 'top',
        opacity: '1',
        visibility: 'visible'
    }

    const Desktop = () => (
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
                        <ul>
                            {section.links.map((link, index) => (
                                <li key={index}>{link}</li>
                            ))}
                        </ul>
                    </Block>
                ))}
            </Flex>
        </div>
    )

    const Mobile = () => (
        <div className='hw-navbar__drawer-mobile'>
            {selectorItems && (
                <Selector items={selectorItems} desktop={false} />
            )}
            {(featuredLinks || loginLink) && (
                <Block mt='medium-2'>
                    <ul>
                    {featuredLinks.map((link) => (
                        <li key={link.props.children}>{link}</li>
                    ))}
                    </ul>
                    {/* <LinkList links={featuredLinks} /> */}
                </Block>
            )}
            <Accordion>
                {sections.map((section) => (
                    <AccordionItem title={section.title} key={section.title}>
                        <ul>
                            {section.links.map((link, index) => (
                                <li key={index}>{link}</li>
                            ))}
                        </ul>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )

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

export default MenuDrawer
