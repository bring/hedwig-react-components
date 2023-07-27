import React from 'react'
import BaseButton, { BaseButtonProps } from './BaseButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentsAlt } from '@fortawesome/pro-solid-svg-icons'

type ChatButtonProps = { fixed?: boolean } & Pick<
    BaseButtonProps,
    'onClick' | 'disabled' | 'ariaControls' | 'ariaLabel'
>
const ChatButton: React.FC<ChatButtonProps> = ({
    fixed = false,
    onClick,
    disabled = false,
    ariaControls,
    ariaLabel
}) => {
    const chatVariant = fixed ? 'chat-fixed' : 'chat'
    return (
        <BaseButton
            variant={chatVariant}
            type='button'
            disabled={disabled}
            ariaControls={ariaControls}
            onClick={onClick}
            ariaLabel={ariaLabel}
        >
            <FontAwesomeIcon icon={faCommentsAlt} className='' size='2x' />
        </BaseButton>
    )
}

export default ChatButton
