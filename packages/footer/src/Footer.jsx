import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Container } from '@posten-hedwig/container'
import { Block } from '@posten-hedwig/block'
import { Linklist } from '@posten-hedwig/linklist'
import { Grid, GridItem } from '@posten-hedwig/grid'
import { Accordion, AccordionItem } from '@posten-hedwig/accordion'
import { Logo } from '@posten-hedwig/logo'
import Copyright from './Copyright'
import ImportantLinks from './ImportantLinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../dist/footer.scss'

export default function Footer({
    logo,
    logoHref,
    logoTitle,
    sections,
    importantLinks,
    copyright,
    buttons,
    some
}) {
    const [desktop, setDesktop] = useState()

    function handleWindowSizeChange() {
        setDesktop(window.innerWidth >= 940)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        handleWindowSizeChange()
        return () =>
            window.removeEventListener('resize', handleWindowSizeChange)
    }, [])

    function NavigationMobile() {
        return (
            <nav>
                {buttons.map((button, index) => (
                    <Block mb='small-2' classList='hw-footer__button'>
                        <React.Fragment key={index}>{button}</React.Fragment>
                    </Block>
                ))}
                <Block mt='medium-4'>
                    <Accordion>
                        {sections.map((section) => (
                            <AccordionItem title={section.title}>
                                <Linklist links={section.links} />
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Block>
            </nav>
        )
    }

    function Hr() {
        return <div className='hw-footer__hr' />
    }

    function SoMe() {
        if (!some) return null
        return (
            <div className='hw-some'>
                {some.map((item, i) => (
                    <a
                        className='hw-some__button'
                        href={item.href || '#'}
                        aria-label={item.ariaLabel}
                        onClick={item.onclick}
                        key={i}
                    >
                        <FontAwesomeIcon icon={item.faIcon} />
                    </a>
                ))}
            </div>
        )
    }

    function Mobile() {
        return (
            <>
                <NavigationMobile />
                <a href={logoHref} className='hw-footer__logo-link'>
                    <Logo logo={logo} title={logoTitle} />
                </a>
                <SoMe />
                <Hr />
                <Block mt='on'>
                    <Copyright text={copyright} />
                </Block>
                <Block mt='on'>
                    <ImportantLinks links={importantLinks} />
                </Block>
            </>
        )
    }

    function Desktop() {
        return (
            <>
                Navigation goes here
                <Grid>
                    <GridItem size='one-half'>
                        <a href={logoHref} className='hw-footer__logo-link'>
                            <Logo logo={logo} title={logoTitle} />
                        </a>
                    </GridItem>
                    <GridItem size='one-half'>
                        <SoMe />
                    </GridItem>
                </Grid>
                <Hr />
                <Block mt='on'>
                    <Copyright text={copyright} />
                    <ImportantLinks links={importantLinks} />
                </Block>
            </>
        )
    }

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
    some: PropTypes.arrayOf(
        PropTypes.exact({
            faIcon: PropTypes.object.isRequired,
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
