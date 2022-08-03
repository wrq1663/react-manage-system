import user from './data/user.json'
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    "get /api/getResouceList": (requst?:any) => {
      console.log(requst)
      return { ...user }
    }
  },
]