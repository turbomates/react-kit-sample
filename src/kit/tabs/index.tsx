import React from 'react'
import classcat from 'classcat'

import './tabs.css'

interface Props {
  tabs: (string | [string, string])[] // [value, label]
  activeTab: string
  setActiveTab: (tab: string) => void
  className?: string
}

function Tabs({ tabs, activeTab, setActiveTab, className }: Props) {
  if (tabs.length <= 1) {
    return null
  }

  return (
    <div className={classcat(['tabs', className])}>
      {tabs.map(tab => {
        const [value, label] = typeof tab === 'string' ? [tab, tab] : tab

        return (
          <div
            key={value}
            onClick={() => setActiveTab(value)}
            className={classcat(['tab', { active: value === activeTab }])}
          >
            <span>{label}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Tabs
