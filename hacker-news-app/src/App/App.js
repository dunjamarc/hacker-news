import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import HomePage from './HomePage/HomePage';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header/>
				<HomePage/>
			</React.Fragment>
		);
	}
}

export default App;
