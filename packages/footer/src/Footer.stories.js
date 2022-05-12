import React from 'react'
import { Footer } from './index'

export default {
    title: 'Components/Footer',
    component: Footer
}

const TemplateDefault = (args) => (
    <div className='hw-theme-posten'>
        <Footer {...args} />
    </div>
)
export const FooterDefault = TemplateDefault.bind({})

FooterDefault.args = {
    slim: true,
    logo: 'posten',
    logoHref: '#',
    logoTitle: 'Bring logo',
    copyright: 'Posten Norge AS',
    otherLinks: [<a href='#'>Cookies</a>, <a href='#'>Privacy and security</a>]
}
