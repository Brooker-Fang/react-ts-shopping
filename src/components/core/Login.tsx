import React from 'react'
import {Button, Form, Input} from 'antd'
import Layout from './Layout'
import { useDispatch } from 'react-redux'
import { signin, SigninPayLoad } from '../../store/actions/auth.actions'
import { useForm } from 'antd/lib/form/Form'
const Item = Form.Item
const Login = () => {
  const dispatch = useDispatch()
  const onFinish = (value: SigninPayLoad) => {
    console.log(value)
    dispatch(signin(value))
  }
  const [form] = useForm()
  return (
    <Layout  title="登录" subTitle="登录你的账号吧">
      <Form  form={form} onFinish={onFinish}>
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
          <Button type="primary" htmlType="submit">登录</Button>
        </Item>
      </Form>
    </Layout>
  )
}

export default Login
