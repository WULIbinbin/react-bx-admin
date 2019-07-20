import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';




export class RenderRoutes extends React.Component {
  static propTypes = {
    routes: PropTypes.array.isRequired
  }
  constructor(props) {
    super(props)
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


export const RouteWithSubRoutes = route => (
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
