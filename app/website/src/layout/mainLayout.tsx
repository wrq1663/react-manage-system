import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'

import './less/mainLayout.less';

import { Layout } from 'antd';
import LoginCheck from 'components/LoginCheck';
import MenuPro from 'components/MenuPro';


const { Header, Sider, Content } = Layout

const MainLayout: React.FC = () => {
  
  const [collapsed, setCollapsed] = useState(false);

  return (
    <LoginCheck>
      <Layout className='main-layout'>
        {/* 用于占位 */}
        <Sider className='sider-placeholder' collapsed={collapsed}></Sider>
        <Sider className='main-sider' collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)} >
          {/* logo */}
          <div className="sider-title">
            <div className="title-logo"></div>
            {!collapsed && (
              <span className='title'>Manage</span>
            )}
          </div>
          <MenuPro collapsed={collapsed} />
        </Sider>
        <Layout>
          <Header className='site-layout-background'>header</Header>
          <Content>
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </LoginCheck>
  )
}

export default MainLayout