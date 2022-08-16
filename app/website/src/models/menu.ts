
import type { MenuProps } from 'antd';
import { getMenuByToken } from 'service/menu';
import { ModelType } from 'typing/model';

type MenuItem = Required<MenuProps>['items'][number];

type MenuInfo = MenuItem & {
  id?: number;
  isAuth?: boolean;
  isBuilding?: boolean;
  children?: MenuInfo[];
  url?: string;
  isAuthReadable?: boolean;
  leaf?: boolean;
  route?: string;
  isExternalLink?: boolean
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

/**
 * 初始化菜单树
 * @param menuTree  菜单树
 * @returns 
 */
const initMenuTree = (menuTree: MenuInfo[]): MenuInfo[] => {
  console.log(menuTree)
  let newMenuTree = menuTree.map(item => {
    //存在子菜单时深度遍历
    if (item.children?.length) {
      initMenuTree(item.children)
    }
    //判断是否是外部链接
    let isExternalLink = false
    if (item.url) isExternalLink = true
    return Object.assign(item, {
      isExternalLink
    })
  })
  return newMenuTree
}

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
    setMenuTree(state, action) {
      state.menuTree = initMenuTree(action.payload.data)
    }
  },
  effects: {
    *fetchMenuTree(saga) {
      const { data } = yield getMenuByToken()
      yield saga?.put({ type: 'menu/setMenuTree', payload: { data } })
    }
  }
}
export default MenuModel

export const selectMenuList = (state: any) => state.menu.menuTree