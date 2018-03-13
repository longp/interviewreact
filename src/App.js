import React, { Component } from 'react';
import Header from './components/Header/Header.js'
import InterviewList from './containers/InterviewList/InterviewList.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
		<div>
			<Header />
			<InterviewList />
		</div>
    );
  }
}

export default App;
