import React from 'react'
import SecondaryOutlineButton from './SecondaryOutlineButton'

export default {
    title: 'Components/Buttons/Secondary Outline',
    component: SecondaryOutlineButton
}

const Template = (args) => (
    <SecondaryOutlineButton {...args}>
        Secondary Outline Button
    </SecondaryOutlineButton>
)

export const SecondaryOutline = Template.bind({})
SecondaryOutline.args = {
    disabled: false
}
