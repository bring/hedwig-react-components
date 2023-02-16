import React from 'react'
import Readme from './Readme.mdx'
import { Link, SimpleLink, SolidLink, InvertedLink } from './index'
import {
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY
} from '@storybook/addon-docs'

export default {
    title: 'Components/Link',
    component: Link,
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

const Template = (args) => <Link {...args}>This is a link</Link>

export const Default = Template.bind({})

Default.args = {
    href: '#'
}

const SimpleTemplate = (args) => (
    <SimpleLink {...args}>
        Link with no underline to be used in other components that are also
        links (i.e Cards)
    </SimpleLink>
)

export const Simple = SimpleTemplate.bind({})

Simple.args = {
    href: '#'
}

const SolidTemplate = (args) => (
    <SolidLink {...args}>This is a solid link</SolidLink>
)

export const Solid = SolidTemplate.bind({})
Solid.args = {
    href: '#'
}

const InvertedTemplate = (args) => (
    <InvertedLink {...args}>This is an inverted link</InvertedLink>
)

export const Inverted = InvertedTemplate.bind({})
Inverted.args = {
    href: '#'
}
