import React from 'react'
import { Block } from './index'
import Readme from './Readme.mdx'
import {
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY
} from '@storybook/addon-docs'

export default {
    title: 'Layout/Block',
    component: Block,
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

const Template = (args) => <Block {...args}>Block</Block>

export const Default = Template.bind({})

const PaddingTemplate = (args) => (
    <>
        Colors are for illustration purposes. Padding is green, margin is orange
        <div className='hw-helpers-margin-highlighter'>
            <Block {...args}>
                <p className='hw-helpers-margin-highlighter-content'>
                    Block with padding
                </p>
            </Block>
        </div>
    </>
)

export const WithPadding = PaddingTemplate.bind({})
WithPadding.args = {
    py: 'responsive',
    px: 'responsive'
}

WithPadding.parameters = {
    docs: {
        source: {
            code: '<Block px="responsive" py="responsive" >Block with padding</Block>',
            language: 'jsx',
            type: 'auto'
        }
    }
}
