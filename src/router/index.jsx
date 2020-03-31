import React from "react"
import { Switch, Route, Link } from 'react-router-dom';
import Tabs from './tab'



export class RenderRoutes extends React.Component {
  constructor() {
    super()
  }

  render() {
    let { routes } = this.props
    return (
      <Switch>
        {
          routes.map((route, i) =>
            <RouteWithSubRoutes key={i} {...route} />
          )
        }
      </Switch>
    )
  }
};


export const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => {
      return (
        <route.component {...props} routes={route.routes} />
      )
    }}
  />
);
