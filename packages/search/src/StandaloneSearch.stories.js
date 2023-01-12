import React from 'react'
import StandaloneSearch from './StandaloneSearch'

export default {
    title: 'Components/Search/Standalone search',
    component: StandaloneSearch
}

const Template = (args) => <StandaloneSearch {...args} />

export const SimpleSearch = Template.bind({})
SimpleSearch.args = {
    label: 'Label',
    buttonLabel: 'Search'
}

SimpleSearch.storyName = 'Standalone search'
