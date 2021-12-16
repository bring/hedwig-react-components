import React from 'react'
import PropTypes from 'prop-types'
import BaseButton from './BaseButton'

export default function PrimaryOutlineButton({
    type,
    size,
    onClick,
    href,
    disabled,
    ariaControls,
    children
}) {
    return (
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
}

PrimaryOutlineButton.defaultProps = {
    disabled: false,
    type: 'button'
}

PrimaryOutlineButton.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large', 'full', 'mobile-full']),
    type: PropTypes.oneOf(['button', 'submit']),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    ariaControls: PropTypes.string,
    href: PropTypes.string
}
