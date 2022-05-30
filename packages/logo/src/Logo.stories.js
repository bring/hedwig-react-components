import React from 'react'
import Readme from './Readme.mdx'
import { Logo } from './index'
import {
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY
} from '@storybook/addon-docs'

export default {
    title: 'Components/Logo',
    component: Logo,
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

const TemplatePosten = (args) => <Logo {...args} />

export const Posten = TemplatePosten.bind({})

Posten.args = {
    logo: 'posten',
    title: 'Posten logo'
}

const TemplateBring = (args) => (
    <div className='hw-theme-bring'>
        <Logo {...args} />
    </div>
)

export const Bring = TemplateBring.bind({})

Bring.args = {
    logo: 'bring',
    title: 'Bring logo'
}
