
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';


export default class App extends React.Component {
	constructor() {
		super()
	}
	render() {
		return (
			<Router>
				<div>
					<ul>
						<li>
							<Link to="/">首页</Link>
						</li>
						<li>
							<Link to="/about">关于</Link>
						</li>
					</ul>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
				</div>
			</Router>
		)
	}
}

