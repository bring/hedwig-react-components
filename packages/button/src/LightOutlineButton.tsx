import React from 'react'
import BaseButton, { BaseButtonProps } from './BaseButton'

type LightOutlineButtonProps = Omit<BaseButtonProps, 'variant'>
const LightOutlineButton: React.FC<LightOutlineButtonProps> = ({
    type,
    size,
    onClick,
    href,
    disabled,
    ariaControls,
    children
}) => (
    <BaseButton
        variant='outline-white'
        type={type}
        size={size}
        disabled={disabled}
        ariaControls={ariaControls}
        onClick={onClick}
        href={href}
    >
        {children}
    </BaseButton>
)

export default LightOutlineButton
