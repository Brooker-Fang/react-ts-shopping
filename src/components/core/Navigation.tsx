import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/reduces'
import { RouterState } from 'connected-react-router'
function useActive(currentPath: string, path: string): string {
  return currentPath === path ? 'ant-menu-item,selected' : ''
}
const Navigation = () => {
  const router = useSelector<AppState, RouterState>((state) => state.router)
  const pathname = router.location.pathname
  const isHome: string = useActive(pathname, '/')
  const isShop: string = useActive(pathname, '/shop')
  const isLogin: string = useActive(pathname, '/login')
  const isRegister: string = useActive(pathname, '/register')
  return (
    <Menu selectable={false} mode="horizontal">
      <Menu.Item key="home" className={isHome} icon={<MailOutlined />}>
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item key="shop" className={isShop} icon={<AppstoreOutlined />}>
        <Link to="/shop">商城</Link>
      </Menu.Item>
      <Menu.Item key="login" className={isLogin} icon={<MailOutlined />}>
        <Link to="/login">登录</Link>
      </Menu.Item>
      <Menu.Item key="register" className={isRegister} icon={<AppstoreOutlined />}>
        <Link to="/register">注册</Link>
      </Menu.Item>
    </Menu>
  )
}

export default Navigation
