import React from 'react'
import PropTypes from 'prop-types'
import BaseInput from './BaseInput'

const NumberInput ({
    name,
    id,
    label,
    placeholder,
    min,
    max,
    steps,
    variant,
    disabled,
    errorMessage,
    onChange,
    readOnly
}) => (
    <BaseInput
        name={name}
        id={id}
        variant={variant}
        label={label}
        type='number'
        min={min}
        max={max}
        steps={steps}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        errorMessage={errorMessage}
        readOnly={readOnly}
    />
)

NumberInput.defaultProps = {
    disabled: false
}

NumberInput.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    variant: PropTypes.oneOf(['', 'white', 'line']),
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func,
    errorMessage: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number
}

export default NumberInput