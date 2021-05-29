import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { Button, Col, Empty, Row, Space } from 'antd'
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
  const [skip, setSkip] = useState<number>(0)
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
  const loadMore = () => {
    setSkip(skip + 4)
  }
  const loadMoreButton = () => {
    return (
      <Row>
        {product.filter.result.size >=4 &&<Button onClick={loadMore}>加载更多</Button>}
      </Row>
    )
  }
  const noDate = () => {
    return <Row>
      {
        product.filter.result.size === 0 && <Empty></Empty>
      }
    </Row>
  }
  useEffect(() => {
    setSkip(0)
  }, [myFilters])
  useEffect(() =>{
    dispatch(filterProduct({filters: myFilters, skip}))
  }, [dispatch, myFilters, skip])
  return (
    <Layout title="前端商城" subTitle="挑选你喜欢的商品吧">
      <Row>
        <Col span="4">{filterDOM()}</Col>
        <Col span="4">
          {productDOM()}
          {loadMoreButton()}
          {noDate()}
          </Col>
        </Row>
    </Layout>
  )
}

export default Shop
