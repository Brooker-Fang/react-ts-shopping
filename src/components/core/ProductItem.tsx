import React, { FC } from 'react'
import { Button, Card, Col, Typography, Row } from 'antd'
import { Link } from 'react-router-dom'
import { Product } from '../../store/models/product'
const { Title, Paragraph } = Typography
interface Props{
  product: Product
}
export const ProductItem:FC<Props> = ({product}) => {
  const { name, description, price, sold, createAt, category } = product
  console.log(product)
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
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
      <Col span="12" style={{ textAlign: 'right'}}>{price}</Col>
    </Row>
    <Row>
      <Col span="12">{createAt}</Col>
      <Col span="12" style={{ textAlign: 'right'}}>{category.name}</Col>
    </Row>
  </Card>
  )
}
