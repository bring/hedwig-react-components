import React from 'react'
import Readme from './Readme.mdx'
import { TextArea } from './index'
import {
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY
} from '@storybook/addon-docs'

export default {
    title: 'Components/TextArea',
    component: TextArea,
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

const Template = (args) => <TextArea {...args}>Textarea</TextArea>

export const Default = Template.bind({})

Default.args = {
    label: "testlabel",
    id: "testid",
    name: "testname",
    variant: '',
    rows: 3,
    cols:100,
    maxLength:300,
    placeholder: 'placeholder',
    onChange: () => {},
    readOnly: false,
    disabled: false,
    required: true,
    errorMessage:''

}

const TemplateLine = (args) => <TextArea {...args}>Textarea</TextArea>

export const Line = TemplateLine.bind({})

Line.args = {
    label: "testlabel",
    id: "testid",
    variant: 'line',
    rows: 3,
    cols:100,
    maxLength:300,
    placeholder: 'This is a placeholder',
    onChange: () => {},
    readOnly: false,
    disabled: false,
    required: true
}

const TemplateWhite = (args) => <TextArea {...args}>Textarea</TextArea>

export const White = Template.bind({})

White.args = {
    label: "white textarea",
    id: "testid",
    variant: 'white',
    rows: 3,
    cols:100,
    maxLength:300,
    placeholder: 'placeholder',
    onChange: () => {},
    readOnly: false,
    disabled: false,
    required: true

}

