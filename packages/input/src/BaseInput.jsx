import React from 'react'
import PropTypes from 'prop-types'
import '@posten-hedwig/core'
import '@posten-hedwig/label'
import '../sass/input.scss'

const BaseInput = ({
    name,
    id,
    label,
    placeholder,
    type,
    min,
    max,
    steps,
    disabled,
    maxLength,
    variant,
    errorMessage,
    onChange,
    readOnly,
    ref
}) => {
    let variation = variant !== '' ? 'hw-input--' + variant : ''
    let labelVariation = variant === 'line' ? 'hw-label--line' : ''
    if (errorMessage !== '') {
        variation += ' hw-input--error'
        labelVariation += ' hw-label--error'
    }

    return (
        <label className={'hw-label ' + labelVariation}>
            {label}
            <input
                name={name}
                id={id}
                className={'hw-input ' + variation}
                type={type}
                min={min}
                max={max}
                steps={steps}
                placeholder={placeholder}
                disabled={disabled}
                maxLength={maxLength}
                onChange={onChange}
                readOnly={readOnly}
                ref={ref}
            />
            {errorMessage && (
                <div className='hw-error hw-error--align-left hw-error--indented'>
                    {errorMessage}
                </div>
            )}
        </label>
    )
}

BaseInput.defaultProps = {
    disabled: false,
    type: 'text',
    errorMessage: '',
    variant: ''
}

BaseInput.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number', 'password', 'email']),
    onChange: PropTypes.func,
    variant: PropTypes.oneOf(['white', 'line', '']),
    maxLength: PropTypes.number,
    errorMessage: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool
}

export default BaseInput
