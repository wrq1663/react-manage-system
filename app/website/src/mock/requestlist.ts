import user from './data/user.json'
export default [
  {
    "get /api/getResouceList": (resquest: any) => {
      return { ...user }
    }
  },
]