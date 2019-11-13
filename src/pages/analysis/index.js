import React from 'react'
import Popover from 'antd/es/popover'
import Button from 'antd/es/button'
import question from '../../assest/question'
import './index.less'
const Analysis = () => {
  return (
    <div className='analysis'>
      {
        question.map((item, index) => {
          return (
            <div key={index}>
              <p style={{ marginBottom: '3vw' }}>{item.title}<br />{item.A1}<br />{item.A2}<br />{item.A3}<br /></p>
              <Popover content={item.A}>
                <Button type='primary'>答案</Button>
              </Popover>
              <img src={`/${index + 1}.jpg`} style={{ marginTop: '3vw', marginBottom: '3vw' }} alt='' />
            </div>
          )
        })
      }
    </div>
  )
}
export default Analysis
