
import React from 'react'
import { Button } from 'antd'


export default class Home extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Button type="primary" loading={true}>
          Loading
        </Button>
      </div>
    )
  }
}
