import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'

import { Layout, Menu } from 'antd';

const { Header, Sider, Content } = Layout


const mainLayout: React.FC = () => {
  return (
    <Layout>
      {/* <h2>mainLayout</h2>
      <div style={{ color: 'red' }}>
        <Outlet />
      </div> */}
      <Sider></Sider>
      <Header></Header>
      <Content></Content>
    </Layout>

  )
}

export default mainLayout