import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './routes/Routes'
import store, { history } from './store'
import { API } from './config'
import './style.css'
import { async, bootstrap } from 'core-fe'
import {ErrorHandler} from './ErrorHandler'
console.log(API)
// localStorage.removeItem('jwt')
const Home = async(() => import(/* webpackChunkName: "Home" */ "./view/home/index"), "Home");

bootstrap({
  componentType: Home,
  errorListener: new ErrorHandler(),
});
// ReactDOM.render(
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <Routes />
//     </ConnectedRouter>
//   </Provider>,
//   document.getElementById('root')
// )
