import React from 'react'
import InfoBox from './InfoBox'
import Link from './../../link/src/Link'

export default {
    title: 'Components/InfoBox',
    component: InfoBox
}

const Template = (args) => (
    <InfoBox {...args}>
        <p>The body text is here. Should not be very long</p>
        <Link href='#'>This is a link</Link>
    </InfoBox>
)

export const Default = Template.bind({})
Default.args = {
    title: 'So, just an Info Box'
}
