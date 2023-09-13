import React from 'react'
import PropTypes from 'prop-types'
import BaseInput from './BaseInput'

const EmailInput = ({
    name,
    id,
    label,
    placeholder,
    disabled,
    maxLength,
    errorMessage,
    variant,
    onChange,
    readOnly,
    required,
    ref
}) => (
    <BaseInput
        name={name}
        id={id}
        label={label}
        type='email'
        variant={variant}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        onChange={onChange}
        errorMessage={errorMessage}
        readOnly={readOnly}
        required={required}
    />
)

EmailInput.defaultProps = {
    disabled: false
}

EmailInput.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    variant: PropTypes.oneOf(['', 'white', 'line']),
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    maxLength: PropTypes.number,
    onChange: PropTypes.func,
    errorMessage: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool
}

export default EmailInput
