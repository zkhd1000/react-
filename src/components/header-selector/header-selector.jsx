import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List,Grid } from "antd-mobile";

export default class HeaderSelector extends Component {
  static proptypes={
    setHeader :PropTypes.func.isRequired
  }
  state = {
    icon:null
  }
  constructor(props) {
    super(props);
    this.headerList=[]
    for (let i = 0; i < 20; i++) {
      const text=`头像${i+1}`
      this.headerList.push({text,icon:require(`./images/${text}.png`)})     
    }
  }

  selectHeader= ({icon,text}) =>{
    this.setState({icon})
    this.props.setHeader(text)
  }
  render() {
    const {icon} =this.state
    const gridHeader =icon?<p>已选择头像:<img src={icon} alt='header'/></p>:'请选择头像'

    return (
      <List renderHeader={() => gridHeader}>
      <Grid data={this.headerList}
            columnNum={5}
            onClick={this.selectHeader}/>
    </List>

    )
  }
}
