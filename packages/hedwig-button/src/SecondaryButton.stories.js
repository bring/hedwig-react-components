import React from 'react'
import SecondaryButton from './SecondaryButton'

export default {
    title: 'Components/Buttons/Secondary',
    component: SecondaryButton
}

const Template = (args) => (
    <SecondaryButton {...args}>Secondary Button</SecondaryButton>
)

export const Secondary = Template.bind({})
Secondary.args = {
    disabled: false
}
