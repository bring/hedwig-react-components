import React from 'react'
import PropTypes from 'prop-types'
import BaseInput from './BaseInput'

const PasswordInput = ({
    name,
    id,
    label,
    placeholder,
    variant,
    disabled,
    errorMessage,
    onChange
}) => (
    <BaseInput
        name={name}
        id={id}
        variant={variant}
        label={label}
        type='password'
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        errorMessage={errorMessage}
    />
)

PasswordInput.defaultProps = {
    disabled: false,
    type: 'text'
}

PasswordInput.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    variant: PropTypes.oneOf(['', 'white', 'line']),
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    errorMessage: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string
}

export default PasswordInput
