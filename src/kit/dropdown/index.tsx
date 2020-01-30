import React from 'react'

import './dropdown.css'

interface Props {
  value: string
  options: string[]
  onChange: (newValue: string) => void
}

export function Dropdown({ value, onChange, options }: Props) {
  const isEmpty = options.length === 1

  if (isEmpty)
    return (
      <div className="dropdown dropdown_empty">
        <div className="dropdown__select dropdown__select_empty">{options[0]}</div>
      </div>
    )

  return (
    <div className="dropdown">
      <select className="dropdown__select" value={value} onChange={e => onChange(e.target.value)}>
        {options.map(option => (
          <option className="dropdown__option" key={`${option}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
