import './less/index.less'

import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const onFinish = (val: any) => {
  console.log(val)
}

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-wrap">
        <div className="main-content">
          <div className="sider-title">
            <div className="title-logo"></div>
            <span className='title'>Manage</span>
          </div>
          <div className="login-form">
            <Form
              name="login"
              onFinish={onFinish}
            >
              <Form.Item
                wrapperCol={{ span: 16, offset: 4 }}
                name="username"
                rules={[{ required: true, message: '请输入用户名!' }]}
              >
                <Input placeholder="用户名" prefix={<UserOutlined />} />
              </Form.Item>
              <Form.Item
                wrapperCol={{ span: 16, offset: 4 }}
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
              >
                <Input.Password placeholder="密码" prefix={<LockOutlined />} />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>提交</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login