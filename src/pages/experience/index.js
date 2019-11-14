import React, { useState, useEffect } from 'react'
import Card from 'antd/es/card'
import experData from '../../assest/experData'
import './index.less'
import urlHandle from "../../assest/urlHandle"
import Loading from "../../components/loading"
const Experience = (props) => {
  const [type, setType] = useState(0)
  useEffect(() => {
    urlHandle("type")&&setType(urlHandle("type"));
    
  }, [props])
  if (type ) {
    if(type == -1) {
    return (
      <div>
        <div className='expr-title'>恋爱经验大秘籍</div>
        {
          experData.map((item, index) => {
            return (
              <Card
                hoverable key={index} onClick={() => { window.location.href = `/experience?type=${index+1}` }}
                style={{ width: '70%', height: '20vw', margin: '0 auto', marginTop: '2vw' }} className='expr-card'
              >
                <img src={item.picUrl} alt='' style={{ width: '25vw', height: '15vw' }} />
                <div style={{ width: '60%' }} className='expr-content'>
                  <div className='expr-content-header'><span>{item.title}</span><i>{item.time}</i></div>
                  <div>{item.content}</div>
                </div>
              </Card>
            )
          })
        }
      </div>
    )}
    else {
      console.log("当前type为",type)
    return (
      <div className='message'>
        <div className='message-title'>{experData[type - 1].title}</div>
        <div className='message-time'>{experData[type - 1].time}</div>
        <pre style={{ fontSize: '1vw', wordBreak: 'break-all' }}>
          {experData[type - 1].allContent}
        </pre>
      </div>
    )
  }

  } 
    else return (
      <Loading />
  )
}
export default Experience
