import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { Col, Row, Space } from 'antd'
import { CheckBox } from './CheckBox'
import { RadioBox } from './RadioBox'
import { useDispatch, useSelector } from 'react-redux'
import { filterProduct } from '../../store/actions/product.actions'
import { AppState } from '../../store/reduces'
import { ProductState } from '../../store/reduces/product.reducer'
import { ProductItem } from './ProductItem'
import { Product } from '../../store/models/product'
const Shop = () => {
  const dispatch = useDispatch()
  const product = useSelector<AppState, ProductState>(state => state.product)
  console.log('product=====', product)
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
  const productDOM  = () => <Row gutter={[16, 16]}>
    {
      product.filter.result.data.map((item: Product) => {
        return <Col key={item._id} >
          <ProductItem product={item}></ProductItem>
        </Col>
      })
    }
  </Row>
  useEffect(() =>{
    dispatch(filterProduct({filter: myFilters, skip: 0}))
  }, [dispatch, myFilters])
  return (
    <Layout title="前端商城" subTitle="挑选你喜欢的商品吧">
      <Row>
        <Col span="4">{filterDOM()}</Col>
        <Col span="4">{productDOM()}</Col>
        </Row>
    </Layout>
  )
}

export default Shop
