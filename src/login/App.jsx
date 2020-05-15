
import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RenderRoutes } from './router/index';
import { otherPath, IndexRoute, mainPath, tabPath } from './router/routes'
import { RenderTab } from './router/tab'
import { createBrowserHistory } from 'history'
import Index from "./pages/index/index";
import './styles/main.less'
const history = createBrowserHistory();

const App = (props) => {
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

	return (
		<Router>
			<RenderTab routes={tabPath}></RenderTab>
			<Switch>
				<RenderRoutes routes={IndexRoute} />
			</Switch>
		</Router>
	)
}

export default App

