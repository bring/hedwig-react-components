import React from 'react'
import '../sass/typography.scss'

export default {
    title: 'Base/Typography/Headings'
}

const Template = (args) => (
    <div className='hw-theme-bring'>
        <h1>H1 title</h1>
        <h2>H2 title</h2>
        <h3>H3 title</h3>
        <h4>H4 title</h4>
        <h5>H5 title</h5>
        <h6>H6 title</h6>
        <p>Headings with sizes different than the tags:</p>
        <h1 className='hw-h1-display'>.hw-h1-display</h1>
        <h1 className='hw-h1'>.hw-h1</h1>
        <h1 className='hw-h2'>.hw-h2</h1>
        <h1 className='hw-h3'>.hw-h3</h1>
        <h1 className='hw-h4'>.hw-h4</h1>
        <h1 className='hw-h5'>.hw-h5</h1>
        <h1 className='hw-h6'>.hw-h6</h1>
    </div>
)

export const Bring = Template.bind({})
