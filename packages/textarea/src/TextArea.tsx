import React, { ChangeEventHandler } from 'react'
import '@posten-hedwig/core'
import '../sass/textarea.scss'

export type TextAreaVariant = 'white' | 'line' | ''

interface TextAreaProps {
    id: string
    name: string
    label: string
    variant?: TextAreaVariant
    rows?: number
    cols?: number
    maxLength?: number
    placeholder?: string
    onChange?:() => void
    disabled?: boolean
    readOnly?: boolean
    required?: boolean
    errorMessage?: string
}

const TextArea: React.FC<TextAreaProps> = ({ id, name, label, variant, rows, cols, maxLength, placeholder, onChange, disabled, errorMessage, readOnly, required }) => {

    let labelVariant = variant === 'line' ? 'hwc-label--line' : ''
    let variation = variant ? 'hwc-textarea--' + variant : ''
    if (errorMessage) {
        labelVariant += ' hwc-label--error'
        variation += ' hwc-textarea--error'
    }


    return (
        <label className={'hwc-label ' + labelVariant}>
            {label}
            <textarea
                id={id}
                name={name}
                className={'hwc-textarea ' + variation}
                rows={rows}
                cols={cols}
                maxLength={maxLength}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                readOnly={readOnly}
                required={required}
            >
            </textarea>
            {errorMessage && (
                <div className='hw-error hw-error--align-left'>
                    {errorMessage}
                </div>
            )}
        </label>
    )
}

export default TextArea
