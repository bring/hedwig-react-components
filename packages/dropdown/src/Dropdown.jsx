import React from 'react'
import PropTypes from 'prop-types'
import '@posten-hedwig/core'
import '@posten-hedwig/label'
import '../dist/dropdown.scss'


const Dropdown = ({
    label,
    name,
    variant,
    id,
    selected,
    onChange,
    options,
    errorMessage,
    ariaControls
}) => {
    let variation = variant ? 'hw-dropdown--' + variant : ''
    let labelVariation = variant === 'line' ? 'hw-label--line' : ''
    if (errorMessage !== '') {
        variation += ' hw-input--error'
        labelVariation += ' hw-label--error'
    }

    var items = ''
    if (options) {
        items = options.map((item, index) => (
            <option value={item.value} key={index}>
                {' '}
                {item.label}{' '}
            </option>
        ))
    }

    return (
        <label className={`hw-label ${labelVariation}`}>
            {label}
            <select
                name={name}
                className={`hw-dropdown ${variation}`}
                id={id}
                value={selected}
                data-hw-dropdown={id}
                onChange={onChange}
                aria-controls={ariaControls}
            >
                {items}
            </select>
            {errorMessage && (
                <div className='hw-error hw-error--align-left hw-error--indented'>
                    {errorMessage}
                </div>
            )}
        </label>
    )
}

Dropdown.defaultProps = {
    variant: '',
    options: [],
    errorMessage: ''
}

Dropdown.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    variant: PropTypes.oneOf(['', 'white', 'line']),
    errorMessage: PropTypes.string,
    onChange: PropTypes.func,
    ariaControls: PropTypes.string
}

export default Dropdown
