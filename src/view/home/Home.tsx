import Routes from "../../routes/Routes";
import Layout from './Layout'
import { Search } from './Search'
import { Col, Row, Typography } from 'antd'
import { ProductItem } from './ProductItem'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../store/actions/product.actions'
import { AppState } from '../../store/reduces'
import { ProductState } from '../../store/reduces/product.reducer'
import { Product } from '../../store/models/product'
import { RootState } from "../../type/state";
const { Title } = Typography
interface StateProps {
  hotList: Array<Product>;
  soldList: Array<Product>;
}

interface Props extends StateProps {}
const Home = (props: Props) => {
  const { hotList, soldList } = props
  return (<Layout  title="商城首页" subTitle="挑选你喜欢的商品吧">
      <Search></Search>
      <Title level={5}>
        最新上架
      </Title>
      <Row gutter={[16, 16]}>
        {
          hotList.map((item: Product) => {
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
          soldList.map((item: Product) => {
            return <Col key={item._id} span="6">
              <ProductItem key={item._id} product={item}></ProductItem>
            </Col>
          })
        }
      </Row>
    </Layout>)
}
const mapStateToProps = (state: RootState): StateProps => {
  return {
      soldList: state.app.home.soldList,
      hotList: state.app.home.hotList,
  };
};

export default connect(mapStateToProps)(Home);