import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '@posten-hedwig/core'
import { Container } from '@posten-hedwig/container'
import { Block } from '@posten-hedwig/block'
import { Grid, GridItem } from '@posten-hedwig/grid'
import '../dist/footer.scss'
import logoBring from '../logos/logo-bring.svg'
import logoPosten from '../logos/logo-posten.svg'

export default function Footer({ slim, logo, logoHref, logoTitle, otherLinks, copyright }) {
    let classes = ['hw-footer']
    if (slim) {
        classes.push('hw-footer--slim')
    }

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

    function Logo() {
        return (
            <a href={logoHref} className='hw-footer__logo-link'>
                <img
                    src={logo === 'posten' ? logoPosten : logoBring}
                    className='hw-footer__logo-link-standard'
                    alt={logoTitle}
                />
            </a>
        )
    }

    function Copyright() {
        return <span className='hw-copyright'>© {copyright}</span>
    }

    function OtherLinks() {
        return <span className='hw-footer__otherlinks'>{otherLinks.map((link) => link)}</span>
    }

    function Navigation() {
        return (
            <nav className='hw-footer__navigation'>

            </nav>
        )
    }

    function Mobile() {
        return (
            <>
                <Logo />
                <Block mt='on'>
                    <Copyright />
                </Block>
                <Block mt='on'>
                    <OtherLinks />
                </Block>
            </>
        )
    }

    function Desktop() {
        return (
            <Grid>
                <GridItem size='one-quarter'>
                    <Logo />
                </GridItem>
                <GridItem size='three-quarters'>
                    <div className='hw-footer__element-float-right'>
                        <Copyright />
                        <OtherLinks />
                    </div>
                </GridItem>
            </Grid>            
        )
    }

    return (
        <footer className={classes.join(' ')}>
            <Container>{desktop ? <Desktop /> : <Mobile />}</Container>
        </footer>
    )
}

Footer.propTypes = {
    /**
     * Show footer as slim
     */
    slim: PropTypes.bool,

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
    otherLinks: PropTypes.arrayOf(
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
}

Footer.defaultProps = {
    slim: false,
    default: 'posten',
    copyRightName: 'Posten Norge AS'
}
