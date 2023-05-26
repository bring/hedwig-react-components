import React from 'react'
import BaseButton, { BaseButtonProps } from './BaseButton'

type PrimaryButton = Omit<BaseButtonProps, 'variant'>
const PrimaryButton: React.FC<PrimaryButton> = ({
    type,
    size,
    onClick,
    href,
    disabled,
    ariaControls,
    children
}) => (
    <BaseButton
        variant='primary'
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

export default PrimaryButton
