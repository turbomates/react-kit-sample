import React from 'react'
import { Link } from 'react-router-dom'
import './list-link.css'

interface Props {
  name: string
  description?: string
  to: string
}

export function ListLink({ name, description, to }: Props) {
  return (
    <li className="list-link">
      <Link className="list-link__link" to={to}>
        <span className="list-link__name">{name}</span>
        <span className="list-link__description">{description}</span>
      </Link>
    </li>
  )
}

export function ListLinkSkeleton() {
  return (
    <li className="list-link">
      <div className="list-link__link">
        <span className="list-link__name skeleton">International / Premier League</span>
      </div>
    </li>
  )
}
