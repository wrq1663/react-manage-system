import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import config from './config/index'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const baseOpiton = {
    baseUrl,
    headers: {
      // 'Content-Type': 'application/json;charset=utf-8'
    },
    timeout: 10000
  }

/**
 * 
 */
 const HttpRequest = () => {
    const instance = axios.create(baseOpiton)
    //请求拦截
    instance.interceptors.request.use(
      config => {
        return config
      },
      err => {
        return Promise.reject(err)
      }
    )
    // 响应请求的拦截器
    instance.interceptors.response.use(
      res => {
          return Promise.resolve(res.data)
      },
      err => {
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
          url,
          data
        })
      }
    }
  }

  const request = HttpRequest()

export default request