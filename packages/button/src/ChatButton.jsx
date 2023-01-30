import React from 'react'
import PropTypes from 'prop-types'
import BaseButton from './BaseButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentsAlt } from '@fortawesome/pro-solid-svg-icons'

const ChatButton = ({ fixed, onClick, disabled, ariaControls }) => {
    const chatVariant = fixed ? 'chat-fixed' : 'chat'
    return (
        <BaseButton
            variant={chatVariant}
            type='button'
            disabled={disabled}
            ariaControls={ariaControls}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faCommentsAlt} className='' size='2x' />
        </BaseButton>
    )
}

ChatButton.defaultProps = {
    fixed: false,
    disabled: false
}

ChatButton.propTypes = {
    fixed: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    ariaControls: PropTypes.string
}

export default ChatButton
