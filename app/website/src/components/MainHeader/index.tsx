import { Tabs } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { selectMenuList, TabInfo } from 'models/menu'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const { TabPane } = Tabs;

const MainHeader: React.FC = () => {
  const { tabs, activeMenu } = useSelector(selectMenuList)
  const dispatch = useDispatch()

  const setCurrentKey = (key: string) => {
    dispatch({ type: 'menu/findByKey', payload: { key } })
  }
  const HandleTabs = (targetKey: unknown, action: 'add' | 'remove') => {
    if (action === 'remove') {
      dispatch({ type: 'menu/removeTabByKey', payload: { key: targetKey as string } })
    }
  }
  return (
    <Header className='site-layout-background' >
      <Tabs
        type="editable-card"
        hideAdd={true}
        onChange={setCurrentKey}
        onEdit={HandleTabs}
        activeKey={activeMenu.key}
        defaultActiveKey="1"
        tabPosition='bottom'
        style={{ height: '100%' }}
      >
        {tabs.map((item: TabInfo) => {
          return (
            <TabPane tab={item.name} key={item.key} ></TabPane>
          )
        })}
      </Tabs>
    </Header>

  )
}

export default MainHeader