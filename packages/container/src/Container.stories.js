import React from 'react'
import { Container } from './index'
import Readme from './Readme.mdx'
import {
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY
} from '@storybook/addon-docs'

export default {
    title: 'Layout/Container',
    component: Container,
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

const TemplateDefault = (args) => (
    <>
        Colors are for illustration purposes. Padding is green, margin is orange
        <div className='hw-helpers-margin-highlighter'>
            <Container {...args}>
                <p className='hw-helpers-margin-highlighter-content'>
                    Default container
                </p>
            </Container>
        </div>
    </>
)

export const containerDefault = TemplateDefault.bind({})

containerDefault.storyName = 'Default'

const TemplateSlim = (args) => (
    <>
        Colors are for illustration purposes. Padding is green, margin is orange
        <div className='hw-helpers-margin-highlighter'>
            <Container {...args}>
                <p className='hw-helpers-margin-highlighter-content'>
                    Default container
                </p>
            </Container>
        </div>
    </>
)

export const containerSlim = TemplateSlim.bind({})
containerSlim.args = {
    slim: true
}

const TemplatePt = (args) => (
    <>
        Colors are for illustration purposes. Padding is green, margin is orange
        <div className='hw-helpers-margin-highlighter'>
            <Container {...args}>
                <p className='hw-helpers-margin-highlighter-content'>
                    Default container
                </p>
            </Container>
        </div>
    </>
)

export const containerPt = TemplatePt.bind({})
containerPt.args = {
    pt: true
}

const TemplatePb = (args) => (
    <>
        Colors are for illustration purposes. Padding is green, margin is orange
        <div className='hw-helpers-margin-highlighter'>
            <Container {...args}>
                <p className='hw-helpers-margin-highlighter-content'>
                    Default container
                </p>
            </Container>
        </div>
    </>
)

export const containerPb = TemplatePb.bind({})
containerPb.args = {
    pb: true
}
