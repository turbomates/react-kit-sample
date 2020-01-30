import React from 'react'
import classcat from 'classcat'

import './input.css'

interface Props {
  onChange: (v: string) => void
  value: string
  className?: string
  placeholder?: string
  size?: 'regular' | 'large'
  type?: string
}

export function Input({ value, onChange, size, placeholder = '', className, type, ...rest }: Props) {
  return (
    <input
      type={type || 'text'}
      className={classcat(['input', { 'input_size-large': size === 'large' }, className])}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
      {...rest}
    />
  )
}
