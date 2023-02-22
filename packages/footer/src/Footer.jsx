import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Container } from '@posten-hedwig/container'
import Desktop from './Desktop'
import Mobile from './Mobile'
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
    const [desktop, setDesktop] = useState(false)

    const handleWindowSizeChange = () => {
        setDesktop(window.innerWidth >= 940)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        handleWindowSizeChange()
        return () =>
            window.removeEventListener('resize', handleWindowSizeChange)
    }, [])

    return (
        <footer className='hw-footer'>
            <Container>
                {desktop ? (
                    <Desktop
                        logo={logo}
                        logoHref={logoHref}
                        logoTitle={logoTitle}
                        sections={sections}
                        importantLinks={importantLinks}
                        copyright={copyright}
                        buttons={buttons}
                        some={some}
                    />
                ) : (
                    <Mobile
                        logo={logo}
                        logoHref={logoHref}
                        logoTitle={logoTitle}
                        sections={sections}
                        importantLinks={importantLinks}
                        copyright={copyright}
                        buttons={buttons}
                        some={some}
                    />
                )}
            </Container>
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
