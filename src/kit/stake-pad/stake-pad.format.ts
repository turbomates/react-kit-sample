/**
 * @param stake current stake
 * @param symbol adding symbol
 */
export function formatStake(stake: string, symbol: string): string {
  if (stake.length === 0 && symbol === '.') return '0.'
  if (stake === '0' && symbol !== '.') return symbol
  if (stake.indexOf('.') !== -1 && symbol === '.') return stake
  if (stake.indexOf('.') !== -1 && stake.split('.')[1].length === 2) return stake
  if (stake.length > 10) return stake
  return stake + symbol
}
