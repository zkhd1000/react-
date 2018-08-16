import React, { Component } from 'react'
import { Button } from "antd-mobile";
export default class NotFound extends Component {
  render() {
    return (
      <div>
        <div>
            <h2>抱歉,该页面不存在</h2>
            <Button
            type='primary'
            onClick={()=>this.props.history.replace('/')}
            >回到首页
            </Button>
        </div>
      </div>
    )
  }
}
