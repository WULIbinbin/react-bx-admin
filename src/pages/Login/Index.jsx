
import React from 'react'
import { Button } from 'antd'

export default class Home extends React.Component {
  constructor() {
    super()
  }
  handleTo(){
    if(this.props.history)this.props.history.replace('/index')
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleTo.bind(this)}>登录</Button>
      </div>
    )
  }
}
