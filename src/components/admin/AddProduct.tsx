import { Button, Form, Input, message } from 'antd'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { API } from '../../config'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../store/models/auth'
import Layout from '../core/Layout'
const Item = Form.Item
const AddProducts = () => {
  const [name, setName] = useState<string>('')
  const { user, token } = isAuth() as Jwt

  useEffect(() => {
    async function addCategory() {
      try {
        let res = await axios.post<{name: string}>(`${API}/category/create/${user._id}`, {name}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        message.success(`${res.data.name}添加成功`, 1)
      } catch (error) {
        message.error(error.response.data.error, 1)
      }
    }
    name && addCategory()
  }, [name, token, user])
  const onFinish = (val: { name: string}) => {
    console.log(val)
    setName(val.name)
  }
  return (
    <Layout title="添加商品" subTitle="">
      <Form onFinish={onFinish}>
        <Item name="name" label="商品名称">
          <Input></Input>
        </Item>
        <Item >
          <Button type="primary" htmlType="submit">
            添加分类
          </Button>
        </Item>
      </Form>
    </Layout>
  )
}
export default AddProducts