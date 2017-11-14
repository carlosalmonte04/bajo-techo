import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from '../registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../assets/styles/App.css'

ReactDOM.render(
	<Router>
		<MuiThemeProvider>
			<Route path="/" component={App} />
		</MuiThemeProvider>
	</Router>, 
	document.getElementById('root'));
registerServiceWorker();
