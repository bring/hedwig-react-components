import React from 'react'
import InfoBox from './InfoBox'

export default {
    title: 'Components/Info/InfoBox',
    component: InfoBox
}

const Template = (args) => (
    <InfoBox {...args}>
        <p>The body text is here. Should not be very long</p>
    </InfoBox>
)

export const Default = Template.bind({})
Default.args = {
    title: 'So, an Info Box'
}
