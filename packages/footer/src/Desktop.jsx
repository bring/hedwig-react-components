import React from 'react'
import PropTypes from 'prop-types'
import { Grid, GridItem } from '@posten-hedwig/grid'

const Desktop = ({
    sections,
    buttons,
    some,
    copyright,
    importantLinks,
    logoHref,
    logoTitle,
    logo
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

    const Buttons = () =>
        buttons.map((button, index) => (
            <Block mb='small-2' classList='hw-footer__button' key={index}>
                {button}
            </Block>
        ))

    const Hr = () => <div className='hw-footer__hr' />

    const LogoLink = () => (
        <a
            href={logoHref}
            aria-label={logoTitle}
            className='hw-footer__logo-link'
        >
            {logo === 'bring' ? <LogoBring /> : <LogoPosten />}
        </a>
    )

    const Navigation = () => (
        <nav>
            <Grid>
                {sections.map((section, index) => (
                    <GridItem size='one-quarter' key={index}>
                        <h4>{section.title}</h4>
                        <ul className='hw-footer-section'>
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
                            <Buttons />
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
                        <LogoLink />
                    </GridItem>
                    <GridItem size='one-half'>
                        <SoMe some={some} />
                    </GridItem>
                </Grid>
            </Block>
            <Hr />
            <Block mt='on'>
                <Copyright text={copyright} />
                <ImportantLinks links={importantLinks} />
            </Block>
        </>
    )
}

export default Desktop
