import React from 'react'
import { Grid, GridItem } from '@posten-hedwig/grid'
import { Block } from '@posten-hedwig/block'
import SoMe from './SoMe'
import Copyright from './Copyright'
import ImportantLinks from './ImportantLinks'
import LogoLink from './LogoLink'
import Buttons from './Buttons'

const Desktop = ({
    logo,
    logoHref,
    logoTitle,
    sections,
    importantLinks,
    copyright,
    buttons,
    some
}) => {
    /**
     * Add an extra grid item to push buttons to the right
     * if less than three sections are present
     */
    const ExtraGridItem = ({ missing }) => {
        if ([1, 2, 3].includes(missing)) {
            const sizes = {
                1: 'one-quarter',
                2: 'one-half',
                3: 'three-quarters'
            }
            return <GridItem size={sizes[missing]} />
        }
        return null
    }

    const Navigation = () => (
        <nav>
            <Grid>
                {sections.map((section, index) => (
                    <GridItem size='one-quarter' key={index}>
                        <h4>{section.title}</h4>
                        <ul className='hwc-footer-section'>
                            {section.links.map((link, index) => (
                                <li key={index}>{link}</li>
                            ))}
                        </ul>
                    </GridItem>
                ))}
                {buttons && (
                    <>
                        <ExtraGridItem missing={3 - sections.length} />
                        <GridItem size='one-quarter'>
                            <Buttons buttons={buttons} />
                        </GridItem>
                    </>
                )}
            </Grid>
        </nav>
    )

    return (
        <>
            <Navigation />
            <Block mt='medium-4'>
                <Grid>
                    <GridItem size='one-half'>
                        <LogoLink
                            logoHref={logoHref}
                            logoTitle={logoTitle}
                            logo={logo}
                        />
                    </GridItem>
                    <GridItem size='one-half'>
                        <SoMe some={some} />
                    </GridItem>
                </Grid>
            </Block>
            <div className='hwc-footer__hr' />
            <Block mt='on'>
                <Copyright text={copyright} />
                <ImportantLinks links={importantLinks} />
            </Block>
        </>
    )
}

export default Desktop
