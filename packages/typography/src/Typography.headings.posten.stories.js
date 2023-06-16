import React from 'react'
import '../dist/typography.css'

export default {
    title: 'Base/Typography/HeadingsPosten'
}

const Template = (args) => (
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

export const Posten = Template.bind({})
