import React from 'react'
import StandaloneSearch from './StandaloneSearch'
import SearchSuggestion from './SearchSuggestion'

export default {
    title: 'Components/Search/Search suggestions - advanced',
    component: StandaloneSearch
}

const Template = (args) => (
    <StandaloneSearch {...args}>
        <SearchSuggestion title='test' subTitle='subtitle' href='#' />
        <SearchSuggestion title='test 2' subTitle='subtitle' href='#' />
    </StandaloneSearch>
)

export const SearchWithSuggestions = Template.bind({})
SearchWithSuggestions.args = {
    label: 'Label',
    buttonLabel: 'Search',
    extendedSuggestions: true
}

SearchWithSuggestions.storyName = 'Search suggestions - advanced'
