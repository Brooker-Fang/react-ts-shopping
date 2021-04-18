import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from '../components/core/Home'
import Login from '../components/core/Login'
import Register from '../components/core/Register'
import Shop from '../components/core/Shop'
const Routes = () => {
  return (<HashRouter>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/shop" exact component={Shop}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/register" exact component={Register}></Route>
    </Switch>
  </HashRouter>)
}

export default Routes
