import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import uiReducer from './reducers/uiReducer.js'
import listingsReducer from './reducers/listingsReducer.js'
import App from './App';
import registerServiceWorker from '../registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../assets/styles/App.css'
import '../assets/styles/rc-slider.css';

let rootReducer = combineReducers({uiReducer, listingsReducer})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<MuiThemeProvider>
				<Route path="/" component={App} />
			</MuiThemeProvider>
		</Router>
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
