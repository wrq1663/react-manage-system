import user from './data/user.json'
import menuInfo from './data/menuInfo.json'
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    "get /api/getResouceList": (requst?: any) => {
      console.log(requst)
      return { ...user }
    }
  },
  {
    "post /api/login": (requst?: any) => {
      let loginForm = JSON.parse(requst.body)
      if (loginForm.username === 'admin' && loginForm.password === 'admin') {
        return {
          code: 200,
          data: {
            token: 'admin&wrq'
          },
          msg: '登录成功'
        }
      }
      if (loginForm.username === 'wrq' && loginForm.password === 'wrq') {
        return {
          code: 200,
          data: {
            token: 'guest&wrq'
          },
          msg: '登录成功'
        }
      }
      return {
        code: 1001,
        data: [],
        msg: '用户名或者密码不正确'
      }
    }
  },
  {
    "post /api/menu/get": () => {
      return {...menuInfo}
    }
  },
]