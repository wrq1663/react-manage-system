import MainLayout from "../layout/mainLayout";
import Login from "../page/login";
import Test from "../page/test/index"

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
    caseSensitive:true
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