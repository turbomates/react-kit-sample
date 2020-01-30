import { formatStake } from './stake-pad.format'

test('Should add symbols to stake', () => {
  expect(formatStake('', '2')).toBe('2')
  expect(formatStake('42', '0')).toBe('420')
})

test('If coma pressed on empty stake show 0.', () => {
  expect(formatStake('', '.')).toBe('0.')
})

test('Should not add second leading zero', () => {
  expect(formatStake('0', '0')).toBe('0')
})

test('Should replace leading zero', () => {
  expect(formatStake('0', '2')).toBe('2')
})

test('Should not replace leading zero if comma pressed', () => {
  expect(formatStake('0', '.')).toBe('0.')
})

test('Dont allow to add more than 2 digits after coma', () => {
  expect(formatStake('123.32', '2')).toBe('123.32')
})
