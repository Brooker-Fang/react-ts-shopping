import { Button, Form, Input } from 'antd'
import React from 'react'
import Layout from '../core/Layout'
const Item = Form.Item
const AddCategory = () => {
  const onFinish = (val: { name: string}) => {

  }
  return (
    <Layout title="添加分类" subTitle="">
      <Form onFinish={onFinish}>
        <Item name="name" label="分类名称">
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
export default AddCategory