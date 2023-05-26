import React from 'react'
import BaseButton, { BaseButtonProps } from './BaseButton'

type SecondaryOutlineButtonProps = Omit<BaseButtonProps, 'variant'>
const SecondaryOutlineButton: React.FC<SecondaryOutlineButtonProps> = ({
    type,
    size,
    onClick,
    href,
    disabled,
    ariaControls,
    children
}) => (
    <BaseButton
        variant='outline-secondary'
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

export default SecondaryOutlineButton
