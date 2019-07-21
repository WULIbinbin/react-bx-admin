import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../styles/tab.less'


interface Props {
  routes: Array<object>
}
export class RenderTab extends React.Component<Props> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    let { routes } = this.props
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

export const RouteWithTabRoutes = (route) => (
  <Link to={route.path}>{route.name}</Link>
);