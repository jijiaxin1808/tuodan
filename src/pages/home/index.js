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
            <Link to='/'><p>开始恋爱之旅</p></Link>
          </Button>
        </div>
        <img src='/3-首页图1右侧小图.jpg' alt='' />
      </div>
      <div className='home-bar-2'>
        <Carousel autoplay effect='fade' style={{ width: '30vw', height: '18vw' }}>
          <img className='home-carousel-div-s' src='/2横幅1.png' alt='' />
          <img className='home-carousel-div-s' src='/2横幅2.jpg' alt='' />
        </Carousel>
        <div className='buttons'>
          <p>什么？？<br />你居然还在单身！！</p>
          <Button className='home-bar-1-button' shape='round' type='primary'>
            <Link to='/'><p>恋爱测试</p></Link>
          </Button>
        </div>
      </div>
      <div className='home-bar-3'>
        <div className='buttons'>
          <p><b>什么？恋爱小白没有经验？</b><br />恋爱达人实例教学,一键式获取恋爱经验<br />和恋爱问题Say Goodbye！</p>
          <Button className='home-bar-1-button' shape='round' type='primary'>
            <Link to='/'><p>恋爱测试</p></Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Home
