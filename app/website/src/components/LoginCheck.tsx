import React, { Fragment, PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { selectToken } from 'models/user'
import { selectMenuList } from 'models/menu'



const LoginCheck: React.FC<PropsWithChildren> = (props) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector(selectToken)
  const menuList = useSelector(selectMenuList)

  //判断token是否存在
  useEffect(() => {
    if (!token) navigate('/login')
  }, [navigate, token])

  useEffect(() => {
    //初始化菜单
    if (!menuList.length) dispatch({ type: 'menu/fetchMenuTree' })
    console.log("🚀 ~ file: LoginCheck.tsx ~ line 25 ~ useEffect ~ menuList", menuList)
  }, [menuList, dispatch])

  return (
    <Fragment>
      {props.children}
    </Fragment>
  )
}

export default LoginCheck