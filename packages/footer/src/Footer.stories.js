import React from 'react'
import { Footer } from './index'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from '@posten-hedwig/link'

export default {
    title: 'Components/Footer',
    component: Footer
}

const args = {
    logo: 'posten',
    logoHref: '#',
    logoTitle: 'Bring logo',
    otherLinks: [<a href='#'>Cookies</a>, <a href='#'>Privacy and security</a>]
}

const TemplateDefault = (args) => (
    <div className='hw-theme-posten'>
        <Footer {...args} />
    </div>
)
export const FooterDefault = TemplateDefault.bind({})

FooterDefault.args = {
    ...args,
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
            faIcon: faFacebookF,
            href: '#',
            ariaLabel: 'Check out our Facebook page'
        },
        {
            faIcon: faInstagram,
            onclick: () => {
                alert('You clicked Instagram')
            },
            ariaLabel: 'Check out our Instagram page'
        }
    ]
}

const TemplateSlim = (args) => (
    <div className='hw-theme-posten'>
        <Footer {...args} />
    </div>
)
export const FooterSlim = TemplateSlim.bind({})

FooterSlim.args = {
    ...args,
    slim: true
}
