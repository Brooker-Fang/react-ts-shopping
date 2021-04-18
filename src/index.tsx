import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { API } from './config'
import Routes from './routes/Routes'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
,

document.getElementById('root'))
