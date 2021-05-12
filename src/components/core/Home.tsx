
import React from 'react'
import Layout from './Layout'
import { Search } from './Search'
import { Col, Row, Typography } from 'antd'
import { ProductItem } from './ProductItem'
const { Title } = Typography
const Home = () => {
  return (
    <Layout  title="商城首页" subTitle="挑选你喜欢的商品吧">
      <Search></Search>
      <Title level={5}>
        最新上架
      </Title>
      <Row gutter={[16, 16]}>
        <Col span="6">
          <ProductItem></ProductItem>
        </Col>
      </Row>
      <Title level={5}>
        最受欢迎
      </Title>
      <Row gutter={[16, 16]}>
        <Col span="6">
          <ProductItem></ProductItem>
        </Col>
      </Row>
    </Layout>
  )
}

export default Home
