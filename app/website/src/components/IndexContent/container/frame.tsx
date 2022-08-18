import type { TabInfo } from 'models/menu'
import React, { Fragment } from 'react'

export type ContentProps = {
  tabs: TabInfo[],
  selectedKeys: string[]
}

const Frame: React.FC<ContentProps> = (props) => {
  const { tabs, selectedKeys } = props
  return (
    <Fragment>
      {
        tabs.map(tab => (<iframe
          title={tab.name}
          key={'tab' + tab.key}
          className={tab.key === selectedKeys[0] ? 'active' : ''}
          src={tab.url}
        >

        </iframe>))
      }
    </Fragment>

  )
}

export default Frame