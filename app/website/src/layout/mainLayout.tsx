import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'

import './less/mainLayout.less';

import { Layout, Menu } from 'antd';
import LoginCheck from 'components/LoginCheck';


const { Header, Sider, Content } = Layout


const items = [
  { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
  { label: '菜单项二', key: 'item-2' },
  { label: '菜单项二', key: 'item-22' },
  { label: '菜单项二', key: 'item-12' },
  { label: '菜单项二', key: 'item-21' },
  { label: '菜单项二', key: 'item-223' },
  { label: '菜单项二', key: 'item-22' },
  { label: '菜单项二', key: 'item-22' },
  { label: '菜单项二', key: 'item-22' },
  { label: '菜单项二', key: 'item-22' },
  { label: '菜单项二', key: 'item-1122' },
  {
    label: '子菜单',
    key: 'submenu',
    children: [{ label: '子菜单项', key: 'submenu-item-1' }],
  },
];

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
          <div className={"menu-wrap " + (collapsed ? 'remove-auto' : '')}>
            <Menu theme='dark' mode='inline' items={items} />
          </div>
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