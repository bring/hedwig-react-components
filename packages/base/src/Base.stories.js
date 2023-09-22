import React from 'react'
import Readme from './Readme.mdx'
import { Base } from '../../base'
import {
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY
} from '@storybook/addon-docs'

export default {
    title: 'Base/Base',
    component: Base,
    parameters: {
        docs: {
            page: () => (
                <>
                    <Readme />
                    <Description />
                    <Primary />
                    <Stories />
                </>
            )
        }
    }
}

const Template = (args) => <div {...args}>
    <p>
        Some text with hedwig font
    </p>

</div>

export const Default = Template.bind({})

