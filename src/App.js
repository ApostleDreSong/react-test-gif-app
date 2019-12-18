import React, { Component } from 'react';
import NavBar from './components/appbar';
import Transactions from './components/transactions';
import Dashboard from './components/dashboard';
import About from './components/about';
import Footer from './components/footer';
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
							<Route path="/dashboard">
								<Dashboard />
							</Route>
							<Route path="/transactions">
								<Transactions />
							</Route>
							<Route path="/about">
								<About />
							</Route>
						</Switch>
						</Container>
						<Footer />
					</Router>
			</PersistGate>
		);
	}
}

export default App;
