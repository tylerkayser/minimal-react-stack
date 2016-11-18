export const PING = 'PING'
export const PONG = 'PONG'

export function ping() {
  return {type: PING}
}

export function pong() {
  return {type: PONG}
}
