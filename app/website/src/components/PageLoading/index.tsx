import React from 'react'
import { Spin } from 'antd'

const PageLoading: React.FC = () => {
  return (
    <div style={{width:"100%",height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Spin tip="加载中请稍后..." />
      </div>
  )
}

export default PageLoading