import React, { Component } from 'react';
import NavBar from './components/appbar';
import Dashboard from './components/dashboard';
import About from './components/about';
import {Container} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';


class App extends Component {
	render() {
		return (
			<PersistGate loading={null} persistor={persistor}>
					<Router>
						<NavBar />
						<Container fixed>
						<Switch>
							<Route exact path="/">
								<Dashboard />
							</Route>
							<Route path="/about">
								<About />
							</Route>
						</Switch>
						</Container>
					</Router>
			</PersistGate>
		);
	}
}

export default App;
