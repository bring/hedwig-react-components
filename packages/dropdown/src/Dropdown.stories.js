import React from 'react'
import Dropdown from './Dropdown'
import Readme from './Readme.mdx'
import {
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY
} from '@storybook/addon-docs'

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
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

//Default dropdown
const TemplateDefault = (args) => <Dropdown {...args} />

export const defaultDropdown = TemplateDefault.bind({})
defaultDropdown.args = {
    label: 'Label',
    options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
    ]
}

//White dropdown
const TemplateWhite = (args) => <Dropdown {...args} />

export const whiteDropdown = TemplateWhite.bind({})
whiteDropdown.args = {
    label: 'White dropdown',
    variant: 'white',
    options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
    ]
}

//Default dropdown
const TemplateLine = (args) => <Dropdown {...args} />

export const lineDropdown = TemplateLine.bind({})
lineDropdown.args = {
    label: 'Label',
    variant: 'line',
    options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
    ]
}
