import React from 'react'
import Readme from './Readme.mdx'
import { Core } from '@posten-hedwig/core'
import { Base } from '../../base'
import { Typography } from './index'
import {
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY
} from '@storybook/addon-docs'

export default {
    title: 'Base/Typography',
    component: Typography,
    parameters: {
        docs: {
            page: () => (
                <>
                    <Readme />
                    <Description />
                    <Primary />
                    <Stories />
                </>
            )
        }
    }
}

const Template = (args) => <div {...args}>
<p>
            Text with <span className='hwc-text-small'>small</span> word
        </p>
        <p>
            Text with <span className='hwc-text-smaller'>smaller</span> word
        </p>
        <p>
            Text with <span className='hwc-text-uppercase'>uppercase</span> word
        </p>
        <p>
            Text with <span className='hwc-text-title'>title</span> word
        </p>
        <p style={{ width: '100%' }}>
            <p className='hwc-text-center'>Centered text</p>
            <p className='hwc-text-right'>Right aligned text</p>
        </p>
        <p>
            <span className='hwc-text-lead'>Lead text</span>
        </p>
        <p>
            <span className='hwc-text-less-line-height'>Less line height</span>
        </p>
        <p>
            Text with a <span className='hwc-text-bold'>bold</span> word
        </p>
        <p>
            Text with a <span className='hwc-text-medium'>medium</span> word
        </p>
        <p>
            Text with a <span className='hwc-text-regular'>regular</span> word
        </p>
        <p>
            Text with a <span className='hwc-text-light'>light</span> word
        </p>
        <p>
            Text with a <span className='hwc-text-technical'>technical</span>{' '}
            word
        </p>
        <p>
            Text with a{' '}
            <span className='hwc-text-technical-title'>technical-title</span>{' '}
            word
        </p>
        <p>
            Text with a{' '}
            <span className='hwc-text-caption-title'>caption-title</span> word
        </p>
        <p>
            Text with a <span className='hwc-text-caption'>caption</span> word
        </p>

</div>

export const Default = Template.bind({})

const TemplatePosten = (args) => (
    <>
        <h1>H1 title</h1>
        <h2>H2 title</h2>
        <h3>H3 title</h3>
        <h4>H4 title</h4>
        <h5>H5 title</h5>
        <h6>H6 title</h6>
        <p>Headings with sizes different than the tags</p>
        <h1 className='hwc-h1-display'>.hwc-h1-display</h1>
        <h1 className='hwc-h1'>.hwc-h1</h1>
        <h1 className='hwc-h2'>.hwc-h2</h1>
        <h1 className='hwc-h3'>.hwc-h3</h1>
        <h1 className='hwc-h4'>.hwc-h4</h1>
        <h1 className='hwc-h5'>.hwc-h5</h1>
        <h1 className='hwc-h6'>.hwc-h6</h1>
    </>
)

export const PostenHeaders = TemplatePosten.bind({})


const TemplateBring = (args) => (
    <div className='hwc-theme-bring'>
        <h1>H1 title</h1>
        <h2>H2 title</h2>
        <h3>H3 title</h3>
        <h4>H4 title</h4>
        <h5>H5 title</h5>
        <h6>H6 title</h6>
        <p>Headings with sizes different than the tags:</p>
        <h1 className='hwc-h1-display'>.hwc-h1-display</h1>
        <h1 className='hwc-h1'>.hwc-h1</h1>
        <h1 className='hwc-h2'>.hwc-h2</h1>
        <h1 className='hwc-h3'>.hwc-h3</h1>
        <h1 className='hwc-h4'>.hwc-h4</h1>
        <h1 className='hwc-h5'>.hwc-h5</h1>
        <h1 className='hwc-h6'>.hwc-h6</h1>
    </div>
)

    export const BringHeaders = TemplateBring.bind({})