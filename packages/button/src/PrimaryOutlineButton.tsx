import React from 'react'
import BaseButton, { BaseButtonProps } from './BaseButton'

type PrimaryOutlineButtonProps = Omit<BaseButtonProps, 'variant'>
const PrimaryOutlineButton: React.FC<PrimaryOutlineButtonProps> = ({
    type,
    size,
    onClick,
    href,
    disabled,
    ariaControls,
    children
}) => (
    <BaseButton
        variant='outline-primary'
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

export default PrimaryOutlineButton
