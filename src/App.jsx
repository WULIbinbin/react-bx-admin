
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { RenderRoutes } from './router/index';
import { routePath } from './router/routes'
import {createBrowserHistory} from 'history'
import './styles/main.less'
const history = createBrowserHistory();
class App extends React.Component {
	constructor() {
		super()
		this.state = {
			loading: true
		}
	}
	componentWillMount() {
		let userData = localStorage.getItem('user_data')
		if(userData){
			this.setState({
				loading:false
			})
		}else{
			console.log(this)
			this.setState({
				loading:false
			})
			history.replace('/login')
		}
	}
	render() {
		let {loading} = this.state
		return (
			<Router>
				<RenderRoutes routes={routePath} />
			</Router>
		)
	}
}

export default App

