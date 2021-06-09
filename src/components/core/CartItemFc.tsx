import React, { ChangeEvent, FC, useState } from 'react'
import { CartItem, updateItem } from '../../helpers/cart'
import {Button, Image, Input } from 'antd'
import { API } from '../../config'
interface Props {
  product: CartItem,
  setCart: (arg: CartItem[]) => void
}
const CartItemFc:FC<Props> = ({ product, setCart }) => {
  const { _id ,name, price, category, count:productCount} = product
  const [count, setCount] = useState<number>(productCount)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let count = parseInt(event.target.value)
    setCart(updateItem(product._id, count))
    setCount(count)
  }
  return (
    <tr className="ant-table-row">
      <td className="ant-table-cell">
        <Image width={120} src={`${API}/product/photo/${_id}`}></Image>
      </td>
      <td className="ant-table-cell">{name}</td>
      <td className="ant-table-cell">{price}</td>
      <td className="ant-table-cell">{category.name}</td>
      <td className="ant-table-cell">
        <Input type="number" value={count} onChange={handleChange}></Input>
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
