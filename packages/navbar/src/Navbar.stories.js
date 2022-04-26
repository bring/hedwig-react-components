import React from 'react'
import Navbar from './Navbar'
import { Link } from '@posten-hedwig/link'
import {
    Icon,
    sporing,
    leverttilbedrift,
    avis,
    kundeservice
} from '@posten-hedwig/icon'

export default {
    title: 'Components/Navbar',
    component: Navbar
}

// Bare bone Navbar with only the logo
const TemplateStripped = (args) => <Navbar {...args} />

export const navbarStripped = TemplateStripped.bind({})
navbarStripped.args = {
    logoTitle: 'Posten Logo',
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
    logoTitle: 'Posten Logo',
    logo: 'posten',
    logoHref: '#',
    logoAriaLabel: 'Go to homepage',
    skipToMainHref: '#content',
    skipToMainTitle: 'Go to main content',
    menu: {
        name: 'Meny',
        title: 'Open menu',
        closeName: 'Lukk',
        closeTitle: 'Close menu',
        featured: [
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
        ],
        sections: [
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
        ]
    }
}

// Navbar with Search button and Selector items
const TemplateSelector = (args) => (
    <div className='hw-theme-bring'>
        <Navbar {...args} />
    </div>
)

export const navbarSelector = TemplateSelector.bind({})
navbarSelector.args = {
    logoTitle: 'Bring Logo',
    logo: 'bring',
    logoHref: '#',
    logoAriaLabel: 'Go to homepage',
    skipToMainHref: '#content',
    skipToMainTitle: 'Go to main content',
    selectorItems: [
        {
            title: 'Företag',
            href: '#',
            ariaLabel: 'Business section'
        },
        {
            title: 'Privat',
            href: '#',
            selected: true,
            ariaLabel: 'Private section'
        }
    ]
}

// Navbar with Flagship
const TemplateFlagship = (args) => (
    <div className='hw-theme-bring'>
        <Navbar {...args} />
    </div>
)
export const navbarFlagship = TemplateFlagship.bind({})
navbarFlagship.args = {
    logoTitle: 'Bring Logo',
    logo: 'bring',
    logoHref: '#',
    logoAriaLabel: 'Go to homepage',
    flagship: 'Signering',
    skipToMainHref: '#content',
    skipToMainTitle: 'Go to main content'
}
