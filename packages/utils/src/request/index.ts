import Axios from 'axios'

interface IAnyObj {
  [index: string]: unknown
}

interface FcResponse<T> {
  errno: string
  errmsg: string
  data: T
}

// const get =  <T,>(url: string, params: IAnyObj = {}): Promise<Promise.then>=>{

// }