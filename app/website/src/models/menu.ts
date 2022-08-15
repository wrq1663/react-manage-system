
import type { MenuProps } from 'antd';
import {  ModelType } from 'typing/model';

type MenuItem = Required<MenuProps>['items'][number];

type MenuInfo = MenuItem & {
  id?: number;
  pages?: number[];
  isAuth?: boolean;
  isBuilding?: boolean;
  children?: MenuInfo[];
  url?: string;
  tabName?: string;
}

/** Tab数据 */
type TabInfo = {
  /** 唯一键 */
  key: string;
  /** 显示名称 */
  name: string;
  /** 展示URL */
  url: string;
  /** 是否建设中 */
  isBuilding: boolean;
  /** 是否没授权 */
  isAuth: boolean;
};

export type MenuModelState = {
  /** 菜单树 */
  menuTree: MenuInfo[]
  /** 激活的菜单信息 */
  activeMenu: MenuInfo
  /** tab栏的信息 */
  tabs: TabInfo[]
  /** 选中的末级菜单Key */
  selectedKeys: string[]
  /** 打开的菜单Key */
  openKeys: string[]
  /** tab打开历史 */
  tabHistory: string[]
};

const MenuModel: ModelType<MenuModelState> = {
  namespace: 'menu',
  state: {
    menuTree: [],
    activeMenu: {
      key: ''
    },
    tabs: [],
    selectedKeys: [],
    openKeys: [],
    tabHistory: []
  },
  reducers: {
    changeName(state, action) {
      state.menuTree = action.payload
    },
  },
  effects: {
    *getName() {
      yield console.log('wrq')
    }
  }
}
export default MenuModel