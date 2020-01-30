import * as React from 'react'
import { useState, useEffect } from 'react'
import { formatStake } from './stake-pad.format'
import './stake-pad.css'

interface Props {
  initialStake?: string
  onStakeChange: (stake: number | string) => void
  onStakeViewChange: (stakeView: string) => void
  onClose: () => void
}

/**
 * @param initialStake Stake on component init
 * @param onStakeChange Callback will be handled when numeric representation of stake is changed
 * @param onStakeViewChange Callback will be handled when string representation of stake is changed
 * @param onClose Callback will be handled on close btn click
 */
export const StakePad = ({ initialStake = '', onStakeChange, onStakeViewChange, onClose }: Props) => {
  const [stake, setStake] = useState<string>(initialStake.toString())
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

  const stakeNumeric = Number(stake)

  useEffect(() => {
    onStakeChange(stakeNumeric)
  }, [stakeNumeric])

  useEffect(() => {
    onStakeViewChange(stake)
  }, [stake])

  function onSymbolAdd(symbol: string) {
    setStake(formatStake(stake, symbol))
  }

  function onSymbolDelete() {
    setStake(s => s.slice(0, -1))
  }

  return (
    <div className="stake-pad">
      <div className="stake-pad__overlay" onClick={onClose} />
      {digits.map(digit => (
        <button key={digit} className="stake-pad__btn" onClick={() => onSymbolAdd(digit)}>
          {digit}
          <span className="stake-pad__hint">{digit}</span>
        </button>
      ))}
      <button className="stake-pad__btn" onClick={() => onSymbolAdd('.')}>
        .
      </button>
      <button className="stake-pad__btn" onClick={onSymbolDelete}>
        Delete
      </button>
      <button className="stake-pad__btn stake-pad__btn_accent" onClick={onClose}>
        OK
      </button>
    </div>
  )
}
