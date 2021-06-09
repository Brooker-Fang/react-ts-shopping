
import React, { useEffect } from 'react'
import Layout from './Layout'
import { Search } from './Search'
import { Col, Row, Typography } from 'antd'
import { ProductItem } from './ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../store/actions/product.actions'
import { AppState } from '../../store/reduces'
import { ProductState } from '../../store/reduces/product.reducer'
import { Product } from '../../store/models/product'
const { Title } = Typography
const Home = () => {
  const dispatch = useDispatch()
  const {createdAt, sold} = useSelector<AppState, ProductState>(state => state.product)
  useEffect(() => {
    dispatch(getProduct('createdAt'))
    dispatch(getProduct('sold'))
  }, [dispatch])
  return (
    <Layout  title="商城首页" subTitle="挑选你喜欢的商品吧">
      <Search></Search>
      <Title level={5}>
        最新上架
      </Title>
      <Row gutter={[16, 16]}>
        {
          createdAt.products.map((item: Product) => {
            return <Col key={item._id} span="6">
              <ProductItem key={item._id} product={item}></ProductItem>
            </Col>
          })
        }
      </Row>
      <Title level={5}>
        最受欢迎
      </Title>
      <Row gutter={[16, 16]}>
        {
          sold.products.map((item: Product) => {
            return <Col key={item._id} span="6">
              <ProductItem key={item._id} product={item}></ProductItem>
            </Col>
          })
        }
      </Row>
    </Layout>
  )
}

export default Home
