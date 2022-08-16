import React, { memo } from 'react'

import { Menu } from 'antd'

type Props = {
  collapsed:boolean
}

const items = [
  { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
  { label: '菜单项二', key: 'item-2' },
  {
    label: '子菜单',
    key: 'submenu',
    children: [{ label: '子菜单项', key: 'submenu-item-1' }],
  },
];

const MenuPro:React.FC<Props> = (props) => {
  const {collapsed} = props
  return (
    <div className={"menu-wrap " + (collapsed ? 'remove-auto' : '')}>
    <Menu theme='dark' mode='inline' items={items} />
  </div>
  )
}

export default memo(MenuPro)