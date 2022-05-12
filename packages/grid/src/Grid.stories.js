import React from 'react'
import { Grid, GridItem } from './index'
import Readme from './Readme.mdx'
import {
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY
} from '@storybook/addon-docs'

export default {
    title: 'Layout/Grid',
    component: Grid,
    subcomponents: { GridItem },
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
            <Grid {...args}>
                <GridItem size='one-half'>
                    <p className='hw-helpers-margin-highlighter-content'>
                        Item 1
                    </p>
                </GridItem>
                <GridItem size='one-half'>
                    <p className='hw-helpers-margin-highlighter-content'>
                        Item 2
                    </p>
                </GridItem>
                <GridItem size='one-half'>
                    <p className='hw-helpers-margin-highlighter-content'>
                        Item 3
                    </p>
                </GridItem>
                <GridItem size='one-half'>
                    <p className='hw-helpers-margin-highlighter-content'>
                        Item 4
                    </p>
                </GridItem>
                <GridItem size='one-half'>
                    <p className='hw-helpers-margin-highlighter-content'>
                        Item 5
                    </p>
                </GridItem>
            </Grid>
        </div>
    </>
)

export const GridDefault = TemplateDefault.bind({})

GridDefault.storyName = 'Default'
