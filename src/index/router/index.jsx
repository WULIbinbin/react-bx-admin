import React from "react"
import {Route} from 'react-router-dom'

export const RenderRoutes = (props) => {
  let { routes } = props
  return (
    routes.map((route, i) =>
      <RouteWithSubRoutes key={i} {...route} />
    )
  )
}


export const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    exact={route.exact}
    component={route.component}
  >
  </Route>
)

