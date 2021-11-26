import React from 'react'
import Badge from './Badge'

export default {
    title: 'Components/Badge',
    component: Badge
}

const Template = (args) => (
    <div className='hw-theme-posten'>
        <Badge {...args}>Badge</Badge>
    </div>
)

export const Default = Template.bind({})
