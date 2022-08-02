import request from "../utils/request"

export const getUserInfo = ()=>{
 return request({
    method:'GET',
    url:'/api/getResouceList',
  })
}