import React from 'react'
import { Button, Form, Input, Result } from 'antd'
import Layout from './Layout'
import { useDispatch, useSelector } from 'react-redux'
import { signin, SigninPayLoad } from '../../store/actions/auth.actions'
import { useForm } from 'antd/lib/form/Form'
import { AppState } from '../../store/reduces'
import { AuthState } from '../../store/reduces/auth.reducer'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../store/models/auth'
import { Redirect } from 'react-router-dom'
const Item = Form.Item
const Login = () => {
  const dispatch = useDispatch()
  const onFinish = (value: SigninPayLoad) => {
    console.log(value)
    dispatch(signin(value))
  }
  // 获取登录结果
  const auth = useSelector<AppState, AuthState>((state) => state.auth)
  // 登录成功 重定向
  const loginSuccessRedirectToDashboard = () => {
    const auth = isAuth()
    if (auth) {
      const {
        user: { role },
      } = auth as Jwt
      if (role === 0) {
        return <Redirect to="/user/dashboard"></Redirect>
      } else {
        return <Redirect to="/admin/dashboard"></Redirect>
      }
    }
  }
  // 登录失败
  const showError = () => {
    if (auth.signin.loaded && !auth.signin.success) {
      return <Result key="error" status="warning" title="登录失败！" subTitle={auth.signin.message} />
    }
  }
  const [form] = useForm()
  const signinForm = () => {
    return (
      <Form form={form} onFinish={onFinish}>
        <Item name="name" label="昵稱">
          <Input></Input>
        </Item>
        <Item name="password" label="密码">
          <Input></Input>
        </Item>
        <Item name="email" label="邮箱">
          <Input></Input>
        </Item>
        <Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Item>
      </Form>
    )
  }
  return (
    <Layout title="登录" subTitle="登录你的账号吧">
      {showError()}
      {loginSuccessRedirectToDashboard()}
      {signinForm()}
    </Layout>
  )
}

export default Login
