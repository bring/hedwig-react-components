import React from 'react'
import '../sass/typography.scss'

export default {
    title: 'Base/Typography'
}

const Template = (args) => (
    <>
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
    </>
)

export const Other = Template.bind({})
