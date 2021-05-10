import { Button, Form, Input, Select, Upload } from 'antd'
import { useEffect } from 'react'
import Layout from '../core/Layout'
import { UploadOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../store/actions/category.actions'
import { AppState } from '../../store/reduces'
import { CategoryState } from '../../store/reduces/category.reducer'
const Item = Form.Item
const AddProducts = () => {
  const dispatch = useDispatch()
  const category = useSelector<AppState, CategoryState>(state => state.category)

  useEffect(() => {
    dispatch(getCategory())
  }, [dispatch])
  const onFinish = (val: { name: string}) => {
  }
  return (
    <Layout title="添加商品" subTitle="">
      <Form initialValues={{category: ''}} onFinish={onFinish}>
        <Item name="name" label="商品名称">
          <Upload>
            <Button icon={<UploadOutlined />}>上传商品封面</Button>
          </Upload>
        </Item>
        <Item name="name" label="商品名称">
          <Input></Input>
        </Item>
        <Item name="description" label="商品描述">
          <Input></Input>
        </Item>
        <Item name="price" label="商品价格">
          <Input></Input>
        </Item>
        <Item name="category" label="所属分类">
          <Select>
            <Select.Option value="">请选择分类</Select.Option>
            {
              category.category.result.map((item) => {
                return (
                  <Select.Option key={item._id} value={item._id}>{item.name}</Select.Option>
                )
              })
            }
          </Select>
        </Item>
        <Item name="quantity" label="商品数量">
          <Input></Input>
        </Item>
        <Item name="shipping" label="是否需要运输">
          <Input></Input>
        </Item>
        <Item >
          <Button type="primary" htmlType="submit">
            添加商品
          </Button>
        </Item>
      </Form>
    </Layout>
  )
}
export default AddProducts