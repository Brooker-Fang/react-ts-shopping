import React, { FC, useEffect } from 'react'
import { List, Typography, Checkbox as AnCheckBox } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../store/reduces'
import { CategoryState } from '../../store/reduces/category.reducer'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'
import { getCategory } from '../../store/actions/category.actions'
const { Title } = Typography
interface Props {
  handleFilter: (arg: string[]) => void
}
export const CheckBox:FC<Props> = ({handleFilter}) => {
  const dispatch = useDispatch()
  const { category } = useSelector<AppState, CategoryState>(state => state.category)
  useEffect(() => {
    dispatch(getCategory())
  }, [dispatch])
  const onChange = (checkedValue: CheckboxValueType[]) => {
    handleFilter(checkedValue as string[])
  }
  return (
    <>
      <Title level={4}>按照分类筛选</Title>
      <AnCheckBox.Group 
        className="checkBoxFilter"
        options={category.result.map((item) => ({
          label: item.name,
          value: item._id
        }))}
        onChange={onChange}
      ></AnCheckBox.Group>
      <List
       dataSource={category.result}
       renderItem={(item) => (
        <List.Item key={item.name}>
          <AnCheckBox >{item.name}</AnCheckBox>
        </List.Item>
      )}></List>
    </>
  )
}
