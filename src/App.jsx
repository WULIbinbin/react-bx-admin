
import React from 'react'
import { routePath, tabPath } from './router/routes'
import { RenderRoutes } from './router/index';
import { RenderTab } from './router/tab'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
			history.push('/login')
		}
	}
	render() {
		let {loading} = this.state
		return (
			<Router>
				{
					!loading
					&& <div className='bx-main'>
						<RenderTab routes={tabPath}></RenderTab>
						<RenderRoutes routes={routePath}></RenderRoutes>
					</div>
				}
			</Router>
		)
	}
}

export default App

