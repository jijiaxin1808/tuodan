import React from 'react'
import './index.less'
import headerData from '../../assest/headerData'
import { Link } from 'react-router-dom'
// import Item from 'antd/lib/list/Item'
const Header = () => {
  return (
    <div className='header'>
      <img src='/1.顶部标题.PNG' className='header-logo' alt='' />
      <div className='header-bar'>
        <ul>
          {
            headerData.map((item, index) => {
              if (index !== 4) {
                return (
                  <li>
                    <Link to={item.href}>
                      {item.title}
                      <span>|</span>
                    </Link>
                  </li>
                )
              } else {
                return (
                  <li>
                    <Link to={item.href}>
                      {item.title}
                    </Link>
                  </li>
                )
              }
            })
          }
        </ul>
      </div>
    </div>
  )
}
export default Header
