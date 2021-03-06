import React from 'react'
import Form from 'antd/es/form'
import Icon from 'antd/es/icon'
import Input from 'antd/es/input'
import Button from 'antd/es/button'
import message from "antd/es/message"
import './index.less'
import axios from "axios";
import qs from "qs";
import { Link } from "react-router-dom"

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        let data = {name:values.username,password:values.password};
        axios({
          url:"http://47.93.243.135:3000/login",
          data:qs.stringify(data),
          method:"POST"
        }).then((res)=> {
         if(res.data.code===0) {
           message.success("登录成功");
          localStorage.setItem("token",values.username)
          window.location.href = "/user";
         }  
         else {
           message.error(res.data.message);
         }
        })
      }
    })
  };

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className='login-form'>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }]
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='请输入用户名'
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }]
          })(
            <Input
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='password'
              placeholder='请输入密码'
            />
          )}
        </Form.Item>
        <Form.Item className='login-button'>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            登录
          </Button>
          <Link to = "/res">
          <Button type='primary'  className='login-form-button' style = {{marginLeft:"1vw"}}>
            注册
          </Button>
          </Link>
        </Form.Item>
      </Form>
    )
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm)
const Login = () => {
  if(localStorage.getItem("token")) {
    window.location.href = "user"
  }
  return (
    <div style={{ paddingTop: '2vw' }}>
      <div className='expr-title' style={{ marginBottom: '3vw' }}>用户登录 </div>
      <WrappedNormalLoginForm />
    </div>
  )
} // 这里是登录  name 和 password 如果返回值正确的话就存name到localStroge 
export default Login
