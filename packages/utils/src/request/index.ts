// import { HttpResponse } from '@/common/interface'
import publicConfig, { typePending } from './config/index'
import config from './config/index'
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Canceler
} from 'axios'
import errorHandle from './handle/errorHandle'
const CancelToken = axios.CancelToken
console.log(process.env.NODE_ENV)
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro



let pending: typePending = {}

const removePending = (key: string, isRequest = false) => {
  if (pending[key] && isRequest) {
    pending[key]('取消重复请求')
  }
  delete pending[key]
}

const baseOpiton = {
  baseUrl,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  timeout: 10000
}

const HttpRequest = () => {
  const instance = axios.create(baseOpiton)
  //请求拦截
  instance.interceptors.request.use(
    config => {
      let isPublic = false
      publicConfig.publicPath.map(path => {
        isPublic = isPublic || path.test(config.url || '')
      })

      const token = localStorage.getItem('RMS_TOKEN')

      if (!isPublic && token) {
        (config.headers) && (config.headers.Authorization = token)
      }
      const key = config.url + '&' + config.method
      removePending(key, true)
      config.cancelToken = new CancelToken(c => {
        pending[key] = c
      })
      return config
    },
    err => {
      errorHandle(err)
      return Promise.reject(err)
    }
  )
  // 响应请求的拦截器
  instance.interceptors.response.use(
    res => {
      const key = res.config.url + '&' + res.config.method
      removePending(key)
      if (res.status === 200) {
        return Promise.resolve(res.data)
      } else {
        return Promise.reject(res)
      }
    },
    err => {
      errorHandle(err)
      return Promise.reject(err)
    }
  )

  return {
    get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
      const options = Object.assign(
        {
          method: 'get',
          url: url
        },
        config
      )
      return instance(options)
    },
    post(url: string, data?: unknown): Promise<AxiosResponse> {
      return instance({
        method: 'post',
        url: url,
        data: data
      })
    }
  }
}

export default HttpRequest()