import request from "../utils/request"

export const getMenuByToken = () => {
  return request.post('/api/menu/get')
}