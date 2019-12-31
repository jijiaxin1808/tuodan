import React from 'react'
import './index.less'
import Button from 'antd/es/button'
import { Link } from 'react-router-dom'
const Test = () => {
  return (
    <div>
      <div className='test-male'>
        <img src='/1-男生图.PNG' style={{ width: '40vw', height: '35vw' }} alt='' />
        <div className='test-buttons'>
          <p>哎哟呵！又被吐槽是钢铁直男啦？<br /><br />女生心中到底在想什么？<br /><br />口红重要还是我重要？<br /><br />快来测试吧</p>
          <Button className='home-bar-1-button-w'><Link to='/maletest'>戳我测试</Link></Button>
        </div>
      </div>
      <div className='test-female'>
        <div className='test-buttons'>
          <p>男朋友怎么又打游戏不理我？<br /><br />男朋友怎么又看球不理我？<br /><br />鞋重要还是我重要？<br /><br />表示不服？快来测试吧！</p>
          <Button className='home-bar-1-button-w'><Link to='/femaletest'>戳我测试</Link></Button>
        </div>
        <img src='/2-女生图.PNG' style={{ width: '40vw', height: '35vw' }} alt='' />
      </div>
    </div>
  )
}
 // 这里是测试页面  可以点击进入女生测试 和  男生测试
export default Test
