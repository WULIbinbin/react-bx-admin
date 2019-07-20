import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../styles/tab.scss'

export class RenderTab extends React.Component {
  static propTypes = {
    routes: PropTypes.array.isRequired
  }
  render() {
    let { routes } = this.props
    console.log(routes)
    return (
      <div className='bx-tab'>
        {
          routes.map((route, i) =>
            <RouteWithTabRoutes key={i} {...route} />
          )
        }
      </div>
    )
  }
}

export const RouteWithTabRoutes = route => (
  <Link to={route.path}>{route.name}</Link>
);