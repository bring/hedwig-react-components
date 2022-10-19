import React from 'react'
import TextInput from './TextInput'
import EmailInput from './EmailInput'
import BaseInput from './BaseInput'
import PasswordInput from './PasswordInput'
import NumberInput from './NumberInput'
import Readme from './Readme.mdx'

import {
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY
} from '@storybook/addon-docs'

export default {
    title: 'Components/InputA',
    component: BaseInput,
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

const textTemplate = (args) => <TextInput {...args} />

export const textInput = textTemplate.bind({})
textInput.args = {
    label: 'Text input',
    placeholder: 'placeholder'
}

const Email = (args) => <EmailInput {...args} />

export const emailInput = Email.bind({})
emailInput.args = {
    label: 'Email input',
    placeholder: 'placeholder'
}

const Template = (args) => <PasswordInput {...args} />

export const passwordInput = Template.bind({})
passwordInput.args = {
    label: 'Password',
    placeholder: 'placeholder'
}

const number = (args) => <NumberInput {...args} />

export const numberInput = number.bind({})
numberInput.args = {
    label: 'Number input',
    placeholder: 'select a number 1-5',
    max: 5,
    min: 1
}
