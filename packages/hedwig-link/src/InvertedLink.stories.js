import React from 'react'
import InvertedLink from './InvertedLink'

export default {
    title: 'Components/Link/Inverted',
    component: InvertedLink,
    parameters: {
        backgrounds: {
            default: 'gray-dark',
            values: [
                { name: 'gray-dark', value: '#6E6E6E' },
                { name: 'black', value: '#000000' }
            ]
        }
    }
}

const Template = (args) => (
    <InvertedLink {...args}>This is an inverted link</InvertedLink>
)

export const input = Template.bind({})
input.args = {
    href: '#'
}

input.storyName = 'Inverted'
