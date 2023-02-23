import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Dropdown from './Dropdown'

describe('Dropdown component', () => {
    it('renders label and select element with options', () => {
        const options = [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' }
        ]
        const label = 'Dropdown Label'
        const { getByText, getByLabelText } = render(
            <Dropdown label={label} options={options} />
        )

        expect(getByText(label)).toBeInTheDocument()
        expect(getByLabelText(label)).toHaveValue(options[0].value)
        options.forEach((option) => {
            expect(getByText(option.label)).toBeInTheDocument()
        })
    })

    it('calls onChange prop when a different option is selected', () => {
        const options = [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' }
        ]
        const label = 'Dropdown Label'
        const onChange = jest.fn()
        const { getByText, getByLabelText } = render(
            <Dropdown label={label} options={options} onChange={onChange} />
        )

        fireEvent.change(getByLabelText(label), {
            target: { value: options[1].value }
        })

        expect(onChange).toHaveBeenCalledTimes(1)
    })

    it('displays error message when provided', () => {
        const options = [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' }
        ]
        const label = 'Dropdown Label'
        const errorMessage = 'Error message'
        const { getByText } = render(
            <Dropdown
                label={label}
                options={options}
                errorMessage={errorMessage}
            />
        )

        expect(getByText(errorMessage)).toBeInTheDocument()
    })
})
