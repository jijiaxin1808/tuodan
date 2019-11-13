import React from 'react'
import './index.less'
const MaleTest = () => {
  const urls = []
  const male = () => {
    for (let i = 1; i <= 17; i++) {
      urls.push(`/m${i}.jpg`)
    }
  }
  male()

  return (
    <div className='male-test'>
      {
        urls.map((item, index) => {
          return (
            <img src={item} className='test-imgs' alt='' key={index} />
          )
        })
      }
    </div>
  )
}
export default MaleTest
