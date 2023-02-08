import React from 'react'
import Readme from './Readme.mdx'
import { LogoBring, LogoPosten } from '../dist/index'
import {
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY
} from '@storybook/addon-docs'

export default {
    title: 'Components/Logo',
    component: LogoPosten,
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

const TemplatePosten = (args) => <LogoPosten {...args} />

export const Posten = TemplatePosten.bind({})

Posten.args = {
    title: 'Posten logo'
}

const TemplateBring = (args) => <LogoBring {...args} />

export const Bring = TemplateBring.bind({})

Bring.args = {
    title: 'Bring logo'
}
