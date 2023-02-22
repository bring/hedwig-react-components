import React from 'react'
import { Accordion, AccordionItem } from '@posten-hedwig/accordion'
import { Block } from '@posten-hedwig/block'
import SoMe from './SoMe'
import Copyright from './Copyright'
import ImportantLinks from './ImportantLinks'
import LogoLink from './LogoLink'
import Buttons from './Buttons'

const Mobile = ({
    logo,
    logoHref,
    logoTitle,
    sections,
    importantLinks,
    copyright,
    buttons,
    some
}) => {
    const Navigation = () => (
        <nav>
            <Buttons buttons={buttons} />
            <Block mt='medium-4'>
                <Accordion>
                    {sections.map((section, index) => (
                        <AccordionItem title={section.title} key={index}>
                            <ul className='hw-footer-section'>
                                {section.links.map((link, index) => (
                                    <li key={index}>{link}</li>
                                ))}
                            </ul>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Block>
        </nav>
    )

    return (
        <>
            <Navigation />
            <LogoLink logoHref={logoHref} logoTitle={logoTitle} logo={logo} />
            <SoMe some={some} />
            <div className='hw-footer__hr' />
            <Block mt='on'>
                <Copyright text={copyright} />
            </Block>
            <Block mt='on'>
                <ImportantLinks links={importantLinks} />
            </Block>
        </>
    )
}

export default Mobile
