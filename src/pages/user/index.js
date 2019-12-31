import React, { useState, useEffect } from 'react'
import Button from 'antd/es/button'
import { Link } from 'react-router-dom'
import Loading from '../../components/loading'
import axios from 'axios'
import qs from 'qs'
import Card from 'antd/es/card'
import './index.less'

const User = () => {
  const [data, setData] = useState([])
  const userName = { name: localStorage.getItem('token') }

  useEffect(() => {
    axios({
      method: 'post',
      url: 'http://47.93.243.135:3000/getNotes',
      data: qs.stringify(userName)
    }).then((res) => {
      if (res.data.code === 0) {
        setData(res.data.data)
        console.log("当前为",res.data.data)
      }
    })
  }, [])

  if (localStorage.getItem('token')) {
    if (data.length) {
      return (
        <div className='user'>
          <div className='expr-title'>个人中心</div>
          <div className = "user-header">
            <Link to='/create'><Button>创建新日记</Button></Link>
            <Button onClick={() => { localStorage.clear(); window.location.reload() }}>退出登录</Button>
          </div>

          {
            data.map((item) => {
              return (
                <Link to={`/article?id=${item.id}`}>
                  <Card hoverable className='user-cards'>
                    {item.title}
                  </Card>
                </Link>
              )
            })
          }
        </div>
      )
    } else {
      return (
        <Loading />
      )
    }
  } else {
    window.location.href = '/login'
  }
}
// 这里检测是否登录了  没有登录就登录  登录了发送请求获取该账号所对应的文章id  这样子就可以展示所有该账号下的文章/日记


export default User
