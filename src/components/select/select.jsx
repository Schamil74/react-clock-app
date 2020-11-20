import React from 'react'
import './select.scss'

const Select = props => {
    const { className, options, onChange, defaultCity } = props
    return (
        <select
            className={'select ' + className}
            defaultValue={options[defaultCity].utc}
            onChange={onChange}
        >
            {options.map((opt, ndx) => (
                <option key={ndx} value={opt.utc}>
                    {opt.name}
                </option>
            ))}
        </select>
    )
}

export default Select
