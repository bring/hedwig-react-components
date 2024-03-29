import React from 'react'
import Readme from './Readme.mdx'
import { Footer } from './index'
import { Link } from '@posten-hedwig/link'
import {
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY
} from '@storybook/addon-docs'

export default {
    title: 'Components/Footer',
    component: Footer,
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
    }
}

const commonArgs = {
    logoHref: '#',
    logoTitle: 'Bring logo',
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
    ],
    some: [
        {
            brand: 'facebook',
            href: '#',
            ariaLabel: 'Check out our Facebook page'
        },
        {
            brand: 'mail',
            href: 'mailto:hedwig@posten.no',
            ariaLabel: 'email us'
        },
        {
            brand: 'instagram',
            onclick: () => {
                alert('You clicked Instagram icon')
            },
            ariaLabel: 'Check out our Instagram'
        }
    ],
    buttons: [
        <a href='#'>For bedrifter</a>,
        <a
            href='#'
            onClick={() => {
                alert('You wanted the English site')
            }}
        >
            English site
        </a>,
        <button onClick={() => alert('You clicked a button')}>A button</button>
    ],
    importantLinks: [
        <a href='#'>Cookies</a>,
        <a href='#'>Privacy and security</a>
    ]
}

const TemplatePosten = (args) => <Footer {...args} />
export const Posten = TemplatePosten.bind({})

Posten.args = {
    ...commonArgs
}

const TemplateBring = (args) => (
    <div className='hwc-theme-bring'>
        <Footer {...args} />
    </div>
)
export const Bring = TemplateBring.bind({})

Bring.args = {
    ...commonArgs,
    logo: 'bring'
}
