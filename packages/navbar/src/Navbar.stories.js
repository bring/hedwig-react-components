import React from 'react'
import Navbar from './Navbar'
import Readme from './Readme.mdx'
import { Link } from '@posten-hedwig/link'
import {
    Icon,
    sporing,
    leverttilbedrift,
    avis,
    kundeservice
} from '@posten-hedwig/icon'

import {
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY
} from '@storybook/addon-docs'

export default {
    title: 'Components/Navbar',
    component: Navbar,
    parameters: {
        docs: {
            page: () => (
                <>
                    <Readme />
                    <Description />
                    <Primary />
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories />
                </>
            )
        }
    },
    argTypes: {
        menuSections: {
            table: {
                type: {
                    summary: 'object[]',
                    detail: `
[{
    title: string,
    links: [{
        props: {
            href: string,
            children: node
        } | {
            to: string | object | func,
            children: node
        }
    }]
}]
`
                }
            }
        }
    }
}

// Bare bone Navbar with only the logo
const Default = (args) => <Navbar {...args} />

export const navbarDefault = Default.bind({})
navbarDefault.args = {
    logo: 'posten',
    logoHref: '#',
    logoAriaLabel: 'Go to homepage',
    skipToMainHref: '#content',
    skipToMainTitle: 'Go to main content'
}

// Bare bone Navbar with only the logo
const TemplateMenu = (args) => (
    <div style={{ height: '600px' }}>
        <Navbar {...args} />
    </div>
)

export const navbarMenu = TemplateMenu.bind({})
navbarMenu.args = {
    logo: 'posten',
    logoHref: '#',
    logoAriaLabel: 'Go to homepage',
    skipToMainHref: '#content',
    skipToMainTitle: 'Go to main content',
    menuOpenName: 'Menu',
    menuOpenTitle: 'Open menu',
    menuCloseName: 'Close',
    menuCloseTitle: 'Close menu',
    menuSections: [
        {
            title: 'Send',
            links: [
                <Link href='#'>Parcels abroad</Link>,
                <Link href='#'>Parcels in Norway</Link>,
                <Link href='#'>Letters in Norway</Link>,
                <Link href='#'>Return</Link>,
                <Link href='#'>Letters abroad</Link>,
                <Link href='#'>Addressing and wrapping</Link>,
                <Link href='#'>Customs when sending abroad</Link>
            ]
        },
        {
            title: 'Receive',
            links: [
                <Link href='#'>On what days does my mail arrive?</Link>,
                <Link href='#'>Home delivery</Link>,
                <Link href='#'>Pick up yourself</Link>,
                <Link href='#'>Customs when receiving</Link>
            ]
        }
    ],
    menuFeaturedLinks: [
        <Link href='#'>
            <Icon icon={sporing} size='medium' title='Track a shipment' />
            Track a shipment
        </Link>,
        <Link href='#'>
            <Icon icon={leverttilbedrift} size='medium' title='Mybring' />
            Mybring
        </Link>,
        <Link href='#'>
            <Icon icon={avis} size='medium' title='Magazine' />
            Magazine
        </Link>,
        <Link href='#'>
            <Icon icon={kundeservice} size='medium' title='Contact us' />
            Contact us
        </Link>
    ]
}

// Navbar with Search button and Selector items
const TemplateSelector = (args) => (
    <div className='hwc-theme-bring'>
        <Navbar {...args} />
    </div>
)

export const navbarSelector = TemplateSelector.bind({})
navbarSelector.args = {
    logo: 'bring',
    logoHref: '#',
    logoAriaLabel: 'Go to homepage',
    skipToMainHref: '#content',
    skipToMainTitle: 'Go to main content',
    selectorItems: [
        {
            link: <Link href='#'>Business</Link>
        },
        {
            link: <a href='#'>Private</a>,
            selected: true
        }
    ]
}

// Navbar with Flagship
const TemplateFlagship = (args) => (
    <div className='hwc-theme-bring'>
        <Navbar {...args} />
    </div>
)
export const navbarFlagship = TemplateFlagship.bind({})
navbarFlagship.args = {
    logo: 'bring',
    logoHref: '#',
    logoAriaLabel: 'Go to homepage',
    flagship: 'Signering',
    skipToMainHref: '#content',
    skipToMainTitle: 'Go to main content'
}
