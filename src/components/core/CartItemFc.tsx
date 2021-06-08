import React, { FC } from 'react'
import { CartItem } from '../../helpers/cart'
import {Button, Image, Input } from 'antd'
import { API } from '../../config'
interface Props {
  product: CartItem
}
const CartItemFc:FC<Props> = ({ product }) => {
  const { _id ,name, price, category, count} = product
  return (
    <tr className="ant-table-row">
      <td className="ant-table-cell">
        <Image width={120} src={`${API}/product/photo/${_id}`}></Image>
      </td>
      <td className="ant-table-cell">{name}</td>
      <td className="ant-table-cell">{price}</td>
      <td className="ant-table-cell">{category.name}</td>
      <td className="ant-table-cell">
        <Input type="number" value={count}></Input>
      </td>
      <td className="ant-table-cell">
        <Button danger type="primary">
          删除
        </Button>
      </td>
    </tr>
  )
}

export default CartItemFc
