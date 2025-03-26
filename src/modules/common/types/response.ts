export interface Response {
  message: Message
  status: 'success' | 'error' | 'info'
  data?: any
}

export class TRPCError extends Error implements Response {
  message: Message
  status: 'error'
  data?: any

  constructor(message: Message) {
    super()
    this.message = message
    this.status = 'error'
    this.data = undefined
  }
}
