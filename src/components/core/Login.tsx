import React from 'react'
import {Button, Form, Input} from 'antd'
import Layout from './Layout'
const Item = Form.Item
const Login = () => {
  return (
    <Layout  title="登录" subTitle="登录你的账号吧">
      <Form>
        <Item name="name" label="昵稱">
          <Input></Input>
        </Item>
        <Item name="password" label="密码">
          <Input></Input>
        </Item>
        <Item name="name" label="邮箱">
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
