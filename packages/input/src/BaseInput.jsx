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
    let variation = variant !== '' ? 'hwc-input--' + variant : ''
    let labelVariation = variant === 'line' ? 'hwc-label--line' : ''
    if (errorMessage !== '') {
        variation += ' hwc-input--error'
        labelVariation += ' hwc-label--error'
    }

    return (
        <label className={'hwc-label ' + labelVariation}>
            {label}
            <input
                name={name}
                id={id}
                className={'hwc-input ' + variation}
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
                <div className='hwc-error hwc-error--align-left hwc-error--indented'>
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
