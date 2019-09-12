import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




export class RenderRoutes extends React.Component {
  constructor() {
    super()
  }

  render() {
    let { routes } = this.props
    return (
      <div>
        {
          routes.map((route, i) =>
            <RouteWithSubRoutes key={i} {...route} />
          )
        }
      </div>
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
