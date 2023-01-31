import React from 'react'
import PropTypes from 'prop-types'
import '../sass/button.scss'

const BaseButton = ({
    variant,
    type,
    size,
    onClick,
    href,
    disabled,
    ariaControls,
    children
}) => {
    const buttonVariant = variant !== '' ? 'hw-button--' + variant : ''
    const buttonSize = size ? 'hw-button--' + size : ''

    if (href) {
        return (
            <a
                href={href}
                className={`hw-button ${buttonVariant} ${buttonSize}`}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                type={type}
                className={`hw-button ${buttonVariant} ${buttonSize}`}
                onClick={onClick}
                disabled={disabled}
                aria-controls={ariaControls}
            >
                {children}
            </button>
        )
    }
}

BaseButton.defaultProps = {
    variant: '',
    type: 'button',
    disabled: false
}

BaseButton.propTypes = {
    variant: PropTypes.oneOf([
        '',
        'chat',
        'chat-fixed',
        'primary',
        'secondary',
        'outline-primary',
        'outline-secondary',
        'outline-white'
    ]),
    type: PropTypes.oneOf(['button', 'submit']),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'full', 'mobile-full']),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    ariaControls: PropTypes.string,
    href: PropTypes.string
}

export default BaseButton
