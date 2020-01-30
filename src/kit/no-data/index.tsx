import React from 'react'
import './no-data.css'

interface Props {
  text: React.ReactNode
}

export function NoData({ text }: Props) {
  return <div className="no-data">{text}</div>
}

export default NoData
