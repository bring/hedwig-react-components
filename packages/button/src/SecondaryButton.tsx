import React from 'react'
import BaseButton, { BaseButtonProps } from './BaseButton'

type SecondaryButtonProps = Omit<BaseButtonProps, 'variant'>
const SecondaryButton: React.FC<SecondaryButtonProps> = ({
    type,
    size,
    onClick,
    href,
    disabled,
    ariaControls,
    children
}) => (
    <BaseButton
        variant='secondary'
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

export default SecondaryButton
