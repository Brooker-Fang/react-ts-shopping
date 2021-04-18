import {Button, Form, Input} from 'antd'
import React from 'react'
import { register, RegisterPayload } from '../../store/actions/auth.actions'
import Layout from './Layout'
import {useDispatch} from 'react-redux'
const Item = Form.Item
const Register = () => {
  const dispatch = useDispatch()
  const onFinish = (value: RegisterPayload) => {
    console.log(value)
    dispatch(register(value))
  }
  return (
    <Layout  title="注册" subTitle="注册你的账号吧">
      <Form onFinish={onFinish}>
        <Item name="name" label="昵稱">
          <Input></Input>
        </Item>
        <Item name="password" label="密码">
          <Input></Input>
        </Item>
        <Item name="email" label="邮箱">
          <Input></Input>
        </Item>
        <Item >
          <Button type="primary" htmlType="submit">注册</Button>
        </Item>
      </Form>
    </Layout>
  )
}

export default Register
