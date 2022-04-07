import React from 'react'
import Block from './Block'

export default {
    title: 'Layout/Block',
    component: Block
}

const Template = (args) => <Block {...args}>Block</Block>

export const Default = Template.bind({})
