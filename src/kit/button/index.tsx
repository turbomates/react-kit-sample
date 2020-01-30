import React from 'react'
import { Link } from 'react-router-dom'
import classcat from 'classcat'

import './button.css'

interface Props {
  children: string
  className?: string
  to?: string
  externalUrl?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export function Button({ children, className, to, type, externalUrl, onClick }: Props) {
  if (to) {
    return (
      <Link to={to} className={classcat(['button', className])}>
        {children}
      </Link>
    )
  }

  if (externalUrl) {
    return (
      <a href={externalUrl} className={classcat(['button', className])}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classcat(['button', className])}>
      {children}
    </button>
  )
}
