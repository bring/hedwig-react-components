import React from 'react'
import Flex from './Flex'

export default {
    title: 'Layout/Flex',
    component: Flex
}

const Template = (args) => (
    <>
        <Flex {...args}>
            <div>Text 1</div>
            <div>Text 2</div>
            <div>Text 3</div>
            <div>Text 4</div>
            <div>Text 5</div>
        </Flex>
    </>
)

export const Default = Template.bind({})
Default.args = {
    wrap: 'thirds'
}
