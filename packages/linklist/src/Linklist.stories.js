import React from 'react'
import Readme from './Readme.mdx'
import { LinkList, LinkListItem } from './index'
import {
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY
} from '@storybook/addon-docs'

export default {
    title: 'Components/LinkList',
    component: LinkList,
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
    <LinkList {...args}>
        <LinkListItem>
            <a href='#'>A link</a>
        </LinkListItem>
        <LinkListItem>
            <a href='#'>Another link</a>
        </LinkListItem>
    </LinkList>
)

export const Default = Template.bind({})
