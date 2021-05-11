import { Button, Form, Input, message, Select, Upload } from 'antd'
import { useEffect, useState } from 'react'
import Layout from '../core/Layout'
import { UploadOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../store/actions/category.actions'
import { AppState } from '../../store/reduces'
import { CategoryState } from '../../store/reduces/category.reducer'
import { RcFile } from 'antd/lib/upload'
import axios from 'axios'
import { API } from '../../config'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../store/models/auth'
const Item = Form.Item
const { Option } = Select;
const AddProducts = () => {
  const dispatch = useDispatch()
  const category = useSelector<AppState, CategoryState>(state => state.category)
  const [file, setFile] = useState<RcFile>()
  useEffect(() => {
    dispatch(getCategory())
  }, [dispatch])
  const { user, token } = isAuth() as Jwt
  const onFinish = (product: any) => {
    const formDate = new FormData()
    for(let attr in product) {
      formDate.set(attr, product[attr])
    }
    if (typeof file !== "undefined") {
      formDate.set("photo", file)
    }
    axios.post(`${API}/product/create/${user._id}`, formDate, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      message.success('商品添加成功')
    }).catch(e => {
      message.error('商品添加失败')
    })
  }
  const addProductForm = () => {
    const props = {
      accepts: "image/jpeg/png/*",
      beforeUpload: function(file: RcFile) {
        setFile(file)
        return false
      }
    }
    return (
      <Form initialValues={{category: '60965d06e9e30e474c6a1929', shipping: '1'}} onFinish={onFinish}>
        <Item >
          <Upload {...props}>
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
            <Option value="">请选择分类</Option>
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
          <Select>
            <Option value="1">是</Option>
            <Option value="0">否</Option>
          </Select>
        </Item>
        <Item >
          <Button type="primary" htmlType="submit">
            添加商品
          </Button>
        </Item>
      </Form>
    )
  }
  return (
    <Layout title="添加商品" subTitle="">
      {addProductForm()}
    </Layout>
  )
}
export default AddProducts