import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { Col, Row, Space } from 'antd'
import { CheckBox } from './CheckBox'
import { RadioBox } from './RadioBox'
const Shop = () => {
  const [myFilters, setMyFilter] = useState<{
    category: string[]
    price: number[]
  }>({category: [], price: []})
  const filterDOM = () => (
    <Space size="middle" direction="vertical">
      <CheckBox handleFilter={(filters: string[]) => {
        setMyFilter({...myFilters, category: filters})
      }}></CheckBox>
      <RadioBox handleFilter={(filters: number[]) => {
        setMyFilter({...myFilters, price: filters})
      }}></RadioBox>
    </Space>
  )
  useEffect(() =>{
    console.log(myFilters)
  }, [myFilters])
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
