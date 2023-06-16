import React from 'react'
import '../sass/button.scss'
import '@posten-hedwig/core'

export interface BaseButtonProps {
    variant?:
        | 'chat'
        | 'chat-fixed'
        | 'primary'
        | 'secondary'
        | 'outline-primary'
        | 'outline-secondary'
        | 'outline-white'
    type?: 'button' | 'submit'
    size?: 'small' | 'medium' | 'large' | 'full' | 'mobile-full'
    onClick?: () => void
    disabled?: boolean
    ariaControls?: string
    href?: string
    children: React.ReactNode
}

const BaseButton: React.FC<BaseButtonProps> = ({
    variant,
    type = 'button',
    size,
    onClick,
    href,
    disabled = false,
    ariaControls,
    children
}) => {
    const buttonVariant = variant ? 'hwc-button--' + variant : ''
    const buttonSize = size ? 'hwc-button--' + size : ''

    if (href) {
        return (
            <a
                href={href}
                className={`hwc-button ${buttonVariant} ${buttonSize}`}
                onClick={onClick}

                // `disabled` is not a valid attribute on an anchor tag
                // there should be no need to disable links anyways
                // disabled={disabled}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                type={type}
                className={`hwc-button ${buttonVariant} ${buttonSize}`}
                onClick={onClick}
                disabled={disabled}
                aria-controls={ariaControls}
            >
                {children}
            </button>
        )
    }
}

export default BaseButton
