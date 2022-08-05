import React, { Fragment, PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginCheck: React.FC<PropsWithChildren> = (props) => {
  // const a = true
  // const navigate = useNavigate()
  // useEffect(() => {
  //   if (!a) navigate('/login')
  // })

  return (
    <Fragment>
      {props.children}
    </Fragment>
  )
}

export default LoginCheck