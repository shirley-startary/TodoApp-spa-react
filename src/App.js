import React from 'react';
//import logo from './logo.svg';
import './App.css';

import TodoNew from './pages/TodoNew';
import Error from './pages/Error404';

import Layout from './components/Layout';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import TodoNew from './pages/TodoNew';

class App extends React.Component {
	render () {
		
	return (
    <Router>
			<Layout>
				<Switch className="container">
					<Route exact path="/" component={TodoNew} />
					<Route exact path="/Active" component={TodoNew}/>
					<Route exact path="/Completed" component={TodoNew}/>
					<Route component={Error}/>
				</Switch>
			</Layout>
		</Router>
  )};
}

export default App;
