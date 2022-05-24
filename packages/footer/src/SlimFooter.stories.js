import React from 'react'
import { SlimFooter } from './index'

export default {
    title: 'Components/Footer',
    component: SlimFooter
}

const commonArgs = {
    logoHref: '#',
    importantLinks: [
        <a href='#'>Cookies</a>,
        <a href='#'>Privacy and security</a>
    ]
}

const TemplatePosten = (args) => <SlimFooter {...args} />

export const SlimPosten = TemplatePosten.bind({})

SlimPosten.args = {
    ...commonArgs,
    logoTitle: 'Posten logo'
}

const TemplateBring = (args) => (
    <div className='hw-theme-bring'>
        <SlimFooter {...args} />
    </div>
)

export const SlimBring = TemplateBring.bind({})

SlimBring.args = {
    ...commonArgs,
    logo: 'bring',
    logoTitle: 'Bring logo'
}
