import React, { Component } from 'react';
import NavBar from './components/navbar';
import Transactions from './components/transactions';
import Dashboard from './components/dashboard';
import About from './components/about';
import Footer from './components/footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';
import './App.scss';

class App extends Component {
	render() {
		return (
			<PersistGate loading={null} persistor={persistor}>
				<div>
					<Router>
						<NavBar />
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
						<Footer />
					</Router>
				</div>
			</PersistGate>
		);
	}
}

export default App;
