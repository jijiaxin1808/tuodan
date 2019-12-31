import React from 'react'
import Form from 'antd/es/form'
import Icon from 'antd/es/icon'
import Input from 'antd/es/input'
import Button from 'antd/es/button'
import './index.less'
import axios from "axios";
import message from "antd/es/message"
import qs from "qs";
class NormalLoginForm extends React.Component {
  handleSubmit = e=> {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        if(values.message === "我是最棒哒") {
        if(values.password1 === values.password2)  {

        let data = {name:values.username,password:values.password1};
        axios({
          url:"http://47.93.243.135:3000/res",
          data:qs.stringify(data),
          method:"POST"
        }).then((res)=> {
         if(res.data.code===0) {
           message.success("注册成功");
         }  
         else {
           message.error(res.data.message)
         }
        }) 
        }
        else {
            message.warn("两次输入的密码不一致")
        }
        }
    else {
            message.warn("请输入 我是最棒哒")
    }
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
          {getFieldDecorator('password1', {
            rules: [{ required: true, message: '请输入密码' }]
          })(
            <Input
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='password'
              placeholder='请输入密码'
            />
          )}
        </Form.Item>
                <Form.Item>
          {getFieldDecorator('password2', {
            rules: [{ required: true, message: '请输入密码' }]
          })(
            <Input
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='password'
              placeholder='请再次输入密码'
            />
          )}
        </Form.Item>
                <Form.Item>
          {getFieldDecorator('message', {
            rules: [{ required: true, message: '请输入' }]
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='请输入 我是最棒哒'
            />
          )}
        </Form.Item>
        <Form.Item className='login-button'>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            注册
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm)
const Res = () => {
  return (
    <div style={{ paddingTop: '2vw' }}>
      <div className='expr-title' style={{ marginBottom: '3vw' }}>注册 </div>
      <WrappedNormalLoginForm />
    </div>
  )
}  // 这里调用的antd的form组件  获取到对应的值 在前端做简单的权限验证  如果对的话就发送请求去注册
export default Res;