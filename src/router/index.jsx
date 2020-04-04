import React from "react"
import { Switch, Route, Link } from 'react-router-dom';

export const RenderRoutes = (props) => {
  let {routes} = props
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
