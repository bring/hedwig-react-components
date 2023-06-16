import React from 'react'
import Readme from './Readme.mdx'
import { SlimFooter } from './index'
import {
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY
} from '@storybook/addon-docs'

export default {
    title: 'Components/SlimFooter',
    component: SlimFooter,
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
    importantLinks: [
        <a href='#'>Cookies</a>,
        <a href='#'>Privacy and security</a>
    ]
}

const TemplatePosten = (args) => <SlimFooter {...args} />

export const Posten = TemplatePosten.bind({})

Posten.args = {
    ...commonArgs,
    logoTitle: 'Posten logo'
}

const TemplateBring = (args) => (
    <div className='hwc-theme-bring'>
        <SlimFooter {...args} />
    </div>
)

export const Bring = TemplateBring.bind({})

Bring.args = {
    ...commonArgs,
    logo: 'bring',
    logoTitle: 'Bring logo'
}
