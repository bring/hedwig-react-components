import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '@posten-hedwig/core'
import { Container } from '@posten-hedwig/container'
import { Block } from '@posten-hedwig/block'
import { Grid, GridItem } from '@posten-hedwig/grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../dist/footer.scss'
import logoBring from '../logos/logo-bring.svg'
import logoPosten from '../logos/logo-posten.svg'

export default function Footer({
    slim,
    logo,
    logoHref,
    logoTitle,
    otherLinks,
    copyright,
    some
}) {
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
        return (
            <span className='hw-footer__otherlinks'>
                {otherLinks.map((link, i) => (
                    <React.Fragment key={i}>{link}</React.Fragment>
                ))}
            </span>
        )
    }

    function Navigation() {
        return <nav className='hw-footer__navigation'></nav>
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

    function SlimMobile() {
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

    function FullMobile() {
        return (
            <>
                <nav>Navigation goes here</nav>
                <Logo />
                <SoMe />
                <Hr />
                <Block mt='on'>
                    <Copyright />
                </Block>
                <Block mt='on'>
                    <OtherLinks />
                </Block>
            </>
        )
    }

    function SlimDesktop() {
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

    function FullDesktop() {
        return (
            <>
                Navigation goes here
                <Grid>
                    <GridItem size='one-half'>
                        <Logo />
                    </GridItem>
                    <GridItem size='one-half'>
                        <SoMe />
                    </GridItem>
                </Grid>
                <Hr />
                <Block mt='on'>
                    <Copyright />
                    <OtherLinks />
                </Block>
            </>
        )
    }

    function Mobile() {
        return slim ? <SlimMobile /> : <FullMobile />
    }

    function Desktop() {
        return slim ? <SlimDesktop /> : <FullDesktop />
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
        }).isRequired
    ).isRequired,
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
    slim: false,
    default: 'posten',
    copyRightName: 'Posten Norge AS'
}
