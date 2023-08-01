import React from 'react'
import Readme from './Readme.mdx'
import {
    PrimaryButton,
    LightOutlineButton,
    PrimaryOutlineButton,
    ChatButton,
    SecondaryButton,
    SecondaryOutlineButton
} from './index'
import {
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY
} from '@storybook/addon-docs'

export default {
    title: 'Components/Buttons',
    component: PrimaryButton,
    parameters: {
        docs: {
            page: () => (
                <>
                    <Readme />
                    <Description />
                    <Primary />
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories />
                </>
            )
        }
    }
}

const Template = (args) => (
    <PrimaryButton {...args}>Primary Button</PrimaryButton>
)

export const Default = Template.bind({})

Default.args = {
    disabled: false,
    onClick: () => alert('This is an onclick test')
}

const SecondaryTemplate = (args) => (
    <SecondaryButton {...args}>Secondary Button</SecondaryButton>
)

export const Secondary = SecondaryTemplate.bind({})
Secondary.args = {
    disabled: false
}

const PrimaryOutlineTemplate = (args) => (
    <PrimaryOutlineButton {...args}>
        Primary Outline Button
    </PrimaryOutlineButton>
)

export const PrimaryOutline = PrimaryOutlineTemplate.bind({})
PrimaryOutline.args = {
    disabled: false
}

const SecondaryOutlineTemplate = (args) => (
    <SecondaryOutlineButton {...args}>
        Secondary Outline Button
    </SecondaryOutlineButton>
)

export const SecondaryOutline = SecondaryOutlineTemplate.bind({})
SecondaryOutline.args = {
    disabled: false
}

const LigthTemplate = (args) => (
    <LightOutlineButton {...args}>Light Outline Button</LightOutlineButton>
)

export const LightOutline = LigthTemplate.bind({})
LightOutline.args = {
    disabled: false
}

const ChatTemplate = (args) => <ChatButton {...args} />

export const Chat = ChatTemplate.bind({})
Chat.args = {
    disabled: false,
    ariaLabel: "I am a chat button",
    onClick: () => alert('This is an onclick test')
}
