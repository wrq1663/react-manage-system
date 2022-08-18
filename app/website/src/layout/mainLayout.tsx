import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectMenuList } from 'models/menu';
// import { Outlet } from 'react-router-dom'

import { Layout } from 'antd';

import LoginCheck from 'components/LoginCheck';
import MenuPro from 'components/MenuPro';
import IndexContent from 'components/IndexContent';

import './less/mainLayout.less';
import MainHeader from 'components/MainHeader';

const { Sider, Content } = Layout

const MainLayout: React.FC = () => {

  const [collapsed, setCollapsed] = useState(false);
  const { menuTree, tabs, selectedKeys } = useSelector(selectMenuList)

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
          <MenuPro selectedKeys={selectedKeys} menuTree={menuTree} collapsed={collapsed} />
        </Sider>
        <Layout>
          <MainHeader></MainHeader>
          <Content>
            <IndexContent tabs={tabs} selectedKeys={selectedKeys} />
          </Content>
        </Layout>
      </Layout>
    </LoginCheck>
  )
}

export default MainLayout