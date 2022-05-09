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
                    Slim container
                </p>
            </Container>
        </div>
    </>
)

export const containerSlim = TemplateSlim.bind({})
containerSlim.args = {
    slim: true
}

containerSlim.parameters = {
    docs: {
        source: {
            code: '<Container slim>Slim container</Container>',
            language: 'jsx',
            type: 'auto'
        }
    }
}

const TemplatePt = (args) => (
    <>
        Colors are for illustration purposes. Padding is green, margin is orange
        <div className='hw-helpers-margin-highlighter'>
            <Container {...args}>
                <p className='hw-helpers-margin-highlighter-content'>
                    Container with padding top
                </p>
            </Container>
        </div>
    </>
)

export const containerPt = TemplatePt.bind({})
containerPt.args = {
    pt: true
}

containerPt.parameters = {
    docs: {
        source: {
            code: '<Container pt>Container with padding top</Container>',
            language: 'jsx',
            type: 'auto'
        }
    }
}

const TemplatePb = (args) => (
    <>
        Colors are for illustration purposes. Padding is green, margin is orange
        <div className='hw-helpers-margin-highlighter'>
            <Container {...args}>
                <p className='hw-helpers-margin-highlighter-content'>
                    Container with padding bottom
                </p>
            </Container>
        </div>
    </>
)

export const containerPb = TemplatePb.bind({})
containerPb.args = {
    pb: true
}

containerPb.parameters = {
    docs: {
        source: {
            code: '<Container pb>Container with padding bottom</Container>',
            language: 'jsx',
            type: 'auto'
        }
    }
}
