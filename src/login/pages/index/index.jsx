
import React from 'react'
import { IndexRoute, tabPath } from '../../router/routes'
import { RenderRoutes } from '../../router/index';
import { RenderTab } from '../../router/tab'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log(this.props)
  }


  render() {
    return (
      <div className='bx-main'>
        2333
        <RenderRoutes routes={IndexRoute} />
      </div>
    )
  }
}
