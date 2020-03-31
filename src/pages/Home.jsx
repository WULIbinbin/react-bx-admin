
import React from 'react'
import { routePath, tabPath } from '../router/routes'
import { RenderRoutes } from '../router/index';
import { RenderTab } from '../router/tab'

export default class Home extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className='bx-main'>
        <RenderTab routes={tabPath}></RenderTab>
        <RenderRoutes routes={routePath}></RenderRoutes>
      </div>
    )
  }
}
