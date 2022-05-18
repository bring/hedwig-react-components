import React from 'react'
import { Footer } from './index'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default {
    title: 'Components/Footer',
    component: Footer
}

const args = {
    logo: 'posten',
    logoHref: '#',
    logoTitle: 'Bring logo',
    copyright: 'Posten Norge AS',
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
