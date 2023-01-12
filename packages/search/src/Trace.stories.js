import React from 'react'
import Trace from './Trace'

export default {
    title: 'Components/Search/Trace',
    component: Trace
}

const Template = (args) => <Trace {...args}>Trace</Trace>

export const TraceInput = Template.bind({})
TraceInput.args = {
    placeholder: 'Trackingnumber',
    buttonLabel: 'Trace'
}

TraceInput.storyName = 'Trace'
