import React from 'react'
import Carousel from 'antd/es/carousel'
import Button from 'antd/es/button'
import { Link } from 'react-router-dom'
import '../../index.css'
import './index.less'
const Home = () => {
  return (
    <div>
      <Carousel autoplay effect='fade'>
        <img className='home-carousel-div' src='/2横幅1.png' alt='' />
        <img className='home-carousel-div' src='/2横幅2.jpg' alt='' />
      </Carousel>
      <div className='home-bar-1'>
        <div className='buttons'>
          <p>恋爱日记<br />我们帮你留住心底的小秘密</p>
          <Button className='home-bar-1-button' shape='round' type='primary'>
            <Link to='/login'><p>开始恋爱之旅</p></Link>
          </Button>
        </div>
        <img src='/TIM图片20191113195008.jpg' alt='' />
      </div>
      <div className='home-bar-2'>
        <Carousel autoplay effect='fade' style={{ width: '30vw', height: '18vw' }}>
          <img className='home-carousel-div-s' src='/TIM图片20191113195128.png' alt='' />
          <img className='home-carousel-div-s' src='/TIM图片20191113195139.png' alt='' />
          <img className='home-carousel-div-s' src='/TIM图片20191113195146.png' alt='' />
        </Carousel>
        <div className='buttons'>
          <p>什么？？<br />你居然还在单身！！<br />赶快来测一下你单身的理由！脱单！就是现在!</p>
          <Button className='home-bar-1-button' shape='round' type='primary'>
            <Link to='/test'><p>恋爱测试</p></Link>
          </Button>
        </div>
      </div>
      <div className='home-bar-3'>
        <div className='buttons'>
          <p><b>什么？恋爱小白没有经验？</b><br />恋爱达人实例教学,一键式获取恋爱经验<br />和恋爱问题Say Goodbye！</p>
          <Button className='home-bar-1-button-w' shape='round'>
            <Link to='/experience'><p>恋爱经验</p></Link>
          </Button>
          <Button className='home-bar-1-button-w' shape='round'>
            <Link to='/analysis'><p>案例分析</p></Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Home
