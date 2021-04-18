import React from 'react'
import { useSelector } from 'react-redux'
import Layout from './Layout'

const Home = () => {
  const state = useSelector(state => state)
  return (
    <Layout  title="商城首页" subTitle="挑选你喜欢的商品吧">
      Home
      {JSON.stringify(state)}
    </Layout>
  )
}

export default Home
