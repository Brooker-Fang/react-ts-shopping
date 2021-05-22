import React from 'react'
import Layout from './Layout'
import { Col, Row, Space } from 'antd'
import { CheckBox } from './CheckBox'
import { RadioBox } from './RadioBox'
const Shop = () => {
  const filterDOM = () => (
    <Space size="middle" direction="vertical">
      <CheckBox></CheckBox>
      <RadioBox></RadioBox>
    </Space>
  )
  return (
    <Layout title="前端商城" subTitle="挑选你喜欢的商品吧">
      <Row>
        <Col span="4">{filterDOM()}</Col>
        <Col span="4">right</Col>
        </Row>
    </Layout>
  )
}

export default Shop
