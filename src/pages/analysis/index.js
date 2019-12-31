import React from 'react'
import Popover from 'antd/es/popover'
import Button from 'antd/es/button'
import question from '../../assest/question'
import './index.less'
const Analysis = () => {
  return (
    <div className='analysis'>
    <div className='expr-title' style={{ marginBottom: '3vw' }}>
    来来来！ 我们带你具体问题具体分析   
    </div>  
  

      {
        question.map((item, index) => {
          return (
            <div key={index}>
              <p style={{ marginBottom: '3vw', fontSize: '1.5vw' }}>{item.title}<br />{item.A1}<br />{item.A2}<br />{item.A3}<br /></p>
              <Popover content={item.A}>
                <Button type='primary'>答案</Button>
              </Popover>
              <img src={`/${index + 1}.jpg`} style={{ marginTop: '3vw', marginBottom: '3vw' }} alt='' />
            </div>
          )
        })
      }
    </div>
    // 先是一个title  然后是通过数据中的数组  使用map函数返回每个文章的 card 并且链接到不同的url  
  )
}
export default Analysis
