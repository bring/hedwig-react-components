import React from 'react'
import '../sass/body.scss'
import '../sass/typography.scss'

export default {
    title: 'Base/Typography'
}

const Template = (args) => (
    <>
        <p>
            Text with <span className='hw-text-small'>small</span> word
        </p>
        <p>
            Text with <span className='hw-text-smaller'>smaller</span> word
        </p>
        <p>
            Text with <span className='hw-text-uppercase'>uppercase</span> word
        </p>
        <p>
            Text with <span className='hw-text-title'>title</span> word
        </p>
        <p style={{ width: '100%' }}>
            <p className='hw-text-center'>Centered text</p>
            <p className='hw-text-right'>Right aligned text</p>
        </p>
        <p>
            <span className='hw-text-lead'>Lead text</span>
        </p>
        <p>
            <span className='hw-text-less-line-height'>Less line height</span>
        </p>
        <p>
            Text with a <span className='hw-text-bold'>bold</span> word
        </p>
        <p>
            Text with a <span className='hw-text-medium'>medium</span> word
        </p>
        <p>
            Text with a <span className='hw-text-regular'>regular</span> word
        </p>
        <p>
            Text with a <span className='hw-text-light'>light</span> word
        </p>
        <p>
            Text with a <span className='hw-text-technical'>technical</span> word
        </p>
        <p>
            Text with a <span className='hw-text-technical-title'>technical-title</span> word
        </p>
        <p>
            Text with a <span className='hw-text-caption-title'>caption-title</span> word
        </p>
        <p>
            Text with a <span className='hw-text-caption'>caption</span> word
        </p>
    </>
)

export const Other = Template.bind({})
