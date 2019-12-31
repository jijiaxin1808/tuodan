import React, { useEffect, useState } from 'react'
import Loading from '../../components/loading'
import urlHandle from '../../assest/urlHandle'
import axios from 'axios'
import qs from 'qs'
import './index.less'

const Article = (props) => {
  const [data, setData] = useState(0)
  useEffect(() => {
    axios({
      method: 'post',
      url: 'http://47.93.243.135:3000/getByid',
      data: qs.stringify({ id: urlHandle('id') })
    }).then((res) => {
      if (res.data.code === 0) {
        setData(res.data.data.message)

        console.log('获取成功', res.data.data.message)
      }
    })
  }, [props])

  if (data !== 0) {
    return (
      <div className='article'>
        {<p dangerouslySetInnerHTML={{ __html: data }} />}

      </div>
    )
  } else {
    return (
      <Loading />
    )
  }
} // 通过urlhandle函数获取到当前文章的id  然后发送id获取到 文章内容  然后把文章内容展示出来

export default Article
