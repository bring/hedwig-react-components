import React from 'react'
import Readme from './Readme.mdx'
import { Badge, DarkBadge, WarningBadge, WhiteBadge } from './index'
import {
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY
} from '@storybook/addon-docs'

export default {
    title: 'Components/Badge',
    component: Badge,
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

const Template = (args) => (
    <Badge {...args}>Badge</Badge>
)

export const Default = Template.bind({})

const TemplateDark = (args) => <DarkBadge {...args}>Dark Badge</DarkBadge>

export const darkBadge = TemplateDark.bind({})

const TemplateWarning = (args) => (
    <WarningBadge {...args}>Warning Badge</WarningBadge>
)

export const Warning = TemplateWarning.bind({})

const TemplateWhite = (args) => <WhiteBadge {...args}>White Badge</WhiteBadge>

export const White = TemplateWhite.bind({})
