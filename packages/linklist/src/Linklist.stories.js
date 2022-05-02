import React from 'react'
import { BrowserRouter, Link as ReactLink } from 'react-router-dom'
import Linklist from './Linklist'
import { Link } from '@posten-hedwig/link'

export default {
    title: 'Components/LinkList/Default',
    component: Linklist
}

const Template = (args) => (
    <BrowserRouter>
        <Linklist {...args} />
    </BrowserRouter>
)

const links = [
    <Link href='https://www.bring.no'>Bring</Link>,
    <Link href='https://www.posten.no'>Posten</Link>,
    <Link href='https://www.mybring.no'>Mybring</Link>,
    <a href='https://www.bring.se'>Bring Sverige</a>,
    <ReactLink to='/invoice'>Invoice</ReactLink>
]

export const input = Template.bind({})
input.args = {
    links
}

input.storyName = 'Default'
