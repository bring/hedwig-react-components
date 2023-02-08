import React from 'react'
import Readme from './Readme.mdx'
/** Nasty import */
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

const TemplatePosten = (args) => <LogoPosten />

export const Posten = TemplatePosten.bind({})

const TemplateBring = (args) => <LogoBring />

export const Bring = TemplateBring.bind({})
