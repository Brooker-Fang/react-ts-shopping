import React from 'react'
import { List, Typography, Checkbox as AnCheckBox } from 'antd'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/reduces'
import { CategoryState } from '../../store/reduces/category.reducer'
const { Title } = Typography

export const CheckBox = () => {
  const { category } = useSelector<AppState, CategoryState>(state => state.category)
  return (
    <>
      <Title level={4}>按照分类筛选</Title>
      <List
       dataSource={category.result}
       renderItem={(item) => (
        <List.Item>
          <AnCheckBox>{item.name}</AnCheckBox>
        </List.Item>
      )}></List>
    </>
  )
}
