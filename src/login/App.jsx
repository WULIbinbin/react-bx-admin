
import React, { useState,useEffect } from 'react'
import { HashRouter as Router, Switch } from 'react-router-dom';
import { RenderRoutes } from './router/index';
import { IndexRoute } from './router/routes'
import { createBrowserHistory } from 'history'
import './styles/main.less'
const history = createBrowserHistory();

class App extends React.Component{
	// const [isLogin,setLoginState] = useState({login:false})
	// const [loading,setLoading] = useState(true)

	// useEffect(()=>{
	// 	const storage = localStorage.getItem('user_storage')
	// 	if(storage){
	// 		setLoginState({login:true})
	// 		setLoading(false)
	// 	}else{
	// 		setLoading(false)
	// 	}
	// },[loading])
	componentWillMount(){
		console.log(this)
	}

	render(){
		return (
			<Router>
				<Switch>
					<RenderRoutes routes={IndexRoute} />
				</Switch>
			</Router>
		)
	}
}

export default App

