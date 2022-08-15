import { LoginFormData } from "typing/service"
import request from "../utils/request"

export const getUserInfo = () => {
    return request.get('/api/getResouceList')
}

export const login = (data: LoginFormData) => {
    return request.post('/api/login', data)
}