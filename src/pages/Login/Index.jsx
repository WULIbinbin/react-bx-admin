
import React from 'react'
import { Button } from 'antd'


export default class Home extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Button type="primary" loading={true}>登录</Button>
      </div>
    )
  }
}
