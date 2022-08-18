import MainLayout from "../layout/mainLayout";
import Login from "../page/login";
import Home from "../page/home"
import MenuManage from "page/system/menu";
import UserManage from "page/system/user";
import RoleManage from "page/system/role";
// import { lazy } from "react";

// const Login = lazy(() => import('../page/login'))
// const Test = lazy(() => import('../page/test/index'))
// const MainLayout = lazy(() => import('../layout/mainLayout'))

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/',
    element: <MainLayout />,
  },
  {
    path:'/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />,
    caseSensitive: true
  },
  //公共管理
  {
    path: '/system',
    // element: <MainLayout />,
    children: [
      {
        path: "/system/user",
        element: <UserManage />,
      },
      {
        path: "/system/role",
        element: <RoleManage />,
      },
      {
        path: "/system/menu",
        element: <MenuManage />,
      }
    ]
  },
]