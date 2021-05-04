import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Dashboard from '../components/admin/Dashboard'
import Home from '../components/core/Home'
import Login from '../components/core/Login'
import Register from '../components/core/Register'
import Shop from '../components/core/Shop'
import PrivateRoute from '../components/admin/PrivateRoute'
import AdminRoutes from '../components/admin/AdminRoutes'
import AdminDashboard from '../components/admin/AdminDashboard'
const Routes = () => {
  return (<HashRouter>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/shop" exact component={Shop}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/register" exact component={Register}></Route>
      <PrivateRoute path="/user/dashboard" exact component={Dashboard}></PrivateRoute>
      <AdminRoutes path="/admin/dashboard" exact component={AdminDashboard} ></AdminRoutes>
    </Switch>
  </HashRouter>)
}

export default Routes
