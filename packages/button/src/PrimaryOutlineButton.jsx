import React from 'react'
import PropTypes from 'prop-types'
import BaseButton from './BaseButton'

const PrimaryOutlineButton = ({
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

export default PrimaryOutlineButton
