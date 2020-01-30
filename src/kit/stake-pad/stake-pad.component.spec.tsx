import * as React from 'react'
import { shallow } from 'enzyme'
import { StakePad } from './stake-pad.component'
import * as sinon from 'sinon'

test('click on close button should call onClose callback', () => {
  const onStakeChange = sinon.fake()
  const onStakeViewChange = sinon.fake()
  const onClose = sinon.spy()

  const stakePad = shallow(
    <StakePad onStakeChange={onStakeChange} onStakeViewChange={onStakeViewChange} onClose={onClose} />
  )

  stakePad.find('.stake-pad__btn_accent').simulate('click')

  expect(onClose.callCount).toBe(1)
})
