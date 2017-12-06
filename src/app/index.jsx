import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import 'nprogress/nprogress.css'
import uiReducer from './reducers/uiReducer'
import listingsReducer from './reducers/listingsReducer'
import App from './App'
import registerServiceWorker from '../registerServiceWorker'
import '../assets/styles/App.css'

const rootReducer = combineReducers({ uiReducer, listingsReducer })

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
        <Route path="/" component={App} />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
