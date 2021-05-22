import React, { FC } from 'react'
import { Button, Card, Col, Typography, Row, Image } from 'antd'
import { Link } from 'react-router-dom'
import { Product } from '../../store/models/product'
import { API } from '../../config'
import moment from 'moment'
const { Title, Paragraph } = Typography
interface Props{
  product: Product
}
export const ProductItem:FC<Props> = ({product}) => {
  const { name, description, price, sold, createdAt, category } = product
  return (
    <Card
      cover={
        <Image preview={false} src={`${API}/product/photo/${product._id}`} alt={product.name}></Image>
      }
      actions={[
        <Button type="link">
          <Link to="">查看详情</Link>
        </Button>,
        <Button  type="link">
        <Link to="">加入购物车</Link>
      </Button>
      ]}
    >
    <Title level={5}>{name}</Title>
    <Paragraph ellipsis={{rows: 2}}>{description}</Paragraph>
    <Row>
      <Col span="12">销量：{sold}</Col>
      <Col span="12" style={{ textAlign: 'right'}}>价格：{price}</Col>
    </Row>
    <Row>
      <Col span="12">上架时间{ moment(createdAt).format('YYYY-MM-DD')}</Col>
      <Col span="12" style={{ textAlign: 'right'}}>{category.name}</Col>
    </Row>
  </Card>
  )
}
