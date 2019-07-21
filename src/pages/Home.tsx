
import React from 'react'
import { Button } from 'antd'


interface Props { }
export default class Home extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
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
