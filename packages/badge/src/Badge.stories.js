import React from 'react'
import Badge from './Badge'

export default {
    title: 'Components/Badge',
    component: Badge
}

const Template = (args) => (
    <>
        Wrapping with theme Bring
        <div className='hw-theme-bring'>
            <Badge {...args}>Badge</Badge>
        </div>
    </>
)

export const Default = Template.bind({})
