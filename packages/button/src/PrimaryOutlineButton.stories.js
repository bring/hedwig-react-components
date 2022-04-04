import React from 'react'
import PrimaryOutlineButton from './PrimaryOutlineButton'

export default {
    title: 'Components/Buttons/Primary Outline',
    component: PrimaryOutlineButton
}

const Template = (args) => (
    <PrimaryOutlineButton {...args}>
        Primary Outline Button
    </PrimaryOutlineButton>
)

export const PrimaryOutline = Template.bind({})
PrimaryOutline.args = {
    disabled: false
}
