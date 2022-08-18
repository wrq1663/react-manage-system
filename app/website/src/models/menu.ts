
import type { MenuProps } from 'antd';
import { getMenuByToken } from 'service/menu';
import { ModelType } from 'typing/model';

type MenuItem = Required<MenuProps>['items'][number];

export type MenuInfo = MenuItem & {
  id?: number;
  isauth?: Boolean;
  isbuilding?: Boolean;
  children?: MenuInfo[];
  url?: string;
  isauthreadable?: Boolean;
  leaf?: Boolean;
  route?: string;
  isexternallink?: Boolean;
  title?: string;
  key:string
}

/** Tab数据 */
export type TabInfo = {
  /** 唯一键 */
  key: string;
  /** 显示名称 */
  name: string;
  /** 展示URL */
  url: string;
  /** 是否建设中 */
  isbuilding: boolean;
  /** 是否没授权 */
  isauth: boolean;
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
// const initMenuTree = (menuTree: MenuInfo[]): MenuInfo[] => {
//   let newMenuTree = menuTree.map(item => {
//     //存在子菜单时深度遍历
//     if (item.children?.length) {
//       initMenuTree(item.children)
//     }
//     //判断是否是外部链接
//     let isexternallink = 0
//     if (item.url) isexternallink = 1
//     let label = (()=>{

//     })()
//     return Object.assign(item, {
//       isexternallink
//     })
//   })
//   return newMenuTree
// }

const flatTree = (tree: MenuInfo[]) => {
  let flatArr: MenuInfo[] = []
  tree.forEach(item => {
    flatArr.push(Object.assign({}, item, { children: null }))
    if (item.children?.length) {
      flatArr.push(...flatTree(item.children))
    }
  })
  return flatArr
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
    setCurrentItem(state, action) {
      let { key, title, url, route, isauth, isbuilding } = action.payload.currentItem
      if (!state.tabHistory.includes(key)) {
        state.tabs.push(Object.assign({}, {
          key,
          name: title,
          url: url || route,
          isbuilding,
          isauth,
        }))
      }
      state.activeMenu = action.payload.currentItem
      state.selectedKeys = [action.payload.currentItem.key]
      state.tabHistory.push(key)
    },
    setMenuTree(state, action) {
      // state.menuTree = initMenuTree(action.payload.data)
      state.menuTree = action.payload.data
    },
    findByKey(state, action) {
      let currItem = flatTree(state.menuTree).find(item => item.key === action.payload.key)
      if (currItem) {
        state.activeMenu = currItem
        state.selectedKeys = [currItem.key]
        
        state.tabHistory.push(action.payload.key)
      }
    },
    removeTabByKey(state, action) {
      let targetKey = action.payload.key
      state.tabs = state.tabs.filter(item => item.key !== targetKey)
      state.tabHistory = state.tabHistory.filter(item => item !== targetKey)
      let lastestItem = flatTree(state.menuTree).find(item => item.key === state.tabHistory[state.tabHistory.length - 1])
      if (lastestItem) {
        state.activeMenu = lastestItem
        state.selectedKeys = [lastestItem.key || '']
      }
    }
  },
  effects: {
    *fetchMenuTree(saga) {
      const { data } = yield getMenuByToken()
      yield saga?.put({ type: 'menu/setMenuTree', payload: { data } })
      yield saga?.put({ type: 'menu/setCurrentItem', payload: { currentItem: Object.assign({}, data[0]) } })
    }
  }
}
export default MenuModel

export const selectMenuList = (state: any) => state.menu
