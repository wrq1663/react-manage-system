import user from './data/user.json'
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    "get /api/getResouceList": (requst?:any) => {
      console.log(requst)
      return { ...user }
    }
  },
  {
    "post /api/login": (requst?:any) => {
      let loginForm = JSON.parse(requst.body)
      if(loginForm.username === 'admin' && loginForm.password === 'admin'){
        return 'admin'
      }
      if(loginForm.username === 'wrq' && loginForm.password === 'wrq'){
        return 'wrq'
      }
      return { ...user }
    }
  },
]