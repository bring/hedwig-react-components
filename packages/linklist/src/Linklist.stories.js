import React from 'react'
import Linklist from './Linklist'
import { Link } from '@posten-hedwig/link'

export default {
    title: 'Components/LinkList/Default',
    component: Linklist
}

const Template = (args) => <Linklist {...args} />

const links = [
    <Link href='https://www.bring.no'>Bring</Link>,
    <Link href='https://www.posten.no'>Posten</Link>,
    <Link href='https://www.mybring.no'>Mybring</Link>
]

export const input = Template.bind({})
input.args = {
    links
}

input.storyName = 'Default'
