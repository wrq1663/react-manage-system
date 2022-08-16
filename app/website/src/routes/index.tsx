import MainLayout from "../layout/mainLayout";
import Login from "../page/login";
import Test from "../page/test/index"
// import { lazy } from "react";

// const Login = lazy(() => import('../page/login'))
// const Test = lazy(() => import('../page/test/index'))
// const MainLayout = lazy(() => import('../layout/mainLayout'))

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/',
    element: <MainLayout />,
    children: [{
      index: true,
      element: <Test />
    }]
  },
  {
    path: '/login',
    element: <Login />,
    caseSensitive: true
  },
  {
    path: '/index',
    element: <MainLayout />,
    children: [
      {
        path: "/index/home",
        element: <Test />,
      }
    ]
  }
]