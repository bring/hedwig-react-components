import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Container } from '@posten-hedwig/container'
import { Block } from '@posten-hedwig/block'
import { Grid, GridItem } from '@posten-hedwig/grid'
import Logo from './Logo'
import ImportantLinks from './ImportantLinks'
import Copyright from './Copyright'
import '../dist/slimfooter.scss'

export default function SlimFooter({
    logo,
    logoHref,
    logoTitle,
    importantLinks,
    copyright
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

    function Mobile() {
        return (
            <>
                <Logo logo={logo} title={logoTitle} href={logoHref} />
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
            <Grid>
                <GridItem size='one-quarter'>
                    <Logo logo={logo} title={logoTitle} href={logoHref} />
                </GridItem>
                <GridItem size='three-quarters'>
                    <div className='hw-footer__element-float-right'>
                        <Copyright text={copyright} />
                        <ImportantLinks links={importantLinks} />
                    </div>
                </GridItem>
            </Grid>
        )
    }

    return (
        <footer className='hw-slim-footer'>
            <Container>{desktop ? <Desktop /> : <Mobile />}</Container>
        </footer>
    )
}

SlimFooter.propTypes = {
    /**
     * Which logo to show in the footer
     */
    logo: PropTypes.oneOf(['bring', 'posten']).isRequired,

    /**
     * Specify the href for clicking on the logo
     */
    logoHref: PropTypes.string.isRequired,

    /**
     * Title for logo
     */
    logoTitle: PropTypes.string.isRequired,

    /**
     * Name for copyright
     */
    copyright: PropTypes.string.isRequired,

    /** Links for other important pages. For example 'Cookies' and 'Privacy and security' */
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
    ).isRequired
}

SlimFooter.defaultProps = {
    logo: 'posten',
    copyright: 'Posten Norge AS'
}
