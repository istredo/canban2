import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainBlock from './components/MainBlock';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<div className="main-container">
				<Navigation />
				<MainBlock />
				<MainBlock />
				<MainBlock />
			</div>
			<Footer />
		</div>
	);
}

export default App;
