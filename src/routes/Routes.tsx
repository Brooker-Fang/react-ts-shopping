import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from '../components/core/Home'
import Shop from '../components/core/Shop'
const Routes = () => {
  return (<HashRouter>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/shop" exact component={Shop}></Route>
    </Switch>
  </HashRouter>)
}

export default Routes
