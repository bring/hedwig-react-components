import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Container } from '@posten-hedwig/container'
import { Block } from '@posten-hedwig/block'
import { Grid, GridItem } from '@posten-hedwig/grid'
import { Accordion, AccordionItem } from '@posten-hedwig/accordion'
import { Logo } from '@posten-hedwig/logo'
import SoMe from './SoMe'
import Copyright from './Copyright'
import ImportantLinks from './ImportantLinks'
import '../sass/footer.scss'
import '@posten-hedwig/core'
const Footer = ({
    logo,
    logoHref,
    logoTitle,
    sections,
    importantLinks,
    copyright,
    buttons,
    some
}) => {
    const [desktop, setDesktop] = useState()

    const handleWindowSizeChange = () => {
        setDesktop(window.innerWidth >= 940)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        handleWindowSizeChange()
        return () =>
            window.removeEventListener('resize', handleWindowSizeChange)
    }, [])

    const Buttons = () =>
        buttons.map((button, index) => (
            <Block mb='small-2' classList='hw-footer__button' key={index}>
                {button}
            </Block>
        ))

    const NavigationMobile = () => (
        <nav>
            <Buttons />
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

    const NavigationDesktop = () => (
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

    const Hr = () => <div className='hw-footer__hr' />

    const Mobile = () => (
        <>
            <NavigationMobile />
            <a href={logoHref} className='hw-footer__logo-link'>
                <Logo logo={logo} title={logoTitle} />
            </a>
            <SoMe some={some} />
            <Hr />
            <Block mt='on'>
                <Copyright text={copyright} />
            </Block>
            <Block mt='on'>
                <ImportantLinks links={importantLinks} />
            </Block>
        </>
    )

    const Desktop = () => (
        <>
            <NavigationDesktop />
            <Block mt='medium-4'>
                <Grid>
                    <GridItem size='one-half'>
                        <a href={logoHref} className='hw-footer__logo-link'>
                            <Logo logo={logo} title={logoTitle} />
                        </a>
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

    return (
        <footer className='hw-footer'>
            <Container>{desktop ? <Desktop /> : <Mobile />}</Container>
        </footer>
    )
}

Footer.propTypes = {
    /**
     * Which logo to show in the footer
     */
    logo: PropTypes.oneOf(['bring', 'posten']).isRequired,

    /**
     * Specify the href for clicking on the logo
     */
    logoHref: PropTypes.string.isRequired,

    /**
     * Specify sections with links in footer
     */
    sections: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string.isRequired,
            links: PropTypes.arrayOf(
                PropTypes.shape({
                    props: PropTypes.oneOfType([
                        PropTypes.shape({
                            href: PropTypes.string.isRequired,
                            children: PropTypes.node.isRequired
                        }),
                        PropTypes.shape({
                            to: PropTypes.oneOfType([
                                PropTypes.string,
                                PropTypes.object,
                                PropTypes.func
                            ]),
                            children: PropTypes.node.isRequired
                        })
                    ]).isRequired
                })
            )
        })
    ),

    /**
     * Title for logo
     */
    logoTitle: PropTypes.string.isRequired,

    /**
     * Name for copyright
     */
    copyright: PropTypes.string.isRequired,

    /**
     * Links for other important pages. For example 'Cookies' and 'Privacy and security'
     */
    importantLinks: PropTypes.arrayOf(
        PropTypes.shape({
            props: PropTypes.oneOfType([
                PropTypes.shape({
                    href: PropTypes.string.isRequired,
                    children: PropTypes.node.isRequired
                }),
                PropTypes.shape({
                    to: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.object,
                        PropTypes.func
                    ]),
                    children: PropTypes.node.isRequired
                })
            ]).isRequired
        }).isRequired
    ).isRequired,
    /**
     * Links or buttons for special items in the footer. Will be styled as buttons
     */
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            props: PropTypes.oneOfType([
                PropTypes.shape({
                    href: PropTypes.string.isRequired,
                    children: PropTypes.node.isRequired
                }),
                PropTypes.shape({
                    to: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.object,
                        PropTypes.func
                    ]),
                    children: PropTypes.node.isRequired
                })
            ]).isRequired
        }).isRequired
    ),
    /**
     * Array of social media to show in footer
     */
    some: PropTypes.arrayOf(
        PropTypes.exact({
            brand: PropTypes.oneOf([
                'facebook',
                'twitter',
                'linkedin',
                'mail',
                'google',
                'instagram'
            ]),
            href: PropTypes.string,
            onclick: PropTypes.func,
            ariaLabel: PropTypes.string.isRequired
        })
    )
}

Footer.defaultProps = {
    logo: 'posten',
    copyright: 'Posten Norge AS'
}

export default Footer
