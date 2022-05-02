import React from 'react'
import { Icon, adresser } from './index'
import Usage from './Usage.mdx'
import List from './List.mdx'

import {
    Title,
    Subtitle,
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY
} from '@storybook/addon-docs'

export default {
    title: 'Components/Icon',
    component: Icon,
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Usage />
                    <Description />
                    <Primary />
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories />
                    <List />
                </>
            )
        }
    }
}

const Template = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
    icon: adresser,
    title: 'List of addresses',
    size: 'medium'
}

Default.storyName = 'Icon'
