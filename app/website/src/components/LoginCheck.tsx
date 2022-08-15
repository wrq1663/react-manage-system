import React, { Fragment, PropsWithChildren } from 'react'
import { login } from 'service/user'
// import { useNavigate } from 'react-router-dom'

const LoginCheck: React.FC<PropsWithChildren> = (props) => {
  // const a = true
  // const navigate = useNavigate()
  // useEffect(() => {
  //   if (!a) navigate('/login')
  // })

  login({
    username:'wrq',
    password:'wrq'
  }).then(res=>{
    console.log(res);
    
  })

  return (
    <Fragment>
      {props.children}
    </Fragment>
  )
}

export default LoginCheck