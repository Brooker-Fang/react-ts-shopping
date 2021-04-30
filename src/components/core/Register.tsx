import {Button, Form, Input, Result} from 'antd'
import { useEffect } from 'react'
import { register, RegisterPayload, resetSignUp } from '../../store/actions/auth.actions'
import Layout from './Layout'
import { useDispatch , useSelector} from 'react-redux'
import { AppState } from '../../store/reduces'
import { AuthState } from '../../store/reduces/auth.reducer'
import { Link } from 'react-router-dom'


const Item = Form.Item
const Register = () => {
  const dispatch = useDispatch()
  // 获取注册结果
  const auth = useSelector<AppState, AuthState>(state => state.auth)
  const onFinish = (value: RegisterPayload) => {
    console.log(value)
    dispatch(register(value))
  }
  const [ form ] = Form.useForm()
  useEffect(() => {
    // 清空表单
    if(auth.register.loaded && auth.register.success) {
      form.resetFields()
    }
  }, [auth, form])
  const showSuccess = () => {
    if(auth.register.loaded && auth.register.success) {
      return <Result
      key="success"
      status="success"
      title="注册成功！"
      extra={[
        <Button type="primary" >
          <Link to="/login">登录</Link>
        </Button>,
      ]}
    />
    }
  }
  // 离开页面之前 重置状态
  useEffect(() => {
    return () => {
      dispatch(resetSignUp())
    }
  }, [dispatch])
  const showError = () => {
    if(auth.register.loaded && !auth.register.success) {
      return <Result
      key="error"
      status="warning"
      title="注册失败！"
      subTitle={auth.register.message}
    />
    }
  }
  const signupForm = () => (
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
        <Item >
          <Button type="primary" htmlType="submit">注册</Button>
        </Item>
      </Form>
  )
  return (
    <Layout  title="注册" subTitle="注册你的账号吧">
      {showSuccess()}
      {showError()}
      {signupForm()}
    </Layout>
  )
}

export default Register
