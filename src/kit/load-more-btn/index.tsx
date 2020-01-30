import React from 'react'

import './load-more-btn.css'

interface Props {
  onClick: () => any
  isLoading: boolean
}

export function LoadMoreBtn({ onClick, isLoading }: Props) {
  if (isLoading) {
    return <div className="load-more load-more_loading" />
  }

  return (
    <button className="load-more" onClick={onClick}>
      Show more
    </button>
  )
}

export default LoadMoreBtn
