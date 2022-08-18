import React, { memo } from 'react'

import { Menu } from 'antd'
import type { MenuInfo } from 'models/menu';

import './style.less'
import { useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';

type Props = {
  collapsed: boolean,
  menuTree: MenuInfo[],
  selectedKeys:string[]
}

const MenuPro: React.FC<Props> = (props) => {


  const { collapsed, menuTree,selectedKeys } = props
  const dispatch = useDispatch()

  const menuItemCreate = (menuTree: MenuInfo[]) => {
    return menuTree.map(item => {
      let children: MenuInfo[] = []
      if (item.children?.length) {
        children = menuItemCreate(item.children)
      }
      let label = item.route ? (<div className='menuItem' onClick={onOpenPage(item)}>{item.title}</div>) : (<div> {item.title}</div>);
      return Object.assign({}, item, { label: label }, children.length && { children })
    })
  }

  const onOpenPage = (item: MenuInfo) => (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(item)
    dispatch({ type: 'menu/setCurrentItem', payload: {currentItem:item} })
  }

  const menuList = menuItemCreate(menuTree)

  console.log(menuList)

  return (
    <div className={"menu-wrap " + (collapsed ? 'remove-auto' : '')}>
      <Menu 
      selectedKeys={selectedKeys} 
      theme='dark'
       mode='inline' 
      items={menuList} />
    </div>
  )
}

export default memo(MenuPro)