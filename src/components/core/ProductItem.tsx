import React, { FC } from 'react'
import { Button, Card, Col, Typography, Row, Image } from 'antd'
import { Link } from 'react-router-dom'
import { Product } from '../../store/models/product'
import { API } from '../../config'
import moment from 'moment'
import { addItem } from '../../helpers/cart'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
const { Title, Paragraph } = Typography
interface Props{
  product: Product
  showDetailBtn?: boolean
  showCartBtn?: boolean
}
export const ProductItem:FC<Props> = ({product, showDetailBtn = true , showCartBtn = true}) => {
  const { name, description, price, sold, createdAt, category } = product
  const dispatch = useDispatch()
  const addToCart = () => {
    addItem(product, () => {
      dispatch(push('/cart'))
    })
  }
  const showButtons = () => {
    let buttonArray = []
    if (showDetailBtn) {
      buttonArray.push(<Button type="link">
      <Link to={`/product/${product._id}`}>查看详情</Link>
    </Button>)
    } 
    if (showCartBtn) {
      buttonArray.push(<Button type="link" onClick={addToCart}>
      加入购物车
    </Button>)
    }
    return buttonArray
  }
  return (
    <Card
      cover={
        <Image preview={false} src={`${API}/product/photo/${product._id}`} alt={product.name}></Image>
      }
      actions={showButtons()}
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
