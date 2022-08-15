import { Canceler } from 'axios'

export default {
  baseUrl: {
    dev: 'http://localhost:3000',
    pro: 'xxx'
  },
  publicPath: [/^\/public/, /^\/login/]
}

export interface typePending {
  [key: string]: Canceler
}