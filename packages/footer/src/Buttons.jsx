import React from 'react'
import { Block } from '@posten-hedwig/block'

const Buttons = ({ buttons }) =>
    buttons.map((button, index) => (
        <Block mb='small-2' classList='hw-footer__button' key={index}>
            {button}
        </Block>
    ))

export default Buttons
