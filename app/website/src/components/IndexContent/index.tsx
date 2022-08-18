import React, { memo } from 'react'
import Frame from './container/frame'
import type { ContentProps } from './container/frame'
import './style.less'



const IndexContent: React.FC<ContentProps> = (props) => {
  const { tabs, selectedKeys } = props
  return (
    <div className='main-content'><Frame tabs={tabs} selectedKeys={selectedKeys} /></div>
  )
}

export default memo(IndexContent)