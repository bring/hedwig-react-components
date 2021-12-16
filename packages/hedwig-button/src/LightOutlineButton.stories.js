import React from 'react'
import LightOutlineButton from './LightOutlineButton'

export default {
    title: 'Components/Buttons/Light Outline',
    component: LightOutlineButton,
    parameters: {
        backgrounds: {
            default: 'gray-dark',
            values: [
                { name: 'gray-dark', value: '#6E6E6E' },
                { name: 'black', value: '#000000' }
            ]
        }
    }
}

const Template = (args) => (
    <LightOutlineButton {...args}>Light Outline Button</LightOutlineButton>
)

export const LightOutline = Template.bind({})
LightOutline.args = {
    disabled: false
}
