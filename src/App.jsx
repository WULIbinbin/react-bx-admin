
import React from 'react'
import { routePath, tabPath } from './router/routes'
import { RenderRoutes } from './router/index';
import { RenderTab } from './router/tab'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './styles/index.scss'

export default class App extends React.Component {
	constructor() {
		super()
	}
	render() {
		return (
			<Router>
				<div className='bx-main'>
					<RenderTab routes={tabPath}></RenderTab>
					<RenderRoutes routes={routePath}></RenderRoutes>
				</div>
			</Router>
		)
	}
}

