import React from 'react'
import { Button, Card, Col, Typography, Row } from 'antd'
import { Link } from 'react-router-dom'
const { Title, Paragraph } = Typography
export const ProductItem = () => {
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
    <Title level={5}>商品标题</Title>
    <Paragraph ellipsis={{rows: 2}}>商品描述</Paragraph>
    <Row>
      <Col span="12">销量</Col>
      <Col span="12" style={{ textAlign: 'right'}}>价格</Col>
    </Row>
    <Row>
      <Col span="12">上架时间</Col>
      <Col span="12" style={{ textAlign: 'right'}}>所属分类</Col>
    </Row>
  </Card>
  )
}
