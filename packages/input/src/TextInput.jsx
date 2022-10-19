import React from 'react'
import PropTypes from 'prop-types'
import BaseInput from './BaseInput'

const TextInput = ({
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
    ref
}) => (
    <BaseInput
        name={name}
        id={id}
        label={label}
        type='text'
        variant={variant}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        onChange={onChange}
        errorMessage={errorMessage}
        readOnly={readOnly}
    />
)

TextInput.defaultProps = {
    disabled: false
}

TextInput.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    variant: PropTypes.oneOf(['', 'white', 'line']),
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    maxLength: PropTypes.number,
    onChange: PropTypes.func,
    errorMessage: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string
}

export default TextInput