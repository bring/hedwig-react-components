import React from 'react'
import ChatButton from './ChatButton'

export default {
    title: 'Components/Buttons/Chat',
    component: ChatButton
}

const Template = (args) => <ChatButton {...args} />

export const Chat = Template.bind({})
Chat.args = {
    disabled: false,
    onClick: () => alert('This is an onclick test')
}
